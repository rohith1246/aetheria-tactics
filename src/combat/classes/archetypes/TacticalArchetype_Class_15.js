/**
 * TacticalArchetype_Class_15.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 15
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_15 {
  constructor() {
    this.classId = 'ARCHETYPE_15';
    this.baseHealth = 650;
    this.baseAttack = 70;
    this.baseDefense = 60;
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

module.exports = TacticalArchetype_Class_15;
