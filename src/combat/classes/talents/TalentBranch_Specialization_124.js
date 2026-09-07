/**
 * TalentBranch_Specialization_124.js - RPG Class Specialization & Passive Modifier Tree
 * Specialization ID: 124
 * Part of Aetheria Tactics Engine
 */

class TalentBranch_Specialization_124 {
  constructor(className = 'CyberClass_124') {
    this.specializationId = 'SPEC_124';
    this.className = className;
    this.tier1Points = 0;
    this.tier2Points = 0;
    this.tier3Points = 0;
  }

  allocate(tier, points = 1) {
    if (tier === 1) this.tier1Points = Math.min(5, this.tier1Points + points);
    if (tier === 2 && this.tier1Points >= 3) this.tier2Points = Math.min(5, this.tier2Points + points);
    if (tier === 3 && this.tier2Points >= 3) this.tier3Points = Math.min(1, this.tier3Points + points);

    return this.getCombatPassives();
  }

  getCombatPassives() {
    return {
      attackBonus: this.tier1Points * 8,
      critChanceBonus: this.tier2Points * 0.03,
      ultimateUnlocked: this.tier3Points > 0
    };
  }
}

module.exports = TalentBranch_Specialization_124;
