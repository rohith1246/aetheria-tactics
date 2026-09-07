/**
 * PerlinNoise.js - Coherent 2D/3D Gradient Noise & Fractal Brownian Motion
 * Part of Aetheria Tactics Engine
 */

class PerlinNoise {
  constructor(seed = 1337) {
    this.seed = seed;
    this.p = new Uint8Array(512);
    this.permutation = new Uint8Array(256);
    this._initPermutation();
  }

  _initPermutation() {
    let s = this.seed;
    for (let i = 0; i < 256; i++) {
      s = (s * 16807) % 2147483647;
      this.permutation[i] = i;
    }
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      const tmp = this.permutation[i];
      this.permutation[i] = this.permutation[j];
      this.permutation[j] = tmp;
    }
    for (let i = 0; i < 512; i++) {
      this.p[i] = this.permutation[i & 255];
    }
  }

  _fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  _lerp(t, a, b) {
    return a + t * (b - a);
  }

  _grad(hash, x, y) {
    const h = hash & 7;
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise2D(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);

    const u = this._fade(xf);
    const v = this._fade(yf);

    const p = this.p;
    const A = p[X] + Y;
    const B = p[X + 1] + Y;

    return this._lerp(
      v,
      this._lerp(u, this._grad(p[A], xf, yf), this._grad(p[B], xf - 1, yf)),
      this._lerp(u, this._grad(p[A + 1], xf, yf - 1), this._grad(p[B + 1], xf - 1, yf - 1))
    );
  }

  fBm(x, y, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
    let total = 0;
    let frequency = 1.0;
    let amplitude = 1.0;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }

    return total / maxValue;
  }
}

module.exports = PerlinNoise;
