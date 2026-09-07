/**
 * TacticalArchetype_Class_80.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 80
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_80 {
  constructor() {
    this.classId = 'ARCHETYPE_80';
    this.baseHealth = 1300;
    this.baseAttack = 200;
    this.baseDefense = 190;
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

module.exports = TacticalArchetype_Class_80;
