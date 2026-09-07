/**
 * TacticalArchetype_Class_30.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 30
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_30 {
  constructor() {
    this.classId = 'ARCHETYPE_30';
    this.baseHealth = 800;
    this.baseAttack = 100;
    this.baseDefense = 90;
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

module.exports = TacticalArchetype_Class_30;
