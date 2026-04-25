const root = document.getElementById('viewerRoot');
const status = document.getElementById('status');
const fullscreenButton = document.getElementById('fullscreen');

function jobIdFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  return parts[1] || '';
}

async function loadManifest(jobId) {
  const response = await fetch(`/api/jobs/${jobId}/files/viewer/manifest.json`);
  if (!response.ok) {
    throw new Error('Viewer manifest is not ready. Prepare the full-fidelity viewer asset first.');
  }
  return response.json();
}

async function boot() {
  try {
    const jobId = jobIdFromPath();
    const manifest = await loadManifest(jobId);
    const assetUrl = `/api/jobs/${jobId}/files/${manifest.asset}`;
    status.textContent = `Loading ${manifest.splat_count?.toLocaleString?.() || 'full-fidelity'} splats...`;

    const { mountSplatViewer } = await import('/static/dist/splat-viewer.js?v=2');
    await mountSplatViewer(root, { url: assetUrl });
    status.textContent = `Full-fidelity splat viewer: ${manifest.splat_count?.toLocaleString?.() || 'unknown'} splats`;
  } catch (error) {
    console.error(error);
    status.classList.add('error');
    status.textContent = error?.message || 'Failed to load splat viewer.';
  }
}

fullscreenButton.onclick = async () => {
  try {
    await document.documentElement.requestFullscreen();
  } catch (error) {
    console.error(error);
    status.classList.add('error');
    status.textContent = error?.message || 'Fullscreen is not available in this browser.';
  }
};

boot();
