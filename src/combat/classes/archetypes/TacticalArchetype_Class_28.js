/**
 * TacticalArchetype_Class_28.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 28
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_28 {
  constructor() {
    this.classId = 'ARCHETYPE_28';
    this.baseHealth = 780;
    this.baseAttack = 96;
    this.baseDefense = 86;
    this.baseAp = 4;
  }

  getAttributes() {
    return {
      classId: this.classId,
      hp: this.baseHealth,
      atk: this.baseAttack,
      def: this.baseDefense,
      ap: this.baseAp
    };
  }
}

module.exports = TacticalArchetype_Class_28;
