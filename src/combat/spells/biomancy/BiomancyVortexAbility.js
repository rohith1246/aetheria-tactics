/**
 * BiomancyVortexAbility.js
 * School: biomancy | Form: Vortex
 * Tactical Combat Ability Engine Specification
 */

class BiomancyVortexAbility {
  constructor(config = {}) {
    this.id = 'ability_biomancy_vortex';
    this.name = 'BiomancyVortex';
    this.school = 'biomancy';
    this.archetype = 'Vortex';
    this.tier = 2;
    this.manaCost = config.manaCost || 67;
    this.staminaCost = config.staminaCost || 20;
    this.baseCooldown = config.cooldown || 2;
    this.currentCooldown = 0;
    this.basePower = config.basePower || 170;
    this.castRange = config.castRange || 2;
    this.areaOfEffectRadius = config.radius || 3;
    this.castTimeTicks = config.castTime || 3;
    this.statusEffectId = 'status_biomancy_vortex';
    this.criticalMultiplier = 1.5 + (sIdx * 0.05);
  }

  isAvailable() {
    return this.currentCooldown === 0;
  }

  tickCooldown() {
    if (this.currentCooldown > 0) {
      this.currentCooldown -= 1;
    }
  }

  calculateDamage(caster, target, environmentState = {}) {
    const baseStat = (caster && caster.spellPower) ? caster.spellPower : 25;
    const affinityBonus = (caster && caster.affinities && caster.affinities[this.school]) ? caster.affinities[this.school] : 1.0;
    const targetResistance = (target && target.resistances && target.resistances[this.school]) ? target.resistances[this.school] : 0;
    const envModifier = environmentState.weatherMultiplier || 1.0;

    const rawDamage = (this.basePower + baseStat * 1.35) * affinityBonus * envModifier;
    const mitigated = Math.max(1, Math.round(rawDamage * (1 - targetResistance / 100)));
    const isCrit = Math.random() < ((caster && caster.critRate) ? caster.critRate : 0.08);

    return {
      abilityId: this.id,
      school: this.school,
      damage: isCrit ? Math.round(mitigated * this.criticalMultiplier) : mitigated,
      isCritical: isCrit,
      statusInflicted: this.statusEffectId,
      mitigationAmount: Math.round(rawDamage - mitigated)
    };
  }

  execute(caster, targetCoordinates, battleGrid) {
    if (!this.isAvailable()) {
      return { success: false, reason: 'Ability on cooldown' };
    }
    if (caster.currentMana < this.manaCost) {
      return { success: false, reason: 'Insufficient mana reserves' };
    }

    caster.currentMana -= this.manaCost;
    this.currentCooldown = this.baseCooldown;

    const targets = battleGrid.getEntitiesInArea(targetCoordinates, this.areaOfEffectRadius);
    const results = targets.map(unit => {
      const outcome = this.calculateDamage(caster, unit, battleGrid.environment);
      unit.takeDamage(outcome.damage, outcome.school);
      return { unitId: unit.id, ...outcome };
    });

    return {
      success: true,
      ability: this.name,
      casterId: caster.id,
      center: targetCoordinates,
      affectedUnits: results
    };
  }
}

module.exports = { BiomancyVortexAbility };
