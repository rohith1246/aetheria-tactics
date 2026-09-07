/**
 * TacticalArchetype_Class_20.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 20
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_20 {
  constructor() {
    this.classId = 'ARCHETYPE_20';
    this.baseHealth = 700;
    this.baseAttack = 80;
    this.baseDefense = 70;
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

module.exports = TacticalArchetype_Class_20;
