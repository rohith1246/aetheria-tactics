/**
 * ElectromancyShieldAbility.js
 * School: electromancy | Form: Shield
 * Tactical Combat Ability Engine Specification
 */

class ElectromancyShieldAbility {
  constructor(config = {}) {
    this.id = 'ability_electromancy_shield';
    this.name = 'ElectromancyShield';
    this.school = 'electromancy';
    this.archetype = 'Shield';
    this.tier = 4;
    this.manaCost = config.manaCost || 37;
    this.staminaCost = config.staminaCost || 10;
    this.baseCooldown = config.cooldown || 4;
    this.currentCooldown = 0;
    this.basePower = config.basePower || 94;
    this.castRange = config.castRange || 5;
    this.areaOfEffectRadius = config.radius || 1;
    this.castTimeTicks = config.castTime || 3;
    this.statusEffectId = 'status_electromancy_shield';
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

module.exports = { ElectromancyShieldAbility };
