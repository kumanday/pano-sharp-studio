const root = document.getElementById('viewerRoot');
const status = document.getElementById('status');
const fullscreenToggle = document.getElementById('fullscreenToggle');

function jobIdFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  return parts[1] || '';
}

async function loadManifest(jobId) {
  const response = await fetch(`/api/jobs/${jobId}/files/viewer/manifest.json`);
  if (!response.ok) {
    throw new Error('High-fidelity render is not ready yet.');
  }
  return response.json();
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

function updateFullscreenButton() {
  const isFullscreen = fullscreenElement() === document.documentElement;
  fullscreenToggle.textContent = isFullscreen ? 'x' : '⛶';
  fullscreenToggle.setAttribute('aria-label', isFullscreen ? 'Exit full screen' : 'Enter full screen');
}

async function boot() {
  try {
    const jobId = jobIdFromPath();
    const manifest = await loadManifest(jobId);
    const assetUrl = `/api/jobs/${jobId}/files/${manifest.asset}`;

    const { mountSplatViewer } = await import('/static/dist/splat-viewer.js?v=3');
    await mountSplatViewer(root, { url: assetUrl });
  } catch (error) {
    console.error(error);
    status.hidden = false;
    status.classList.add('error');
    status.textContent = error?.message || 'Failed to load high-fidelity render.';
  }
}

fullscreenToggle.onclick = async () => {
  try {
    if (fullscreenElement() === document.documentElement) {
      await exitFullscreen();
    } else {
      await requestFullscreen(document.documentElement);
    }
  } catch (error) {
    console.error(error);
    status.hidden = false;
    status.classList.add('error');
    status.textContent = error?.message || 'Fullscreen is not available in this browser.';
  }
};
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
updateFullscreenButton();
boot();
