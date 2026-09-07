/**
 * TacticalArchetype_Class_4.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 4
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_4 {
  constructor() {
    this.classId = 'ARCHETYPE_4';
    this.baseHealth = 540;
    this.baseAttack = 48;
    this.baseDefense = 38;
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

module.exports = TacticalArchetype_Class_4;
