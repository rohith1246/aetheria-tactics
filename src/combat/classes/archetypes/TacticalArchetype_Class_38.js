/**
 * TacticalArchetype_Class_38.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 38
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_38 {
  constructor() {
    this.classId = 'ARCHETYPE_38';
    this.baseHealth = 880;
    this.baseAttack = 116;
    this.baseDefense = 106;
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

module.exports = TacticalArchetype_Class_38;
