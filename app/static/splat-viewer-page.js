const root = document.getElementById('viewerRoot');
const status = document.getElementById('status');

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

    const { mountSplatViewer } = await import('/static/dist/splat-viewer.js?v=3');
    await mountSplatViewer(root, { url: assetUrl });
  } catch (error) {
    console.error(error);
    status.hidden = false;
    status.classList.add('error');
    status.textContent = error?.message || 'Failed to load splat viewer.';
  }
}

boot();
