// Procedural Web Audio API Synthesizer for Cosmic Infinity Stones Showcase

class CosmicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false; // Unmuted by default as requested
    this.droneGain = null;
    this.masterGain = null;
    this.compressor = null;
    this.bitsInterval = null;
    this.droneOscs = [];
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
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.65, this.ctx.currentTime);

      // Dynamics Compressor Limiter (Prevents clipping and ensures crisp, clean audio)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-16, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(10, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(6, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.22, this.ctx.currentTime);

      this.masterGain.connect(this.compressor);
      this.compressor.connect(this.ctx.destination);

      // Start warm ambient celestial space pad and subtle idle bits sequencer
      this.startAmbientDrone();
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
      const targetGain = this.isMuted ? 0 : 0.65;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.05);
    }

    return !this.isMuted;
  }

  startAmbientDrone() {
    if (!this.ctx) return;

    // Clean up any previous drone oscillators
    this.stopAmbientDrone();

    // 1. Warm celestial harmonic foundation (C3 = 130.81 Hz, G3 = 196.00 Hz)
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(130.81, this.ctx.currentTime);

    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(196.00, this.ctx.currentTime);

    // Ethereal subtle octave (C4 = 261.63 Hz)
    const osc3 = this.ctx.createOscillator();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(261.63, this.ctx.currentTime);

    // Warm Lowpass Filter with gentle resonance
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    // LFO for slow, gentle celestial breathing (~10 second period)
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.1, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(45, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.14, this.ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    osc1.start();
    osc2.start();
    osc3.start();
    lfo.start();

    this.droneOscs = [osc1, osc2, osc3, lfo];

    // 2. Start the rhythmic cybernetic idle bits sequencer
    this.startIdleBits();
  }

  stopAmbientDrone() {
    if (this.droneOscs && this.droneOscs.length) {
      this.droneOscs.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (_) {}
      });
      this.droneOscs = [];
    }
    this.stopIdleBits();
  }

  /* --------------------------------------------------------------------------
     RHYTHMIC IDLE BITS SEQUENCER
     Generates gentle, ethereal sci-fi micro-pulses in pentatonic harmony
     -------------------------------------------------------------------------- */
  startIdleBits() {
    if (!this.ctx) return;
    this.stopIdleBits();

    // Pentatonic notes derived from the 6 Infinity Stones frequencies
    const bitScale = [
      523.25, // C5 (Space)
      587.33, // D5 (Mind)
      659.25, // E5 (Reality)
      739.99, // F#5 (Power)
      783.99, // G5 (Time)
      880.00, // A5 (Soul)
      1046.50 // C6 (Space Octave)
    ];

    let step = 0;
    // 16-step rhythmic pattern (1 = single bit pulse, 2 = accented bit, 0 = space)
    const pattern = [1, 0, 1, 0, 2, 0, 0, 1, 0, 1, 1, 0, 2, 0, 1, 0];

    this.bitsInterval = setInterval(() => {
      if (!this.ctx || this.isMuted || this.ctx.state !== 'running') return;

      const trigger = pattern[step % pattern.length];
      if (trigger > 0) {
        // Melodic sequence progression based on step count
        const noteIdx = (step * 2 + Math.floor(step / 4)) % bitScale.length;
        const freq = bitScale[noteIdx];
        const gainVal = trigger === 2 ? 0.045 : 0.028;

        this.playIdleBit(freq, gainVal);

        // For accented pulse (2), trigger a delicate octave echo 90ms later
        if (trigger === 2) {
          setTimeout(() => {
            if (!this.isMuted && this.ctx && this.ctx.state === 'running') {
              this.playIdleBit(freq * 1.5, 0.018);
            }
          }, 90);
        }
      }
      step++;
    }, 290); // ~103 BPM cosmic ambient pulse tempo
  }

  stopIdleBits() {
    if (this.bitsInterval) {
      clearInterval(this.bitsInterval);
      this.bitsInterval = null;
    }
  }

  playIdleBit(freq, gainLevel = 0.035) {
    if (!this.ctx || this.isMuted || this.ctx.state !== 'running') return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, now);
      filter.Q.setValueAtTime(5.0, now);

      // Fast, non-clicking attack (8ms) and soft organic decay (130ms)
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(gainLevel, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch (_) {}
  }

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

      // Subtle detune for celestial shimmer
      if (idx > 0) {
        osc.detune.setValueAtTime((idx % 2 === 0 ? 4 : -4), now);
      }

      const amp = (0.28 / (idx + 1));
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2 + idx * 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.0);
    });
  }

  playEnergyPulse() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.35);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.9);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(220, now);
    filter.frequency.linearRampToValueAtTime(1200, now + 0.35);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.9);
    filter.Q.setValueAtTime(5, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.2);
  }

  playConvergenceChord() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;

    // Sub drop
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(180, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.2);
    subGain.gain.setValueAtTime(0.5, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    subOsc.stop(now + 2.6);

    // Harmonized cosmic chord of all 6 stones
    const fundamentalList = [261.63, 293.66, 329.63, 369.99, 392.00, 440.00];
    fundamentalList.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.05);

      gain.gain.setValueAtTime(0.001, now + i * 0.05);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.3 + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.05);
      osc.stop(now + 3.8);
    });
  }

  playClick() {
    if (!this.ctx || this.isMuted) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

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
      gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    } catch (_) {}
  }
}

export const audioEngine = new CosmicAudioEngine();
