/**
 * TacticalArchetype_Class_25.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 25
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_25 {
  constructor() {
    this.classId = 'ARCHETYPE_25';
    this.baseHealth = 750;
    this.baseAttack = 90;
    this.baseDefense = 80;
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

module.exports = TacticalArchetype_Class_25;
