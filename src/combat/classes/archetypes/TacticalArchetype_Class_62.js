/**
 * TacticalArchetype_Class_62.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 62
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_62 {
  constructor() {
    this.classId = 'ARCHETYPE_62';
    this.baseHealth = 1120;
    this.baseAttack = 164;
    this.baseDefense = 154;
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

module.exports = TacticalArchetype_Class_62;
