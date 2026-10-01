/**
 * Cinematic Marvel-Style Intro Preloader
 * Features:
 * - High-definition 1080p 21:9 Cinemascope video preloader
 * - Session-aware: Plays automatically on first visit per session
 * - Smooth fade-out transition revealing the 3D WebGL cosmos
 * - Skip intro button with keyboard shortcut (ESC / SPACE)
 * - Dynamic progress bar & timecode display
 * - Synchronized cosmic convergence audio surge on logo lockup
 * - Replayable anytime via header and mobile menu
 * - Fail-safe auto-fallback if browser blocks or delays video
 */

import { audioEngine } from './audio.js';

export function initCinematicPreloader(options = {}) {
  const { onComplete, onReplay } = options;

  const preloader = document.getElementById('cinematic-preloader');
  const video = document.getElementById('cinematic-video');
  const btnSkip = document.getElementById('btn-skip-intro');
  const progressFill = document.getElementById('cinematic-progress-fill');
  const timecodeDisplay = document.getElementById('cinematic-timecode');
  const btnAudio = document.getElementById('btn-intro-audio');
  const btnReplayNav = document.getElementById('btn-replay-intro');
  const btnReplayMobile = document.getElementById('btn-mobile-replay-intro');

  if (!preloader || !video) {
    if (typeof onComplete === 'function') onComplete();
    return { playIntro: () => {}, dismiss: () => {} };
  }

  let isDismissed = false;
  let hasTriggeredClimaxAudio = false;
  let safetyTimeout = null;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const s = Math.floor(seconds);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const dismiss = (triggeredByEvent = false) => {
    if (isDismissed) return;
    isDismissed = true;

    if (safetyTimeout) {
      clearTimeout(safetyTimeout);
      safetyTimeout = null;
    }

    try {
      sessionStorage.setItem('inif_intro_seen', 'true');
    } catch (e) {
      // Ignore private browsing storage quota errors
    }

    preloader.classList.add('fade-out');

    // Trigger completion callback (reveals 3D stones convergence)
    if (typeof onComplete === 'function') {
      onComplete();
    }

    // Play tactile entry click if dismissed by button/key
    if (triggeredByEvent) {
      audioEngine.playClick();
    }

    setTimeout(() => {
      preloader.style.display = 'none';
      try {
        video.pause();
      } catch (err) {
        // Safe pause
      }
    }, 850);
  };

  const playIntro = (force = false) => {
    isDismissed = false;
    hasTriggeredClimaxAudio = false;

    preloader.style.display = 'flex';
    // Force reflow
    void preloader.offsetWidth;
    preloader.classList.remove('fade-out');
    document.documentElement.classList.remove('intro-already-seen');

    if (progressFill) progressFill.style.width = '0%';
    if (timecodeDisplay) timecodeDisplay.textContent = '00:00 / 00:16';

    video.currentTime = 0;
    video.muted = true; // Muted by default to ensure autoplay across all mobile/desktop policies

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Cinematic preloader autoplay deferred or restricted:', error);
        // If autoplay failed on first visit without user interaction, auto-dismiss cleanly
        if (!force) {
          dismiss(false);
        }
      });
    }

    if (typeof onReplay === 'function') {
      onReplay();
    }
  };

  // Video progress & climax trigger
  video.addEventListener('timeupdate', () => {
    if (!video.duration || isDismissed) return;

    const progress = (video.currentTime / video.duration) * 100;
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    if (timecodeDisplay) {
      timecodeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    }

    // Climax surge: When the Marvel logo flips settle into INFINITY HACKATHON (~13.2s)
    if (video.currentTime >= 13.2 && !hasTriggeredClimaxAudio) {
      hasTriggeredClimaxAudio = true;
      audioEngine.playConvergenceChord();
    }
  });

  // Video finish
  video.addEventListener('ended', () => {
    dismiss(false);
  });

  // Skip button click
  if (btnSkip) {
    btnSkip.addEventListener('click', (e) => {
      e.stopPropagation();
      dismiss(true);
    });
  }

  // Keyboard accessibility: ESC or SPACE to skip
  window.addEventListener('keydown', (e) => {
    if (!isDismissed && preloader.style.display !== 'none') {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        dismiss(true);
      }
    }
  });

  // Audio button toggle during intro
  if (btnAudio) {
    btnAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      audioEngine.init();
      audioEngine.resume();
      const isMuted = audioEngine.toggleMute();
      btnAudio.classList.toggle('active', isMuted);
      const icon = btnAudio.querySelector('.intro-audio-icon');
      if (icon) icon.textContent = isMuted ? '🔊' : '🔇';
      audioEngine.playStoneChime('reality');
    });
  }

  // Hook Replay triggers from navigation
  if (btnReplayNav) {
    btnReplayNav.addEventListener('click', (e) => {
      e.preventDefault();
      audioEngine.playClick();
      playIntro(true);
    });
  }

  if (btnReplayMobile) {
    btnReplayMobile.addEventListener('click', (e) => {
      e.preventDefault();
      const mobileDrawer = document.getElementById('mobile-nav-drawer');
      if (mobileDrawer) mobileDrawer.classList.remove('is-open');
      audioEngine.playClick();
      playIntro(true);
    });
  }

  // Session check: has the user already seen the intro during this browser session?
  let hasSeenIntro = false;
  try {
    hasSeenIntro = sessionStorage.getItem('inif_intro_seen') === 'true';
  } catch (e) {
    hasSeenIntro = false;
  }

  if (hasSeenIntro) {
    isDismissed = true;
    preloader.style.display = 'none';
    if (typeof onComplete === 'function') {
      onComplete();
    }
  } else {
    // First visit: launch preloader
    playIntro(false);

    // Safety fallback: if video doesn't start within 3.5 seconds (network freeze or low battery mode), fail safe
    safetyTimeout = setTimeout(() => {
      if (!isDismissed && video.currentTime === 0) {
        console.warn('Cinematic preloader video safety timeout reached. Transitioning to showcase.');
        dismiss(false);
      }
    }, 3800);
  }

  return { playIntro, dismiss };
}
