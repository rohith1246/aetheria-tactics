/**
 * Ability_ChronoWarden_PLASMA_Skill77.js - Tactical RPG Combat Ability System
 * Archetype: ChronoWarden | Element: PLASMA
 * Part of Aetheria Tactics Engine
 */

class Ability_ChronoWarden_PLASMA_Skill77 {
  constructor() {
    this.id = 'SKILL_77';
    this.name = 'Ability_ChronoWarden_PLASMA_Skill77';
    this.archetype = 'ChronoWarden';
    this.element = 'PLASMA';
    this.apCost = 2;
    this.basePower = 465;
    this.critChance = 0.27;
    this.rangeTiles = 6;
    this.cooldownTurns = 1;
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

module.exports = Ability_ChronoWarden_PLASMA_Skill77;
