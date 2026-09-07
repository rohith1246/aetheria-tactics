/**
 * ChronomancyBlastAbility.js
 * School: chronomancy | Form: Blast
 * Tactical Combat Ability Engine Specification
 */

class ChronomancyBlastAbility {
  constructor(config = {}) {
    this.id = 'ability_chronomancy_blast';
    this.name = 'ChronomancyBlast';
    this.school = 'chronomancy';
    this.archetype = 'Blast';
    this.tier = 1;
    this.manaCost = config.manaCost || 36;
    this.staminaCost = config.staminaCost || 10;
    this.baseCooldown = config.cooldown || 1;
    this.currentCooldown = 0;
    this.basePower = config.basePower || 90;
    this.castRange = config.castRange || 2;
    this.areaOfEffectRadius = config.radius || 1;
    this.castTimeTicks = config.castTime || 2;
    this.statusEffectId = 'status_chronomancy_blast';
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

module.exports = { ChronomancyBlastAbility };
