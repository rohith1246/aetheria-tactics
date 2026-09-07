/**
 * TacticalArchetype_Class_22.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 22
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_22 {
  constructor() {
    this.classId = 'ARCHETYPE_22';
    this.baseHealth = 720;
    this.baseAttack = 84;
    this.baseDefense = 74;
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

module.exports = TacticalArchetype_Class_22;
