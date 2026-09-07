/**
 * TacticalArchetype_Class_1.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 1
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_1 {
  constructor() {
    this.classId = 'ARCHETYPE_1';
    this.baseHealth = 510;
    this.baseAttack = 42;
    this.baseDefense = 32;
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

module.exports = TacticalArchetype_Class_1;
