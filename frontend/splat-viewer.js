import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

export async function mountSplatViewer(rootElement, options) {
  const viewer = new GaussianSplats3D.Viewer({
    rootElement,
    cameraUp: [0, 1, 0],
    initialCameraPosition: [0, 0, 6],
    initialCameraLookAt: [0, 0, 0],
    sharedMemoryForWorkers: false,
    gpuAcceleratedSort: false,
    integerBasedSort: false,
    renderMode: GaussianSplats3D.RenderMode.Always,
    sceneRevealMode: GaussianSplats3D.SceneRevealMode.Default,
    logLevel: GaussianSplats3D.LogLevel.None,
  });

  await viewer.addSplatScene(options.url, {
    format: GaussianSplats3D.SceneFormat.Splat,
    progressiveLoad: true,
    showLoadingUI: true,
    splatAlphaRemovalThreshold: 1,
  });
  viewer.start();

  return {
    viewer,
    async dispose() {
      await viewer.dispose();
      rootElement.replaceChildren();
    },
  };
}
