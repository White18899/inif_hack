// Interactive Cosmic Audio SFX Engine for Infinity Hackathon 2026
// Zero background drone / pure on-demand interactive sound effects (stone chimes, convergence, UI clicks)

class CosmicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.masterGain = null;
    this.compressor = null;
    this.stoneFrequencies = {
      space: [261.63, 523.25, 1046.50], // C4, C5, C6 (Crystalline Open)
      mind: [293.66, 587.33, 1174.66],  // D4, D5, D6 (Sharp Psionic)
      reality: [329.63, 659.25, 987.77], // E4, E5, B5 (Dark Metamorphic)
      power: [369.99, 739.99, 1479.98], // F#4, F#5, F#6 (Tense Celestial)
      time: [392.00, 783.99, 1567.98],  // G4, G5, G6 (Temporal Harmony)
      soul: [440.00, 880.00, 1760.00]   // A4, A5, A6 (Spiritual Solfeggio)
    };
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master Gain Node
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);

      // Dynamics Compressor Limiter (Prevents clipping and ensures crisp, clean audio)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(8, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(6, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.2, this.ctx.currentTime);

      this.masterGain.connect(this.compressor);
      this.compressor.connect(this.ctx.destination);

      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio could not be initialized:', e);
    }
  }

  toggleMute() {
    if (!this.initialized) {
      this.init();
      this.isMuted = false;
    } else {
      this.isMuted = !this.isMuted;
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.masterGain && this.ctx) {
      const targetGain = this.isMuted ? 0 : 0.7;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.04);
    }

    return !this.isMuted;
  }

  suspend() {
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend();
    }
  }

  resume() {
    if (!this.isMuted && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  destroy() {
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch (_) {}
      this.ctx = null;
    }
    this.initialized = false;
  }

  /* --------------------------------------------------------------------------
     INTERACTIVE SOUND EFFECTS (ON-DEMAND ONLY)
     -------------------------------------------------------------------------- */

  // Plays unique crystal harmonic resonance when selecting/scrolling an Infinity Stone
  playStoneChime(stoneId) {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const freqs = this.stoneFrequencies[stoneId] || [440, 880, 1320];
    const now = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle micro-detune for celestial crystal shimmer
      if (idx > 0) {
        osc.detune.setValueAtTime((idx % 2 === 0 ? 3 : -3), now);
      }

      const amp = (0.24 / (idx + 1));
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0 + idx * 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.6);
    });
  }

  // Energy pulse resonance for stone pulse button and 'P' shortcut
  playEnergyPulse() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.8);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(220, now);
    filter.frequency.linearRampToValueAtTime(1100, now + 0.3);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.8);
    filter.Q.setValueAtTime(4, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.0);
  }

  // Hexagonal Convergence chord triggered on user clicking Convergence or completing registration
  playConvergenceChord() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;

    // Sub-bass sweep
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(160, now);
    subOsc.frequency.exponentialRampToValueAtTime(36, now + 1.2);
    subGain.gain.setValueAtTime(0.4, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    subOsc.stop(now + 2.3);

    // Harmonized cosmic chord of all 6 stones
    const fundamentalList = [261.63, 293.66, 329.63, 369.99, 392.00, 440.00];
    fundamentalList.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.04);

      gain.gain.setValueAtTime(0.001, now + i * 0.04);
      gain.gain.linearRampToValueAtTime(0.10, now + 0.25 + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.04);
      osc.stop(now + 3.4);
    });
  }

  // Tactile micro-click for UI buttons and dialogs
  playClick() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Toast alert / domain selection chime
  playChime(freq = 440, duration = 0.4) {
    if (!this.ctx || this.isMuted) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.16, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (_) {}
  }
}

export const audioEngine = new CosmicAudioEngine();
