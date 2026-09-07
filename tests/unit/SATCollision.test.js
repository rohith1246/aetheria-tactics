const assert = require('assert');
const SATCollision = require('../../src/engine/physics/SATCollision');
const { Vector2D } = require('../../src/engine/math/Math2D');

module.exports = function testSATCollision() {
  console.log('  * Running SATCollision tests...');
  const polyA = [
    new Vector2D(0, 0), new Vector2D(10, 0), new Vector2D(10, 10), new Vector2D(0, 10)
  ];
  const polyB = [
    new Vector2D(5, 5), new Vector2D(15, 5), new Vector2D(15, 15), new Vector2D(5, 15)
  ];
  const polyC = [
    new Vector2D(20, 20), new Vector2D(30, 20), new Vector2D(30, 30), new Vector2D(20, 30)
  ];

  const res1 = SATCollision.checkPolygonPolygon(polyA, polyB);
  assert.strictEqual(res1.collided, true, 'polyA and polyB should intersect');

  const res2 = SATCollision.checkPolygonPolygon(polyA, polyC);
  assert.strictEqual(res2.collided, false, 'polyA and polyC should not intersect');

  console.log('    [PASS] SAT Collision tests passed.');
};
