/**
 * Aetheria Tactics Engine - Master Automated Test Runner
 */

const testECS = require('./unit/ECS.test');
const testMath2D = require('./unit/Math2D.test');
const testSATCollision = require('./unit/SATCollision.test');
const testDungeonGen = require('./unit/DungeonGen.test');
const testCombatFormulas = require('./unit/CombatFormulas.test');
const testPathfinding = require('./unit/Pathfinding.test');
const testSoundSynth = require('./unit/SoundSynth.test');
const testCraftingEconomy = require('./unit/CraftingEconomy.test');

console.log('================================================================');
console.log('  🚀 AETHERIA TACTICS - MASTER AUTOMATED TEST SUITES EXECUTION');
console.log('================================================================');

try {
  testECS();
  testMath2D();
  testSATCollision();
  testDungeonGen();
  testCombatFormulas();
  testPathfinding();
  testSoundSynth();
  testCraftingEconomy();

  console.log('================================================================');
  console.log('  ✅ ALL 8 TEST SUITES EXECUTED & PASSED (100% SUCCESS)');
  console.log('================================================================');
} catch (err) {
  console.error('❌ Test suite failed:', err);
  process.exit(1);
}
