/**
 * TacticalArchetype_Class_3.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 3
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_3 {
  constructor() {
    this.classId = 'ARCHETYPE_3';
    this.baseHealth = 530;
    this.baseAttack = 46;
    this.baseDefense = 36;
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

module.exports = TacticalArchetype_Class_3;
