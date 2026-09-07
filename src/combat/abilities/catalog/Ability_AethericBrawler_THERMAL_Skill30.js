/**
 * Ability_AethericBrawler_THERMAL_Skill30.js - Tactical RPG Combat Ability System
 * Archetype: AethericBrawler | Element: THERMAL
 * Part of Aetheria Tactics Engine
 */

class Ability_AethericBrawler_THERMAL_Skill30 {
  constructor() {
    this.id = 'SKILL_30';
    this.name = 'Ability_AethericBrawler_THERMAL_Skill30';
    this.archetype = 'AethericBrawler';
    this.element = 'THERMAL';
    this.apCost = 3;
    this.basePower = 230;
    this.critChance = 0.20;
    this.rangeTiles = 1;
    this.cooldownTurns = 2;
    this.currentCooldown = 0;
  }

  canCast(caster, targetDistance) {
    if (this.currentCooldown > 0) return { allowed: false, reason: 'ON_COOLDOWN' };
    if (caster.currentAp < this.apCost) return { allowed: false, reason: 'INSUFFICIENT_AP' };
    if (targetDistance > this.rangeTiles) return { allowed: false, reason: 'OUT_OF_RANGE' };
    return { allowed: true };
  }

  execute(caster, target, envModifiers = {}) {
    const check = this.canCast(caster, envModifiers.distance || 1);
    if (!check.allowed) return check;

    caster.currentAp -= this.apCost;
    this.currentCooldown = this.cooldownTurns;

    // Calculate Damage & Elemental Scaling
    const isCrit = Math.random() < this.critChance;
    const critMultiplier = isCrit ? (caster.critMultiplier || 2.0) : 1.0;
    const elementalMultiplier = envModifiers.elementalWeakness === this.element ? 1.5 : 1.0;

    const rawDamage = (this.basePower + (caster.stats?.attack || 20) * 1.5) * critMultiplier * elementalMultiplier;
    const targetArmor = target.stats?.armor || 0;
    const netDamage = Math.max(1, Math.round(rawDamage * (100 / (100 + targetArmor))));

    target.currentHp = Math.max(0, (target.currentHp || target.hp) - netDamage);

    return {
      success: true,
      skillName: this.name,
      damageDealt: netDamage,
      isCrit,
      element: this.element,
      targetHpRemaining: target.currentHp,
      apRemaining: caster.currentAp
    };
  }

  onTurnEnd() {
    if (this.currentCooldown > 0) {
      this.currentCooldown--;
    }
  }
}

module.exports = Ability_AethericBrawler_THERMAL_Skill30;
