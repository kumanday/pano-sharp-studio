# High-Fidelity Render Navigation Notes

## Goal

Add constrained translation to the high-fidelity render viewer while keeping camera rotation intuitive.

Desired controls:

- Arrow left/right: rotate camera left/right.
- Arrow up/down: tilt camera up/down.
- `W`: move forward along the current view direction.
- `S`: move backward.
- `A`: strafe left.
- `D`: strafe right.
- `R`: optional reset to origin and default view.

## Scope

Implement translation only for the high-fidelity render viewer. Do not add translation to the 360 preview viewer, because the preview is a single equirectangular image and cannot reveal true parallax.

Primary files:

- `frontend/splat-viewer.js`: source of the Gaussian splat viewer controls.
- `app/static/dist/splat-viewer.js`: rebuilt bundle from `npm run build`.
- `app/static/splat-viewer-page.js`: only if route-level UI/help text needs changing.
- `app/static/app.js`: only if in-page immersive overlay needs help text or reset affordance.

## Implementation Sketch

Current `frontend/splat-viewer.js` has `attachPanoramaControls(rootElement, viewer)` with local `yaw`, `pitch`, and keyboard handling. Extend it with camera position state:

- `position = new THREE.Vector3(0, 0, 0)`
- `forward = direction derived from yaw/pitch`
- `right = horizontal strafe vector derived from yaw`
- camera position set from `position`
- look target set to `position + forward`

Keyboard behavior:

- Arrow keys mutate `yaw`/`pitch`.
- `W/S/A/D` mutate `position`.
- Movement should use frame-time delta rather than a fixed per-frame step.
- Clamp movement to a small radius around origin, initially around `1.5` to `3.0` world units.
- Consider ignoring vertical component for forward movement at first so `W` does not fly upward/downward when looking up/down.

## UX Notes

This should be framed as local “lean/dolly” movement, not a full walkable world. With one generated panorama, moving too far from the origin can expose:

- hollow or cardboard-like geometry
- holes at zenith/nadir
- duplicated crop regions
- distorted surfaces from single-view depth inference

Start conservative. If it feels good, later work can add multi-panorama generation for better local parallax.

## Test/Validation Ideas

- `node --check frontend/splat-viewer.js`
- `npm run build`
- Open an existing high-fidelity render and verify:
  - arrow keys rotate/tilt only
  - `W/S` move forward/back
  - `A/D` strafe
  - movement remains bounded
  - drag-to-look still feels like grabbing the canvas
