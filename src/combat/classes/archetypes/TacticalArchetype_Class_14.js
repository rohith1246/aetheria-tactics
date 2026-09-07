/**
 * TacticalArchetype_Class_14.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 14
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_14 {
  constructor() {
    this.classId = 'ARCHETYPE_14';
    this.baseHealth = 640;
    this.baseAttack = 68;
    this.baseDefense = 58;
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

module.exports = TacticalArchetype_Class_14;
