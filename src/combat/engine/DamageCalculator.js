/**
 * DamageCalculator.js - Multi-Element Combat Damage, Mitigation & Critical Strike Math
 * Part of Aetheria Tactics Engine
 */

const ELEMENTS = {
  PHYSICAL: 'physical',
  PLASMA: 'plasma',
  CRYO: 'cryo',
  SHOCK: 'shock',
  VOID: 'void'
};

const ELEMENT_AFFINITY_MATRIX = {
  [ELEMENTS.PHYSICAL]: { [ELEMENTS.PHYSICAL]: 1.0, [ELEMENTS.PLASMA]: 1.0, [ELEMENTS.CRYO]: 1.0, [ELEMENTS.SHOCK]: 1.0, [ELEMENTS.VOID]: 1.0 },
  [ELEMENTS.PLASMA]:   { [ELEMENTS.PHYSICAL]: 1.0, [ELEMENTS.PLASMA]: 0.5, [ELEMENTS.CRYO]: 1.75, [ELEMENTS.SHOCK]: 1.25, [ELEMENTS.VOID]: 0.75 },
  [ELEMENTS.CRYO]:     { [ELEMENTS.PHYSICAL]: 1.0, [ELEMENTS.PLASMA]: 0.5, [ELEMENTS.CRYO]: 0.5, [ELEMENTS.SHOCK]: 1.5, [ELEMENTS.VOID]: 1.25 },
  [ELEMENTS.SHOCK]:    { [ELEMENTS.PHYSICAL]: 1.25, [ELEMENTS.PLASMA]: 1.5, [ELEMENTS.CRYO]: 0.75, [ELEMENTS.SHOCK]: 0.5, [ELEMENTS.VOID]: 1.0 },
  [ELEMENTS.VOID]:     { [ELEMENTS.PHYSICAL]: 1.5, [ELEMENTS.PLASMA]: 1.25, [ELEMENTS.CRYO]: 1.25, [ELEMENTS.SHOCK]: 1.25, [ELEMENTS.VOID]: 0.5 }
};

class DamageCalculator {
  static calculateDamage(attacker, defender, skill) {
    const basePower = skill.basePower || 10;
    const element = skill.element || ELEMENTS.PHYSICAL;
    const scalingStat = skill.scalingStat || 'attack'; // attack, tech, voidPower
    const attackerStat = attacker.stats[scalingStat] || 10;
    const defenderArmor = defender.stats.armor || 0;
    const defenderResistance = (defender.stats.resistances && defender.stats.resistances[element]) || 0;

    // 1. Raw Attack Output
    const variance = 0.9 + Math.random() * 0.2; // 90% - 110%
    const rawDamage = (basePower + attackerStat * 1.5) * variance;

    // 2. Critical Strike Roll
    const critChance = Math.min(0.85, (attacker.stats.critChance || 0.05) + (skill.bonusCrit || 0));
    const isCrit = Math.random() < critChance;
    const critMultiplier = isCrit ? (attacker.stats.critMultiplier || 1.75) : 1.0;

    // 3. Armor Mitigation (Diminishing returns formula: Damage * 100 / (100 + Armor))
    const armorMitigation = 100 / (100 + Math.max(0, defenderArmor - (skill.armorPenetration || 0)));

    // 4. Elemental Resistance & Weakness
    const targetElementAffinity = defender.baseElement || ELEMENTS.PHYSICAL;
    const elementMultiplier = (ELEMENT_AFFINITY_MATRIX[element] && ELEMENT_AFFINITY_MATRIX[element][targetElementAffinity]) || 1.0;
    const resistanceMitigation = Math.max(0.1, 1.0 - defenderResistance / 100);

    // 5. Final Damage Calculation
    const totalDamage = Math.max(1, Math.round(rawDamage * critMultiplier * armorMitigation * elementMultiplier * resistanceMitigation));

    return {
      damage: totalDamage,
      isCritical: isCrit,
      element,
      elementMultiplier,
      mitigatedByArmor: Math.round(rawDamage * (1 - armorMitigation)),
      mitigatedByResistance: Math.round(rawDamage * (1 - resistanceMitigation))
    };
  }
}

module.exports = { DamageCalculator, ELEMENTS };
