const $ = (id) => document.getElementById(id);

let timer = null;
let panoramaViewer = null;
let activePanoramaUrl = null;
let panoramaLoadPromise = null;
let referenceFiles = [];
let activeJobId = null;
let viewerAssetTimer = null;

const viewerModulePromise = import('/static/panorama-viewer.js?v=4');

function escapeHtml(text) {
  return String(text ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function fileLink(jobId, relPath, label) {
  return `<div class="artifact"><a href="/api/jobs/${jobId}/files/${relPath}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a><br><small>${escapeHtml(relPath)}</small></div>`;
}

function formatBytes(bytes) {
  if (!Number.isFinite(Number(bytes))) {
    return '';
  }
  const units = ['bytes', 'KB', 'MB', 'GB'];
  let value = Number(bytes);
  let unit = units.shift();
  while (value >= 1024 && units.length) {
    value /= 1024;
    unit = units.shift();
  }
  const precision = value >= 10 || unit === 'bytes' ? 0 : 1;
  return `${value.toFixed(precision)} ${unit}`;
}

function renderStageCard({ title, message, tone = 'neutral', meta = [], progress = null }) {
  const metaHtml = meta.filter(Boolean)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join('');
  const progressHtml = progress
    ? `<div class="progress-bar" aria-label="Progress"><div class="progress-fill" style="width: ${Math.max(0, Math.min(100, Number(progress.percent || 0)))}%"></div></div>`
    : '';

  return `
    <div class="stage-status ${escapeHtml(tone)}">
      <div class="stage-title">${escapeHtml(title)}</div>
      <div class="stage-message">${escapeHtml(message)}</div>
      ${metaHtml ? `<div class="stage-meta">${metaHtml}</div>` : ''}
      ${progressHtml}
    </div>
  `;
}

function renderJobStatus(status) {
  const titles = {
    queued: 'Queued',
    running: 'Working',
    complete: 'Panorama ready',
    failed: 'Run failed',
  };
  const tone = status.state === 'failed' ? 'bad' : (status.state === 'complete' ? 'good' : 'neutral');
  const artifactCount = Object.keys(status.artifacts || {}).length;
  $('status').innerHTML = renderStageCard({
    title: titles[status.state] || 'Job status',
    message: status.message || 'Waiting for the next step.',
    tone,
    meta: [
      `Run ${status.id}`,
      artifactCount === 1 ? '1 artifact' : `${artifactCount} artifacts`,
    ],
  });
}

function renderReferenceFiles() {
  if (!referenceFiles.length) {
    $('referenceFileList').innerHTML = '<small>No files selected</small>';
    return;
  }

  $('referenceFileList').innerHTML = referenceFiles.map((file, index) => `
    <span class="reference-file">
      ${escapeHtml(file.name)}
      <button class="reference-remove" type="button" data-reference-index="${index}" aria-label="Remove ${escapeHtml(file.name)}">x</button>
    </span>
  `).join('');
}

function addReferenceFiles(files) {
  const incoming = Array.from(files).filter((file) => file.type.startsWith('image/'));
  referenceFiles = [...referenceFiles, ...incoming].slice(0, 16);
  renderReferenceFiles();
}

function renderSetup(setup) {
  $('setupSummary').textContent = setup.ready ? 'Runtime ready' : 'Runtime needs attention';
  $('setupSummary').style.color = setup.ready ? '#9df4b6' : '#ffb067';

  $('setupChecks').innerHTML = setup.checks.map((check) => `
    <div class="check">
      <div class="check-head">
        <span>${escapeHtml(check.name)}</span>
        <span class="check-badge ${check.ok ? 'ok' : 'fail'}">${check.ok ? 'ok' : 'fix'}</span>
      </div>
      <div class="check-detail">${escapeHtml(check.detail)}</div>
    </div>
  `).join('');

  $('setupCommands').innerHTML = setup.recommended_commands
    .map((command) => `<code class="command">${escapeHtml(command)}</code>`)
    .join('');
}

async function loadSetup() {
  const r = await fetch('/api/setup');
  const setup = await r.json();
  renderSetup(setup);
}

function setRunUrl(jobId) {
  const url = new URL(window.location.href);
  url.searchParams.set('job', jobId);
  window.history.replaceState({}, '', url);
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

async function requestFullscreen(element) {
  if (element.requestFullscreen) {
    return element.requestFullscreen();
  }
  if (element.webkitRequestFullscreen) {
    return element.webkitRequestFullscreen();
  }
  throw new Error('Fullscreen is not available in this browser.');
}

async function exitFullscreen() {
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  }
  if (document.webkitExitFullscreen) {
    return document.webkitExitFullscreen();
  }
}

function updateFullscreenState() {
  const isFullscreen = fullscreenElement() === $('viewerSurface');
  $('fullscreenButton').textContent = isFullscreen ? 'Exit fullscreen' : 'Fullscreen';
  panoramaViewer?.setFullscreenMode(isFullscreen);
  if (isFullscreen) {
    $('viewerSurface').focus({ preventScroll: true });
  }
}

function clearPreview() {
  if (panoramaViewer) {
    panoramaViewer.destroy();
    panoramaViewer = null;
  }
  panoramaLoadPromise = null;
  activePanoramaUrl = null;
  $('viewerCanvas').replaceChildren();
  $('viewerLoading').hidden = true;
  $('viewerError').hidden = true;
  $('viewerError').textContent = '';
  $('preview').hidden = true;
  clearViewerAssetPanel();
}

function clearViewerAssetPanel() {
  clearInterval(viewerAssetTimer);
  viewerAssetTimer = null;
  $('splatPanel').hidden = true;
  $('splatStatus').innerHTML = renderStageCard({
    title: 'Waiting for panorama',
    message: 'Generate or load a panorama first, then build the full-fidelity viewer.',
  });
  $('prepareSplatViewer').disabled = false;
  $('prepareSplatViewer').textContent = 'Build full-fidelity viewer';
  $('openSplatViewer').hidden = true;
  $('openSplatViewer').href = '#';
}

async function renderPanoramaViewer(jobId, relPath) {
  const panoramaUrl = `/api/jobs/${jobId}/files/${relPath}`;
  $('preview').hidden = false;
  $('viewerRawLink').href = panoramaUrl;

  if (activePanoramaUrl === panoramaUrl && panoramaViewer) {
    $('viewerLoading').hidden = true;
    $('viewerError').hidden = true;
    return;
  }

  if (activePanoramaUrl === panoramaUrl && panoramaLoadPromise) {
    return panoramaLoadPromise;
  }

  if (panoramaViewer) {
    panoramaViewer.destroy();
    panoramaViewer = null;
  }

  activePanoramaUrl = panoramaUrl;
  $('viewerCanvas').replaceChildren();
  $('viewerLoading').hidden = false;
  $('viewerError').hidden = true;
  $('viewerError').textContent = '';

  panoramaLoadPromise = (async () => {
    try {
      const { PanoramaViewer } = await viewerModulePromise;
      panoramaViewer = new PanoramaViewer($('viewerCanvas'), {
        onDraggingChange: (dragging) => {
          $('viewerSurface').classList.toggle('is-dragging', dragging);
        },
      });
      await panoramaViewer.load(panoramaUrl);
      $('viewerLoading').hidden = true;
      $('viewerSurface').focus({ preventScroll: true });
    } catch (error) {
      console.error(error);
      panoramaViewer = null;
      $('viewerCanvas').innerHTML = `<img src="${panoramaUrl}" alt="Generated panorama preview" />`;
      $('viewerLoading').hidden = true;
      $('viewerError').hidden = false;
      $('viewerError').textContent = `Interactive viewer unavailable here: ${error?.message || 'unknown viewer error'}. Showing the flat panorama instead.`;
    } finally {
      panoramaLoadPromise = null;
    }
  })();

  return panoramaLoadPromise;
}

async function poll(jobId) {
  const r = await fetch(`/api/jobs/${jobId}`);
  if (!r.ok) {
    $('status').innerHTML = renderStageCard({
      title: 'Run not found',
      message: `Run ${jobId} was not found.`,
      tone: 'bad',
    });
    $('artifacts').innerHTML = '';
    clearPreview();
    throw new Error(`Run ${jobId} not found`);
  }

  const status = await r.json();
  activeJobId = jobId;
  $('existingJobId').value = jobId;
  setRunUrl(jobId);
  renderJobStatus(status);

  const artifacts = status.artifacts || {};
  $('artifacts').innerHTML = Object.entries(artifacts)
    .map(([name, relPath]) => fileLink(jobId, relPath, name))
    .join('');

  if (artifacts.panorama) {
    await renderPanoramaViewer(jobId, artifacts.panorama);
    await refreshViewerAssets(jobId);
  } else {
    clearPreview();
  }

  if (status.state === 'complete' || status.state === 'failed') {
    clearInterval(timer);
    $('start').disabled = false;
    await loadSetup();
  }

  return status;
}

function renderViewerAssetStatus(jobId, status) {
  $('splatPanel').hidden = false;
  const ready = status.state === 'ready' && status.artifacts?.viewer_splat;
  const preparing = status.state === 'preparing';
  const failed = status.state === 'failed';
  const stageTitles = {
    world: 'Building Gaussian splat world',
    splat: 'Exporting browser splat asset',
    ready: 'Full-fidelity viewer ready',
    failed: 'Full-fidelity build failed',
    missing: 'Ready when you are',
  };
  const progress = status.progress?.percent !== undefined ? status.progress : null;
  const manifest = status.manifest || {};
  const meta = [];
  if (progress?.processed !== undefined && progress?.total !== undefined) {
    meta.push(`${Number(progress.processed).toLocaleString()} / ${Number(progress.total).toLocaleString()} splats`);
  }
  if (manifest.splat_count) {
    meta.push(`${Number(manifest.splat_count).toLocaleString()} splats`);
  }
  if (manifest.asset_bytes) {
    meta.push(formatBytes(manifest.asset_bytes));
  }
  if (status.artifacts?.viewer_splat) {
    meta.push(status.artifacts.viewer_splat);
  }

  $('splatStatus').innerHTML = renderStageCard({
    title: stageTitles[status.stage] || stageTitles[status.state] || 'Full-fidelity viewer',
    message: status.message || 'Build the full-fidelity viewer when this panorama is worth reconstructing.',
    tone: failed ? 'bad' : (ready ? 'good' : 'neutral'),
    meta,
    progress,
  });

  $('prepareSplatViewer').disabled = preparing;
  $('prepareSplatViewer').textContent = failed ? 'Retry full-fidelity viewer build' : 'Build full-fidelity viewer';
  $('openSplatViewer').hidden = !ready;
  $('openSplatViewer').href = ready ? `/viewer/${jobId}` : '#';

  if (preparing && !viewerAssetTimer) {
    viewerAssetTimer = setInterval(() => refreshViewerAssets(jobId), 2500);
  }
  if (!preparing) {
    clearInterval(viewerAssetTimer);
    viewerAssetTimer = null;
  }
}

async function refreshViewerAssets(jobId) {
  const r = await fetch(`/api/jobs/${jobId}/viewer-assets`);
  if (!r.ok) {
    return;
  }
  renderViewerAssetStatus(jobId, await r.json());
}

async function prepareViewerAssets() {
  if (!activeJobId) {
    return;
  }
  $('prepareSplatViewer').disabled = true;
  $('splatStatus').innerHTML = renderStageCard({
    title: 'Queueing full-fidelity viewer',
    message: 'The app will run SHARP/world.ply if needed, then export the browser .splat asset.',
  });

  const r = await fetch(`/api/jobs/${activeJobId}/viewer-assets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      preset: $('preset').value,
      crop_size: Number($('cropSize').value),
      face_fov_deg: 80.0,
      merge: true,
    }),
  });
  const status = await r.json().catch(() => ({ state: 'failed', message: 'Failed to prepare viewer asset.' }));
  if (!r.ok) {
    status.state = 'failed';
    status.stage = 'failed';
    status.message = typeof status.detail === 'string' ? status.detail : status.message;
  }
  renderViewerAssetStatus(activeJobId, status);
}

async function loadExistingRun(jobId) {
  const trimmed = jobId.trim();
  if (!trimmed) {
    return;
  }

  clearInterval(timer);
  $('start').disabled = false;
  const status = await poll(trimmed);
  if (status.state !== 'complete' && status.state !== 'failed') {
    timer = setInterval(() => poll(trimmed), 2500);
  }
}

async function startJob() {
  $('start').disabled = true;
  clearInterval(timer);
  clearPreview();
  $('artifacts').innerHTML = '';
  $('status').innerHTML = renderStageCard({
    title: 'Creating job',
    message: 'Preparing the panorama request.',
  });

  const sourcePanoramaPath = $('sourcePanoramaPath').value.trim();
  const prompt = $('prompt').value.trim() || (sourcePanoramaPath ? `Imported panorama: ${sourcePanoramaPath.split('/').pop()}` : '');
  if (!prompt) {
    $('status').innerHTML = renderStageCard({
      title: 'Prompt needed',
      message: 'Enter a scene prompt or provide an existing panorama path.',
      tone: 'bad',
    });
    $('start').disabled = false;
    return;
  }

  const body = new FormData();
  body.append('prompt', prompt);
  body.append('size', $('size').value);
  body.append('quality', $('quality').value);
  body.append('source_panorama_path', sourcePanoramaPath);
  body.append('reference_image_urls', sourcePanoramaPath ? '' : $('referenceImageUrls').value);
  body.append('preset', $('preset').value);
  body.append('crop_size', String(Number($('cropSize').value)));
  body.append('output_format', 'png');
  body.append('merge', 'true');
  body.append('run_reconstruction', 'false');

  if (!sourcePanoramaPath) {
    referenceFiles.forEach((file) => body.append('reference_images', file, file.name));
  }

  const r = await fetch('/api/jobs/form', {
    method: 'POST',
    body,
  });
  if (!r.ok) {
    const error = await r.json().catch(() => ({ detail: 'Job creation failed' }));
    $('status').innerHTML = renderStageCard({
      title: 'Job creation failed',
      message: typeof error.detail === 'string' ? error.detail : 'Job creation failed.',
      tone: 'bad',
    });
    $('start').disabled = false;
    return;
  }

  const status = await r.json();
  renderJobStatus(status);
  timer = setInterval(() => poll(status.id), 2500);
  poll(status.id);
}

function bindReferenceInputs() {
  $('selectReferenceImages').onclick = () => $('referenceImages').click();
  $('referenceImages').onchange = (event) => {
    addReferenceFiles(event.target.files || []);
    event.target.value = '';
  };
  $('referenceFileList').onclick = (event) => {
    const removeButton = event.target.closest('[data-reference-index]');
    if (!removeButton) {
      return;
    }
    referenceFiles.splice(Number(removeButton.dataset.referenceIndex), 1);
    renderReferenceFiles();
  };
  $('referenceDropzone').ondragover = (event) => {
    event.preventDefault();
    $('referenceDropzone').classList.add('is-over');
  };
  $('referenceDropzone').ondragleave = () => {
    $('referenceDropzone').classList.remove('is-over');
  };
  $('referenceDropzone').ondrop = (event) => {
    event.preventDefault();
    $('referenceDropzone').classList.remove('is-over');
    addReferenceFiles(event.dataTransfer.files || []);
  };
}

function bindEvents() {
  $('start').onclick = startJob;
  $('prepareSplatViewer').onclick = prepareViewerAssets;
  $('loadRun').onclick = async () => {
    try {
      await loadExistingRun($('existingJobId').value);
    } catch (error) {
      console.error(error);
    }
  };
  $('fullscreenButton').onclick = async () => {
    try {
      if (fullscreenElement() === $('viewerSurface')) {
        await exitFullscreen();
      } else {
        await requestFullscreen($('viewerSurface'));
      }
    } catch (error) {
      console.error(error);
      $('viewerError').hidden = false;
      $('viewerError').textContent = error?.message || 'Fullscreen is not available in this browser.';
    }
  };

  document.addEventListener('fullscreenchange', updateFullscreenState);
  document.addEventListener('webkitfullscreenchange', updateFullscreenState);
  bindReferenceInputs();
}

function boot() {
  bindEvents();
  renderReferenceFiles();
  loadSetup();

  const params = new URLSearchParams(window.location.search);
  const initialJobId = params.get('job');
  if (initialJobId) {
    loadExistingRun(initialJobId).catch((error) => console.error(error));
  }
}

boot();
