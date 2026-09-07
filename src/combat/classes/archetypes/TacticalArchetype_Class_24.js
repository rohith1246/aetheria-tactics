/**
 * TacticalArchetype_Class_24.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 24
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_24 {
  constructor() {
    this.classId = 'ARCHETYPE_24';
    this.baseHealth = 740;
    this.baseAttack = 88;
    this.baseDefense = 78;
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

module.exports = TacticalArchetype_Class_24;
