/**
 * EntityManager.js - High-throughput Archetype & Bitmask Entity Component System
 * Part of Aetheria Tactics Engine
 */

class EntityManager {
  constructor(initialCapacity = 5000) {
    this.capacity = initialCapacity;
    this.nextEntityId = 1;
    this.entities = new Set();
    this.entityMasks = new Map();
    this.components = new Map(); // componentName -> Map(entityId -> componentData)
    this.componentRegistry = new Map(); // componentName -> bitIndex
    this.nextBitIndex = 0;
    this.archetypes = new Map();
    this.eventListeners = new Map();
  }

  registerComponent(name, defaultFactory = () => ({})) {
    if (!this.componentRegistry.has(name)) {
      if (this.nextBitIndex >= 64) {
        throw new Error('Maximum component limit (64) reached for bitmask indexing');
      }
      this.componentRegistry.set(name, {
        bit: BigInt(1) << BigInt(this.nextBitIndex),
        factory: defaultFactory
      });
      this.components.set(name, new Map());
      this.nextBitIndex++;
    }
    return this;
  }

  createEntity(tag = '') {
    const id = this.nextEntityId++;
    this.entities.add(id);
    this.entityMasks.set(id, BigInt(0));
    this.emit('entityCreated', { id, tag });
    return id;
  }

  destroyEntity(id) {
    if (!this.entities.has(id)) return false;
    for (const [name, compMap] of this.components.entries()) {
      if (compMap.has(id)) {
        compMap.delete(id);
      }
    }
    this.entityMasks.delete(id);
    this.entities.delete(id);
    this.emit('entityDestroyed', { id });
    return true;
  }

  addComponent(entityId, componentName, data = {}) {
    if (!this.entities.has(entityId)) {
      throw new Error(`Entity ${entityId} does not exist`);
    }
    if (!this.componentRegistry.has(componentName)) {
      this.registerComponent(componentName);
    }

    const reg = this.componentRegistry.get(componentName);
    const factory = reg.factory;
    const finalData = Object.assign(factory(), data);

    this.components.get(componentName).set(entityId, finalData);
    const currentMask = this.entityMasks.get(entityId) || BigInt(0);
    this.entityMasks.set(entityId, currentMask | reg.bit);

    this.emit('componentAdded', { entityId, componentName, data: finalData });
    return finalData;
  }

  removeComponent(entityId, componentName) {
    if (!this.entities.has(entityId) || !this.componentRegistry.has(componentName)) {
      return false;
    }
    const reg = this.componentRegistry.get(componentName);
    const compMap = this.components.get(componentName);
    if (!compMap.has(entityId)) return false;

    compMap.delete(entityId);
    const currentMask = this.entityMasks.get(entityId) || BigInt(0);
    this.entityMasks.set(entityId, currentMask & ~reg.bit);

    this.emit('componentRemoved', { entityId, componentName });
    return true;
  }

  getComponent(entityId, componentName) {
    const compMap = this.components.get(componentName);
    return compMap ? compMap.get(entityId) : undefined;
  }

  hasComponent(entityId, componentName) {
    const reg = this.componentRegistry.get(componentName);
    if (!reg) return false;
    const mask = this.entityMasks.get(entityId) || BigInt(0);
    return (mask & reg.bit) === reg.bit;
  }

  query(...componentNames) {
    let targetMask = BigInt(0);
    for (const name of componentNames) {
      const reg = this.componentRegistry.get(name);
      if (!reg) return []; // If component not registered, no entity can match
      targetMask |= reg.bit;
    }

    const matchingEntities = [];
    for (const id of this.entities) {
      const mask = this.entityMasks.get(id) || BigInt(0);
      if ((mask & targetMask) === targetMask) {
        matchingEntities.push(id);
      }
    }
    return matchingEntities;
  }

  on(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(callback);
    return this;
  }

  emit(event, payload) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i](payload);
      }
    }
  }

  clear() {
    this.entities.clear();
    this.entityMasks.clear();
    for (const compMap of this.components.values()) {
      compMap.clear();
    }
    this.nextEntityId = 1;
  }
}

module.exports = EntityManager;
