const assert = require('assert');
const EntityManager = require('../../src/engine/ecs/EntityManager');
const SpatialGrid = require('../../src/engine/ecs/SpatialGrid');

module.exports = function testECS() {
  console.log('  * Running ECS tests...');
  const em = new EntityManager();
  em.registerComponent('Position', () => ({ x: 0, y: 0 }));
  em.registerComponent('Health', () => ({ hp: 100 }));

  const e1 = em.createEntity('player');
  em.addComponent(e1, 'Position', { x: 10, y: 20 });
  em.addComponent(e1, 'Health', { hp: 150 });

  assert.strictEqual(em.hasComponent(e1, 'Position'), true, 'e1 should have Position');
  assert.strictEqual(em.getComponent(e1, 'Health').hp, 150, 'Health should be 150');

  const queryResult = em.query('Position', 'Health');
  assert.strictEqual(queryResult.length, 1, 'Query should return 1 matching entity');

  const grid = new SpatialGrid(64, 512, 512);
  grid.insert(e1, 10, 20);
  const near = grid.queryRadius(10, 20, 50);
  assert(near.includes(e1), 'Spatial grid query should find e1');

  console.log('    [PASS] ECS and SpatialGrid tests passed.');
};
