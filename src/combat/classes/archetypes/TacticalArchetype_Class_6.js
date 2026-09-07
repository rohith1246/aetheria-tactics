/**
 * TacticalArchetype_Class_6.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 6
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_6 {
  constructor() {
    this.classId = 'ARCHETYPE_6';
    this.baseHealth = 560;
    this.baseAttack = 52;
    this.baseDefense = 42;
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

module.exports = TacticalArchetype_Class_6;
