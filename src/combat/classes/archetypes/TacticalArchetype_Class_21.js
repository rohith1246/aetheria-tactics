/**
 * TacticalArchetype_Class_21.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 21
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_21 {
  constructor() {
    this.classId = 'ARCHETYPE_21';
    this.baseHealth = 710;
    this.baseAttack = 82;
    this.baseDefense = 72;
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

module.exports = TacticalArchetype_Class_21;
