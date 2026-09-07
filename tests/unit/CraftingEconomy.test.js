const assert = require('assert');
const EquipmentAffixEngine = require('../../src/economy/crafting/EquipmentAffixEngine');
const ItemsCatalog = require('../../src/data/items/ItemsCatalog');

module.exports = function testCraftingEconomy() {
  console.log('  * Running CraftingEconomy tests...');
  const engine = new EquipmentAffixEngine(12345);
  
  assert.ok(engine.prefixes.length >= 5, 'Should have prefixes defined');
  assert.ok(engine.suffixes.length >= 5, 'Should have suffixes defined');
  assert.ok(ItemsCatalog.weapons.length >= 3, 'Should have catalog weapons');

  const baseWeapon = ItemsCatalog.weapons[0];
  const crafted = engine.craftItem(baseWeapon, 10);

  assert.ok(crafted.id, 'Crafted item must have an id');
  assert.ok(crafted.fullName, 'Crafted item must have a full name');
  assert.ok(crafted.baseDamage >= baseWeapon.baseDamage, 'Damage must scale with rarity');
  assert.ok(Array.isArray(crafted.affixes), 'Affixes must be an array');

  console.log(`    [PASS] Crafted: ${crafted.fullName} (Rarity: ${crafted.rarity}, DMG: ${crafted.baseDamage}, Affixes: ${crafted.affixes.length})`);
};
