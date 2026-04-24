const $ = (id) => document.getElementById(id);

let timer = null;
let panoramaViewer = null;
let activePanoramaUrl = null;
let panoramaLoadPromise = null;
let referenceFiles = [];

const viewerModulePromise = import('/static/panorama-viewer.js?v=4');

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function fileLink(jobId, relPath, label) {
  return `<div class="artifact"><a href="/api/jobs/${jobId}/files/${relPath}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a><br><small>${escapeHtml(relPath)}</small></div>`;
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
    $('status').textContent = `Run ${jobId} not found`;
    $('artifacts').innerHTML = '';
    clearPreview();
    throw new Error(`Run ${jobId} not found`);
  }

  const status = await r.json();
  $('existingJobId').value = jobId;
  setRunUrl(jobId);
  $('status').textContent = JSON.stringify(status, null, 2);

  const artifacts = status.artifacts || {};
  $('artifacts').innerHTML = Object.entries(artifacts)
    .map(([name, relPath]) => fileLink(jobId, relPath, name))
    .join('');

  if (artifacts.panorama) {
    await renderPanoramaViewer(jobId, artifacts.panorama);
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
  $('status').textContent = 'Creating job...';

  const sourcePanoramaPath = $('sourcePanoramaPath').value.trim();
  const prompt = $('prompt').value.trim() || (sourcePanoramaPath ? `Imported panorama: ${sourcePanoramaPath.split('/').pop()}` : '');
  if (!prompt) {
    $('status').textContent = 'Enter a scene prompt or provide an existing panorama path.';
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

  if (!sourcePanoramaPath) {
    referenceFiles.forEach((file) => body.append('reference_images', file, file.name));
  }

  const r = await fetch('/api/jobs/form', {
    method: 'POST',
    body,
  });
  if (!r.ok) {
    const error = await r.json().catch(() => ({ detail: 'Job creation failed' }));
    $('status').textContent = typeof error.detail === 'string' ? error.detail : JSON.stringify(error.detail, null, 2);
    $('start').disabled = false;
    return;
  }

  const status = await r.json();
  $('status').textContent = JSON.stringify(status, null, 2);
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
