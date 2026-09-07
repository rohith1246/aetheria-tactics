/**
 * TacticalArchetype_Class_13.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 13
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_13 {
  constructor() {
    this.classId = 'ARCHETYPE_13';
    this.baseHealth = 630;
    this.baseAttack = 66;
    this.baseDefense = 56;
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

module.exports = TacticalArchetype_Class_13;
