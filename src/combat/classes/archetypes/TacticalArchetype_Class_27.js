/**
 * TacticalArchetype_Class_27.js - Tactical RPG Class Definition & Base Stat Matrices
 * Class Index: 27
 * Part of Aetheria Tactics Engine
 */

class TacticalArchetype_Class_27 {
  constructor() {
    this.classId = 'ARCHETYPE_27';
    this.baseHealth = 770;
    this.baseAttack = 94;
    this.baseDefense = 84;
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

module.exports = TacticalArchetype_Class_27;
