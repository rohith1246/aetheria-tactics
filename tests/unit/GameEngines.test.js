const assert = require('assert');
const EntityManager = require('../../src/engine/ecs/EntityManager');
const SATCollision = require('../../src/engine/physics/SATCollision');
const BSPDungeonGenerator = require('../../src/world/dungeon/BSPDungeonGenerator');
const Math2D = require('../../src/engine/math/Math2D');
const TacticalMinimaxAI = require('../../src/ai/minimax/TacticalMinimaxAI');
const EquipmentAffixEngine = require('../../src/economy/crafting/EquipmentAffixEngine');
const SkillTreeEngine = require('../../src/combat/skills/SkillTreeEngine');
const { StatusEffectEngine } = require('../../src/combat/status/StatusEffectEngine');
const { Selector, Sequence, ConditionNode, ActionNode, NodeStatus } = require('../../src/ai/behavior_tree/BehaviorTreeEngine');
const WaveFunctionCollapse2D = require('../../src/world/wfc/WaveFunctionCollapse');

// 1. 64-Bit Bitmask ECS
const ecs = new EntityManager();
const e1 = ecs.createEntity();
ecs.addComponent(e1, 'Position', { x: 10, y: 20 });
ecs.addComponent(e1, 'Velocity', { vx: 2, vy: 0 });

const e2 = ecs.createEntity();
ecs.addComponent(e2, 'Position', { x: 50, y: 50 });

const movables = ecs.query('Position', 'Velocity');
assert.strictEqual(movables.length, 1);
assert.strictEqual(movables[0], e1);
assert.strictEqual(ecs.hasComponent(e1, 'Position'), true);

// 2. Separating Axis Theorem (SAT) Polygon Overlap
const box1 = [[0, 0], [20, 0], [20, 20], [0, 20]];
const box2 = [[10, 10], [30, 10], [30, 30], [10, 30]];
const box3 = [[100, 100], [120, 100], [120, 120], [100, 120]];

assert.strictEqual(SATCollision.checkCollision(box1, box2).collided, true);
assert.strictEqual(SATCollision.checkCollision(box1, box3).collided, false);

// 3. BSP Procedural Dungeon Generator
const dungeon = new BSPDungeonGenerator(40, 30, 5);
const map = dungeon.generate();
assert.ok(map.rooms.length >= 2);
assert.strictEqual(map.grid.length, 30);
assert.strictEqual(map.grid[0].length, 40);

// 4. Tactical Minimax AI
const minimaxAI = new TacticalMinimaxAI(3);
const gameState = {
  friendlyUnits: [{ id: 'f1', x: 2, y: 2, hp: 100 }],
  enemyUnits: [{ id: 'e1', x: 4, y: 4, hp: 80 }],
  gridWidth: 10,
  gridHeight: 10
};
const aiDecision = minimaxAI.getBestAction(gameState);
assert.ok(aiDecision !== null);

// 5. Equipment Affix Engine
const affixEngine = new EquipmentAffixEngine(999);
const crafted = affixEngine.craftItem({ id: 'WP_1', name: 'Laser Saber', baseDamage: 120 }, 5);
assert.ok(crafted.fullName);
assert.ok(crafted.baseDamage >= 120);

// 6. Skill Tree Engine
const tree = new SkillTreeEngine('tactics');
tree.registerSkill('S1', 'Snipe', { maxPoints: 2, statModifiers: { attackBonus: 15 } });
tree.registerSkill('S2', 'Assassinate', { maxPoints: 1, prerequisites: ['S1'], statModifiers: { critRate: 0.1 } });
tree.allocatePoint('S1');
tree.allocatePoint('S1');
assert.strictEqual(tree.canAllocate('S2').allowed, true);
tree.allocatePoint('S2');
const stats = tree.calculateAggregateStats();
assert.strictEqual(stats.attackBonus, 30);

// 7. Status Effect Engine
const statusEngine = new StatusEffectEngine();
statusEngine.applyEffect('hero', 'STUN', 1);
assert.strictEqual(statusEngine.isImmobilized('hero'), true);

// 8. Behavior Tree AI
const bb = { hp: 10, maxHp: 100, healed: false };
const action = new ActionNode(b => { b.healed = true; return NodeStatus.SUCCESS; });
const cond = new ConditionNode(b => b.hp < 30);
const seq = new Sequence([cond, action]);
assert.strictEqual(seq.evaluate(bb), NodeStatus.SUCCESS);
assert.strictEqual(bb.healed, true);

// 9. Wave Function Collapse
const tileset = [
  { id: 0, name: 'FLOOR', allowedNeighbors: { N: [0, 1], S: [0, 1], E: [0, 1], W: [0, 1] } },
  { id: 1, name: 'WALL', allowedNeighbors: { N: [0, 1], S: [0, 1], E: [0, 1], W: [0, 1] } }
];
const wfc = new WaveFunctionCollapse2D(8, 8, tileset);
const wfcGrid = wfc.generate();
assert.strictEqual(wfcGrid.length, 8);

console.log('✅ All 9 Aetheria Tactics Game Engine Core Test Suites Passed Successfully!');
