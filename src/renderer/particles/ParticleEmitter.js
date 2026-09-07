/**
 * ParticleEmitter.js - High-Throughput 2D Particle Simulator
 * Part of Aetheria Tactics Engine
 */

class Particle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.life = 0;
    this.maxLife = 1;
    this.color = '#00f0ff';
    this.size = 2;
    this.active = false;
  }
}

class ParticleEmitter {
  constructor(poolSize = 1000) {
    this.poolSize = poolSize;
    this.particles = Array.from({ length: poolSize }, () => new Particle());
  }

  emit(x, y, count = 20, options = {}) {
    let spawned = 0;
    for (let i = 0; i < this.poolSize && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        p.x = x;
        p.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = (options.speed || 50) * (0.5 + Math.random() * 0.5);
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.life = 0;
        p.maxLife = options.duration || 0.5;
        p.color = options.color || '#00f0ff';
        p.size = options.size || 3;
        p.active = true;
        spawned++;
      }
    }
  }

  update(dt) {
    for (let i = 0; i < this.poolSize; i++) {
      const p = this.particles[i];
      if (p.active) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life += dt;
        if (p.life >= p.maxLife) {
          p.active = false;
        }
      }
    }
  }

  getActiveCount() {
    return this.particles.filter(p => p.active).length;
  }
}

module.exports = ParticleEmitter;
