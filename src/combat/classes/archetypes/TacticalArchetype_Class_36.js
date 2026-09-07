/**
 * TacticalArchetype_Class_36.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 36
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_36 {
  constructor() {
    this.classId = 'ARCHETYPE_36';
    this.baseHealth = 860;
    this.baseAttack = 112;
    this.baseDefense = 102;
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

module.exports = TacticalArchetype_Class_36;
