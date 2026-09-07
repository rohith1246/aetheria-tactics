/**
 * TacticalArchetype_Class_60.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 60
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_60 {
  constructor() {
    this.classId = 'ARCHETYPE_60';
    this.baseHealth = 1100;
    this.baseAttack = 160;
    this.baseDefense = 150;
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

module.exports = TacticalArchetype_Class_60;
