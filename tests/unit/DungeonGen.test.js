const assert = require('assert');
const BSPDungeon = require('../../src/world/dungeon/BSPDungeon');
const PerlinNoise = require('../../src/world/noise/PerlinNoise');

module.exports = function testDungeonGen() {
  console.log('  * Running DungeonGen tests...');
  const dungeon = new BSPDungeon(48, 48, 3);
  const grid = dungeon.generate();

  assert.strictEqual(grid.length, 48);
  assert.strictEqual(grid[0].length, 48);

  let floorCount = 0;
  for (let r = 0; r < 48; r++) {
    for (let c = 0; c < 48; c++) {
      if (grid[r][c] === 1) floorCount++;
    }
  }
  assert(floorCount > 100, 'Dungeon should carve floor cells');

  const perlin = new PerlinNoise(42);
  const val = perlin.fBm(5.5, 8.2);
  assert(typeof val === 'number', 'Perlin noise should return numerical value');

  console.log('    [PASS] BSP Dungeon & Perlin Noise tests passed.');
};
