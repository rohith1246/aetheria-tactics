/**
 * SoundSynthesizer.js - Procedural FM & Subtractive Audio Synthesis Engine
 * Part of Aetheria Tactics Engine
 */

class SoundSynthesizer {
  constructor(audioContext = null) {
    this.ctx = audioContext;
    this.masterGain = null;
    this.sfxPresets = new Map();
    this._initPresets();
  }

  _initPresets() {
    this.sfxPresets.set('laser', {
      type: 'sawtooth',
      freqStart: 880,
      freqEnd: 110,
      duration: 0.15,
      attack: 0.01,
      decay: 0.14
    });
    this.sfxPresets.set('hit', {
      type: 'triangle',
      freqStart: 180,
      freqEnd: 45,
      duration: 0.2,
      attack: 0.005,
      decay: 0.195
    });
    this.sfxPresets.set('spell', {
      type: 'sine',
      freqStart: 440,
      freqEnd: 1320,
      duration: 0.4,
      attack: 0.05,
      decay: 0.35
    });
    this.sfxPresets.set('levelup', {
      type: 'square',
      freqStart: 261.63,
      freqEnd: 523.25,
      duration: 0.5,
      attack: 0.05,
      decay: 0.45
    });
  }

  getPreset(name) {
    return this.sfxPresets.get(name);
  }

  playSFX(name) {
    const preset = this.sfxPresets.get(name);
    if (!preset || !this.ctx) return false;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = preset.type;
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(preset.freqStart, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, preset.freqEnd), now + preset.duration);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + preset.attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + preset.duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + preset.duration);
    return true;
  }
}

module.exports = SoundSynthesizer;
