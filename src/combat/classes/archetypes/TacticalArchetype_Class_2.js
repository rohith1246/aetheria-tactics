/**
 * TacticalArchetype_Class_2.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 2
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_2 {
  constructor() {
    this.classId = 'ARCHETYPE_2';
    this.baseHealth = 520;
    this.baseAttack = 44;
    this.baseDefense = 34;
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

module.exports = TacticalArchetype_Class_2;
