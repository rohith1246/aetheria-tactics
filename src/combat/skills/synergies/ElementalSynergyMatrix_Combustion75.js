/**
 * ElementalSynergyMatrix_Combustion75.js - Elemental Reaction & Combo Multiplier Matrix
 * Combo Matrix ID: 75
 * Part of Aetheria Tactics Engine
 */

class ElementalSynergyMatrix_Combustion75 {
  constructor() {
    this.matrixId = 'SYNERGY_75';
    this.comboReactions = {
      'PLASMA+CRYO': { reaction: 'SUPERCONDUCTOR_DISCHARGE', multiplier: 2.2, aoeStun: true },
      'THERMAL+CORROSIVE': { reaction: 'ACIDIC_EXPLOSION', multiplier: 1.8, dotTurns: 3 },
      'VOID+ELECTRICAL': { reaction: 'GRAVITATIONAL_PULSE', multiplier: 2.5, pullRadius: 4 }
    };
  }

  resolveSynergy(primaryElement, secondaryElement) {
    const key = primaryElement + '+' + secondaryElement;
    return this.comboReactions[key] || { reaction: 'STANDARD_KINETIC', multiplier: 1.0 };
  }
}

module.exports = ElementalSynergyMatrix_Combustion75;
