const assert = require('assert');
const AStarPathfinding = require('../../src/ai/pathfinding/AStarPathfinding');

module.exports = function testPathfinding() {
  console.log('  * Running Pathfinding tests...');
  // 10x10 open grid
  const pathfinder = new AStarPathfinding(10, 10, (x, y) => {
    if (x === 2 && y === 2) return false; // obstacle
    return true;
  });

  const path = pathfinder.findPath({ x: 0, y: 0 }, { x: 4, y: 4 });
  assert(path.length > 0, 'AStar should find a valid path');
  assert.strictEqual(path[path.length - 1].x, 4);
  assert.strictEqual(path[path.length - 1].y, 4);

  console.log('    [PASS] A* Pathfinding tests passed.');
};
