/**
 * StatusEffectEngine.js - Turn-Based Buff/Debuff Tick, Stacking & Dispel System
 * Part of Aetheria Tactics Engine
 */

const STATUS_TYPES = {
  STUN: { category: 'HARD_CC', preventsAction: true },
  FREEZE: { category: 'HARD_CC', preventsAction: true },
  BURN: { category: 'DOT', dotDamageType: 'THERMAL' },
  POISON: { category: 'DOT', dotDamageType: 'CORROSIVE' },
  BLEED: { category: 'DOT', dotDamageType: 'PHYSICAL' },
  HASTE: { category: 'BUFF', actionPointBonus: 1 },
  SHIELD: { category: 'BUFF', absorbsDamage: true }
};

class ActiveEffect {
  constructor(type, durationTurns, intensity = 1, sourceId = null) {
    this.type = type;
    this.definition = STATUS_TYPES[type] || { category: 'MISC' };
    this.durationTurns = durationTurns;
    this.intensity = intensity;
    this.sourceId = sourceId;
    this.stacks = 1;
  }
}

class StatusEffectEngine {
  constructor() {
    this.activeEffects = new Map(); // entityId -> Array of ActiveEffect
  }

  applyEffect(entityId, type, durationTurns = 3, intensity = 1, sourceId = null) {
    if (!this.activeEffects.has(entityId)) {
      this.activeEffects.set(entityId, []);
    }

    const effects = this.activeEffects.get(entityId);
    const existing = effects.find(e => e.type === type);

    if (existing) {
      existing.stacks += 1;
      existing.intensity += intensity;
      existing.durationTurns = Math.max(existing.durationTurns, durationTurns);
      return existing;
    }

    const newEffect = new ActiveEffect(type, durationTurns, intensity, sourceId);
    effects.push(newEffect);
    return newEffect;
  }

  isImmobilized(entityId) {
    const effects = this.activeEffects.get(entityId) || [];
    return effects.some(e => e.definition.preventsAction && e.durationTurns > 0);
  }

  processTurnStart(entityId) {
    const effects = this.activeEffects.get(entityId) || [];
    const report = {
      entityId,
      dotDamageTotal: 0,
      absorbedDamage: 0,
      actionPointBonus: 0,
      canAct: true,
      tickDetails: []
    };

    if (this.isImmobilized(entityId)) {
      report.canAct = false;
    }

    const surviving = [];
    for (const eff of effects) {
      if (eff.definition.category === 'DOT') {
        const dotDmg = eff.intensity * eff.stacks * 10;
        report.dotDamageTotal += dotDmg;
        report.tickDetails.push({ type: eff.type, damage: dotDmg, stacks: eff.stacks });
      }

      if (eff.definition.actionPointBonus) {
        report.actionPointBonus += eff.definition.actionPointBonus * eff.stacks;
      }

      eff.durationTurns -= 1;
      if (eff.durationTurns > 0) {
        surviving.push(eff);
      }
    }

    this.activeEffects.set(entityId, surviving);
    return report;
  }

  dispelCategory(entityId, category = 'DOT') {
    const effects = this.activeEffects.get(entityId) || [];
    const dispelled = effects.filter(e => e.definition.category === category);
    const retained = effects.filter(e => e.definition.category !== category);
    this.activeEffects.set(entityId, retained);
    return dispelled.length;
  }
}

module.exports = { StatusEffectEngine, STATUS_TYPES };
