var e = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, t = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, n = 1e3, r = 1001, i = 1002, a = 1003, o = 1004, s = 1005, c = 1006, l = 1007, u = 1008, d = 1009, f = 1010, p = 1011, m = 1012, h = 1013, g = 1014, _ = 1015, v = 1016, y = 1017, b = 1018, x = 1020, S = 35902, C = 35899, w = 1021, T = 1022, E = 1023, D = 1026, O = 1027, k = 1028, A = 1029, j = 1030, M = 1031, N = 1033, P = 33776, F = 33777, I = 33778, ee = 33779, te = 35840, ne = 35841, re = 35842, L = 35843, ie = 36196, ae = 37492, oe = 37496, se = 37488, ce = 37489, le = 37490, ue = 37491, de = 37808, fe = 37809, pe = 37810, me = 37811, he = 37812, ge = 37813, _e = 37814, ve = 37815, ye = 37816, be = 37817, xe = 37818, Se = 37819, Ce = 37820, we = 37821, Te = 36492, Ee = 36494, De = 36495, R = 36283, Oe = 36284, ke = 36285, Ae = 36286, z = 2300, je = 2301, B = 2302, V = 2303, Me = 2400, Ne = 2401, Pe = 2402, Fe = 3200, Ie = "srgb", Le = "srgb-linear", Re = "linear", ze = "srgb", Be = 7680, Ve = 35044, He = 35048, Ue = 2e3;
function We(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function Ge(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ke(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function qe() {
	let e = Ke("canvas");
	return e.style.display = "block", e;
}
var Je = {}, Ye = null;
function Xe(...e) {
	let t = "THREE." + e.shift();
	Ye ? Ye("log", t, ...e) : console.log(t, ...e);
}
function Ze(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function H(...e) {
	e = Ze(e);
	let t = "THREE." + e.shift();
	if (Ye) Ye("warn", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function U(...e) {
	e = Ze(e);
	let t = "THREE." + e.shift();
	if (Ye) Ye("error", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Qe(...e) {
	let t = e.join(" ");
	t in Je || (Je[t] = !0, H(...e));
}
function $e(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var et = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, tt = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, nt = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), rt = 1234567, it = Math.PI / 180, at = 180 / Math.PI;
function ot() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (nt[e & 255] + nt[e >> 8 & 255] + nt[e >> 16 & 255] + nt[e >> 24 & 255] + "-" + nt[t & 255] + nt[t >> 8 & 255] + "-" + nt[t >> 16 & 15 | 64] + nt[t >> 24 & 255] + "-" + nt[n & 63 | 128] + nt[n >> 8 & 255] + "-" + nt[n >> 16 & 255] + nt[n >> 24 & 255] + nt[r & 255] + nt[r >> 8 & 255] + nt[r >> 16 & 255] + nt[r >> 24 & 255]).toLowerCase();
}
function W(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function st(e, t) {
	return (e % t + t) % t;
}
function ct(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function lt(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function ut(e, t, n) {
	return (1 - n) * e + n * t;
}
function dt(e, t, n, r) {
	return ut(e, t, 1 - Math.exp(-n * r));
}
function ft(e, t = 1) {
	return t - Math.abs(st(e, t * 2) - t);
}
function pt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function mt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function ht(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function gt(e, t) {
	return e + Math.random() * (t - e);
}
function _t(e) {
	return e * (.5 - Math.random());
}
function vt(e) {
	e !== void 0 && (rt = e);
	let t = rt += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function yt(e) {
	return e * it;
}
function bt(e) {
	return e * at;
}
function xt(e) {
	return (e & e - 1) == 0 && e !== 0;
}
function St(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function Ct(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function wt(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: H("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function Tt(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("Invalid component type.");
	}
}
function Et(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("Invalid component type.");
	}
}
var Dt = {
	DEG2RAD: it,
	RAD2DEG: at,
	generateUUID: ot,
	clamp: W,
	euclideanModulo: st,
	mapLinear: ct,
	inverseLerp: lt,
	lerp: ut,
	damp: dt,
	pingpong: ft,
	smoothstep: pt,
	smootherstep: mt,
	randInt: ht,
	randFloat: gt,
	randFloatSpread: _t,
	seededRandom: vt,
	degToRad: yt,
	radToDeg: bt,
	isPowerOfTwo: xt,
	ceilPowerOfTwo: St,
	floorPowerOfTwo: Ct,
	setQuaternionFromProperEuler: wt,
	normalize: Et,
	denormalize: Tt
}, G = class e {
	static {
		e.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = W(this.x, e.x, t.x), this.y = W(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = W(this.x, e, t), this.y = W(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(W(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(W(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Ot = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: H("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(W(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, K = class e {
	static {
		e.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(At.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(At.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = W(this.x, e.x, t.x), this.y = W(this.y, e.y, t.y), this.z = W(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = W(this.x, e, t), this.y = W(this.y, e, t), this.z = W(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(W(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return kt.copy(this).projectOnVector(e), this.sub(kt);
	}
	reflect(e) {
		return this.sub(kt.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(W(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, kt = /* @__PURE__ */ new K(), At = /* @__PURE__ */ new Ot(), q = class e {
	static {
		e.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(jt.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(jt.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(jt.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, jt = /* @__PURE__ */ new q(), Mt = /* @__PURE__ */ new q().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Nt = /* @__PURE__ */ new q().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Pt() {
	let e = {
		enabled: !0,
		workingColorSpace: Le,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = Ft(e.r), e.g = Ft(e.g), e.b = Ft(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = It(e.r), e.g = It(e.g), e.b = It(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? Re : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return Qe("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return Qe("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Le]: {
			primaries: t,
			whitePoint: r,
			transfer: Re,
			toXYZ: Mt,
			fromXYZ: Nt,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Ie },
			outputColorSpaceConfig: { drawingBufferColorSpace: Ie }
		},
		[Ie]: {
			primaries: t,
			whitePoint: r,
			transfer: ze,
			toXYZ: Mt,
			fromXYZ: Nt,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Ie }
		}
	}), e;
}
var J = /* @__PURE__ */ Pt();
function Ft(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function It(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Lt, Rt = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Lt === void 0 && (Lt = Ke("canvas")), Lt.width = e.width, Lt.height = e.height;
			let t = Lt.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Lt;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Ke("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = Ft(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(Ft(t[e] / 255) * 255) : t[e] = Ft(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return H("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, zt = 0, Bt = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: zt++ }), this.uuid = ot(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Vt(r[t].image)) : e.push(Vt(r[t]));
			} else e = Vt(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Vt(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Rt.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (H("Texture: Unable to serialize Texture."), {});
}
var Ht = 0, Ut = /* @__PURE__ */ new K(), Wt = class e extends tt {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, i = r, a = r, o = c, s = u, l = E, f = d, p = e.DEFAULT_ANISOTROPY, m = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ht++ }), this.uuid = ot(), this.name = "", this.source = new Bt(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = a, this.magFilter = o, this.minFilter = s, this.anisotropy = p, this.format = l, this.internalFormat = null, this.type = f, this.offset = new G(0, 0), this.repeat = new G(1, 1), this.center = new G(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new q(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = m, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(Ut).x;
	}
	get height() {
		return this.source.getSize(Ut).y;
	}
	get depth() {
		return this.source.getSize(Ut).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				H(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				H(`Texture.setValues(): property '${t}' does not exist.`);
				continue;
			}
			r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case n:
				e.x -= Math.floor(e.x);
				break;
			case r:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case i:
				Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
				break;
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case n:
				e.y -= Math.floor(e.y);
				break;
			case r:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case i:
				Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
				break;
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Wt.DEFAULT_IMAGE = null, Wt.DEFAULT_MAPPING = 300, Wt.DEFAULT_ANISOTROPY = 1;
var Gt = class e {
	static {
		e.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = W(this.x, e.x, t.x), this.y = W(this.y, e.y, t.y), this.z = W(this.z, e.z, t.z), this.w = W(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = W(this.x, e, t), this.y = W(this.y, e, t), this.z = W(this.z, e, t), this.w = W(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(W(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, Kt = class extends tt {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: c,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Gt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Gt(0, 0, e, t), this.textures = [];
		let r = new Wt({
			width: e,
			height: t,
			depth: n.depth
		}), i = n.count;
		for (let e = 0; e < i; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: c,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Bt(n);
		}
		return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, qt = class extends Kt {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, Jt = class extends Wt {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Yt = class extends Wt {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Y = class e {
	static {
		e.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinant() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / Xt.setFromMatrixColumn(e, 0).length(), i = 1 / Xt.setFromMatrixColumn(e, 1).length(), a = 1 / Xt.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Qt, e, $t);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return nn.subVectors(e, t), nn.lengthSq() === 0 && (nn.z = 1), nn.normalize(), en.crossVectors(n, nn), en.lengthSq() === 0 && (Math.abs(n.z) === 1 ? nn.x += 1e-4 : nn.z += 1e-4, nn.normalize(), en.crossVectors(n, nn)), en.normalize(), tn.crossVectors(nn, en), r[0] = en.x, r[4] = tn.x, r[8] = nn.x, r[1] = en.y, r[5] = tn.y, r[9] = nn.y, r[2] = en.z, r[6] = tn.z, r[10] = nn.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], P = r[7], F = r[11], I = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * P, i[8] = a * C + o * D + s * j + c * F, i[12] = a * w + o * O + s * M + c * I, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * P, i[9] = l * C + u * D + d * j + f * F, i[13] = l * w + u * O + d * M + f * I, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * P, i[10] = p * C + m * D + h * j + g * F, i[14] = p * w + m * O + h * M + g * I, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * P, i[11] = _ * C + v * D + y * j + b * F, i[15] = _ * w + v * O + y * M + b * I, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinant();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = Xt.set(r[0], r[1], r[2]).length(), o = Xt.set(r[4], r[5], r[6]).length(), s = Xt.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Zt.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Zt.elements[0] *= c, Zt.elements[1] *= c, Zt.elements[2] *= c, Zt.elements[4] *= l, Zt.elements[5] *= l, Zt.elements[6] *= l, Zt.elements[8] *= u, Zt.elements[9] *= u, Zt.elements[10] *= u, t.setFromRotationMatrix(Zt), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = Ue, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = Ue, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Xt = /* @__PURE__ */ new K(), Zt = /* @__PURE__ */ new Y(), Qt = /* @__PURE__ */ new K(0, 0, 0), $t = /* @__PURE__ */ new K(1, 1, 1), en = /* @__PURE__ */ new K(), tn = /* @__PURE__ */ new K(), nn = /* @__PURE__ */ new K(), rn = /* @__PURE__ */ new Y(), an = /* @__PURE__ */ new Ot(), on = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(W(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-W(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(W(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-W(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(W(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-W(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: H("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return rn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(rn, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return an.setFromEuler(this), this.setFromQuaternion(an, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
on.DEFAULT_ORDER = "XYZ";
var sn = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = (1 << e | 0) >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e | 0;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e | 0;
	}
	disable(e) {
		this.mask &= ~(1 << e | 0);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return (this.mask & (1 << e | 0)) != 0;
	}
}, cn = 0, ln = /* @__PURE__ */ new K(), un = /* @__PURE__ */ new Ot(), dn = /* @__PURE__ */ new Y(), fn = /* @__PURE__ */ new K(), pn = /* @__PURE__ */ new K(), mn = /* @__PURE__ */ new K(), hn = /* @__PURE__ */ new Ot(), gn = /* @__PURE__ */ new K(1, 0, 0), _n = /* @__PURE__ */ new K(0, 1, 0), vn = /* @__PURE__ */ new K(0, 0, 1), yn = { type: "added" }, bn = { type: "removed" }, xn = {
	type: "childadded",
	child: null
}, Sn = {
	type: "childremoved",
	child: null
}, Cn = class e extends tt {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: cn++ }), this.uuid = ot(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new K(), n = new on(), r = new Ot(), i = new K(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Y() },
			normalMatrix: { value: new q() }
		}), this.matrix = new Y(), this.matrixWorld = new Y(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new sn(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return un.setFromAxisAngle(e, t), this.quaternion.multiply(un), this;
	}
	rotateOnWorldAxis(e, t) {
		return un.setFromAxisAngle(e, t), this.quaternion.premultiply(un), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(gn, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(_n, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(vn, e);
	}
	translateOnAxis(e, t) {
		return ln.copy(e).applyQuaternion(this.quaternion), this.position.add(ln.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(gn, e);
	}
	translateY(e) {
		return this.translateOnAxis(_n, e);
	}
	translateZ(e) {
		return this.translateOnAxis(vn, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(dn.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? fn.copy(e) : fn.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), pn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? dn.lookAt(pn, fn, this.up) : dn.lookAt(fn, pn, this.up), this.quaternion.setFromRotationMatrix(dn), r && (dn.extractRotation(r.matrixWorld), un.setFromRotationMatrix(dn), this.quaternion.premultiply(un.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (U("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(yn), xn.child = e, this.dispatchEvent(xn), xn.child = null) : U("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(bn), Sn.child = e, this.dispatchEvent(Sn), Sn.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), dn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), dn.multiply(e.parent.matrixWorld)), e.applyMatrix4(dn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(yn), xn.child = e, this.dispatchEvent(xn), xn.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pn, e, mn), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pn, hn, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Cn.DEFAULT_UP = /* @__PURE__ */ new K(0, 1, 0), Cn.DEFAULT_MATRIX_AUTO_UPDATE = !0, Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var wn = class extends Cn {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Tn = { type: "move" }, En = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new wn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new wn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new K(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new K()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new wn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new K(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new K(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position), s = .02, l = .005;
				c.inputState.pinching && o > s + l ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= s - l && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Tn)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new wn();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, Dn = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, On = {
	h: 0,
	s: 0,
	l: 0
}, kn = {
	h: 0,
	s: 0,
	l: 0
};
function An(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var jn = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Ie) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, J.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = J.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, J.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = J.workingColorSpace) {
		if (e = st(e, 1), t = W(t, 0, 1), n = W(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = An(i, r, e + 1 / 3), this.g = An(i, r, e), this.b = An(i, r, e - 1 / 3);
		}
		return J.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Ie) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && H("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: H("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			H("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Ie) {
		let n = Dn[e.toLowerCase()];
		return n === void 0 ? H("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Ft(e.r), this.g = Ft(e.g), this.b = Ft(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = It(e.r), this.g = It(e.g), this.b = It(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Ie) {
		return J.workingToColorSpace(Mn.copy(this), e), Math.round(W(Mn.r * 255, 0, 255)) * 65536 + Math.round(W(Mn.g * 255, 0, 255)) * 256 + Math.round(W(Mn.b * 255, 0, 255));
	}
	getHexString(e = Ie) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = J.workingColorSpace) {
		J.workingToColorSpace(Mn.copy(this), t);
		let n = Mn.r, r = Mn.g, i = Mn.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i:
					s = (n - r) / e + 4;
					break;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = J.workingColorSpace) {
		return J.workingToColorSpace(Mn.copy(this), t), e.r = Mn.r, e.g = Mn.g, e.b = Mn.b, e;
	}
	getStyle(e = Ie) {
		J.workingToColorSpace(Mn.copy(this), e);
		let t = Mn.r, n = Mn.g, r = Mn.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(On), this.setHSL(On.h + e, On.s + t, On.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(On), e.getHSL(kn);
		let n = ut(On.h, kn.h, t), r = ut(On.s, kn.s, t), i = ut(On.l, kn.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Mn = /* @__PURE__ */ new jn();
jn.NAMES = Dn;
var Nn = class extends Cn {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new on(), this.environmentIntensity = 1, this.environmentRotation = new on(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Pn = /* @__PURE__ */ new K(), Fn = /* @__PURE__ */ new K(), In = /* @__PURE__ */ new K(), Ln = /* @__PURE__ */ new K(), Rn = /* @__PURE__ */ new K(), zn = /* @__PURE__ */ new K(), Bn = /* @__PURE__ */ new K(), Vn = /* @__PURE__ */ new K(), Hn = /* @__PURE__ */ new K(), Un = /* @__PURE__ */ new K(), Wn = /* @__PURE__ */ new Gt(), Gn = /* @__PURE__ */ new Gt(), Kn = /* @__PURE__ */ new Gt(), qn = class e {
	constructor(e = new K(), t = new K(), n = new K()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Pn.subVectors(e, t), r.cross(Pn);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Pn.subVectors(r, t), Fn.subVectors(n, t), In.subVectors(e, t);
		let a = Pn.dot(Pn), o = Pn.dot(Fn), s = Pn.dot(In), c = Fn.dot(Fn), l = Fn.dot(In), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, Ln) === null ? !1 : Ln.x >= 0 && Ln.y >= 0 && Ln.x + Ln.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, Ln) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, Ln.x), s.addScaledVector(a, Ln.y), s.addScaledVector(o, Ln.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return Wn.setScalar(0), Gn.setScalar(0), Kn.setScalar(0), Wn.fromBufferAttribute(e, t), Gn.fromBufferAttribute(e, n), Kn.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Wn, i.x), a.addScaledVector(Gn, i.y), a.addScaledVector(Kn, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Pn.subVectors(n, t), Fn.subVectors(e, t), Pn.cross(Fn).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Pn.subVectors(this.c, this.b), Fn.subVectors(this.a, this.b), Pn.cross(Fn).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		Rn.subVectors(r, n), zn.subVectors(i, n), Vn.subVectors(e, n);
		let s = Rn.dot(Vn), c = zn.dot(Vn);
		if (s <= 0 && c <= 0) return t.copy(n);
		Hn.subVectors(e, r);
		let l = Rn.dot(Hn), u = zn.dot(Hn);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(Rn, a);
		Un.subVectors(e, i);
		let f = Rn.dot(Un), p = zn.dot(Un);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(zn, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Bn.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Bn, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(Rn, a).addScaledVector(zn, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Jn = class {
	constructor(e = new K(Infinity, Infinity, Infinity), t = new K(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Xn.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Xn.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = Xn.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, Xn) : Xn.fromBufferAttribute(r, t), Xn.applyMatrix4(e.matrixWorld), this.expandByPoint(Xn);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Zn.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Zn.copy(e.boundingBox)), Zn.applyMatrix4(e.matrixWorld), this.union(Zn);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, Xn), Xn.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(ir), ar.subVectors(this.max, ir), Qn.subVectors(e.a, ir), $n.subVectors(e.b, ir), er.subVectors(e.c, ir), tr.subVectors($n, Qn), nr.subVectors(er, $n), rr.subVectors(Qn, er);
		let t = [
			0,
			-tr.z,
			tr.y,
			0,
			-nr.z,
			nr.y,
			0,
			-rr.z,
			rr.y,
			tr.z,
			0,
			-tr.x,
			nr.z,
			0,
			-nr.x,
			rr.z,
			0,
			-rr.x,
			-tr.y,
			tr.x,
			0,
			-nr.y,
			nr.x,
			0,
			-rr.y,
			rr.x,
			0
		];
		return !cr(t, Qn, $n, er, ar) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !cr(t, Qn, $n, er, ar)) ? !1 : (or.crossVectors(tr, nr), t = [
			or.x,
			or.y,
			or.z
		], cr(t, Qn, $n, er, ar));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, Xn).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Xn).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (Yn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Yn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Yn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Yn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Yn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Yn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Yn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Yn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Yn), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, Yn = [
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K(),
	/* @__PURE__ */ new K()
], Xn = /* @__PURE__ */ new K(), Zn = /* @__PURE__ */ new Jn(), Qn = /* @__PURE__ */ new K(), $n = /* @__PURE__ */ new K(), er = /* @__PURE__ */ new K(), tr = /* @__PURE__ */ new K(), nr = /* @__PURE__ */ new K(), rr = /* @__PURE__ */ new K(), ir = /* @__PURE__ */ new K(), ar = /* @__PURE__ */ new K(), or = /* @__PURE__ */ new K(), sr = /* @__PURE__ */ new K();
function cr(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		sr.fromArray(e, a);
		let o = i.x * Math.abs(sr.x) + i.y * Math.abs(sr.y) + i.z * Math.abs(sr.z), s = t.dot(sr), c = n.dot(sr), l = r.dot(sr);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var lr = /* @__PURE__ */ ur();
function ur() {
	let e = /* @__PURE__ */ new ArrayBuffer(4), t = new Float32Array(e), n = new Uint32Array(e), r = new Uint32Array(512), i = new Uint32Array(512);
	for (let e = 0; e < 256; ++e) {
		let t = e - 127;
		t < -27 ? (r[e] = 0, r[e | 256] = 32768, i[e] = 24, i[e | 256] = 24) : t < -14 ? (r[e] = 1024 >> -t - 14, r[e | 256] = 1024 >> -t - 14 | 32768, i[e] = -t - 1, i[e | 256] = -t - 1) : t <= 15 ? (r[e] = t + 15 << 10, r[e | 256] = t + 15 << 10 | 32768, i[e] = 13, i[e | 256] = 13) : t < 128 ? (r[e] = 31744, r[e | 256] = 64512, i[e] = 24, i[e | 256] = 24) : (r[e] = 31744, r[e | 256] = 64512, i[e] = 13, i[e | 256] = 13);
	}
	let a = new Uint32Array(2048), o = new Uint32Array(64), s = new Uint32Array(64);
	for (let e = 1; e < 1024; ++e) {
		let t = e << 13, n = 0;
		for (; !(t & 8388608);) t <<= 1, n -= 8388608;
		t &= -8388609, n += 947912704, a[e] = t | n;
	}
	for (let e = 1024; e < 2048; ++e) a[e] = 939524096 + (e - 1024 << 13);
	for (let e = 1; e < 31; ++e) o[e] = e << 23;
	o[31] = 1199570944, o[32] = 2147483648;
	for (let e = 33; e < 63; ++e) o[e] = 2147483648 + (e - 32 << 23);
	o[63] = 3347054592;
	for (let e = 1; e < 64; ++e) e !== 32 && (s[e] = 1024);
	return {
		floatView: t,
		uint32View: n,
		baseTable: r,
		shiftTable: i,
		mantissaTable: a,
		exponentTable: o,
		offsetTable: s
	};
}
function dr(e) {
	Math.abs(e) > 65504 && H("DataUtils.toHalfFloat(): Value out of range."), e = W(e, -65504, 65504), lr.floatView[0] = e;
	let t = lr.uint32View[0], n = t >> 23 & 511;
	return lr.baseTable[n] + ((t & 8388607) >> lr.shiftTable[n]);
}
function fr(e) {
	let t = e >> 10;
	return lr.uint32View[0] = lr.mantissaTable[lr.offsetTable[t] + (e & 1023)] + lr.exponentTable[t], lr.floatView[0];
}
var pr = class {
	static toHalfFloat(e) {
		return dr(e);
	}
	static fromHalfFloat(e) {
		return fr(e);
	}
}, mr = /* @__PURE__ */ new K(), hr = /* @__PURE__ */ new G(), gr = 0, _r = class extends tt {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: gr++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Ve, this.updateRanges = [], this.gpuType = _, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) hr.fromBufferAttribute(this, t), hr.applyMatrix3(e), this.setXY(t, hr.x, hr.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) mr.fromBufferAttribute(this, t), mr.applyMatrix3(e), this.setXYZ(t, mr.x, mr.y, mr.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) mr.fromBufferAttribute(this, t), mr.applyMatrix4(e), this.setXYZ(t, mr.x, mr.y, mr.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) mr.fromBufferAttribute(this, t), mr.applyNormalMatrix(e), this.setXYZ(t, mr.x, mr.y, mr.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) mr.fromBufferAttribute(this, t), mr.transformDirection(e), this.setXYZ(t, mr.x, mr.y, mr.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = Tt(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = Et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = Tt(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = Tt(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = Tt(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = Tt(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array), i = Et(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, vr = class extends _r {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, yr = class extends _r {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, br = class extends _r {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, xr = /* @__PURE__ */ new Jn(), Sr = /* @__PURE__ */ new K(), Cr = /* @__PURE__ */ new K(), wr = class {
	constructor(e = new K(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? xr.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Sr.subVectors(e, this.center);
		let t = Sr.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(Sr, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Cr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Sr.copy(e.center).add(Cr)), this.expandByPoint(Sr.copy(e.center).sub(Cr))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, Tr = 0, Er = /* @__PURE__ */ new Y(), Dr = /* @__PURE__ */ new Cn(), Or = /* @__PURE__ */ new K(), kr = /* @__PURE__ */ new Jn(), Ar = /* @__PURE__ */ new Jn(), jr = /* @__PURE__ */ new K(), Mr = class e extends tt {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Tr++ }), this.uuid = ot(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {};
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new (We(e) ? yr : vr)(e, 1) : this.index = e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new q().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return Er.makeRotationFromQuaternion(e), this.applyMatrix4(Er), this;
	}
	rotateX(e) {
		return Er.makeRotationX(e), this.applyMatrix4(Er), this;
	}
	rotateY(e) {
		return Er.makeRotationY(e), this.applyMatrix4(Er), this;
	}
	rotateZ(e) {
		return Er.makeRotationZ(e), this.applyMatrix4(Er), this;
	}
	translate(e, t, n) {
		return Er.makeTranslation(e, t, n), this.applyMatrix4(Er), this;
	}
	scale(e, t, n) {
		return Er.makeScale(e, t, n), this.applyMatrix4(Er), this;
	}
	lookAt(e) {
		return Dr.lookAt(e), Dr.updateMatrix(), this.applyMatrix4(Dr.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Or).negate(), this.translate(Or.x, Or.y, Or.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new br(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && H("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Jn());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			U("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new K(-Infinity, -Infinity, -Infinity), new K(Infinity, Infinity, Infinity));
			return;
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				kr.setFromBufferAttribute(n), this.morphTargetsRelative ? (jr.addVectors(this.boundingBox.min, kr.min), this.boundingBox.expandByPoint(jr), jr.addVectors(this.boundingBox.max, kr.max), this.boundingBox.expandByPoint(jr)) : (this.boundingBox.expandByPoint(kr.min), this.boundingBox.expandByPoint(kr.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && U("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new wr());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			U("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new K(), Infinity);
			return;
		}
		if (e) {
			let n = this.boundingSphere.center;
			if (kr.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Ar.setFromBufferAttribute(n), this.morphTargetsRelative ? (jr.addVectors(kr.min, Ar.min), kr.expandByPoint(jr), jr.addVectors(kr.max, Ar.max), kr.expandByPoint(jr)) : (kr.expandByPoint(Ar.min), kr.expandByPoint(Ar.max));
			}
			kr.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) jr.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(jr));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) jr.fromBufferAttribute(a, t), o && (Or.fromBufferAttribute(e, t), jr.add(Or)), r = Math.max(r, n.distanceToSquared(jr));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && U("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			U("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv;
		this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new _r(new Float32Array(4 * n.count), 4));
		let a = this.getAttribute("tangent"), o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new K(), s[e] = new K();
		let c = new K(), l = new K(), u = new K(), d = new G(), f = new G(), p = new G(), m = new K(), h = new K();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new K(), y = new K(), b = new K(), x = new K();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new _r(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new K(), i = new K(), a = new K(), o = new K(), s = new K(), c = new K(), l = new K(), u = new K();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) jr.fromBufferAttribute(e, t), jr.normalize(), e.setXYZ(t, jr.x, jr.y, jr.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new _r(a, r, i);
		}
		if (this.index === null) return H("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Nr = 0, Pr = class extends tt {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Nr++ }), this.uuid = ot(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new jn(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Be, this.stencilZFail = Be, this.stencilZPass = Be, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				H(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				H(`Material: '${t}' is not a property of THREE.${this.type}.`);
				continue;
			}
			r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, Fr = /* @__PURE__ */ new K(), Ir = /* @__PURE__ */ new K(), Lr = /* @__PURE__ */ new K(), Rr = /* @__PURE__ */ new K(), zr = /* @__PURE__ */ new K(), Br = /* @__PURE__ */ new K(), Vr = /* @__PURE__ */ new K(), Hr = class {
	constructor(e = new K(), t = new K(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, Fr)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = Fr.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (Fr.copy(this.origin).addScaledVector(this.direction, t), Fr.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		Ir.copy(e).add(t).multiplyScalar(.5), Lr.copy(t).sub(e).normalize(), Rr.copy(this.origin).sub(Ir);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(Lr), o = Rr.dot(this.direction), s = -Rr.dot(Lr), c = Rr.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) if (d >= -p) if (d <= p) {
			let e = 1 / l;
			u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
		} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Ir).addScaledVector(Lr, d), f;
	}
	intersectSphere(e, t) {
		Fr.subVectors(e.center, this.origin);
		let n = Fr.dot(this.direction), r = Fr.dot(Fr) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, Fr) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		zr.subVectors(t, e), Br.subVectors(n, e), Vr.crossVectors(zr, Br);
		let a = this.direction.dot(Vr), o;
		if (a > 0) {
			if (r) return null;
			o = 1;
		} else if (a < 0) o = -1, a = -a;
		else return null;
		Rr.subVectors(this.origin, e);
		let s = o * this.direction.dot(Br.crossVectors(Rr, Br));
		if (s < 0) return null;
		let c = o * this.direction.dot(zr.cross(Rr));
		if (c < 0 || s + c > a) return null;
		let l = -o * Rr.dot(Vr);
		return l < 0 ? null : this.at(l / a, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Ur = class extends Pr {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new jn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new on(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Wr = /* @__PURE__ */ new Y(), Gr = /* @__PURE__ */ new Hr(), Kr = /* @__PURE__ */ new wr(), qr = /* @__PURE__ */ new K(), Jr = /* @__PURE__ */ new K(), Yr = /* @__PURE__ */ new K(), Xr = /* @__PURE__ */ new K(), Zr = /* @__PURE__ */ new K(), Qr = /* @__PURE__ */ new K(), $r = /* @__PURE__ */ new K(), ei = /* @__PURE__ */ new K(), ti = class extends Cn {
	constructor(e = new Mr(), t = new Ur()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Qr.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Zr.fromBufferAttribute(s, e), a ? Qr.addScaledVector(Zr, r) : Qr.addScaledVector(Zr.sub(t), r));
			}
			t.add(Qr);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Kr.copy(n.boundingSphere), Kr.applyMatrix4(i), Gr.copy(e.ray).recast(e.near), !(Kr.containsPoint(Gr.origin) === !1 && (Gr.intersectSphere(Kr, qr) === null || Gr.origin.distanceToSquared(qr) > (e.far - e.near) ** 2)) && (Wr.copy(i).invert(), Gr.copy(e.ray).applyMatrix4(Wr), !(n.boundingBox !== null && Gr.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Gr)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
			let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
				r = ri(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
			for (let d = i, f = s; d < f; d += 3) {
				let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
				r = ri(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
			}
		}
		else if (s !== void 0) if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
			let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = i, s = i + 1, d = i + 2;
				r = ri(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
			for (let s = i, d = o; s < d; s += 3) {
				let i = s, o = s + 1, d = s + 2;
				r = ri(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
			}
		}
	}
};
function ni(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	ei.copy(s), ei.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(ei);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: ei.clone(),
		object: e
	};
}
function ri(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Jr), e.getVertexPosition(c, Yr), e.getVertexPosition(l, Xr);
	let u = ni(e, t, n, r, Jr, Yr, Xr, $r);
	if (u) {
		let e = new K();
		qn.getBarycoord($r, Jr, Yr, Xr, e), i && (u.uv = qn.getInterpolatedAttribute(i, s, c, l, e, new G())), a && (u.uv1 = qn.getInterpolatedAttribute(a, s, c, l, e, new G())), o && (u.normal = qn.getInterpolatedAttribute(o, s, c, l, e, new K()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new K(),
			materialIndex: 0
		};
		qn.getNormal(Jr, Yr, Xr, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var ii = class extends Wt {
	constructor(e = null, t = 1, n = 1, r, i, o, s, c, l = a, u = a, d, f) {
		super(null, o, s, c, l, u, r, i, d, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, ai = class extends _r {
	constructor(e, t, n, r = 1) {
		super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
	}
}, oi = /* @__PURE__ */ new K(), si = /* @__PURE__ */ new K(), ci = /* @__PURE__ */ new q(), li = class {
	constructor(e = new K(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = oi.subVectors(n, t).cross(si.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(oi), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || ci.getNormalMatrix(e), r = this.coplanarPoint(oi).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ui = /* @__PURE__ */ new wr(), di = /* @__PURE__ */ new G(.5, .5), fi = /* @__PURE__ */ new K(), pi = class {
	constructor(e = new li(), t = new li(), n = new li(), r = new li(), i = new li(), a = new li()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = Ue, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(ui);
	}
	intersectsSprite(e) {
		return ui.center.set(0, 0, 0), ui.radius = .7071067811865476 + di.distanceTo(e.center), ui.applyMatrix4(e.matrixWorld), this.intersectsSphere(ui);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (fi.x = r.normal.x > 0 ? e.max.x : e.min.x, fi.y = r.normal.y > 0 ? e.max.y : e.min.y, fi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(fi) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, mi = class extends Wt {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, hi = class extends Wt {
	constructor(e, t, n = g, r, i, o, s = a, c = a, l, u = D, d = 1) {
		if (u !== 1026 && u !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: d
		}, r, i, o, s, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Bt(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, gi = class extends hi {
	constructor(e, t = g, n = 301, r, i, o = a, s = a, c, l = D) {
		let u = {
			width: e,
			height: e,
			depth: 1
		}, d = [
			u,
			u,
			u,
			u,
			u,
			u
		];
		super(e, e, t, n, r, i, o, s, c, l), this.image = d, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, _i = class extends Wt {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, vi = class e extends Mr {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new br(c, 3)), this.setAttribute("normal", new br(l, 3)), this.setAttribute("uv", new br(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new K();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, yi = class e extends Mr {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new br(u, 3)), this.setAttribute("normal", new br(d, 3)), this.setAttribute("uv", new br(f, 2));
		function _() {
			let a = new K(), _ = new K(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new G(), m = new K(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, bi = class e extends yi {
	constructor(e = 1, t = 1, n = 32, r = 1, i = !1, a = 0, o = Math.PI * 2) {
		super(0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, xi = class e extends Mr {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new br(p, 3)), this.setAttribute("normal", new br(m, 3)), this.setAttribute("uv", new br(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, Si = class e extends Mr {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new K(), d = new K(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = 0;
			f === 0 && a === 0 ? v = .5 / t : f === n && s === Math.PI && (v = -.5 / t);
			for (let n = 0; n <= t; n++) {
				let s = n / t;
				u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(s + v, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new br(p, 3)), this.setAttribute("normal", new br(m, 3)), this.setAttribute("uv", new br(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
};
function Ci(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (Ti(i)) i.isRenderTargetTexture ? (H("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) if (Ti(i[0])) {
				let e = [];
				for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
				t[n][r] = e;
			} else t[n][r] = i.slice();
			else t[n][r] = i;
		}
	}
	return t;
}
function wi(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = Ci(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function Ti(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Ei(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Di(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : J.workingColorSpace;
}
var Oi = {
	clone: Ci,
	merge: wi
}, ki = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", Ai = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", ji = class extends Pr {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ki, this.fragmentShader = Ai, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ci(e.uniforms), this.uniformsGroups = Ei(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
}, Mi = class extends ji {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Ni = class extends Pr {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Fe, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Pi = class extends Pr {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function Fi(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var Ii = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, Li = class extends Ii {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Me,
			endingEnd: Me
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case Ne:
				i = e, o = 2 * t - n;
				break;
			case Pe:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case Ne:
				a = e, s = 2 * n - t;
				break;
			case Pe:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Ri = class extends Ii {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, zi = class extends Ii {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Bi = class extends Ii {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.settings || this.DefaultSettings_, u = l.inTangents, d = l.outTangents;
		if (!u || !d) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let f = o * 2, p = e - 1;
		for (let l = 0; l !== o; ++l) {
			let o = a[c + l], m = a[s + l], h = p * f + l * 2, g = d[h], _ = d[h + 1], v = e * f + l * 2, y = u[v], b = u[v + 1], x = (n - t) / (r - t), S, C, w, T, E;
			for (let e = 0; e < 8; e++) {
				S = x * x, C = S * x, w = 1 - x, T = w * w, E = T * w;
				let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
				if (Math.abs(i) < 1e-10) break;
				x -= e / i, x = Math.max(0, Math.min(1, x));
			}
			i[l] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
		}
		return i;
	}
}, Vi = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Fi(t, this.TimeBufferType), this.values = Fi(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Fi(e.times, Array),
				values: Fi(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new zi(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Ri(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Li(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Bi(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.settings = this.settings), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case z:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case je:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case B:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case V:
				t = this.InterpolantFactoryMethodBezier;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return H("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return z;
			case this.InterpolantFactoryMethodLinear: return je;
			case this.InterpolantFactoryMethodSmooth: return B;
			case this.InterpolantFactoryMethodBezier: return V;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (U("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (U("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				U("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				U("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Ge(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				U("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === B, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) if (r) i = !0;
			else {
				let e = o * n, r = e - n, a = e + n;
				for (let o = 0; o !== n; ++o) {
					let n = t[e + o];
					if (n !== t[r + o] || n !== t[a + o]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
Vi.prototype.ValueTypeName = "", Vi.prototype.TimeBufferType = Float32Array, Vi.prototype.ValueBufferType = Float32Array, Vi.prototype.DefaultInterpolation = je;
var Hi = class extends Vi {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Hi.prototype.ValueTypeName = "bool", Hi.prototype.ValueBufferType = Array, Hi.prototype.DefaultInterpolation = z, Hi.prototype.InterpolantFactoryMethodLinear = void 0, Hi.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ui = class extends Vi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Ui.prototype.ValueTypeName = "color";
var Wi = class extends Vi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Wi.prototype.ValueTypeName = "number";
var Gi = class extends Ii {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Ot.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Ki = class extends Vi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Gi(this.times, this.values, this.getValueSize(), e);
	}
};
Ki.prototype.ValueTypeName = "quaternion", Ki.prototype.InterpolantFactoryMethodSmooth = void 0;
var qi = class extends Vi {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
qi.prototype.ValueTypeName = "string", qi.prototype.ValueBufferType = Array, qi.prototype.DefaultInterpolation = z, qi.prototype.InterpolantFactoryMethodLinear = void 0, qi.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ji = class extends Vi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Ji.prototype.ValueTypeName = "vector";
var Yi = /* @__PURE__ */ new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}(), Xi = class {
	constructor(e) {
		this.manager = e === void 0 ? Yi : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
	abort() {
		return this;
	}
};
Xi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Zi = /* @__PURE__ */ new K(), Qi = /* @__PURE__ */ new Ot(), $i = /* @__PURE__ */ new K(), ea = class extends Cn {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Y(), this.projectionMatrix = new Y(), this.projectionMatrixInverse = new Y(), this.coordinateSystem = Ue, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(Zi, Qi, $i), $i.x === 1 && $i.y === 1 && $i.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zi, Qi, $i.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorld.decompose(Zi, Qi, $i), $i.x === 1 && $i.y === 1 && $i.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zi, Qi, $i.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ta = /* @__PURE__ */ new K(), na = /* @__PURE__ */ new G(), ra = /* @__PURE__ */ new G(), ia = class extends ea {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = at * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(it * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return at * 2 * Math.atan(Math.tan(it * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		ta.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(ta.x, ta.y).multiplyScalar(-e / ta.z), ta.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ta.x, ta.y).multiplyScalar(-e / ta.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, na, ra), t.subVectors(ra, na);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(it * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, aa = class extends ea {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, oa = class extends Mr {
	constructor() {
		super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = Infinity;
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
	}
}, sa = -90, ca = 1, la = class extends Cn {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new ia(sa, ca, e, t);
		r.layers = this.layers, this.add(r);
		let i = new ia(sa, ca, e, t);
		i.layers = this.layers, this.add(i);
		let a = new ia(sa, ca, e, t);
		a.layers = this.layers, this.add(a);
		let o = new ia(sa, ca, e, t);
		o.layers = this.layers, this.add(o);
		let s = new ia(sa, ca, e, t);
		s.layers = this.layers, this.add(s);
		let c = new ia(sa, ca, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, ua = class extends ia {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, da = "\\[\\]\\.:\\/", fa = RegExp("[" + da + "]", "g"), pa = "[^" + da + "]", ma = "[^" + da.replace("\\.", "") + "]", ha = /* @__PURE__ */ "((?:WC+[\\/:])*)".replace("WC", pa), ga = /* @__PURE__ */ "(WCOD+)?".replace("WCOD", ma), _a = /* @__PURE__ */ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", pa), va = /* @__PURE__ */ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", pa), ya = RegExp("^" + ha + ga + _a + va + "$"), ba = [
	"material",
	"materials",
	"bones",
	"map"
], xa = class {
	constructor(e, t, n) {
		let r = n || Sa.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, Sa = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(fa, "");
	}
	static parseTrackName(e) {
		let t = ya.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			ba.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			H("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						U("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						U("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						U("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						U("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						U("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						U("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					U("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			U("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					U("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					U("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
Sa.Composite = xa, Sa.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, Sa.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, Sa.prototype.GetterByBindingType = [
	Sa.prototype._getValue_direct,
	Sa.prototype._getValue_array,
	Sa.prototype._getValue_arrayElement,
	Sa.prototype._getValue_toArray
], Sa.prototype.SetterByBindingTypeAndVersioning = [
	[
		Sa.prototype._setValue_direct,
		Sa.prototype._setValue_direct_setNeedsUpdate,
		Sa.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		Sa.prototype._setValue_array,
		Sa.prototype._setValue_array_setNeedsUpdate,
		Sa.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		Sa.prototype._setValue_arrayElement,
		Sa.prototype._setValue_arrayElement_setNeedsUpdate,
		Sa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		Sa.prototype._setValue_fromArray,
		Sa.prototype._setValue_fromArray_setNeedsUpdate,
		Sa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Ca = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = W(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(W(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
(class e {
	static {
		e.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
function wa(e, t, n, r) {
	let i = Ta(r);
	switch (n) {
		case w: return e * t;
		case k: return e * t / i.components * i.byteLength;
		case A: return e * t / i.components * i.byteLength;
		case j: return e * t * 2 / i.components * i.byteLength;
		case M: return e * t * 2 / i.components * i.byteLength;
		case T: return e * t * 3 / i.components * i.byteLength;
		case E: return e * t * 4 / i.components * i.byteLength;
		case N: return e * t * 4 / i.components * i.byteLength;
		case P:
		case F: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case I:
		case ee: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case ne:
		case L: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case te:
		case re: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case ie:
		case ae:
		case se:
		case ce: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case oe:
		case le:
		case ue: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case de: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case fe: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case pe: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case me: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case he: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case ge: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case _e: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case ve: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case ye: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case be: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case xe: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case Se: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case Ce: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case we: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case Te:
		case Ee:
		case De: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case R:
		case Oe: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case ke:
		case Ae: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Ta(e) {
	switch (e) {
		case d:
		case f: return {
			byteLength: 1,
			components: 1
		};
		case m:
		case p:
		case v: return {
			byteLength: 2,
			components: 1
		};
		case y:
		case b: return {
			byteLength: 2,
			components: 4
		};
		case g:
		case h:
		case _: return {
			byteLength: 4,
			components: 1
		};
		case S:
		case C: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "184" } })), typeof window < "u" && (window.__THREE__ ? H("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "184");
//#endregion
//#region node_modules/three/build/three.module.js
function Ea() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Da(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var X = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, Z = {
	common: {
		diffuse: { value: /* @__PURE__ */ new jn(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /* @__PURE__ */ new q() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new q() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /* @__PURE__ */ new q() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /* @__PURE__ */ new q() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /* @__PURE__ */ new q() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /* @__PURE__ */ new q() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /* @__PURE__ */ new q() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /* @__PURE__ */ new q() },
		normalScale: { value: /* @__PURE__ */ new G(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /* @__PURE__ */ new q() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /* @__PURE__ */ new q() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /* @__PURE__ */ new q() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /* @__PURE__ */ new q() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /* @__PURE__ */ new jn(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: /* @__PURE__ */ new K() },
		probesMax: { value: /* @__PURE__ */ new K() },
		probesResolution: { value: /* @__PURE__ */ new K() }
	},
	points: {
		diffuse: { value: /* @__PURE__ */ new jn(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new q() },
		alphaTest: { value: 0 },
		uvTransform: { value: /* @__PURE__ */ new q() }
	},
	sprite: {
		diffuse: { value: /* @__PURE__ */ new jn(16777215) },
		opacity: { value: 1 },
		center: { value: /* @__PURE__ */ new G(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /* @__PURE__ */ new q() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new q() },
		alphaTest: { value: 0 }
	}
}, Oa = {
	basic: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.fog
		]),
		vertexShader: X.meshbasic_vert,
		fragmentShader: X.meshbasic_frag
	},
	lambert: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /* @__PURE__ */ new jn(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshlambert_vert,
		fragmentShader: X.meshlambert_frag
	},
	phong: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /* @__PURE__ */ new jn(0) },
				specular: { value: /* @__PURE__ */ new jn(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphong_vert,
		fragmentShader: X.meshphong_frag
	},
	standard: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.roughnessmap,
			Z.metalnessmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /* @__PURE__ */ new jn(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphysical_vert,
		fragmentShader: X.meshphysical_frag
	},
	toon: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.gradientmap,
			Z.fog,
			Z.lights,
			{ emissive: { value: /* @__PURE__ */ new jn(0) } }
		]),
		vertexShader: X.meshtoon_vert,
		fragmentShader: X.meshtoon_frag
	},
	matcap: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: X.meshmatcap_vert,
		fragmentShader: X.meshmatcap_frag
	},
	points: {
		uniforms: /* @__PURE__ */ wi([Z.points, Z.fog]),
		vertexShader: X.points_vert,
		fragmentShader: X.points_frag
	},
	dashed: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: X.linedashed_vert,
		fragmentShader: X.linedashed_frag
	},
	depth: {
		uniforms: /* @__PURE__ */ wi([Z.common, Z.displacementmap]),
		vertexShader: X.depth_vert,
		fragmentShader: X.depth_frag
	},
	normal: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: X.meshnormal_vert,
		fragmentShader: X.meshnormal_frag
	},
	sprite: {
		uniforms: /* @__PURE__ */ wi([Z.sprite, Z.fog]),
		vertexShader: X.sprite_vert,
		fragmentShader: X.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /* @__PURE__ */ new q() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: X.background_vert,
		fragmentShader: X.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /* @__PURE__ */ new q() }
		},
		vertexShader: X.backgroundCube_vert,
		fragmentShader: X.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: X.cube_vert,
		fragmentShader: X.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: X.equirect_vert,
		fragmentShader: X.equirect_frag
	},
	distance: {
		uniforms: /* @__PURE__ */ wi([
			Z.common,
			Z.displacementmap,
			{
				referencePosition: { value: /* @__PURE__ */ new K() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: X.distance_vert,
		fragmentShader: X.distance_frag
	},
	shadow: {
		uniforms: /* @__PURE__ */ wi([
			Z.lights,
			Z.fog,
			{
				color: { value: /* @__PURE__ */ new jn(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: X.shadow_vert,
		fragmentShader: X.shadow_frag
	}
};
Oa.physical = {
	uniforms: /* @__PURE__ */ wi([Oa.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /* @__PURE__ */ new q() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /* @__PURE__ */ new q() },
		clearcoatNormalScale: { value: /* @__PURE__ */ new G(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new q() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /* @__PURE__ */ new q() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new q() },
		sheen: { value: 0 },
		sheenColor: { value: /* @__PURE__ */ new jn(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /* @__PURE__ */ new q() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /* @__PURE__ */ new q() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /* @__PURE__ */ new q() },
		transmissionSamplerSize: { value: /* @__PURE__ */ new G() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /* @__PURE__ */ new q() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /* @__PURE__ */ new jn(0) },
		specularColor: { value: /* @__PURE__ */ new jn(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /* @__PURE__ */ new q() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /* @__PURE__ */ new q() },
		anisotropyVector: { value: /* @__PURE__ */ new G() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /* @__PURE__ */ new q() }
	}]),
	vertexShader: X.meshphysical_vert,
	fragmentShader: X.meshphysical_frag
};
var ka = {
	r: 0,
	b: 0,
	g: 0
}, Aa = /* @__PURE__ */ new Y(), ja = /* @__PURE__ */ new q();
ja.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Ma(e, t, n, r, i, a) {
	let o = new jn(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (l === void 0 && (l = new ti(new vi(1, 1, 1), new ji({
			name: "BackgroundCubeMaterial",
			uniforms: Ci(Oa.backgroundCube.uniforms),
			vertexShader: Oa.backgroundCube.vertexShader,
			fragmentShader: Oa.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Aa.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(ja), l.material.toneMapped = J.getTransfer(i.colorSpace) !== ze, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new ti(new xi(2, 2), new ji({
			name: "BackgroundMaterial",
			uniforms: Ci(Oa.background.uniforms),
			vertexShader: Oa.background.vertexShader,
			fragmentShader: Oa.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = J.getTransfer(i.colorSpace) !== ze, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(ka, Di(e)), n.buffers.color.setClear(ka.r, ka.g, ka.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function Na(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function Pa(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function Fa(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return !(t !== 1023 && r.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (H("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.logarithmicDepthBuffer === !0, f = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && f === !1 && H("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: d,
		reversedDepthBuffer: f,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function Ia(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new li(), s = new q(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var La = 4, Ra = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], za = 20, Ba = 256, Va = /* @__PURE__ */ new aa(), Ha = /* @__PURE__ */ new jn(), Ua = null, Wa = 0, Ga = 0, Ka = !1, qa = /* @__PURE__ */ new K(), Ja = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = qa } = i;
		Ua = this._renderer.getRenderTarget(), Wa = this._renderer.getActiveCubeFace(), Ga = this._renderer.getActiveMipmapLevel(), Ka = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = to(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = eo(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(Ua, Wa, Ga), this._renderer.xr.enabled = Ka, e.scissorTest = !1, Za(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ua = this._renderer.getRenderTarget(), Wa = this._renderer.getActiveCubeFace(), Ga = this._renderer.getActiveMipmapLevel(), Ka = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: c,
			minFilter: c,
			generateMipmaps: !1,
			type: v,
			format: E,
			colorSpace: Le,
			depthBuffer: !1
		}, r = Xa(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Xa(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = Ya(r)), this._blurMaterial = $a(r, e, t), this._ggxMaterial = Qa(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new ti(new Mr(), e);
		this._renderer.compile(t, Va);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new ia(90, 1, t, n), o = [
			1,
			-1,
			1,
			1,
			1,
			1
		], s = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], c = this._renderer, l = c.autoClear, u = c.toneMapping;
		c.getClearColor(Ha), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new ti(new vi(), new Ur({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
		m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(Ha), p = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
			let l = this._cubeSize;
			Za(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
		}
		c.toneMapping = u, c.autoClear = l, e.background = m;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = to()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = eo());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i;
		let o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		Za(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, Va);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
		o.material = a;
		let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (0 + c * 1.25), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - La ? n - d + La : 0), m = 4 * (this._cubeSize - f);
		s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, Za(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, Va), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, Za(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, Va);
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, o) {
		let s = this._renderer, c = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && U("blur direction must be either latitudinal or longitudinal!");
		let l = this._lodMeshes[r];
		l.material = c;
		let u = c.uniforms, d = this._sizeLods[n] - 1, f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * za - 1), p = i / f, m = isFinite(i) ? 1 + Math.floor(3 * p) : za;
		m > za && H(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${za}`);
		let h = [], g = 0;
		for (let e = 0; e < za; ++e) {
			let t = e / p, n = Math.exp(-t * t / 2);
			h.push(n), e === 0 ? g += n : e < m && (g += 2 * n);
		}
		for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
		u.envMap.value = e.texture, u.samples.value = m, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
		let { _lodMax: _ } = this;
		u.dTheta.value = f, u.mipInt.value = _ - n;
		let v = this._sizeLods[r];
		Za(t, 3 * v * (r > _ - La ? r - _ + La : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), s.setRenderTarget(t), s.render(l, Va);
	}
};
function Ya(e) {
	let t = [], n = [], r = [], i = e, a = e - La + 1 + Ra.length;
	for (let o = 0; o < a; o++) {
		let a = 2 ** i;
		t.push(a);
		let s = 1 / a;
		o > e - La ? s = Ra[o - e + La - 1] : o === 0 && (s = 0), n.push(s);
		let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
			l,
			l,
			u,
			l,
			u,
			u,
			l,
			l,
			u,
			u,
			l,
			u
		], f = new Float32Array(108), p = new Float32Array(72), m = new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			f.set(r, 18 * e), p.set(d, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			m.set(i, 6 * e);
		}
		let h = new Mr();
		h.setAttribute("position", new _r(f, 3)), h.setAttribute("uv", new _r(p, 2)), h.setAttribute("faceIndex", new _r(m, 1)), r.push(new ti(h, null)), i > La && i--;
	}
	return {
		lodMeshes: r,
		sizeLods: t,
		sigmas: n
	};
}
function Xa(e, t, n) {
	let r = new qt(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function Za(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function Qa(e, t, n) {
	return new ji({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES: Ba,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: no(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function $a(e, t, n) {
	let r = new Float32Array(za), i = new K(0, 1, 0);
	return new ji({
		name: "SphericalGaussianBlur",
		defines: {
			n: za,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: no(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function eo() {
	return new ji({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: no(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function to() {
	return new ji({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: no(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function no() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var ro = class extends qt {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new mi(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new vi(5, 5, 5), i = new ji({
			name: "CubemapFromEquirect",
			uniforms: Ci(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new ti(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = c), new la(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function io(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) if (t.has(n)) {
				let e = t.get(n).texture;
				return s(e, n.mapping);
			} else {
				let r = n.image;
				if (r && r.height > 0) {
					let i = new ro(r.height);
					return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
				} else return null;
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new Ja(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new Ja(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function ao(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && Qe("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function oo(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 ? t : (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++, t);
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? yr : vr)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function so(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function co(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default:
				U("WebGLInfo: Unknown draw mode:", r);
				break;
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function lo(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Gt();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new Jt(h, p, m, u);
			g.type = _, g.needsUpdate = !0;
			let v = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * v;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new G(p, m)
			}, r.set(o, d);
			function y() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", y);
			}
			o.addEventListener("dispose", y);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function uo(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var fo = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function po(e, t, n, r, i) {
	let a = new qt(t, n, {
		type: e,
		depthBuffer: r,
		stencilBuffer: i,
		depthTexture: r ? new hi(t, n) : void 0
	}), o = new qt(t, n, {
		type: v,
		depthBuffer: !1,
		stencilBuffer: !1
	}), s = new Mr();
	s.setAttribute("position", new br([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), s.setAttribute("uv", new br([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let c = new Mi({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), l = new ti(s, c), u = new aa(-1, 1, 1, -1, 0, 1), d = null, f = null, p = !1, m, h = null, g = [], _ = !1;
	this.setSize = function(e, t) {
		a.setSize(e, t), o.setSize(e, t);
		for (let n = 0; n < g.length; n++) {
			let r = g[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		g = e, _ = g.length > 0 && g[0].isRenderPass === !0;
		let t = a.width, n = a.height;
		for (let e = 0; e < g.length; e++) {
			let r = g[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (p || e.toneMapping === 0 && g.length === 0) return !1;
		if (h = t, t !== null) {
			let e = t.width, n = t.height;
			(a.width !== e || a.height !== n) && this.setSize(e, n);
		}
		return _ === !1 && e.setRenderTarget(a), m = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return _;
	}, this.end = function(e, t) {
		e.toneMapping = m, p = !0;
		let n = a, r = o;
		for (let i = 0; i < g.length; i++) {
			let a = g[i];
			if (a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (d !== e.outputColorSpace || f !== e.toneMapping) {
			d = e.outputColorSpace, f = e.toneMapping, c.defines = {}, J.getTransfer(d) === "srgb" && (c.defines.SRGB_TRANSFER = "");
			let t = fo[f];
			t && (c.defines[t] = ""), c.needsUpdate = !0;
		}
		c.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(h), e.render(l, u), h = null, p = !1;
	}, this.isCompositing = function() {
		return p;
	}, this.dispose = function() {
		a.depthTexture && a.depthTexture.dispose(), a.dispose(), o.dispose(), s.dispose(), c.dispose();
	};
}
var mo = /* @__PURE__ */ new Wt(), ho = /* @__PURE__ */ new hi(1, 1), go = /* @__PURE__ */ new Jt(), _o = /* @__PURE__ */ new Yt(), vo = /* @__PURE__ */ new mi(), yo = [], bo = [], xo = new Float32Array(16), So = new Float32Array(9), Co = new Float32Array(4);
function wo(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = yo[i];
	if (a === void 0 && (a = new Float32Array(i), yo[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function To(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Eo(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Do(e, t) {
	let n = bo[t];
	n === void 0 && (n = new Int32Array(t), bo[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Oo(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function ko(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (To(n, t)) return;
		e.uniform2fv(this.addr, t), Eo(n, t);
	}
}
function Ao(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (To(n, t)) return;
		e.uniform3fv(this.addr, t), Eo(n, t);
	}
}
function jo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (To(n, t)) return;
		e.uniform4fv(this.addr, t), Eo(n, t);
	}
}
function Mo(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (To(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Eo(n, t);
	} else {
		if (To(n, r)) return;
		Co.set(r), e.uniformMatrix2fv(this.addr, !1, Co), Eo(n, r);
	}
}
function No(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (To(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Eo(n, t);
	} else {
		if (To(n, r)) return;
		So.set(r), e.uniformMatrix3fv(this.addr, !1, So), Eo(n, r);
	}
}
function Po(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (To(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Eo(n, t);
	} else {
		if (To(n, r)) return;
		xo.set(r), e.uniformMatrix4fv(this.addr, !1, xo), Eo(n, r);
	}
}
function Fo(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Io(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (To(n, t)) return;
		e.uniform2iv(this.addr, t), Eo(n, t);
	}
}
function Lo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (To(n, t)) return;
		e.uniform3iv(this.addr, t), Eo(n, t);
	}
}
function Ro(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (To(n, t)) return;
		e.uniform4iv(this.addr, t), Eo(n, t);
	}
}
function zo(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Bo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (To(n, t)) return;
		e.uniform2uiv(this.addr, t), Eo(n, t);
	}
}
function Vo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (To(n, t)) return;
		e.uniform3uiv(this.addr, t), Eo(n, t);
	}
}
function Ho(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (To(n, t)) return;
		e.uniform4uiv(this.addr, t), Eo(n, t);
	}
}
function Uo(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (ho.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = ho) : a = mo, n.setTexture2D(t || a, i);
}
function Wo(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || _o, i);
}
function Go(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || vo, i);
}
function Ko(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || go, i);
}
function qo(e) {
	switch (e) {
		case 5126: return Oo;
		case 35664: return ko;
		case 35665: return Ao;
		case 35666: return jo;
		case 35674: return Mo;
		case 35675: return No;
		case 35676: return Po;
		case 5124:
		case 35670: return Fo;
		case 35667:
		case 35671: return Io;
		case 35668:
		case 35672: return Lo;
		case 35669:
		case 35673: return Ro;
		case 5125: return zo;
		case 36294: return Bo;
		case 36295: return Vo;
		case 36296: return Ho;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Uo;
		case 35679:
		case 36299:
		case 36307: return Wo;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Go;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Ko;
	}
}
function Jo(e, t) {
	e.uniform1fv(this.addr, t);
}
function Yo(e, t) {
	let n = wo(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Xo(e, t) {
	let n = wo(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function Zo(e, t) {
	let n = wo(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Qo(e, t) {
	let n = wo(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function $o(e, t) {
	let n = wo(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function es(e, t) {
	let n = wo(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function ts(e, t) {
	e.uniform1iv(this.addr, t);
}
function ns(e, t) {
	e.uniform2iv(this.addr, t);
}
function rs(e, t) {
	e.uniform3iv(this.addr, t);
}
function is(e, t) {
	e.uniform4iv(this.addr, t);
}
function as(e, t) {
	e.uniform1uiv(this.addr, t);
}
function os(e, t) {
	e.uniform2uiv(this.addr, t);
}
function ss(e, t) {
	e.uniform3uiv(this.addr, t);
}
function cs(e, t) {
	e.uniform4uiv(this.addr, t);
}
function ls(e, t, n) {
	let r = this.cache, i = t.length, a = Do(n, i);
	To(r, a) || (e.uniform1iv(this.addr, a), Eo(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? ho : mo;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function us(e, t, n) {
	let r = this.cache, i = t.length, a = Do(n, i);
	To(r, a) || (e.uniform1iv(this.addr, a), Eo(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || _o, a[e]);
}
function ds(e, t, n) {
	let r = this.cache, i = t.length, a = Do(n, i);
	To(r, a) || (e.uniform1iv(this.addr, a), Eo(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || vo, a[e]);
}
function fs(e, t, n) {
	let r = this.cache, i = t.length, a = Do(n, i);
	To(r, a) || (e.uniform1iv(this.addr, a), Eo(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || go, a[e]);
}
function ps(e) {
	switch (e) {
		case 5126: return Jo;
		case 35664: return Yo;
		case 35665: return Xo;
		case 35666: return Zo;
		case 35674: return Qo;
		case 35675: return $o;
		case 35676: return es;
		case 5124:
		case 35670: return ts;
		case 35667:
		case 35671: return ns;
		case 35668:
		case 35672: return rs;
		case 35669:
		case 35673: return is;
		case 5125: return as;
		case 36294: return os;
		case 36295: return ss;
		case 36296: return cs;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return ls;
		case 35679:
		case 36299:
		case 36307: return us;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return ds;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return fs;
	}
}
var ms = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = qo(t.type);
	}
}, hs = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = ps(t.type);
	}
}, gs = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, _s = /(\w+)(\])?(\[|\.)?/g;
function vs(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function ys(e, t, n) {
	let r = e.name, i = r.length;
	for (_s.lastIndex = 0;;) {
		let a = _s.exec(r), o = _s.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			vs(n, l === void 0 ? new ms(s, e, t) : new hs(s, e, t));
			break;
		} else {
			let e = n.map[s];
			e === void 0 && (e = new gs(s), vs(n, e)), n = e;
		}
	}
}
var bs = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			ys(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function xs(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Ss = 37297, Cs = 0;
function ws(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var Ts = /* @__PURE__ */ new q();
function Es(e) {
	J._getMatrix(Ts, J.workingColorSpace, e);
	let t = `mat3( ${Ts.elements.map((e) => e.toFixed(4))} )`;
	switch (J.getTransfer(e)) {
		case Re: return [t, "LinearTransferOETF"];
		case ze: return [t, "sRGBTransferOETF"];
		default: return H("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function Ds(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + ws(e.getShaderSource(t), r);
	} else return i;
}
function Os(e, t) {
	let n = Es(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var ks = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function As(e, t) {
	let n = ks[t];
	return n === void 0 ? (H("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var js = /* @__PURE__ */ new K();
function Ms() {
	return J.getLuminanceCoefficients(js), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${js.x.toFixed(4)}, ${js.y.toFixed(4)}, ${js.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function Ns(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Is).join("\n");
}
function Ps(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Fs(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Is(e) {
	return e !== "";
}
function Ls(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Rs(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var zs = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Bs(e) {
	return e.replace(zs, Hs);
}
var Vs = /* @__PURE__ */ new Map();
function Hs(e, t) {
	let n = X[t];
	if (n === void 0) {
		let e = Vs.get(t);
		if (e !== void 0) n = X[e], H("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("Can not resolve #include <" + t + ">");
	}
	return Bs(n);
}
var Us = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ws(e) {
	return e.replace(Us, Gs);
}
function Gs(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Ks(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var qs = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function Js(e) {
	return qs[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var Ys = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
};
function Xs(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Ys[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var Zs = { 302: "ENVMAP_MODE_REFRACTION" };
function Qs(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Zs[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var $s = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function ec(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : $s[e.combine] || "ENVMAP_BLENDING_NONE";
}
function tc(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function nc(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = Js(n), l = Xs(n), u = Qs(n), d = ec(n), f = tc(n), p = Ns(n), m = Ps(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Is).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Is).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		Ks(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Is).join("\n"), _ = [
		Ks(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : X.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : As("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		X.colorspace_pars_fragment,
		Os("linearToOutputTexel", n.outputColorSpace),
		Ms(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Is).join("\n")), o = Bs(o), o = Ls(o, n), o = Rs(o, n), s = Bs(s), s = Ls(s, n), s = Rs(s, n), o = Ws(o), s = Ws(s), n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = xs(i, i.VERTEX_SHADER, y), S = xs(i, i.FRAGMENT_SHADER, b);
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h) || "", r = i.getShaderInfoLog(x) || "", a = i.getShaderInfoLog(S) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(h, i.LINK_STATUS) === !1) if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
			else {
				let e = Ds(i, x, "vertex"), n = Ds(i, S, "fragment");
				U("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
			}
			else o === "" ? (s === "" || c === "") && (u = !1) : H("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: g
				},
				fragmentShader: {
					log: c,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new bs(i, h), T = Fs(i, h);
	}
	let w;
	this.getUniforms = function() {
		return w === void 0 && C(this), w;
	};
	let T;
	this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return E === !1 && (E = i.getProgramParameter(h, Ss)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Cs++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var rc = 0, ic = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e) {
		let t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
		return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(i) === !1 && (a.add(i), i.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id;
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new ac(e), t.set(e, n)), n;
	}
}, ac = class {
	constructor(e) {
		this.id = rc++, this.code = e, this.usedTimes = 0;
	}
};
function oc(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function sc(e, t, n, r, i, a) {
	let o = new sn(), s = new ic(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = r.precision, p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function m(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function h(i, o, l, u, h, g) {
		let _ = u.fog, v = h.geometry, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, x = t.get(i.envMap || y, b), S = x && x.mapping === 306 ? x.image.height : null, C = p[i.type];
		i.precision !== null && (f = r.getMaxPrecision(i.precision), f !== i.precision && H("WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."));
		let w = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		v.morphAttributes.position !== void 0 && (E = 1), v.morphAttributes.normal !== void 0 && (E = 2), v.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = Oa[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else D = i.vertexShader, O = i.fragmentShader, s.update(i), k = s.getVertexShaderID(i), A = s.getFragmentShaderID(i);
		let j = e.getRenderTarget(), M = e.state.buffers.depth.getReversed(), N = h.isInstancedMesh === !0, P = h.isBatchedMesh === !0, F = !!i.map, I = !!i.matcap, ee = !!x, te = !!i.aoMap, ne = !!i.lightMap, re = !!i.bumpMap, L = !!i.normalMap, ie = !!i.displacementMap, ae = !!i.emissiveMap, oe = !!i.metalnessMap, se = !!i.roughnessMap, ce = i.anisotropy > 0, le = i.clearcoat > 0, ue = i.dispersion > 0, de = i.iridescence > 0, fe = i.sheen > 0, pe = i.transmission > 0, me = ce && !!i.anisotropyMap, he = le && !!i.clearcoatMap, ge = le && !!i.clearcoatNormalMap, _e = le && !!i.clearcoatRoughnessMap, ve = de && !!i.iridescenceMap, ye = de && !!i.iridescenceThicknessMap, be = fe && !!i.sheenColorMap, xe = fe && !!i.sheenRoughnessMap, Se = !!i.specularMap, Ce = !!i.specularColorMap, we = !!i.specularIntensityMap, Te = pe && !!i.transmissionMap, Ee = pe && !!i.thicknessMap, De = !!i.gradientMap, R = !!i.alphaMap, Oe = i.alphaTest > 0, ke = !!i.alphaHash, Ae = !!i.extensions, z = 0;
		i.toneMapped && (j === null || j.isXRRenderTarget === !0) && (z = e.toneMapping);
		let je = {
			shaderID: C,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: D,
			fragmentShader: O,
			defines: i.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: f,
			batching: P,
			batchingColor: P && h._colorsTexture !== null,
			instancing: N,
			instancingColor: N && h.instanceColor !== null,
			instancingMorph: N && h.morphTexture !== null,
			outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : J.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: F,
			matcap: I,
			envMap: ee,
			envMapMode: ee && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: te,
			lightMap: ne,
			bumpMap: re,
			normalMap: L,
			displacementMap: ie,
			emissiveMap: ae,
			normalMapObjectSpace: L && i.normalMapType === 1,
			normalMapTangentSpace: L && i.normalMapType === 0,
			packedNormalMap: L && i.normalMapType === 0 && oc(i.normalMap.format),
			metalnessMap: oe,
			roughnessMap: se,
			anisotropy: ce,
			anisotropyMap: me,
			clearcoat: le,
			clearcoatMap: he,
			clearcoatNormalMap: ge,
			clearcoatRoughnessMap: _e,
			dispersion: ue,
			iridescence: de,
			iridescenceMap: ve,
			iridescenceThicknessMap: ye,
			sheen: fe,
			sheenColorMap: be,
			sheenRoughnessMap: xe,
			specularMap: Se,
			specularColorMap: Ce,
			specularIntensityMap: we,
			transmission: pe,
			transmissionMap: Te,
			thicknessMap: Ee,
			gradientMap: De,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: R,
			alphaTest: Oe,
			alphaHash: ke,
			combine: i.combine,
			mapUv: F && m(i.map.channel),
			aoMapUv: te && m(i.aoMap.channel),
			lightMapUv: ne && m(i.lightMap.channel),
			bumpMapUv: re && m(i.bumpMap.channel),
			normalMapUv: L && m(i.normalMap.channel),
			displacementMapUv: ie && m(i.displacementMap.channel),
			emissiveMapUv: ae && m(i.emissiveMap.channel),
			metalnessMapUv: oe && m(i.metalnessMap.channel),
			roughnessMapUv: se && m(i.roughnessMap.channel),
			anisotropyMapUv: me && m(i.anisotropyMap.channel),
			clearcoatMapUv: he && m(i.clearcoatMap.channel),
			clearcoatNormalMapUv: ge && m(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: _e && m(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: ve && m(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: ye && m(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: be && m(i.sheenColorMap.channel),
			sheenRoughnessMapUv: xe && m(i.sheenRoughnessMap.channel),
			specularMapUv: Se && m(i.specularMap.channel),
			specularColorMapUv: Ce && m(i.specularColorMap.channel),
			specularIntensityMapUv: we && m(i.specularIntensityMap.channel),
			transmissionMapUv: Te && m(i.transmissionMap.channel),
			thicknessMapUv: Ee && m(i.thicknessMap.channel),
			alphaMapUv: R && m(i.alphaMap.channel),
			vertexTangents: !!v.attributes.tangent && (L || ce),
			vertexNormals: !!v.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!v.attributes.color && v.attributes.color.itemSize === 4,
			pointsUvs: h.isPoints === !0 && !!v.attributes.uv && (F || R),
			fog: !!_,
			useFog: i.fog === !0,
			fogExp2: !!_ && _.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || v.attributes.normal === void 0 && L === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: M,
			skinning: h.isSkinnedMesh === !0,
			morphTargets: v.morphAttributes.position !== void 0,
			morphNormals: v.morphAttributes.normal !== void 0,
			morphColors: v.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: g.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: z,
			decodeVideoTexture: F && i.map.isVideoTexture === !0 && J.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: ae && i.emissiveMap.isVideoTexture === !0 && J.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: Ae && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (Ae && i.extensions.multiDraw === !0 || P) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return je.vertexUv1s = c.has(1), je.vertexUv2s = c.has(2), je.vertexUv3s = c.has(3), c.clear(), je;
	}
	function g(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (_(n, t), v(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function _(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function v(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), e.push(o.mask);
	}
	function y(e) {
		let t = p[e.type], n;
		if (t) {
			let e = Oa[t];
			n = Oi.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function b(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new nc(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function x(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function S(e) {
		s.remove(e);
	}
	function C() {
		s.dispose();
	}
	return {
		getParameters: h,
		getProgramCacheKey: g,
		getUniforms: y,
		acquireProgram: b,
		releaseProgram: x,
		releaseShaderCache: S,
		programs: l,
		dispose: C
	};
}
function cc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function lc(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function uc(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function dc() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || lc), r.length > 1 && r.sort(t || uc), i.length > 1 && i.sort(t || uc);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function fc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new dc(), e.set(t, [i])) : n >= r.length ? (i = new dc(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function pc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new K(),
					color: new jn()
				};
				break;
			case "SpotLight":
				n = {
					position: new K(),
					direction: new K(),
					color: new jn(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new K(),
					color: new jn(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new K(),
					skyColor: new jn(),
					groundColor: new jn()
				};
				break;
			case "RectAreaLight":
				n = {
					color: new jn(),
					position: new K(),
					halfWidth: new K(),
					halfHeight: new K()
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
function mc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new G()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new G()
				};
				break;
			case "PointLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new G(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
var hc = 0;
function gc(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function _c(e) {
	let t = new pc(), n = mc(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new K());
	let i = new K(), a = new Y(), o = new Y();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
		i.sort(gc);
		for (let e = 0, y = i.length; e < y; e++) {
			let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = null;
			if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture), y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
			else if (y.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
				v++;
			} else if (y.isDirectionalLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
				}
				r.directional[c] = e, c++;
			} else if (y.isSpotLight) {
				let e = t.get(y);
				e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
				let i = y.shadow;
				if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
					let e = n.get(y);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
				}
				u++;
			} else if (y.isRectAreaLight) {
				let e = t.get(y);
				e.color.copy(b).multiplyScalar(x), e.halfWidth.set(y.width * .5, 0, 0), e.halfHeight.set(0, y.height * .5, 0), r.rectArea[d] = e, d++;
			} else if (y.isPointLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
				}
				r.point[l] = e, l++;
			} else if (y.isHemisphereLight) {
				let e = t.get(y);
				e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
			}
		}
		d > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Z.LTC_FLOAT_1, r.rectAreaLTC2 = Z.LTC_FLOAT_2) : (r.rectAreaLTC1 = Z.LTC_HALF_1, r.rectAreaLTC2 = Z.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let y = r.hash;
		(y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = hc++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
		for (let t = 0, f = e.length; t < f; t++) {
			let f = e[t];
			if (f.isDirectionalLight) {
				let e = r.directional[n];
				e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
			} else if (f.isSpotLight) {
				let e = r.spot[c];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
			} else if (f.isRectAreaLight) {
				let e = r.rectArea[l];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(f.width * .5, 0, 0), e.halfHeight.set(0, f.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
			} else if (f.isPointLight) {
				let e = r.point[s];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
			} else if (f.isHemisphereLight) {
				let e = r.hemi[u];
				e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function vc(e) {
	let t = new _c(e), n = [], r = [], i = [];
	function a(e) {
		d.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c(e) {
		i.push(e);
	}
	function l() {
		t.setup(n);
	}
	function u(e) {
		t.setupView(n, e);
	}
	let d = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: d,
		setupLights: l,
		setupLightsView: u,
		pushLight: o,
		pushShadow: s,
		pushLightProbeGrid: c
	};
}
function yc(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new vc(e), t.set(n, [a])) : r >= i.length ? (a = new vc(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var bc = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", xc = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Sc = [
	/* @__PURE__ */ new K(1, 0, 0),
	/* @__PURE__ */ new K(-1, 0, 0),
	/* @__PURE__ */ new K(0, 1, 0),
	/* @__PURE__ */ new K(0, -1, 0),
	/* @__PURE__ */ new K(0, 0, 1),
	/* @__PURE__ */ new K(0, 0, -1)
], Cc = [
	/* @__PURE__ */ new K(0, -1, 0),
	/* @__PURE__ */ new K(0, -1, 0),
	/* @__PURE__ */ new K(0, 0, 1),
	/* @__PURE__ */ new K(0, 0, -1),
	/* @__PURE__ */ new K(0, -1, 0),
	/* @__PURE__ */ new K(0, -1, 0)
], wc = /* @__PURE__ */ new Y(), Tc = /* @__PURE__ */ new K(), Ec = /* @__PURE__ */ new K();
function Dc(e, t, n) {
	let r = new pi(), i = new G(), o = new G(), s = new Gt(), l = new Ni(), u = new Pi(), d = {}, f = n.maxTextureSize, p = {
		0: 1,
		1: 0,
		2: 2
	}, m = new ji({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new G() },
			radius: { value: 4 }
		},
		vertexShader: bc,
		fragmentShader: xc
	}), h = m.clone();
	h.defines.HORIZONTAL_PASS = 1;
	let y = new Mr();
	y.setAttribute("position", new _r(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let b = new ti(y, m), x = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let S = this.type;
	this.render = function(t, n, l) {
		if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (H("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), m = e.state;
		m.setBlending(0), m.buffers.depth.getReversed() === !0 ? m.buffers.color.setClear(0, 0, 0, 0) : m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1);
		let h = S !== this.type;
		h && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let u = 0, d = t.length; u < d; u++) {
			let d = t[u], p = d.shadow;
			if (p === void 0) {
				H("WebGLShadowMap:", d, "has no shadow.");
				continue;
			}
			if (p.autoUpdate === !1 && p.needsUpdate === !1) continue;
			i.copy(p.mapSize);
			let y = p.getFrameExtents();
			i.multiply(y), o.copy(p.mapSize), (i.x > f || i.y > f) && (i.x > f && (o.x = Math.floor(f / y.x), i.x = o.x * y.x, p.mapSize.x = o.x), i.y > f && (o.y = Math.floor(f / y.y), i.y = o.y * y.y, p.mapSize.y = o.y));
			let b = e.state.buffers.depth.getReversed();
			if (p.camera._reversedDepth = b, p.map === null || h === !0) {
				if (p.map !== null && (p.map.depthTexture !== null && (p.map.depthTexture.dispose(), p.map.depthTexture = null), p.map.dispose()), this.type === 3) {
					if (d.isPointLight) {
						H("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					p.map = new qt(i.x, i.y, {
						format: j,
						type: v,
						minFilter: c,
						magFilter: c,
						generateMipmaps: !1
					}), p.map.texture.name = d.name + ".shadowMap", p.map.depthTexture = new hi(i.x, i.y, _), p.map.depthTexture.name = d.name + ".shadowMapDepth", p.map.depthTexture.format = D, p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a;
				} else d.isPointLight ? (p.map = new ro(i.x), p.map.depthTexture = new gi(i.x, g)) : (p.map = new qt(i.x, i.y), p.map.depthTexture = new hi(i.x, i.y, g)), p.map.depthTexture.name = d.name + ".shadowMap", p.map.depthTexture.format = D, this.type === 1 ? (p.map.depthTexture.compareFunction = b ? 518 : 515, p.map.depthTexture.minFilter = c, p.map.depthTexture.magFilter = c) : (p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a);
				p.camera.updateProjectionMatrix();
			}
			let x = p.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let t = 0; t < x; t++) {
				if (p.map.isWebGLCubeRenderTarget) e.setRenderTarget(p.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(p.map), e.clear());
					let n = p.getViewport(t);
					s.set(o.x * n.x, o.y * n.y, o.x * n.z, o.y * n.w), m.viewport(s);
				}
				if (d.isPointLight) {
					let e = p.camera, n = p.matrix, r = d.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Tc.setFromMatrixPosition(d.matrixWorld), e.position.copy(Tc), Ec.copy(e.position), Ec.add(Sc[t]), e.up.copy(Cc[t]), e.lookAt(Ec), e.updateMatrixWorld(), n.makeTranslation(-Tc.x, -Tc.y, -Tc.z), wc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), p._frustum.setFromProjectionMatrix(wc, e.coordinateSystem, e.reversedDepth);
				} else p.updateMatrices(d);
				r = p.getFrustum(), T(n, l, p.camera, d, this.type);
			}
			p.isPointLightShadow !== !0 && this.type === 3 && C(p, l), p.needsUpdate = !1;
		}
		S = this.type, x.needsUpdate = !1, e.setRenderTarget(u, d, p);
	};
	function C(n, r) {
		let a = t.update(b);
		m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples, h.defines.VSM_SAMPLES = n.blurSamples, m.needsUpdate = !0, h.needsUpdate = !0), n.mapPass === null && (n.mapPass = new qt(i.x, i.y, {
			format: j,
			type: v
		})), m.uniforms.shadow_pass.value = n.map.depthTexture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, m, b, null), h.uniforms.shadow_pass.value = n.mapPass.texture, h.uniforms.resolution.value = n.mapSize, h.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, h, b, null);
	}
	function w(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? u : l, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = d[e];
			r === void 0 && (r = {}, d[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", E)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? p[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function T(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = w(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = w(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) T(c[e], i, a, o, s);
	}
	function E(e) {
		e.target.removeEventListener("dispose", E);
		for (let t in d) {
			let n = d[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Oc(e, t) {
	function n() {
		let t = !1, n = new Gt(), r = null, i = new Gt(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? oe(e.DEPTH_TEST) : se(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = et[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? oe(e.STENCIL_TEST) : se(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new jn(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, M = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), N = !1, P = 0, F = e.getParameter(e.VERSION);
	F.indexOf("WebGL") === -1 ? F.indexOf("OpenGL ES") !== -1 && (P = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = P >= 2) : (P = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = P >= 1);
	let I = null, ee = {}, te = e.getParameter(e.SCISSOR_BOX), ne = e.getParameter(e.VIEWPORT), re = new Gt().fromArray(te), L = new Gt().fromArray(ne);
	function ie(t, n, r, i) {
		let a = new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let ae = {};
	ae[e.TEXTURE_2D] = ie(e.TEXTURE_2D, e.TEXTURE_2D, 1), ae[e.TEXTURE_CUBE_MAP] = ie(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ae[e.TEXTURE_2D_ARRAY] = ie(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ae[e.TEXTURE_3D] = ie(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), oe(e.DEPTH_TEST), o.setFunc(3), he(!1), ge(1), oe(e.CULL_FACE), pe(0);
	function oe(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function se(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function ce(t, n) {
		return f[t] === n ? !1 : (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function le(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function ue(t) {
		return h === t ? !1 : (e.useProgram(t), h = t, !0);
	}
	let de = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	de[103] = e.MIN, de[104] = e.MAX;
	let fe = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function pe(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) {
			g === !0 && (se(e.BLEND), g = !1);
			return;
		}
		if (g === !1 && (oe(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default:
						U("WebGLState: Invalid blending: ", t);
						break;
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						U("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						U("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default:
						U("WebGLState: Invalid blending: ", t);
						break;
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
			return;
		}
		a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(de[n], de[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(fe[r], fe[i], fe[o], fe[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function me(t, n) {
		t.side === 2 ? se(e.CULL_FACE) : oe(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), he(r), t.blending === 1 && t.transparent === !1 ? pe(0) : pe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? oe(e.SAMPLE_ALPHA_TO_COVERAGE) : se(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function he(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function ge(t) {
		t === 0 ? se(e.CULL_FACE) : (oe(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function _e(t) {
		t !== k && (N && e.lineWidth(t), k = t);
	}
	function ve(t, n, r) {
		t ? (oe(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n), e.polygonOffset(n, r))) : se(e.POLYGON_OFFSET_FILL);
	}
	function ye(t) {
		t ? oe(e.SCISSOR_TEST) : se(e.SCISSOR_TEST);
	}
	function be(t) {
		t === void 0 && (t = e.TEXTURE0 + M - 1), I !== t && (e.activeTexture(t), I = t);
	}
	function xe(t, n, r) {
		r === void 0 && (r = I === null ? e.TEXTURE0 + M - 1 : I);
		let i = ee[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, ee[r] = i), (i.type !== t || i.texture !== n) && (I !== r && (e.activeTexture(r), I = r), e.bindTexture(t, n || ae[t]), i.type = t, i.texture = n);
	}
	function Se() {
		let t = ee[I];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function Ce() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function we() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function De() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function R() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function Oe() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function z() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			U("WebGLState:", e);
		}
	}
	function je(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function B(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function V(t) {
		re.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), re.copy(t));
	}
	function Me(t) {
		L.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), L.copy(t));
	}
	function Ne(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function Pe(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function Fe() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, I = null, ee = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new jn(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, re.set(0, 0, e.canvas.width, e.canvas.height), L.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: oe,
		disable: se,
		bindFramebuffer: ce,
		drawBuffers: le,
		useProgram: ue,
		setBlending: pe,
		setMaterial: me,
		setFlipSided: he,
		setCullFace: ge,
		setLineWidth: _e,
		setPolygonOffset: ve,
		setScissorTest: ye,
		activeTexture: be,
		bindTexture: xe,
		unbindTexture: Se,
		compressedTexImage2D: Ce,
		compressedTexImage3D: we,
		texImage2D: Ae,
		texImage3D: z,
		pixelStorei: B,
		getParameter: je,
		updateUBOMapping: Ne,
		uniformBlockBinding: Pe,
		texStorage2D: Oe,
		texStorage3D: ke,
		texSubImage2D: Te,
		texSubImage3D: Ee,
		compressedTexSubImage2D: De,
		compressedTexSubImage3D: R,
		scissor: V,
		viewport: Me,
		reset: Fe
	};
}
function kc(e, t, d, f, p, m, h) {
	let g = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, _ = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), v = new G(), y = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new Set(), x, S = /* @__PURE__ */ new WeakMap(), C = !1;
	try {
		C = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function w(e, t) {
		return C ? new OffscreenCanvas(e, t) : Ke("canvas");
	}
	function T(e, t, n) {
		let r = 1, i = je(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
			let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
			x === void 0 && (x = w(n, a));
			let o = t ? w(n, a) : x;
			return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), H("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
		} else return "data" in e && H("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		return e;
	}
	function E(e) {
		return e.generateMipmaps;
	}
	function D(t) {
		e.generateMipmap(t);
	}
	function k(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function A(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			H("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || H("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? Re : J.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function j(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, H("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function M(e, t) {
		return E(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function N(e) {
		let t = e.target;
		t.removeEventListener("dispose", N), F(t), t.isVideoTexture && y.delete(t), t.isHTMLTexture && b.delete(t);
	}
	function P(e) {
		let t = e.target;
		t.removeEventListener("dispose", P), ee(t);
	}
	function F(e) {
		let t = f.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, r = S.get(n);
		if (r) {
			let i = r[t.__cacheKey];
			i.usedTimes--, i.usedTimes === 0 && I(e), Object.keys(r).length === 0 && S.delete(n);
		}
		f.remove(e);
	}
	function I(t) {
		let n = f.get(t);
		e.deleteTexture(n.__webglTexture);
		let r = t.source, i = S.get(r);
		delete i[n.__cacheKey], h.memory.textures--;
	}
	function ee(t) {
		let n = f.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), f.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let r = t.textures;
		for (let t = 0, n = r.length; t < n; t++) {
			let n = f.get(r[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), h.memory.textures--), f.remove(r[t]);
		}
		f.remove(t);
	}
	let te = 0;
	function ne() {
		te = 0;
	}
	function re() {
		return te;
	}
	function L(e) {
		te = e;
	}
	function ie() {
		let e = te;
		return e >= p.maxTextures && H("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + p.maxTextures), te += 1, e;
	}
	function ae(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function oe(t, n) {
		let r = f.get(t);
		if (t.isVideoTexture && Ae(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && r.__version !== t.version) {
			let e = t.image;
			if (e === null) H("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) H("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				_e(r, t, n);
				return;
			}
		} else t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		d.bindTexture(e.TEXTURE_2D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function se(t, n) {
		let r = f.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version) {
			_e(r, t, n);
			return;
		} else t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		d.bindTexture(e.TEXTURE_2D_ARRAY, r.__webglTexture, e.TEXTURE0 + n);
	}
	function ce(t, n) {
		let r = f.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version) {
			_e(r, t, n);
			return;
		}
		d.bindTexture(e.TEXTURE_3D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function le(t, n) {
		let r = f.get(t);
		if (t.isCubeDepthTexture !== !0 && t.version > 0 && r.__version !== t.version) {
			ve(r, t, n);
			return;
		}
		d.bindTexture(e.TEXTURE_CUBE_MAP, r.__webglTexture, e.TEXTURE0 + n);
	}
	let ue = {
		[n]: e.REPEAT,
		[r]: e.CLAMP_TO_EDGE,
		[i]: e.MIRRORED_REPEAT
	}, de = {
		[a]: e.NEAREST,
		[o]: e.NEAREST_MIPMAP_NEAREST,
		[s]: e.NEAREST_MIPMAP_LINEAR,
		[c]: e.LINEAR,
		[l]: e.LINEAR_MIPMAP_NEAREST,
		[u]: e.LINEAR_MIPMAP_LINEAR
	}, fe = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function pe(n, r) {
		if (r.type === 1015 && t.has("OES_texture_float_linear") === !1 && (r.magFilter === 1006 || r.magFilter === 1007 || r.magFilter === 1005 || r.magFilter === 1008 || r.minFilter === 1006 || r.minFilter === 1007 || r.minFilter === 1005 || r.minFilter === 1008) && H("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, ue[r.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ue[r.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ue[r.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, de[r.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, de[r.minFilter]), r.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, fe[r.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (r.magFilter === 1003 || r.minFilter !== 1005 && r.minFilter !== 1008 || r.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (r.anisotropy > 1 || f.get(r).__currentAnisotropy) {
				let i = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, p.getMaxAnisotropy())), f.get(r).__currentAnisotropy = r.anisotropy;
			}
		}
	}
	function me(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", N));
		let i = n.source, a = S.get(i);
		a === void 0 && (a = {}, S.set(i, a));
		let o = ae(n);
		if (o !== t.__cacheKey) {
			a[o] === void 0 && (a[o] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, h.memory.textures++, r = !0), a[o].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && I(n)), t.__cacheKey = o, t.__webglTexture = a[o].texture;
		}
		return r;
	}
	function he(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function ge(t, n, r, i) {
		let a = t.updateRanges;
		if (a.length === 0) d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, n.width, n.height, r, i, n.data);
		else {
			a.sort((e, t) => e.start - t.start);
			let o = 0;
			for (let e = 1; e < a.length; e++) {
				let t = a[o], r = a[e], i = t.start + t.count, s = he(r.start, n.width, 4), c = he(t.start, n.width, 4);
				r.start <= i + 1 && s === c && he(r.start + r.count - 1, n.width, 4) === s ? t.count = Math.max(t.count, r.start + r.count - t.start) : (++o, a[o] = r);
			}
			a.length = o + 1;
			let s = d.getParameter(e.UNPACK_ROW_LENGTH), c = d.getParameter(e.UNPACK_SKIP_PIXELS), l = d.getParameter(e.UNPACK_SKIP_ROWS);
			d.pixelStorei(e.UNPACK_ROW_LENGTH, n.width);
			for (let t = 0, o = a.length; t < o; t++) {
				let o = a[t], s = Math.floor(o.start / 4), c = Math.ceil(o.count / 4), l = s % n.width, u = Math.floor(s / n.width), f = c;
				d.pixelStorei(e.UNPACK_SKIP_PIXELS, l), d.pixelStorei(e.UNPACK_SKIP_ROWS, u), d.texSubImage2D(e.TEXTURE_2D, 0, l, u, f, 1, r, i, n.data);
			}
			t.clearUpdateRanges(), d.pixelStorei(e.UNPACK_ROW_LENGTH, s), d.pixelStorei(e.UNPACK_SKIP_PIXELS, c), d.pixelStorei(e.UNPACK_SKIP_ROWS, l);
		}
	}
	function _e(t, n, r) {
		let i = e.TEXTURE_2D;
		(n.isDataArrayTexture || n.isCompressedArrayTexture) && (i = e.TEXTURE_2D_ARRAY), n.isData3DTexture && (i = e.TEXTURE_3D);
		let a = me(t, n), o = n.source;
		d.bindTexture(i, t.__webglTexture, e.TEXTURE0 + r);
		let s = f.get(o);
		if (o.version !== s.__version || a === !0) {
			if (d.activeTexture(e.TEXTURE0 + r), !(typeof ImageBitmap < "u" && n.image instanceof ImageBitmap)) {
				let t = J.getPrimaries(J.workingColorSpace), r = n.colorSpace === "" ? null : J.getPrimaries(n.colorSpace), i = n.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment);
			let t = T(n.image, !1, p.maxTextureSize);
			t = z(n, t);
			let c = m.convert(n.format, n.colorSpace), l = m.convert(n.type), u = A(n.internalFormat, c, l, n.normalized, n.colorSpace, n.isVideoTexture);
			pe(i, n);
			let f, h = n.mipmaps, g = n.isVideoTexture !== !0, _ = s.__version === void 0 || a === !0, v = o.dataReady, y = M(n, t);
			if (n.isDepthTexture) u = j(n.format === O, n.type), _ && (g ? d.texStorage2D(e.TEXTURE_2D, 1, u, t.width, t.height) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, null));
			else if (n.isDataTexture) if (h.length > 0) {
				g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
				for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data);
				n.generateMipmaps = !1;
			} else g ? (_ && d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height), v && ge(n, t, c, l)) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, t.data);
			else if (n.isCompressedTexture) if (n.isCompressedArrayTexture) {
				g && _ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, h[0].width, h[0].height, t.depth);
				for (let r = 0, i = h.length; r < i; r++) if (f = h[r], n.format !== 1023) if (c !== null) if (g) {
					if (v) if (n.layerUpdates.size > 0) {
						let t = wa(f.width, f.height, n.format, n.type);
						for (let i of n.layerUpdates) {
							let n = f.data.subarray(i * t / f.data.BYTES_PER_ELEMENT, (i + 1) * t / f.data.BYTES_PER_ELEMENT);
							d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, i, f.width, f.height, 1, c, n);
						}
						n.clearLayerUpdates();
					} else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, f.data);
				} else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, f.data, 0, 0);
				else H("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
				else g ? v && d.texSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, l, f.data) : d.texImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, c, l, f.data);
			} else {
				g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
				for (let t = 0, r = h.length; t < r; t++) f = h[t], n.format === 1023 ? g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data) : c === null ? H("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : g ? v && d.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, f.data) : d.compressedTexImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, f.data);
			}
			else if (n.isDataArrayTexture) if (g) {
				if (_ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, t.width, t.height, t.depth), v) if (n.layerUpdates.size > 0) {
					let r = wa(t.width, t.height, n.format, n.type);
					for (let i of n.layerUpdates) {
						let n = t.data.subarray(i * r / t.data.BYTES_PER_ELEMENT, (i + 1) * r / t.data.BYTES_PER_ELEMENT);
						d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, t.width, t.height, 1, c, l, n);
					}
					n.clearLayerUpdates();
				} else d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data);
			} else d.texImage3D(e.TEXTURE_2D_ARRAY, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			else if (n.isData3DTexture) g ? (_ && d.texStorage3D(e.TEXTURE_3D, y, u, t.width, t.height, t.depth), v && d.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data)) : d.texImage3D(e.TEXTURE_3D, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			else if (n.isFramebufferTexture) {
				if (_) if (g) d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
				else {
					let n = t.width, r = t.height;
					for (let t = 0; t < y; t++) d.texImage2D(e.TEXTURE_2D, t, u, n, r, 0, c, l, null), n >>= 1, r >>= 1;
				}
			} else if (n.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let r = e.canvas;
					if (r.hasAttribute("layoutsubtree") || r.setAttribute("layoutsubtree", "true"), t.parentNode !== r) {
						r.appendChild(t), b.add(n), r.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of b) t.includes(e.image) && (e.needsUpdate = !0);
						}, r.requestPaint();
						return;
					}
					let i = e.RGBA, a = e.RGBA, o = e.UNSIGNED_BYTE;
					e.texElementImage2D(e.TEXTURE_2D, 0, i, a, o, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (h.length > 0) {
				if (g && _) {
					let t = je(h[0]);
					d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
				}
				for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, c, l, f) : d.texImage2D(e.TEXTURE_2D, t, u, c, l, f);
				n.generateMipmaps = !1;
			} else if (g) {
				if (_) {
					let n = je(t);
					d.texStorage2D(e.TEXTURE_2D, y, u, n.width, n.height);
				}
				v && d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, c, l, t);
			} else d.texImage2D(e.TEXTURE_2D, 0, u, c, l, t);
			E(n) && D(i), s.__version = o.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function ve(t, n, r) {
		if (n.image.length !== 6) return;
		let i = me(t, n), a = n.source;
		d.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + r);
		let o = f.get(a);
		if (a.version !== o.__version || i === !0) {
			d.activeTexture(e.TEXTURE0 + r);
			let t = J.getPrimaries(J.workingColorSpace), s = n.colorSpace === "" ? null : J.getPrimaries(n.colorSpace), c = n.colorSpace === "" || t === s ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, c);
			let l = n.isCompressedTexture || n.image[0].isCompressedTexture, u = n.image[0] && n.image[0].isDataTexture, f = [];
			for (let e = 0; e < 6; e++) !l && !u ? f[e] = T(n.image[e], !0, p.maxCubemapSize) : f[e] = u ? n.image[e].image : n.image[e], f[e] = z(n, f[e]);
			let h = f[0], g = m.convert(n.format, n.colorSpace), _ = m.convert(n.type), v = A(n.internalFormat, g, _, n.normalized, n.colorSpace), y = n.isVideoTexture !== !0, b = o.__version === void 0 || i === !0, x = a.dataReady, S = M(n, h);
			pe(e.TEXTURE_CUBE_MAP, n);
			let C;
			if (l) {
				y && b && d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					C = f[t].mipmaps;
					for (let r = 0; r < C.length; r++) {
						let i = C[r];
						n.format === 1023 ? y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, g, _, i.data) : g === null ? H("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? x && d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (C = n.mipmaps, y && b) {
					C.length > 0 && S++;
					let t = je(f[0]);
					d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (u) {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, f[t].width, f[t].height, g, _, f[t].data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, f[t].width, f[t].height, 0, g, _, f[t].data);
					for (let n = 0; n < C.length; n++) {
						let r = C[n].image[t].image;
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, r.width, r.height, g, _, r.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, r.width, r.height, 0, g, _, r.data);
					}
				} else {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, f[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, g, _, f[t]);
					for (let n = 0; n < C.length; n++) {
						let r = C[n];
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, g, _, r.image[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, g, _, r.image[t]);
					}
				}
			}
			E(n) && D(e.TEXTURE_CUBE_MAP), o.__version = a.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function ye(t, n, r, i, a, o) {
		let s = m.convert(r.format, r.colorSpace), c = m.convert(r.type), l = A(r.internalFormat, s, c, r.normalized, r.colorSpace), u = f.get(n), p = f.get(r);
		if (p.__renderTarget = n, !u.__hasExternalTextures) {
			let t = Math.max(1, n.width >> o), r = Math.max(1, n.height >> o);
			a === e.TEXTURE_3D || a === e.TEXTURE_2D_ARRAY ? d.texImage3D(a, o, l, t, r, n.depth, 0, s, c, null) : d.texImage2D(a, o, l, t, r, 0, s, c, null);
		}
		d.bindFramebuffer(e.FRAMEBUFFER, t), ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, i, a, p.__webglTexture, 0, Oe(n)) : (a === e.TEXTURE_2D || a >= e.TEXTURE_CUBE_MAP_POSITIVE_X && a <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, i, a, p.__webglTexture, o), d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function be(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = j(n.stencilBuffer, a), s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			ke(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Oe(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Oe(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let a = t[i], o = m.convert(a.format, a.colorSpace), s = m.convert(a.type), c = A(a.internalFormat, o, s, a.normalized, a.colorSpace);
				ke(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Oe(n), c, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Oe(n), c, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, c, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function xe(t, n, r) {
		let i = n.isWebGLCubeRenderTarget === !0;
		if (d.bindFramebuffer(e.FRAMEBUFFER, t), !(n.depthTexture && n.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		let a = f.get(n.depthTexture);
		if (a.__renderTarget = n, (!a.__webglTexture || n.depthTexture.image.width !== n.width || n.depthTexture.image.height !== n.height) && (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), i) {
			if (a.__webglInit === void 0 && (a.__webglInit = !0, n.depthTexture.addEventListener("dispose", N)), a.__webglTexture === void 0) {
				a.__webglTexture = e.createTexture(), d.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture), pe(e.TEXTURE_CUBE_MAP, n.depthTexture);
				let t = m.convert(n.depthTexture.format), r = m.convert(n.depthTexture.type), i;
				n.depthTexture.format === 1026 ? i = e.DEPTH_COMPONENT24 : n.depthTexture.format === 1027 && (i = e.DEPTH24_STENCIL8);
				for (let a = 0; a < 6; a++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, i, n.width, n.height, 0, t, r, null);
			}
		} else oe(n.depthTexture, 0);
		let o = a.__webglTexture, s = Oe(n), c = i ? e.TEXTURE_CUBE_MAP_POSITIVE_X + r : e.TEXTURE_2D, l = n.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (n.depthTexture.format === 1026) ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, c, o, 0, s) : e.framebufferTexture2D(e.FRAMEBUFFER, l, c, o, 0);
		else if (n.depthTexture.format === 1027) ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, c, o, 0, s) : e.framebufferTexture2D(e.FRAMEBUFFER, l, c, o, 0);
		else throw Error("Unknown depthTexture format");
	}
	function Se(t) {
		let n = f.get(t), r = t.isWebGLCubeRenderTarget === !0;
		if (n.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (n.__depthDisposeCallback && n.__depthDisposeCallback(), e) {
				let t = () => {
					delete n.__boundDepthTexture, delete n.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), n.__depthDisposeCallback = t;
			}
			n.__boundDepthTexture = e;
		}
		if (t.depthTexture && !n.__autoAllocateDepthBuffer) if (r) for (let e = 0; e < 6; e++) xe(n.__webglFramebuffer[e], t, e);
		else {
			let e = t.texture.mipmaps;
			e && e.length > 0 ? xe(n.__webglFramebuffer[0], t, 0) : xe(n.__webglFramebuffer, t, 0);
		}
		else if (r) {
			n.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[r]), n.__webglDepthbuffer[r] === void 0) n.__webglDepthbuffer[r] = e.createRenderbuffer(), be(n.__webglDepthbuffer[r], t, !1);
			else {
				let i = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = n.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[0]) : d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer === void 0) n.__webglDepthbuffer = e.createRenderbuffer(), be(n.__webglDepthbuffer, t, !1);
			else {
				let r = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, i = n.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, i), e.framebufferRenderbuffer(e.FRAMEBUFFER, r, e.RENDERBUFFER, i);
			}
		}
		d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function Ce(t, n, r) {
		let i = f.get(t);
		n !== void 0 && ye(i.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), r !== void 0 && Se(t);
	}
	function we(t) {
		let n = t.texture, r = f.get(t), i = f.get(n);
		t.addEventListener("dispose", P);
		let a = t.textures, o = t.isWebGLCubeRenderTarget === !0, s = a.length > 1;
		if (s || (i.__webglTexture === void 0 && (i.__webglTexture = e.createTexture()), i.__version = n.version, h.memory.textures++), o) {
			r.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (n.mipmaps && n.mipmaps.length > 0) {
				r.__webglFramebuffer[t] = [];
				for (let i = 0; i < n.mipmaps.length; i++) r.__webglFramebuffer[t][i] = e.createFramebuffer();
			} else r.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (n.mipmaps && n.mipmaps.length > 0) {
				r.__webglFramebuffer = [];
				for (let t = 0; t < n.mipmaps.length; t++) r.__webglFramebuffer[t] = e.createFramebuffer();
			} else r.__webglFramebuffer = e.createFramebuffer();
			if (s) for (let t = 0, n = a.length; t < n; t++) {
				let n = f.get(a[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), h.memory.textures++);
			}
			if (t.samples > 0 && ke(t) === !1) {
				r.__webglMultisampledFramebuffer = e.createFramebuffer(), r.__webglColorRenderbuffer = [], d.bindFramebuffer(e.FRAMEBUFFER, r.__webglMultisampledFramebuffer);
				for (let n = 0; n < a.length; n++) {
					let i = a[n];
					r.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
					let o = m.convert(i.format, i.colorSpace), s = m.convert(i.type), c = A(i.internalFormat, o, s, i.normalized, i.colorSpace, t.isXRRenderTarget === !0), l = Oe(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, l, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (r.__webglDepthRenderbuffer = e.createRenderbuffer(), be(r.__webglDepthRenderbuffer, t, !0)), d.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (o) {
			d.bindTexture(e.TEXTURE_CUBE_MAP, i.__webglTexture), pe(e.TEXTURE_CUBE_MAP, n);
			for (let i = 0; i < 6; i++) if (n.mipmaps && n.mipmaps.length > 0) for (let a = 0; a < n.mipmaps.length; a++) ye(r.__webglFramebuffer[i][a], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, a);
			else ye(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0);
			E(n) && D(e.TEXTURE_CUBE_MAP), d.unbindTexture();
		} else if (s) {
			for (let n = 0, i = a.length; n < i; n++) {
				let i = a[n], o = f.get(i), s = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (s = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(s, o.__webglTexture), pe(s, i), ye(r.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0 + n, s, 0), E(i) && D(s);
			}
			d.unbindTexture();
		} else {
			let a = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (a = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(a, i.__webglTexture), pe(a, n), n.mipmaps && n.mipmaps.length > 0) for (let i = 0; i < n.mipmaps.length; i++) ye(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, a, i);
			else ye(r.__webglFramebuffer, t, n, e.COLOR_ATTACHMENT0, a, 0);
			E(n) && D(a), d.unbindTexture();
		}
		t.depthBuffer && Se(t);
	}
	function Te(e) {
		let t = e.textures;
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			if (E(r)) {
				let t = k(e), n = f.get(r).__webglTexture;
				d.bindTexture(t, n), D(t), d.unbindTexture();
			}
		}
	}
	let Ee = [], De = [];
	function R(t) {
		if (t.samples > 0) {
			if (ke(t) === !1) {
				let n = t.textures, r = t.width, i = t.height, a = e.COLOR_BUFFER_BIT, o = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, s = f.get(t), c = n.length > 1;
				if (c) for (let t = 0; t < n.length; t++) d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				d.bindFramebuffer(e.READ_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				let l = t.texture.mipmaps;
				l && l.length > 0 ? d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer[0]) : d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer);
				for (let l = 0; l < n.length; l++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (a |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (a |= e.STENCIL_BUFFER_BIT)), c) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, s.__webglColorRenderbuffer[l]);
						let t = f.get(n[l]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, r, i, 0, 0, r, i, a, e.NEAREST), _ === !0 && (Ee.length = 0, De.length = 0, Ee.push(e.COLOR_ATTACHMENT0 + l), t.depthBuffer && t.resolveDepthBuffer === !1 && (Ee.push(o), De.push(o), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, De)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Ee));
				}
				if (d.bindFramebuffer(e.READ_FRAMEBUFFER, null), d.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), c) for (let t = 0; t < n.length; t++) {
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, s.__webglColorRenderbuffer[t]);
					let r = f.get(n[t]).__webglTexture;
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, r, 0);
				}
				d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.resolveDepthBuffer === !1 && _) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function Oe(e) {
		return Math.min(p.maxSamples, e.samples);
	}
	function ke(e) {
		let n = f.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function Ae(e) {
		let t = h.render.frame;
		y.get(e) !== t && (y.set(e, t), e.update());
	}
	function z(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (J.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && H("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : U("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function je(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (v.width = e.naturalWidth || e.width, v.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (v.width = e.displayWidth, v.height = e.displayHeight) : (v.width = e.width, v.height = e.height), v;
	}
	this.allocateTextureUnit = ie, this.resetTextureUnits = ne, this.getTextureUnits = re, this.setTextureUnits = L, this.setTexture2D = oe, this.setTexture2DArray = se, this.setTexture3D = ce, this.setTextureCube = le, this.rebindTextures = Ce, this.setupRenderTarget = we, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = R, this.setupDepthRenderbuffer = Se, this.setupFrameBufferTexture = ye, this.useMultisampledRTT = ke, this.isReversedDepthBuffer = function() {
		return d.buffers.depth.getReversed();
	};
}
function Ac(e, t) {
	function n(n, r = "") {
		let i, a = J.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === "srgb") if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
			if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
		} else return null;
		else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
			if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
		} else return null;
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
			if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		} else return null;
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
			if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			if (n === 37488) return i.COMPRESSED_R11_EAC;
			if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
			if (n === 37490) return i.COMPRESSED_RG11_EAC;
			if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
		} else return null;
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
			if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
		} else return null;
		if (n === 36492 || n === 36494 || n === 36495) if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
			if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		} else return null;
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
			if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		} else return null;
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var jc = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", Mc = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", Nc = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new _i(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new ji({
				vertexShader: jc,
				fragmentShader: Mc,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new ti(new xi(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, Pc = class extends tt {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, f = null, p = null, m = null, h = typeof XRWebGLBinding < "u", _ = new Nc(), v = {}, y = t.getContextAttributes(), b = null, S = null, C = [], w = [], T = new G(), k = null, A = new ia();
		A.viewport = new Gt();
		let j = new ia();
		j.viewport = new Gt();
		let M = [A, j], N = new ua(), P = null, F = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = C[e];
			return t === void 0 && (t = new En(), C[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = C[e];
			return t === void 0 && (t = new En(), C[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = C[e];
			return t === void 0 && (t = new En(), C[e] = t), t.getHandSpace();
		};
		function I(e) {
			let t = w.indexOf(e.inputSource);
			if (t === -1) return;
			let n = C[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function ee() {
			r.removeEventListener("select", I), r.removeEventListener("selectstart", I), r.removeEventListener("selectend", I), r.removeEventListener("squeeze", I), r.removeEventListener("squeezestart", I), r.removeEventListener("squeezeend", I), r.removeEventListener("end", ee), r.removeEventListener("inputsourceschange", te);
			for (let e = 0; e < C.length; e++) {
				let t = w[e];
				t !== null && (w[e] = null, C[e].disconnect(t));
			}
			P = null, F = null, _.reset();
			for (let e in v) delete v[e];
			e.setRenderTarget(b), p = null, f = null, u = null, r = null, S = null, ce.stop(), n.isPresenting = !1, e.setPixelRatio(k), e.setSize(T.width, T.height, !1), n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && H("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && H("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return f === null ? p : f;
		}, this.getBinding = function() {
			return u === null && h && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return m;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (b = e.getRenderTarget(), r.addEventListener("select", I), r.addEventListener("selectstart", I), r.addEventListener("selectend", I), r.addEventListener("squeeze", I), r.addEventListener("squeezestart", I), r.addEventListener("squeezeend", I), r.addEventListener("end", ee), r.addEventListener("inputsourceschange", te), y.xrCompatible !== !0 && await t.makeXRCompatible(), k = e.getPixelRatio(), e.getSize(T), h && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					y.depth && (o = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = y.stencil ? O : D, a = y.stencil ? x : g);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), f = u.createProjectionLayer(s), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), S = new qt(f.textureWidth, f.textureHeight, {
						format: E,
						type: d,
						depthTexture: new hi(f.textureWidth, f.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: y.stencil,
						colorSpace: e.outputColorSpace,
						samples: y.antialias ? 4 : 0,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: y.antialias,
						alpha: !0,
						depth: y.depth,
						stencil: y.stencil,
						framebufferScaleFactor: i
					};
					p = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), S = new qt(p.framebufferWidth, p.framebufferHeight, {
						format: E,
						type: d,
						colorSpace: e.outputColorSpace,
						stencilBuffer: y.stencil,
						resolveDepthBuffer: p.ignoreDepthValues === !1,
						resolveStencilBuffer: p.ignoreDepthValues === !1
					});
				}
				S.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), ce.setContext(r), ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return _.getDepthTexture();
		};
		function te(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = w.indexOf(n);
				r >= 0 && (w[r] = null, C[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = w.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < C.length; e++) if (e >= w.length) {
						w.push(n), r = e;
						break;
					} else if (w[e] === null) {
						w[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = C[r];
				i && i.connect(n);
			}
		}
		let ne = new K(), re = new K();
		function L(e, t, n) {
			ne.setFromMatrixPosition(t.matrixWorld), re.setFromMatrixPosition(n.matrixWorld);
			let r = ne.distanceTo(re), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
				e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function ie(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			_.texture !== null && (_.depthNear > 0 && (t = _.depthNear), _.depthFar > 0 && (n = _.depthFar)), N.near = j.near = A.near = t, N.far = j.far = A.far = n, (P !== N.near || F !== N.far) && (r.updateRenderState({
				depthNear: N.near,
				depthFar: N.far
			}), P = N.near, F = N.far), N.layers.mask = e.layers.mask | 6, A.layers.mask = N.layers.mask & -5, j.layers.mask = N.layers.mask & -3;
			let i = e.parent, a = N.cameras;
			ie(N, i);
			for (let e = 0; e < a.length; e++) ie(a[e], i);
			a.length === 2 ? L(N, A, j) : N.projectionMatrix.copy(A.projectionMatrix), ae(e, N, i);
		};
		function ae(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = at * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return N;
		}, this.getFoveation = function() {
			if (!(f === null && p === null)) return s;
		}, this.setFoveation = function(e) {
			s = e, f !== null && (f.fixedFoveation = e), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return _.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return _.getMesh(N);
		}, this.getCameraTexture = function(e) {
			return v[e];
		};
		let oe = null;
		function se(t, i) {
			if (l = i.getViewerPose(c || a), m = i, l !== null) {
				let t = l.views;
				p !== null && (e.setRenderTargetFramebuffer(S, p.framebuffer), e.setRenderTarget(S));
				let i = !1;
				t.length !== N.cameras.length && (N.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (p !== null) a = p.getViewport(r);
					else {
						let t = u.getViewSubImage(f, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(S, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(S));
					}
					let o = M[n];
					o === void 0 && (o = new ia(), o.layers.enable(n), o.viewport = new Gt(), M[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (N.matrix.copy(o.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale)), i === !0 && N.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && _.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && h) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = v[n];
							e || (e = new _i(), v[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < C.length; e++) {
				let t = w[e], n = C[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			oe && oe(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), m = null;
		}
		let ce = new Ea();
		ce.setAnimationLoop(se), this.setAnimationLoop = function(e) {
			oe = e;
		}, this.dispose = function() {};
	}
}, Fc = /* @__PURE__ */ new Y(), Ic = /* @__PURE__ */ new q();
Ic.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Lc(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Di(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(Fc.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(Ic), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function Rc(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return U("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let t = 0, n = r.length; t < n; t++) {
			let n = Array.isArray(r[t]) ? r[t] : [r[t]];
			for (let r = 0, i = n.length; r < i; r++) {
				let i = n[r];
				if (p(i, t, r, a) === !0) {
					let t = i.__offset, n = Array.isArray(i.value) ? i.value : [i.value], r = 0;
					for (let a = 0; a < n.length; a++) {
						let o = n[a], s = h(o);
						typeof o == "number" || typeof o == "boolean" ? (i.__data[0] = o, e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data)) : o.isMatrix3 ? (i.__data[0] = o.elements[0], i.__data[1] = o.elements[1], i.__data[2] = o.elements[2], i.__data[3] = 0, i.__data[4] = o.elements[3], i.__data[5] = o.elements[4], i.__data[6] = o.elements[5], i.__data[7] = 0, i.__data[8] = o.elements[6], i.__data[9] = o.elements[7], i.__data[10] = o.elements[8], i.__data[11] = 0) : ArrayBuffer.isView(o) ? i.__data.set(new o.constructor(o.buffer, o.byteOffset, i.__data.length)) : (o.toArray(i.__data, r), r += s.storage / Float32Array.BYTES_PER_ELEMENT);
					}
					e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
				}
			}
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return typeof i == "number" || typeof i == "boolean" ? r[a] = i : ArrayBuffer.isView(i) ? r[a] = i.slice() : r[a] = i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = h(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? H("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : H("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: _
	};
}
var zc = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), Bc = null;
function Vc() {
	return Bc === null && (Bc = new ii(zc, 16, 16, j, v), Bc.name = "DFG_LUT", Bc.minFilter = c, Bc.magFilter = c, Bc.wrapS = r, Bc.wrapT = r, Bc.generateMipmaps = !1, Bc.needsUpdate = !0), Bc;
}
var Hc = class {
	constructor(e = {}) {
		let { canvas: t = qe(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: f = !1, reversedDepthBuffer: p = !1, outputBufferType: h = d } = e;
		this.isWebGLRenderer = !0;
		let _;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			_ = n.getContextAttributes().alpha;
		} else _ = a;
		let S = h, C = new Set([
			N,
			M,
			A
		]), w = new Set([
			d,
			g,
			m,
			x,
			y,
			b
		]), T = new Uint32Array(4), E = new Int32Array(4), D = new K(), O = null, k = null, j = [], P = [], F = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let I = this, ee = !1, te = null;
		this._outputColorSpace = Ie;
		let ne = 0, re = 0, L = null, ie = -1, ae = null, oe = new Gt(), se = new Gt(), ce = null, le = new jn(0), ue = 0, de = t.width, fe = t.height, pe = 1, me = null, he = null, ge = new Gt(0, 0, de, fe), _e = new Gt(0, 0, de, fe), ve = !1, ye = new pi(), be = !1, xe = !1, Se = new Y(), Ce = new K(), we = new Gt(), Te = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, Ee = !1;
		function De() {
			return L === null ? pe : 1;
		}
		let R = n;
		function Oe(e, n) {
			return t.getContext(e, n);
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: f
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r184"), t.addEventListener("webglcontextlost", nt, !1), t.addEventListener("webglcontextrestored", rt, !1), t.addEventListener("webglcontextcreationerror", it, !1), R === null) {
				let t = "webgl2";
				if (R = Oe(t, e), R === null) throw Oe(t) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.");
			}
		} catch (e) {
			throw U("WebGLRenderer: " + e.message), e;
		}
		let ke, Ae, z, je, B, V, Me, Ne, Pe, Fe, Le, Re, ze, Be, Ve, He, We, Ge, Ke, Je, Ye, Ze, Qe;
		function et() {
			ke = new ao(R), ke.init(), Ye = new Ac(R, ke), Ae = new Fa(R, ke, e, Ye), z = new Oc(R, ke), Ae.reversedDepthBuffer && p && z.buffers.depth.setReversed(!0), je = new co(R), B = new cc(), V = new kc(R, ke, z, B, Ae, Ye, je), Me = new io(I), Ne = new Da(R), Ze = new Na(R, Ne), Pe = new oo(R, Ne, je, Ze), Fe = new uo(R, Pe, Ne, Ze, je), Ge = new lo(R, Ae, V), Ve = new Ia(B), Le = new sc(I, Me, ke, Ae, Ze, Ve), Re = new Lc(I, B), ze = new fc(), Be = new yc(ke), We = new Ma(I, Me, z, Fe, _, s), He = new Dc(I, Fe, Ae), Qe = new Rc(R, je, Ae, z), Ke = new Pa(R, ke, je), Je = new so(R, ke, je), je.programs = Le.programs, I.capabilities = Ae, I.extensions = ke, I.properties = B, I.renderLists = ze, I.shadowMap = He, I.state = z, I.info = je;
		}
		et(), S !== 1009 && (F = new po(S, t.width, t.height, r, i));
		let tt = new Pc(I, R);
		this.xr = tt, this.getContext = function() {
			return R;
		}, this.getContextAttributes = function() {
			return R.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = ke.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = ke.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return pe;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (pe = e, this.setSize(de, fe, !1));
		}, this.getSize = function(e) {
			return e.set(de, fe);
		}, this.setSize = function(e, n, r = !0) {
			if (tt.isPresenting) {
				H("WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			de = e, fe = n, t.width = Math.floor(e * pe), t.height = Math.floor(n * pe), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), F !== null && F.setSize(t.width, t.height), this.setViewport(0, 0, e, n);
		}, this.getDrawingBufferSize = function(e) {
			return e.set(de * pe, fe * pe).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			de = e, fe = n, pe = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (S === 1009) {
				U("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
				return;
			}
			if (e) {
				for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
					H("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
					break;
				}
			}
			F.setEffects(e || []);
		}, this.getCurrentViewport = function(e) {
			return e.copy(oe);
		}, this.getViewport = function(e) {
			return e.copy(ge);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ge.set(e.x, e.y, e.z, e.w) : ge.set(e, t, n, r), z.viewport(oe.copy(ge).multiplyScalar(pe).round());
		}, this.getScissor = function(e) {
			return e.copy(_e);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? _e.set(e.x, e.y, e.z, e.w) : _e.set(e, t, n, r), z.scissor(se.copy(_e).multiplyScalar(pe).round());
		}, this.getScissorTest = function() {
			return ve;
		}, this.setScissorTest = function(e) {
			z.setScissorTest(ve = e);
		}, this.setOpaqueSort = function(e) {
			me = e;
		}, this.setTransparentSort = function(e) {
			he = e;
		}, this.getClearColor = function(e) {
			return e.copy(We.getClearColor());
		}, this.setClearColor = function() {
			We.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return We.getClearAlpha();
		}, this.setClearAlpha = function() {
			We.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (L !== null) {
					let t = L.texture.format;
					e = C.has(t);
				}
				if (e) {
					let e = L.texture.type, t = w.has(e), n = We.getClearColor(), r = We.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (T[0] = i, T[1] = a, T[2] = o, T[3] = r, R.clearBufferuiv(R.COLOR, 0, T)) : (E[0] = i, E[1] = a, E[2] = o, E[3] = r, R.clearBufferiv(R.COLOR, 0, E));
				} else r |= R.COLOR_BUFFER_BIT;
			}
			t && (r |= R.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && R.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), te = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", nt, !1), t.removeEventListener("webglcontextrestored", rt, !1), t.removeEventListener("webglcontextcreationerror", it, !1), We.dispose(), ze.dispose(), Be.dispose(), B.dispose(), Me.dispose(), Fe.dispose(), Ze.dispose(), Qe.dispose(), Le.dispose(), tt.dispose(), tt.removeEventListener("sessionstart", ut), tt.removeEventListener("sessionend", dt), ft.stop();
		};
		function nt(e) {
			e.preventDefault(), Xe("WebGLRenderer: Context Lost."), ee = !0;
		}
		function rt() {
			Xe("WebGLRenderer: Context Restored."), ee = !1;
			let e = je.autoReset, t = He.enabled, n = He.autoUpdate, r = He.needsUpdate, i = He.type;
			et(), je.autoReset = e, He.enabled = t, He.autoUpdate = n, He.needsUpdate = r, He.type = i;
		}
		function it(e) {
			U("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function at(e) {
			let t = e.target;
			t.removeEventListener("dispose", at), ot(t);
		}
		function ot(e) {
			W(e), B.remove(e);
		}
		function W(e) {
			let t = B.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Le.releaseProgram(e);
			}), e.isShaderMaterial && Le.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = Te);
			let o = i.isMesh && i.matrixWorld.determinant() < 0, s = St(e, t, n, r, i);
			z.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = Pe.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Ze.setup(i, r, s, n, c);
			let h, g = Ke;
			if (c !== null && (h = Ne.get(c), g = Je, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (z.setLineWidth(r.wireframeLinewidth * De()), g.setMode(R.LINES)) : g.setMode(R.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), z.setLineWidth(e * De()), i.isLineSegments ? g.setMode(R.LINES) : i.isLineLoop ? g.setMode(R.LINE_LOOP) : g.setMode(R.LINE_STRIP);
			} else i.isPoints ? g.setMode(R.POINTS) : i.isSprite && g.setMode(R.TRIANGLES);
			if (i.isBatchedMesh) if (ke.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
			else {
				let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Ne.get(c).bytesPerElement : 1, o = B.get(r).currentProgram.getUniforms();
				for (let r = 0; r < n; r++) o.setValue(R, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
			}
			else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function st(e, t, n) {
			e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, vt(e, t, n), e.side = 0, e.needsUpdate = !0, vt(e, t, n), e.side = 2) : vt(e, t, n);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), k = Be.get(n), k.init(t), P.push(k), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), k.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
					let a = t[i];
					st(a, n, e), r.add(a);
				}
				else st(t, n, e), r.add(t);
			}), k = P.pop(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					if (r.forEach(function(e) {
						B.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0) {
						t(e);
						return;
					}
					setTimeout(n, 10);
				}
				ke.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let ct = null;
		function lt(e) {
			ct && ct(e);
		}
		function ut() {
			ft.stop();
		}
		function dt() {
			ft.start();
		}
		let ft = new Ea();
		ft.setAnimationLoop(lt), typeof self < "u" && ft.setContext(self), this.setAnimationLoop = function(e) {
			ct = e, tt.setAnimationLoop(e), e === null ? ft.stop() : ft.start();
		}, tt.addEventListener("sessionstart", ut), tt.addEventListener("sessionend", dt), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				U("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (ee === !0) return;
			te !== null && te.renderStart(e, t);
			let n = tt.enabled === !0 && tt.isPresenting === !0, r = F !== null && (L === null || n) && F.begin(I, L);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), tt.enabled === !0 && tt.isPresenting === !0 && (F === null || F.isCompositing() === !1) && (tt.cameraAutoUpdate === !0 && tt.updateCamera(t), t = tt.getCamera()), e.isScene === !0 && e.onBeforeRender(I, e, t, L), k = Be.get(e, P.length), k.init(t), k.state.textureUnits = V.getTextureUnits(), P.push(k), Se.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ye.setFromProjectionMatrix(Se, Ue, t.reversedDepth), xe = this.localClippingEnabled, be = Ve.init(this.clippingPlanes, xe), O = ze.get(e, j.length), O.init(), j.push(O), tt.enabled === !0 && tt.isPresenting === !0) {
				let e = I.xr.getDepthSensingMesh();
				e !== null && pt(e, t, -Infinity, I.sortObjects);
			}
			pt(e, t, 0, I.sortObjects), O.finish(), I.sortObjects === !0 && O.sort(me, he), Ee = tt.enabled === !1 || tt.isPresenting === !1 || tt.hasDepthSensing() === !1, Ee && We.addToRenderList(O, e), this.info.render.frame++, be === !0 && Ve.beginShadows();
			let i = k.state.shadowsArray;
			if (He.render(i, e, t), be === !0 && Ve.endShadows(), this.info.autoReset === !0 && this.info.reset(), (r && F.hasRenderPass()) === !1) {
				let n = O.opaque, r = O.transmissive;
				if (k.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						ht(n, r, e, a);
					}
					Ee && We.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						mt(O, e, n, n.viewport);
					}
				} else r.length > 0 && ht(n, r, e, t), Ee && We.render(e), mt(O, e, t);
			}
			L !== null && re === 0 && (V.updateMultisampleRenderTarget(L), V.updateRenderTargetMipmap(L)), r && F.end(I), e.isScene === !0 && e.onAfterRender(I, e, t), Ze.resetDefaultState(), ie = -1, ae = null, P.pop(), P.length > 0 ? (k = P[P.length - 1], V.setTextureUnits(k.state.textureUnits), be === !0 && Ve.setGlobalState(I.clippingPlanes, k.state.camera)) : k = null, j.pop(), O = j.length > 0 ? j[j.length - 1] : null, te !== null && te.renderEnd();
		};
		function pt(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLightProbeGrid) k.pushLightProbeGrid(e);
				else if (e.isLight) k.pushLight(e), e.castShadow && k.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || ye.intersectsSprite(e)) {
						r && we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);
						let t = Fe.update(e), i = e.material;
						i.visible && O.push(e, t, i, n, we.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || ye.intersectsObject(e))) {
					let t = Fe.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), we.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), we.copy(e.boundingSphere.center)), we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && O.push(e, t, s, n, we.z, o);
						}
					} else i.visible && O.push(e, t, i, n, we.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) pt(i[e], t, n, r);
		}
		function mt(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			k.setupLightsView(n), be === !0 && Ve.setGlobalState(I.clippingPlanes, n), r && z.viewport(oe.copy(r)), i.length > 0 && gt(i, t, n), a.length > 0 && gt(a, t, n), o.length > 0 && gt(o, t, n), z.buffers.depth.setTest(!0), z.buffers.depth.setMask(!0), z.buffers.color.setMask(!0), z.setPolygonOffset(!1);
		}
		function ht(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (k.state.transmissionRenderTarget[r.id] === void 0) {
				let e = ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float");
				k.state.transmissionRenderTarget[r.id] = new qt(1, 1, {
					generateMipmaps: !0,
					type: e ? v : d,
					minFilter: u,
					samples: Math.max(4, Ae.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					colorSpace: J.workingColorSpace
				});
			}
			let a = k.state.transmissionRenderTarget[r.id], o = r.viewport || oe;
			a.setSize(o.z * I.transmissionResolutionScale, o.w * I.transmissionResolutionScale);
			let s = I.getRenderTarget(), c = I.getActiveCubeFace(), l = I.getActiveMipmapLevel();
			I.setRenderTarget(a), I.getClearColor(le), ue = I.getClearAlpha(), ue < 1 && I.setClearColor(16777215, .5), I.clear(), Ee && We.render(n);
			let f = I.toneMapping;
			I.toneMapping = 0;
			let p = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), k.setupLightsView(r), be === !0 && Ve.setGlobalState(I.clippingPlanes, r), gt(e, n, r), V.updateMultisampleRenderTarget(a), V.updateRenderTargetMipmap(a), ke.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, _t(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (V.updateMultisampleRenderTarget(a), V.updateRenderTargetMipmap(a));
			}
			I.setRenderTarget(s, c, l), I.setClearColor(le, ue), p !== void 0 && (r.viewport = p), I.toneMapping = f;
		}
		function gt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && _t(o, t, n, s, l, c);
			}
		}
		function _t(e, t, n, r, i, a) {
			e.onBeforeRender(I, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(I, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, I.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, I.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : I.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(I, t, n, r, i, a);
		}
		function vt(e, t, n) {
			t.isScene !== !0 && (t = Te);
			let r = B.get(e), i = k.state.lights, a = k.state.shadowsArray, o = i.state.version, s = Le.getParameters(e, i.state, a, t, n, k.state.lightProbeGridArray), c = Le.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Me.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", at), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return bt(e, s), d;
			} else s.uniforms = Le.getUniforms(e), te !== null && e.isNodeMaterial && te.build(e, n, s), e.onBeforeCompile(s, I), d = Le.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = Ve.uniform), bt(e, s), r.needsLights = wt(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = k.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
		}
		function yt(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = bs.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function bt(e, t) {
			let n = B.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function xt(e, t) {
			if (e.length === 0) return null;
			if (e.length === 1) return e[0].texture === null ? null : e[0];
			D.setFromMatrixPosition(t.matrixWorld);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				if (n.texture !== null && n.boundingBox.containsPoint(D)) return n;
			}
			return null;
		}
		function St(e, t, n, r, i) {
			t.isScene !== !0 && (t = Te), V.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = L === null ? I.outputColorSpace : L.isXRRenderTarget === !0 ? L.texture.colorSpace : J.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Me.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (L === null || L.isXRRenderTarget === !0) && (h = I.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = B.get(r), y = k.state.lights;
			if (be === !0 && (xe === !0 || e !== ae)) {
				let t = e === ae && r.id === ie;
				Ve.setState(r, e, t);
			}
			let b = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? b = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== Ve.numPlanes || v.numIntersection !== Ve.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _ ? !!v.lightProbeGrid != k.state.lightProbeGridArray.length > 0 && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = r.version);
			let x = v.currentProgram;
			b === !0 && (x = vt(r, t, i), te && r.isNodeMaterial && te.onUpdateProgram(r, x, v));
			let S = !1, C = !1, w = !1, T = x.getUniforms(), E = v.uniforms;
			if (z.useProgram(x.program) && (S = !0, C = !0, w = !0), r.id !== ie && (ie = r.id, C = !0), v.needsLights) {
				let e = xt(k.state.lightProbeGridArray, i);
				v.lightProbeGrid !== e && (v.lightProbeGrid = e, C = !0);
			}
			if (S || ae !== e) {
				z.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), T.setValue(R, "projectionMatrix", e.projectionMatrix), T.setValue(R, "viewMatrix", e.matrixWorldInverse);
				let t = T.map.cameraPosition;
				t !== void 0 && t.setValue(R, Ce.setFromMatrixPosition(e.matrixWorld)), Ae.logarithmicDepthBuffer && T.setValue(R, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && T.setValue(R, "isOrthographic", e.isOrthographicCamera === !0), ae !== e && (ae = e, C = !0, w = !0);
			}
			if (v.needsLights && (y.state.directionalShadowMap.length > 0 && T.setValue(R, "directionalShadowMap", y.state.directionalShadowMap, V), y.state.spotShadowMap.length > 0 && T.setValue(R, "spotShadowMap", y.state.spotShadowMap, V), y.state.pointShadowMap.length > 0 && T.setValue(R, "pointShadowMap", y.state.pointShadowMap, V)), i.isSkinnedMesh) {
				T.setOptional(R, i, "bindMatrix"), T.setOptional(R, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), T.setValue(R, "boneTexture", e.boneTexture, V));
			}
			i.isBatchedMesh && (T.setOptional(R, i, "batchingTexture"), T.setValue(R, "batchingTexture", i._matricesTexture, V), T.setOptional(R, i, "batchingIdTexture"), T.setValue(R, "batchingIdTexture", i._indirectTexture, V), T.setOptional(R, i, "batchingColorTexture"), i._colorsTexture !== null && T.setValue(R, "batchingColorTexture", i._colorsTexture, V));
			let D = n.morphAttributes;
			if ((D.position !== void 0 || D.normal !== void 0 || D.color !== void 0) && Ge.update(i, n, x), (C || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, T.setValue(R, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (E.envMapIntensity.value = t.environmentIntensity), E.dfgLUT !== void 0 && (E.dfgLUT.value = Vc()), C) {
				if (T.setValue(R, "toneMappingExposure", I.toneMappingExposure), v.needsLights && Ct(E, w), a && r.fog === !0 && Re.refreshFogUniforms(E, a), Re.refreshMaterialUniforms(E, r, pe, fe, k.state.transmissionRenderTarget[e.id]), v.needsLights && v.lightProbeGrid) {
					let e = v.lightProbeGrid;
					E.probesSH.value = e.texture, E.probesMin.value.copy(e.boundingBox.min), E.probesMax.value.copy(e.boundingBox.max), E.probesResolution.value.copy(e.resolution);
				}
				bs.upload(R, yt(v), E, V);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (bs.upload(R, yt(v), E, V), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && T.setValue(R, "center", i.center), T.setValue(R, "modelViewMatrix", i.modelViewMatrix), T.setValue(R, "normalMatrix", i.normalMatrix), T.setValue(R, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Qe.update(n, x), Qe.bind(n, x);
				}
			}
			return x;
		}
		function Ct(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function wt(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return ne;
		}, this.getActiveMipmapLevel = function() {
			return re;
		}, this.getRenderTarget = function() {
			return L;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = B.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), B.get(e.texture).__webglTexture = t, B.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = B.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		};
		let Tt = R.createFramebuffer();
		this.setRenderTarget = function(e, t = 0, n = 0) {
			L = e, ne = t, re = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = B.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					z.bindFramebuffer(R.FRAMEBUFFER, o.__webglFramebuffer), oe.copy(e.viewport), se.copy(e.scissor), ce = e.scissorTest, z.viewport(oe), z.scissor(se), z.setScissorTest(ce), ie = -1;
					return;
				} else if (o.__webglFramebuffer === void 0) V.setupRenderTarget(e);
				else if (o.__hasExternalTextures) V.rebindTextures(e, B.get(e.texture).__webglTexture, B.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && B.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
						V.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = B.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && V.useMultisampledRTT(e) === !1 ? B.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, oe.copy(e.viewport), se.copy(e.scissor), ce = e.scissorTest;
			} else oe.copy(ge).multiplyScalar(pe).floor(), se.copy(_e).multiplyScalar(pe).floor(), ce = ve;
			if (n !== 0 && (r = Tt), z.bindFramebuffer(R.FRAMEBUFFER, r) && z.drawBuffers(e, r), z.viewport(oe), z.scissor(se), z.setScissorTest(ce), i) {
				let r = B.get(e.texture);
				R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = B.get(e.textures[t]);
					R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = B.get(e.texture);
				R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, t.__webglTexture, n);
			}
			ie = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				U("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = B.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				z.bindFramebuffer(R.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					if (e.textures.length > 1 && R.readBuffer(R.COLOR_ATTACHMENT0 + s), !Ae.textureFormatReadable(c)) {
						U("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (!Ae.textureTypeReadable(l)) {
						U("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && R.readPixels(t, n, r, i, Ye.convert(c), Ye.convert(l), a);
				} finally {
					let e = L === null ? null : B.get(L).__webglFramebuffer;
					z.bindFramebuffer(R.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = B.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
				z.bindFramebuffer(R.FRAMEBUFFER, c);
				let o = e.textures[s], l = o.format, u = o.type;
				if (e.textures.length > 1 && R.readBuffer(R.COLOR_ATTACHMENT0 + s), !Ae.textureFormatReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
				if (!Ae.textureTypeReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
				let d = R.createBuffer();
				R.bindBuffer(R.PIXEL_PACK_BUFFER, d), R.bufferData(R.PIXEL_PACK_BUFFER, a.byteLength, R.STREAM_READ), R.readPixels(t, n, r, i, Ye.convert(l), Ye.convert(u), 0);
				let f = L === null ? null : B.get(L).__webglFramebuffer;
				z.bindFramebuffer(R.FRAMEBUFFER, f);
				let p = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
				return R.flush(), await $e(R, p, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, d), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, a), R.deleteBuffer(d), R.deleteSync(p), a;
			} else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			V.setTexture2D(e, 0), R.copyTexSubImage2D(R.TEXTURE_2D, n, 0, 0, o, s, i, a), z.unbindTexture();
		};
		let Et = R.createFramebuffer(), Dt = R.createFramebuffer();
		this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Ye.convert(t.format), _ = Ye.convert(t.type), v;
			t.isData3DTexture ? (V.setTexture3D(t, 0), v = R.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (V.setTexture2DArray(t, 0), v = R.TEXTURE_2D_ARRAY) : (V.setTexture2D(t, 0), v = R.TEXTURE_2D), z.activeTexture(R.TEXTURE0), z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, t.flipY), z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), z.pixelStorei(R.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = z.getParameter(R.UNPACK_ROW_LENGTH), b = z.getParameter(R.UNPACK_IMAGE_HEIGHT), x = z.getParameter(R.UNPACK_SKIP_PIXELS), S = z.getParameter(R.UNPACK_SKIP_ROWS), C = z.getParameter(R.UNPACK_SKIP_IMAGES);
			z.pixelStorei(R.UNPACK_ROW_LENGTH, h.width), z.pixelStorei(R.UNPACK_IMAGE_HEIGHT, h.height), z.pixelStorei(R.UNPACK_SKIP_PIXELS, l), z.pixelStorei(R.UNPACK_SKIP_ROWS, u), z.pixelStorei(R.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = B.get(e), r = B.get(t), h = B.get(n.__renderTarget), g = B.get(r.__renderTarget);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, h.__webglFramebuffer), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, B.get(e).__webglTexture, i, d + n), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, B.get(t).__webglTexture, a, m + n)), R.blitFramebuffer(l, u, o, s, f, p, o, s, R.DEPTH_BUFFER_BIT, R.NEAREST);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, null), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || B.has(e)) {
				let n = B.get(e), r = B.get(t);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, Et), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, Dt);
				for (let e = 0; e < c; e++) w ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, n.__webglTexture, i), T ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? R.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : R.copyTexSubImage2D(v, a, f, p, l, u, o, s) : R.blitFramebuffer(l, u, o, s, f, p, o, s, R.COLOR_BUFFER_BIT, R.NEAREST);
				z.bindFramebuffer(R.READ_FRAMEBUFFER, null), z.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? R.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? R.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : R.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : R.texSubImage2D(R.TEXTURE_2D, a, f, p, o, s, g, _, h);
			z.pixelStorei(R.UNPACK_ROW_LENGTH, y), z.pixelStorei(R.UNPACK_IMAGE_HEIGHT, b), z.pixelStorei(R.UNPACK_SKIP_PIXELS, x), z.pixelStorei(R.UNPACK_SKIP_ROWS, S), z.pixelStorei(R.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && R.generateMipmap(v), z.unbindTexture();
		}, this.initRenderTarget = function(e) {
			B.get(e).__webglFramebuffer === void 0 && V.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? V.setTextureCube(e, 0) : e.isData3DTexture ? V.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? V.setTexture2DArray(e, 0) : V.setTexture2D(e, 0), z.unbindTexture();
		}, this.resetState = function() {
			ne = 0, re = 0, L = null, z.reset(), Ze.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return Ue;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = J._getDrawingBufferColorSpace(e), t.unpackColorSpace = J._getUnpackColorSpace();
	}
}, Uc = class e {
	static idGen = 0;
	constructor(t, n) {
		let r, i;
		this.promise = new Promise((e, t) => {
			r = e, i = t;
		});
		let a = r.bind(this), o = i.bind(this);
		t(((...e) => {
			a(...e);
		}).bind(this), ((e) => {
			o(e);
		}).bind(this)), this.abortHandler = n, this.id = e.idGen++;
	}
	then(t) {
		return new e((n, r) => {
			this.promise = this.promise.then((...r) => {
				let i = t(...r);
				i instanceof Promise || i instanceof e ? i.then((...e) => {
					n(...e);
				}) : n(i);
			}).catch((e) => {
				r(e);
			});
		}, this.abortHandler);
	}
	catch(t) {
		return new e((e) => {
			this.promise = this.promise.then((...t) => {
				e(...t);
			}).catch(t);
		}, this.abortHandler);
	}
	abort(e) {
		this.abortHandler && this.abortHandler(e);
	}
}, Wc = class extends Error {
	constructor(e) {
		super(e);
	}
};
(function() {
	let e = new Float32Array(1), t = new Int32Array(e.buffer);
	return function(n) {
		e[0] = n;
		let r = t[0], i = r >> 16 & 32768, a = r >> 12 & 2047, o = r >> 23 & 255;
		return o < 103 ? i : o > 142 ? (i |= 31744, i |= (o == 255 ? 0 : 1) && r & 8388607, i) : o < 113 ? (a |= 2048, i |= (a >> 114 - o) + (a >> 113 - o & 1), i) : (i |= o - 112 << 10 | a >> 1, i += a & 1, i);
	};
})();
var Gc = function() {
	let e = new Float32Array(1), t = new Int32Array(e.buffer);
	return function(n) {
		return e[0] = n, t[0];
	};
}(), Kc = function(e, t) {
	return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
}, qc = function(e, t, n = !0, r) {
	let i = new AbortController(), a = i.signal, o = !1, s = (e) => {
		i.abort(e), o = !0;
	}, c = !1, l = (e, n, r, i) => {
		t && !c && (t(e, n, r, i), e === 100 && (c = !0));
	};
	return new Uc((t, i) => {
		let s = { signal: a };
		r && (s.headers = r), fetch(e, s).then(async (e) => {
			if (!e.ok) {
				let t = await e.text();
				i(/* @__PURE__ */ Error(`Fetch failed: ${e.status} ${e.statusText} ${t}`));
				return;
			}
			let r = e.body.getReader(), a = 0, s = e.headers.get("Content-Length"), c = s ? parseInt(s) : void 0, u = [];
			for (; !o;) try {
				let { value: e, done: i } = await r.read();
				if (i) {
					l(100, "100%", e, c), n ? t(new Blob(u).arrayBuffer()) : t();
					break;
				}
				a += e.length;
				let o, s;
				c !== void 0 && (o = a / c * 100, s = `${o.toFixed(2)}%`), n && u.push(e), l(o, s, e, c);
			} catch (e) {
				i(e);
				return;
			}
		}).catch((e) => {
			i(new Wc(e));
		});
	}, s);
}, Jc = function(e, t, n) {
	return Math.max(Math.min(e, n), t);
}, Yc = function() {
	return performance.now() / 1e3;
}, Xc = (e) => {
	if (e.geometry &&= (e.geometry.dispose(), null), e.material &&= (e.material.dispose(), null), e.children) for (let t of e.children) Xc(t);
}, Zc = (e, t) => new Promise((n) => {
	window.setTimeout(() => {
		n(e ? e() : void 0);
	}, t ? 1 : 50);
}), Qc = (e = 0) => {
	let t = 0;
	if (e === 1) t = 9;
	else if (e === 2) t = 24;
	else if (e === 3) t = 45;
	else if (e > 3) throw Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");
	return t;
}, $c = () => {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}, el = (e) => {
	let t, n;
	return e ||= () => {}, {
		promise: new Uc((e, r) => {
			t = e, n = r;
		}, e),
		resolve: t,
		reject: n
	};
}, tl = class {
	constructor(e, t, n) {
		this.major = e, this.minor = t, this.patch = n;
	}
	toString() {
		return `${this.major}_${this.minor}_${this.patch}`;
	}
};
function nl() {
	let e = navigator.userAgent;
	return e.indexOf("iPhone") > 0 || e.indexOf("iPad") > 0;
}
function rl() {
	if (nl()) {
		let e = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
		return new tl(parseInt(e[1] || 0, 10), parseInt(e[2] || 0, 10), parseInt(e[3] || 0, 10));
	} else return null;
}
var il = 14, Q = class e {
	static OFFSET = {
		X: 0,
		Y: 1,
		Z: 2,
		SCALE0: 3,
		SCALE1: 4,
		SCALE2: 5,
		ROTATION0: 6,
		ROTATION1: 7,
		ROTATION2: 8,
		ROTATION3: 9,
		FDC0: 10,
		FDC1: 11,
		FDC2: 12,
		OPACITY: 13,
		FRC0: 14,
		FRC1: 15,
		FRC2: 16,
		FRC3: 17,
		FRC4: 18,
		FRC5: 19,
		FRC6: 20,
		FRC7: 21,
		FRC8: 22,
		FRC9: 23,
		FRC10: 24,
		FRC11: 25,
		FRC12: 26,
		FRC13: 27,
		FRC14: 28,
		FRC15: 29,
		FRC16: 30,
		FRC17: 31,
		FRC18: 32,
		FRC19: 33,
		FRC20: 34,
		FRC21: 35,
		FRC22: 36,
		FRC23: 37
	};
	constructor(e = 0) {
		this.sphericalHarmonicsDegree = e, this.sphericalHarmonicsCount = Qc(this.sphericalHarmonicsDegree), this.componentCount = this.sphericalHarmonicsCount + il, this.defaultSphericalHarmonics = Array(this.sphericalHarmonicsCount).fill(0), this.splats = [], this.splatCount = 0;
	}
	static createSplat(e = 0) {
		let t = [
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		], n = Qc(e);
		for (let e = 0; e < n; e++) t.push(0);
		return t;
	}
	addSplat(e) {
		this.splats.push(e), this.splatCount++;
	}
	getSplat(e) {
		return this.splats[e];
	}
	addDefaultSplat() {
		let t = e.createSplat(this.sphericalHarmonicsDegree);
		return this.addSplat(t), t;
	}
	addSplatFromComonents(e, t, n, r, i, a, o, s, c, l, u, d, f, p, ...m) {
		let h = [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s,
			c,
			l,
			u,
			d,
			f,
			p,
			...this.defaultSphericalHarmonics
		];
		for (let e = 0; e < m.length && e < this.sphericalHarmonicsCount; e++) h[e] = m[e];
		return this.addSplat(h), h;
	}
	addSplatFromArray(t, n) {
		let r = t.splats[n], i = e.createSplat(this.sphericalHarmonicsDegree);
		for (let e = 0; e < this.componentCount && e < r.length; e++) i[e] = r[e];
		this.addSplat(i);
	}
}, al = class {
	static DefaultSplatSortDistanceMapPrecision = 16;
	static MemoryPageSize = 65536;
	static BytesPerFloat = 4;
	static BytesPerInt = 4;
	static MaxScenes = 32;
	static ProgressiveLoadSectionSize = 262144;
	static ProgressiveLoadSectionDelayDuration = 15;
	static SphericalHarmonics8BitCompressionRange = 3;
}, ol = al.SphericalHarmonics8BitCompressionRange / 2, sl = pr.toHalfFloat.bind(pr), cl = pr.fromHalfFloat.bind(pr), ll = (e, t, n = !1, r, i) => {
	if (t === 0) return e;
	if (t === 1 || t === 2 && !n) return pr.fromHalfFloat(e);
	if (t === 2) return dl(e, r, i);
}, ul = (e, t, n) => {
	e = Jc(e, t, n);
	let r = n - t;
	return Jc(Math.floor((e - t) / r * 255), 0, 255);
}, dl = (e, t, n) => {
	let r = n - t;
	return e / 255 * r + t;
}, fl = (e, t, n) => ul(cl(e, t, n)), pl = (e, t, n) => sl(dl(e, t, n)), ml = (e, t, n, r = !1) => n === 0 ? e.getFloat32(t * 4, !0) : n === 1 || n === 2 && !r ? e.getUint16(t * 2, !0) : e.getUint8(t, !0), hl = function() {
	let e = (e) => e;
	return function(t, n, r, i = !1) {
		if (n === r) return t;
		let a = e;
		return n === 2 && i ? r === 1 ? a = pl : r == 0 && (a = dl) : n === 2 || n === 1 ? r === 0 ? a = cl : r == 2 && (a = i ? fl : e) : n === 0 && (r === 1 ? a = sl : r == 2 && (a = i ? ul : sl)), a(t);
	};
}(), gl = (e, t, n, r, i = 0) => {
	let a = new Uint8Array(e, t), o = new Uint8Array(n, r);
	for (let e = 0; e < i; e++) o[e] = a[e];
}, $ = class e {
	static CurrentMajorVersion = 0;
	static CurrentMinorVersion = 1;
	static CenterComponentCount = 3;
	static ScaleComponentCount = 3;
	static RotationComponentCount = 4;
	static ColorComponentCount = 4;
	static CovarianceComponentCount = 6;
	static SplatScaleOffsetFloat = 3;
	static SplatRotationOffsetFloat = 6;
	static CompressionLevels = {
		0: {
			BytesPerCenter: 12,
			BytesPerScale: 12,
			BytesPerRotation: 16,
			BytesPerColor: 4,
			ScaleOffsetBytes: 12,
			RotationffsetBytes: 24,
			ColorOffsetBytes: 40,
			SphericalHarmonicsOffsetBytes: 44,
			ScaleRange: 1,
			BytesPerSphericalHarmonicsComponent: 4,
			SphericalHarmonicsOffsetFloat: 11,
			SphericalHarmonicsDegrees: {
				0: { BytesPerSplat: 44 },
				1: { BytesPerSplat: 80 },
				2: { BytesPerSplat: 140 }
			}
		},
		1: {
			BytesPerCenter: 6,
			BytesPerScale: 6,
			BytesPerRotation: 8,
			BytesPerColor: 4,
			ScaleOffsetBytes: 6,
			RotationffsetBytes: 12,
			ColorOffsetBytes: 20,
			SphericalHarmonicsOffsetBytes: 24,
			ScaleRange: 32767,
			BytesPerSphericalHarmonicsComponent: 2,
			SphericalHarmonicsOffsetFloat: 12,
			SphericalHarmonicsDegrees: {
				0: { BytesPerSplat: 24 },
				1: { BytesPerSplat: 42 },
				2: { BytesPerSplat: 72 }
			}
		},
		2: {
			BytesPerCenter: 6,
			BytesPerScale: 6,
			BytesPerRotation: 8,
			BytesPerColor: 4,
			ScaleOffsetBytes: 6,
			RotationffsetBytes: 12,
			ColorOffsetBytes: 20,
			SphericalHarmonicsOffsetBytes: 24,
			ScaleRange: 32767,
			BytesPerSphericalHarmonicsComponent: 1,
			SphericalHarmonicsOffsetFloat: 12,
			SphericalHarmonicsDegrees: {
				0: { BytesPerSplat: 24 },
				1: { BytesPerSplat: 33 },
				2: { BytesPerSplat: 48 }
			}
		}
	};
	static CovarianceSizeFloats = 6;
	static HeaderSizeBytes = 4096;
	static SectionHeaderSizeBytes = 1024;
	static BucketStorageSizeBytes = 12;
	static BucketStorageSizeFloats = 3;
	static BucketBlockSize = 5;
	static BucketSize = 256;
	constructor(e, t = !0) {
		this.constructFromBuffer(e, t);
	}
	getSplatCount() {
		return this.splatCount;
	}
	getMaxSplatCount() {
		return this.maxSplatCount;
	}
	getMinSphericalHarmonicsDegree() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t++) {
			let n = this.sections[t];
			(t === 0 || n.sphericalHarmonicsDegree < e) && (e = n.sphericalHarmonicsDegree);
		}
		return e;
	}
	getBucketIndex(e, t) {
		let n, r = e.fullBucketCount * e.bucketSize;
		if (t < r) n = Math.floor(t / e.bucketSize);
		else {
			let i = r;
			n = e.fullBucketCount;
			let a = 0;
			for (; i < e.splatCount;) {
				let r = e.partiallyFilledBucketLengths[a];
				if (t >= i && t < i + r) break;
				i += r, n++, a++;
			}
		}
		return n;
	}
	getSplatCenter(t, n, r) {
		let i = this.globalSplatIndexToSectionMap[t], a = this.sections[i], o = t - a.splatCountOffset, s = a.bytesPerSplat * o, c = new DataView(this.bufferData, a.dataBase + s), l = ml(c, 0, this.compressionLevel), u = ml(c, 1, this.compressionLevel), d = ml(c, 2, this.compressionLevel);
		if (this.compressionLevel >= 1) {
			let t = this.getBucketIndex(a, o) * e.BucketStorageSizeFloats, r = a.compressionScaleFactor, i = a.compressionScaleRange;
			n.x = (l - i) * r + a.bucketArray[t], n.y = (u - i) * r + a.bucketArray[t + 1], n.z = (d - i) * r + a.bucketArray[t + 2];
		} else n.x = l, n.y = u, n.z = d;
		r && n.applyMatrix4(r);
	}
	getSplatScaleAndRotation = function() {
		let t = new Y(), n = new Y(), r = new Y(), i = new K(), a = new K(), o = new Ot();
		return function(s, c, l, u, d) {
			let f = this.globalSplatIndexToSectionMap[s], p = this.sections[f], m = s - p.splatCountOffset, h = p.bytesPerSplat * m + e.CompressionLevels[this.compressionLevel].ScaleOffsetBytes, g = new DataView(this.bufferData, p.dataBase + h);
			a.set(ll(ml(g, 0, this.compressionLevel), this.compressionLevel), ll(ml(g, 1, this.compressionLevel), this.compressionLevel), ll(ml(g, 2, this.compressionLevel), this.compressionLevel)), d && (d.x !== void 0 && (a.x = d.x), d.y !== void 0 && (a.y = d.y), d.z !== void 0 && (a.z = d.z)), o.set(ll(ml(g, 4, this.compressionLevel), this.compressionLevel), ll(ml(g, 5, this.compressionLevel), this.compressionLevel), ll(ml(g, 6, this.compressionLevel), this.compressionLevel), ll(ml(g, 3, this.compressionLevel), this.compressionLevel)), u ? (t.makeScale(a.x, a.y, a.z), n.makeRotationFromQuaternion(o), r.copy(t).multiply(n).multiply(u), r.decompose(i, l, c)) : (c.copy(a), l.copy(o));
		};
	}();
	getSplatColor(t, n) {
		let r = this.globalSplatIndexToSectionMap[t], i = this.sections[r], a = t - i.splatCountOffset, o = i.bytesPerSplat * a + e.CompressionLevels[this.compressionLevel].ColorOffsetBytes, s = new Uint8Array(this.bufferData, i.dataBase + o, 4);
		n.set(s[0], s[1], s[2], s[3]);
	}
	fillSplatCenterArray(t, n, r, i, a) {
		let o = this.splatCount;
		r ||= 0, i ||= o - 1, a === void 0 && (a = r);
		let s = new K();
		for (let o = r; o <= i; o++) {
			let i = this.globalSplatIndexToSectionMap[o], c = this.sections[i], l = o - c.splatCountOffset, u = (o - r + a) * e.CenterComponentCount, d = c.bytesPerSplat * l, f = new DataView(this.bufferData, c.dataBase + d), p = ml(f, 0, this.compressionLevel), m = ml(f, 1, this.compressionLevel), h = ml(f, 2, this.compressionLevel);
			if (this.compressionLevel >= 1) {
				let t = this.getBucketIndex(c, l) * e.BucketStorageSizeFloats, n = c.compressionScaleFactor, r = c.compressionScaleRange;
				s.x = (p - r) * n + c.bucketArray[t], s.y = (m - r) * n + c.bucketArray[t + 1], s.z = (h - r) * n + c.bucketArray[t + 2];
			} else s.x = p, s.y = m, s.z = h;
			n && s.applyMatrix4(n), t[u] = s.x, t[u + 1] = s.y, t[u + 2] = s.z;
		}
	}
	fillSplatScaleRotationArray = function() {
		let t = new Y(), n = new Y(), r = new Y(), i = new K(), a = new Ot(), o = new K(), s = (e) => {
			let t = e.w < 0 ? -1 : 1;
			e.x *= t, e.y *= t, e.z *= t, e.w *= t;
		};
		return function(c, l, u, d, f, p, m, h) {
			let g = this.splatCount;
			d ||= 0, f ||= g - 1, p === void 0 && (p = d);
			let _ = (e, t) => (t === void 0 && (t = this.compressionLevel), hl(e, t, m));
			for (let m = d; m <= f; m++) {
				let f = this.globalSplatIndexToSectionMap[m], g = this.sections[f], v = m - g.splatCountOffset, y = g.bytesPerSplat * v + e.CompressionLevels[this.compressionLevel].ScaleOffsetBytes, b = (m - d + p) * e.ScaleComponentCount, x = (m - d + p) * e.RotationComponentCount, S = new DataView(this.bufferData, g.dataBase + y), C = h && h.x !== void 0 ? h.x : ml(S, 0, this.compressionLevel), w = h && h.y !== void 0 ? h.y : ml(S, 1, this.compressionLevel), T = h && h.z !== void 0 ? h.z : ml(S, 2, this.compressionLevel), E = ml(S, 3, this.compressionLevel), D = ml(S, 4, this.compressionLevel), O = ml(S, 5, this.compressionLevel), k = ml(S, 6, this.compressionLevel);
				i.set(ll(C, this.compressionLevel), ll(w, this.compressionLevel), ll(T, this.compressionLevel)), a.set(ll(D, this.compressionLevel), ll(O, this.compressionLevel), ll(k, this.compressionLevel), ll(E, this.compressionLevel)).normalize(), u && (o.set(0, 0, 0), t.makeScale(i.x, i.y, i.z), n.makeRotationFromQuaternion(a), r.identity().premultiply(t).premultiply(n), r.premultiply(u), r.decompose(o, a, i), a.normalize()), s(a), c && (c[b] = _(i.x, 0), c[b + 1] = _(i.y, 0), c[b + 2] = _(i.z, 0)), l && (l[x] = _(a.x, 0), l[x + 1] = _(a.y, 0), l[x + 2] = _(a.z, 0), l[x + 3] = _(a.w, 0));
			}
		};
	}();
	static computeCovariance = function() {
		let e = new Y(), t = new q(), n = new q(), r = new q(), i = new q(), a = new q(), o = new q();
		return function(s, c, l, u, d = 0, f) {
			e.makeScale(s.x, s.y, s.z), t.setFromMatrix4(e), e.makeRotationFromQuaternion(c), n.setFromMatrix4(e), r.copy(n).multiply(t), i.copy(r).transpose().premultiply(r), l && (a.setFromMatrix4(l), o.copy(a).transpose(), i.multiply(o), i.premultiply(a)), f >= 1 ? (u[d] = sl(i.elements[0]), u[d + 1] = sl(i.elements[3]), u[d + 2] = sl(i.elements[6]), u[d + 3] = sl(i.elements[4]), u[d + 4] = sl(i.elements[7]), u[d + 5] = sl(i.elements[8])) : (u[d] = i.elements[0], u[d + 1] = i.elements[3], u[d + 2] = i.elements[6], u[d + 3] = i.elements[4], u[d + 4] = i.elements[7], u[d + 5] = i.elements[8]);
		};
	}();
	fillSplatCovarianceArray(t, n, r, i, a, o) {
		let s = this.splatCount, c = new K(), l = new Ot();
		r ||= 0, i ||= s - 1, a === void 0 && (a = r);
		for (let s = r; s <= i; s++) {
			let i = this.globalSplatIndexToSectionMap[s], u = this.sections[i], d = s - u.splatCountOffset, f = (s - r + a) * e.CovarianceComponentCount, p = u.bytesPerSplat * d + e.CompressionLevels[this.compressionLevel].ScaleOffsetBytes, m = new DataView(this.bufferData, u.dataBase + p);
			c.set(ll(ml(m, 0, this.compressionLevel), this.compressionLevel), ll(ml(m, 1, this.compressionLevel), this.compressionLevel), ll(ml(m, 2, this.compressionLevel), this.compressionLevel)), l.set(ll(ml(m, 4, this.compressionLevel), this.compressionLevel), ll(ml(m, 5, this.compressionLevel), this.compressionLevel), ll(ml(m, 6, this.compressionLevel), this.compressionLevel), ll(ml(m, 3, this.compressionLevel), this.compressionLevel)), e.computeCovariance(c, l, n, t, f, o);
		}
	}
	fillSplatColorArray(t, n, r, i, a) {
		let o = this.splatCount;
		r ||= 0, i ||= o - 1, a === void 0 && (a = r);
		for (let o = r; o <= i; o++) {
			let i = this.globalSplatIndexToSectionMap[o], s = this.sections[i], c = o - s.splatCountOffset, l = (o - r + a) * e.ColorComponentCount, u = s.bytesPerSplat * c + e.CompressionLevels[this.compressionLevel].ColorOffsetBytes, d = new Uint8Array(this.bufferData, s.dataBase + u), f = d[3];
			f = f >= n ? f : 0, t[l] = d[0], t[l + 1] = d[1], t[l + 2] = d[2], t[l + 3] = f;
		}
	}
	fillSphericalHarmonicsArray = function() {
		let t = [];
		for (let e = 0; e < 15; e++) t[e] = new K();
		let n = new q(), r = new Y(), i = new K(), a = new K(), o = new Ot(), s = [], c = [], l = [], u = [], d = [], f = [], p = [], m = [], h = [], g = [], _ = [], v = [], y = [], b = [], x = [], S = [], C = [], w = [], T = (e) => e, E = (e, t, n, r) => {
			e[0] = t, e[1] = n, e[2] = r;
		}, D = (e, t, n, r, i) => {
			e[0] = ml(t, r, i, !0), e[1] = ml(t, r + n, i, !0), e[2] = ml(t, r + n + n, i, !0);
		}, O = (e, t) => {
			t[0] = e[0], t[1] = e[1], t[2] = e[2];
		}, k = (e, t, n, r) => {
			t[n] = r(e[0]), t[n + 1] = r(e[1]), t[n + 2] = r(e[2]);
		}, A = (e, t, n, r, i) => (t[0] = ll(e[0], n, !0, r, i), t[1] = ll(e[1], n, !0, r, i), t[2] = ll(e[2], n, !0, r, i), t);
		return function(t, j, M, N, P, F, I) {
			let ee = this.splatCount;
			N ||= 0, P ||= ee - 1, F === void 0 && (F = N), M && j >= 1 && (r.copy(M), r.decompose(i, o, a), o.normalize(), r.makeRotationFromQuaternion(o), n.setFromMatrix4(r), E(s, n.elements[4], -n.elements[7], n.elements[1]), E(c, -n.elements[5], n.elements[8], -n.elements[2]), E(l, n.elements[3], -n.elements[6], n.elements[0]));
			let te = (e) => fl(e, this.minSphericalHarmonicsCoeff, this.maxSphericalHarmonicsCoeff), ne = (e) => ul(e, this.minSphericalHarmonicsCoeff, this.maxSphericalHarmonicsCoeff);
			for (let n = N; n <= P; n++) {
				let r = this.globalSplatIndexToSectionMap[n], i = this.sections[r];
				j = Math.min(j, i.sphericalHarmonicsDegree);
				let a = Qc(j), o = n - i.splatCountOffset, E = i.bytesPerSplat * o + e.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes, P = new DataView(this.bufferData, i.dataBase + E), ee = (n - N + F) * a, re = M ? 0 : this.compressionLevel, L = T;
				re !== I && (re === 1 ? I === 0 ? L = cl : I == 2 && (L = te) : re === 0 && (I === 1 ? L = sl : I == 2 && (L = ne)));
				let ie = this.minSphericalHarmonicsCoeff, ae = this.maxSphericalHarmonicsCoeff;
				j >= 1 && (D(h, P, 3, 0, this.compressionLevel), D(g, P, 3, 1, this.compressionLevel), D(_, P, 3, 2, this.compressionLevel), M ? (A(h, h, this.compressionLevel, ie, ae), A(g, g, this.compressionLevel, ie, ae), A(_, _, this.compressionLevel, ie, ae), e.rotateSphericalHarmonics3(h, g, _, s, c, l, b, x, S)) : (O(h, b), O(g, x), O(_, S)), k(b, t, ee, L), k(x, t, ee + 3, L), k(S, t, ee + 6, L), j >= 2 && (D(h, P, 5, 9, this.compressionLevel), D(g, P, 5, 10, this.compressionLevel), D(_, P, 5, 11, this.compressionLevel), D(v, P, 5, 12, this.compressionLevel), D(y, P, 5, 13, this.compressionLevel), M ? (A(h, h, this.compressionLevel, ie, ae), A(g, g, this.compressionLevel, ie, ae), A(_, _, this.compressionLevel, ie, ae), A(v, v, this.compressionLevel, ie, ae), A(y, y, this.compressionLevel, ie, ae), e.rotateSphericalHarmonics5(h, g, _, v, y, s, c, l, u, d, f, p, m, b, x, S, C, w)) : (O(h, b), O(g, x), O(_, S), O(v, C), O(y, w)), k(b, t, ee + 9, L), k(x, t, ee + 12, L), k(S, t, ee + 15, L), k(C, t, ee + 18, L), k(w, t, ee + 21, L)));
			}
		};
	}();
	static dot3 = (t, n, r, i, a) => {
		a[0] = a[1] = a[2] = 0;
		let o = i[0], s = i[1], c = i[2];
		e.addInto3(t[0] * o, t[1] * o, t[2] * o, a), e.addInto3(n[0] * s, n[1] * s, n[2] * s, a), e.addInto3(r[0] * c, r[1] * c, r[2] * c, a);
	};
	static addInto3 = (e, t, n, r) => {
		r[0] += e, r[1] += t, r[2] += n;
	};
	static dot5 = (t, n, r, i, a, o, s) => {
		s[0] = s[1] = s[2] = 0;
		let c = o[0], l = o[1], u = o[2], d = o[3], f = o[4];
		e.addInto3(t[0] * c, t[1] * c, t[2] * c, s), e.addInto3(n[0] * l, n[1] * l, n[2] * l, s), e.addInto3(r[0] * u, r[1] * u, r[2] * u, s), e.addInto3(i[0] * d, i[1] * d, i[2] * d, s), e.addInto3(a[0] * f, a[1] * f, a[2] * f, s);
	};
	static rotateSphericalHarmonics3 = (t, n, r, i, a, o, s, c, l) => {
		e.dot3(t, n, r, i, s), e.dot3(t, n, r, a, c), e.dot3(t, n, r, o, l);
	};
	static rotateSphericalHarmonics5 = (t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) => {
		let y = Math.sqrt(1 / 4), b = Math.sqrt(3 / 4), x = Math.sqrt(1 / 3), S = Math.sqrt(4 / 3), C = Math.sqrt(1 / 12);
		l[0] = y * (c[2] * o[0] + c[0] * o[2] + (o[2] * c[0] + o[0] * c[2])), l[1] = c[1] * o[0] + o[1] * c[0], l[2] = b * (c[1] * o[1] + o[1] * c[1]), l[3] = c[1] * o[2] + o[1] * c[2], l[4] = y * (c[2] * o[2] - c[0] * o[0] + (o[2] * c[2] - o[0] * c[0])), e.dot5(t, n, r, i, a, l, m), u[0] = y * (s[2] * o[0] + s[0] * o[2] + (o[2] * s[0] + o[0] * s[2])), u[1] = s[1] * o[0] + o[1] * s[0], u[2] = b * (s[1] * o[1] + o[1] * s[1]), u[3] = s[1] * o[2] + o[1] * s[2], u[4] = y * (s[2] * o[2] - s[0] * o[0] + (o[2] * s[2] - o[0] * s[0])), e.dot5(t, n, r, i, a, u, h), d[0] = x * (s[2] * s[0] + s[0] * s[2]) + -C * (c[2] * c[0] + c[0] * c[2] + (o[2] * o[0] + o[0] * o[2])), d[1] = S * s[1] * s[0] + -x * (c[1] * c[0] + o[1] * o[0]), d[2] = s[1] * s[1] + -y * (c[1] * c[1] + o[1] * o[1]), d[3] = S * s[1] * s[2] + -x * (c[1] * c[2] + o[1] * o[2]), d[4] = x * (s[2] * s[2] - s[0] * s[0]) + -C * (c[2] * c[2] - c[0] * c[0] + (o[2] * o[2] - o[0] * o[0])), e.dot5(t, n, r, i, a, d, g), f[0] = y * (s[2] * c[0] + s[0] * c[2] + (c[2] * s[0] + c[0] * s[2])), f[1] = s[1] * c[0] + c[1] * s[0], f[2] = b * (s[1] * c[1] + c[1] * s[1]), f[3] = s[1] * c[2] + c[1] * s[2], f[4] = y * (s[2] * c[2] - s[0] * c[0] + (c[2] * s[2] - c[0] * s[0])), e.dot5(t, n, r, i, a, f, _), p[0] = y * (c[2] * c[0] + c[0] * c[2] - (o[2] * o[0] + o[0] * o[2])), p[1] = c[1] * c[0] - o[1] * o[0], p[2] = b * (c[1] * c[1] - o[1] * o[1]), p[3] = c[1] * c[2] - o[1] * o[2], p[4] = y * (c[2] * c[2] - c[0] * c[0] - (o[2] * o[2] - o[0] * o[0])), e.dot5(t, n, r, i, a, p, v);
	};
	static parseHeader(t) {
		let n = new Uint8Array(t, 0, e.HeaderSizeBytes), r = new Uint16Array(t, 0, e.HeaderSizeBytes / 2), i = new Uint32Array(t, 0, e.HeaderSizeBytes / 4), a = new Float32Array(t, 0, e.HeaderSizeBytes / 4);
		return {
			versionMajor: n[0],
			versionMinor: n[1],
			maxSectionCount: i[1],
			sectionCount: i[2],
			maxSplatCount: i[3],
			splatCount: i[4],
			compressionLevel: r[10],
			sceneCenter: new K(a[6], a[7], a[8]),
			minSphericalHarmonicsCoeff: a[9] || -ol,
			maxSphericalHarmonicsCoeff: a[10] || ol
		};
	}
	static writeHeaderCountsToBuffer(t, n, r) {
		let i = new Uint32Array(r, 0, e.HeaderSizeBytes / 4);
		i[2] = t, i[4] = n;
	}
	static writeHeaderToBuffer(t, n) {
		let r = new Uint8Array(n, 0, e.HeaderSizeBytes), i = new Uint16Array(n, 0, e.HeaderSizeBytes / 2), a = new Uint32Array(n, 0, e.HeaderSizeBytes / 4), o = new Float32Array(n, 0, e.HeaderSizeBytes / 4);
		r[0] = t.versionMajor, r[1] = t.versionMinor, r[2] = 0, r[3] = 0, a[1] = t.maxSectionCount, a[2] = t.sectionCount, a[3] = t.maxSplatCount, a[4] = t.splatCount, i[10] = t.compressionLevel, o[6] = t.sceneCenter.x, o[7] = t.sceneCenter.y, o[8] = t.sceneCenter.z, o[9] = t.minSphericalHarmonicsCoeff || -ol, o[10] = t.maxSphericalHarmonicsCoeff || ol;
	}
	static parseSectionHeaders(t, n, r = 0, i) {
		let a = t.compressionLevel, o = t.maxSectionCount, s = new Uint16Array(n, r, o * e.SectionHeaderSizeBytes / 2), c = new Uint32Array(n, r, o * e.SectionHeaderSizeBytes / 4), l = new Float32Array(n, r, o * e.SectionHeaderSizeBytes / 4), u = [], d = 0, f = d / 2, p = d / 4, m = e.HeaderSizeBytes + t.maxSectionCount * e.SectionHeaderSizeBytes, h = 0;
		for (let t = 0; t < o; t++) {
			let n = c[p + 1], r = c[p + 2], o = c[p + 3], g = l[p + 4], _ = g / 2, v = s[f + 10], y = c[p + 6] || e.CompressionLevels[a].ScaleRange, b = c[p + 8], x = c[p + 9], S = x * 4, C = v * o + S, w = s[f + 20], { bytesPerSplat: T } = e.calculateComponentStorage(a, w), E = T * n, D = E + C;
			u[t] = {
				bytesPerSplat: T,
				splatCountOffset: h,
				splatCount: i ? n : 0,
				maxSplatCount: n,
				bucketSize: r,
				bucketCount: o,
				bucketBlockSize: g,
				halfBucketBlockSize: _,
				bucketStorageSizeBytes: v,
				bucketsStorageSizeBytes: C,
				splatDataStorageSizeBytes: E,
				storageSizeBytes: D,
				compressionScaleRange: y,
				compressionScaleFactor: _ / y,
				base: m,
				bucketsBase: m + S,
				dataBase: m + C,
				fullBucketCount: b,
				partiallyFilledBucketCount: x,
				sphericalHarmonicsDegree: w
			}, m += D, d += e.SectionHeaderSizeBytes, f = d / 2, p = d / 4, h += n;
		}
		return u;
	}
	static writeSectionHeaderToBuffer(t, n, r, i = 0) {
		let a = new Uint16Array(r, i, e.SectionHeaderSizeBytes / 2), o = new Uint32Array(r, i, e.SectionHeaderSizeBytes / 4), s = new Float32Array(r, i, e.SectionHeaderSizeBytes / 4);
		o[0] = t.splatCount, o[1] = t.maxSplatCount, o[2] = n >= 1 ? t.bucketSize : 0, o[3] = n >= 1 ? t.bucketCount : 0, s[4] = n >= 1 ? t.bucketBlockSize : 0, a[10] = n >= 1 ? e.BucketStorageSizeBytes : 0, o[6] = n >= 1 ? t.compressionScaleRange : 0, o[7] = t.storageSizeBytes, o[8] = n >= 1 ? t.fullBucketCount : 0, o[9] = n >= 1 ? t.partiallyFilledBucketCount : 0, a[20] = t.sphericalHarmonicsDegree;
	}
	static writeSectionHeaderSplatCountToBuffer(t, n, r = 0) {
		let i = new Uint32Array(n, r, e.SectionHeaderSizeBytes / 4);
		i[0] = t;
	}
	constructFromBuffer(t, n) {
		this.bufferData = t, this.globalSplatIndexToLocalSplatIndexMap = [], this.globalSplatIndexToSectionMap = [];
		let r = e.parseHeader(this.bufferData);
		this.versionMajor = r.versionMajor, this.versionMinor = r.versionMinor, this.maxSectionCount = r.maxSectionCount, this.sectionCount = n ? r.maxSectionCount : 0, this.maxSplatCount = r.maxSplatCount, this.splatCount = n ? r.maxSplatCount : 0, this.compressionLevel = r.compressionLevel, this.sceneCenter = new K().copy(r.sceneCenter), this.minSphericalHarmonicsCoeff = r.minSphericalHarmonicsCoeff, this.maxSphericalHarmonicsCoeff = r.maxSphericalHarmonicsCoeff, this.sections = e.parseSectionHeaders(r, this.bufferData, e.HeaderSizeBytes, n), this.linkBufferArrays(), this.buildMaps();
	}
	static calculateComponentStorage(t, n) {
		let r = e.CompressionLevels[t].BytesPerCenter, i = e.CompressionLevels[t].BytesPerScale, a = e.CompressionLevels[t].BytesPerRotation, o = e.CompressionLevels[t].BytesPerColor, s = Qc(n), c = e.CompressionLevels[t].BytesPerSphericalHarmonicsComponent * s;
		return {
			bytesPerCenter: r,
			bytesPerScale: i,
			bytesPerRotation: a,
			bytesPerColor: o,
			sphericalHarmonicsComponentsPerSplat: s,
			sphericalHarmonicsBytesPerSplat: c,
			bytesPerSplat: r + i + a + o + c
		};
	}
	linkBufferArrays() {
		for (let t = 0; t < this.maxSectionCount; t++) {
			let n = this.sections[t];
			n.bucketArray = new Float32Array(this.bufferData, n.bucketsBase, n.bucketCount * e.BucketStorageSizeFloats), n.partiallyFilledBucketCount > 0 && (n.partiallyFilledBucketLengths = new Uint32Array(this.bufferData, n.base, n.partiallyFilledBucketCount));
		}
	}
	buildMaps() {
		let e = 0;
		for (let t = 0; t < this.maxSectionCount; t++) {
			let n = this.sections[t];
			for (let r = 0; r < n.maxSplatCount; r++) {
				let n = e + r;
				this.globalSplatIndexToLocalSplatIndexMap[n] = r, this.globalSplatIndexToSectionMap[n] = t;
			}
			e += n.maxSplatCount;
		}
	}
	updateLoadedCounts(t, n) {
		e.writeHeaderCountsToBuffer(t, n, this.bufferData), this.sectionCount = t, this.splatCount = n;
	}
	updateSectionLoadedCounts(t, n) {
		let r = e.HeaderSizeBytes + e.SectionHeaderSizeBytes * t;
		e.writeSectionHeaderSplatCountToBuffer(n, this.bufferData, r), this.sections[t].splatCount = n;
	}
	static writeSplatDataToSectionBuffer = function() {
		let t = /* @__PURE__ */ new ArrayBuffer(12), n = /* @__PURE__ */ new ArrayBuffer(12), r = /* @__PURE__ */ new ArrayBuffer(16), i = /* @__PURE__ */ new ArrayBuffer(4), a = /* @__PURE__ */ new ArrayBuffer(256), o = new Ot(), s = new K(), c = new K(), { X: l, Y: u, Z: d, SCALE0: f, SCALE1: p, SCALE2: m, ROTATION0: h, ROTATION1: g, ROTATION2: _, ROTATION3: v, FDC0: y, FDC1: b, FDC2: x, OPACITY: S, FRC0: C, FRC9: w } = Q.OFFSET, T = (e, t, n) => {
			let r = n * 2 + 1;
			return e = Math.round(e * t) + n, Jc(e, 0, r);
		};
		return function(E, D, O, k, A, j, M, N, P = -ol, F = ol) {
			let I = Qc(A), ee = e.CompressionLevels[k].BytesPerCenter, te = e.CompressionLevels[k].BytesPerScale, ne = e.CompressionLevels[k].BytesPerRotation, re = e.CompressionLevels[k].BytesPerColor, L = O, ie = L + ee, ae = ie + te, oe = ae + ne, se = oe + re;
			if (E[h] === void 0 ? o.set(1, 0, 0, 0) : (o.set(E[h], E[g], E[_], E[v]), o.normalize()), E[f] === void 0 ? s.set(0, 0, 0) : s.set(E[f] || 0, E[p] || 0, E[m] || 0), k === 0) {
				let t = new Float32Array(D, L, e.CenterComponentCount), n = new Float32Array(D, ae, e.RotationComponentCount), r = new Float32Array(D, ie, e.ScaleComponentCount);
				if (n.set([
					o.x,
					o.y,
					o.z,
					o.w
				]), r.set([
					s.x,
					s.y,
					s.z
				]), t.set([
					E[l],
					E[u],
					E[d]
				]), A > 0) {
					let e = new Float32Array(D, se, I);
					if (A >= 1) {
						for (let t = 0; t < 9; t++) e[t] = E[C + t] || 0;
						if (A >= 2) for (let t = 0; t < 15; t++) e[t + 9] = E[w + t] || 0;
					}
				}
			} else {
				let i = new Uint16Array(t, 0, e.CenterComponentCount), f = new Uint16Array(r, 0, e.RotationComponentCount), p = new Uint16Array(n, 0, e.ScaleComponentCount);
				if (f.set([
					sl(o.x),
					sl(o.y),
					sl(o.z),
					sl(o.w)
				]), p.set([
					sl(s.x),
					sl(s.y),
					sl(s.z)
				]), c.set(E[l], E[u], E[d]).sub(j), c.x = T(c.x, M, N), c.y = T(c.y, M, N), c.z = T(c.z, M, N), i.set([
					c.x,
					c.y,
					c.z
				]), A > 0) {
					let e = k === 1 ? Uint16Array : Uint8Array, t = k === 1 ? 2 : 1, n = new e(a, 0, I);
					if (A >= 1) {
						for (let e = 0; e < 9; e++) {
							let t = E[C + e] || 0;
							n[e] = k === 1 ? sl(t) : ul(t, P, F);
						}
						let e = 9 * t;
						if (gl(n.buffer, 0, D, se, e), A >= 2) {
							for (let e = 0; e < 15; e++) {
								let t = E[w + e] || 0;
								n[e + 9] = k === 1 ? sl(t) : ul(t, P, F);
							}
							gl(n.buffer, e, D, se + e, 15 * t);
						}
					}
				}
				gl(i.buffer, 0, D, L, 6), gl(p.buffer, 0, D, ie, 6), gl(f.buffer, 0, D, ae, 8);
			}
			let ce = new Uint8ClampedArray(i, 0, 4);
			ce.set([
				E[y] || 0,
				E[b] || 0,
				E[x] || 0
			]), ce[3] = E[S] || 0, gl(ce.buffer, 0, D, oe, 4);
		};
	}();
	static generateFromUncompressedSplatArrays(t, n, r, i, a, o, s = []) {
		let c = 0;
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			c = Math.max(n.sphericalHarmonicsDegree, c);
		}
		let l, u;
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			for (let e = 0; e < n.splats.length; e++) {
				let t = n.splats[e];
				for (let e = Q.OFFSET.FRC0; e < Q.OFFSET.FRC23 && e < t.length; e++) (!l || t[e] < l) && (l = t[e]), (!u || t[e] > u) && (u = t[e]);
			}
		}
		l ||= -ol, u ||= ol;
		let { bytesPerSplat: d } = e.calculateComponentStorage(r, c), f = e.CompressionLevels[r].ScaleRange, p = [], m = [], h = 0;
		for (let i = 0; i < t.length; i++) {
			let g = t[i], _ = new Q(c);
			for (let e = 0; e < g.splatCount; e++) {
				let t = g.splats[e];
				(t[Q.OFFSET.OPACITY] || 0) >= n && _.addSplat(t);
			}
			let v = s[i] || {}, y = (v.blockSizeFactor || 1) * (a || e.BucketBlockSize), b = Math.ceil((v.bucketSizeFactor || 1) * (o || e.BucketSize)), x = e.computeBucketsForUncompressedSplatArray(_, y, b), S = x.fullBuckets.length, C = x.partiallyFullBuckets.map((e) => e.splats.length), w = C.length, T = [...x.fullBuckets, ...x.partiallyFullBuckets], E = _.splats.length * d, D = w * 4, O = r >= 1 ? T.length * e.BucketStorageSizeBytes + D : 0, k = E + O, A = new ArrayBuffer(k), j = f / (y * .5), M = new K(), N = 0;
			for (let t = 0; t < T.length; t++) {
				let n = T[t];
				M.fromArray(n.center);
				for (let t = 0; t < n.splats.length; t++) {
					let i = n.splats[t], a = _.splats[i], o = O + N * d;
					e.writeSplatDataToSectionBuffer(a, A, o, r, c, M, j, f, l, u), N++;
				}
			}
			if (h += N, r >= 1) {
				let t = new Uint32Array(A, 0, C.length * 4);
				for (let e = 0; e < C.length; e++) t[e] = C[e];
				let n = new Float32Array(A, D, T.length * e.BucketStorageSizeFloats);
				for (let e = 0; e < T.length; e++) {
					let t = T[e], r = e * 3;
					n[r] = t.center[0], n[r + 1] = t.center[1], n[r + 2] = t.center[2];
				}
			}
			p.push(A);
			let P = new ArrayBuffer(e.SectionHeaderSizeBytes);
			e.writeSectionHeaderToBuffer({
				maxSplatCount: N,
				splatCount: N,
				bucketSize: b,
				bucketCount: T.length,
				bucketBlockSize: y,
				compressionScaleRange: f,
				storageSizeBytes: k,
				fullBucketCount: S,
				partiallyFilledBucketCount: w,
				sphericalHarmonicsDegree: c
			}, r, P, 0), m.push(P);
		}
		let g = 0;
		for (let e of p) g += e.byteLength;
		let _ = e.HeaderSizeBytes + e.SectionHeaderSizeBytes * p.length + g, v = new ArrayBuffer(_);
		e.writeHeaderToBuffer({
			versionMajor: 0,
			versionMinor: 1,
			maxSectionCount: p.length,
			sectionCount: p.length,
			maxSplatCount: h,
			splatCount: h,
			compressionLevel: r,
			sceneCenter: i,
			minSphericalHarmonicsCoeff: l,
			maxSphericalHarmonicsCoeff: u
		}, v);
		let y = e.HeaderSizeBytes;
		for (let t of m) new Uint8Array(v, y, e.SectionHeaderSizeBytes).set(new Uint8Array(t)), y += e.SectionHeaderSizeBytes;
		for (let e of p) new Uint8Array(v, y, e.byteLength).set(new Uint8Array(e)), y += e.byteLength;
		return new e(v);
	}
	static computeBucketsForUncompressedSplatArray(e, t, n) {
		let r = e.splatCount, i = t / 2, a = new K(), o = new K();
		for (let t = 0; t < r; t++) {
			let n = e.splats[t], r = [
				n[Q.OFFSET.X],
				n[Q.OFFSET.Y],
				n[Q.OFFSET.Z]
			];
			(t === 0 || r[0] < a.x) && (a.x = r[0]), (t === 0 || r[0] > o.x) && (o.x = r[0]), (t === 0 || r[1] < a.y) && (a.y = r[1]), (t === 0 || r[1] > o.y) && (o.y = r[1]), (t === 0 || r[2] < a.z) && (a.z = r[2]), (t === 0 || r[2] > o.z) && (o.z = r[2]);
		}
		let s = new K().copy(o).sub(a), c = Math.ceil(s.y / t), l = Math.ceil(s.z / t), u = new K(), d = [], f = {};
		for (let o = 0; o < r; o++) {
			let r = e.splats[o], s = [
				r[Q.OFFSET.X],
				r[Q.OFFSET.Y],
				r[Q.OFFSET.Z]
			], p = Math.floor((s[0] - a.x) / t), m = Math.floor((s[1] - a.y) / t), h = Math.floor((s[2] - a.z) / t);
			u.x = p * t + a.x + i, u.y = m * t + a.y + i, u.z = h * t + a.z + i;
			let g = c * l * p + m * l + h, _ = f[g];
			_ || (f[g] = _ = {
				splats: [],
				center: u.toArray()
			}), _.splats.push(o), _.splats.length >= n && (d.push(_), f[g] = null);
		}
		let p = [];
		for (let e in f) if (f.hasOwnProperty(e)) {
			let t = f[e];
			t && p.push(t);
		}
		return {
			fullBuckets: d,
			partiallyFullBuckets: p
		};
	}
	static preallocateUncompressed(t, n) {
		let r = e.CompressionLevels[0].SphericalHarmonicsDegrees[n], i = e.HeaderSizeBytes + e.SectionHeaderSizeBytes, a = i + r.BytesPerSplat * t, o = new ArrayBuffer(a);
		return e.writeHeaderToBuffer({
			versionMajor: e.CurrentMajorVersion,
			versionMinor: e.CurrentMinorVersion,
			maxSectionCount: 1,
			sectionCount: 1,
			maxSplatCount: t,
			splatCount: t,
			compressionLevel: 0,
			sceneCenter: new K()
		}, o), e.writeSectionHeaderToBuffer({
			maxSplatCount: t,
			splatCount: t,
			bucketSize: 0,
			bucketCount: 0,
			bucketBlockSize: 0,
			compressionScaleRange: 0,
			storageSizeBytes: 0,
			fullBucketCount: 0,
			partiallyFilledBucketCount: 0,
			sphericalHarmonicsDegree: n
		}, 0, o, e.HeaderSizeBytes), {
			splatBuffer: new e(o, !0),
			splatBufferDataOffsetBytes: i
		};
	}
}, _l = new Uint8Array([
	112,
	108,
	121,
	10
]), vl = new Uint8Array([
	10,
	101,
	110,
	100,
	95,
	104,
	101,
	97,
	100,
	101,
	114,
	10
]), yl = "end_header", bl = new Map([
	["char", Int8Array],
	["uchar", Uint8Array],
	["short", Int16Array],
	["ushort", Uint16Array],
	["int", Int32Array],
	["uint", Uint32Array],
	["float", Float32Array],
	["double", Float64Array]
]), xl = (e, t) => {
	let n = (1 << t) - 1;
	return (e & n) / n;
}, Sl = (e, t) => {
	e.x = xl(t >>> 21, 11), e.y = xl(t >>> 11, 10), e.z = xl(t, 11);
}, Cl = (e, t) => {
	e.x = xl(t >>> 24, 8), e.y = xl(t >>> 16, 8), e.z = xl(t >>> 8, 8), e.w = xl(t, 8);
}, wl = (e, t) => {
	let n = 1 / (Math.sqrt(2) * .5), r = (xl(t >>> 20, 10) - .5) * n, i = (xl(t >>> 10, 10) - .5) * n, a = (xl(t, 10) - .5) * n, o = Math.sqrt(1 - (r * r + i * i + a * a));
	switch (t >>> 30) {
		case 0:
			e.set(o, r, i, a);
			break;
		case 1:
			e.set(r, o, i, a);
			break;
		case 2:
			e.set(r, i, o, a);
			break;
		case 3:
			e.set(r, i, a, o);
			break;
	}
}, Tl = (e, t, n) => e * (1 - n) + t * n, El = (e, t) => e.properties.find((e) => e.name === t && e.storage)?.storage, Dl = class e {
	static decodeHeaderText(e) {
		let t, n, r, i, a = e.split("\n").filter((e) => !e.startsWith("comment ")), o = 0, s = !1;
		for (let e = 1; e < a.length; ++e) {
			let c = a[e].split(" ");
			switch (c[0]) {
				case "format":
					if (c[1] !== "binary_little_endian") throw Error("Unsupported ply format");
					break;
				case "element":
					t = {
						name: c[1],
						count: parseInt(c[2], 10),
						properties: [],
						storageSizeBytes: 0
					}, t.name === "chunk" ? n = t : t.name === "vertex" ? r = t : t.name === "sh" && (i = t);
					break;
				case "property": {
					if (!bl.has(c[1])) throw Error(`Unrecognized property data type '${c[1]}' in ply header`);
					let e = bl.get(c[1]), n = e.BYTES_PER_ELEMENT * t.count;
					t.name === "vertex" && (o += e.BYTES_PER_ELEMENT), t.properties.push({
						type: c[1],
						name: c[2],
						storage: null,
						byteSize: e.BYTES_PER_ELEMENT,
						storageSizeByes: n
					}), t.storageSizeBytes += n;
					break;
				}
				case yl:
					s = !0;
					break;
				default: throw Error(`Unrecognized header value '${c[0]}' in ply header`);
			}
			if (s) break;
		}
		let c = 0, l = 0;
		return i && (l = i.properties.length, i.properties.length >= 45 ? c = 3 : i.properties.length >= 24 ? c = 2 : i.properties.length >= 9 && (c = 1)), {
			chunkElement: n,
			vertexElement: r,
			shElement: i,
			bytesPerSplat: o,
			headerSizeBytes: e.indexOf(yl) + 10 + 1,
			sphericalHarmonicsDegree: c,
			sphericalHarmonicsPerSplat: l
		};
	}
	static decodeHeader(t) {
		let n = (e, t) => {
			let n = e.length - t.length, r, i;
			for (r = 0; r <= n; ++r) {
				for (i = 0; i < t.length && e[r + i] === t[i]; ++i);
				if (i === t.length) return r;
			}
			return -1;
		}, r = (e, t) => {
			if (e.length < t.length) return !1;
			for (let n = 0; n < t.length; ++n) if (e[n] !== t[n]) return !1;
			return !0;
		}, i = new Uint8Array(t), a;
		if (i.length >= _l.length && !r(i, _l)) throw Error("Invalid PLY header");
		if (a = n(i, vl), a === -1) throw Error("End of PLY header not found");
		let o = new TextDecoder("ascii").decode(i.slice(0, a)), { chunkElement: s, vertexElement: c, shElement: l, sphericalHarmonicsDegree: u, sphericalHarmonicsPerSplat: d, bytesPerSplat: f } = e.decodeHeaderText(o);
		return {
			headerSizeBytes: a + vl.length,
			bytesPerSplat: f,
			chunkElement: s,
			vertexElement: c,
			shElement: l,
			sphericalHarmonicsDegree: u,
			sphericalHarmonicsPerSplat: d
		};
	}
	static readElementData(e, t, n, r, i, a = null) {
		let o = t instanceof DataView ? t : new DataView(t);
		r ||= 0, i ||= e.count - 1;
		for (let t = r; t <= i; ++t) for (let r = 0; r < e.properties.length; ++r) {
			let i = e.properties[r], s = bl.get(i.type), c = s.BYTES_PER_ELEMENT * e.count;
			if ((!i.storage || i.storage.byteLength < c) && (!a || a(i.name)) && (i.storage = new s(e.count)), i.storage) switch (i.type) {
				case "char":
					i.storage[t] = o.getInt8(n);
					break;
				case "uchar":
					i.storage[t] = o.getUint8(n);
					break;
				case "short":
					i.storage[t] = o.getInt16(n, !0);
					break;
				case "ushort":
					i.storage[t] = o.getUint16(n, !0);
					break;
				case "int":
					i.storage[t] = o.getInt32(n, !0);
					break;
				case "uint":
					i.storage[t] = o.getUint32(n, !0);
					break;
				case "float":
					i.storage[t] = o.getFloat32(n, !0);
					break;
				case "double":
					i.storage[t] = o.getFloat64(n, !0);
					break;
			}
			n += i.byteSize;
		}
		return n;
	}
	static readPly(t, n = null) {
		let r = e.decodeHeader(t), i = e.readElementData(r.chunkElement, t, r.headerSizeBytes, null, null, n);
		return i = e.readElementData(r.vertexElement, t, i, null, null, n), e.readElementData(r.shElement, t, i, null, null, n), {
			chunkElement: r.chunkElement,
			vertexElement: r.vertexElement,
			shElement: r.shElement,
			sphericalHarmonicsDegree: r.sphericalHarmonicsDegree,
			sphericalHarmonicsPerSplat: r.sphericalHarmonicsPerSplat
		};
	}
	static getElementStorageArrays(e, t, n) {
		let r = {};
		if (t) {
			let n = El(e, "min_r"), i = El(e, "min_g"), a = El(e, "min_b"), o = El(e, "max_r"), s = El(e, "max_g"), c = El(e, "max_b"), l = El(e, "min_x"), u = El(e, "min_y"), d = El(e, "min_z"), f = El(e, "max_x"), p = El(e, "max_y"), m = El(e, "max_z"), h = El(e, "min_scale_x"), g = El(e, "min_scale_y"), _ = El(e, "min_scale_z"), v = El(e, "max_scale_x"), y = El(e, "max_scale_y"), b = El(e, "max_scale_z"), x = El(t, "packed_position"), S = El(t, "packed_rotation"), C = El(t, "packed_scale"), w = El(t, "packed_color");
			r.colorExtremes = {
				minR: n,
				maxR: o,
				minG: i,
				maxG: s,
				minB: a,
				maxB: c
			}, r.positionExtremes = {
				minX: l,
				maxX: f,
				minY: u,
				maxY: p,
				minZ: d,
				maxZ: m
			}, r.scaleExtremes = {
				minScaleX: h,
				maxScaleX: v,
				minScaleY: g,
				maxScaleY: y,
				minScaleZ: _,
				maxScaleZ: b
			}, r.position = x, r.rotation = S, r.scale = C, r.color = w;
		}
		if (n) {
			let e = {};
			for (let t = 0; t < 45; t++) {
				let r = `f_rest_${t}`, i = El(n, r);
				if (i) e[r] = i;
				else break;
			}
			r.sh = e;
		}
		return r;
	}
	static decompressBaseSplat = function() {
		let e = new K(), t = new Ot(), n = new K(), r = new Gt(), i = Q.OFFSET;
		return function(a, o, s, c, l, u, d, f, p, m) {
			m ||= Q.createSplat();
			let h = Math.floor((o + a) / 256);
			return Sl(e, s[a]), wl(t, d[a]), Sl(n, l[a]), Cl(r, p[a]), m[i.X] = Tl(c.minX[h], c.maxX[h], e.x), m[i.Y] = Tl(c.minY[h], c.maxY[h], e.y), m[i.Z] = Tl(c.minZ[h], c.maxZ[h], e.z), m[i.ROTATION0] = t.x, m[i.ROTATION1] = t.y, m[i.ROTATION2] = t.z, m[i.ROTATION3] = t.w, m[i.SCALE0] = Math.exp(Tl(u.minScaleX[h], u.maxScaleX[h], n.x)), m[i.SCALE1] = Math.exp(Tl(u.minScaleY[h], u.maxScaleY[h], n.y)), m[i.SCALE2] = Math.exp(Tl(u.minScaleZ[h], u.maxScaleZ[h], n.z)), f.minR && f.maxR ? m[i.FDC0] = Jc(Math.round(Tl(f.minR[h], f.maxR[h], r.x) * 255), 0, 255) : m[i.FDC0] = Jc(Math.floor(r.x * 255), 0, 255), f.minG && f.maxG ? m[i.FDC1] = Jc(Math.round(Tl(f.minG[h], f.maxG[h], r.y) * 255), 0, 255) : m[i.FDC1] = Jc(Math.floor(r.y * 255), 0, 255), f.minB && f.maxB ? m[i.FDC2] = Jc(Math.round(Tl(f.minB[h], f.maxB[h], r.z) * 255), 0, 255) : m[i.FDC2] = Jc(Math.floor(r.z * 255), 0, 255), m[i.OPACITY] = Jc(Math.floor(r.w * 255), 0, 255), m;
		};
	}();
	static decompressSphericalHarmonics = function() {
		let e = [
			0,
			3,
			8,
			15
		], t = [
			0,
			1,
			2,
			9,
			10,
			11,
			12,
			13,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			3,
			4,
			5,
			14,
			15,
			16,
			17,
			18,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			6,
			7,
			8,
			19,
			20,
			21,
			22,
			23,
			38,
			39,
			40,
			41,
			42,
			43,
			44
		];
		return function(n, r, i, a, o) {
			o ||= Q.createSplat();
			let s = e[i], c = e[a];
			for (let e = 0; e < 3; ++e) for (let i = 0; i < 15; ++i) {
				let a = t[e * 15 + i];
				i < s && i < c && (o[Q.OFFSET.FRC0 + a] = r[e * c + i][n] * (8 / 255) - 4);
			}
			return o;
		};
	}();
	static parseToUncompressedSplatBufferSection(t, n, r, i, a, o, s, c, l = null) {
		e.readElementData(n, o, 0, r, i, l);
		let u = $.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat, { positionExtremes: d, scaleExtremes: f, colorExtremes: p, position: m, rotation: h, scale: g, color: _ } = e.getElementStorageArrays(t, n), v = Q.createSplat();
		for (let t = r; t <= i; ++t) {
			e.decompressBaseSplat(t, a, m, d, g, f, h, p, _, v);
			let n = t * u + c;
			$.writeSplatDataToSectionBuffer(v, s, n, 0, 0);
		}
	}
	static parseToUncompressedSplatArraySection(t, n, r, i, a, o, s, c = null) {
		e.readElementData(n, o, 0, r, i, c);
		let { positionExtremes: l, scaleExtremes: u, colorExtremes: d, position: f, rotation: p, scale: m, color: h } = e.getElementStorageArrays(t, n);
		for (let t = r; t <= i; ++t) {
			let n = Q.createSplat();
			e.decompressBaseSplat(t, a, f, l, m, u, p, d, h, n), s.addSplat(n);
		}
	}
	static parseSphericalHarmonicsToUncompressedSplatArraySection(t, n, r, i, a, o, s, c, l, u = null) {
		e.readElementData(n, a, o, r, i, u);
		let { sh: d } = e.getElementStorageArrays(t, void 0, n), f = Object.values(d);
		for (let t = r; t <= i; ++t) e.decompressSphericalHarmonics(t, f, s, c, l.splats[t]);
	}
	static parseToUncompressedSplatArray(t, n) {
		let { chunkElement: r, vertexElement: i, shElement: a, sphericalHarmonicsDegree: o } = e.readPly(t);
		n = Math.min(n, o);
		let s = new Q(n), { positionExtremes: c, scaleExtremes: l, colorExtremes: u, position: d, rotation: f, scale: p, color: m } = e.getElementStorageArrays(r, i), h;
		if (n > 0) {
			let { sh: t } = e.getElementStorageArrays(r, void 0, a);
			h = Object.values(t);
		}
		for (let t = 0; t < i.count; ++t) {
			s.addDefaultSplat();
			let r = s.getSplat(s.splatCount - 1);
			e.decompressBaseSplat(t, 0, d, c, p, l, f, u, m, r), n > 0 && e.decompressSphericalHarmonics(t, h, n, o, r);
		}
		return s;
	}
	static parseToUncompressedSplatBuffer(t, n) {
		let { chunkElement: r, vertexElement: i, shElement: a, sphericalHarmonicsDegree: o } = e.readPly(t);
		n = Math.min(n, o);
		let { splatBuffer: s, splatBufferDataOffsetBytes: c } = $.preallocateUncompressed(i.count, n), { positionExtremes: l, scaleExtremes: u, colorExtremes: d, position: f, rotation: p, scale: m, color: h } = e.getElementStorageArrays(r, i), g;
		if (n > 0) {
			let { sh: t } = e.getElementStorageArrays(r, void 0, a);
			g = Object.values(t);
		}
		let _ = $.CompressionLevels[0].SphericalHarmonicsDegrees[n].BytesPerSplat, v = Q.createSplat(n);
		for (let t = 0; t < i.count; ++t) {
			e.decompressBaseSplat(t, 0, f, l, m, u, p, d, h, v), n > 0 && e.decompressSphericalHarmonics(t, g, n, o, v);
			let r = t * _ + c;
			$.writeSplatDataToSectionBuffer(v, s.bufferData, r, 0, n);
		}
		return s;
	}
}, Ol = {
	INRIAV1: 0,
	INRIAV2: 1,
	PlayCanvasCompressed: 2
}, [kl, Al, jl, Ml, Nl, Pl, Fl] = [
	0,
	1,
	2,
	3,
	4,
	5,
	6
], Il = {
	double: kl,
	int: Al,
	uint: jl,
	float: Ml,
	short: Nl,
	ushort: Pl,
	uchar: Fl
}, Ll = {
	[kl]: 8,
	[Al]: 4,
	[jl]: 4,
	[Ml]: 4,
	[Nl]: 2,
	[Pl]: 2,
	[Fl]: 1
}, Rl = class e {
	static HeaderEndToken = "end_header";
	static decodeSectionHeader(t, n, r = 0) {
		let i = [], a = !1, o = -1, s = 0, c = !1, l = null, u = [], d = [], f = [], p = [], m = {};
		for (let h = r; h < t.length; h++) {
			let g = t[h].trim();
			if (g.startsWith("element")) if (a) {
				o--;
				break;
			} else {
				a = !0, r = h, o = h;
				let e = g.split(" "), t = 0;
				for (let n of e) {
					let e = n.trim();
					e.length > 0 && (t++, t === 2 ? l = e : t === 3 && (s = parseInt(e)));
				}
			}
			else if (g.startsWith("property")) {
				let e = g.match(/(\w+)\s+(\w+)\s+(\w+)/);
				if (e) {
					let t = e[2], r = e[3];
					f.push(r);
					let i = n[r];
					m[r] = t;
					let a = Il[t];
					i !== void 0 && (p.push(r), u.push(i), d[i] = a);
				}
			}
			if (g === e.HeaderEndToken) {
				c = !0;
				break;
			}
			a && (i.push(g), o++);
		}
		let h = [], g = 0;
		for (let e of f) {
			let t = m[e];
			if (m.hasOwnProperty(e)) {
				let t = n[e];
				t !== void 0 && (h[t] = g);
			}
			g += Ll[Il[t]];
		}
		let _ = e.decodeSphericalHarmonicsFromSectionHeader(f, n);
		return {
			headerLines: i,
			headerStartLine: r,
			headerEndLine: o,
			fieldTypes: d,
			fieldIds: u,
			fieldOffsets: h,
			bytesPerVertex: g,
			vertexCount: s,
			dataSizeBytes: g * s,
			endOfHeader: c,
			sectionName: l,
			sphericalHarmonicsDegree: _.degree,
			sphericalHarmonicsCoefficientsPerChannel: _.coefficientsPerChannel,
			sphericalHarmonicsDegree1Fields: _.degree1Fields,
			sphericalHarmonicsDegree2Fields: _.degree2Fields
		};
	}
	static decodeSphericalHarmonicsFromSectionHeader(e, t) {
		let n = 0, r = 0;
		for (let t of e) t.startsWith("f_rest") && n++;
		r = n / 3;
		let i = 0;
		r >= 3 && (i = 1), r >= 8 && (i = 2);
		let a = [], o = [];
		for (let e = 0; e < 3; e++) {
			if (i >= 1) for (let n = 0; n < 3; n++) a.push(t["f_rest_" + (n + r * e)]);
			if (i >= 2) for (let n = 0; n < 5; n++) o.push(t["f_rest_" + (n + r * e + 3)]);
		}
		return {
			degree: i,
			coefficientsPerChannel: r,
			degree1Fields: a,
			degree2Fields: o
		};
	}
	static getHeaderSectionNames(e) {
		let t = [];
		for (let n of e) if (n.startsWith("element")) {
			let e = n.split(" "), r = 0;
			for (let n of e) {
				let e = n.trim();
				e.length > 0 && (r++, r === 2 && t.push(e));
			}
		}
		return t;
	}
	static checkTextForEndHeader(t) {
		return !!t.includes(e.HeaderEndToken);
	}
	static checkBufferForEndHeader(t, n, r, i) {
		let a = new Uint8Array(t, Math.max(0, n - r), r), o = i.decode(a);
		return e.checkTextForEndHeader(o);
	}
	static extractHeaderFromBufferToText(t) {
		let n = new TextDecoder(), r = 0, i = "";
		for (;;) {
			if (r + 100 >= t.byteLength) throw Error("End of file reached while searching for end of header");
			let a = new Uint8Array(t, r, 100);
			if (i += n.decode(a), r += 100, e.checkBufferForEndHeader(t, r, 200, n)) break;
		}
		return i;
	}
	static readHeaderFromBuffer(t) {
		let n = new TextDecoder(), r = 0, i = "";
		for (;;) {
			if (r + 100 >= t.byteLength) throw Error("End of file reached while searching for end of header");
			let a = new Uint8Array(t, r, 100);
			if (i += n.decode(a), r += 100, e.checkBufferForEndHeader(t, r, 200, n)) break;
		}
		return i;
	}
	static convertHeaderTextToLines(t) {
		let n = t.split("\n"), r = [];
		for (let t = 0; t < n.length; t++) {
			let i = n[t].trim();
			if (r.push(i), i === e.HeaderEndToken) break;
		}
		return r;
	}
	static determineHeaderFormatFromHeaderText(t) {
		let n = e.convertHeaderTextToLines(t), r = Ol.INRIAV1;
		for (let t = 0; t < n.length; t++) {
			let i = n[t].trim();
			if (i.startsWith("element chunk") || i.match(/[A-Za-z]*packed_[A-Za-z]*/)) r = Ol.PlayCanvasCompressed;
			else if (i.startsWith("element codebook_centers")) r = Ol.INRIAV2;
			else if (i === e.HeaderEndToken) break;
		}
		return r;
	}
	static determineHeaderFormatFromPlyBuffer(t) {
		let n = e.extractHeaderFromBufferToText(t);
		return e.determineHeaderFormatFromHeaderText(n);
	}
	static readVertex(e, t, n, r, i, a, o = !0) {
		let s = n * t.bytesPerVertex + r, c = t.fieldOffsets, l = t.fieldTypes;
		for (let t of i) {
			let n = l[t];
			n === Ml ? a[t] = e.getFloat32(s + c[t], !0) : n === Nl ? a[t] = e.getInt16(s + c[t], !0) : n === Pl ? a[t] = e.getUint16(s + c[t], !0) : n === Al ? a[t] = e.getInt32(s + c[t], !0) : n === jl ? a[t] = e.getUint32(s + c[t], !0) : n === Fl && (o ? a[t] = e.getUint8(s + c[t]) / 255 : a[t] = e.getUint8(s + c[t]));
		}
	}
}, zl = [
	"scale_0",
	"scale_1",
	"scale_2",
	"rot_0",
	"rot_1",
	"rot_2",
	"rot_3",
	"x",
	"y",
	"z",
	"f_dc_0",
	"f_dc_1",
	"f_dc_2",
	"opacity",
	"red",
	"green",
	"blue",
	"f_rest_0"
], [Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru] = zl.map((e, t) => t), iu = class e {
	static decodeHeaderLines(e) {
		let t = 0;
		e.forEach((e) => {
			e.includes("f_rest_") && t++;
		});
		let n = 0;
		t >= 45 ? n = 45 : t >= 24 ? n = 24 : t >= 9 && (n = 9);
		let r = Array.from(Array(Math.max(n - 1, 0))).map((e, t) => `f_rest_${t + 1}`), i = [...zl, ...r], a = i.map((e, t) => t), o = a.reduce((e, t) => (e[i[t]] = t, e), {}), s = Rl.decodeSectionHeader(e, o, 0);
		return s.splatCount = s.vertexCount, s.bytesPerSplat = s.bytesPerVertex, s.fieldsToReadIndexes = a, s;
	}
	static decodeHeaderText(t) {
		let n = Rl.convertHeaderTextToLines(t), r = e.decodeHeaderLines(n);
		return r.headerText = t, r.headerSizeBytes = t.indexOf(Rl.HeaderEndToken) + Rl.HeaderEndToken.length + 1, r;
	}
	static decodeHeaderFromBuffer(t) {
		let n = Rl.readHeaderFromBuffer(t);
		return e.decodeHeaderText(n);
	}
	static findSplatData(e, t) {
		return new DataView(e, t.headerSizeBytes);
	}
	static parseToUncompressedSplatBufferSection(t, n, r, i, a, o, s, c = 0) {
		c = Math.min(c, t.sphericalHarmonicsDegree);
		let l = $.CompressionLevels[0].SphericalHarmonicsDegrees[c].BytesPerSplat;
		for (let u = n; u <= r; u++) {
			let n = e.parseToUncompressedSplat(i, u, t, a, c), r = u * l + s;
			$.writeSplatDataToSectionBuffer(n, o, r, 0, c);
		}
	}
	static parseToUncompressedSplatArraySection(t, n, r, i, a, o, s = 0) {
		s = Math.min(s, t.sphericalHarmonicsDegree);
		for (let c = n; c <= r; c++) {
			let n = e.parseToUncompressedSplat(i, c, t, a, s);
			o.addSplat(n);
		}
	}
	static decodeSectionSplatData(t, n, r, i, a = !0) {
		if (i = Math.min(i, r.sphericalHarmonicsDegree), a) {
			let a = new Q(i);
			for (let o = 0; o < n; o++) {
				let n = e.parseToUncompressedSplat(t, o, r, 0, i);
				a.addSplat(n);
			}
			return a;
		} else {
			let { splatBuffer: a, splatBufferDataOffsetBytes: o } = $.preallocateUncompressed(n, i);
			return e.parseToUncompressedSplatBufferSection(r, 0, n - 1, t, 0, a.bufferData, o, i), a;
		}
	}
	static parseToUncompressedSplat = function() {
		let t = [], n = new Ot(), r = Q.OFFSET.X, i = Q.OFFSET.Y, a = Q.OFFSET.Z, o = Q.OFFSET.SCALE0, s = Q.OFFSET.SCALE1, c = Q.OFFSET.SCALE2, l = Q.OFFSET.ROTATION0, u = Q.OFFSET.ROTATION1, d = Q.OFFSET.ROTATION2, f = Q.OFFSET.ROTATION3, p = Q.OFFSET.FDC0, m = Q.OFFSET.FDC1, h = Q.OFFSET.FDC2, g = Q.OFFSET.OPACITY, _ = [];
		for (let e = 0; e < 45; e++) _[e] = Q.OFFSET.FRC0 + e;
		return function(v, y, b, x = 0, S = 0) {
			S = Math.min(S, b.sphericalHarmonicsDegree), e.readSplat(v, b, y, x, t);
			let C = Q.createSplat(S);
			if (t[Bl] === void 0 ? (C[o] = .01, C[s] = .01, C[c] = .01) : (C[o] = Math.exp(t[Bl]), C[s] = Math.exp(t[Vl]), C[c] = Math.exp(t[Hl])), t[Xl] !== void 0) {
				let e = .28209479177387814;
				C[p] = (.5 + e * t[Xl]) * 255, C[m] = (.5 + e * t[Zl]) * 255, C[h] = (.5 + e * t[Ql]) * 255;
			} else t[eu] === void 0 ? (C[p] = 0, C[m] = 0, C[h] = 0) : (C[p] = t[eu] * 255, C[m] = t[tu] * 255, C[h] = t[nu] * 255);
			if (t[$l] !== void 0 && (C[g] = 1 / (1 + Math.exp(-t[$l])) * 255), C[p] = Jc(Math.floor(C[p]), 0, 255), C[m] = Jc(Math.floor(C[m]), 0, 255), C[h] = Jc(Math.floor(C[h]), 0, 255), C[g] = Jc(Math.floor(C[g]), 0, 255), S >= 1 && t[ru] !== void 0) {
				for (let e = 0; e < 9; e++) C[_[e]] = t[b.sphericalHarmonicsDegree1Fields[e]];
				if (S >= 2) for (let e = 0; e < 15; e++) C[_[9 + e]] = t[b.sphericalHarmonicsDegree2Fields[e]];
			}
			return n.set(t[Ul], t[Wl], t[Gl], t[Kl]), n.normalize(), C[l] = n.x, C[u] = n.y, C[d] = n.z, C[f] = n.w, C[r] = t[ql], C[i] = t[Jl], C[a] = t[Yl], C;
		};
	}();
	static readSplat(e, t, n, r, i) {
		return Rl.readVertex(e, t, n, r, t.fieldsToReadIndexes, i, !0);
	}
	static parseToUncompressedSplatArray(t, n = 0) {
		let { header: r, splatCount: i, splatData: a } = au(t);
		return e.decodeSectionSplatData(a, i, r, n, !0);
	}
	static parseToUncompressedSplatBuffer(t, n = 0) {
		let { header: r, splatCount: i, splatData: a } = au(t);
		return e.decodeSectionSplatData(a, i, r, n, !1);
	}
};
function au(e) {
	let t = iu.decodeHeaderFromBuffer(e);
	return {
		header: t,
		splatCount: t.splatCount,
		splatData: iu.findSplatData(e, t)
	};
}
var ou = [
	"features_dc",
	"features_rest_0",
	"features_rest_1",
	"features_rest_2",
	"features_rest_3",
	"features_rest_4",
	"features_rest_5",
	"features_rest_6",
	"features_rest_7",
	"features_rest_8",
	"features_rest_9",
	"features_rest_10",
	"features_rest_11",
	"features_rest_12",
	"features_rest_13",
	"features_rest_14",
	"opacity",
	"scaling",
	"rotation_re",
	"rotation_im"
], su = ou.map((e, t) => t), [cu, lu, uu, du, fu, pu, mu] = [
	0,
	1,
	4,
	16,
	17,
	18,
	19
], hu = /* @__PURE__ */ "scale_0.scale_1.scale_2.rot_0.rot_1.rot_2.rot_3.x.y.z.f_dc_0.f_dc_1.f_dc_2.opacity.red.green.blue.f_rest_0.f_rest_1.f_rest_2.f_rest_3.f_rest_4.f_rest_5.f_rest_6.f_rest_7.f_rest_8.f_rest_9.f_rest_10.f_rest_11.f_rest_12.f_rest_13.f_rest_14.f_rest_15.f_rest_16.f_rest_17.f_rest_18.f_rest_19.f_rest_20.f_rest_21.f_rest_22.f_rest_23.f_rest_24.f_rest_25.f_rest_26.f_rest_27.f_rest_28.f_rest_29.f_rest_30.f_rest_31.f_rest_32.f_rest_33.f_rest_34.f_rest_35.f_rest_36.f_rest_37.f_rest_38.f_rest_39.f_rest_40.f_rest_41.f_rest_42.f_rest_43.f_rest_44.f_rest_45".split("."), gu = hu.map((e, t) => t), [_u, vu, yu, bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au] = gu, ju = Du, Mu = Ou, Nu = ku, Pu = (e) => {
	let t = (31744 & e) >> 10, n = 1023 & e;
	return (e >> 15 ? -1 : 1) * (t ? t === 31 ? n ? NaN : Infinity : 2 ** (t - 15) * (1 + n / 1024) : n / 1024 * 6103515625e-14);
}, Fu = class e {
	static decodeSectionHeadersFromHeaderLines(e) {
		let t = gu.reduce((e, t) => (e[hu[t]] = t, e), {}), n = su.reduce((e, t) => (e[ou[t]] = t, e), {}), r = Rl.getHeaderSectionNames(e), i;
		for (let e = 0; e < r.length; e++) r[e] === "codebook_centers" && (i = e);
		let a = 0, o = !1, s = [], c = 0;
		for (; !o;) {
			let r;
			r = c === i ? Rl.decodeSectionHeader(e, n, a) : Rl.decodeSectionHeader(e, t, a), o = r.endOfHeader, a = r.headerEndLine + 1, o || (r.splatCount = r.vertexCount, r.bytesPerSplat = r.bytesPerVertex), s.push(r), c++;
		}
		return s;
	}
	static decodeSectionHeadersFromHeaderText(t) {
		let n = Rl.convertHeaderTextToLines(t);
		return e.decodeSectionHeadersFromHeaderLines(n);
	}
	static getSplatCountFromSectionHeaders(e) {
		let t = 0;
		for (let n of e) n.sectionName !== "codebook_centers" && (t += n.vertexCount);
		return t;
	}
	static decodeHeaderFromHeaderText(t) {
		let n = t.indexOf(Rl.HeaderEndToken) + Rl.HeaderEndToken.length + 1, r = e.decodeSectionHeadersFromHeaderText(t);
		return {
			headerSizeBytes: n,
			sectionHeaders: r,
			splatCount: e.getSplatCountFromSectionHeaders(r)
		};
	}
	static decodeHeaderFromBuffer(t) {
		let n = Rl.readHeaderFromBuffer(t);
		return e.decodeHeaderFromHeaderText(n);
	}
	static findVertexData(e, t, n) {
		let r = t.headerSizeBytes;
		for (let e = 0; e < n && e < t.sectionHeaders.length; e++) {
			let n = t.sectionHeaders[e];
			r += n.dataSizeBytes;
		}
		return new DataView(e, r, t.sectionHeaders[n].dataSizeBytes);
	}
	static decodeCodeBook(e, t) {
		let n = [], r = [];
		for (let i = 0; i < t.vertexCount; i++) {
			Rl.readVertex(e, t, i, 0, su, n);
			for (let e of su) {
				let t = su[e], i = r[t];
				i || (r[t] = i = []), i.push(n[e]);
			}
		}
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			for (let n = 0; n < t.length; n++) {
				let r = Pu(t[n]);
				e === du ? t[n] = Math.round(1 / (1 + Math.exp(-r)) * 255) : e === cu ? t[n] = Math.round((.5 + .28209479177387814 * r) * 255) : e === fu ? t[n] = Math.exp(r) : t[n] = r;
			}
		}
		return r;
	}
	static decodeSectionSplatData(t, n, r, i, a) {
		a = Math.min(a, r.sphericalHarmonicsDegree);
		let o = new Q(a);
		for (let s = 0; s < n; s++) {
			let n = e.parseToUncompressedSplat(t, s, r, i, 0, a);
			o.addSplat(n);
		}
		return o;
	}
	static parseToUncompressedSplat = function() {
		let t = [], n = new Ot(), r = Q.OFFSET.X, i = Q.OFFSET.Y, a = Q.OFFSET.Z, o = Q.OFFSET.SCALE0, s = Q.OFFSET.SCALE1, c = Q.OFFSET.SCALE2, l = Q.OFFSET.ROTATION0, u = Q.OFFSET.ROTATION1, d = Q.OFFSET.ROTATION2, f = Q.OFFSET.ROTATION3, p = Q.OFFSET.FDC0, m = Q.OFFSET.FDC1, h = Q.OFFSET.FDC2, g = Q.OFFSET.OPACITY, _ = [];
		for (let e = 0; e < 45; e++) _[e] = Q.OFFSET.FRC0 + e;
		return function(v, y, b, x, S = 0, C = 0) {
			C = Math.min(C, b.sphericalHarmonicsDegree), e.readSplat(v, b, y, S, t);
			let w = Q.createSplat(C);
			if (t[_u] === void 0 ? (w[o] = .01, w[s] = .01, w[c] = .01) : (w[o] = x[fu][t[_u]], w[s] = x[fu][t[vu]], w[c] = x[fu][t[yu]]), t[Du] === void 0 ? t[ju] === void 0 ? (w[p] = 0, w[m] = 0, w[h] = 0) : (w[p] = t[ju] * 255, w[m] = t[Mu] * 255, w[h] = t[Nu] * 255) : (w[p] = x[cu][t[Du]], w[m] = x[cu][t[Ou]], w[h] = x[cu][t[ku]]), t[Au] !== void 0 && (w[g] = x[du][t[Au]]), w[p] = Jc(Math.floor(w[p]), 0, 255), w[m] = Jc(Math.floor(w[m]), 0, 255), w[h] = Jc(Math.floor(w[h]), 0, 255), w[g] = Jc(Math.floor(w[g]), 0, 255), C >= 1 && b.sphericalHarmonicsDegree >= 1) {
				for (let e = 0; e < 9; e++) {
					let n = x[lu + e % 3];
					w[_[e]] = n[t[b.sphericalHarmonicsDegree1Fields[e]]];
				}
				if (C >= 2 && b.sphericalHarmonicsDegree >= 2) for (let e = 0; e < 15; e++) {
					let n = x[uu + e % 5];
					w[_[9 + e]] = n[t[b.sphericalHarmonicsDegree2Fields[e]]];
				}
			}
			let T = x[pu][t[bu]], E = x[mu][t[xu]], D = x[mu][t[Su]], O = x[mu][t[Cu]];
			return n.set(T, E, D, O), n.normalize(), w[l] = n.x, w[u] = n.y, w[d] = n.z, w[f] = n.w, w[r] = Pu(t[wu]), w[i] = Pu(t[Tu]), w[a] = Pu(t[Eu]), w;
		};
	}();
	static readSplat(e, t, n, r, i) {
		return Rl.readVertex(e, t, n, r, gu, i, !1);
	}
	static parseToUncompressedSplatArray(t, n = 0) {
		let r = [], i = e.decodeHeaderFromBuffer(t, n), a;
		for (let n = 0; n < i.sectionHeaders.length; n++) {
			let r = i.sectionHeaders[n];
			if (r.sectionName === "codebook_centers") {
				let o = e.findVertexData(t, i, n);
				a = e.decodeCodeBook(o, r);
			}
		}
		for (let o = 0; o < i.sectionHeaders.length; o++) {
			let s = i.sectionHeaders[o];
			if (s.sectionName !== "codebook_centers") {
				let c = s.vertexCount, l = e.findVertexData(t, i, o), u = e.decodeSectionSplatData(l, c, s, a, n);
				r.push(u);
			}
		}
		let o = new Q(n);
		for (let e of r) for (let t of e.splats) o.addSplat(t);
		return o;
	}
}, Iu = class {
	static parseToUncompressedSplatArray(e, t = 0) {
		let n = Rl.determineHeaderFormatFromPlyBuffer(e);
		if (n === Ol.PlayCanvasCompressed) return Dl.parseToUncompressedSplatArray(e, t);
		if (n === Ol.INRIAV1) return iu.parseToUncompressedSplatArray(e, t);
		if (n === Ol.INRIAV2) return Fu.parseToUncompressedSplatArray(e, t);
	}
	static parseToUncompressedSplatBuffer(e, t = 0) {
		let n = Rl.determineHeaderFormatFromPlyBuffer(e);
		if (n === Ol.PlayCanvasCompressed) return Dl.parseToUncompressedSplatBuffer(e, t);
		if (n === Ol.INRIAV1) return iu.parseToUncompressedSplatBuffer(e, t);
		if (n === Ol.INRIAV2) throw Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files");
	}
}, Lu = class e {
	constructor(e, t, n, r) {
		this.sectionCount = e, this.sectionFilters = t, this.groupingParameters = n, this.partitionGenerator = r;
	}
	partitionUncompressedSplatArray(e) {
		let t, n, r;
		if (this.partitionGenerator) {
			let i = this.partitionGenerator(e);
			t = i.groupingParameters, n = i.sectionCount, r = i.sectionFilters;
		} else t = this.groupingParameters, n = this.sectionCount, r = this.sectionFilters;
		let i = [];
		for (let t = 0; t < n; t++) {
			let n = new Q(e.sphericalHarmonicsDegree), a = r[t];
			for (let t = 0; t < e.splatCount; t++) a(t) && n.addSplat(e.splats[t]);
			i.push(n);
		}
		return {
			splatArrays: i,
			parameters: t
		};
	}
	static getStandardPartitioner(t = 0, n = new K(), r = $.BucketBlockSize, i = $.BucketSize) {
		return new e(void 0, void 0, void 0, (e) => {
			let a = Q.OFFSET.X, o = Q.OFFSET.Y, s = Q.OFFSET.Z;
			t <= 0 && (t = e.splatCount);
			let c = new K(), l = .5, u = (e) => {
				e.x = Math.floor(e.x / l) * l, e.y = Math.floor(e.y / l) * l, e.z = Math.floor(e.z / l) * l;
			};
			e.splats.forEach((e) => {
				c.set(e[a], e[o], e[s]).sub(n), u(c), e.centerDist = c.lengthSq();
			}), e.splats.sort((e, t) => e.centerDist > t.centerDist ? 1 : -1);
			let d = [], f = [];
			t = Math.min(e.splatCount, t);
			let p = Math.ceil(e.splatCount / t), m = 0;
			for (let e = 0; e < p; e++) {
				let e = m;
				d.push((n) => n >= e && n < e + t), f.push({
					blocksSize: r,
					bucketSize: i
				}), m += t;
			}
			return {
				sectionCount: d.length,
				sectionFilters: d,
				groupingParameters: f
			};
		});
	}
}, Ru = class e {
	constructor(e, t, n, r, i, a, o) {
		this.splatPartitioner = e, this.alphaRemovalThreshold = t, this.compressionLevel = n, this.sectionSize = r, this.sceneCenter = i ? new K().copy(i) : void 0, this.blockSize = a, this.bucketSize = o;
	}
	generateFromUncompressedSplatArray(e) {
		let t = this.splatPartitioner.partitionUncompressedSplatArray(e);
		return $.generateFromUncompressedSplatArrays(t.splatArrays, this.alphaRemovalThreshold, this.compressionLevel, this.sceneCenter, this.blockSize, this.bucketSize, t.parameters);
	}
	static getStandardGenerator(t = 1, n = 1, r = 0, i = new K(), a = $.BucketBlockSize, o = $.BucketSize) {
		return new e(Lu.getStandardPartitioner(r, i, a, o), t, n, r, i, a, o);
	}
}, zu = {
	Downloading: 0,
	Processing: 1,
	Done: 2
}, Bu = class extends Error {
	constructor(e) {
		super(e);
	}
}, Vu = {
	ProgressiveToSplatBuffer: 0,
	ProgressiveToSplatArray: 1,
	DownloadBeforeProcessing: 2
};
function Hu(e, t) {
	let n = 0;
	for (let t of e) n += t.sizeBytes;
	(!t || t.byteLength < n) && (t = new ArrayBuffer(n));
	let r = 0;
	for (let n of e) new Uint8Array(t, r, n.sizeBytes).set(n.data), r += n.sizeBytes;
	return t;
}
function Uu(e, t, n, r, i, a, o, s) {
	return t ? Ru.getStandardGenerator(n, r, i, a, o, s).generateFromUncompressedSplatArray(e) : $.generateFromUncompressedSplatArrays([e], n, 0, new K());
}
var Wu = class e {
	static loadFromURL(t, n, r, i, a, o, s = !0, c = 0, l, u, d, f, p) {
		let m;
		m = !r && !s ? Vu.DownloadBeforeProcessing : s ? Vu.ProgressiveToSplatArray : Vu.ProgressiveToSplatBuffer;
		let h = al.ProgressiveLoadSectionSize, g = $.HeaderSizeBytes + $.SectionHeaderSizeBytes, _, v, y, b, x, S = 0, C = 0, w = 0, T = !1, E = !1, D = !1, O = $c(), k = 0, A = 0, j = 0, M = 0, N = "", P = null, F = [], I, ee = new TextDecoder();
		return n && n(0, "0%", zu.Downloading), qc(t, (e, t, r) => {
			let a = e >= 100;
			if (r && (F.push({
				data: r,
				sizeBytes: r.byteLength,
				startBytes: j,
				endBytes: j + r.byteLength
			}), j += r.byteLength), m === Vu.DownloadBeforeProcessing) a && O.resolve(F);
			else {
				if (!T) {
					if (N += ee.decode(r), Rl.checkTextForEndHeader(N)) {
						if (_ = Rl.determineHeaderFormatFromHeaderText(N), _ === Ol.INRIAV1) P = iu.decodeHeaderText(N), c = Math.min(c, P.sphericalHarmonicsDegree), S = P.splatCount, E = !0, M = P.headerSizeBytes + P.bytesPerSplat * S;
						else if (_ === Ol.PlayCanvasCompressed) {
							if (P = Dl.decodeHeaderText(N), c = Math.min(c, P.sphericalHarmonicsDegree), m === Vu.ProgressiveToSplatBuffer && c > 0) throw new Bu("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");
							S = P.vertexElement.count, M = P.headerSizeBytes + P.bytesPerSplat * S + P.chunkElement.storageSizeBytes;
						} else if (m === Vu.ProgressiveToSplatBuffer) throw new Bu("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");
						else {
							m = Vu.DownloadBeforeProcessing;
							return;
						}
						if (m === Vu.ProgressiveToSplatBuffer) {
							let e = g + $.CompressionLevels[0].SphericalHarmonicsDegrees[c].BytesPerSplat * S;
							y = new ArrayBuffer(e), $.writeHeaderToBuffer({
								versionMajor: $.CurrentMajorVersion,
								versionMinor: $.CurrentMinorVersion,
								maxSectionCount: 1,
								sectionCount: 1,
								maxSplatCount: S,
								splatCount: 0,
								compressionLevel: 0,
								sceneCenter: new K()
							}, y);
						} else I = new Q(c);
						k = P.headerSizeBytes, A = P.headerSizeBytes, T = !0;
					}
				} else if (_ === Ol.PlayCanvasCompressed && !E) {
					let e = P.headerSizeBytes + P.chunkElement.storageSizeBytes;
					x = Hu(F, x), x.byteLength >= e && (Dl.readElementData(P.chunkElement, x, P.headerSizeBytes), k = e, A = e, E = !0);
				}
				if (T && E && F.length > 0 && (v = Hu(F, v), j - k > h || j >= M && !D || a)) {
					let e = D ? P.sphericalHarmonicsPerSplat : P.bytesPerSplat, t = (D ? j : Math.min(M, j)) - A, n = Math.floor(t / e), r = n * e, i = j - A - r, a = A - F[0].startBytes, o = new DataView(v, a, r);
					if (D) _ === Ol.PlayCanvasCompressed && m === Vu.ProgressiveToSplatArray && (Dl.parseSphericalHarmonicsToUncompressedSplatArraySection(P.chunkElement, P.shElement, w, w + n - 1, o, 0, c, P.sphericalHarmonicsDegree, I), w += n);
					else {
						if (m === Vu.ProgressiveToSplatBuffer) {
							let e = $.CompressionLevels[0].SphericalHarmonicsDegrees[c], t = C * e.BytesPerSplat + g;
							_ === Ol.PlayCanvasCompressed ? Dl.parseToUncompressedSplatBufferSection(P.chunkElement, P.vertexElement, 0, n - 1, C, o, y, t) : iu.parseToUncompressedSplatBufferSection(P, 0, n - 1, o, 0, y, t, c);
						} else _ === Ol.PlayCanvasCompressed ? Dl.parseToUncompressedSplatArraySection(P.chunkElement, P.vertexElement, 0, n - 1, C, o, I) : iu.parseToUncompressedSplatArraySection(P, 0, n - 1, o, 0, I, c);
						C += n, m === Vu.ProgressiveToSplatBuffer && (b ||= ($.writeSectionHeaderToBuffer({
							maxSplatCount: S,
							splatCount: C,
							bucketSize: 0,
							bucketCount: 0,
							bucketBlockSize: 0,
							compressionScaleRange: 0,
							storageSizeBytes: 0,
							fullBucketCount: 0,
							partiallyFilledBucketCount: 0,
							sphericalHarmonicsDegree: c
						}, 0, y, $.HeaderSizeBytes), new $(y, !1)), b.updateLoadedCounts(1, C)), j >= M && (D = !0);
					}
					if (i === 0) F = [];
					else {
						let e = [], t = 0;
						for (let n = F.length - 1; n >= 0; n--) {
							let r = F[n];
							if (t += r.sizeBytes, e.unshift(r), t >= i) break;
						}
						F = e;
					}
					k += h, A += r;
				}
				i && b && i(b, a), a && (m === Vu.ProgressiveToSplatBuffer ? O.resolve(b) : O.resolve(I));
			}
			n && n(e, t, zu.Downloading);
		}, !1, l).then(() => (n && n(0, "0%", zu.Processing), O.promise.then((t) => {
			if (n && n(100, "100%", zu.Done), m === Vu.DownloadBeforeProcessing) {
				let t = F.map((e) => e.data);
				return new Blob(t).arrayBuffer().then((t) => e.loadFromFileData(t, a, o, s, c, u, d, f, p));
			} else if (m === Vu.ProgressiveToSplatBuffer) return t;
			else return Zc(() => Uu(t, s, a, o, u, d, f, p));
		})));
	}
	static loadFromFileData(e, t, n, r, i = 0, a, o, s, c) {
		return r ? Zc(() => Iu.parseToUncompressedSplatArray(e, i)).then((e) => Uu(e, r, t, n, a, o, s, c)) : Zc(() => Iu.parseToUncompressedSplatBuffer(e, i));
	}
}, Gu = (e) => new ReadableStream({ async start(t) {
	t.enqueue(e), t.close();
} });
async function Ku(e) {
	try {
		let t = Gu(e);
		if (!t) throw Error("Failed to create stream from data");
		return await qu(t);
	} catch (e) {
		throw console.error("Error decompressing gzipped data:", e), e;
	}
}
async function qu(e) {
	let t = e.pipeThrough(new DecompressionStream("gzip")), n = await new Response(t).arrayBuffer();
	return new Uint8Array(n);
}
var Ju = 1347635022, Yu = 1, Xu = .15;
function Zu(e) {
	let t = e >> 15 & 1, n = e >> 10 & 31, r = e & 1023, i = t === 1 ? -1 : 1;
	return n === 0 ? i * 2 ** -14 * r / 1024 : n === 31 ? r === 0 ? i * Infinity : NaN : i * 2 ** (n - 15) * (1 + r / 1024);
}
function Qu(e) {
	return (e - 128) / 128;
}
function $u(e) {
	switch (e) {
		case 0: return 0;
		case 1: return 3;
		case 2: return 8;
		case 3: return 15;
		default: return console.error(`[SPZ: ERROR] Unsupported SH degree: ${e}`), 0;
	}
}
var ed = function() {
	let e = [], t = new Ot(), n = Q.OFFSET.X, r = Q.OFFSET.Y, i = Q.OFFSET.Z, a = Q.OFFSET.SCALE0, o = Q.OFFSET.SCALE1, s = Q.OFFSET.SCALE2, c = Q.OFFSET.ROTATION0, l = Q.OFFSET.ROTATION1, u = Q.OFFSET.ROTATION2, d = Q.OFFSET.ROTATION3, f = Q.OFFSET.FDC0, p = Q.OFFSET.FDC1, m = Q.OFFSET.FDC2, h = Q.OFFSET.OPACITY, g = [];
	for (let e = 0; e < 45; e++) g[e] = Q.OFFSET.FRC0 + e;
	let _ = [
		$u(0),
		$u(1),
		$u(2),
		$u(3)
	], v = [
		0,
		1,
		2,
		9,
		10,
		11,
		12,
		13,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		3,
		4,
		5,
		14,
		15,
		16,
		17,
		18,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		6,
		7,
		8,
		19,
		20,
		21,
		22,
		23,
		38,
		39,
		40,
		41,
		42,
		43,
		44
	];
	return function(g, y, b) {
		b = Math.min(y, b);
		let x = Q.createSplat(b);
		g.scale[0] === void 0 ? (x[a] = .01, x[o] = .01, x[s] = .01) : (x[a] = g.scale[0], x[o] = g.scale[1], x[s] = g.scale[2]), g.color[0] === void 0 ? e[RED] === void 0 ? (x[f] = 0, x[p] = 0, x[m] = 0) : (x[f] = e[RED] * 255, x[p] = e[GREEN] * 255, x[m] = e[BLUE] * 255) : (x[f] = g.color[0], x[p] = g.color[1], x[m] = g.color[2]), g.alpha !== void 0 && (x[h] = g.alpha), x[f] = Jc(Math.floor(x[f]), 0, 255), x[p] = Jc(Math.floor(x[p]), 0, 255), x[m] = Jc(Math.floor(x[m]), 0, 255), x[h] = Jc(Math.floor(x[h]), 0, 255);
		let S = _[b], C = _[y];
		for (let e = 0; e < 3; ++e) for (let t = 0; t < 15; ++t) {
			let n = v[e * 15 + t];
			t < S && t < C && (x[Q.OFFSET.FRC0 + n] = g.sh[e * C + t]);
		}
		return t.set(g.rotation[3], g.rotation[0], g.rotation[1], g.rotation[2]), t.normalize(), x[c] = t.x, x[l] = t.y, x[u] = t.z, x[d] = t.w, x[n] = g.position[0], x[r] = g.position[1], x[i] = g.position[2], x;
	};
}();
function td(e, t, n, r) {
	return !(e.positions.length !== t * 3 * (r ? 2 : 3) || e.scales.length !== t * 3 || e.rotations.length !== t * 3 || e.alphas.length !== t || e.colors.length !== t * 3 || e.sh.length !== t * n * 3);
}
function nd(e, t, n, r, i) {
	t = Math.min(t, e.shDegree);
	let a = e.numPoints, o = $u(e.shDegree), s = e.positions.length === a * 3 * 2;
	if (!td(e, a, o, s)) return null;
	let c = {
		position: [],
		scale: [],
		rotation: [],
		alpha: void 0,
		color: [],
		sh: []
	}, l;
	s && (l = new Uint16Array(e.positions.buffer, e.positions.byteOffset, a * 3));
	let u = 1 / (1 << e.fractionalBits), d = $u(e.shDegree);
	for (let o = 0; o < a; o++) {
		if (s) for (let e = 0; e < 3; e++) c.position[e] = Zu(l[o * 3 + e]);
		else for (let t = 0; t < 3; t++) {
			let n = o * 9 + t * 3, r = e.positions[n];
			r |= e.positions[n + 1] << 8, r |= e.positions[n + 2] << 16, r |= r & 8388608 ? 4278190080 : 0, c.position[t] = r * u;
		}
		for (let t = 0; t < 3; t++) c.scale[t] = Math.exp(e.scales[o * 3 + t] / 16 - 10);
		let a = e.rotations.subarray(o * 3, o * 3 + 3), f = [
			a[0] / 127.5 - 1,
			a[1] / 127.5 - 1,
			a[2] / 127.5 - 1
		];
		c.rotation[0] = f[0], c.rotation[1] = f[1], c.rotation[2] = f[2];
		let p = f[0] * f[0] + f[1] * f[1] + f[2] * f[2];
		c.rotation[3] = Math.sqrt(Math.max(0, 1 - p)), c.alpha = Math.floor(e.alphas[o]);
		for (let t = 0; t < 3; t++) c.color[t] = Math.floor(((e.colors[o * 3 + t] / 255 - .5) / Xu * .28209479177387814 + .5) * 255);
		for (let t = 0; t < 3; t++) for (let n = 0; n < d; n++) c.sh[t * d + n] = Qu(e.sh[d * 3 * o + n * 3 + t]);
		let m = ed(c, e.shDegree, t);
		if (n) {
			let e = $.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat, n = o * e + i;
			$.writeSplatDataToSectionBuffer(m, r, n, 0, t);
		} else r.addSplat(m);
	}
}
var rd = 16, id = 1e7;
function ad(e) {
	let t = new DataView(e), n = 0, r = {
		magic: t.getUint32(n, !0),
		version: t.getUint32(n + 4, !0),
		numPoints: t.getUint32(n + 8, !0),
		shDegree: t.getUint8(n + 12),
		fractionalBits: t.getUint8(n + 13),
		flags: t.getUint8(n + 14),
		reserved: t.getUint8(n + 15)
	};
	if (n += rd, r.magic !== Ju) return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"), null;
	if (r.version < 1 || r.version > 2) return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${r.version}`), null;
	if (r.numPoints > id) return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${r.numPoints}`), null;
	if (r.shDegree > 3) return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${r.shDegree}`), null;
	let i = r.numPoints, a = $u(r.shDegree), o = r.version === 1, s = {
		numPoints: i,
		shDegree: r.shDegree,
		fractionalBits: r.fractionalBits,
		antialiased: (r.flags & Yu) !== 0,
		positions: new Uint8Array(i * 3 * (o ? 2 : 3)),
		scales: new Uint8Array(i * 3),
		rotations: new Uint8Array(i * 3),
		alphas: new Uint8Array(i),
		colors: new Uint8Array(i * 3),
		sh: new Uint8Array(i * a * 3)
	};
	try {
		let t = new Uint8Array(e), r = s.positions.length, i = n;
		if (s.positions.set(t.slice(i, i + r)), i += r, s.alphas.set(t.slice(i, i + s.alphas.length)), i += s.alphas.length, s.colors.set(t.slice(i, i + s.colors.length)), i += s.colors.length, s.scales.set(t.slice(i, i + s.scales.length)), i += s.scales.length, s.rotations.set(t.slice(i, i + s.rotations.length)), i += s.rotations.length, s.sh.set(t.slice(i, i + s.sh.length)), i + s.sh.length !== e.byteLength) return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"), null;
	} catch (e) {
		return console.error("[SPZ ERROR] deserializePackedGaussians: read error", e), null;
	}
	return s;
}
async function od(e) {
	try {
		return ad((await Ku(e)).buffer);
	} catch (e) {
		return console.error("[SPZ ERROR] loadSpzPacked: decompression error", e), null;
	}
}
var sd = class e {
	static loadFromURL(t, n, r, i, a = !0, o = 0, s, c, l, u, d) {
		return n && n(0, "0%", zu.Downloading), qc(t, n, !0, s).then((t) => (n && n(0, "0%", zu.Processing), e.loadFromFileData(t, r, i, a, o, c, l, u, d)));
	}
	static async loadFromFileData(e, t, n, r, i = 0, a, o, s, c) {
		await Zc();
		let l = await od(e);
		i = Math.min(l.shDegree, i);
		let u = new Q(i);
		if (r) return nd(l, i, !1, u, 0), Ru.getStandardGenerator(t, n, a, o, s, c).generateFromUncompressedSplatArray(u);
		{
			let { splatBuffer: e, splatBufferDataOffsetBytes: t } = $.preallocateUncompressed(l.numPoints, i);
			return nd(l, i, !0, e.bufferData, t), e;
		}
	}
}, cd = class e {
	static RowSizeBytes = 32;
	static CenterSizeBytes = 12;
	static ScaleSizeBytes = 12;
	static RotationSizeBytes = 4;
	static ColorSizeBytes = 4;
	static parseToUncompressedSplatBufferSection(t, n, r, i, a, o) {
		let s = $.CompressionLevels[0].BytesPerCenter, c = $.CompressionLevels[0].BytesPerScale, l = $.CompressionLevels[0].BytesPerRotation, u = $.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;
		for (let d = t; d <= n; d++) {
			let t = d * e.RowSizeBytes + i, n = new Float32Array(r, t, 3), f = new Float32Array(r, t + e.CenterSizeBytes, 3), p = new Uint8Array(r, t + e.CenterSizeBytes + e.ScaleSizeBytes, 4), m = new Uint8Array(r, t + e.CenterSizeBytes + e.ScaleSizeBytes + e.RotationSizeBytes, 4), h = new Ot((m[1] - 128) / 128, (m[2] - 128) / 128, (m[3] - 128) / 128, (m[0] - 128) / 128);
			h.normalize();
			let g = d * u + o, _ = new Float32Array(a, g, 3), v = new Float32Array(a, g + s, 3), y = new Float32Array(a, g + s + c, 4), b = new Uint8Array(a, g + s + c + l, 4);
			_[0] = n[0], _[1] = n[1], _[2] = n[2], v[0] = f[0], v[1] = f[1], v[2] = f[2], y[0] = h.w, y[1] = h.x, y[2] = h.y, y[3] = h.z, b[0] = p[0], b[1] = p[1], b[2] = p[2], b[3] = p[3];
		}
	}
	static parseToUncompressedSplatArraySection(t, n, r, i, a) {
		for (let o = t; o <= n; o++) {
			let t = o * e.RowSizeBytes + i, n = new Float32Array(r, t, 3), s = new Float32Array(r, t + e.CenterSizeBytes, 3), c = new Uint8Array(r, t + e.CenterSizeBytes + e.ScaleSizeBytes, 4), l = new Uint8Array(r, t + e.CenterSizeBytes + e.ScaleSizeBytes + e.RotationSizeBytes, 4), u = new Ot((l[1] - 128) / 128, (l[2] - 128) / 128, (l[3] - 128) / 128, (l[0] - 128) / 128);
			u.normalize(), a.addSplatFromComonents(n[0], n[1], n[2], s[0], s[1], s[2], u.w, u.x, u.y, u.z, c[0], c[1], c[2], c[3]);
		}
	}
	static parseStandardSplatToUncompressedSplatArray(t) {
		let n = t.byteLength / e.RowSizeBytes, r = new Q();
		for (let i = 0; i < n; i++) {
			let n = i * e.RowSizeBytes, a = new Float32Array(t, n, 3), o = new Float32Array(t, n + e.CenterSizeBytes, 3), s = new Uint8Array(t, n + e.CenterSizeBytes + e.ScaleSizeBytes, 4), c = new Uint8Array(t, n + e.CenterSizeBytes + e.ScaleSizeBytes + e.ColorSizeBytes, 4), l = new Ot((c[1] - 128) / 128, (c[2] - 128) / 128, (c[3] - 128) / 128, (c[0] - 128) / 128);
			l.normalize(), r.addSplatFromComonents(a[0], a[1], a[2], o[0], o[1], o[2], l.w, l.x, l.y, l.z, s[0], s[1], s[2], s[3]);
		}
		return r;
	}
};
function ld(e, t, n, r, i, a, o, s) {
	return t ? Ru.getStandardGenerator(n, r, i, a, o, s).generateFromUncompressedSplatArray(e) : $.generateFromUncompressedSplatArrays([e], n, 0, new K());
}
var ud = class e {
	static loadFromURL(t, n, r, i, a, o, s = !0, c, l, u, d, f) {
		let p = r ? Vu.ProgressiveToSplatBuffer : Vu.ProgressiveToSplatArray;
		s && (p = Vu.ProgressiveToSplatArray);
		let m = $.HeaderSizeBytes + $.SectionHeaderSizeBytes, h = al.ProgressiveLoadSectionSize, g, _, v, y = 0, b = 0, x, S = $c(), C = 0, w = 0, T = [];
		return n && n(0, "0%", zu.Downloading), qc(t, (e, t, a, o) => {
			let s = e >= 100;
			if (a && T.push(a), p === Vu.DownloadBeforeProcessing) {
				s && S.resolve(T);
				return;
			}
			if (!o) {
				if (r) throw new Bu("Cannon directly load .splat because no file size info is available.");
				p = Vu.DownloadBeforeProcessing;
				return;
			}
			if (!g) {
				y = o / cd.RowSizeBytes, g = new ArrayBuffer(o);
				let e = m + $.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat * y;
				p === Vu.ProgressiveToSplatBuffer ? (_ = new ArrayBuffer(e), $.writeHeaderToBuffer({
					versionMajor: $.CurrentMajorVersion,
					versionMinor: $.CurrentMinorVersion,
					maxSectionCount: 1,
					sectionCount: 1,
					maxSplatCount: y,
					splatCount: b,
					compressionLevel: 0,
					sceneCenter: new K()
				}, _)) : x = new Q(0);
			}
			if (a) {
				new Uint8Array(g, w, a.byteLength).set(new Uint8Array(a)), w += a.byteLength;
				let e = w - C;
				if (e > h || s) {
					let t = (s ? e : h) / cd.RowSizeBytes, n = b + t;
					p === Vu.ProgressiveToSplatBuffer ? cd.parseToUncompressedSplatBufferSection(b, n - 1, g, 0, _, m) : cd.parseToUncompressedSplatArraySection(b, n - 1, g, 0, x), b = n, p === Vu.ProgressiveToSplatBuffer && (v ||= ($.writeSectionHeaderToBuffer({
						maxSplatCount: y,
						splatCount: b,
						bucketSize: 0,
						bucketCount: 0,
						bucketBlockSize: 0,
						compressionScaleRange: 0,
						storageSizeBytes: 0,
						fullBucketCount: 0,
						partiallyFilledBucketCount: 0
					}, 0, _, $.HeaderSizeBytes), new $(_, !1)), v.updateLoadedCounts(1, b), i && i(v, s)), C += h;
				}
			}
			s && (p === Vu.ProgressiveToSplatBuffer ? S.resolve(v) : S.resolve(x)), n && n(e, t, zu.Downloading);
		}, !1, c).then(() => (n && n(0, "0%", zu.Processing), S.promise.then((t) => (n && n(100, "100%", zu.Done), p === Vu.DownloadBeforeProcessing ? new Blob(T).arrayBuffer().then((t) => e.loadFromFileData(t, a, o, s, l, u, d, f)) : p === Vu.ProgressiveToSplatBuffer ? t : Zc(() => ld(t, s, a, o, l, u, d, f))))));
	}
	static loadFromFileData(e, t, n, r, i, a, o, s) {
		return Zc(() => ld(cd.parseStandardSplatToUncompressedSplatArray(e), r, t, n, i, a, o, s));
	}
}, dd = class e {
	static checkVersion(e) {
		let t = $.CurrentMajorVersion, n = $.CurrentMinorVersion, r = $.parseHeader(e);
		if (r.versionMajor === t && r.versionMinor >= n || r.versionMajor > t) return !0;
		throw Error(`KSplat version not supported: v${r.versionMajor}.${r.versionMinor}. Minimum required: v${t}.${n}`);
	}
	static loadFromURL(t, n, r, i, a) {
		let o, s, c, l, u = !1, d = !1, f, p = [], m = !1, h = !1, g = 0, _ = 0, v = 0, y = !1, b = !1, x = !1, S = [], C = $c(), w = () => {
			!u && !d && g >= $.HeaderSizeBytes && (d = !0, new Blob(S).arrayBuffer().then((t) => {
				c = new ArrayBuffer($.HeaderSizeBytes), new Uint8Array(c).set(new Uint8Array(t, 0, $.HeaderSizeBytes)), e.checkVersion(c), d = !1, u = !0, l = $.parseHeader(c), window.setTimeout(() => {
					D();
				}, 1);
			}));
		}, T = 0, E = () => {
			T === 0 && (T++, window.setTimeout(() => {
				T--, O();
			}, 1));
		}, D = () => {
			!h && !m && u && g >= $.HeaderSizeBytes + $.SectionHeaderSizeBytes * l.maxSectionCount && (h = !0, new Blob(S).arrayBuffer().then((e) => {
				h = !1, m = !0, f = new ArrayBuffer(l.maxSectionCount * $.SectionHeaderSizeBytes), new Uint8Array(f).set(new Uint8Array(e, $.HeaderSizeBytes, l.maxSectionCount * $.SectionHeaderSizeBytes)), p = $.parseSectionHeaders(l, f, 0, !1);
				let t = 0;
				for (let e = 0; e < l.maxSectionCount; e++) t += p[e].storageSizeBytes;
				let n = $.HeaderSizeBytes + l.maxSectionCount * $.SectionHeaderSizeBytes + t;
				if (!o) {
					o = new ArrayBuffer(n);
					let e = 0;
					for (let t = 0; t < S.length; t++) {
						let n = S[t];
						new Uint8Array(o, e, n.byteLength).set(new Uint8Array(n)), e += n.byteLength;
					}
				}
				v = $.HeaderSizeBytes + $.SectionHeaderSizeBytes * l.maxSectionCount;
				for (let e = 0; e <= p.length && e < l.maxSectionCount; e++) v += p[e].storageSizeBytes;
				E();
			}));
		}, O = () => {
			x || (x = !0, window.setTimeout(() => {
				if (x = !1, m) {
					if (b) return;
					if (y = g >= v, g - _ > al.ProgressiveLoadSectionSize || y) {
						_ += al.ProgressiveLoadSectionSize, b = _ >= v, s ||= new $(o, !1);
						let e = $.HeaderSizeBytes + $.SectionHeaderSizeBytes * l.maxSectionCount, t = 0, r = 0, a = 0;
						for (let n = 0; n < l.maxSectionCount; n++) {
							let i = p[n], o = e + (t + i.partiallyFilledBucketCount * 4 + i.bucketStorageSizeBytes * i.bucketCount);
							if (_ >= o) {
								r++;
								let e = _ - o, t = $.CompressionLevels[l.compressionLevel].SphericalHarmonicsDegrees[i.sphericalHarmonicsDegree].BytesPerSplat, c = Math.floor(e / t);
								c = Math.min(c, i.maxSplatCount), a += c, s.updateLoadedCounts(r, a), s.updateSectionLoadedCounts(n, c);
							} else break;
							t += i.storageSizeBytes;
						}
						i(s, b);
						let c = _ / v * 100, u = c.toFixed(2) + "%";
						n && n(c, u, zu.Downloading), b ? C.resolve(s) : O();
					}
				}
			}, al.ProgressiveLoadSectionDelayDuration));
		};
		return qc(t, (e, t, i) => {
			i && (S.push(i), o && new Uint8Array(o, g, i.byteLength).set(new Uint8Array(i)), g += i.byteLength), r ? (w(), D(), O()) : n && n(e, t, zu.Downloading);
		}, !r, a).then((t) => (n && n(0, "0%", zu.Processing), (r ? C.promise : e.loadFromFileData(t)).then((e) => (n && n(100, "100%", zu.Done), e))));
	}
	static loadFromFileData(t) {
		return Zc(() => (e.checkVersion(t), new $(t)));
	}
	static downloadFile = function() {
		let e;
		return function(t, n) {
			let r = new Blob([t.bufferData], { type: "application/octet-stream" });
			e || (e = document.createElement("a"), document.body.appendChild(e)), e.download = n, e.href = URL.createObjectURL(r), e.click();
		};
	}();
}, fd = {
	Splat: 0,
	KSplat: 1,
	Ply: 2,
	Spz: 3
}, pd = (e) => e.endsWith(".ply") ? fd.Ply : e.endsWith(".splat") ? fd.Splat : e.endsWith(".ksplat") ? fd.KSplat : e.endsWith(".spz") ? fd.Spz : null, md = { type: "change" }, hd = { type: "start" }, gd = { type: "end" }, _d = new Hr(), vd = new li(), yd = Math.cos(70 * Dt.DEG2RAD), bd = class extends tt {
	constructor(n, r) {
		super(), this.object = n, this.domElement = r, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new K(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "KeyA",
			UP: "KeyW",
			RIGHT: "KeyD",
			BOTTOM: "KeyS"
		}, this.mouseButtons = {
			LEFT: e.ROTATE,
			MIDDLE: e.DOLLY,
			RIGHT: e.PAN
		}, this.touches = {
			ONE: t.ROTATE,
			TWO: t.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
			return c.phi;
		}, this.getAzimuthalAngle = function() {
			return c.theta;
		}, this.getDistance = function() {
			return this.object.position.distanceTo(this.target);
		}, this.listenToKeyEvents = function(e) {
			e.addEventListener("keydown", Ce), this._domElementKeyEvents = e;
		}, this.stopListenToKeyEvents = function() {
			this._domElementKeyEvents.removeEventListener("keydown", Ce), this._domElementKeyEvents = null;
		}, this.saveState = function() {
			i.target0.copy(i.target), i.position0.copy(i.object.position), i.zoom0 = i.object.zoom;
		}, this.reset = function() {
			i.target.copy(i.target0), i.object.position.copy(i.position0), i.object.zoom = i.zoom0, this.clearDampedRotation(), this.clearDampedPan(), i.object.updateProjectionMatrix(), i.dispatchEvent(md), i.update(), o = a.NONE;
		}, this.clearDampedRotation = function() {
			l.theta = 0, l.phi = 0;
		}, this.clearDampedPan = function() {
			d.set(0, 0, 0);
		}, this.update = function() {
			let e = new K(), t = new Ot().setFromUnitVectors(n.up, new K(0, 1, 0)), r = t.clone().invert(), f = new K(), p = new Ot(), m = new K(), h = 2 * Math.PI;
			return function() {
				t.setFromUnitVectors(n.up, new K(0, 1, 0)), r.copy(t).invert();
				let g = i.object.position;
				e.copy(g).sub(i.target), e.applyQuaternion(t), c.setFromVector3(e), i.autoRotate && o === a.NONE && O(E()), i.enableDamping ? (c.theta += l.theta * i.dampingFactor, c.phi += l.phi * i.dampingFactor) : (c.theta += l.theta, c.phi += l.phi);
				let _ = i.minAzimuthAngle, v = i.maxAzimuthAngle;
				isFinite(_) && isFinite(v) && (_ < -Math.PI ? _ += h : _ > Math.PI && (_ -= h), v < -Math.PI ? v += h : v > Math.PI && (v -= h), _ <= v ? c.theta = Math.max(_, Math.min(v, c.theta)) : c.theta = c.theta > (_ + v) / 2 ? Math.max(_, c.theta) : Math.min(v, c.theta)), c.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, c.phi)), c.makeSafe(), i.enableDamping === !0 ? i.target.addScaledVector(d, i.dampingFactor) : i.target.add(d), i.zoomToCursor && C || i.object.isOrthographicCamera ? c.radius = I(c.radius) : c.radius = I(c.radius * u), e.setFromSpherical(c), e.applyQuaternion(r), g.copy(i.target).add(e), i.object.lookAt(i.target), i.enableDamping === !0 ? (l.theta *= 1 - i.dampingFactor, l.phi *= 1 - i.dampingFactor, d.multiplyScalar(1 - i.dampingFactor)) : (l.set(0, 0, 0), d.set(0, 0, 0));
				let y = !1;
				if (i.zoomToCursor && C) {
					let t = null;
					if (i.object.isPerspectiveCamera) {
						let n = e.length();
						t = I(n * u);
						let r = n - t;
						i.object.position.addScaledVector(x, r), i.object.updateMatrixWorld();
					} else if (i.object.isOrthographicCamera) {
						let n = new K(S.x, S.y, 0);
						n.unproject(i.object), i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / u)), i.object.updateProjectionMatrix(), y = !0;
						let r = new K(S.x, S.y, 0);
						r.unproject(i.object), i.object.position.sub(r).add(n), i.object.updateMatrixWorld(), t = e.length();
					} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), i.zoomToCursor = !1;
					t !== null && (this.screenSpacePanning ? i.target.set(0, 0, -1).transformDirection(i.object.matrix).multiplyScalar(t).add(i.object.position) : (_d.origin.copy(i.object.position), _d.direction.set(0, 0, -1).transformDirection(i.object.matrix), Math.abs(i.object.up.dot(_d.direction)) < yd ? n.lookAt(i.target) : (vd.setFromNormalAndCoplanarPoint(i.object.up, i.target), _d.intersectPlane(vd, i.target))));
				} else i.object.isOrthographicCamera && (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / u)), i.object.updateProjectionMatrix(), y = !0);
				return u = 1, C = !1, y || f.distanceToSquared(i.object.position) > s || 8 * (1 - p.dot(i.object.quaternion)) > s || m.distanceToSquared(i.target) > 0 ? (i.dispatchEvent(md), f.copy(i.object.position), p.copy(i.object.quaternion), m.copy(i.target), y = !1, !0) : !1;
			};
		}(), this.dispose = function() {
			i.domElement.removeEventListener("contextmenu", Ee), i.domElement.removeEventListener("pointerdown", _e), i.domElement.removeEventListener("pointercancel", ye), i.domElement.removeEventListener("wheel", Se), i.domElement.removeEventListener("pointermove", ve), i.domElement.removeEventListener("pointerup", ye), i._domElementKeyEvents !== null && (i._domElementKeyEvents.removeEventListener("keydown", Ce), i._domElementKeyEvents = null);
		};
		let i = this, a = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		}, o = a.NONE, s = 1e-6, c = new Ca(), l = new Ca(), u = 1, d = new K(), f = new G(), p = new G(), m = new G(), h = new G(), g = new G(), _ = new G(), v = new G(), y = new G(), b = new G(), x = new K(), S = new G(), C = !1, w = [], T = {};
		function E() {
			return 2 * Math.PI / 60 / 60 * i.autoRotateSpeed;
		}
		function D() {
			return .95 ** i.zoomSpeed;
		}
		function O(e) {
			l.theta -= e;
		}
		function k(e) {
			l.phi -= e;
		}
		let A = function() {
			let e = new K();
			return function(t, n) {
				e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), d.add(e);
			};
		}(), j = function() {
			let e = new K();
			return function(t, n) {
				i.screenSpacePanning === !0 ? e.setFromMatrixColumn(n, 1) : (e.setFromMatrixColumn(n, 0), e.crossVectors(i.object.up, e)), e.multiplyScalar(t), d.add(e);
			};
		}(), M = function() {
			let e = new K();
			return function(t, n) {
				let r = i.domElement;
				if (i.object.isPerspectiveCamera) {
					let a = i.object.position;
					e.copy(a).sub(i.target);
					let o = e.length();
					o *= Math.tan(i.object.fov / 2 * Math.PI / 180), A(2 * t * o / r.clientHeight, i.object.matrix), j(2 * n * o / r.clientHeight, i.object.matrix);
				} else i.object.isOrthographicCamera ? (A(t * (i.object.right - i.object.left) / i.object.zoom / r.clientWidth, i.object.matrix), j(n * (i.object.top - i.object.bottom) / i.object.zoom / r.clientHeight, i.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), i.enablePan = !1);
			};
		}();
		function N(e) {
			i.object.isPerspectiveCamera || i.object.isOrthographicCamera ? u /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
		}
		function P(e) {
			i.object.isPerspectiveCamera || i.object.isOrthographicCamera ? u *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
		}
		function F(e) {
			if (!i.zoomToCursor) return;
			C = !0;
			let t = i.domElement.getBoundingClientRect(), r = e.clientX - t.left, a = e.clientY - t.top, o = t.width, s = t.height;
			S.x = r / o * 2 - 1, S.y = -(a / s) * 2 + 1, x.set(S.x, S.y, 1).unproject(n).sub(n.position).normalize();
		}
		function I(e) {
			return Math.max(i.minDistance, Math.min(i.maxDistance, e));
		}
		function ee(e) {
			f.set(e.clientX, e.clientY);
		}
		function te(e) {
			F(e), v.set(e.clientX, e.clientY);
		}
		function ne(e) {
			h.set(e.clientX, e.clientY);
		}
		function re(e) {
			p.set(e.clientX, e.clientY), m.subVectors(p, f).multiplyScalar(i.rotateSpeed);
			let t = i.domElement;
			O(2 * Math.PI * m.x / t.clientHeight), k(2 * Math.PI * m.y / t.clientHeight), f.copy(p), i.update();
		}
		function L(e) {
			y.set(e.clientX, e.clientY), b.subVectors(y, v), b.y > 0 ? N(D()) : b.y < 0 && P(D()), v.copy(y), i.update();
		}
		function ie(e) {
			g.set(e.clientX, e.clientY), _.subVectors(g, h).multiplyScalar(i.panSpeed), M(_.x, _.y), h.copy(g), i.update();
		}
		function ae(e) {
			F(e), e.deltaY < 0 ? P(D()) : e.deltaY > 0 && N(D()), i.update();
		}
		function oe(e) {
			let t = !1;
			switch (e.code) {
				case i.keys.UP:
					e.ctrlKey || e.metaKey || e.shiftKey ? k(2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : M(0, i.keyPanSpeed), t = !0;
					break;
				case i.keys.BOTTOM:
					e.ctrlKey || e.metaKey || e.shiftKey ? k(-2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : M(0, -i.keyPanSpeed), t = !0;
					break;
				case i.keys.LEFT:
					e.ctrlKey || e.metaKey || e.shiftKey ? O(2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : M(i.keyPanSpeed, 0), t = !0;
					break;
				case i.keys.RIGHT:
					e.ctrlKey || e.metaKey || e.shiftKey ? O(-2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : M(-i.keyPanSpeed, 0), t = !0;
					break;
			}
			t && (e.preventDefault(), i.update());
		}
		function se() {
			if (w.length === 1) f.set(w[0].pageX, w[0].pageY);
			else {
				let e = .5 * (w[0].pageX + w[1].pageX), t = .5 * (w[0].pageY + w[1].pageY);
				f.set(e, t);
			}
		}
		function ce() {
			if (w.length === 1) h.set(w[0].pageX, w[0].pageY);
			else {
				let e = .5 * (w[0].pageX + w[1].pageX), t = .5 * (w[0].pageY + w[1].pageY);
				h.set(e, t);
			}
		}
		function le() {
			let e = w[0].pageX - w[1].pageX, t = w[0].pageY - w[1].pageY, n = Math.sqrt(e * e + t * t);
			v.set(0, n);
		}
		function ue() {
			i.enableZoom && le(), i.enablePan && ce();
		}
		function de() {
			i.enableZoom && le(), i.enableRotate && se();
		}
		function fe(e) {
			if (w.length == 1) p.set(e.pageX, e.pageY);
			else {
				let t = ke(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
				p.set(n, r);
			}
			m.subVectors(p, f).multiplyScalar(i.rotateSpeed);
			let t = i.domElement;
			O(2 * Math.PI * m.x / t.clientHeight), k(2 * Math.PI * m.y / t.clientHeight), f.copy(p);
		}
		function pe(e) {
			if (w.length === 1) g.set(e.pageX, e.pageY);
			else {
				let t = ke(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
				g.set(n, r);
			}
			_.subVectors(g, h).multiplyScalar(i.panSpeed), M(_.x, _.y), h.copy(g);
		}
		function me(e) {
			let t = ke(e), n = e.pageX - t.x, r = e.pageY - t.y, a = Math.sqrt(n * n + r * r);
			y.set(0, a), b.set(0, (y.y / v.y) ** +i.zoomSpeed), N(b.y), v.copy(y);
		}
		function he(e) {
			i.enableZoom && me(e), i.enablePan && pe(e);
		}
		function ge(e) {
			i.enableZoom && me(e), i.enableRotate && fe(e);
		}
		function _e(e) {
			i.enabled !== !1 && (w.length === 0 && (i.domElement.setPointerCapture(e.pointerId), i.domElement.addEventListener("pointermove", ve), i.domElement.addEventListener("pointerup", ye)), De(e), e.pointerType === "touch" ? we(e) : be(e));
		}
		function ve(e) {
			i.enabled !== !1 && (e.pointerType === "touch" ? Te(e) : xe(e));
		}
		function ye(e) {
			R(e), w.length === 0 && (i.domElement.releasePointerCapture(e.pointerId), i.domElement.removeEventListener("pointermove", ve), i.domElement.removeEventListener("pointerup", ye)), i.dispatchEvent(gd), o = a.NONE;
		}
		function be(t) {
			let n;
			switch (t.button) {
				case 0:
					n = i.mouseButtons.LEFT;
					break;
				case 1:
					n = i.mouseButtons.MIDDLE;
					break;
				case 2:
					n = i.mouseButtons.RIGHT;
					break;
				default: n = -1;
			}
			switch (n) {
				case e.DOLLY:
					if (i.enableZoom === !1) return;
					te(t), o = a.DOLLY;
					break;
				case e.ROTATE:
					if (t.ctrlKey || t.metaKey || t.shiftKey) {
						if (i.enablePan === !1) return;
						ne(t), o = a.PAN;
					} else {
						if (i.enableRotate === !1) return;
						ee(t), o = a.ROTATE;
					}
					break;
				case e.PAN:
					if (t.ctrlKey || t.metaKey || t.shiftKey) {
						if (i.enableRotate === !1) return;
						ee(t), o = a.ROTATE;
					} else {
						if (i.enablePan === !1) return;
						ne(t), o = a.PAN;
					}
					break;
				default: o = a.NONE;
			}
			o !== a.NONE && i.dispatchEvent(hd);
		}
		function xe(e) {
			switch (o) {
				case a.ROTATE:
					if (i.enableRotate === !1) return;
					re(e);
					break;
				case a.DOLLY:
					if (i.enableZoom === !1) return;
					L(e);
					break;
				case a.PAN:
					if (i.enablePan === !1) return;
					ie(e);
					break;
			}
		}
		function Se(e) {
			i.enabled === !1 || i.enableZoom === !1 || o !== a.NONE || (e.preventDefault(), i.dispatchEvent(hd), ae(e), i.dispatchEvent(gd));
		}
		function Ce(e) {
			i.enabled === !1 || i.enablePan === !1 || oe(e);
		}
		function we(e) {
			switch (Oe(e), w.length) {
				case 1:
					switch (i.touches.ONE) {
						case t.ROTATE:
							if (i.enableRotate === !1) return;
							se(), o = a.TOUCH_ROTATE;
							break;
						case t.PAN:
							if (i.enablePan === !1) return;
							ce(), o = a.TOUCH_PAN;
							break;
						default: o = a.NONE;
					}
					break;
				case 2:
					switch (i.touches.TWO) {
						case t.DOLLY_PAN:
							if (i.enableZoom === !1 && i.enablePan === !1) return;
							ue(), o = a.TOUCH_DOLLY_PAN;
							break;
						case t.DOLLY_ROTATE:
							if (i.enableZoom === !1 && i.enableRotate === !1) return;
							de(), o = a.TOUCH_DOLLY_ROTATE;
							break;
						default: o = a.NONE;
					}
					break;
				default: o = a.NONE;
			}
			o !== a.NONE && i.dispatchEvent(hd);
		}
		function Te(e) {
			switch (Oe(e), o) {
				case a.TOUCH_ROTATE:
					if (i.enableRotate === !1) return;
					fe(e), i.update();
					break;
				case a.TOUCH_PAN:
					if (i.enablePan === !1) return;
					pe(e), i.update();
					break;
				case a.TOUCH_DOLLY_PAN:
					if (i.enableZoom === !1 && i.enablePan === !1) return;
					he(e), i.update();
					break;
				case a.TOUCH_DOLLY_ROTATE:
					if (i.enableZoom === !1 && i.enableRotate === !1) return;
					ge(e), i.update();
					break;
				default: o = a.NONE;
			}
		}
		function Ee(e) {
			i.enabled !== !1 && e.preventDefault();
		}
		function De(e) {
			w.push(e);
		}
		function R(e) {
			delete T[e.pointerId];
			for (let t = 0; t < w.length; t++) if (w[t].pointerId == e.pointerId) {
				w.splice(t, 1);
				return;
			}
		}
		function Oe(e) {
			let t = T[e.pointerId];
			t === void 0 && (t = new G(), T[e.pointerId] = t), t.set(e.pageX, e.pageY);
		}
		function ke(e) {
			return T[(e.pointerId === w[0].pointerId ? w[1] : w[0]).pointerId];
		}
		i.domElement.addEventListener("contextmenu", Ee), i.domElement.addEventListener("pointerdown", _e), i.domElement.addEventListener("pointercancel", ye), i.domElement.addEventListener("wheel", Se, { passive: !1 }), this.update();
	}
}, xd = (e, t, n, r, i) => {
	let a = performance.now(), o = e.style.display === "none" ? 0 : parseFloat(e.style.opacity);
	isNaN(o) && (o = 1);
	let s = window.setInterval(() => {
		let c = performance.now() - a, l = Math.min(c / r, 1);
		l > .999 && (l = 1);
		let u;
		t ? (u = (1 - l) * o, u < 1e-4 && (u = 0)) : u = (1 - o) * l + o, u > 0 ? (e.style.display = n, e.style.opacity = u) : e.style.display = "none", l >= 1 && (i && i(), window.clearInterval(s));
	}, 16);
	return s;
}, Sd = 500, Cd = class e {
	static elementIDGen = 0;
	constructor(t, n) {
		this.taskIDGen = 0, this.elementID = e.elementIDGen++, this.tasks = [], this.message = t || "Loading...", this.container = n || document.body, this.spinnerContainerOuter = document.createElement("div"), this.spinnerContainerOuter.className = `spinnerOuterContainer${this.elementID}`, this.spinnerContainerOuter.style.display = "none", this.spinnerContainerPrimary = document.createElement("div"), this.spinnerContainerPrimary.className = `spinnerContainerPrimary${this.elementID}`, this.spinnerPrimary = document.createElement("div"), this.spinnerPrimary.classList.add(`spinner${this.elementID}`, `spinnerPrimary${this.elementID}`), this.messageContainerPrimary = document.createElement("div"), this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`, `messageContainerPrimary${this.elementID}`), this.messageContainerPrimary.innerHTML = this.message, this.spinnerContainerMin = document.createElement("div"), this.spinnerContainerMin.className = `spinnerContainerMin${this.elementID}`, this.spinnerMin = document.createElement("div"), this.spinnerMin.classList.add(`spinner${this.elementID}`, `spinnerMin${this.elementID}`), this.messageContainerMin = document.createElement("div"), this.messageContainerMin.classList.add(`messageContainer${this.elementID}`, `messageContainerMin${this.elementID}`), this.messageContainerMin.innerHTML = this.message, this.spinnerContainerPrimary.appendChild(this.spinnerPrimary), this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary), this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary), this.spinnerContainerMin.appendChild(this.spinnerMin), this.spinnerContainerMin.appendChild(this.messageContainerMin), this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);
		let r = document.createElement("style");
		r.innerHTML = `

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `, this.spinnerContainerOuter.appendChild(r), this.container.appendChild(this.spinnerContainerOuter), this.setMinimized(!1, !0), this.fadeTransitions = [];
	}
	addTask(e) {
		let t = {
			message: e,
			id: this.taskIDGen++
		};
		return this.tasks.push(t), this.update(), t.id;
	}
	removeTask(e) {
		let t = 0;
		for (let n of this.tasks) {
			if (n.id === e) {
				this.tasks.splice(t, 1);
				break;
			}
			t++;
		}
		this.update();
	}
	removeAllTasks() {
		this.tasks = [], this.update();
	}
	setMessageForTask(e, t) {
		for (let n of this.tasks) if (n.id === e) {
			n.message = t;
			break;
		}
		this.update();
	}
	update() {
		this.tasks.length > 0 ? (this.show(), this.setMessage(this.tasks[this.tasks.length - 1].message)) : this.hide();
	}
	show() {
		this.spinnerContainerOuter.style.display = "block", this.visible = !0;
	}
	hide() {
		this.spinnerContainerOuter.style.display = "none", this.visible = !1;
	}
	setContainer(e) {
		this.container && this.spinnerContainerOuter.parentElement === this.container && this.container.removeChild(this.spinnerContainerOuter), e && (this.container = e, this.container.appendChild(this.spinnerContainerOuter), this.spinnerContainerOuter.style.zIndex = this.container.style.zIndex + 1);
	}
	setMinimized(e, t) {
		let n = (e, t, n, r, i) => {
			n ? e.style.display = t ? r : "none" : this.fadeTransitions[i] = xd(e, !t, r, Sd, () => {
				this.fadeTransitions[i] = null;
			});
		};
		n(this.spinnerContainerPrimary, !e, t, "block", 0), n(this.spinnerContainerMin, e, t, "flex", 1), this.minimized = e;
	}
	setMessage(e) {
		this.messageContainerPrimary.innerHTML = e, this.messageContainerMin.innerHTML = e;
	}
}, wd = class {
	constructor(e) {
		this.idGen = 0, this.tasks = [], this.container = e || document.body, this.progressBarContainerOuter = document.createElement("div"), this.progressBarContainerOuter.className = "progressBarOuterContainer", this.progressBarContainerOuter.style.display = "none", this.progressBarBox = document.createElement("div"), this.progressBarBox.className = "progressBarBox", this.progressBarBackground = document.createElement("div"), this.progressBarBackground.className = "progressBarBackground", this.progressBar = document.createElement("div"), this.progressBar.className = "progressBar", this.progressBarBackground.appendChild(this.progressBar), this.progressBarBox.appendChild(this.progressBarBackground), this.progressBarContainerOuter.appendChild(this.progressBarBox);
		let t = document.createElement("style");
		t.innerHTML = "\n\n            .progressBarOuterContainer {\n                width: 100%;\n                height: 100%;\n                margin: 0;\n                top: 0;\n                left: 0;\n                position: absolute;\n                pointer-events: none;\n            }\n\n            .progressBarBox {\n                z-index:99999;\n                padding: 7px 9px 5px 7px;\n                background-color: rgba(190, 190, 190, 0.75);\n                border: #555555 1px solid;\n                border-radius: 15px;\n                margin: 0;\n                position: absolute;\n                bottom: 50px;\n                left: 50%;\n                transform: translate(-50%, 0);\n                width: 180px;\n                height: 30px;\n                pointer-events: auto;\n            }\n\n            .progressBarBackground {\n                width: 100%;\n                height: 25px;\n                border-radius:10px;\n                background-color: rgba(128, 128, 128, 0.75);\n                border: #444444 1px solid;\n                box-shadow: inset 0 0 10px #333333;\n            }\n\n            .progressBar {\n                height: 25px;\n                width: 0px;\n                border-radius:10px;\n                background-color: rgba(0, 200, 0, 0.75);\n                box-shadow: inset 0 0 10px #003300;\n            }\n\n        ", this.progressBarContainerOuter.appendChild(t), this.container.appendChild(this.progressBarContainerOuter);
	}
	show() {
		this.progressBarContainerOuter.style.display = "block";
	}
	hide() {
		this.progressBarContainerOuter.style.display = "none";
	}
	setProgress(e) {
		this.progressBar.style.width = e + "%";
	}
	setContainer(e) {
		this.container && this.progressBarContainerOuter.parentElement === this.container && this.container.removeChild(this.progressBarContainerOuter), e && (this.container = e, this.container.appendChild(this.progressBarContainerOuter), this.progressBarContainerOuter.style.zIndex = this.container.style.zIndex + 1);
	}
}, Td = class {
	constructor(e) {
		this.container = e || document.body, this.infoCells = {};
		let t = [
			["Camera position", "cameraPosition"],
			["Camera look-at", "cameraLookAt"],
			["Camera up", "cameraUp"],
			["Camera mode", "orthographicCamera"],
			["Cursor position", "cursorPosition"],
			["FPS", "fps"],
			["Rendering:", "renderSplatCount"],
			["Sort time", "sortTime"],
			["Render window", "renderWindow"],
			["Focal adjustment", "focalAdjustment"],
			["Splat scale", "splatScale"],
			["Point cloud mode", "pointCloudMode"]
		];
		this.infoPanelContainer = document.createElement("div");
		let n = document.createElement("style");
		n.innerHTML = "\n\n            .infoPanel {\n                width: 430px;\n                padding: 10px;\n                background-color: rgba(50, 50, 50, 0.85);\n                border: #555555 2px solid;\n                color: #dddddd;\n                border-radius: 10px;\n                z-index: 9999;\n                font-family: arial;\n                font-size: 11pt;\n                text-align: left;\n                margin: 0;\n                top: 10px;\n                left:10px;\n                position: absolute;\n                pointer-events: auto;\n            }\n\n            .info-panel-cell {\n                margin-bottom: 5px;\n                padding-bottom: 2px;\n            }\n\n            .label-cell {\n                font-weight: bold;\n                font-size: 12pt;\n                width: 140px;\n            }\n\n        ", this.infoPanelContainer.append(n), this.infoPanel = document.createElement("div"), this.infoPanel.className = "infoPanel";
		let r = document.createElement("div");
		r.style.display = "table";
		for (let e of t) {
			let t = document.createElement("div");
			t.style.display = "table-row", t.className = "info-panel-row";
			let n = document.createElement("div");
			n.style.display = "table-cell", n.innerHTML = `${e[0]}: `, n.classList.add("info-panel-cell", "label-cell");
			let i = document.createElement("div");
			i.style.display = "table-cell", i.style.width = "10px", i.innerHTML = " ", i.className = "info-panel-cell";
			let a = document.createElement("div");
			a.style.display = "table-cell", a.innerHTML = "", a.className = "info-panel-cell", this.infoCells[e[1]] = a, t.appendChild(n), t.appendChild(i), t.appendChild(a), r.appendChild(t);
		}
		this.infoPanel.appendChild(r), this.infoPanelContainer.append(this.infoPanel), this.infoPanelContainer.style.display = "none", this.container.appendChild(this.infoPanelContainer), this.visible = !1;
	}
	update = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		let m = `${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;
		if (this.infoCells.cameraPosition.innerHTML !== m && (this.infoCells.cameraPosition.innerHTML = m), n) {
			let e = n, t = `${e.x.toFixed(5)}, ${e.y.toFixed(5)}, ${e.z.toFixed(5)}`;
			this.infoCells.cameraLookAt.innerHTML !== t && (this.infoCells.cameraLookAt.innerHTML = t);
		}
		let h = `${r.x.toFixed(5)}, ${r.y.toFixed(5)}, ${r.z.toFixed(5)}`;
		if (this.infoCells.cameraUp.innerHTML !== h && (this.infoCells.cameraUp.innerHTML = h), this.infoCells.orthographicCamera.innerHTML = i ? "Orthographic" : "Perspective", a) {
			let e = a, t = `${e.x.toFixed(5)}, ${e.y.toFixed(5)}, ${e.z.toFixed(5)}`;
			this.infoCells.cursorPosition.innerHTML = t;
		} else this.infoCells.cursorPosition.innerHTML = "N/A";
		this.infoCells.fps.innerHTML = o, this.infoCells.renderWindow.innerHTML = `${e.x} x ${e.y}`, this.infoCells.renderSplatCount.innerHTML = `${c} splats out of ${s} (${l.toFixed(2)}%)`, this.infoCells.sortTime.innerHTML = `${u.toFixed(3)} ms`, this.infoCells.focalAdjustment.innerHTML = `${d.toFixed(3)}`, this.infoCells.splatScale.innerHTML = `${f.toFixed(3)}`, this.infoCells.pointCloudMode.innerHTML = `${p}`;
	};
	setContainer(e) {
		this.container && this.infoPanelContainer.parentElement === this.container && this.container.removeChild(this.infoPanelContainer), e && (this.container = e, this.container.appendChild(this.infoPanelContainer), this.infoPanelContainer.style.zIndex = this.container.style.zIndex + 1);
	}
	show() {
		this.infoPanelContainer.style.display = "block", this.visible = !0;
	}
	hide() {
		this.infoPanelContainer.style.display = "none", this.visible = !1;
	}
}, Ed = new K(), Dd = class extends Cn {
	constructor(e = new K(0, 0, 1), t = new K(0, 0, 0), n = 1, r = .1, i = 16776960, a = n * .2, o = a * .2) {
		super(), this.type = "ArrowHelper";
		let s = new yi(r, r, n, 32);
		s.translate(0, n / 2, 0);
		let c = new yi(0, o, a, 32);
		c.translate(0, n, 0), this.position.copy(t), this.line = new ti(s, new Ur({
			color: i,
			toneMapped: !1
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new ti(c, new Ur({
			color: i,
			toneMapped: !1
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e);
	}
	setDirection(e) {
		if (e.y > .99999) this.quaternion.set(0, 0, 0, 1);
		else if (e.y < -.99999) this.quaternion.set(1, 0, 0, 0);
		else {
			Ed.set(e.z, 0, -e.x).normalize();
			let t = Math.acos(e.y);
			this.quaternion.setFromAxisAngle(Ed, t);
		}
	}
	setColor(e) {
		this.line.material.color.set(e), this.cone.material.color.set(e);
	}
	copy(e) {
		return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
	}
	dispose() {
		this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
	}
}, Od = class e {
	constructor(e) {
		this.threeScene = e, this.splatRenderTarget = null, this.renderTargetCopyQuad = null, this.renderTargetCopyCamera = null, this.meshCursor = null, this.focusMarker = null, this.controlPlane = null, this.debugRoot = null, this.secondaryDebugRoot = null;
	}
	updateSplatRenderTargetForRenderDimensions(e, t) {
		this.destroySplatRendertarget(), this.splatRenderTarget = new qt(e, t, {
			format: E,
			stencilBuffer: !1,
			depthBuffer: !0
		}), this.splatRenderTarget.depthTexture = new hi(e, t), this.splatRenderTarget.depthTexture.format = D, this.splatRenderTarget.depthTexture.type = g;
	}
	destroySplatRendertarget() {
		this.splatRenderTarget &&= null;
	}
	setupRenderTargetCopyObjects() {
		let e = new ji({
			vertexShader: "\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    gl_Position = vec4( position.xy, 0.0, 1.0 );    \n                }\n            ",
			fragmentShader: "\n                #include <common>\n                #include <packing>\n                varying vec2 vUv;\n                uniform sampler2D sourceColorTexture;\n                uniform sampler2D sourceDepthTexture;\n                void main() {\n                    vec4 color = texture2D(sourceColorTexture, vUv);\n                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;\n                    gl_FragDepth = fragDepth;\n                    gl_FragColor = vec4(color.rgb, color.a * 2.0);\n              }\n            ",
			uniforms: {
				sourceColorTexture: {
					type: "t",
					value: null
				},
				sourceDepthTexture: {
					type: "t",
					value: null
				}
			},
			depthWrite: !1,
			depthTest: !1,
			transparent: !0,
			blending: 5,
			blendSrc: 204,
			blendSrcAlpha: 204,
			blendDst: 205,
			blendDstAlpha: 205
		});
		e.extensions.fragDepth = !0, this.renderTargetCopyQuad = new ti(new xi(2, 2), e), this.renderTargetCopyCamera = new aa(-1, 1, 1, -1, 0, 1);
	}
	destroyRenderTargetCopyObjects() {
		this.renderTargetCopyQuad &&= (Xc(this.renderTargetCopyQuad), null);
	}
	setupMeshCursor() {
		if (!this.meshCursor) {
			let e = new bi(.5, 1.5, 32), t = new Ur({ color: 16777215 }), n = new ti(e, t);
			n.rotation.set(0, 0, Math.PI), n.position.set(0, 1, 0);
			let r = new ti(e, t);
			r.position.set(0, -1, 0);
			let i = new ti(e, t);
			i.rotation.set(0, 0, Math.PI / 2), i.position.set(1, 0, 0);
			let a = new ti(e, t);
			a.rotation.set(0, 0, -Math.PI / 2), a.position.set(-1, 0, 0), this.meshCursor = new Cn(), this.meshCursor.add(n), this.meshCursor.add(r), this.meshCursor.add(i), this.meshCursor.add(a), this.meshCursor.scale.set(.1, .1, .1), this.threeScene.add(this.meshCursor), this.meshCursor.visible = !1;
		}
	}
	destroyMeshCursor() {
		this.meshCursor &&= (Xc(this.meshCursor), this.threeScene.remove(this.meshCursor), null);
	}
	setMeshCursorVisibility(e) {
		this.meshCursor.visible = e;
	}
	getMeschCursorVisibility() {
		return this.meshCursor.visible;
	}
	setMeshCursorPosition(e) {
		this.meshCursor.position.copy(e);
	}
	positionAndOrientMeshCursor(e, t) {
		this.meshCursor.position.copy(e), this.meshCursor.up.copy(t.up), this.meshCursor.lookAt(t.position);
	}
	setupFocusMarker() {
		if (!this.focusMarker) {
			let t = new Si(.5, 32, 32), n = e.buildFocusMarkerMaterial();
			n.depthTest = !1, n.depthWrite = !1, n.transparent = !0, this.focusMarker = new ti(t, n);
		}
	}
	destroyFocusMarker() {
		this.focusMarker &&= (Xc(this.focusMarker), null);
	}
	updateFocusMarker = function() {
		let e = new K(), t = new Y(), n = new K();
		return function(r, i, a) {
			t.copy(i.matrixWorld).invert(), e.copy(r).applyMatrix4(t), e.normalize().multiplyScalar(10), e.applyMatrix4(i.matrixWorld), n.copy(i.position).sub(r);
			let o = n.length();
			this.focusMarker.position.copy(r), this.focusMarker.scale.set(o, o, o), this.focusMarker.material.uniforms.realFocusPosition.value.copy(r), this.focusMarker.material.uniforms.viewport.value.copy(a), this.focusMarker.material.uniformsNeedUpdate = !0;
		};
	}();
	setFocusMarkerVisibility(e) {
		this.focusMarker.visible = e;
	}
	setFocusMarkerOpacity(e) {
		this.focusMarker.material.uniforms.opacity.value = e, this.focusMarker.material.uniformsNeedUpdate = !0;
	}
	getFocusMarkerOpacity() {
		return this.focusMarker.material.uniforms.opacity.value;
	}
	setupControlPlane() {
		if (!this.controlPlane) {
			let e = new xi(1, 1);
			e.rotateX(-Math.PI / 2);
			let t = new Ur({ color: 16777215 });
			t.transparent = !0, t.opacity = .6, t.depthTest = !1, t.depthWrite = !1, t.side = 2;
			let n = new ti(e, t), r = new K(0, 1, 0);
			r.normalize();
			let i = new Dd(r, new K(0, 0, 0), .5, .01, 56576, .1, .03);
			this.controlPlane = new Cn(), this.controlPlane.add(n), this.controlPlane.add(i);
		}
	}
	destroyControlPlane() {
		this.controlPlane &&= (Xc(this.controlPlane), null);
	}
	setControlPlaneVisibility(e) {
		this.controlPlane.visible = e;
	}
	positionAndOrientControlPlane = function() {
		let e = new Ot(), t = new K(0, 1, 0);
		return function(n, r) {
			e.setFromUnitVectors(t, r), this.controlPlane.position.copy(n), this.controlPlane.quaternion.copy(e);
		};
	}();
	addDebugMeshes() {
		this.debugRoot = this.createDebugMeshes(), this.secondaryDebugRoot = this.createSecondaryDebugMeshes(), this.threeScene.add(this.debugRoot), this.threeScene.add(this.secondaryDebugRoot);
	}
	destroyDebugMeshes() {
		for (let e of [this.debugRoot, this.secondaryDebugRoot]) e && (Xc(e), this.threeScene.remove(e));
		this.debugRoot = null, this.secondaryDebugRoot = null;
	}
	createDebugMeshes(t) {
		let n = new Si(1, 32, 32), r = new Cn(), i = (i, a) => {
			let o = new ti(n, e.buildDebugMaterial(i));
			o.renderOrder = t, r.add(o), o.position.fromArray(a);
		};
		return i(16711680, [
			-50,
			0,
			0
		]), i(16711680, [
			50,
			0,
			0
		]), i(65280, [
			0,
			0,
			-50
		]), i(65280, [
			0,
			0,
			50
		]), i(16755200, [
			5,
			0,
			5
		]), r;
	}
	createSecondaryDebugMeshes(t) {
		let n = new vi(3, 3, 3), r = new Cn(), i = (i) => {
			let a = new ti(n, e.buildDebugMaterial(12303291));
			a.renderOrder = t, r.add(a), a.position.fromArray(i);
		};
		return i([
			-10,
			0,
			-10
		]), i([
			-10,
			0,
			10
		]), i([
			10,
			0,
			-10
		]), i([
			10,
			0,
			10
		]), r;
	}
	static buildDebugMaterial(e) {
		let t = new ji({
			uniforms: { color: {
				type: "v3",
				value: new jn(e)
			} },
			vertexShader: "\n            #include <common>\n            varying float ndcDepth;\n\n            void main() {\n                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);\n                ndcDepth = gl_Position.z / gl_Position.w;\n                gl_Position.x = gl_Position.x / gl_Position.w;\n                gl_Position.y = gl_Position.y / gl_Position.w;\n                gl_Position.z = 0.0;\n                gl_Position.w = 1.0;\n    \n            }\n        ",
			fragmentShader: "\n            #include <common>\n            uniform vec3 color;\n            varying float ndcDepth;\n            void main() {\n                gl_FragDepth = (ndcDepth + 1.0) / 2.0;\n                gl_FragColor = vec4(color.rgb, 0.0);\n            }\n        ",
			transparent: !1,
			depthTest: !0,
			depthWrite: !0,
			side: 0
		});
		return t.extensions.fragDepth = !0, t;
	}
	static buildFocusMarkerMaterial(e) {
		return new ji({
			uniforms: {
				color: {
					type: "v3",
					value: new jn(e)
				},
				realFocusPosition: {
					type: "v3",
					value: new K()
				},
				viewport: {
					type: "v2",
					value: new G()
				},
				opacity: { value: 0 }
			},
			vertexShader: "\n            #include <common>\n\n            uniform vec2 viewport;\n            uniform vec3 realFocusPosition;\n\n            varying vec4 ndcPosition;\n            varying vec4 ndcCenter;\n            varying vec4 ndcFocusPosition;\n\n            void main() {\n                float radius = 0.01;\n\n                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);\n                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n\n                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);\n\n                ndcPosition = projectionMatrix * viewPosition;\n                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);\n                ndcCenter = projectionMatrix * viewCenter;\n                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);\n\n                ndcFocusPosition = projectionMatrix * viewFocusPosition;\n                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);\n\n                gl_Position = projectionMatrix * viewPosition;\n\n            }\n        ",
			fragmentShader: "\n            #include <common>\n            uniform vec3 color;\n            uniform vec2 viewport;\n            uniform float opacity;\n\n            varying vec4 ndcPosition;\n            varying vec4 ndcCenter;\n            varying vec4 ndcFocusPosition;\n\n            void main() {\n                vec2 screenPosition = vec2(ndcPosition) * viewport;\n                vec2 screenCenter = vec2(ndcCenter) * viewport;\n\n                vec2 screenVec = screenPosition - screenCenter;\n\n                float projectedRadius = length(screenVec);\n\n                float lineWidth = 0.0005 * viewport.y;\n                float aaRange = 0.0025 * viewport.y;\n                float radius = 0.06 * viewport.y;\n                float radDiff = abs(projectedRadius - radius) - lineWidth;\n                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); \n\n                gl_FragColor = vec4(color.rgb, alpha * opacity);\n            }\n        ",
			transparent: !0,
			depthTest: !1,
			depthWrite: !1,
			side: 0
		});
	}
	dispose() {
		this.destroyMeshCursor(), this.destroyFocusMarker(), this.destroyDebugMeshes(), this.destroyControlPlane(), this.destroyRenderTargetCopyObjects(), this.destroySplatRendertarget();
	}
}, kd = new K(1, 0, 0), Ad = new K(0, 1, 0), jd = new K(0, 0, 1), Md = class {
	constructor(e = new K(), t = new K()) {
		this.origin = new K(), this.direction = new K(), this.setParameters(e, t);
	}
	setParameters(e, t) {
		this.origin.copy(e), this.direction.copy(t).normalize();
	}
	boxContainsPoint(e, t, n) {
		return !(t.x < e.min.x - n || t.x > e.max.x + n || t.y < e.min.y - n || t.y > e.max.y + n || t.z < e.min.z - n || t.z > e.max.z + n);
	}
	intersectBox = function() {
		let e = new K(), t = [], n = [], r = [];
		return function(i, a) {
			if (n[0] = this.origin.x, n[1] = this.origin.y, n[2] = this.origin.z, r[0] = this.direction.x, r[1] = this.direction.y, r[2] = this.direction.z, this.boxContainsPoint(i, this.origin, 1e-4)) return a && (a.origin.copy(this.origin), a.normal.set(0, 0, 0), a.distance = -1), !0;
			for (let o = 0; o < 3; o++) {
				if (r[o] == 0) continue;
				let s = o == 0 ? kd : o == 1 ? Ad : jd, c = r[o] < 0 ? i.max : i.min, l = -Math.sign(r[o]);
				t[0] = o == 0 ? c.x : o == 1 ? c.y : c.z;
				let u = t[0] - n[o];
				if (u * l < 0) {
					let c = (o + 1) % 3, d = (o + 2) % 3;
					if (t[2] = r[c] / r[o] * u + n[c], t[1] = r[d] / r[o] * u + n[d], e.set(t[o], t[d], t[c]), this.boxContainsPoint(i, e, 1e-4)) return a && (a.origin.copy(e), a.normal.copy(s).multiplyScalar(l), a.distance = e.sub(this.origin).length()), !0;
				}
			}
			return !1;
		};
	}();
	intersectSphere = function() {
		let e = new K();
		return function(t, n, r) {
			e.copy(t).sub(this.origin);
			let i = e.dot(this.direction), a = i * i, o = e.dot(e) - a, s = n * n;
			if (o > s) return !1;
			let c = Math.sqrt(s - o), l = i - c, u = i + c;
			if (u < 0) return !1;
			let d = l < 0 ? u : l;
			return r && (r.origin.copy(this.origin).addScaledVector(this.direction, d), r.normal.copy(r.origin).sub(t).normalize(), r.distance = d), !0;
		};
	}();
}, Nd = class e {
	constructor() {
		this.origin = new K(), this.normal = new K(), this.distance = 0, this.splatIndex = 0;
	}
	set(e, t, n, r) {
		this.origin.copy(e), this.normal.copy(t), this.distance = n, this.splatIndex = r;
	}
	clone() {
		let t = new e();
		return t.origin.copy(this.origin), t.normal.copy(this.normal), t.distance = this.distance, t.splatIndex = this.splatIndex, t;
	}
}, Pd = {
	ThreeD: 0,
	TwoD: 1
}, Fd = class {
	constructor(e, t, n = !1) {
		this.ray = new Md(e, t), this.raycastAgainstTrueSplatEllipsoid = n;
	}
	setFromCameraAndScreenPosition = function() {
		let e = new G();
		return function(t, n, r) {
			if (e.x = n.x / r.x * 2 - 1, e.y = (r.y - n.y) / r.y * 2 - 1, t.isPerspectiveCamera) this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t;
			else if (t.isOrthographicCamera) this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t;
			else throw Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type");
		};
	}();
	intersectSplatMesh = function() {
		let e = new Y(), t = new Y(), n = new Y(), r = new Md(), i = new K();
		return function(a, o = []) {
			let s = a.getSplatTree();
			if (s) {
				for (let c = 0; c < s.subTrees.length; c++) {
					let l = s.subTrees[c];
					t.copy(a.matrixWorld), a.dynamicMode && (a.getSceneTransform(c, n), t.multiply(n)), e.copy(t).invert(), r.origin.copy(this.ray.origin).applyMatrix4(e), r.direction.copy(this.ray.origin).add(this.ray.direction), r.direction.applyMatrix4(e).sub(r.origin).normalize();
					let u = [];
					l.rootNode && this.castRayAtSplatTreeNode(r, s, l.rootNode, u), u.forEach((e) => {
						e.origin.applyMatrix4(t), e.normal.applyMatrix4(t).normalize(), e.distance = i.copy(e.origin).sub(this.ray.origin).length();
					}), o.push(...u);
				}
				return o.sort((e, t) => e.distance > t.distance ? 1 : -1), o;
			}
		};
	}();
	castRayAtSplatTreeNode = function() {
		let e = new Gt(), t = new K(), n = new K(), r = new Ot(), i = new Nd(), a = 1e-7, o = new K(0, 0, 0), s = new Y(), c = new Y(), l = new Y(), u = new Y(), d = new Y(), f = new Md();
		return function(p, m, h, g = []) {
			if (p.intersectBox(h.boundingBox)) {
				if (h.data && h.data.indexes && h.data.indexes.length > 0) for (let _ = 0; _ < h.data.indexes.length; _++) {
					let v = h.data.indexes[_], y = m.splatMesh.getSceneIndexForSplat(v);
					if (m.splatMesh.getScene(y).visible && (m.splatMesh.getSplatColor(v, e), m.splatMesh.getSplatCenter(v, t), m.splatMesh.getSplatScaleAndRotation(v, n, r), !(n.x <= a || n.y <= a || m.splatMesh.splatRenderMode === Pd.ThreeD && n.z <= a))) if (this.raycastAgainstTrueSplatEllipsoid) {
						c.makeScale(n.x, n.y, n.z), l.makeRotationFromQuaternion(r);
						let a = Math.log10(e.w) * 2;
						if (s.makeScale(a, a, a), d.copy(s).multiply(l).multiply(c), u.copy(d).invert(), f.origin.copy(p.origin).sub(t).applyMatrix4(u), f.direction.copy(p.origin).add(p.direction).sub(t), f.direction.applyMatrix4(u).sub(f.origin).normalize(), f.intersectSphere(o, 1, i)) {
							let e = i.clone();
							e.splatIndex = v, e.origin.applyMatrix4(d).add(t), g.push(e);
						}
					} else {
						let e = n.x + n.y, r = 2;
						if (m.splatMesh.splatRenderMode === Pd.ThreeD && (e += n.z, r = 3), e /= r, p.intersectSphere(t, e, i)) {
							let e = i.clone();
							e.splatIndex = v, g.push(e);
						}
					}
				}
				if (h.children && h.children.length > 0) for (let e of h.children) this.castRayAtSplatTreeNode(p, m, e, g);
				return g;
			}
		};
	}();
}, Id = class {
	static buildVertexShaderBase(e = !1, t = !1, n = 0, r = "") {
		let i = "\n        precision highp float;\n        #include <common>\n\n        attribute uint splatIndex;\n        uniform highp usampler2D centersColorsTexture;\n        uniform highp sampler2D sphericalHarmonicsTexture;\n        uniform highp sampler2D sphericalHarmonicsTextureR;\n        uniform highp sampler2D sphericalHarmonicsTextureG;\n        uniform highp sampler2D sphericalHarmonicsTextureB;\n\n        uniform highp usampler2D sceneIndexesTexture;\n        uniform vec2 sceneIndexesTextureSize;\n        uniform int sceneCount;\n    ";
		return t && (i += `
            uniform float sceneOpacity[${al.MaxScenes}];
            uniform int sceneVisibility[${al.MaxScenes}];
        `), e && (i += `
            uniform highp mat4 transforms[${al.MaxScenes}];
        `), i += `
        ${r}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${al.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${al.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `, t && (i += "\n                float splatOpacityFromScene = sceneOpacity[sceneIndex];\n                int sceneVisible = sceneVisibility[sceneIndex];\n                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {\n                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n                    return;\n                }\n            "), e ? i += "\n                mat4 transform = transforms[sceneIndex];\n                mat4 transformModelViewMatrix = viewMatrix * transform;\n            " : i += "mat4 transformModelViewMatrix = modelViewMatrix;", i += "\n            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];\n            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];\n            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;\n            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;\n            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);\n\n            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);\n\n            vec4 clipCenter = projectionMatrix * viewCenter;\n\n            float clip = 1.2 * clipCenter.w;\n            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {\n                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n                return;\n            }\n\n            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;\n\n            vPosition = position.xy;\n            vColor = uintToRGBAVec(sampledCenterColor.r);\n        ", n >= 1 && (i += "   \n            if (sphericalHarmonicsDegree >= 1) {\n            ", e ? i += "\n                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));\n                " : i += "\n                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);\n                ", i += "\n                vec3 sh1;\n                vec3 sh2;\n                vec3 sh3;\n            ", n >= 2 && (i += "\n                    vec3 sh4;\n                    vec3 sh5;\n                    vec3 sh6;\n                    vec3 sh7;\n                    vec3 sh8;\n                "), n === 1 ? i += "\n                    if (sphericalHarmonicsMultiTextureMode == 0) {\n                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);\n                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);\n                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);\n                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);\n                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);\n                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);\n                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;\n                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;\n                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;\n                    } else {\n                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;\n                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;\n                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;\n                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;\n                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;\n                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;\n                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);\n                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);\n                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);\n                    }\n                " : n === 2 && (i += "\n                    vec4 sampledSH0123;\n                    vec4 sampledSH4567;\n                    vec4 sampledSH891011;\n\n                    vec4 sampledSH0123R;\n                    vec4 sampledSH0123G;\n                    vec4 sampledSH0123B;\n\n                    if (sphericalHarmonicsMultiTextureMode == 0) {\n                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));\n                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));\n                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));\n                        sh1 = sampledSH0123.rgb;\n                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);\n                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);\n                    } else {\n                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));\n                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));\n                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));\n                        sh1 = vec3(sampledSH0123R.rgb);\n                        sh2 = vec3(sampledSH0123G.rgb);\n                        sh3 = vec3(sampledSH0123B.rgb);\n                    }\n                "), i += "\n                    if (sphericalHarmonics8BitMode == 1) {\n                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                    }\n                    float x = worldViewDir.x;\n                    float y = worldViewDir.y;\n                    float z = worldViewDir.z;\n                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);\n            ", n >= 2 && (i += "\n                    if (sphericalHarmonicsDegree >= 2) {\n                        float xx = x * x;\n                        float yy = y * y;\n                        float zz = z * z;\n                        float xy = x * y;\n                        float yz = y * z;\n                        float xz = x * z;\n                ", n === 2 && (i += "\n                        if (sphericalHarmonicsMultiTextureMode == 0) {\n                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));\n                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));\n                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));\n                            sh4 = sampledSH891011.gba;\n                            sh5 = sampledSH12131415.rgb;\n                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);\n                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);\n                            sh8 = sampledSH20212223.gba;\n                        } else {\n                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));\n                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));\n                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));\n                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);\n                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);\n                            sh6 = vec3(sampledSH4567G.rgb);\n                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);\n                            sh8 = vec3(sampledSH4567B.gba);\n                        }\n                    "), i += "\n                        if (sphericalHarmonics8BitMode == 1) {\n                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;\n                        }\n\n                        vColor.rgb +=\n                            (SH_C2[0] * xy) * sh4 +\n                            (SH_C2[1] * yz) * sh5 +\n                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +\n                            (SH_C2[3] * xz) * sh7 +\n                            (SH_C2[4] * (xx - yy)) * sh8;\n                    }\n                "), i += "\n\n                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));\n\n            }\n\n            "), i;
	}
	static getVertexShaderFadeIn() {
		return "\n            if (fadeInComplete == 0) {\n                float opacityAdjust = 1.0;\n                float centerDist = length(splatCenter - sceneCenter);\n                float renderTime = max(currentTime - firstRenderTime, 0.0);\n\n                float fadeDistance = 0.75;\n                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);\n                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +\n                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *\n                                        distanceLoadFadeInFactor;\n                opacityAdjust *= distanceLoadFadeInFactor;\n                vColor.a *= opacityAdjust;\n            }\n        ";
	}
	static getUniforms(e = !1, t = !1, n = 0, r = 1, i = !1) {
		let a = {
			sceneCenter: {
				type: "v3",
				value: new K()
			},
			fadeInComplete: {
				type: "i",
				value: 0
			},
			orthographicMode: {
				type: "i",
				value: 0
			},
			visibleRegionFadeStartRadius: {
				type: "f",
				value: 0
			},
			visibleRegionRadius: {
				type: "f",
				value: 0
			},
			currentTime: {
				type: "f",
				value: 0
			},
			firstRenderTime: {
				type: "f",
				value: 0
			},
			centersColorsTexture: {
				type: "t",
				value: null
			},
			sphericalHarmonicsTexture: {
				type: "t",
				value: null
			},
			sphericalHarmonicsTextureR: {
				type: "t",
				value: null
			},
			sphericalHarmonicsTextureG: {
				type: "t",
				value: null
			},
			sphericalHarmonicsTextureB: {
				type: "t",
				value: null
			},
			sphericalHarmonics8BitCompressionRangeMin: {
				type: "f",
				value: []
			},
			sphericalHarmonics8BitCompressionRangeMax: {
				type: "f",
				value: []
			},
			focal: {
				type: "v2",
				value: new G()
			},
			orthoZoom: {
				type: "f",
				value: 1
			},
			inverseFocalAdjustment: {
				type: "f",
				value: 1
			},
			viewport: {
				type: "v2",
				value: new G()
			},
			basisViewport: {
				type: "v2",
				value: new G()
			},
			debugColor: {
				type: "v3",
				value: new jn()
			},
			centersColorsTextureSize: {
				type: "v2",
				value: new G(1024, 1024)
			},
			sphericalHarmonicsDegree: {
				type: "i",
				value: n
			},
			sphericalHarmonicsTextureSize: {
				type: "v2",
				value: new G(1024, 1024)
			},
			sphericalHarmonics8BitMode: {
				type: "i",
				value: 0
			},
			sphericalHarmonicsMultiTextureMode: {
				type: "i",
				value: 0
			},
			splatScale: {
				type: "f",
				value: r
			},
			pointCloudModeEnabled: {
				type: "i",
				value: +!!i
			},
			sceneIndexesTexture: {
				type: "t",
				value: null
			},
			sceneIndexesTextureSize: {
				type: "v2",
				value: new G(1024, 1024)
			},
			sceneCount: {
				type: "i",
				value: 1
			}
		};
		for (let e = 0; e < al.MaxScenes; e++) a.sphericalHarmonics8BitCompressionRangeMin.value.push(-al.SphericalHarmonics8BitCompressionRange / 2), a.sphericalHarmonics8BitCompressionRangeMax.value.push(al.SphericalHarmonics8BitCompressionRange / 2);
		if (t) {
			let e = [];
			for (let t = 0; t < al.MaxScenes; t++) e.push(1);
			a.sceneOpacity = {
				type: "f",
				value: e
			};
			let t = [];
			for (let e = 0; e < al.MaxScenes; e++) t.push(1);
			a.sceneVisibility = {
				type: "i",
				value: t
			};
		}
		if (e) {
			let e = [];
			for (let t = 0; t < al.MaxScenes; t++) e.push(new Y());
			a.transforms = {
				type: "mat4",
				value: e
			};
		}
		return a;
	}
}, Ld = class e {
	static build(t = !1, n = !1, r = !1, i = 2048, a = 1, o = !1, s = 0, c = .3) {
		let l = Id.buildVertexShaderBase(t, n, s, "\n            uniform vec2 covariancesTextureSize;\n            uniform highp sampler2D covariancesTexture;\n            uniform highp usampler2D covariancesTextureHalfFloat;\n            uniform int covariancesAreHalfFloat;\n\n            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {\n                vec2 r = unpackHalf2x16(val.r);\n                vec2 g = unpackHalf2x16(val.g);\n                vec2 b = unpackHalf2x16(val.b);\n\n                first = vec4(r.x, r.y, g.x, g.y);\n                second = vec4(b.x, b.y, 0.0, 0.0);\n            }\n        ");
		l += e.buildVertexShaderProjection(r, n, i, c);
		let u = e.buildFragmentShader(), d = Id.getUniforms(t, n, s, a, o);
		return d.covariancesTextureSize = {
			type: "v2",
			value: new G(1024, 1024)
		}, d.covariancesTexture = {
			type: "t",
			value: null
		}, d.covariancesTextureHalfFloat = {
			type: "t",
			value: null
		}, d.covariancesAreHalfFloat = {
			type: "i",
			value: 0
		}, new ji({
			uniforms: d,
			vertexShader: l,
			fragmentShader: u,
			transparent: !0,
			alphaTest: 1,
			blending: 1,
			depthTest: !0,
			depthWrite: !1,
			side: 2
		});
	}
	static buildVertexShaderProjection(e, t, n, r) {
		let i = "\n\n            vec4 sampledCovarianceA;\n            vec4 sampledCovarianceB;\n            vec3 cov3D_M11_M12_M13;\n            vec3 cov3D_M22_M23_M33;\n            if (covariancesAreHalfFloat == 0) {\n                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,\n                                                                            covariancesTextureSize));\n                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),\n                                                                            covariancesTextureSize));\n\n                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +\n                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;\n                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +\n                                    vec3(sampledCovarianceB.gba) * fOddOffset;\n            } else {\n                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));\n                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);\n                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;\n                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);\n            }\n        \n            // Construct the 3D covariance matrix\n            mat3 Vrk = mat3(\n                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,\n                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,\n                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z\n            );\n\n            mat3 J;\n            if (orthographicMode == 1) {\n                // Since the projection is linear, we don't need an approximation\n                J = transpose(mat3(orthoZoom, 0.0, 0.0,\n                                0.0, orthoZoom, 0.0,\n                                0.0, 0.0, 0.0));\n            } else {\n                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the\n                // 3D covariance matrix instead of using the actual projection matrix because that transformation would\n                // require a non-linear component (perspective division) which would yield a non-gaussian result.\n                float s = 1.0 / (viewCenter.z * viewCenter.z);\n                J = mat3(\n                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,\n                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,\n                    0., 0., 0.\n                );\n            }\n\n            // Concatenate the projection approximation with the model-view transformation\n            mat3 W = transpose(mat3(transformModelViewMatrix));\n            mat3 T = W * J;\n\n            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix\n            mat3 cov2Dm = transpose(T) * Vrk * T;\n            ";
		return e ? i += `
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            ` : i += `
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
            `, i += `

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `, t && (i += "\n                vColor.a *= splatOpacityFromScene;\n            "), i += "\n            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *\n                             basisViewport * 2.0 * inverseFocalAdjustment;\n\n            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);\n            gl_Position = quadPos;\n\n            // Scale the position data we send to the fragment shader\n            vPosition *= sqrt8;\n        ", i += Id.getVertexShaderFadeIn(), i += "}", i;
	}
	static buildFragmentShader() {
		let e = "\n            precision highp float;\n            #include <common>\n \n            uniform vec3 debugColor;\n\n            varying vec4 vColor;\n            varying vec2 vUv;\n            varying vec2 vPosition;\n        ";
		return e += "\n            void main () {\n                // Compute the positional squared distance from the center of the splat to the current fragment.\n                float A = dot(vPosition, vPosition);\n                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be\n                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse\n                // defined by the rectangle formed by vPosition. It also means it's farther\n                // away than sqrt(8) standard deviations from the mean.\n                if (A > 8.0) discard;\n                vec3 color = vColor.rgb;\n\n                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of\n                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),\n                // and since 'mean' is zero, we have X * X, which is the same as A:\n                float opacity = exp(-0.5 * A) * vColor.a;\n\n                gl_FragColor = vec4(color.rgb, opacity);\n            }\n        ", e;
	}
}, Rd = class e {
	static build(t = !1, n = !1, r = 1, i = !1, a = 0) {
		let o = Id.buildVertexShaderBase(t, n, a, "\n            uniform vec2 scaleRotationsTextureSize;\n            uniform highp sampler2D scaleRotationsTexture;\n            varying mat3 vT;\n            varying vec2 vQuadCenter;\n            varying vec2 vFragCoord;\n        ");
		o += e.buildVertexShaderProjection();
		let s = e.buildFragmentShader(), c = Id.getUniforms(t, n, a, r, i);
		return c.scaleRotationsTexture = {
			type: "t",
			value: null
		}, c.scaleRotationsTextureSize = {
			type: "v2",
			value: new G(1024, 1024)
		}, new ji({
			uniforms: c,
			vertexShader: o,
			fragmentShader: s,
			transparent: !0,
			alphaTest: 1,
			blending: 1,
			depthTest: !0,
			depthWrite: !1,
			side: 2
		});
	}
	static buildVertexShaderProjection() {
		let e = "\n\n            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,\n                                                                            oddOffset, scaleRotationsTextureSize));\n            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,\n                                                                            oddOffset + uint(1), scaleRotationsTextureSize));\n\n            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +\n                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;\n            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +\n                                    vec3(scaleRotationB.gba) * fOddOffset;\n\n            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *\n                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);\n            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);\n            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,\n                            0.0, scaleRotation123.g, 0.0,\n                            0.0, 0.0, scaleRotation123.b);\n            \n            mat3 L = R * S;\n\n            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),\n                                        vec4(L[1], 0.0),\n                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));\n\n            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);\n\n            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),\n                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),\n                                    vec4(0.0, 0.0, 0.0, 1.0));\n\n            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;\n            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));\n        ";
		return e += "\n\n                mat4 splat2World4 = mat4(vec4(L[0], 0.0),\n                                        vec4(L[1], 0.0),\n                                        vec4(L[2], 0.0),\n                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));\n\n                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);\n\n                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);\n                tempPoint1 /= tempPoint1.w;\n\n                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);\n                tempPoint2 /= tempPoint2.w;\n\n                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);\n                center /= center.w;\n\n                vec2 basisVector1 = tempPoint1.xy - center.xy;\n                vec2 basisVector2 = tempPoint2.xy - center.xy;\n\n                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;\n                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;\n\n                const float minPix = 1.;\n                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {\n                    \n            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);\n            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);\n            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);\n\n            vec3 tempPoint = vec3(1.0, 1.0, -1.0);\n            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);\n            vec3 f = (1.0 / distance) * tempPoint;\n            if (abs(distance) < 0.00001) return;\n\n            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);\n            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);\n            vec2 pointImage = vec2(pointImageX, pointImageY);\n\n            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);\n            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);\n            vec2 temp = vec2(tempX, tempY);\n\n            vec2 halfExtend = pointImage * pointImage - temp;\n            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));\n            float radius = max(extent.x, extent.y);\n\n            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);\n\n            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);\n            gl_Position = quadPos;\n\n            vT = T;\n            vQuadCenter = pointImage;\n            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;\n        \n                } else {\n                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;\n                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);\n                    gl_Position = quadPos;\n\n                    vT = T;\n                    vQuadCenter = center.xy;\n                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;\n                }\n            ", e += Id.getVertexShaderFadeIn(), e += "}", e;
	}
	static buildFragmentShader() {
		return "\n            precision highp float;\n            #include <common>\n\n            uniform vec3 debugColor;\n\n            varying vec4 vColor;\n            varying vec2 vUv;\n            varying vec2 vPosition;\n            varying mat3 vT;\n            varying vec2 vQuadCenter;\n            varying vec2 vFragCoord;\n\n            void main () {\n\n                const float FilterInvSquare = 2.0;\n                const float near_n = 0.2;\n                const float T = 1.0;\n\n                vec2 xy = vQuadCenter;\n                vec3 Tu = vT[0];\n                vec3 Tv = vT[1];\n                vec3 Tw = vT[2];\n                vec3 k = vFragCoord.x * Tw - Tu;\n                vec3 l = vFragCoord.y * Tw - Tv;\n                vec3 p = cross(k, l);\n                if (p.z == 0.0) discard;\n                vec2 s = vec2(p.x / p.z, p.y / p.z);\n                float rho3d = (s.x * s.x + s.y * s.y); \n                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);\n                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); \n\n                // compute intersection and depth\n                float rho = min(rho3d, rho2d);\n                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; \n                if (depth < near_n) discard;\n                //  vec4 nor_o = collected_normal_opacity[j];\n                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};\n                float opa = vColor.a;\n\n                float power = -0.5f * rho;\n                if (power > 0.0f) discard;\n\n                // Eq. (2) from 3D Gaussian splatting paper.\n                // Obtain alpha by multiplying with Gaussian opacity\n                // and its exponential falloff from mean.\n                // Avoid numerical instabilities (see paper appendix). \n                float alpha = min(0.99f, opa * exp(power));\n                if (alpha < 1.0f / 255.0f) discard;\n                float test_T = T * (1.0 - alpha);\n                if (test_T < 0.0001)discard;\n\n                float w = alpha * T;\n                gl_FragColor = vec4(vColor.rgb, w);\n            }\n        ";
	}
}, zd = class {
	static build(e) {
		let t = new Mr();
		t.setIndex([
			0,
			1,
			2,
			0,
			2,
			3
		]);
		let n = new _r(new Float32Array(12), 3);
		t.setAttribute("position", n), n.setXYZ(0, -1, -1, 0), n.setXYZ(1, -1, 1, 0), n.setXYZ(2, 1, 1, 0), n.setXYZ(3, 1, -1, 0), n.needsUpdate = !0;
		let r = new oa().copy(t), i = new ai(new Uint32Array(e), 1, !1);
		return i.setUsage(He), r.setAttribute("splatIndex", i), r.instanceCount = 0, r;
	}
}, Bd = class extends Cn {
	constructor(e, t = new K(), n = new Ot(), r = new K(1, 1, 1), i = 1, a = 1, o = !0) {
		super(), this.splatBuffer = e, this.position.copy(t), this.quaternion.copy(n), this.scale.copy(r), this.transform = new Y(), this.minimumAlpha = i, this.opacity = a, this.visible = o;
	}
	copyTransformData(e) {
		this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.transform.copy(e.transform);
	}
	updateTransform(e) {
		e ? (this.matrixWorldAutoUpdate && this.updateWorldMatrix(!0, !1), this.transform.copy(this.matrixWorld)) : (this.matrixAutoUpdate && this.updateMatrix(), this.transform.copy(this.matrix));
	}
}, Vd = class e {
	static idGen = 0;
	constructor(t, n, r, i) {
		this.min = new K().copy(t), this.max = new K().copy(n), this.boundingBox = new Jn(this.min, this.max), this.center = new K().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min), this.depth = r, this.children = [], this.data = null, this.id = i || e.idGen++;
	}
}, Hd = class e {
	constructor(e, t) {
		this.maxDepth = e, this.maxCentersPerNode = t, this.sceneDimensions = new K(), this.sceneMin = new K(), this.sceneMax = new K(), this.rootNode = null, this.nodesWithIndexes = [], this.splatMesh = null;
	}
	static convertWorkerSubTreeNode(t) {
		let n = new Vd(new K().fromArray(t.min), new K().fromArray(t.max), t.depth, t.id);
		if (t.data.indexes) {
			n.data = { indexes: [] };
			for (let e of t.data.indexes) n.data.indexes.push(e);
		}
		if (t.children) for (let r of t.children) n.children.push(e.convertWorkerSubTreeNode(r));
		return n;
	}
	static convertWorkerSubTree(t, n) {
		let r = new e(t.maxDepth, t.maxCentersPerNode);
		r.sceneMin = new K().fromArray(t.sceneMin), r.sceneMax = new K().fromArray(t.sceneMax), r.splatMesh = n, r.rootNode = e.convertWorkerSubTreeNode(t.rootNode);
		let i = (e, t) => {
			e.children.length === 0 && t(e);
			for (let n of e.children) i(n, t);
		};
		return r.nodesWithIndexes = [], i(r.rootNode, (e) => {
			e.data && e.data.indexes && e.data.indexes.length > 0 && r.nodesWithIndexes.push(e);
		}), r;
	}
};
function Ud(e) {
	let t = 0;
	class n {
		constructor(e, t) {
			this.min = [
				e[0],
				e[1],
				e[2]
			], this.max = [
				t[0],
				t[1],
				t[2]
			];
		}
		containsPoint(e) {
			return e[0] >= this.min[0] && e[0] <= this.max[0] && e[1] >= this.min[1] && e[1] <= this.max[1] && e[2] >= this.min[2] && e[2] <= this.max[2];
		}
	}
	class r {
		constructor(e, t) {
			this.maxDepth = e, this.maxCentersPerNode = t, this.sceneDimensions = [], this.sceneMin = [], this.sceneMax = [], this.rootNode = null, this.addedIndexes = {}, this.nodesWithIndexes = [], this.splatMesh = null, this.disposed = !1;
		}
	}
	class i {
		constructor(e, n, r, i) {
			this.min = [
				e[0],
				e[1],
				e[2]
			], this.max = [
				n[0],
				n[1],
				n[2]
			], this.center = [
				(n[0] - e[0]) * .5 + e[0],
				(n[1] - e[1]) * .5 + e[1],
				(n[2] - e[2]) * .5 + e[2]
			], this.depth = r, this.children = [], this.data = null, this.id = i || t++;
		}
	}
	processSplatTreeNode = function(e, t, r, a) {
		let o = t.data.indexes.length;
		if (o < e.maxCentersPerNode || t.depth > e.maxDepth) {
			let n = [];
			for (let r = 0; r < t.data.indexes.length; r++) e.addedIndexes[t.data.indexes[r]] || (n.push(t.data.indexes[r]), e.addedIndexes[t.data.indexes[r]] = !0);
			t.data.indexes = n, t.data.indexes.sort((e, t) => e > t ? 1 : -1), e.nodesWithIndexes.push(t);
			return;
		}
		let s = [
			t.max[0] - t.min[0],
			t.max[1] - t.min[1],
			t.max[2] - t.min[2]
		], c = [
			s[0] * .5,
			s[1] * .5,
			s[2] * .5
		], l = [
			t.min[0] + c[0],
			t.min[1] + c[1],
			t.min[2] + c[2]
		], u = [
			new n([
				l[0] - c[0],
				l[1],
				l[2] - c[2]
			], [
				l[0],
				l[1] + c[1],
				l[2]
			]),
			new n([
				l[0],
				l[1],
				l[2] - c[2]
			], [
				l[0] + c[0],
				l[1] + c[1],
				l[2]
			]),
			new n([
				l[0],
				l[1],
				l[2]
			], [
				l[0] + c[0],
				l[1] + c[1],
				l[2] + c[2]
			]),
			new n([
				l[0] - c[0],
				l[1],
				l[2]
			], [
				l[0],
				l[1] + c[1],
				l[2] + c[2]
			]),
			new n([
				l[0] - c[0],
				l[1] - c[1],
				l[2] - c[2]
			], [
				l[0],
				l[1],
				l[2]
			]),
			new n([
				l[0],
				l[1] - c[1],
				l[2] - c[2]
			], [
				l[0] + c[0],
				l[1],
				l[2]
			]),
			new n([
				l[0],
				l[1] - c[1],
				l[2]
			], [
				l[0] + c[0],
				l[1],
				l[2] + c[2]
			]),
			new n([
				l[0] - c[0],
				l[1] - c[1],
				l[2]
			], [
				l[0],
				l[1],
				l[2] + c[2]
			])
		], d = [], f = [];
		for (let e = 0; e < u.length; e++) d[e] = 0, f[e] = [];
		let p = [
			0,
			0,
			0
		];
		for (let e = 0; e < o; e++) {
			let n = t.data.indexes[e], i = r[n];
			p[0] = a[i], p[1] = a[i + 1], p[2] = a[i + 2];
			for (let e = 0; e < u.length; e++) u[e].containsPoint(p) && (d[e]++, f[e].push(n));
		}
		for (let e = 0; e < u.length; e++) {
			let n = new i(u[e].min, u[e].max, t.depth + 1);
			n.data = { indexes: f[e] }, t.children.push(n);
		}
		t.data = {};
		for (let n of t.children) processSplatTreeNode(e, n, r, a);
	};
	let a = (e, t, n) => {
		let a = [
			0,
			0,
			0
		], o = [
			0,
			0,
			0
		], s = [], c = Math.floor(e.length / 4);
		for (let t = 0; t < c; t++) {
			let n = t * 4, r = e[n], i = e[n + 1], c = e[n + 2], l = Math.round(e[n + 3]);
			(t === 0 || r < a[0]) && (a[0] = r), (t === 0 || r > o[0]) && (o[0] = r), (t === 0 || i < a[1]) && (a[1] = i), (t === 0 || i > o[1]) && (o[1] = i), (t === 0 || c < a[2]) && (a[2] = c), (t === 0 || c > o[2]) && (o[2] = c), s.push(l);
		}
		let l = new r(t, n);
		return l.sceneMin = a, l.sceneMax = o, l.rootNode = new i(l.sceneMin, l.sceneMax, 0), l.rootNode.data = { indexes: s }, l;
	};
	function o(t, n, r) {
		let i = [];
		for (let e of t) {
			let t = Math.floor(e.length / 4);
			for (let n = 0; n < t; n++) {
				let t = n * 4, r = Math.round(e[t + 3]);
				i[r] = t;
			}
		}
		let o = [];
		for (let e of t) {
			let t = a(e, n, r);
			o.push(t), processSplatTreeNode(t, t.rootNode, i, e);
		}
		e.postMessage({ subTrees: o });
	}
	e.onmessage = (e) => {
		e.data.process && o(e.data.process.centers, e.data.process.maxDepth, e.data.process.maxCentersPerNode);
	};
}
function Wd(e, t, n, r, i) {
	e.postMessage({ process: {
		centers: t,
		maxDepth: r,
		maxCentersPerNode: i
	} }, n);
}
function Gd() {
	return new Worker(URL.createObjectURL(new Blob([
		"(",
		Ud.toString(),
		")(self)"
	], { type: "application/javascript" })));
}
var Kd = class {
	constructor(e, t) {
		this.maxDepth = e, this.maxCentersPerNode = t, this.subTrees = [], this.splatMesh = null;
	}
	dispose() {
		this.diposeSplatTreeWorker(), this.disposed = !0;
	}
	diposeSplatTreeWorker() {
		this.splatTreeWorker && this.splatTreeWorker.terminate(), this.splatTreeWorker = null;
	}
	processSplatMesh = function(e, t = () => !0, n, r) {
		this.splatTreeWorker ||= Gd(), this.splatMesh = e, this.subTrees = [];
		let i = new K(), a = (n, r) => {
			let a = new Float32Array(r * 4), o = 0;
			for (let s = 0; s < r; s++) {
				let r = s + n;
				if (t(r)) {
					e.getSplatCenter(r, i);
					let t = o * 4;
					a[t] = i.x, a[t + 1] = i.y, a[t + 2] = i.z, a[t + 3] = r, o++;
				}
			}
			return a;
		};
		return new Promise((t) => {
			let i = () => this.disposed ? (this.diposeSplatTreeWorker(), t(), !0) : !1;
			n && n(!1), Zc(() => {
				if (i()) return;
				let o = [];
				if (e.dynamicMode) {
					let t = 0;
					for (let n = 0; n < e.scenes.length; n++) {
						let r = e.getScene(n).splatBuffer.getSplatCount(), i = a(t, r);
						o.push(i), t += r;
					}
				} else {
					let t = a(0, e.getSplatCount());
					o.push(t);
				}
				this.splatTreeWorker.onmessage = (n) => {
					i() || n.data.subTrees && (r && r(!1), Zc(() => {
						if (!i()) {
							for (let t of n.data.subTrees) {
								let n = Hd.convertWorkerSubTree(t, e);
								this.subTrees.push(n);
							}
							this.diposeSplatTreeWorker(), r && r(!0), Zc(() => {
								t();
							});
						}
					}));
				}, Zc(() => {
					if (i()) return;
					n && n(!0);
					let e = o.map((e) => e.buffer);
					Wd(this.splatTreeWorker, o, e, this.maxDepth, this.maxCentersPerNode);
				});
			});
		});
	};
	countLeaves() {
		let e = 0;
		return this.visitLeaves(() => {
			e++;
		}), e;
	}
	visitLeaves(e) {
		let t = (e, n) => {
			e.children.length === 0 && n(e);
			for (let r of e.children) t(r, n);
		};
		for (let n of this.subTrees) t(n.rootNode, e);
	}
};
function qd(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r;
		switch (n) {
			case "WEBGL_depth_texture":
				r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
				break;
			case "EXT_texture_filter_anisotropic":
				r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				break;
			case "WEBGL_compressed_texture_s3tc":
				r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
				break;
			case "WEBGL_compressed_texture_pvrtc":
				r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
				break;
			default: r = e.getExtension(n);
		}
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function(e) {
			e.isWebGL2 ? (n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance")) : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
		},
		get: function(e) {
			let t = n(e);
			return t === null && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function Jd(e, t, n) {
	let r;
	function i() {
		if (r !== void 0) return r;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else r = 0;
		return r;
	}
	function a(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let o = typeof WebGL2RenderingContext < "u" && e.constructor.name === "WebGL2RenderingContext", s = n.precision === void 0 ? "highp" : n.precision, c = a(s);
	c !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", c, "instead."), s = c);
	let l = o || t.has("WEBGL_draw_buffers"), u = n.logarithmicDepthBuffer === !0, d = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), f = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = e.getParameter(e.MAX_TEXTURE_SIZE), m = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), h = e.getParameter(e.MAX_VERTEX_ATTRIBS), g = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), _ = e.getParameter(e.MAX_VARYING_VECTORS), v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), y = f > 0, b = o || t.has("OES_texture_float"), x = y && b, S = o ? e.getParameter(e.MAX_SAMPLES) : 0;
	return {
		isWebGL2: o,
		drawBuffers: l,
		getMaxAnisotropy: i,
		getMaxPrecision: a,
		precision: s,
		logarithmicDepthBuffer: u,
		maxTextures: d,
		maxVertexTextures: f,
		maxTextureSize: p,
		maxCubemapSize: m,
		maxAttributes: h,
		maxVertexUniforms: g,
		maxVaryings: _,
		maxFragmentUniforms: v,
		vertexTextures: y,
		floatFragmentTextures: b,
		floatVertexTextures: x,
		maxSamples: S
	};
}
var Yd = {
	Default: 0,
	Gradual: 1,
	Instant: 2
}, Xd = {
	None: 0,
	Error: 1,
	Warning: 2,
	Info: 3,
	Debug: 4
}, Zd = new Mr(), Qd = new Ur(), $d = 6, ef = 4, tf = 4, nf = 4, rf = 6, af = 8, of = 4, sf = 4, cf = 1, lf = .012, uf = .003, df = 1, ff = 16777216, pf = class e extends ti {
	constructor(e = Pd.ThreeD, t = !1, n = !1, r = !1, i = 1, a = !0, o = !1, s = !1, c = 1024, l = Xd.None, u = 0, d = 1, f = .3) {
		super(Zd, Qd), this.renderer = void 0, this.splatRenderMode = e, this.dynamicMode = t, this.enableOptionalEffects = n, this.halfPrecisionCovariancesOnGPU = r, this.devicePixelRatio = i, this.enableDistancesComputationOnGPU = a, this.integerBasedDistancesComputation = o, this.antialiased = s, this.kernel2DSize = f, this.maxScreenSpaceSplatSize = c, this.logLevel = l, this.sphericalHarmonicsDegree = u, this.minSphericalHarmonicsDegree = 0, this.sceneFadeInRateMultiplier = d, this.scenes = [], this.splatTree = null, this.baseSplatTree = null, this.splatDataTextures = {}, this.distancesTransformFeedback = {
			id: null,
			vertexShader: null,
			fragmentShader: null,
			program: null,
			centersBuffer: null,
			sceneIndexesBuffer: null,
			outDistancesBuffer: null,
			centersLoc: -1,
			modelViewProjLoc: -1,
			sceneIndexesLoc: -1,
			transformsLocs: []
		}, this.globalSplatIndexToLocalSplatIndexMap = [], this.globalSplatIndexToSceneIndexMap = [], this.lastBuildSplatCount = 0, this.lastBuildScenes = [], this.lastBuildMaxSplatCount = 0, this.lastBuildSceneCount = 0, this.firstRenderTime = -1, this.finalBuild = !1, this.webGLUtils = null, this.boundingBox = new Jn(), this.calculatedSceneCenter = new K(), this.maxSplatDistanceFromSceneCenter = 0, this.visibleRegionBufferRadius = 0, this.visibleRegionRadius = 0, this.visibleRegionFadeStartRadius = 0, this.visibleRegionChanging = !1, this.splatScale = 1, this.pointCloudModeEnabled = !1, this.disposed = !1, this.lastRenderer = null, this.visible = !1;
	}
	static buildScenes(t, n, r) {
		let i = [];
		i.length = n.length;
		for (let a = 0; a < n.length; a++) {
			let o = n[a], s = r[a] || {}, c = s.position || [
				0,
				0,
				0
			], l = s.rotation || [
				0,
				0,
				0,
				1
			], u = s.scale || [
				1,
				1,
				1
			], d = new K().fromArray(c), f = new Ot().fromArray(l), p = new K().fromArray(u), m = e.createScene(o, d, f, p, s.splatAlphaRemovalThreshold || 1, s.opacity, s.visible);
			t.add(m), i[a] = m;
		}
		return i;
	}
	static createScene(e, t, n, r, i, a = 1, o = !0) {
		return new Bd(e, t, n, r, i, a, o);
	}
	static buildSplatIndexMaps(e) {
		let t = [], n = [], r = 0;
		for (let i = 0; i < e.length; i++) {
			let a = e[i].getMaxSplatCount();
			for (let e = 0; e < a; e++) t[r] = e, n[r] = i, r++;
		}
		return {
			localSplatIndexMap: t,
			sceneIndexMap: n
		};
	}
	buildSplatTree = function(e = [], t, n) {
		return new Promise((r) => {
			this.disposeSplatTree(), this.baseSplatTree = new Kd(8, 1e3);
			let i = performance.now(), a = new Gt();
			this.baseSplatTree.processSplatMesh(this, (t) => {
				this.getSplatColor(t, a);
				let n = e[this.getSceneIndexForSplat(t)] || 1;
				return a.w >= n;
			}, t, n).then(() => {
				let e = performance.now() - i;
				if (this.logLevel >= Xd.Info && console.log("SplatTree build: " + e + " ms"), this.disposed) r();
				else {
					this.splatTree = this.baseSplatTree, this.baseSplatTree = null;
					let e = 0, t = 0, n = 0, i = 0;
					this.splatTree.visitLeaves((r) => {
						let a = r.data.indexes.length;
						a > 0 && (t += a, n = Math.max(n, a), i++, e++);
					}), this.logLevel >= Xd.Info && (console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`), console.log(`SplatTree leaves with splats:${e}`), t /= i, console.log(`Avg splat count per node: ${t}`), console.log(`Total splat count: ${this.getSplatCount()}`)), r();
				}
			});
		});
	};
	build(t, n, r = !0, i = !1, a, o, s = !0) {
		this.sceneOptions = n, this.finalBuild = i;
		let c = e.getTotalMaxSplatCountForSplatBuffers(t), l = e.buildScenes(this, t, n);
		if (r) for (let e = 0; e < this.scenes.length && e < l.length; e++) {
			let t = l[e], n = this.getScene(e);
			t.copyTransformData(n);
		}
		this.scenes = l;
		let u = 3;
		for (let e of t) {
			let t = e.getMinSphericalHarmonicsDegree();
			t < u && (u = t);
		}
		this.minSphericalHarmonicsDegree = Math.min(u, this.sphericalHarmonicsDegree);
		let d = !1;
		if (t.length !== this.lastBuildScenes.length) d = !0;
		else for (let e = 0; e < t.length; e++) if (t[e] !== this.lastBuildScenes[e].splatBuffer) {
			d = !0;
			break;
		}
		let f = !0;
		if ((this.scenes.length !== 1 || this.lastBuildSceneCount !== this.scenes.length || this.lastBuildMaxSplatCount !== c || d) && (f = !1), !f) {
			this.boundingBox = new Jn(), s || (this.maxSplatDistanceFromSceneCenter = 0, this.visibleRegionBufferRadius = 0, this.visibleRegionRadius = 0, this.visibleRegionFadeStartRadius = 0, this.firstRenderTime = -1), this.lastBuildScenes = [], this.lastBuildSplatCount = 0, this.lastBuildMaxSplatCount = 0, this.disposeMeshData(), this.geometry = zd.build(c), this.splatRenderMode === Pd.ThreeD ? this.material = Ld.build(this.dynamicMode, this.enableOptionalEffects, this.antialiased, this.maxScreenSpaceSplatSize, this.splatScale, this.pointCloudModeEnabled, this.minSphericalHarmonicsDegree, this.kernel2DSize) : this.material = Rd.build(this.dynamicMode, this.enableOptionalEffects, this.splatScale, this.pointCloudModeEnabled, this.minSphericalHarmonicsDegree);
			let n = e.buildSplatIndexMaps(t);
			this.globalSplatIndexToLocalSplatIndexMap = n.localSplatIndexMap, this.globalSplatIndexToSceneIndexMap = n.sceneIndexMap;
		}
		let p = this.getSplatCount(!0);
		this.enableDistancesComputationOnGPU && this.setupDistancesComputationTransformFeedback();
		let m = this.refreshGPUDataFromSplatBuffers(f);
		for (let e = 0; e < this.scenes.length; e++) this.lastBuildScenes[e] = this.scenes[e];
		return this.lastBuildSplatCount = p, this.lastBuildMaxSplatCount = this.getMaxSplatCount(), this.lastBuildSceneCount = this.scenes.length, i && this.scenes.length > 0 && this.buildSplatTree(n.map((e) => e.splatAlphaRemovalThreshold || 1), a, o).then(() => {
			this.onSplatTreeReadyCallback && this.onSplatTreeReadyCallback(this.splatTree), this.onSplatTreeReadyCallback = null;
		}), this.visible = this.scenes.length > 0, m;
	}
	freeIntermediateSplatData() {
		let e = (e) => {
			delete e.source.data, delete e.image, e.onUpdate = null;
		};
		delete this.splatDataTextures.baseData.covariances, delete this.splatDataTextures.baseData.centers, delete this.splatDataTextures.baseData.colors, delete this.splatDataTextures.baseData.sphericalHarmonics, delete this.splatDataTextures.centerColors.data, delete this.splatDataTextures.covariances.data, this.splatDataTextures.sphericalHarmonics && delete this.splatDataTextures.sphericalHarmonics.data, this.splatDataTextures.sceneIndexes && delete this.splatDataTextures.sceneIndexes.data, this.splatDataTextures.centerColors.texture.needsUpdate = !0, this.splatDataTextures.centerColors.texture.onUpdate = () => {
			e(this.splatDataTextures.centerColors.texture);
		}, this.splatDataTextures.covariances.texture.needsUpdate = !0, this.splatDataTextures.covariances.texture.onUpdate = () => {
			e(this.splatDataTextures.covariances.texture);
		}, this.splatDataTextures.sphericalHarmonics && (this.splatDataTextures.sphericalHarmonics.texture ? (this.splatDataTextures.sphericalHarmonics.texture.needsUpdate = !0, this.splatDataTextures.sphericalHarmonics.texture.onUpdate = () => {
			e(this.splatDataTextures.sphericalHarmonics.texture);
		}) : this.splatDataTextures.sphericalHarmonics.textures.forEach((t) => {
			t.needsUpdate = !0, t.onUpdate = () => {
				e(t);
			};
		})), this.splatDataTextures.sceneIndexes && (this.splatDataTextures.sceneIndexes.texture.needsUpdate = !0, this.splatDataTextures.sceneIndexes.texture.onUpdate = () => {
			e(this.splatDataTextures.sceneIndexes.texture);
		});
	}
	dispose() {
		this.disposeMeshData(), this.disposeTextures(), this.disposeSplatTree(), this.enableDistancesComputationOnGPU && (this.computeDistancesOnGPUSyncTimeout &&= (clearTimeout(this.computeDistancesOnGPUSyncTimeout), null), this.disposeDistancesComputationGPUResources()), this.scenes = [], this.distancesTransformFeedback = {
			id: null,
			vertexShader: null,
			fragmentShader: null,
			program: null,
			centersBuffer: null,
			sceneIndexesBuffer: null,
			outDistancesBuffer: null,
			centersLoc: -1,
			modelViewProjLoc: -1,
			sceneIndexesLoc: -1,
			transformsLocs: []
		}, this.renderer = null, this.globalSplatIndexToLocalSplatIndexMap = [], this.globalSplatIndexToSceneIndexMap = [], this.lastBuildSplatCount = 0, this.lastBuildScenes = [], this.lastBuildMaxSplatCount = 0, this.lastBuildSceneCount = 0, this.firstRenderTime = -1, this.finalBuild = !1, this.webGLUtils = null, this.boundingBox = new Jn(), this.calculatedSceneCenter = new K(), this.maxSplatDistanceFromSceneCenter = 0, this.visibleRegionBufferRadius = 0, this.visibleRegionRadius = 0, this.visibleRegionFadeStartRadius = 0, this.visibleRegionChanging = !1, this.splatScale = 1, this.pointCloudModeEnabled = !1, this.disposed = !0, this.lastRenderer = null, this.visible = !1;
	}
	disposeMeshData() {
		this.geometry && this.geometry !== Zd && (this.geometry.dispose(), this.geometry = null), this.material &&= (this.material.dispose(), null);
	}
	disposeTextures() {
		for (let e in this.splatDataTextures) if (this.splatDataTextures.hasOwnProperty(e)) {
			let t = this.splatDataTextures[e];
			t.texture &&= (t.texture.dispose(), null);
		}
		this.splatDataTextures = null;
	}
	disposeSplatTree() {
		this.splatTree &&= (this.splatTree.dispose(), null), this.baseSplatTree &&= (this.baseSplatTree.dispose(), null);
	}
	getSplatTree() {
		return this.splatTree;
	}
	onSplatTreeReady(e) {
		this.onSplatTreeReadyCallback = e;
	}
	getDataForDistancesComputation(e, t) {
		return {
			centers: this.integerBasedDistancesComputation ? this.getIntegerCenters(e, t, !0) : this.getFloatCenters(e, t, !0),
			sceneIndexes: this.getSceneIndexes(e, t)
		};
	}
	refreshGPUDataFromSplatBuffers(e) {
		let t = this.getSplatCount(!0);
		this.refreshDataTexturesFromSplatBuffers(e);
		let n = e ? this.lastBuildSplatCount : 0, { centers: r, sceneIndexes: i } = this.getDataForDistancesComputation(n, t - 1);
		return this.enableDistancesComputationOnGPU && this.refreshGPUBuffersForDistancesComputation(r, i, e), {
			from: n,
			to: t - 1,
			count: t - n,
			centers: r,
			sceneIndexes: i
		};
	}
	refreshGPUBuffersForDistancesComputation(e, t, n = !1) {
		let r = n ? this.lastBuildSplatCount : 0;
		this.updateGPUCentersBufferForDistancesComputation(n, e, r), this.updateGPUTransformIndexesBufferForDistancesComputation(n, t, r);
	}
	refreshDataTexturesFromSplatBuffers(e) {
		let t = this.getSplatCount(!0), n = this.lastBuildSplatCount, r = t - 1;
		e ? this.updateBaseDataFromSplatBuffers(n, r) : (this.setupDataTextures(), this.updateBaseDataFromSplatBuffers()), this.updateDataTexturesFromBaseData(n, r), this.updateVisibleRegion(e);
	}
	setupDataTextures() {
		let t = this.getMaxSplatCount(), n = this.getSplatCount(!0);
		this.disposeTextures();
		let r = (e, n) => {
			let r = new G(4096, 1024);
			for (; r.x * r.y * e < t * n;) r.y *= 2;
			return r;
		}, i = (e) => e >= 1 ? rf : tf, a = (e) => {
			let t = i(e);
			return {
				elementsPerTexelStored: t,
				texSize: r(t, 6)
			};
		}, o = this.getTargetCovarianceCompressionLevel(), s = this.getTargetSphericalHarmonicsCompressionLevel(), c, l, u;
		if (this.splatRenderMode === Pd.ThreeD) {
			let e = a(o);
			e.texSize.x * e.texSize.y > ff && o === 0 && (o = 1), c = new Float32Array(t * $d);
		} else l = new Float32Array(t * 3), u = new Float32Array(t * 4);
		let f = new Float32Array(t * 3), p = new Uint8Array(t * 4), m = Float32Array;
		s === 1 ? m = Uint16Array : s === 2 && (m = Uint8Array);
		let h = Qc(this.minSphericalHarmonicsDegree), y = this.minSphericalHarmonicsDegree ? new m(t * h) : void 0, b = r(sf, 4), x = new Uint32Array(b.x * b.y * sf);
		e.updateCenterColorsPaddedData(0, n - 1, f, p, x);
		let S = new ii(x, b.x, b.y, N, g);
		if (S.internalFormat = "RGBA32UI", S.needsUpdate = !0, this.material.uniforms.centersColorsTexture.value = S, this.material.uniforms.centersColorsTextureSize.value.copy(b), this.material.uniformsNeedUpdate = !0, this.splatDataTextures = {
			baseData: {
				covariances: c,
				scales: l,
				rotations: u,
				centers: f,
				colors: p,
				sphericalHarmonics: y
			},
			centerColors: {
				data: x,
				texture: S,
				size: b
			}
		}, this.splatRenderMode === Pd.ThreeD) {
			let t = a(o), n = t.elementsPerTexelStored, r = t.texSize, i = o >= 1 ? Uint32Array : Float32Array, s = o >= 1 ? af : nf, l = new i(r.x * r.y * s);
			o === 0 ? l.set(c) : e.updatePaddedCompressedCovariancesTextureData(c, l, 0, 0, c.length);
			let u;
			if (o >= 1) u = new ii(l, r.x, r.y, N, g), u.internalFormat = "RGBA32UI", this.material.uniforms.covariancesTextureHalfFloat.value = u;
			else {
				u = new ii(l, r.x, r.y, E, _), this.material.uniforms.covariancesTexture.value = u;
				let e = new ii(new Uint32Array(32), 2, 2, N, g);
				e.internalFormat = "RGBA32UI", this.material.uniforms.covariancesTextureHalfFloat.value = e, e.needsUpdate = !0;
			}
			u.needsUpdate = !0, this.material.uniforms.covariancesAreHalfFloat.value = +(o >= 1), this.material.uniforms.covariancesTextureSize.value.copy(r), this.splatDataTextures.covariances = {
				data: l,
				texture: u,
				size: r,
				compressionLevel: o,
				elementsPerTexelStored: n,
				elementsPerTexelAllocated: s
			};
		} else {
			let t = r(of, 6), i = Float32Array, a = _, o = new i(t.x * t.y * of);
			e.updateScaleRotationsPaddedData(0, n - 1, l, u, o);
			let s = new ii(o, t.x, t.y, E, a);
			s.needsUpdate = !0, this.material.uniforms.scaleRotationsTexture.value = s, this.material.uniforms.scaleRotationsTextureSize.value.copy(t), this.splatDataTextures.scaleRotations = {
				data: o,
				texture: s,
				size: t,
				compressionLevel: 0
			};
		}
		if (y) {
			let e = s === 2 ? d : v, t = h;
			t % 2 != 0 && t++;
			let i = E, a = r(4, t);
			if (a.x * a.y <= ff) {
				let r = a.x * a.y * 4, o = new m(r);
				for (let e = 0; e < n; e++) {
					let n = h * e, r = t * e;
					for (let e = 0; e < h; e++) o[r + e] = y[n + e];
				}
				let c = new ii(o, a.x, a.y, i, e);
				c.needsUpdate = !0, this.material.uniforms.sphericalHarmonicsTexture.value = c, this.splatDataTextures.sphericalHarmonics = {
					componentCount: h,
					paddedComponentCount: t,
					data: o,
					textureCount: 1,
					texture: c,
					size: a,
					compressionLevel: s,
					elementsPerTexel: 4
				};
			} else {
				let o = h / 3;
				t = o, t % 2 != 0 && t++, a = r(4, t);
				let c = a.x * a.y * 4, l = [
					this.material.uniforms.sphericalHarmonicsTextureR,
					this.material.uniforms.sphericalHarmonicsTextureG,
					this.material.uniforms.sphericalHarmonicsTextureB
				], u = [], d = [];
				for (let r = 0; r < 3; r++) {
					let s = new m(c);
					u.push(s);
					for (let e = 0; e < n; e++) {
						let n = h * e, i = t * e;
						if (o >= 3) {
							for (let e = 0; e < 3; e++) s[i + e] = y[n + r * 3 + e];
							if (o >= 8) for (let e = 0; e < 5; e++) s[i + 3 + e] = y[n + 9 + r * 5 + e];
						}
					}
					let f = new ii(s, a.x, a.y, i, e);
					d.push(f), f.needsUpdate = !0, l[r].value = f;
				}
				this.material.uniforms.sphericalHarmonicsMultiTextureMode.value = 1, this.splatDataTextures.sphericalHarmonics = {
					componentCount: h,
					componentCountPerChannel: o,
					paddedComponentCount: t,
					data: u,
					textureCount: 3,
					textures: d,
					size: a,
					compressionLevel: s,
					elementsPerTexel: 4
				};
			}
			this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(a), this.material.uniforms.sphericalHarmonics8BitMode.value = +(s === 2);
			for (let e = 0; e < this.scenes.length; e++) {
				let t = this.scenes[e].splatBuffer;
				this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[e] = t.minSphericalHarmonicsCoeff, this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[e] = t.maxSphericalHarmonicsCoeff;
			}
			this.material.uniformsNeedUpdate = !0;
		}
		let C = r(cf, 4), w = new Uint32Array(C.x * C.y * cf);
		for (let e = 0; e < n; e++) w[e] = this.globalSplatIndexToSceneIndexMap[e];
		let T = new ii(w, C.x, C.y, A, g);
		T.internalFormat = "R32UI", T.needsUpdate = !0, this.material.uniforms.sceneIndexesTexture.value = T, this.material.uniforms.sceneIndexesTextureSize.value.copy(C), this.material.uniformsNeedUpdate = !0, this.splatDataTextures.sceneIndexes = {
			data: w,
			texture: T,
			size: C
		}, this.material.uniforms.sceneCount.value = this.scenes.length;
	}
	updateBaseDataFromSplatBuffers(e, t) {
		let n = this.splatDataTextures.covariances, r = n ? n.compressionLevel : void 0, i = this.splatDataTextures.scaleRotations, a = i ? i.compressionLevel : void 0, o = this.splatDataTextures.sphericalHarmonics, s = o ? o.compressionLevel : 0;
		this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances, this.splatDataTextures.baseData.scales, this.splatDataTextures.baseData.rotations, this.splatDataTextures.baseData.centers, this.splatDataTextures.baseData.colors, this.splatDataTextures.baseData.sphericalHarmonics, void 0, r, a, s, e, t, e);
	}
	updateDataTexturesFromBaseData(t, n) {
		let r = this.splatDataTextures.covariances, i = r ? r.compressionLevel : void 0, a = this.splatDataTextures.scaleRotations, o = a ? a.compressionLevel : void 0, s = this.splatDataTextures.sphericalHarmonics, c = s ? s.compressionLevel : 0, l = this.splatDataTextures.centerColors, u = l.data, d = l.texture;
		e.updateCenterColorsPaddedData(t, n, this.splatDataTextures.baseData.centers, this.splatDataTextures.baseData.colors, u);
		let f = this.renderer ? this.renderer.properties.get(d) : null;
		if (!f || !f.__webglTexture ? d.needsUpdate = !0 : this.updateDataTexture(u, l.texture, l.size, f, sf, ef, 4, t, n), r) {
			let a = r.texture, o = t * $d, s = n * $d;
			if (i === 0) for (let e = o; e <= s; e++) {
				let t = this.splatDataTextures.baseData.covariances[e];
				r.data[e] = t;
			}
			else e.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances, r.data, t * r.elementsPerTexelAllocated, o, s);
			let c = this.renderer ? this.renderer.properties.get(a) : null;
			!c || !c.__webglTexture ? a.needsUpdate = !0 : i === 0 ? this.updateDataTexture(r.data, r.texture, r.size, c, r.elementsPerTexelStored, $d, 4, t, n) : this.updateDataTexture(r.data, r.texture, r.size, c, r.elementsPerTexelAllocated, r.elementsPerTexelAllocated, 2, t, n);
		}
		if (a) {
			let r = a.data, i = a.texture, s = o === 0 ? 4 : 2;
			e.updateScaleRotationsPaddedData(t, n, this.splatDataTextures.baseData.scales, this.splatDataTextures.baseData.rotations, r);
			let c = this.renderer ? this.renderer.properties.get(i) : null;
			!c || !c.__webglTexture ? i.needsUpdate = !0 : this.updateDataTexture(r, a.texture, a.size, c, of, 6, s, t, n);
		}
		let p = this.splatDataTextures.baseData.sphericalHarmonics;
		if (p) {
			let e = 4;
			c === 1 ? e = 2 : c === 2 && (e = 1);
			let r = (r, i, a, o, s) => {
				let c = this.renderer ? this.renderer.properties.get(r) : null;
				!c || !c.__webglTexture ? r.needsUpdate = !0 : this.updateDataTexture(o, r, i, c, a, s, e, t, n);
			}, i = s.componentCount, a = s.paddedComponentCount;
			if (s.textureCount === 1) {
				let e = s.data;
				for (let r = t; r <= n; r++) {
					let t = i * r, n = a * r;
					for (let r = 0; r < i; r++) e[n + r] = p[t + r];
				}
				r(s.texture, s.size, s.elementsPerTexel, e, a);
			} else {
				let e = s.componentCountPerChannel;
				for (let o = 0; o < 3; o++) {
					let c = s.data[o];
					for (let r = t; r <= n; r++) {
						let t = i * r, n = a * r;
						if (e >= 3) {
							for (let e = 0; e < 3; e++) c[n + e] = p[t + o * 3 + e];
							if (e >= 8) for (let e = 0; e < 5; e++) c[n + 3 + e] = p[t + 9 + o * 5 + e];
						}
					}
					r(s.textures[o], s.size, s.elementsPerTexel, c, a);
				}
			}
		}
		let m = this.splatDataTextures.sceneIndexes, h = m.data;
		for (let e = this.lastBuildSplatCount; e <= n; e++) h[e] = this.globalSplatIndexToSceneIndexMap[e];
		let g = m.texture, _ = this.renderer ? this.renderer.properties.get(g) : null;
		!_ || !_.__webglTexture ? g.needsUpdate = !0 : this.updateDataTexture(h, m.texture, m.size, _, 1, 1, 1, this.lastBuildSplatCount, n);
	}
	getTargetCovarianceCompressionLevel() {
		return +!!this.halfPrecisionCovariancesOnGPU;
	}
	getTargetSphericalHarmonicsCompressionLevel() {
		return Math.max(1, this.getMaximumSplatBufferCompressionLevel());
	}
	getMaximumSplatBufferCompressionLevel() {
		let e;
		for (let t = 0; t < this.scenes.length; t++) {
			let n = this.getScene(t).splatBuffer;
			(t === 0 || n.compressionLevel > e) && (e = n.compressionLevel);
		}
		return e;
	}
	getMinimumSplatBufferCompressionLevel() {
		let e;
		for (let t = 0; t < this.scenes.length; t++) {
			let n = this.getScene(t).splatBuffer;
			(t === 0 || n.compressionLevel < e) && (e = n.compressionLevel);
		}
		return e;
	}
	static computeTextureUpdateRegion(e, t, n, r, i) {
		let a = i / r, o = e * a, s = Math.floor(o / n), c = s * n * r, l = t * a, u = Math.floor(l / n);
		return {
			dataStart: c,
			dataEnd: u * n * r + n * r,
			startRow: s,
			endRow: u
		};
	}
	updateDataTexture(t, n, r, i, a, o, s, c, l) {
		let u = this.renderer.getContext(), d = e.computeTextureUpdateRegion(c, l, r.x, a, o), f = d.dataEnd - d.dataStart, p = new t.constructor(t.buffer, d.dataStart * s, f), m = d.endRow - d.startRow + 1, h = this.webGLUtils.convert(n.type), g = this.webGLUtils.convert(n.format, n.colorSpace), _ = u.getParameter(u.TEXTURE_BINDING_2D);
		u.bindTexture(u.TEXTURE_2D, i.__webglTexture), u.texSubImage2D(u.TEXTURE_2D, 0, 0, d.startRow, r.x, m, g, h, p), u.bindTexture(u.TEXTURE_2D, _);
	}
	static updatePaddedCompressedCovariancesTextureData(e, t, n, r, i) {
		let a = new DataView(t.buffer), o = n, s = 0;
		for (let t = r; t <= i; t += 2) a.setUint16(o * 2, e[t], !0), a.setUint16(o * 2 + 2, e[t + 1], !0), o += 2, s++, s >= 3 && (o += 2, s = 0);
	}
	static updateCenterColorsPaddedData(e, t, n, r, i) {
		for (let a = e; a <= t; a++) {
			let e = a * 4, t = a * 3, o = a * 4;
			i[o] = Kc(r, e), i[o + 1] = Gc(n[t]), i[o + 2] = Gc(n[t + 1]), i[o + 3] = Gc(n[t + 2]);
		}
	}
	static updateScaleRotationsPaddedData(e, t, n, r, i) {
		for (let a = e; a <= t; a++) {
			let e = a * 3, t = a * 4, o = a * 6;
			i[o] = n[e], i[o + 1] = n[e + 1], i[o + 2] = n[e + 2], i[o + 3] = r[t], i[o + 4] = r[t + 1], i[o + 5] = r[t + 2];
		}
	}
	updateVisibleRegion(e) {
		let t = this.getSplatCount(!0), n = new K();
		if (!e) {
			let e = new K();
			this.scenes.forEach((t) => {
				e.add(t.splatBuffer.sceneCenter);
			}), e.multiplyScalar(1 / this.scenes.length), this.calculatedSceneCenter.copy(e), this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter), this.material.uniformsNeedUpdate = !0;
		}
		let r = e ? this.lastBuildSplatCount : 0;
		for (let e = r; e < t; e++) {
			this.getSplatCenter(e, n, !0);
			let t = n.sub(this.calculatedSceneCenter).length();
			t > this.maxSplatDistanceFromSceneCenter && (this.maxSplatDistanceFromSceneCenter = t);
		}
		this.maxSplatDistanceFromSceneCenter - this.visibleRegionBufferRadius > df && (this.visibleRegionBufferRadius = this.maxSplatDistanceFromSceneCenter, this.visibleRegionRadius = Math.max(this.visibleRegionBufferRadius - df, 0)), this.finalBuild && (this.visibleRegionRadius = this.visibleRegionBufferRadius = this.maxSplatDistanceFromSceneCenter), this.updateVisibleRegionFadeDistance();
	}
	updateVisibleRegionFadeDistance(e = Yd.Default) {
		let t = lf * this.sceneFadeInRateMultiplier, n = uf * this.sceneFadeInRateMultiplier, r = this.finalBuild ? t : n, i = e === Yd.Default ? r : n;
		this.visibleRegionFadeStartRadius = (this.visibleRegionRadius - this.visibleRegionFadeStartRadius) * i + this.visibleRegionFadeStartRadius;
		let a = (this.visibleRegionBufferRadius > 0 ? this.visibleRegionFadeStartRadius / this.visibleRegionBufferRadius : 0) > .99, o = a || e === Yd.Instant ? 1 : 0;
		this.material.uniforms.visibleRegionFadeStartRadius.value = this.visibleRegionFadeStartRadius, this.material.uniforms.visibleRegionRadius.value = this.visibleRegionRadius, this.material.uniforms.firstRenderTime.value = this.firstRenderTime, this.material.uniforms.currentTime.value = performance.now(), this.material.uniforms.fadeInComplete.value = o, this.material.uniformsNeedUpdate = !0, this.visibleRegionChanging = !a;
	}
	updateRenderIndexes(e, t) {
		let n = this.geometry;
		n.attributes.splatIndex.set(e), n.attributes.splatIndex.needsUpdate = !0, t > 0 && this.firstRenderTime === -1 && (this.firstRenderTime = performance.now()), n.instanceCount = t, n.setDrawRange(0, t);
	}
	updateTransforms() {
		for (let e = 0; e < this.scenes.length; e++) this.getScene(e).updateTransform(this.dynamicMode);
	}
	updateUniforms = function() {
		let e = new G();
		return function(t, n, r, i, a, o) {
			if (this.getSplatCount() > 0) {
				if (e.set(t.x * this.devicePixelRatio, t.y * this.devicePixelRatio), this.material.uniforms.viewport.value.copy(e), this.material.uniforms.basisViewport.value.set(1 / e.x, 1 / e.y), this.material.uniforms.focal.value.set(n, r), this.material.uniforms.orthographicMode.value = +!!i, this.material.uniforms.orthoZoom.value = a, this.material.uniforms.inverseFocalAdjustment.value = o, this.dynamicMode) for (let e = 0; e < this.scenes.length; e++) this.material.uniforms.transforms.value[e].copy(this.getScene(e).transform);
				if (this.enableOptionalEffects) for (let e = 0; e < this.scenes.length; e++) this.material.uniforms.sceneOpacity.value[e] = Jc(this.getScene(e).opacity, 0, 1), this.material.uniforms.sceneVisibility.value[e] = +!!this.getScene(e).visible, this.material.uniformsNeedUpdate = !0;
				this.material.uniformsNeedUpdate = !0;
			}
		};
	}();
	setSplatScale(e = 1) {
		this.splatScale = e, this.material.uniforms.splatScale.value = e, this.material.uniformsNeedUpdate = !0;
	}
	getSplatScale() {
		return this.splatScale;
	}
	setPointCloudModeEnabled(e) {
		this.pointCloudModeEnabled = e, this.material.uniforms.pointCloudModeEnabled.value = +!!e, this.material.uniformsNeedUpdate = !0;
	}
	getPointCloudModeEnabled() {
		return this.pointCloudModeEnabled;
	}
	getSplatDataTextures() {
		return this.splatDataTextures;
	}
	getSplatCount(t = !1) {
		return t ? e.getTotalSplatCountForScenes(this.scenes) : this.lastBuildSplatCount;
	}
	static getTotalSplatCountForScenes(e) {
		let t = 0;
		for (let n of e) n && n.splatBuffer && (t += n.splatBuffer.getSplatCount());
		return t;
	}
	static getTotalSplatCountForSplatBuffers(e) {
		let t = 0;
		for (let n of e) t += n.getSplatCount();
		return t;
	}
	getMaxSplatCount() {
		return e.getTotalMaxSplatCountForScenes(this.scenes);
	}
	static getTotalMaxSplatCountForScenes(e) {
		let t = 0;
		for (let n of e) n && n.splatBuffer && (t += n.splatBuffer.getMaxSplatCount());
		return t;
	}
	static getTotalMaxSplatCountForSplatBuffers(e) {
		let t = 0;
		for (let n of e) t += n.getMaxSplatCount();
		return t;
	}
	disposeDistancesComputationGPUResources() {
		if (!this.renderer) return;
		let e = this.renderer.getContext();
		this.distancesTransformFeedback.vao && (e.deleteVertexArray(this.distancesTransformFeedback.vao), this.distancesTransformFeedback.vao = null), this.distancesTransformFeedback.program && (e.deleteProgram(this.distancesTransformFeedback.program), e.deleteShader(this.distancesTransformFeedback.vertexShader), e.deleteShader(this.distancesTransformFeedback.fragmentShader), this.distancesTransformFeedback.program = null, this.distancesTransformFeedback.vertexShader = null, this.distancesTransformFeedback.fragmentShader = null), this.disposeDistancesComputationGPUBufferResources(), this.distancesTransformFeedback.id && (e.deleteTransformFeedback(this.distancesTransformFeedback.id), this.distancesTransformFeedback.id = null);
	}
	disposeDistancesComputationGPUBufferResources() {
		if (!this.renderer) return;
		let e = this.renderer.getContext();
		this.distancesTransformFeedback.centersBuffer && (this.distancesTransformFeedback.centersBuffer = null, e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)), this.distancesTransformFeedback.outDistancesBuffer && (e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer), this.distancesTransformFeedback.outDistancesBuffer = null);
	}
	setRenderer(e) {
		if (e !== this.renderer) {
			this.renderer = e;
			let t = this.renderer.getContext(), n = new qd(t), r = new Jd(t, n, {});
			if (n.init(r), this.webGLUtils = new Ac(t, n, r), this.enableDistancesComputationOnGPU && this.getSplatCount() > 0) {
				this.setupDistancesComputationTransformFeedback();
				let { centers: e, sceneIndexes: t } = this.getDataForDistancesComputation(0, this.getSplatCount() - 1);
				this.refreshGPUBuffersForDistancesComputation(e, t);
			}
		}
	}
	setupDistancesComputationTransformFeedback = function() {
		let e;
		return function() {
			let t = this.getMaxSplatCount();
			if (!this.renderer) return;
			let n = this.lastRenderer !== this.renderer, r = e !== t;
			if (!n && !r) return;
			n ? this.disposeDistancesComputationGPUResources() : r && this.disposeDistancesComputationGPUBufferResources();
			let i = this.renderer.getContext(), a = (e, t, n) => {
				let r = e.createShader(t);
				if (!r) return console.error("Fatal error: gl could not create a shader object."), null;
				if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
					let n = "unknown";
					t === e.VERTEX_SHADER ? n = "vertex shader" : t === e.FRAGMENT_SHADER && (n = "fragement shader");
					let i = e.getShaderInfoLog(r);
					return console.error("Failed to compile " + n + " with these errors:" + i), e.deleteShader(r), null;
				}
				return r;
			}, o;
			this.integerBasedDistancesComputation ? (o = "#version 300 es\n                in ivec4 center;\n                flat out int distance;", this.dynamicMode ? o += `
                        in uint sceneIndex;
                        uniform ivec4 transforms[${al.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    ` : o += "\n                        uniform ivec3 modelViewProj;\n                        void main(void) {\n                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;\n                        }\n                    ") : (o = "#version 300 es\n                in vec4 center;\n                flat out float distance;", this.dynamicMode ? o += `
                        in uint sceneIndex;
                        uniform mat4 transforms[${al.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    ` : o += "\n                        uniform vec3 modelViewProj;\n                        void main(void) {\n                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;\n                        }\n                    ");
			let s = i.getParameter(i.VERTEX_ARRAY_BINDING), c = i.getParameter(i.CURRENT_PROGRAM), l = c ? i.getProgramParameter(c, i.DELETE_STATUS) : !1;
			if (n && (this.distancesTransformFeedback.vao = i.createVertexArray()), i.bindVertexArray(this.distancesTransformFeedback.vao), n) {
				let e = i.createProgram(), t = a(i, i.VERTEX_SHADER, o), n = a(i, i.FRAGMENT_SHADER, "#version 300 es\n                precision lowp float;\n                out vec4 fragColor;\n                void main(){}\n            ");
				if (!t || !n) throw Error("Could not compile shaders for distances computation on GPU.");
				if (i.attachShader(e, t), i.attachShader(e, n), i.transformFeedbackVaryings(e, ["distance"], i.SEPARATE_ATTRIBS), i.linkProgram(e), !i.getProgramParameter(e, i.LINK_STATUS)) {
					let r = i.getProgramInfoLog(e);
					throw console.error("Fatal error: Failed to link program: " + r), i.deleteProgram(e), i.deleteShader(n), i.deleteShader(t), Error("Could not link shaders for distances computation on GPU.");
				}
				this.distancesTransformFeedback.program = e, this.distancesTransformFeedback.vertexShader = t, this.distancesTransformFeedback.vertexShader = n;
			}
			if (i.useProgram(this.distancesTransformFeedback.program), this.distancesTransformFeedback.centersLoc = i.getAttribLocation(this.distancesTransformFeedback.program, "center"), this.dynamicMode) {
				this.distancesTransformFeedback.sceneIndexesLoc = i.getAttribLocation(this.distancesTransformFeedback.program, "sceneIndex");
				for (let e = 0; e < this.scenes.length; e++) this.distancesTransformFeedback.transformsLocs[e] = i.getUniformLocation(this.distancesTransformFeedback.program, `transforms[${e}]`);
			} else this.distancesTransformFeedback.modelViewProjLoc = i.getUniformLocation(this.distancesTransformFeedback.program, "modelViewProj");
			(n || r) && (this.distancesTransformFeedback.centersBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.centersBuffer), i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc), this.integerBasedDistancesComputation ? i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc, 4, i.INT, 0, 0) : i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc, 4, i.FLOAT, !1, 0, 0), this.dynamicMode && (this.distancesTransformFeedback.sceneIndexesBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.sceneIndexesBuffer), i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc), i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc, 1, i.UNSIGNED_INT, 0, 0))), (n || r) && (this.distancesTransformFeedback.outDistancesBuffer = i.createBuffer()), i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.outDistancesBuffer), i.bufferData(i.ARRAY_BUFFER, t * 4, i.STATIC_READ), n && (this.distancesTransformFeedback.id = i.createTransformFeedback()), i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, this.distancesTransformFeedback.id), i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, 0, this.distancesTransformFeedback.outDistancesBuffer), c && l !== !0 && i.useProgram(c), s && i.bindVertexArray(s), this.lastRenderer = this.renderer, e = t;
		};
	}();
	updateGPUCentersBufferForDistancesComputation(e, t, n) {
		if (!this.renderer) return;
		let r = this.renderer.getContext(), i = r.getParameter(r.VERTEX_ARRAY_BINDING);
		r.bindVertexArray(this.distancesTransformFeedback.vao);
		let a = this.integerBasedDistancesComputation ? Uint32Array : Float32Array, o = n * 16;
		if (r.bindBuffer(r.ARRAY_BUFFER, this.distancesTransformFeedback.centersBuffer), e) r.bufferSubData(r.ARRAY_BUFFER, o, t);
		else {
			let e = new a(this.getMaxSplatCount() * 16);
			e.set(t), r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW);
		}
		r.bindBuffer(r.ARRAY_BUFFER, null), i && r.bindVertexArray(i);
	}
	updateGPUTransformIndexesBufferForDistancesComputation(e, t, n) {
		if (!this.renderer || !this.dynamicMode) return;
		let r = this.renderer.getContext(), i = r.getParameter(r.VERTEX_ARRAY_BINDING);
		r.bindVertexArray(this.distancesTransformFeedback.vao);
		let a = n * 4;
		if (r.bindBuffer(r.ARRAY_BUFFER, this.distancesTransformFeedback.sceneIndexesBuffer), e) r.bufferSubData(r.ARRAY_BUFFER, a, t);
		else {
			let e = new Uint32Array(this.getMaxSplatCount() * 4);
			e.set(t), r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW);
		}
		r.bindBuffer(r.ARRAY_BUFFER, null), i && r.bindVertexArray(i);
	}
	getSceneIndexes(e, t) {
		let n, r = t - e + 1;
		n = new Uint32Array(r);
		for (let r = e; r <= t; r++) n[r] = this.globalSplatIndexToSceneIndexMap[r];
		return n;
	}
	fillTransformsArray = function() {
		let e = [];
		return function(t) {
			e.length !== t.length && (e.length = t.length);
			for (let t = 0; t < this.scenes.length; t++) {
				let n = this.getScene(t).transform.elements;
				for (let r = 0; r < 16; r++) e[t * 16 + r] = n[r];
			}
			t.set(e);
		};
	}();
	computeDistancesOnGPU = function() {
		let t = new Y();
		return function(n, r) {
			if (!this.renderer) return;
			let i = this.renderer.getContext(), a = i.getParameter(i.VERTEX_ARRAY_BINDING), o = i.getParameter(i.CURRENT_PROGRAM), s = o ? i.getProgramParameter(o, i.DELETE_STATUS) : !1;
			if (i.bindVertexArray(this.distancesTransformFeedback.vao), i.useProgram(this.distancesTransformFeedback.program), i.enable(i.RASTERIZER_DISCARD), this.dynamicMode) for (let r = 0; r < this.scenes.length; r++) if (t.copy(this.getScene(r).transform), t.premultiply(n), this.integerBasedDistancesComputation) {
				let n = e.getIntegerMatrixArray(t), a = [
					n[2],
					n[6],
					n[10],
					n[14]
				];
				i.uniform4i(this.distancesTransformFeedback.transformsLocs[r], a[0], a[1], a[2], a[3]);
			} else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[r], !1, t.elements);
			else if (this.integerBasedDistancesComputation) {
				let t = e.getIntegerMatrixArray(n), r = [
					t[2],
					t[6],
					t[10]
				];
				i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc, r[0], r[1], r[2]);
			} else {
				let e = [
					n.elements[2],
					n.elements[6],
					n.elements[10]
				];
				i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc, e[0], e[1], e[2]);
			}
			i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.centersBuffer), i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc), this.integerBasedDistancesComputation ? i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc, 4, i.INT, 0, 0) : i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc, 4, i.FLOAT, !1, 0, 0), this.dynamicMode && (i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.sceneIndexesBuffer), i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc), i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc, 1, i.UNSIGNED_INT, 0, 0)), i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, this.distancesTransformFeedback.id), i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, 0, this.distancesTransformFeedback.outDistancesBuffer), i.beginTransformFeedback(i.POINTS), i.drawArrays(i.POINTS, 0, this.getSplatCount()), i.endTransformFeedback(), i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, 0, null), i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, null), i.disable(i.RASTERIZER_DISCARD);
			let c = i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE, 0);
			i.flush();
			let l = new Promise((e) => {
				let t = () => {
					if (this.disposed) e();
					else switch (i.clientWaitSync(c, 0, 0)) {
						case i.TIMEOUT_EXPIRED: return this.computeDistancesOnGPUSyncTimeout = setTimeout(t), this.computeDistancesOnGPUSyncTimeout;
						case i.WAIT_FAILED: throw Error("should never get here");
						default:
							this.computeDistancesOnGPUSyncTimeout = null, i.deleteSync(c);
							let n = i.getParameter(i.VERTEX_ARRAY_BINDING);
							i.bindVertexArray(this.distancesTransformFeedback.vao), i.bindBuffer(i.ARRAY_BUFFER, this.distancesTransformFeedback.outDistancesBuffer), i.getBufferSubData(i.ARRAY_BUFFER, 0, r), i.bindBuffer(i.ARRAY_BUFFER, null), n && i.bindVertexArray(n), e();
					}
				};
				this.computeDistancesOnGPUSyncTimeout = setTimeout(t);
			});
			return o && s !== !0 && i.useProgram(o), a && i.bindVertexArray(a), l;
		};
	}();
	getLocalSplatParameters(e, t, n) {
		n ??= !this.dynamicMode, t.splatBuffer = this.getSplatBufferForSplat(e), t.localIndex = this.getSplatLocalIndex(e), t.sceneTransform = n ? this.getSceneTransformForSplat(e) : null;
	}
	fillSplatDataArrays(e, t, n, r, i, a, o, s = 0, c = 0, l = 1, u, d, f = 0, p) {
		let m = new K();
		m.x = void 0, m.y = void 0, this.splatRenderMode === Pd.ThreeD ? m.z = void 0 : m.z = 1;
		let h = new Y(), g = 0, _ = this.scenes.length - 1;
		p != null && p >= 0 && p <= this.scenes.length && (g = p, _ = p);
		for (let p = g; p <= _; p++) {
			o ??= !this.dynamicMode;
			let g = this.getScene(p), _ = g.splatBuffer, v;
			if (o && (this.getSceneTransform(p, h), v = h), e && _.fillSplatCovarianceArray(e, v, u, d, f, s), t || n) {
				if (!t || !n) throw Error("SplatMesh::fillSplatDataArrays() -> \"scales\" and \"rotations\" must both be valid.");
				_.fillSplatScaleRotationArray(t, n, v, u, d, f, c, m);
			}
			r && _.fillSplatCenterArray(r, v, u, d, f), i && _.fillSplatColorArray(i, g.minimumAlpha, u, d, f), a && _.fillSphericalHarmonicsArray(a, this.minSphericalHarmonicsDegree, v, u, d, f, l), f += _.getSplatCount();
		}
	}
	getIntegerCenters(e, t, n = !1) {
		let r = t - e + 1, i = new Float32Array(r * 3);
		this.fillSplatDataArrays(null, null, null, i, null, null, void 0, void 0, void 0, void 0, e);
		let a, o = n ? 4 : 3;
		a = new Int32Array(r * o);
		for (let e = 0; e < r; e++) {
			for (let t = 0; t < 3; t++) a[e * o + t] = Math.round(i[e * 3 + t] * 1e3);
			n && (a[e * o + 3] = 1e3);
		}
		return a;
	}
	getFloatCenters(e, t, n = !1) {
		let r = t - e + 1, i = new Float32Array(r * 3);
		if (this.fillSplatDataArrays(null, null, null, i, null, null, void 0, void 0, void 0, void 0, e), !n) return i;
		let a = new Float32Array(r * 4);
		for (let e = 0; e < r; e++) {
			for (let t = 0; t < 3; t++) a[e * 4 + t] = i[e * 3 + t];
			a[e * 4 + 3] = 1;
		}
		return a;
	}
	getSplatCenter = function() {
		let e = {};
		return function(t, n, r) {
			this.getLocalSplatParameters(t, e, r), e.splatBuffer.getSplatCenter(e.localIndex, n, e.sceneTransform);
		};
	}();
	getSplatScaleAndRotation = function() {
		let e = {}, t = new K();
		return function(n, r, i, a) {
			this.getLocalSplatParameters(n, e, a), t.x = void 0, t.y = void 0, t.z = void 0, this.splatRenderMode === Pd.TwoD && (t.z = 0), e.splatBuffer.getSplatScaleAndRotation(e.localIndex, r, i, e.sceneTransform, t);
		};
	}();
	getSplatColor = function() {
		let e = {};
		return function(t, n) {
			this.getLocalSplatParameters(t, e), e.splatBuffer.getSplatColor(e.localIndex, n);
		};
	}();
	getSceneTransform(e, t) {
		let n = this.getScene(e);
		n.updateTransform(this.dynamicMode), t.copy(n.transform);
	}
	getScene(e) {
		if (e < 0 || e >= this.scenes.length) throw Error("SplatMesh::getScene() -> Invalid scene index.");
		return this.scenes[e];
	}
	getSceneCount() {
		return this.scenes.length;
	}
	getSplatBufferForSplat(e) {
		return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer;
	}
	getSceneIndexForSplat(e) {
		return this.globalSplatIndexToSceneIndexMap[e];
	}
	getSceneTransformForSplat(e) {
		return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform;
	}
	getSplatLocalIndex(e) {
		return this.globalSplatIndexToLocalSplatIndexMap[e];
	}
	static getIntegerMatrixArray(e) {
		let t = e.elements, n = [];
		for (let e = 0; e < 16; e++) n[e] = Math.round(t[e] * 1e3);
		return n;
	}
	computeBoundingBox(e = !1, t) {
		let n = this.getSplatCount();
		if (t != null) {
			if (t < 0 || t >= this.scenes.length) throw Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");
			n = this.scenes[t].splatBuffer.getSplatCount();
		}
		let r = new Float32Array(n * 3);
		this.fillSplatDataArrays(null, null, null, r, null, null, e, void 0, void 0, void 0, void 0, t);
		let i = new K(), a = new K();
		for (let e = 0; e < n; e++) {
			let t = e * 3, n = r[t], o = r[t + 1], s = r[t + 2];
			(e === 0 || n < i.x) && (i.x = n), (e === 0 || o < i.y) && (i.y = o), (e === 0 || s < i.z) && (i.z = s), (e === 0 || n > a.x) && (a.x = n), (e === 0 || o > a.y) && (a.y = o), (e === 0 || s > a.z) && (a.z = s);
		}
		return new Jn(i, a);
	}
}, mf = "AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==", hf = "AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=", gf = "AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL", _f = "AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";
function vf(e) {
	let t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b;
	function x(y, x, S, C, w, T, E) {
		let D = performance.now();
		if (!r && (new Uint32Array(n, s, w.byteLength / b.BytesPerInt).set(w), new Float32Array(n, u, E.byteLength / b.BytesPerFloat).set(E), C)) {
			let e;
			e = i ? new Int32Array(n, d, T.byteLength / b.BytesPerInt) : new Float32Array(n, d, T.byteLength / b.BytesPerFloat), e.set(T);
		}
		g ||= new Uint32Array(v), new Float32Array(n, h, 16).set(S), new Uint32Array(n, p, v).set(g), t.exports.sortIndexes(s, m, d, f, p, h, c, l, u, v, y, x, o, C, i, a);
		let O = {
			sortDone: !0,
			splatSortCount: y,
			splatRenderCount: x,
			sortTime: 0
		};
		if (!r) {
			let e = new Uint32Array(n, c, x);
			(!_ || _.length < x) && (_ = new Uint32Array(x)), _.set(e), O.sortedIndexes = _;
		}
		O.sortTime = performance.now() - D, e.postMessage(O);
	}
	e.onmessage = (g) => {
		if (g.data.centers) centers = g.data.centers, sceneIndexes = g.data.sceneIndexes, i ? new Int32Array(n, m + g.data.range.from * b.BytesPerInt * 4, g.data.range.count * 4).set(new Int32Array(centers)) : new Float32Array(n, m + g.data.range.from * b.BytesPerFloat * 4, g.data.range.count * 4).set(new Float32Array(centers)), a && new Uint32Array(n, l + g.data.range.from * 4, g.data.range.count).set(new Uint32Array(sceneIndexes)), y = g.data.range.from + g.data.range.count;
		else if (g.data.sort) {
			let e = Math.min(g.data.sort.splatRenderCount || 0, y), t = Math.min(g.data.sort.splatSortCount || 0, y), n = g.data.sort.usePrecomputedDistances, i, a, o;
			r || (i = g.data.sort.indexesToSort, o = g.data.sort.transforms, n && (a = g.data.sort.precomputedDistances)), x(t, e, g.data.sort.modelViewProj, n, i, a, o);
		} else if (g.data.init) {
			b = g.data.init.Constants, o = g.data.init.splatCount, r = g.data.init.useSharedMemory, i = g.data.init.integerBasedSort, a = g.data.init.dynamicMode, v = g.data.init.distanceMapRange, y = 0;
			let _ = i ? b.BytesPerInt * 4 : b.BytesPerFloat * 4, x = new Uint8Array(g.data.init.sorterWasmBytes), S = 16 * b.BytesPerFloat, C = o * b.BytesPerInt, w = o * _, T = S, E = i ? o * b.BytesPerInt : o * b.BytesPerFloat, D = o * b.BytesPerInt, O = o * b.BytesPerInt, k = i ? v * b.BytesPerInt * 2 : v * b.BytesPerFloat * 2, A = a ? o * b.BytesPerInt : 0, j = a ? b.MaxScenes * S : 0, M = b.MemoryPageSize * 32, N = C + w + T + E + D + k + O + A + j + M, P = Math.floor(N / b.MemoryPageSize) + 1, F = {
				module: {},
				env: { memory: new WebAssembly.Memory({
					initial: P,
					maximum: P,
					shared: !0
				}) }
			};
			WebAssembly.compile(x).then((e) => WebAssembly.instantiate(e, F)).then((i) => {
				t = i, s = 0, m = s + C, h = m + w, d = h + T, f = d + E, p = f + D, c = p + k, l = c + O, u = l + A, n = F.env.memory.buffer, r ? e.postMessage({
					sortSetupPhase1Complete: !0,
					indexesToSortBuffer: n,
					indexesToSortOffset: s,
					sortedIndexesBuffer: n,
					sortedIndexesOffset: c,
					precomputedDistancesBuffer: n,
					precomputedDistancesOffset: d,
					transformsBuffer: n,
					transformsOffset: u
				}) : e.postMessage({ sortSetupPhase1Complete: !0 });
			});
		}
	};
}
function yf(e, t, n, r, i, a = al.DefaultSplatSortDistanceMapPrecision) {
	let o = new Worker(URL.createObjectURL(new Blob([
		"(",
		vf.toString(),
		")(self)"
	], { type: "application/javascript" }))), s = mf, c = nl() ? rl() : null;
	!n && !t ? (s = hf, c && c.major <= 16 && c.minor < 4 && (s = _f)) : n ? t || c && c.major <= 16 && c.minor < 4 && (s = gf) : s = hf;
	let l = atob(s), u = new Uint8Array(l.length);
	for (let e = 0; e < l.length; e++) u[e] = l.charCodeAt(e);
	return o.postMessage({ init: {
		sorterWasmBytes: u.buffer,
		splatCount: e,
		useSharedMemory: t,
		integerBasedSort: r,
		dynamicMode: i,
		distanceMapRange: 1 << a,
		Constants: {
			BytesPerFloat: al.BytesPerFloat,
			BytesPerInt: al.BytesPerInt,
			MemoryPageSize: al.MemoryPageSize,
			MaxScenes: al.MaxScenes
		}
	} }), o;
}
var bf = {
	None: 0,
	VR: 1,
	AR: 2
}, xf = class e {
	static createButton(t, n = {}) {
		let r = document.createElement("button");
		function i() {
			let e = null;
			async function i(n) {
				n.addEventListener("end", a), await t.xr.setSession(n), r.textContent = "EXIT VR", e = n;
			}
			function a() {
				e.removeEventListener("end", a), r.textContent = "ENTER VR", e = null;
			}
			r.style.display = "", r.style.cursor = "pointer", r.style.left = "calc(50% - 50px)", r.style.width = "100px", r.textContent = "ENTER VR";
			let o = {
				...n,
				optionalFeatures: [
					"local-floor",
					"bounded-floor",
					"layers",
					...n.optionalFeatures || []
				]
			};
			r.onmouseenter = function() {
				r.style.opacity = "1.0";
			}, r.onmouseleave = function() {
				r.style.opacity = "0.5";
			}, r.onclick = function() {
				e === null ? navigator.xr.requestSession("immersive-vr", o).then(i) : (e.end(), navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-vr", o).then(i).catch((e) => {
					console.warn(e);
				}));
			}, navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-vr", o).then(i).catch((e) => {
				console.warn(e);
			});
		}
		function a() {
			r.style.display = "", r.style.cursor = "auto", r.style.left = "calc(50% - 75px)", r.style.width = "150px", r.onmouseenter = null, r.onmouseleave = null, r.onclick = null;
		}
		function o() {
			a(), r.textContent = "VR NOT SUPPORTED";
		}
		function s(e) {
			a(), console.warn("Exception when trying to call xr.isSessionSupported", e), r.textContent = "VR NOT ALLOWED";
		}
		function c(e) {
			e.style.position = "absolute", e.style.bottom = "20px", e.style.padding = "12px 6px", e.style.border = "1px solid #fff", e.style.borderRadius = "4px", e.style.background = "rgba(0,0,0,0.1)", e.style.color = "#fff", e.style.font = "normal 13px sans-serif", e.style.textAlign = "center", e.style.opacity = "0.5", e.style.outline = "none", e.style.zIndex = "999";
		}
		if ("xr" in navigator) return r.id = "VRButton", r.style.display = "none", c(r), navigator.xr.isSessionSupported("immersive-vr").then(function(t) {
			t ? i() : o(), t && e.xrSessionIsGranted && r.click();
		}).catch(s), r;
		{
			let e = document.createElement("a");
			return window.isSecureContext === !1 ? (e.href = document.location.href.replace(/^http:/, "https:"), e.innerHTML = "WEBXR NEEDS HTTPS") : (e.href = "https://immersiveweb.dev/", e.innerHTML = "WEBXR NOT AVAILABLE"), e.style.left = "calc(50% - 90px)", e.style.width = "180px", e.style.textDecoration = "none", c(e), e;
		}
	}
	static registerSessionGrantedListener() {
		if (typeof navigator < "u" && "xr" in navigator) {
			if (/WebXRViewer\//i.test(navigator.userAgent)) return;
			navigator.xr.addEventListener("sessiongranted", () => {
				e.xrSessionIsGranted = !0;
			});
		}
	}
};
xf.xrSessionIsGranted = !1, xf.registerSessionGrantedListener();
var Sf = class {
	static createButton(e, t = {}) {
		let n = document.createElement("button");
		function r() {
			if (t.domOverlay === void 0) {
				let e = document.createElement("div");
				e.style.display = "none", document.body.appendChild(e);
				let n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				n.setAttribute("width", 38), n.setAttribute("height", 38), n.style.position = "absolute", n.style.right = "20px", n.style.top = "20px", n.addEventListener("click", function() {
					r.end();
				}), e.appendChild(n);
				let i = document.createElementNS("http://www.w3.org/2000/svg", "path");
				i.setAttribute("d", "M 12,12 L 28,28 M 28,12 12,28"), i.setAttribute("stroke", "#fff"), i.setAttribute("stroke-width", 2), n.appendChild(i), t.optionalFeatures === void 0 && (t.optionalFeatures = []), t.optionalFeatures.push("dom-overlay"), t.domOverlay = { root: e };
			}
			let r = null;
			async function i(i) {
				i.addEventListener("end", a), e.xr.setReferenceSpaceType("local"), await e.xr.setSession(i), n.textContent = "STOP AR", t.domOverlay.root.style.display = "", r = i;
			}
			function a() {
				r.removeEventListener("end", a), n.textContent = "START AR", t.domOverlay.root.style.display = "none", r = null;
			}
			n.style.display = "", n.style.cursor = "pointer", n.style.left = "calc(50% - 50px)", n.style.width = "100px", n.textContent = "START AR", n.onmouseenter = function() {
				n.style.opacity = "1.0";
			}, n.onmouseleave = function() {
				n.style.opacity = "0.5";
			}, n.onclick = function() {
				r === null ? navigator.xr.requestSession("immersive-ar", t).then(i) : (r.end(), navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-ar", t).then(i).catch((e) => {
					console.warn(e);
				}));
			}, navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-ar", t).then(i).catch((e) => {
				console.warn(e);
			});
		}
		function i() {
			n.style.display = "", n.style.cursor = "auto", n.style.left = "calc(50% - 75px)", n.style.width = "150px", n.onmouseenter = null, n.onmouseleave = null, n.onclick = null;
		}
		function a() {
			i(), n.textContent = "AR NOT SUPPORTED";
		}
		function o(e) {
			i(), console.warn("Exception when trying to call xr.isSessionSupported", e), n.textContent = "AR NOT ALLOWED";
		}
		function s(e) {
			e.style.position = "absolute", e.style.bottom = "20px", e.style.padding = "12px 6px", e.style.border = "1px solid #fff", e.style.borderRadius = "4px", e.style.background = "rgba(0,0,0,0.1)", e.style.color = "#fff", e.style.font = "normal 13px sans-serif", e.style.textAlign = "center", e.style.opacity = "0.5", e.style.outline = "none", e.style.zIndex = "999";
		}
		if ("xr" in navigator) return n.id = "ARButton", n.style.display = "none", s(n), navigator.xr.isSessionSupported("immersive-ar").then(function(e) {
			e ? r() : a();
		}).catch(o), n;
		{
			let e = document.createElement("a");
			return window.isSecureContext === !1 ? (e.href = document.location.href.replace(/^http:/, "https:"), e.innerHTML = "WEBXR NEEDS HTTPS") : (e.href = "https://immersiveweb.dev/", e.innerHTML = "WEBXR NOT AVAILABLE"), e.style.left = "calc(50% - 90px)", e.style.width = "180px", e.style.textDecoration = "none", s(e), e;
		}
	}
}, Cf = {
	Always: 0,
	OnChange: 1,
	Never: 2
}, wf = 50, Tf = .75, Ef = 15e5, Df = 10, Of = 2.5, kf = 60, Af = class e {
	constructor(e = {}) {
		if (e.cameraUp ||= [
			0,
			1,
			0
		], this.cameraUp = new K().fromArray(e.cameraUp), e.initialCameraPosition ||= [
			0,
			10,
			15
		], this.initialCameraPosition = new K().fromArray(e.initialCameraPosition), e.initialCameraLookAt ||= [
			0,
			0,
			0
		], this.initialCameraLookAt = new K().fromArray(e.initialCameraLookAt), this.dropInMode = e.dropInMode || !1, (e.selfDrivenMode === void 0 || e.selfDrivenMode === null) && (e.selfDrivenMode = !0), this.selfDrivenMode = e.selfDrivenMode && !this.dropInMode, this.selfDrivenUpdateFunc = this.selfDrivenUpdate.bind(this), e.useBuiltInControls === void 0 && (e.useBuiltInControls = !0), this.useBuiltInControls = e.useBuiltInControls, this.rootElement = e.rootElement, this.ignoreDevicePixelRatio = e.ignoreDevicePixelRatio || !1, this.devicePixelRatio = this.ignoreDevicePixelRatio ? 1 : window.devicePixelRatio || 1, this.halfPrecisionCovariancesOnGPU = e.halfPrecisionCovariancesOnGPU || !1, this.threeScene = e.threeScene, this.renderer = e.renderer, this.camera = e.camera, this.gpuAcceleratedSort = e.gpuAcceleratedSort || !1, (e.integerBasedSort === void 0 || e.integerBasedSort === null) && (e.integerBasedSort = !0), this.integerBasedSort = e.integerBasedSort, (e.sharedMemoryForWorkers === void 0 || e.sharedMemoryForWorkers === null) && (e.sharedMemoryForWorkers = !0), this.sharedMemoryForWorkers = e.sharedMemoryForWorkers, this.dynamicScene = !!e.dynamicScene, this.antialiased = e.antialiased || !1, this.kernel2DSize = e.kernel2DSize === void 0 ? .3 : e.kernel2DSize, this.webXRMode = e.webXRMode || bf.None, this.webXRMode !== bf.None && (this.gpuAcceleratedSort = !1), this.webXRActive = !1, this.webXRSessionInit = e.webXRSessionInit || {}, this.renderMode = e.renderMode || Cf.Always, this.sceneRevealMode = e.sceneRevealMode || Yd.Default, this.focalAdjustment = e.focalAdjustment || 1, this.maxScreenSpaceSplatSize = e.maxScreenSpaceSplatSize || 1024, this.logLevel = e.logLevel || Xd.None, this.sphericalHarmonicsDegree = e.sphericalHarmonicsDegree || 0, this.enableOptionalEffects = e.enableOptionalEffects || !1, (e.enableSIMDInSort === void 0 || e.enableSIMDInSort === null) && (e.enableSIMDInSort = !0), this.enableSIMDInSort = e.enableSIMDInSort, (e.inMemoryCompressionLevel === void 0 || e.inMemoryCompressionLevel === null) && (e.inMemoryCompressionLevel = 0), this.inMemoryCompressionLevel = e.inMemoryCompressionLevel, (e.optimizeSplatData === void 0 || e.optimizeSplatData === null) && (e.optimizeSplatData = !0), this.optimizeSplatData = e.optimizeSplatData, (e.freeIntermediateSplatData === void 0 || e.freeIntermediateSplatData === null) && (e.freeIntermediateSplatData = !1), this.freeIntermediateSplatData = e.freeIntermediateSplatData, nl()) {
			let e = rl();
			e.major < 17 && (this.enableSIMDInSort = !1), e.major < 16 && (this.sharedMemoryForWorkers = !1);
		}
		(e.splatRenderMode === void 0 || e.splatRenderMode === null) && (e.splatRenderMode = Pd.ThreeD), this.splatRenderMode = e.splatRenderMode, this.sceneFadeInRateMultiplier = e.sceneFadeInRateMultiplier || 1, this.splatSortDistanceMapPrecision = e.splatSortDistanceMapPrecision || al.DefaultSplatSortDistanceMapPrecision;
		let t = this.integerBasedSort ? 20 : 24;
		this.splatSortDistanceMapPrecision = Jc(this.splatSortDistanceMapPrecision, 10, t), this.onSplatMeshChangedCallback = null, this.createSplatMesh(), this.controls = null, this.perspectiveControls = null, this.orthographicControls = null, this.orthographicCamera = null, this.perspectiveCamera = null, this.showMeshCursor = !1, this.showControlPlane = !1, this.showInfo = !1, this.sceneHelper = null, this.sortWorker = null, this.sortRunning = !1, this.splatRenderCount = 0, this.splatSortCount = 0, this.lastSplatSortCount = 0, this.sortWorkerIndexesToSort = null, this.sortWorkerSortedIndexes = null, this.sortWorkerPrecomputedDistances = null, this.sortWorkerTransforms = null, this.preSortMessages = [], this.runAfterNextSort = [], this.selfDrivenModeRunning = !1, this.splatRenderReady = !1, this.raycaster = new Fd(), this.infoPanel = null, this.startInOrthographicMode = !1, this.currentFPS = 0, this.lastSortTime = 0, this.consecutiveRenderFrames = 0, this.previousCameraTarget = new K(), this.nextCameraTarget = new K(), this.mousePosition = new G(), this.mouseDownPosition = new G(), this.mouseDownTime = null, this.resizeObserver = null, this.mouseMoveListener = null, this.mouseDownListener = null, this.mouseUpListener = null, this.keyDownListener = null, this.sortPromise = null, this.sortPromiseResolver = null, this.splatSceneDownloadPromises = {}, this.splatSceneDownloadAndBuildPromise = null, this.splatSceneRemovalPromise = null, this.loadingSpinner = new Cd(null, this.rootElement || document.body), this.loadingSpinner.hide(), this.loadingProgressBar = new wd(this.rootElement || document.body), this.loadingProgressBar.hide(), this.infoPanel = new Td(this.rootElement || document.body), this.infoPanel.hide(), this.usingExternalCamera = !!(this.dropInMode || this.camera), this.usingExternalRenderer = !!(this.dropInMode || this.renderer), this.initialized = !1, this.disposing = !1, this.disposed = !1, this.disposePromise = null, this.dropInMode || this.init();
	}
	createSplatMesh() {
		this.splatMesh = new pf(this.splatRenderMode, this.dynamicScene, this.enableOptionalEffects, this.halfPrecisionCovariancesOnGPU, this.devicePixelRatio, this.gpuAcceleratedSort, this.integerBasedSort, this.antialiased, this.maxScreenSpaceSplatSize, this.logLevel, this.sphericalHarmonicsDegree, this.sceneFadeInRateMultiplier, this.kernel2DSize), this.splatMesh.frustumCulled = !1, this.onSplatMeshChangedCallback && this.onSplatMeshChangedCallback();
	}
	init() {
		this.initialized ||= (this.rootElement || (this.usingExternalRenderer ? this.rootElement = this.renderer.domElement || document.body : (this.rootElement = document.createElement("div"), this.rootElement.style.width = "100%", this.rootElement.style.height = "100%", this.rootElement.style.position = "absolute", document.body.appendChild(this.rootElement))), this.setupCamera(), this.setupRenderer(), this.setupWebXR(this.webXRSessionInit), this.setupControls(), this.setupEventHandlers(), this.threeScene = this.threeScene || new Nn(), this.sceneHelper = new Od(this.threeScene), this.sceneHelper.setupMeshCursor(), this.sceneHelper.setupFocusMarker(), this.sceneHelper.setupControlPlane(), this.loadingProgressBar.setContainer(this.rootElement), this.loadingSpinner.setContainer(this.rootElement), this.infoPanel.setContainer(this.rootElement), !0);
	}
	setupCamera() {
		if (!this.usingExternalCamera) {
			let e = new G();
			this.getRenderDimensions(e), this.perspectiveCamera = new ia(wf, e.x / e.y, .1, 1e3), this.orthographicCamera = new aa(e.x / -2, e.x / 2, e.y / 2, e.y / -2, .1, 1e3), this.camera = this.startInOrthographicMode ? this.orthographicCamera : this.perspectiveCamera, this.camera.position.copy(this.initialCameraPosition), this.camera.up.copy(this.cameraUp).normalize(), this.camera.lookAt(this.initialCameraLookAt);
		}
	}
	setupRenderer() {
		if (!this.usingExternalRenderer) {
			let e = new G();
			this.getRenderDimensions(e), this.renderer = new Hc({
				antialias: !1,
				precision: "highp"
			}), this.renderer.setPixelRatio(this.devicePixelRatio), this.renderer.autoClear = !0, this.renderer.setClearColor(new jn(0), 0), this.renderer.setSize(e.x, e.y), this.resizeObserver = new ResizeObserver(() => {
				this.getRenderDimensions(e), this.renderer.setSize(e.x, e.y), this.forceRenderNextFrame();
			}), this.resizeObserver.observe(this.rootElement), this.rootElement.appendChild(this.renderer.domElement);
		}
	}
	setupWebXR(e) {
		this.webXRMode && (this.webXRMode === bf.VR ? this.rootElement.appendChild(xf.createButton(this.renderer, e)) : this.webXRMode === bf.AR && this.rootElement.appendChild(Sf.createButton(this.renderer, e)), this.renderer.xr.addEventListener("sessionstart", (e) => {
			this.webXRActive = !0;
		}), this.renderer.xr.addEventListener("sessionend", (e) => {
			this.webXRActive = !1;
		}), this.renderer.xr.enabled = !0, this.camera.position.copy(this.initialCameraPosition), this.camera.up.copy(this.cameraUp).normalize(), this.camera.lookAt(this.initialCameraLookAt));
	}
	setupControls() {
		if (this.useBuiltInControls && this.webXRMode === bf.None) {
			this.usingExternalCamera ? this.camera.isOrthographicCamera ? this.orthographicControls = new bd(this.camera, this.renderer.domElement) : this.perspectiveControls = new bd(this.camera, this.renderer.domElement) : (this.perspectiveControls = new bd(this.perspectiveCamera, this.renderer.domElement), this.orthographicControls = new bd(this.orthographicCamera, this.renderer.domElement));
			for (let e of [this.orthographicControls, this.perspectiveControls]) e && (e.listenToKeyEvents(window), e.rotateSpeed = .5, e.maxPolarAngle = Math.PI * .75, e.minPolarAngle = .1, e.enableDamping = !0, e.dampingFactor = .05, e.target.copy(this.initialCameraLookAt), e.update());
			this.controls = this.camera.isOrthographicCamera ? this.orthographicControls : this.perspectiveControls, this.controls.update();
		}
	}
	setupEventHandlers() {
		this.useBuiltInControls && this.webXRMode === bf.None && (this.mouseMoveListener = this.onMouseMove.bind(this), this.renderer.domElement.addEventListener("pointermove", this.mouseMoveListener, !1), this.mouseDownListener = this.onMouseDown.bind(this), this.renderer.domElement.addEventListener("pointerdown", this.mouseDownListener, !1), this.mouseUpListener = this.onMouseUp.bind(this), this.renderer.domElement.addEventListener("pointerup", this.mouseUpListener, !1), this.keyDownListener = this.onKeyDown.bind(this), window.addEventListener("keydown", this.keyDownListener, !1));
	}
	removeEventHandlers() {
		this.useBuiltInControls && (this.renderer.domElement.removeEventListener("pointermove", this.mouseMoveListener), this.mouseMoveListener = null, this.renderer.domElement.removeEventListener("pointerdown", this.mouseDownListener), this.mouseDownListener = null, this.renderer.domElement.removeEventListener("pointerup", this.mouseUpListener), this.mouseUpListener = null, window.removeEventListener("keydown", this.keyDownListener), this.keyDownListener = null);
	}
	setRenderMode(e) {
		this.renderMode = e;
	}
	setActiveSphericalHarmonicsDegrees(e) {
		this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value = e, this.splatMesh.material.uniformsNeedUpdate = !0;
	}
	onSplatMeshChanged(e) {
		this.onSplatMeshChangedCallback = e;
	}
	onKeyDown = function() {
		let e = new K(), t = new Y(), n = new Y();
		return function(r) {
			switch (e.set(0, 0, -1), e.transformDirection(this.camera.matrixWorld), t.makeRotationAxis(e, Math.PI / 128), n.makeRotationAxis(e, -Math.PI / 128), r.code) {
				case "KeyG":
					this.focalAdjustment += .02, this.forceRenderNextFrame();
					break;
				case "KeyF":
					this.focalAdjustment -= .02, this.forceRenderNextFrame();
					break;
				case "ArrowLeft":
					this.camera.up.transformDirection(t);
					break;
				case "ArrowRight":
					this.camera.up.transformDirection(n);
					break;
				case "KeyC":
					this.showMeshCursor = !this.showMeshCursor;
					break;
				case "KeyU":
					this.showControlPlane = !this.showControlPlane;
					break;
				case "KeyI":
					this.showInfo = !this.showInfo, this.showInfo ? this.infoPanel.show() : this.infoPanel.hide();
					break;
				case "KeyO":
					this.usingExternalCamera || this.setOrthographicMode(!this.camera.isOrthographicCamera);
					break;
				case "KeyP":
					this.usingExternalCamera || this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());
					break;
				case "Equal":
					this.usingExternalCamera || this.splatMesh.setSplatScale(this.splatMesh.getSplatScale() + .05);
					break;
				case "Minus":
					this.usingExternalCamera || this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale() - .05, 0));
					break;
			}
		};
	}();
	onMouseMove(e) {
		this.mousePosition.set(e.offsetX, e.offsetY);
	}
	onMouseDown() {
		this.mouseDownPosition.copy(this.mousePosition), this.mouseDownTime = Yc();
	}
	onMouseUp = function() {
		let e = new G();
		return function(t) {
			e.copy(this.mousePosition).sub(this.mouseDownPosition), Yc() - this.mouseDownTime < .5 && e.length() < 2 && this.onMouseClick(t);
		};
	}();
	onMouseClick(e) {
		this.mousePosition.set(e.offsetX, e.offsetY), this.checkForFocalPointChange();
	}
	checkForFocalPointChange = function() {
		let e = new G(), t = new K(), n = [];
		return function() {
			if (!this.transitioningCameraTarget && (this.getRenderDimensions(e), n.length = 0, this.raycaster.setFromCameraAndScreenPosition(this.camera, this.mousePosition, e), this.raycaster.intersectSplatMesh(this.splatMesh, n), n.length > 0)) {
				let e = n[0].origin;
				t.copy(e).sub(this.camera.position), t.length() > Tf && (this.previousCameraTarget.copy(this.controls.target), this.nextCameraTarget.copy(e), this.transitioningCameraTarget = !0, this.transitioningCameraTargetStartTime = Yc());
			}
		};
	}();
	getRenderDimensions(e) {
		this.rootElement ? (e.x = this.rootElement.offsetWidth, e.y = this.rootElement.offsetHeight) : this.renderer.getSize(e);
	}
	setOrthographicMode(t) {
		if (t === this.camera.isOrthographicCamera) return;
		let n = this.camera, r = t ? this.orthographicCamera : this.perspectiveCamera;
		if (r.position.copy(n.position), r.up.copy(n.up), r.rotation.copy(n.rotation), r.quaternion.copy(n.quaternion), r.matrix.copy(n.matrix), this.camera = r, this.controls) {
			let i = (e) => {
				e.saveState(), e.reset();
			}, a = this.controls, o = t ? this.orthographicControls : this.perspectiveControls;
			i(o), i(a), o.target.copy(a.target), t ? e.setCameraZoomFromPosition(r, n, a) : e.setCameraPositionFromZoom(r, n, o), this.controls = o, this.camera.lookAt(this.controls.target);
		}
	}
	static setCameraPositionFromZoom = function() {
		let e = new K();
		return function(t, n, r) {
			let i = 1 / (n.zoom * .001);
			e.copy(r.target).sub(t.position).normalize().multiplyScalar(i).negate(), t.position.copy(r.target).add(e);
		};
	}();
	static setCameraZoomFromPosition = function() {
		let e = new K();
		return function(t, n, r) {
			t.zoom = 1 / (e.copy(r.target).sub(n.position).length() * .001);
		};
	}();
	updateSplatMesh = function() {
		let e = new G();
		return function() {
			if (this.splatMesh && this.splatMesh.getSplatCount() > 0) {
				this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode), this.splatMesh.updateTransforms(), this.getRenderDimensions(e);
				let t = this.camera.projectionMatrix.elements[0] * .5 * this.devicePixelRatio * e.x, n = this.camera.projectionMatrix.elements[5] * .5 * this.devicePixelRatio * e.y, r = this.camera.isOrthographicCamera ? 1 / this.devicePixelRatio : 1, i = this.focalAdjustment * r, a = 1 / i;
				this.adjustForWebXRStereo(e), this.splatMesh.updateUniforms(e, t * i, n * i, this.camera.isOrthographicCamera, this.camera.zoom || 1, a);
			}
		};
	}();
	adjustForWebXRStereo(e) {
		if (this.camera && this.webXRActive) {
			let t = this.renderer.xr.getCamera().projectionMatrix.elements[0], n = this.camera.projectionMatrix.elements[0];
			e.x *= n / t;
		}
	}
	isLoadingOrUnloading() {
		return Object.keys(this.splatSceneDownloadPromises).length > 0 || this.splatSceneDownloadAndBuildPromise !== null || this.splatSceneRemovalPromise !== null;
	}
	isDisposingOrDisposed() {
		return this.disposing || this.disposed;
	}
	addSplatSceneDownloadPromise(e) {
		this.splatSceneDownloadPromises[e.id] = e;
	}
	removeSplatSceneDownloadPromise(e) {
		delete this.splatSceneDownloadPromises[e.id];
	}
	setSplatSceneDownloadAndBuildPromise(e) {
		this.splatSceneDownloadAndBuildPromise = e;
	}
	clearSplatSceneDownloadAndBuildPromise() {
		this.splatSceneDownloadAndBuildPromise = null;
	}
	addSplatScene(t, n = {}) {
		if (this.isLoadingOrUnloading()) throw Error("Cannot add splat scene while another load or unload is already in progress.");
		if (this.isDisposingOrDisposed()) throw Error("Cannot add splat scene after dispose() is called.");
		n.progressiveLoad && this.splatMesh.scenes && this.splatMesh.scenes.length > 0 && (console.log("addSplatScene(): \"progressiveLoad\" option ignore because there are multiple splat scenes"), n.progressiveLoad = !1);
		let r = n.format !== void 0 && n.format !== null ? n.format : pd(t), i = e.isProgressivelyLoadable(r) && n.progressiveLoad, a = n.showLoadingUI !== void 0 && n.showLoadingUI !== null ? n.showLoadingUI : !0, o = null;
		a && (this.loadingSpinner.removeAllTasks(), o = this.loadingSpinner.addTask("Downloading..."));
		let s = () => {
			this.loadingProgressBar.hide(), this.loadingSpinner.removeAllTasks();
		}, c = (e, t, n) => {
			if (a) if (n === zu.Downloading) if (e == 100) this.loadingSpinner.setMessageForTask(o, "Download complete!");
			else if (i) this.loadingSpinner.setMessageForTask(o, "Downloading splats...");
			else {
				let e = t ? `: ${t}` : "...";
				this.loadingSpinner.setMessageForTask(o, `Downloading${e}`);
			}
			else n === zu.Processing && this.loadingSpinner.setMessageForTask(o, "Processing splats...");
		}, l = !1, u = 0, d = (e, t) => {
			a && ((e && i || t && !i) && (this.loadingSpinner.removeTask(o), !t && !l && this.loadingProgressBar.show()), i && (t ? (l = !0, this.loadingProgressBar.hide()) : this.loadingProgressBar.setProgress(u)));
		};
		return (i ? this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this) : this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(t, r, n.splatAlphaRemovalThreshold, ((e, t, r) => {
			!i && n.onProgress && n.onProgress(0, "0%", zu.Processing);
			let o = {
				rotation: n.rotation || n.orientation,
				position: n.position,
				scale: n.scale,
				splatAlphaRemovalThreshold: n.splatAlphaRemovalThreshold
			};
			return this.addSplatBuffers([e], [o], r, t && a, a, i, i).then(() => {
				!i && n.onProgress && n.onProgress(100, "100%", zu.Processing), d(t, r);
			});
		}).bind(this), (e, t, r) => {
			u = e, c(e, t, r), n.onProgress && n.onProgress(e, t, r);
		}, s.bind(this), n.headers);
	}
	downloadAndBuildSingleSplatSceneStandardLoad(e, t, n, r, i, a, o) {
		let s = this.downloadSplatSceneToSplatBuffer(e, n, i, !1, void 0, t, o), c = el(s.abortHandler);
		return s.then((e) => (this.removeSplatSceneDownloadPromise(s), r(e, !0, !0).then(() => {
			c.resolve(), this.clearSplatSceneDownloadAndBuildPromise();
		}))).catch((t) => {
			a && a(), this.clearSplatSceneDownloadAndBuildPromise(), this.removeSplatSceneDownloadPromise(s), c.reject(this.updateError(t, `Viewer::addSplatScene -> Could not load file ${e}`));
		}), this.addSplatSceneDownloadPromise(s), this.setSplatSceneDownloadAndBuildPromise(c.promise), c.promise;
	}
	downloadAndBuildSingleSplatSceneProgressiveLoad(e, t, n, r, i, a, o) {
		let s = 0, c = !1, l = [], u = () => {
			if (l.length > 0 && !c && !this.isDisposingOrDisposed()) {
				c = !0;
				let e = l.shift();
				r(e.splatBuffer, e.firstBuild, e.finalBuild).then(() => {
					c = !1, e.firstBuild ? f.resolve() : e.finalBuild && (p.resolve(), this.clearSplatSceneDownloadAndBuildPromise()), l.length > 0 && Zc(() => u());
				});
			}
		}, d = this.downloadSplatSceneToSplatBuffer(e, n, i, !0, (e, t) => {
			this.isDisposingOrDisposed() || (t || l.length === 0 || e.getSplatCount() > l[0].splatBuffer.getSplatCount()) && (l.push({
				splatBuffer: e,
				firstBuild: s === 0,
				finalBuild: t
			}), s++, u());
		}, t, o), f = el(d.abortHandler), p = el();
		return this.addSplatSceneDownloadPromise(d), this.setSplatSceneDownloadAndBuildPromise(p.promise), d.then(() => {
			this.removeSplatSceneDownloadPromise(d);
		}).catch((e) => {
			this.clearSplatSceneDownloadAndBuildPromise(), this.removeSplatSceneDownloadPromise(d);
			let t = this.updateError(e, "Viewer::addSplatScene -> Could not load one or more scenes");
			f.reject(t), a && a(t);
		}), f.promise;
	}
	addSplatScenes(e, t = !0, n = void 0) {
		if (this.isLoadingOrUnloading()) throw Error("Cannot add splat scene while another load or unload is already in progress.");
		if (this.isDisposingOrDisposed()) throw Error("Cannot add splat scene after dispose() is called.");
		let r = e.length, i = [], a;
		t && (this.loadingSpinner.removeAllTasks(), a = this.loadingSpinner.addTask("Downloading..."));
		let o = (e, o, s, c) => {
			i[e] = o;
			let l = 0;
			for (let e = 0; e < r; e++) l += i[e] || 0;
			l /= r, s = `${l.toFixed(2)}%`, t && c === zu.Downloading && this.loadingSpinner.setMessageForTask(a, l == 100 ? "Download complete!" : `Downloading: ${s}`), n && n(l, s, c);
		}, s = [], c = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t], r = n.format !== void 0 && n.format !== null ? n.format : pd(n.path), i = this.downloadSplatSceneToSplatBuffer(n.path, n.splatAlphaRemovalThreshold, o.bind(this, t), !1, void 0, r, n.headers);
			s.push(i), c.push(i.promise);
		}
		let l = new Uc((r, i) => {
			Promise.all(c).then((i) => {
				t && this.loadingSpinner.removeTask(a), n && n(0, "0%", zu.Processing), this.addSplatBuffers(i, e, !0, t, t, !1, !1).then(() => {
					n && n(100, "100%", zu.Processing), this.clearSplatSceneDownloadAndBuildPromise(), r();
				});
			}).catch((e) => {
				t && this.loadingSpinner.removeTask(a), this.clearSplatSceneDownloadAndBuildPromise(), i(this.updateError(e, "Viewer::addSplatScenes -> Could not load one or more splat scenes."));
			}).finally(() => {
				this.removeSplatSceneDownloadPromise(l);
			});
		}, (e) => {
			for (let t of s) t.abort(e);
		});
		return this.addSplatSceneDownloadPromise(l), this.setSplatSceneDownloadAndBuildPromise(l), l;
	}
	downloadSplatSceneToSplatBuffer(e, t = 1, n = void 0, r = !1, i = void 0, a, o) {
		try {
			if (a === fd.Splat || a === fd.KSplat || a === fd.Ply) {
				let s = r ? !1 : this.optimizeSplatData;
				if (a === fd.Splat) return ud.loadFromURL(e, n, r, i, t, this.inMemoryCompressionLevel, s, o);
				if (a === fd.KSplat) return dd.loadFromURL(e, n, r, i, o);
				if (a === fd.Ply) return Wu.loadFromURL(e, n, r, i, t, this.inMemoryCompressionLevel, s, this.sphericalHarmonicsDegree, o);
			} else if (a === fd.Spz) return sd.loadFromURL(e, n, t, this.inMemoryCompressionLevel, this.optimizeSplatData, this.sphericalHarmonicsDegree, o);
		} catch (e) {
			throw this.updateError(e, null);
		}
		throw Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`);
	}
	static isProgressivelyLoadable(e) {
		return e === fd.Splat || e === fd.KSplat || e === fd.Ply;
	}
	addSplatBuffers = function() {
		return function(e, t = [], n = !0, r = !0, i = !0, a = !1, o = !1, s = !0) {
			if (this.isDisposingOrDisposed()) return Promise.resolve();
			let c = null, l = () => {
				c !== null && (this.loadingSpinner.removeTask(c), c = null);
			};
			return this.splatRenderReady = !1, new Promise((u) => {
				r && (c = this.loadingSpinner.addTask("Processing splats...")), Zc(() => {
					if (this.isDisposingOrDisposed()) u();
					else {
						let r = this.addSplatBuffersToMesh(e, t, n, i, a, s), c = this.splatMesh.getMaxSplatCount();
						this.sortWorker && this.sortWorker.maxSplatCount !== c && this.disposeSortWorker(), this.gpuAcceleratedSort || this.preSortMessages.push({
							centers: r.centers.buffer,
							sceneIndexes: r.sceneIndexes.buffer,
							range: {
								from: r.from,
								to: r.to,
								count: r.count
							}
						}), (!this.sortWorker && c > 0 ? this.setupSortWorker(this.splatMesh) : Promise.resolve()).then(() => {
							this.isDisposingOrDisposed() || this.runSplatSort(!0, !0).then((e) => {
								!this.sortWorker || !e ? (this.splatRenderReady = !0, l(), u()) : (o ? this.splatRenderReady = !0 : this.runAfterNextSort.push(() => {
									this.splatRenderReady = !0;
								}), this.runAfterNextSort.push(() => {
									l(), u();
								}));
							});
						});
					}
				}, !0);
			});
		};
	}();
	addSplatBuffersToMesh = function() {
		let e;
		return function(t, n, r = !0, i = !1, a = !1, o = !0) {
			if (this.isDisposingOrDisposed()) return;
			let s = [], c = [];
			a || (s = this.splatMesh.scenes.map((e) => e.splatBuffer) || [], c = this.splatMesh.sceneOptions ? this.splatMesh.sceneOptions.map((e) => e) : []), s.push(...t), c.push(...n), this.renderer && this.splatMesh.setRenderer(this.renderer);
			let l = this.splatMesh.build(s, c, !0, r, (t) => {
				if (this.isDisposingOrDisposed()) return;
				let n = this.splatMesh.getSplatCount();
				i && n >= Ef && !t && !e && (this.loadingSpinner.setMinimized(!0, !0), e = this.loadingSpinner.addTask("Optimizing data structures..."));
			}, (t) => {
				this.isDisposingOrDisposed() || t && e && (this.loadingSpinner.removeTask(e), e = null);
			}, o);
			return r && this.freeIntermediateSplatData && this.splatMesh.freeIntermediateSplatData(), l;
		};
	}();
	setupSortWorker(e) {
		if (!this.isDisposingOrDisposed()) return new Promise((t) => {
			let n = this.integerBasedSort ? Int32Array : Float32Array, r = e.getSplatCount(), i = e.getMaxSplatCount();
			this.sortWorker = yf(i, this.sharedMemoryForWorkers, this.enableSIMDInSort, this.integerBasedSort, this.splatMesh.dynamicMode, this.splatSortDistanceMapPrecision), this.sortWorker.onmessage = (e) => {
				if (e.data.sortDone) {
					if (this.sortRunning = !1, this.sharedMemoryForWorkers) this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes, e.data.splatRenderCount);
					else {
						let t = new Uint32Array(e.data.sortedIndexes.buffer, 0, e.data.splatRenderCount);
						this.splatMesh.updateRenderIndexes(t, e.data.splatRenderCount);
					}
					this.lastSplatSortCount = this.splatSortCount, this.lastSortTime = e.data.sortTime, this.sortPromiseResolver(), this.sortPromiseResolver = null, this.forceRenderNextFrame(), this.runAfterNextSort.length > 0 && (this.runAfterNextSort.forEach((e) => {
						e();
					}), this.runAfterNextSort.length = 0);
				} else if (e.data.sortCanceled) this.sortRunning = !1;
				else if (e.data.sortSetupPhase1Complete) {
					this.logLevel >= Xd.Info && console.log("Sorting web worker WASM setup complete."), this.sharedMemoryForWorkers ? (this.sortWorkerSortedIndexes = new Uint32Array(e.data.sortedIndexesBuffer, e.data.sortedIndexesOffset, i), this.sortWorkerIndexesToSort = new Uint32Array(e.data.indexesToSortBuffer, e.data.indexesToSortOffset, i), this.sortWorkerPrecomputedDistances = new n(e.data.precomputedDistancesBuffer, e.data.precomputedDistancesOffset, i), this.sortWorkerTransforms = new Float32Array(e.data.transformsBuffer, e.data.transformsOffset, al.MaxScenes * 16)) : (this.sortWorkerIndexesToSort = new Uint32Array(i), this.sortWorkerPrecomputedDistances = new n(i), this.sortWorkerTransforms = new Float32Array(al.MaxScenes * 16));
					for (let e = 0; e < r; e++) this.sortWorkerIndexesToSort[e] = e;
					if (this.sortWorker.maxSplatCount = i, this.logLevel >= Xd.Info) {
						console.log("Sorting web worker ready.");
						let e = this.splatMesh.getSplatDataTextures(), t = e.covariances.size, n = e.centerColors.size;
						console.log("Covariances texture size: " + t.x + " x " + t.y), console.log("Centers/colors texture size: " + n.x + " x " + n.y);
					}
					t();
				}
			};
		});
	}
	updateError(e, t) {
		return e instanceof Wc ? e : e instanceof Bu ? /* @__PURE__ */ Error("File type or server does not support progressive loading.") : t ? Error(t) : e;
	}
	disposeSortWorker() {
		this.sortWorker && this.sortWorker.terminate(), this.sortWorker = null, this.sortPromise = null, this.sortPromiseResolver &&= (this.sortPromiseResolver(), null), this.preSortMessages = [], this.sortRunning = !1;
	}
	removeSplatScene(e, t = !0) {
		return this.removeSplatScenes([e], t);
	}
	removeSplatScenes(e, t = !0) {
		if (this.isLoadingOrUnloading()) throw Error("Cannot remove splat scene while another load or unload is already in progress.");
		if (this.isDisposingOrDisposed()) throw Error("Cannot remove splat scene after dispose() is called.");
		let n;
		return this.splatSceneRemovalPromise = new Promise((r, i) => {
			let a;
			t && (this.loadingSpinner.removeAllTasks(), this.loadingSpinner.show(), a = this.loadingSpinner.addTask("Removing splat scene..."));
			let o = () => {
				t && (this.loadingSpinner.hide(), this.loadingSpinner.removeTask(a));
			}, s = (e) => {
				o(), this.splatSceneRemovalPromise = null, e ? i(e) : r();
			}, c = () => this.isDisposingOrDisposed() ? (s(), !0) : !1;
			n = this.sortPromise || Promise.resolve(), n.then(() => {
				if (c()) return;
				let t = [], r = [], i = [];
				for (let n = 0; n < this.splatMesh.scenes.length; n++) {
					let a = !1;
					for (let t of e) if (t === n) {
						a = !0;
						break;
					}
					if (!a) {
						let e = this.splatMesh.scenes[n];
						t.push(e.splatBuffer), r.push(this.splatMesh.sceneOptions[n]), i.push({
							position: e.position.clone(),
							quaternion: e.quaternion.clone(),
							scale: e.scale.clone()
						});
					}
				}
				this.disposeSortWorker(), this.splatMesh.dispose(), this.sceneRevealMode = Yd.Instant, this.createSplatMesh(), this.addSplatBuffers(t, r, !0, !1, !0).then(() => {
					c() || (o(), this.splatMesh.scenes.forEach((e, t) => {
						e.position.copy(i[t].position), e.quaternion.copy(i[t].quaternion), e.scale.copy(i[t].scale);
					}), this.splatMesh.updateTransforms(), this.splatRenderReady = !1, this.runSplatSort(!0).then(() => {
						if (c()) {
							this.splatRenderReady = !0;
							return;
						}
						n = this.sortPromise || Promise.resolve(), n.then(() => {
							this.splatRenderReady = !0, s();
						});
					}));
				}).catch((e) => {
					s(e);
				});
			});
		}), this.splatSceneRemovalPromise;
	}
	start() {
		if (this.selfDrivenMode) this.webXRMode ? this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc) : this.requestFrameId = requestAnimationFrame(this.selfDrivenUpdateFunc), this.selfDrivenModeRunning = !0;
		else throw Error("Cannot start viewer unless it is in self driven mode.");
	}
	stop() {
		this.selfDrivenMode && this.selfDrivenModeRunning && (this.webXRMode ? this.renderer.setAnimationLoop(null) : cancelAnimationFrame(this.requestFrameId), this.selfDrivenModeRunning = !1);
	}
	async dispose() {
		if (this.isDisposingOrDisposed()) return this.disposePromise;
		let e = [], t = [];
		for (let n in this.splatSceneDownloadPromises) if (this.splatSceneDownloadPromises.hasOwnProperty(n)) {
			let r = this.splatSceneDownloadPromises[n];
			t.push(r), e.push(r.promise);
		}
		return this.sortPromise && e.push(this.sortPromise), this.disposing = !0, this.disposePromise = Promise.all(e).finally(() => {
			this.stop(), this.orthographicControls &&= (this.orthographicControls.dispose(), null), this.perspectiveControls &&= (this.perspectiveControls.dispose(), null), this.controls = null, this.splatMesh &&= (this.splatMesh.dispose(), null), this.sceneHelper &&= (this.sceneHelper.dispose(), null), this.resizeObserver &&= (this.resizeObserver.unobserve(this.rootElement), null), this.disposeSortWorker(), this.removeEventHandlers(), this.loadingSpinner.removeAllTasks(), this.loadingSpinner.setContainer(null), this.loadingProgressBar.hide(), this.loadingProgressBar.setContainer(null), this.infoPanel.setContainer(null), this.camera = null, this.threeScene = null, this.splatRenderReady = !1, this.initialized = !1, this.renderer &&= (this.usingExternalRenderer || (this.rootElement.removeChild(this.renderer.domElement), this.renderer.dispose()), null), this.usingExternalRenderer || document.body.removeChild(this.rootElement), this.sortWorkerSortedIndexes = null, this.sortWorkerIndexesToSort = null, this.sortWorkerPrecomputedDistances = null, this.sortWorkerTransforms = null, this.disposed = !0, this.disposing = !1, this.disposePromise = null;
		}), t.forEach((e) => {
			e.abort("Scene disposed");
		}), this.disposePromise;
	}
	selfDrivenUpdate() {
		this.selfDrivenMode && !this.webXRMode && (this.requestFrameId = requestAnimationFrame(this.selfDrivenUpdateFunc)), this.update(), this.shouldRender() ? (this.render(), this.consecutiveRenderFrames++) : this.consecutiveRenderFrames = 0, this.renderNextFrame = !1;
	}
	forceRenderNextFrame() {
		this.renderNextFrame = !0;
	}
	shouldRender = function() {
		let e = 0, t = new K(), n = new Ot(), r = 1e-4;
		return function() {
			if (!this.initialized || !this.splatRenderReady || this.isDisposingOrDisposed()) return !1;
			let i = !1, a = !1;
			if (this.camera) {
				let e = this.camera.position, i = this.camera.quaternion;
				a = Math.abs(e.x - t.x) > r || Math.abs(e.y - t.y) > r || Math.abs(e.z - t.z) > r || Math.abs(i.x - n.x) > r || Math.abs(i.y - n.y) > r || Math.abs(i.z - n.z) > r || Math.abs(i.w - n.w) > r;
			}
			return i = this.renderMode !== Cf.Never && (e === 0 || this.splatMesh.visibleRegionChanging || a || this.renderMode === Cf.Always || this.dynamicMode === !0 || this.renderNextFrame), this.camera && (t.copy(this.camera.position), n.copy(this.camera.quaternion)), e++, i;
		};
	}();
	render = function() {
		return function() {
			if (!this.initialized || !this.splatRenderReady || this.isDisposingOrDisposed()) return;
			let e = (e) => {
				for (let t of e.children) if (t.visible) return !0;
				return !1;
			}, t = this.renderer.autoClear;
			e(this.threeScene) && (this.renderer.render(this.threeScene, this.camera), this.renderer.autoClear = !1), this.renderer.render(this.splatMesh, this.camera), this.renderer.autoClear = !1, this.sceneHelper.getFocusMarkerOpacity() > 0 && this.renderer.render(this.sceneHelper.focusMarker, this.camera), this.showControlPlane && this.renderer.render(this.sceneHelper.controlPlane, this.camera), this.renderer.autoClear = t;
		};
	}();
	update(t, n) {
		this.dropInMode && this.updateForDropInMode(t, n), !(!this.initialized || !this.splatRenderReady || this.isDisposingOrDisposed()) && (this.controls && (this.controls.update(), this.camera.isOrthographicCamera && !this.usingExternalCamera && e.setCameraPositionFromZoom(this.camera, this.camera, this.controls)), this.runSplatSort(), this.updateForRendererSizeChanges(), this.updateSplatMesh(), this.updateMeshCursor(), this.updateFPS(), this.timingSensitiveUpdates(), this.updateInfoPanel(), this.updateControlPlane());
	}
	updateForDropInMode(e, t) {
		this.renderer = e, this.splatMesh && this.splatMesh.setRenderer(this.renderer), this.camera = t, this.controls && (this.controls.object = t), this.init();
	}
	updateFPS = function() {
		let e = Yc(), t = 0;
		return function() {
			if (this.consecutiveRenderFrames > kf) {
				let n = Yc();
				n - e >= 1 ? (this.currentFPS = t, t = 0, e = n) : t++;
			} else this.currentFPS = null;
		};
	}();
	updateForRendererSizeChanges = function() {
		let e = new G(), t = new G(), n;
		return function() {
			this.usingExternalCamera || (this.renderer.getSize(t), (n === void 0 || n !== this.camera.isOrthographicCamera || t.x !== e.x || t.y !== e.y) && (this.camera.isOrthographicCamera ? (this.camera.left = -t.x / 2, this.camera.right = t.x / 2, this.camera.top = t.y / 2, this.camera.bottom = -t.y / 2) : this.camera.aspect = t.x / t.y, this.camera.updateProjectionMatrix(), e.copy(t), n = this.camera.isOrthographicCamera));
		};
	}();
	timingSensitiveUpdates = function() {
		let e;
		return function() {
			let t = Yc();
			e ||= t;
			let n = t - e;
			this.updateCameraTransition(t), this.updateFocusMarker(n), e = t;
		};
	}();
	updateCameraTransition = function() {
		let e = new K(), t = new K(), n = new K();
		return function(r) {
			if (this.transitioningCameraTarget) {
				t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(), n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();
				let i = Math.acos(t.dot(n)), a = (i / (Math.PI / 3) * .65 + .3) / i * (r - this.transitioningCameraTargetStartTime);
				e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget, a), this.camera.lookAt(e), this.controls.target.copy(e), a >= 1 && (this.transitioningCameraTarget = !1);
			}
		};
	}();
	updateFocusMarker = function() {
		let e = new G(), t = !1;
		return function(n) {
			if (this.getRenderDimensions(e), this.transitioningCameraTarget) {
				this.sceneHelper.setFocusMarkerVisibility(!0);
				let r = Math.max(this.sceneHelper.getFocusMarkerOpacity(), 0), i = Math.min(r + Df * n, 1);
				this.sceneHelper.setFocusMarkerOpacity(i), this.sceneHelper.updateFocusMarker(this.nextCameraTarget, this.camera, e), t = !0, this.forceRenderNextFrame();
			} else {
				let r;
				if (r = t ? 1 : Math.min(this.sceneHelper.getFocusMarkerOpacity(), 1), r > 0) {
					this.sceneHelper.updateFocusMarker(this.nextCameraTarget, this.camera, e);
					let t = Math.max(r - Of * n, 0);
					this.sceneHelper.setFocusMarkerOpacity(t), t === 0 && this.sceneHelper.setFocusMarkerVisibility(!1);
				}
				r > 0 && this.forceRenderNextFrame(), t = !1;
			}
		};
	}();
	updateMeshCursor = function() {
		let e = [], t = new G();
		return function() {
			this.showMeshCursor ? (this.forceRenderNextFrame(), this.getRenderDimensions(t), e.length = 0, this.raycaster.setFromCameraAndScreenPosition(this.camera, this.mousePosition, t), this.raycaster.intersectSplatMesh(this.splatMesh, e), e.length > 0 ? (this.sceneHelper.setMeshCursorVisibility(!0), this.sceneHelper.positionAndOrientMeshCursor(e[0].origin, this.camera)) : this.sceneHelper.setMeshCursorVisibility(!1)) : (this.sceneHelper.getMeschCursorVisibility() && this.forceRenderNextFrame(), this.sceneHelper.setMeshCursorVisibility(!1));
		};
	}();
	updateInfoPanel = function() {
		let e = new G();
		return function() {
			if (!this.showInfo) return;
			let t = this.splatMesh.getSplatCount();
			this.getRenderDimensions(e);
			let n = this.controls ? this.controls.target : null, r = this.showMeshCursor ? this.sceneHelper.meshCursor.position : null, i = t > 0 ? this.splatRenderCount / t * 100 : 0;
			this.infoPanel.update(e, this.camera.position, n, this.camera.up, this.camera.isOrthographicCamera, r, this.currentFPS || "N/A", t, this.splatRenderCount, i, this.lastSortTime, this.focalAdjustment, this.splatMesh.getSplatScale(), this.splatMesh.getPointCloudModeEnabled());
		};
	}();
	updateControlPlane() {
		this.showControlPlane ? (this.sceneHelper.setControlPlaneVisibility(!0), this.sceneHelper.positionAndOrientControlPlane(this.controls.target, this.camera.up)) : this.sceneHelper.setControlPlaneVisibility(!1);
	}
	runSplatSort = function() {
		let e = new Y(), t = [], n = new K(0, 0, -1), r = new K(0, 0, -1), i = new K(), a = new K(), o = [], s = [
			{
				angleThreshold: .55,
				sortFractions: [
					.125,
					.33333,
					.75
				]
			},
			{
				angleThreshold: .65,
				sortFractions: [.33333, .66667]
			},
			{
				angleThreshold: .8,
				sortFractions: [.5]
			}
		];
		return function(c = !1, l = !1) {
			if (!this.initialized) return Promise.resolve(!1);
			if (this.sortRunning) return Promise.resolve(!0);
			if (this.splatMesh.getSplatCount() <= 0) return this.splatRenderCount = 0, Promise.resolve(!1);
			let u = 0, d = 0, f = !1, p = !1;
			if (r.set(0, 0, -1).applyQuaternion(this.camera.quaternion), u = r.dot(n), d = a.copy(this.camera.position).sub(i).length(), !c && !this.splatMesh.dynamicMode && o.length === 0 && (u <= .99 && (f = !0), d >= 1 && (p = !0), !f && !p)) return Promise.resolve(!1);
			this.sortRunning = !0;
			let { splatRenderCount: m, shouldSortAll: h } = this.gatherSceneNodesForSort();
			h ||= l, this.splatRenderCount = m, e.copy(this.camera.matrixWorld).invert();
			let g = this.perspectiveCamera || this.camera;
			e.premultiply(g.projectionMatrix), this.splatMesh.dynamicMode || e.multiply(this.splatMesh.matrixWorld);
			let _ = Promise.resolve(!0);
			return this.gpuAcceleratedSort && (o.length <= 1 || o.length % 2 == 0) && (_ = this.splatMesh.computeDistancesOnGPU(e, this.sortWorkerPrecomputedDistances)), _.then(() => {
				if (o.length === 0) if (this.splatMesh.dynamicMode || h) o.push(this.splatRenderCount);
				else {
					for (let e of s) if (u < e.angleThreshold) {
						for (let t of e.sortFractions) o.push(Math.floor(this.splatRenderCount * t));
						break;
					}
					o.push(this.splatRenderCount);
				}
				let a = Math.min(o.shift(), this.splatRenderCount);
				this.splatSortCount = a, t[0] = this.camera.position.x, t[1] = this.camera.position.y, t[2] = this.camera.position.z;
				let c = {
					modelViewProj: e.elements,
					cameraPosition: t,
					splatRenderCount: this.splatRenderCount,
					splatSortCount: a,
					usePrecomputedDistances: this.gpuAcceleratedSort
				};
				return this.splatMesh.dynamicMode && this.splatMesh.fillTransformsArray(this.sortWorkerTransforms), this.sharedMemoryForWorkers || (c.indexesToSort = this.sortWorkerIndexesToSort, c.transforms = this.sortWorkerTransforms, this.gpuAcceleratedSort && (c.precomputedDistances = this.sortWorkerPrecomputedDistances)), this.sortPromise = new Promise((e) => {
					this.sortPromiseResolver = e;
				}), this.preSortMessages.length > 0 && (this.preSortMessages.forEach((e) => {
					this.sortWorker.postMessage(e);
				}), this.preSortMessages = []), this.sortWorker.postMessage({ sort: c }), o.length === 0 && (i.copy(this.camera.position), n.copy(r)), !0;
			}), _;
		};
	}();
	gatherSceneNodesForSort = function() {
		let e = [], t = null, n = new K(), r = new K(), i = new K(), a = new Y(), o = new Y(), s = new Y(), c = new K(), l = new K(0, 0, -1), u = new K(), d = (e) => u.copy(e.max).sub(e.min).length();
		return function(u = !1) {
			this.getRenderDimensions(c);
			let f = c.y / 2 / Math.tan(this.camera.fov / 2 * Dt.DEG2RAD), p = Math.atan(c.x / 2 / f), m = Math.atan(c.y / 2 / f), h = Math.cos(p), g = Math.cos(m), _ = this.splatMesh.getSplatTree();
			if (_) {
				o.copy(this.camera.matrixWorld).invert(), this.splatMesh.dynamicMode || o.multiply(this.splatMesh.matrixWorld);
				let t = 0, c = 0;
				for (let f = 0; f < _.subTrees.length; f++) {
					let p = _.subTrees[f];
					a.copy(o), this.splatMesh.dynamicMode && (this.splatMesh.getSceneTransform(f, s), a.multiply(s));
					let m = p.nodesWithIndexes.length;
					for (let o = 0; o < m; o++) {
						let s = p.nodesWithIndexes[o];
						if (!s.data || !s.data.indexes || s.data.indexes.length === 0) continue;
						i.copy(s.center).applyMatrix4(a);
						let f = i.length();
						i.normalize(), n.copy(i).setX(0).normalize(), r.copy(i).setY(0).normalize();
						let m = l.dot(r), _ = l.dot(n), v = d(s), y = _ < g - .6, b = m < h - .6;
						!u && (b || y) && f > v || (c += s.data.indexes.length, e[t] = s, s.data.distanceToNode = f, t++);
					}
				}
				e.length = t, e.sort((e, t) => e.data.distanceToNode < t.data.distanceToNode ? -1 : 1);
				let f = c * al.BytesPerInt;
				for (let n = 0; n < t; n++) {
					let t = e[n], r = t.data.indexes.length, i = r * al.BytesPerInt;
					new Uint32Array(this.sortWorkerIndexesToSort.buffer, f - i, r).set(t.data.indexes), f -= i;
				}
				return {
					splatRenderCount: c,
					shouldSortAll: !1
				};
			} else {
				let e = this.splatMesh.getSplatCount();
				if (!t || t.length !== e) {
					t = new Uint32Array(e);
					for (let n = 0; n < e; n++) t[n] = n;
				}
				return this.sortWorkerIndexesToSort.set(t), {
					splatRenderCount: e,
					shouldSortAll: !0
				};
			}
		};
	}();
	getSplatMesh() {
		return this.splatMesh;
	}
	getSplatScene(e) {
		return this.splatMesh.getScene(e);
	}
	getSceneCount() {
		return this.splatMesh.getSceneCount();
	}
	isMobile() {
		return navigator.userAgent.includes("Mobi");
	}
}, jf = Math.PI / 2 - .03, Mf = .035, Nf = .003;
function Pf(e, t) {
	let n = t.camera, r = 0, i = 0, a = !1, o = null, s = /* @__PURE__ */ new Set(), c = null, l = new K(), u = new ResizeObserver(() => {
		n.aspect = e.clientWidth / e.clientHeight, n.updateProjectionMatrix(), t.forceRenderNextFrame();
	});
	e.tabIndex = 0;
	function d() {
		i = Math.max(-jf, Math.min(jf, i)), l.set(Math.sin(r) * Math.cos(i), -Math.sin(i), Math.cos(r) * Math.cos(i)), n.position.set(0, 0, 0), n.up.set(0, -1, 0), n.lookAt(l), t.forceRenderNextFrame();
	}
	function f() {
		let e = !1;
		(s.has("KeyA") || s.has("ArrowLeft")) && (r -= Mf, e = !0), (s.has("KeyD") || s.has("ArrowRight")) && (r += Mf, e = !0), (s.has("KeyW") || s.has("ArrowUp")) && (i += Mf, e = !0), (s.has("KeyS") || s.has("ArrowDown")) && (i -= Mf, e = !0), e && d(), c = s.size ? requestAnimationFrame(f) : null;
	}
	function p(e) {
		[
			"KeyW",
			"KeyA",
			"KeyS",
			"KeyD",
			"ArrowUp",
			"ArrowLeft",
			"ArrowDown",
			"ArrowRight"
		].includes(e.code) && (e.preventDefault(), s.add(e.code), c ||= requestAnimationFrame(f));
	}
	function m(e) {
		s.delete(e.code);
	}
	function h(t) {
		t.button === 0 && (a = !0, o = {
			x: t.clientX,
			y: t.clientY
		}, e.setPointerCapture(t.pointerId), e.focus({ preventScroll: !0 }));
	}
	function g(e) {
		if (!a || !o) return;
		let t = e.clientX - o.x, n = e.clientY - o.y;
		r -= t * Nf, i += n * Nf, o = {
			x: e.clientX,
			y: e.clientY
		}, d();
	}
	function _(t) {
		a = !1, o = null, e.hasPointerCapture(t.pointerId) && e.releasePointerCapture(t.pointerId);
	}
	return e.addEventListener("keydown", p), e.addEventListener("keyup", m), e.addEventListener("pointerdown", h), e.addEventListener("pointermove", g), e.addEventListener("pointerup", _), e.addEventListener("pointercancel", _), u.observe(e), d(), () => {
		e.removeEventListener("keydown", p), e.removeEventListener("keyup", m), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", g), e.removeEventListener("pointerup", _), e.removeEventListener("pointercancel", _), u.disconnect(), c && cancelAnimationFrame(c);
	};
}
async function Ff(e, t) {
	let n = new ia(70, e.clientWidth / e.clientHeight, .02, 2e3);
	n.position.set(0, 0, 0), n.up.set(0, -1, 0), n.lookAt(new K(0, 0, 1));
	let r = new Af({
		rootElement: e,
		camera: n,
		useBuiltInControls: !1,
		sharedMemoryForWorkers: !1,
		gpuAcceleratedSort: !1,
		integerBasedSort: !1,
		renderMode: Cf.Always,
		sceneRevealMode: Yd.Default,
		logLevel: Xd.None
	});
	await r.addSplatScene(t.url, {
		format: fd.Splat,
		progressiveLoad: !0,
		showLoadingUI: !0,
		splatAlphaRemovalThreshold: 1
	}), r.start();
	let i = Pf(e, r);
	return e.focus({ preventScroll: !0 }), {
		viewer: r,
		async dispose() {
			i(), await r.dispose(), e.replaceChildren();
		}
	};
}
//#endregion
export { Ff as mountSplatViewer };
