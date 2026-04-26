const $ = (id) => document.getElementById(id);

let timer = null;
let panoramaViewer = null;
let activePanoramaUrl = null;
let panoramaLoadPromise = null;
let referenceFiles = [];
let activeJobId = null;
let viewerAssetTimer = null;
let immersiveViewer = null;
let scenePendingDelete = null;

const viewerModulePromise = import('/static/panorama-viewer.js?v=4');
const splatViewerModulePromise = import('/static/dist/splat-viewer.js?v=4');

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
    complete: 'Preview ready',
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

function renderScenes(scenes) {
  if (!scenes.length) {
    $('sceneGrid').innerHTML = '<div class="subtle">No high-fidelity renders yet. Generate a preview, then build a high-fidelity render to add it here.</div>';
    return;
  }

  $('sceneGrid').innerHTML = scenes.map((scene) => `
    <div class="scene-card">
      <button class="scene-open" type="button" data-scene-viewer="${escapeHtml(scene.viewer_url)}" aria-label="Open high-fidelity render ${escapeHtml(scene.id)}">
        <img src="/api/jobs/${encodeURIComponent(scene.id)}/files/${encodeURIComponent(scene.thumbnail)}" alt="" loading="lazy" />
      </button>
      <button class="scene-delete" data-delete-scene="${escapeHtml(scene.id)}" type="button" aria-label="Delete scene ${escapeHtml(scene.id)}">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16" stroke-width="2" stroke-linecap="round"/>
          <path d="M10 11v6M14 11v6" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 7l1 14h10l1-14M9 7V4h6v3" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `).join('');
}

async function loadScenes() {
  const r = await fetch('/api/scenes');
  if (!r.ok) {
    $('sceneGrid').innerHTML = '<div class="subtle">Could not load saved high-fidelity renders.</div>';
    return;
  }
  renderScenes(await r.json());
}

async function deleteScene(jobId) {
  $('confirmDeleteScene').disabled = true;
  $('deleteSceneError').hidden = true;
  $('deleteSceneError').textContent = '';
  const response = await fetch(`/api/jobs/${encodeURIComponent(jobId)}`, { method: 'DELETE' });
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Delete failed' }));
    $('deleteSceneError').textContent = typeof error.detail === 'string' ? error.detail : 'Delete failed.';
    $('deleteSceneError').hidden = false;
    $('confirmDeleteScene').disabled = false;
    return;
  }
  if (activeJobId === jobId) {
    activeJobId = null;
    clearPreview();
    $('artifacts').innerHTML = '';
    $('status').innerHTML = renderStageCard({
      title: 'Scene deleted',
      message: 'The run data was removed from disk.',
      tone: 'good',
    });
  }
  closeDeleteSceneModal();
  await loadScenes();
}

function openDeleteSceneModal(jobId) {
  scenePendingDelete = jobId;
  $('deleteSceneError').hidden = true;
  $('deleteSceneError').textContent = '';
  $('confirmDeleteScene').disabled = false;
  $('deleteSceneModal').hidden = false;
  $('confirmDeleteScene').focus({ preventScroll: true });
}

function closeDeleteSceneModal() {
  scenePendingDelete = null;
  $('deleteSceneModal').hidden = true;
  $('confirmDeleteScene').disabled = false;
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
      ${check.name === 'Apple SHARP CLI' ? '<code class="check-command">uv run sharp --help</code>' : ''}
    </div>
  `).join('');
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

  if (!fullscreenElement() && !$('immersiveOverlay').hidden) {
    closeImmersiveViewer({ exitFullscreen: false }).catch((error) => console.error(error));
  }
  window.setTimeout(() => {
    if (!fullscreenElement() && !$('immersiveOverlay').hidden) {
      closeImmersiveViewer({ exitFullscreen: false }).catch((error) => console.error(error));
    }
  }, 0);
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
    title: 'Waiting for preview',
    message: 'Generate a preview first, then build the high-fidelity render.',
  });
  $('prepareSplatViewer').disabled = false;
  $('prepareSplatViewer').textContent = 'Build high-fidelity render';
  $('prepareSplatViewer').hidden = false;
  $('openSplatViewer').hidden = true;
}

async function loadViewerManifest(jobId) {
  const response = await fetch(`/api/jobs/${jobId}/files/viewer/manifest.json`);
  if (!response.ok) {
    throw new Error('High-fidelity render is not ready yet.');
  }
  return response.json();
}

async function closeImmersiveViewer({ exitFullscreen: shouldExitFullscreen = true } = {}) {
  $('immersiveOverlay').hidden = true;
  $('immersiveOverlay').style.display = 'none';
  $('immersiveOverlay').style.visibility = 'hidden';
  $('immersiveRoot').replaceChildren();
  const viewerToDispose = immersiveViewer;
  immersiveViewer = null;

  if (shouldExitFullscreen && fullscreenElement() === $('immersiveOverlay')) {
    await exitFullscreen();
  }
  if (viewerToDispose) {
    viewerToDispose.dispose().catch((error) => console.error(error));
  }
}

async function openImmersiveViewer(jobId) {
  $('immersiveOverlay').hidden = false;
  $('immersiveOverlay').style.display = '';
  $('immersiveOverlay').style.visibility = '';
  $('immersiveRoot').replaceChildren();
  $('immersiveRoot').focus({ preventScroll: true });

  try {
    if (fullscreenElement() !== $('immersiveOverlay')) {
      await requestFullscreen($('immersiveOverlay'));
    }
  } catch (error) {
    console.warn(error);
  }

  try {
    const manifest = await loadViewerManifest(jobId);
    const { mountSplatViewer } = await splatViewerModulePromise;
    immersiveViewer = await mountSplatViewer($('immersiveRoot'), {
      url: `/api/jobs/${jobId}/files/${manifest.asset}`,
    });
  } catch (error) {
    console.error(error);
    $('immersiveRoot').innerHTML = `<div class="viewer-chip error" style="position:absolute;left:18px;top:18px;">${escapeHtml(error?.message || 'Failed to load high-fidelity render.')}</div>`;
  }
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
      $('viewerCanvas').innerHTML = `<img src="${panoramaUrl}" alt="Generated 360 preview" />`;
      $('viewerLoading').hidden = true;
      $('viewerError').hidden = false;
      $('viewerError').textContent = `Interactive viewer unavailable here: ${error?.message || 'unknown viewer error'}. Showing the flat preview instead.`;
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
    world: 'Building high-fidelity world',
    splat: 'Exporting high-fidelity render',
    ready: 'High-fidelity render ready',
    failed: 'High-fidelity render build failed',
    missing: 'Ready when you are',
  };
  const progress = status.progress?.percent !== undefined ? status.progress : null;
  const manifest = status.manifest || {};
  const meta = [];
  if (progress?.processed !== undefined && progress?.total !== undefined) {
    meta.push(`${Number(progress.processed).toLocaleString()} / ${Number(progress.total).toLocaleString()} render points`);
  }
  if (manifest.splat_count) {
    meta.push(`${Number(manifest.splat_count).toLocaleString()} render points`);
  }
  if (manifest.asset_bytes) {
    meta.push(formatBytes(manifest.asset_bytes));
  }
  if (status.artifacts?.viewer_splat) {
    meta.push('browser-ready render asset');
  }

  $('splatStatus').innerHTML = renderStageCard({
    title: stageTitles[status.stage] || stageTitles[status.state] || 'High-fidelity render',
    message: status.message || 'Build the high-fidelity render when this preview is worth reconstructing.',
    tone: failed ? 'bad' : (ready ? 'good' : 'neutral'),
    meta,
    progress,
  });

  $('prepareSplatViewer').disabled = preparing;
  $('prepareSplatViewer').textContent = failed ? 'Retry high-fidelity render build' : 'Build high-fidelity render';
  $('prepareSplatViewer').hidden = ready;
  $('openSplatViewer').hidden = !ready;
  $('openSplatViewer').dataset.jobId = ready ? jobId : '';
  if (ready) {
    loadScenes().catch((error) => console.error(error));
  }

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
    title: 'Queueing high-fidelity render',
    message: 'The app will run SHARP if needed, then export the browser-ready high-fidelity render.',
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
  const status = await r.json().catch(() => ({ state: 'failed', message: 'Failed to prepare high-fidelity render.' }));
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
    message: 'Preparing the preview request.',
  });

  const prompt = $('prompt').value.trim();
  if (!prompt) {
    $('status').innerHTML = renderStageCard({
      title: 'Prompt needed',
      message: 'Enter a scene prompt to generate a preview.',
      tone: 'bad',
    });
    $('start').disabled = false;
    return;
  }

  const body = new FormData();
  body.append('prompt', prompt);
  body.append('size', '3840x1920');
  body.append('quality', $('quality').value);
  body.append('source_panorama_path', '');
  body.append('reference_image_urls', $('referenceImageUrls').value);
  body.append('preset', $('preset').value);
  body.append('crop_size', String(Number($('cropSize').value)));
  body.append('output_format', 'png');
  body.append('merge', 'true');
  body.append('run_reconstruction', 'false');

  referenceFiles.forEach((file) => body.append('reference_images', file, file.name));

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
  $('refreshScenes').onclick = () => loadScenes().catch((error) => console.error(error));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('immersiveOverlay').hidden) {
      closeImmersiveViewer().catch((error) => console.error(error));
    }
  });
  $('sceneGrid').onclick = (event) => {
    const deleteButton = event.target.closest('[data-delete-scene]');
    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();
      openDeleteSceneModal(deleteButton.dataset.deleteScene);
      return;
    }
    const card = event.target.closest('[data-scene-viewer]');
    if (!card) {
      return;
    }
    openImmersiveViewer(card.dataset.sceneViewer.split('/').pop()).catch((error) => console.error(error));
  };
  $('cancelDeleteScene').onclick = closeDeleteSceneModal;
  $('deleteSceneModal').onclick = (event) => {
    if (event.target === $('deleteSceneModal')) {
      closeDeleteSceneModal();
    }
  };
  $('confirmDeleteScene').onclick = () => {
    if (scenePendingDelete) {
      deleteScene(scenePendingDelete).catch((error) => console.error(error));
    }
  };
  $('openSplatViewer').onclick = () => {
    const jobId = $('openSplatViewer').dataset.jobId || activeJobId;
    if (jobId) {
      openImmersiveViewer(jobId).catch((error) => console.error(error));
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
  loadScenes().catch((error) => console.error(error));

  const params = new URLSearchParams(window.location.search);
  const initialJobId = params.get('job');
  if (initialJobId) {
    loadExistingRun(initialJobId).catch((error) => console.error(error));
  }
}

boot();
