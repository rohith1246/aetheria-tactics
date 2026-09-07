const assert = require('assert');
const SoundSynthesizer = require('../../src/audio/synth/SoundSynthesizer');

module.exports = function testSoundSynth() {
  console.log('  * Running SoundSynth tests...');
  const synth = new SoundSynthesizer(null);
  const laser = synth.getPreset('laser');
  assert(laser !== undefined, 'Laser preset should be registered');
  assert.strictEqual(laser.type, 'sawtooth');
  assert.strictEqual(laser.freqStart, 880);

  console.log('    [PASS] SoundSynthesizer presets passed.');
};
