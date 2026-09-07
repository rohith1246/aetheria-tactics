/**
 * SystemScheduler.js - Deterministic Priority-Based Tick & Execution Pipeline
 * Part of Aetheria Tactics Engine
 */

class SystemScheduler {
  constructor(entityManager) {
    this.em = entityManager;
    this.systems = []; // { name, system, priority, enabled, lastExecutionTime }
    this.lastTime = performance.now();
    this.accumulatedTime = 0;
    this.fixedDeltaTime = 1 / 60; // 60hz physics/logic
    this.isRunning = false;
    this.metrics = {
      fps: 0,
      frameCount: 0,
      totalDeltaTime: 0
    };
  }

  addSystem(name, systemInstance, priority = 100) {
    if (typeof systemInstance.update !== 'function') {
      throw new Error(System  must implement an update(deltaTime, entityManager) method);
    }
    this.systems.push({
      name,
      instance: systemInstance,
      priority,
      enabled: true,
      executionMs: 0
    });
    this.systems.sort((a, b) => a.priority - b.priority);
    if (typeof systemInstance.init === 'function') {
      systemInstance.init(this.em);
    }
    return this;
  }

  removeSystem(name) {
    this.systems = this.systems.filter(s => s.name !== name);
  }

  setSystemEnabled(name, isEnabled) {
    const sys = this.systems.find(s => s.name === name);
    if (sys) sys.enabled = isEnabled;
  }

  tick(currentTime = performance.now()) {
    const delta = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;
    const clampedDelta = Math.min(delta, 0.25); // Prevent spiral of death

    this.accumulatedTime += clampedDelta;

    // Fixed step updates
    while (this.accumulatedTime >= this.fixedDeltaTime) {
      for (const sys of this.systems) {
        if (sys.enabled) {
          const t0 = performance.now();
          sys.instance.update(this.fixedDeltaTime, this.em);
          sys.executionMs = performance.now() - t0;
        }
      }
      this.accumulatedTime -= this.fixedDeltaTime;
    }

    this.metrics.frameCount++;
    this.metrics.totalDeltaTime += clampedDelta;
    if (this.metrics.totalDeltaTime >= 1.0) {
      this.metrics.fps = this.metrics.frameCount;
      this.metrics.frameCount = 0;
      this.metrics.totalDeltaTime = 0;
    }
  }

  start() {
    this.isRunning = true;
    this.lastTime = performance.now();
  }

  stop() {
    this.isRunning = false;
  }
}

module.exports = SystemScheduler;
