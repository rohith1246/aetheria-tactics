const assert = require('assert');
const { DamageCalculator, ELEMENTS } = require('../../src/combat/engine/DamageCalculator');

module.exports = function testCombatFormulas() {
  console.log('  * Running CombatFormulas tests...');
  const attacker = {
    stats: { attack: 25, critChance: 0.1, critMultiplier: 1.75 }
  };
  const defender = {
    baseElement: ELEMENTS.CRYO,
    stats: { armor: 20, resistances: { [ELEMENTS.PLASMA]: 0 } }
  };
  const skill = {
    basePower: 30,
    element: ELEMENTS.PLASMA,
    scalingStat: 'attack'
  };

  const result = DamageCalculator.calculateDamage(attacker, defender, skill);
  assert(result.damage > 0, 'Damage output must be greater than zero');
  assert.strictEqual(result.element, ELEMENTS.PLASMA);
  assert(result.elementMultiplier > 1.0, 'Plasma should have advantage over Cryo');

  console.log('    [PASS] Combat damage formulas passed.');
};
