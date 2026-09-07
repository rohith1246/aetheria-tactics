/**
 * TacticalArchetype_Class_73.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 73
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_73 {
  constructor() {
    this.classId = 'ARCHETYPE_73';
    this.baseHealth = 1230;
    this.baseAttack = 186;
    this.baseDefense = 176;
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

module.exports = TacticalArchetype_Class_73;
