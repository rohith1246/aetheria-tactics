/**
 * TacticalArchetype_Class_63.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 63
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_63 {
  constructor() {
    this.classId = 'ARCHETYPE_63';
    this.baseHealth = 1130;
    this.baseAttack = 166;
    this.baseDefense = 156;
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

module.exports = TacticalArchetype_Class_63;
