/**
 * TacticalArchetype_Class_33.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 33
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_33 {
  constructor() {
    this.classId = 'ARCHETYPE_33';
    this.baseHealth = 830;
    this.baseAttack = 106;
    this.baseDefense = 96;
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

module.exports = TacticalArchetype_Class_33;
