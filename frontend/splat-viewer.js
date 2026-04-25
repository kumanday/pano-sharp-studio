import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import * as THREE from 'three';

const PITCH_LIMIT = Math.PI / 2 - 0.03;
const KEY_STEP = 0.035;
const DRAG_SENSITIVITY = 0.003;

function attachPanoramaControls(rootElement, viewer) {
  const camera = viewer.camera;
  let yaw = 0;
  let pitch = 0;
  let dragging = false;
  let lastPointer = null;
  const pressed = new Set();
  let animationFrame = null;
  const lookTarget = new THREE.Vector3();
  const resizeObserver = new ResizeObserver(() => {
    camera.aspect = rootElement.clientWidth / rootElement.clientHeight;
    camera.updateProjectionMatrix();
    viewer.forceRenderNextFrame();
  });

  rootElement.tabIndex = 0;

  function applyCamera() {
    pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, pitch));
    lookTarget.set(
      Math.sin(yaw) * Math.cos(pitch),
      -Math.sin(pitch),
      Math.cos(yaw) * Math.cos(pitch),
    );
    camera.position.set(0, 0, 0);
    camera.up.set(0, -1, 0);
    camera.lookAt(lookTarget);
    viewer.forceRenderNextFrame();
  }

  function tick() {
    let changed = false;
    if (pressed.has('KeyA') || pressed.has('ArrowLeft')) {
      yaw -= KEY_STEP;
      changed = true;
    }
    if (pressed.has('KeyD') || pressed.has('ArrowRight')) {
      yaw += KEY_STEP;
      changed = true;
    }
    if (pressed.has('KeyW') || pressed.has('ArrowUp')) {
      pitch += KEY_STEP;
      changed = true;
    }
    if (pressed.has('KeyS') || pressed.has('ArrowDown')) {
      pitch -= KEY_STEP;
      changed = true;
    }
    if (changed) {
      applyCamera();
    }
    animationFrame = pressed.size ? requestAnimationFrame(tick) : null;
  }

  function onKeyDown(event) {
    const handled = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(event.code);
    if (!handled) {
      return;
    }
    event.preventDefault();
    pressed.add(event.code);
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(tick);
    }
  }

  function onKeyUp(event) {
    pressed.delete(event.code);
  }

  function onPointerDown(event) {
    if (event.button !== 0) {
      return;
    }
    dragging = true;
    lastPointer = { x: event.clientX, y: event.clientY };
    rootElement.setPointerCapture(event.pointerId);
    rootElement.focus({ preventScroll: true });
  }

  function onPointerMove(event) {
    if (!dragging || !lastPointer) {
      return;
    }
    const dx = event.clientX - lastPointer.x;
    const dy = event.clientY - lastPointer.y;
    yaw += dx * DRAG_SENSITIVITY;
    pitch += dy * DRAG_SENSITIVITY;
    lastPointer = { x: event.clientX, y: event.clientY };
    applyCamera();
  }

  function onPointerUp(event) {
    dragging = false;
    lastPointer = null;
    if (rootElement.hasPointerCapture(event.pointerId)) {
      rootElement.releasePointerCapture(event.pointerId);
    }
  }

  rootElement.addEventListener('keydown', onKeyDown);
  rootElement.addEventListener('keyup', onKeyUp);
  rootElement.addEventListener('pointerdown', onPointerDown);
  rootElement.addEventListener('pointermove', onPointerMove);
  rootElement.addEventListener('pointerup', onPointerUp);
  rootElement.addEventListener('pointercancel', onPointerUp);
  resizeObserver.observe(rootElement);
  applyCamera();

  return () => {
    rootElement.removeEventListener('keydown', onKeyDown);
    rootElement.removeEventListener('keyup', onKeyUp);
    rootElement.removeEventListener('pointerdown', onPointerDown);
    rootElement.removeEventListener('pointermove', onPointerMove);
    rootElement.removeEventListener('pointerup', onPointerUp);
    rootElement.removeEventListener('pointercancel', onPointerUp);
    resizeObserver.disconnect();
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
}

export async function mountSplatViewer(rootElement, options) {
  const camera = new THREE.PerspectiveCamera(70, rootElement.clientWidth / rootElement.clientHeight, 0.02, 2000);
  camera.position.set(0, 0, 0);
  camera.up.set(0, -1, 0);
  camera.lookAt(new THREE.Vector3(0, 0, 1));

  const viewer = new GaussianSplats3D.Viewer({
    rootElement,
    camera,
    useBuiltInControls: false,
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
  const detachControls = attachPanoramaControls(rootElement, viewer);
  rootElement.focus({ preventScroll: true });

  return {
    viewer,
    async dispose() {
      detachControls();
      await viewer.dispose();
      rootElement.replaceChildren();
    },
  };
}
