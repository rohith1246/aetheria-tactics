/**
 * EquipmentAffixEngine.js - Algorithmic Item Affix & Crafting Progression Engine
 * Part of Aetheria Tactics Engine
 */

const RARITY_TIERS = {
  COMMON: { name: 'Common', affixes: 0, multiplier: 1.0, color: '#9d9d9d' },
  UNCOMMON: { name: 'Uncommon', affixes: 1, multiplier: 1.25, color: '#1eff00' },
  RARE: { name: 'Rare', affixes: 2, multiplier: 1.6, color: '#0070dd' },
  EPIC: { name: 'Epic', affixes: 3, multiplier: 2.1, color: '#a335ee' },
  LEGENDARY: { name: 'Legendary', affixes: 4, multiplier: 3.0, color: '#ff8000' }
};

const PREFIX_POOL = [
  { name: 'Overclocked', stat: 'attack', min: 10, max: 35, type: 'flat' },
  { name: 'Reinforced', stat: 'armor', min: 15, max: 50, type: 'flat' },
  { name: 'Hyper-Charged', stat: 'critChance', min: 0.05, max: 0.20, type: 'percent' },
  { name: 'Phase-Shifted', stat: 'evasion', min: 0.04, max: 0.15, type: 'percent' },
  { name: 'Thermal-Shielded', stat: 'heatResist', min: 10, max: 40, type: 'flat' },
  { name: 'Cryo-Stabilized', stat: 'coldResist', min: 10, max: 40, type: 'flat' },
  { name: 'Nano-Infused', stat: 'maxHp', min: 50, max: 200, type: 'flat' },
  { name: 'Volt-Sparked', stat: 'lightningDamage', min: 20, max: 60, type: 'flat' }
];

const SUFFIX_POOL = [
  { name: 'of Annihilation', stat: 'critMultiplier', min: 0.25, max: 0.75, type: 'percent' },
  { name: 'of Speed', stat: 'actionPoints', min: 1, max: 3, type: 'flat' },
  { name: 'of the Aegis', stat: 'shieldAbsorption', min: 40, max: 150, type: 'flat' },
  { name: 'of Piercing', stat: 'armorPenetration', min: 0.10, max: 0.35, type: 'percent' },
  { name: 'of Siphoning', stat: 'lifeSteal', min: 0.03, max: 0.12, type: 'percent' },
  { name: 'of Precision', stat: 'hitChance', min: 0.05, max: 0.18, type: 'percent' },
  { name: 'of the Chrono-Walker', stat: 'initiative', min: 5, max: 25, type: 'flat' }
];

class EquipmentAffixEngine {
  constructor(seed = 42) {
    this.seed = seed;
    this.prefixes = PREFIX_POOL;
    this.suffixes = SUFFIX_POOL;
    this.rarities = RARITY_TIERS;
  }

  _random() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  rollRarity(itemLevel = 1) {
    const r = this._random();
    const epicThreshold = 0.95 - Math.min(0.15, itemLevel * 0.002);
    const rareThreshold = 0.80 - Math.min(0.20, itemLevel * 0.004);
    const uncommonThreshold = 0.50 - Math.min(0.25, itemLevel * 0.005);

    if (r >= 0.98) return RARITY_TIERS.LEGENDARY;
    if (r >= epicThreshold) return RARITY_TIERS.EPIC;
    if (r >= rareThreshold) return RARITY_TIERS.RARE;
    if (r >= uncommonThreshold) return RARITY_TIERS.UNCOMMON;
    return RARITY_TIERS.COMMON;
  }

  rollAffix(pool, itemLevel = 1) {
    const index = Math.floor(this._random() * pool.length);
    const template = pool[index];
    const tierMultiplier = 1 + (itemLevel - 1) * 0.05;
    const value = template.min + this._random() * (template.max - template.min);
    const rolledVal = template.type === 'flat' 
      ? Math.round(value * tierMultiplier) 
      : Number((value * tierMultiplier).toFixed(4));

    return {
      name: template.name,
      stat: template.stat,
      type: template.type,
      value: rolledVal
    };
  }

  craftItem(baseItem, itemLevel = 1) {
    const rarity = this.rollRarity(itemLevel);
    const crafted = {
      id: `${baseItem.id}_${Date.now()}_${Math.floor(this._random() * 10000)}`,
      baseName: baseItem.name,
      fullName: baseItem.name,
      itemLevel,
      rarity: rarity.name,
      color: rarity.color,
      baseDamage: Math.round((baseItem.baseDamage || 50) * rarity.multiplier),
      baseArmor: Math.round((baseItem.baseArmor || 0) * rarity.multiplier),
      apCost: baseItem.apCost || 2,
      affixes: []
    };

    const numAffixes = rarity.affixes;
    const usedPrefixes = new Set();
    const usedSuffixes = new Set();

    let prefixName = '';
    let suffixName = '';

    for (let i = 0; i < numAffixes; i++) {
      if (i % 2 === 0 && usedPrefixes.size < this.prefixes.length) {
        let affix;
        do {
          affix = this.rollAffix(this.prefixes, itemLevel);
        } while (usedPrefixes.has(affix.name) && usedPrefixes.size < this.prefixes.length);
        usedPrefixes.add(affix.name);
        crafted.affixes.push({ type: 'PREFIX', ...affix });
        if (!prefixName) prefixName = affix.name;
      } else if (usedSuffixes.size < this.suffixes.length) {
        let affix;
        do {
          affix = this.rollAffix(this.suffixes, itemLevel);
        } while (usedSuffixes.has(affix.name) && usedSuffixes.size < this.suffixes.length);
        usedSuffixes.add(affix.name);
        crafted.affixes.push({ type: 'SUFFIX', ...affix });
        if (!suffixName) suffixName = affix.name;
      }
    }

    if (prefixName && suffixName) {
      crafted.fullName = `${prefixName} ${baseItem.name} ${suffixName}`;
    } else if (prefixName) {
      crafted.fullName = `${prefixName} ${baseItem.name}`;
    } else if (suffixName) {
      crafted.fullName = `${baseItem.name} ${suffixName}`;
    }

    return crafted;
  }
}

module.exports = EquipmentAffixEngine;
