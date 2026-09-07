/**
 * EntityManager.js - 64-Bit BigInt Bitmask Entity Component System
 * Part of Aetheria Tactics Engine
 */

class EntityManager {
  constructor() {
    this.nextEntityId = 1;
    this.entities = new Set();
    this.masks = new Map(); // entityId -> BigInt mask
    this.components = new Map(); // componentName -> Map(entityId -> componentData)
    this.componentBits = new Map(); // componentName -> BigInt bit
    this.factories = new Map(); // componentName -> factory fn
    this.tags = new Map(); // entityId -> string tag
    this.nextBit = 1n;
  }

  registerComponent(name, factory = null) {
    if (!this.componentBits.has(name)) {
      this.componentBits.set(name, this.nextBit);
      this.components.set(name, new Map());
      if (factory) this.factories.set(name, factory);
      this.nextBit <<= 1n;
    }
  }

  createEntity(tag = null) {
    const id = this.nextEntityId++;
    this.entities.add(id);
    this.masks.set(id, 0n);
    if (tag) this.tags.set(id, tag);
    return id;
  }

  destroyEntity(entityId) {
    if (!this.entities.has(entityId)) return false;
    for (const [_, compMap] of this.components) {
      compMap.delete(entityId);
    }
    this.masks.delete(entityId);
    this.tags.delete(entityId);
    return this.entities.delete(entityId);
  }

  addComponent(entityId, componentName, data = null) {
    this.registerComponent(componentName);
    const bit = this.componentBits.get(componentName);
    const currentMask = this.masks.get(entityId) || 0n;
    this.masks.set(entityId, currentMask | bit);
    
    let compData = data;
    if (compData === null && this.factories.has(componentName)) {
      compData = this.factories.get(componentName)();
    }
    this.components.get(componentName).set(entityId, compData);
    return compData;
  }

  hasComponent(entityId, componentName) {
    if (!this.componentBits.has(componentName)) return false;
    const bit = this.componentBits.get(componentName);
    const mask = this.masks.get(entityId) || 0n;
    return (mask & bit) === bit;
  }

  getComponent(entityId, componentName) {
    return this.components.get(componentName)?.get(entityId) || null;
  }

  removeComponent(entityId, componentName) {
    if (!this.componentBits.has(componentName)) return false;
    const bit = this.componentBits.get(componentName);
    const currentMask = this.masks.get(entityId) || 0n;
    this.masks.set(entityId, currentMask & ~bit);
    this.components.get(componentName)?.delete(entityId);
    return true;
  }

  query(...componentNames) {
    let queryMask = 0n;
    for (const name of componentNames) {
      if (!this.componentBits.has(name)) return [];
      queryMask |= this.componentBits.get(name);
    }

    const matching = [];
    for (const id of this.entities) {
      const mask = this.masks.get(id) || 0n;
      if ((mask & queryMask) === queryMask) {
        matching.push(id);
      }
    }
    return matching;
  }
}

module.exports = EntityManager;
