/**
 * Math2D.js - High-performance Vector2D, Matrix3x3 & Raycasting Engine
 * Part of Aetheria Tactics Engine
 */

class Vector2D {
  constructor(x = 0, y = 0) {
    this.x = Number(x) || 0;
    this.y = Number(y) || 0;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  clone() {
    return new Vector2D(this.x, this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  divide(v) {
    this.x = v.x !== 0 ? this.x / v.x : 0;
    this.y = v.y !== 0 ? this.y / v.y : 0;
    return this;
  }

  divideScalar(s) {
    if (s === 0) return this.set(0, 0);
    this.x /= s;
    this.y /= s;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  magnitude() {
    return this.length();
  }

  normalize() {
    const len = this.length();
    if (len > 0.000001) {
      this.x /= len;
      this.y /= len;
    } else {
      this.x = 0;
      this.y = 0;
    }
    return this;
  }

  distanceTo(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  distanceToSq(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  manhattanDistance(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }

  chebyshevDistance(v) {
    return Math.max(Math.abs(this.x - v.x), Math.abs(this.y - v.y));
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  angleTo(v) {
    const dot = this.dot(v);
    const len = this.length() * v.length();
    if (len === 0) return 0;
    return Math.acos(Math.max(-1, Math.min(1, dot / len)));
  }

  rotate(rad) {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;
    this.x = x;
    this.y = y;
    return this;
  }

  rotateAround(center, rad) {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const cx = this.x - center.x;
    const cy = this.y - center.y;
    this.x = cx * cos - cy * sin + center.x;
    this.y = cx * sin + cy * cos + center.y;
    return this;
  }

  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }

  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }

  clampLength(min, max) {
    const len = this.length();
    if (len === 0) return this;
    const clamped = Math.max(min, Math.min(max, len));
    return this.scale(clamped / len);
  }

  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }

  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }

  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  perp() {
    const x = this.x;
    this.x = -this.y;
    this.y = x;
    return this;
  }

  rperp() {
    const x = this.x;
    this.x = this.y;
    this.y = -x;
    return this;
  }

  project(v) {
    const d = v.dot(v);
    if (d === 0) return this.set(0, 0);
    const s = this.dot(v) / d;
    return this.copy(v).scale(s);
  }

  reflect(normal) {
    const d = 2 * this.dot(normal);
    this.x -= d * normal.x;
    this.y -= d * normal.y;
    return this;
  }

  equals(v, eps = 0.00001) {
    return Math.abs(this.x - v.x) <= eps && Math.abs(this.y - v.y) <= eps;
  }

  toArray() {
    return [this.x, this.y];
  }

  toJSON() {
    return { x: this.x, y: this.y };
  }

  static fromAngle(rad, length = 1) {
    return new Vector2D(Math.cos(rad) * length, Math.sin(rad) * length);
  }

  static random(min = 0, max = 1) {
    return new Vector2D(
      min + Math.random() * (max - min),
      min + Math.random() * (max - min)
    );
  }

  static randomUnit() {
    const rad = Math.random() * Math.PI * 2;
    return new Vector2D(Math.cos(rad), Math.sin(rad));
  }
}

class Matrix3x3 {
  constructor() {
    this.elements = new Float32Array([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  identity() {
    this.set(
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    );
    return this;
  }

  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    const te = this.elements;
    te[0] = m00; te[1] = m10; te[2] = m20;
    te[3] = m01; te[4] = m11; te[5] = m21;
    te[6] = m02; te[7] = m12; te[8] = m22;
    return this;
  }

  clone() {
    const m = new Matrix3x3();
    m.elements.set(this.elements);
    return m;
  }

  copy(m) {
    this.elements.set(m.elements);
    return this;
  }

  multiply(m) {
    return this.multiplyMatrices(this, m);
  }

  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }

  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;

    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];

    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];

    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;

    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;

    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  multiplyScalar(s) {
    const te = this.elements;
    for (let i = 0; i < 9; i++) te[i] *= s;
    return this;
  }

  determinant() {
    const te = this.elements;
    const a = te[0], b = te[1], c = te[2];
    const d = te[3], e = te[4], f = te[5];
    const g = te[6], h = te[7], k = te[8];
    return a * (e * k - f * h) - b * (d * k - f * g) + c * (d * h - e * g);
  }

  invert() {
    const te = this.elements;
    const n11 = te[0], n21 = te[1], n31 = te[2];
    const n12 = te[3], n22 = te[4], n32 = te[5];
    const n13 = te[6], n23 = te[7], n33 = te[8];

    const t11 = n33 * n22 - n32 * n23;
    const t12 = n32 * n13 - n33 * n12;
    const t13 = n23 * n12 - n22 * n13;

    const det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.identity();

    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;

    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;

    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;

    return this;
  }

  transpose() {
    const te = this.elements;
    let tmp;
    tmp = te[1]; te[1] = te[3]; te[3] = tmp;
    tmp = te[2]; te[2] = te[6]; te[6] = tmp;
    tmp = te[5]; te[5] = te[7]; te[7] = tmp;
    return this;
  }

  makeTranslation(x, y) {
    this.set(
      1, 0, x,
      0, 1, y,
      0, 0, 1
    );
    return this;
  }

  makeRotation(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    this.set(
      c, -s, 0,
      s,  c, 0,
      0,  0, 1
    );
    return this;
  }

  makeScale(x, y) {
    this.set(
      x, 0, 0,
      0, y, 0,
      0, 0, 1
    );
    return this;
  }

  transformVector2D(v, out = new Vector2D()) {
    const te = this.elements;
    const x = v.x;
    const y = v.y;
    out.x = te[0] * x + te[3] * y + te[6];
    out.y = te[1] * x + te[4] * y + te[7];
    return out;
  }
}

module.exports = { Vector2D, Matrix3x3 };
