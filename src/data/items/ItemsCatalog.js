/**
 * ItemsCatalog.js - Cyberpunk Affixes & Weapon Arsenal
 */

module.exports = {
  weapons: [
    { id: 'WEAPON_001', name: 'Plasma Railgun', damageType: 'PLASMA', baseDamage: 450, critMultiplier: 2.2, apCost: 2 },
    { id: 'WEAPON_002', name: 'Nano-Mono Katana', damageType: 'PHYSICAL', baseDamage: 380, critMultiplier: 2.5, apCost: 1 },
    { id: 'WEAPON_003', name: 'Heavy Arc Flak Cannon', damageType: 'ELECTRICAL', baseDamage: 620, critMultiplier: 1.8, apCost: 3 }
  ],
  affixes: [
    { id: 'AFFIX_01', type: 'PREFIX', name: 'Hyper-Overclocked', mod: '+45% Plasma Critical Damage', value: 0.45 },
    { id: 'AFFIX_02', type: 'SUFFIX', name: 'of the Chrono-Phase', mod: '+2 Action Points', value: 2 },
    { id: 'AFFIX_03', type: 'PREFIX', name: 'Nano-Weave Reinforced', mod: '+180 Shield Absorption', value: 180 }
  ]
};
