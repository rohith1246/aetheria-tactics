const assert = require('assert');
const { Vector2D, Matrix3x3 } = require('../../src/engine/math/Math2D');

module.exports = function testMath2D() {
  console.log('  * Running Math2D tests...');
  const v1 = new Vector2D(3, 4);
  assert.strictEqual(v1.length(), 5, 'Length of (3,4) should be 5');

  const v2 = new Vector2D(1, 2);
  v1.add(v2);
  assert.strictEqual(v1.x, 4);
  assert.strictEqual(v1.y, 6);

  const mat = new Matrix3x3();
  mat.makeTranslation(10, 20);
  const transformed = mat.transformVector2D(new Vector2D(5, 5));
  assert.strictEqual(transformed.x, 15);
  assert.strictEqual(transformed.y, 25);

  console.log('    [PASS] Vector2D & Matrix3x3 tests passed.');
};
