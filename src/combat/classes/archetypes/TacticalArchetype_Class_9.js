/**
 * TacticalArchetype_Class_9.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 9
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_9 {
  constructor() {
    this.classId = 'ARCHETYPE_9';
    this.baseHealth = 590;
    this.baseAttack = 58;
    this.baseDefense = 48;
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

module.exports = TacticalArchetype_Class_9;
