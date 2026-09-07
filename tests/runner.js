console.log('=== RUNNING AETHERIA TACTICS GAME ENGINE TEST SUITE ===');

const tests = [
  { name: 'GameEngines (Bitmask ECS, SAT Collision, BSP Dungeon)', file: './unit/GameEngines.test.js' },
  { name: 'Math2D (Vector2D, Matrix3x3, Affine Transforms)', file: './unit/Math2D.test.js' },
  { name: 'SATCollision (Convex Polygons, MTV Resolution)', file: './unit/SATCollision.test.js' },
  { name: 'ECS (64-Bit Bitmask, SpatialGrid)', file: './unit/ECS.test.js' },
  { name: 'CombatFormulas (Damage & Resistances)', file: './unit/CombatFormulas.test.js' },
  { name: 'CraftingEconomy (Algorithmic Affixes & Scaling)', file: './unit/CraftingEconomy.test.js' },
  { name: 'DungeonGen (BSP Room Carver & 2D Perlin Noise)', file: './unit/DungeonGen.test.js' },
  { name: 'Pathfinding (A* Navigation Grid)', file: './unit/Pathfinding.test.js' },
  { name: 'SoundSynth (WebAudio SFX Presets)', file: './unit/SoundSynth.test.js' }
];

let passed = 0;
for (const test of tests) {
  try {
    const fn = require(test.file);
    if (typeof fn === 'function') {
      fn();
    }
    console.log(`✅ Passed Suite: ${test.name}`);
    passed++;
  } catch (err) {
    console.error(`❌ Failed Suite: ${test.name} -`, err.message);
    process.exit(1);
  }
}

console.log(`\n🎉 All ${passed}/${tests.length} Aetheria Tactics Test Suites Passed (100% Green).`);
