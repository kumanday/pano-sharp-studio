const DRAG_SENSITIVITY = 0.14;
const KEYBOARD_SPEED_DEG = 72;
const MAX_PITCH_DEG = 85;
const FOV_DEG = 75;
const MIN_INTERNAL_WIDTH = 480;
const MAX_INTERNAL_WIDTH = 1600;
const MAX_FULLSCREEN_INTERNAL_WIDTH = 2200;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clampPitch(value) {
  return clamp(value, -MAX_PITCH_DEG, MAX_PITCH_DEG);
}

function wrap(value, max) {
  return ((value % max) + max) % max;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normalize(vector) {
  const length = Math.hypot(vector[0], vector[1], vector[2]) || 1;
  return [vector[0] / length, vector[1] / length, vector[2] / length];
}

function isTypingTarget(target) {
  if (!target) {
    return false;
  }
  const tagName = target.tagName;
  return target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timeoutId = window.setTimeout(() => {
      image.src = "";
      reject(new Error(`Timed out loading panorama image: ${url}`));
    }, 15000);

    image.decoding = "async";
    image.loading = "eager";

    image.onload = async () => {
      window.clearTimeout(timeoutId);
      try {
        if (typeof image.decode === "function") {
          await image.decode();
        }
      } catch {
        // Some browsers throw here even when the image is already usable.
      }
      resolve(image);
    };

    image.onerror = () => {
      window.clearTimeout(timeoutId);
      reject(new Error(`Failed to load panorama image: ${url}`));
    };

    image.src = url;
  });
}

export class PanoramaViewer {
  constructor(root, options = {}) {
    this.root = root;
    this.onDraggingChange = options.onDraggingChange ?? (() => {});

    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d", { alpha: false });
    if (!this.context) {
      throw new Error("Canvas 2D is not available in this browser");
    }

    this.root.replaceChildren(this.canvas);

    this.yaw = 0;
    this.pitch = 0;
    this.activeKeys = new Set();
    this.dragging = false;
    this.pointerId = null;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.lastFrameTime = performance.now();
    this.fullscreenMode = false;
    this.dirty = true;

    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.renderFrame = this.renderFrame.bind(this);

    this.root.addEventListener("pointerdown", this.handlePointerDown);
    window.addEventListener("pointermove", this.handlePointerMove);
    window.addEventListener("pointerup", this.handlePointerUp);
    window.addEventListener("pointercancel", this.handlePointerUp);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);

    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.root);

    this.handleResize();
    this.animationFrame = requestAnimationFrame(this.renderFrame);
  }

  async load(url) {
    const image = await loadImage(url);
    const sourceCanvas = document.createElement("canvas");
    sourceCanvas.width = image.naturalWidth;
    sourceCanvas.height = image.naturalHeight;
    const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });
    if (!sourceContext) {
      throw new Error("Unable to read panorama pixels from Canvas 2D");
    }
    sourceContext.drawImage(image, 0, 0);

    this.sourceWidth = sourceCanvas.width;
    this.sourceHeight = sourceCanvas.height;
    this.sourcePixels = sourceContext.getImageData(0, 0, this.sourceWidth, this.sourceHeight).data;

    this.dirty = true;
    this.render();
  }

  handleResize() {
    const rect = this.root.getBoundingClientRect();
    const displayWidth = Math.max(1, Math.round(rect.width));
    const displayHeight = Math.max(1, Math.round(rect.height));

    const maxInternalWidth = this.fullscreenMode ? MAX_FULLSCREEN_INTERNAL_WIDTH : MAX_INTERNAL_WIDTH;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, this.fullscreenMode ? 1.35 : 1.2);
    const internalWidth = clamp(Math.round(displayWidth * pixelRatio), MIN_INTERNAL_WIDTH, maxInternalWidth);
    const internalHeight = Math.max(1, Math.round(internalWidth * (displayHeight / displayWidth)));

    this.canvas.width = internalWidth;
    this.canvas.height = internalHeight;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    this.frame = this.context.createImageData(internalWidth, internalHeight);
    this.precomputeCameraRays();
    this.dirty = true;
  }

  setFullscreenMode(enabled) {
    if (this.fullscreenMode === enabled) {
      return;
    }
    this.fullscreenMode = enabled;
    this.handleResize();
  }

  precomputeCameraRays() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const aspect = width / height;
    const focal = 1 / Math.tan((FOV_DEG * Math.PI / 180) / 2);

    this.cameraRays = new Float32Array(width * height * 3);
    let offset = 0;
    for (let y = 0; y < height; y += 1) {
      const ny = 1 - ((y + 0.5) / height) * 2;
      for (let x = 0; x < width; x += 1) {
        const nx = (((x + 0.5) / width) * 2 - 1) * aspect;
        const ray = normalize([nx, ny, focal]);
        this.cameraRays[offset] = ray[0];
        this.cameraRays[offset + 1] = ray[1];
        this.cameraRays[offset + 2] = ray[2];
        offset += 3;
      }
    }
  }

  handlePointerDown(event) {
    if (event.button !== 0) {
      return;
    }
    this.dragging = true;
    this.pointerId = event.pointerId;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
    this.root.setPointerCapture?.(event.pointerId);
    this.root.focus({ preventScroll: true });
    this.onDraggingChange(true);
  }

  handlePointerMove(event) {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }
    const dx = event.clientX - this.lastPointerX;
    const dy = event.clientY - this.lastPointerY;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;

    this.yaw += dx * DRAG_SENSITIVITY;
    this.pitch = clampPitch(this.pitch - dy * DRAG_SENSITIVITY);
    this.dirty = true;
  }

  handlePointerUp(event) {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }
    this.dragging = false;
    this.pointerId = null;
    this.root.releasePointerCapture?.(event.pointerId);
    this.onDraggingChange(false);
  }

  handleKeyDown(event) {
    if (isTypingTarget(event.target)) {
      return;
    }

    const key = event.key.toLowerCase();
    if (!["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d"].includes(key)) {
      return;
    }

    event.preventDefault();
    this.activeKeys.add(key);
  }

  handleKeyUp(event) {
    const key = event.key.toLowerCase();
    if (!this.activeKeys.has(key)) {
      return;
    }

    event.preventDefault();
    this.activeKeys.delete(key);
  }

  updateFromKeyboard(deltaSeconds) {
    if (!this.activeKeys.size) {
      return;
    }

    const step = KEYBOARD_SPEED_DEG * deltaSeconds;
    let changed = false;

    if (this.activeKeys.has("arrowleft") || this.activeKeys.has("a")) {
      this.yaw -= step;
      changed = true;
    }
    if (this.activeKeys.has("arrowright") || this.activeKeys.has("d")) {
      this.yaw += step;
      changed = true;
    }
    if (this.activeKeys.has("arrowup") || this.activeKeys.has("w")) {
      this.pitch = clampPitch(this.pitch + step);
      changed = true;
    }
    if (this.activeKeys.has("arrowdown") || this.activeKeys.has("s")) {
      this.pitch = clampPitch(this.pitch - step);
      changed = true;
    }

    if (changed) {
      this.dirty = true;
    }
  }

  buildBasis() {
    const yaw = this.yaw * Math.PI / 180;
    const pitch = this.pitch * Math.PI / 180;
    const forward = [
      Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(yaw) * Math.cos(pitch),
    ];
    const right = [
      Math.cos(yaw),
      0,
      -Math.sin(yaw),
    ];
    const up = cross(forward, right);
    return { forward, right, up };
  }

  render() {
    if (!this.sourcePixels || !this.frame || !this.cameraRays) {
      return;
    }

    const output = this.frame.data;
    const { forward, right, up } = this.buildBasis();
    const sourceWidth = this.sourceWidth;
    const sourceHeight = this.sourceHeight;
    const sourcePixels = this.sourcePixels;

    let rayOffset = 0;
    let outOffset = 0;
    const pixelCount = this.canvas.width * this.canvas.height;
    for (let i = 0; i < pixelCount; i += 1) {
      const cx = this.cameraRays[rayOffset];
      const cy = this.cameraRays[rayOffset + 1];
      const cz = this.cameraRays[rayOffset + 2];

      const wx = cx * right[0] + cy * up[0] + cz * forward[0];
      const wy = cx * right[1] + cy * up[1] + cz * forward[1];
      const wz = cx * right[2] + cy * up[2] + cz * forward[2];

      const theta = Math.atan2(wx, wz);
      const phi = Math.asin(clamp(wy, -1, 1));

      const u = wrap((theta + Math.PI) / (Math.PI * 2) * sourceWidth, sourceWidth);
      const v = clamp((Math.PI / 2 - phi) / Math.PI * sourceHeight, 0, sourceHeight - 1);

      const x0 = Math.floor(u);
      const y0 = Math.floor(v);
      const x1 = (x0 + 1) % sourceWidth;
      const y1 = Math.min(y0 + 1, sourceHeight - 1);
      const wx1 = u - x0;
      const wy1 = v - y0;
      const wx0 = 1 - wx1;
      const wy0 = 1 - wy1;

      const p00 = (y0 * sourceWidth + x0) * 4;
      const p10 = (y0 * sourceWidth + x1) * 4;
      const p01 = (y1 * sourceWidth + x0) * 4;
      const p11 = (y1 * sourceWidth + x1) * 4;

      const w00 = wx0 * wy0;
      const w10 = wx1 * wy0;
      const w01 = wx0 * wy1;
      const w11 = wx1 * wy1;

      output[outOffset] = sourcePixels[p00] * w00 + sourcePixels[p10] * w10 + sourcePixels[p01] * w01 + sourcePixels[p11] * w11;
      output[outOffset + 1] = sourcePixels[p00 + 1] * w00 + sourcePixels[p10 + 1] * w10 + sourcePixels[p01 + 1] * w01 + sourcePixels[p11 + 1] * w11;
      output[outOffset + 2] = sourcePixels[p00 + 2] * w00 + sourcePixels[p10 + 2] * w10 + sourcePixels[p01 + 2] * w01 + sourcePixels[p11 + 2] * w11;
      output[outOffset + 3] = 255;

      rayOffset += 3;
      outOffset += 4;
    }

    this.context.putImageData(this.frame, 0, 0);
    this.dirty = false;
  }

  renderFrame(now) {
    const deltaSeconds = Math.min((now - this.lastFrameTime) / 1000, 0.05);
    this.lastFrameTime = now;
    this.updateFromKeyboard(deltaSeconds);

    if (this.dirty) {
      this.render();
    }

    this.animationFrame = requestAnimationFrame(this.renderFrame);
  }

  destroy() {
    cancelAnimationFrame(this.animationFrame);
    this.resizeObserver?.disconnect();
    this.root.removeEventListener("pointerdown", this.handlePointerDown);
    window.removeEventListener("pointermove", this.handlePointerMove);
    window.removeEventListener("pointerup", this.handlePointerUp);
    window.removeEventListener("pointercancel", this.handlePointerUp);
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
    this.activeKeys.clear();
    this.onDraggingChange(false);
    this.root.replaceChildren();
  }
}
