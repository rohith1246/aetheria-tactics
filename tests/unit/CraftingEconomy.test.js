const assert = require('assert');
const affixes = require('../../src/economy/crafting/EquipmentAffixEngine');
const monsters = require('../../src/data/monsters/MonstersDatabase');
const items = require('../../src/data/items/ItemsDatabase');

module.exports = function testCraftingEconomy() {
  console.log('  * Running CraftingEconomy tests...');
  assert(affixes.prefixes.length > 300, 'Should load over 300 prefixes');
  assert(affixes.suffixes.length > 300, 'Should load over 300 suffixes');
  assert(monsters.length > 200, 'Should load over 200 monster definitions');
  assert(items.length > 500, 'Should load over 500 item definitions');

  console.log('    [PASS] Crafting & Catalog datasets passed.');
};
