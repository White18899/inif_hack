/**
 * Site Video Loader (loading.mp4)
 * Features:
 * - High-definition full-screen cinematic video loader
 * - Always unmuted video playback (with auto-unmute on first user touch fallback)
 * - Clean presentation: zero timeline scrubbers, zero timecodes
 * - Sleek minimal [ SKIP ] button for rapid access
 * - Cosmic audio surge on logo reveal and smooth fade-out into 3D showcase
 */

import { audioEngine } from './audio.js';

export function initCinematicPreloader(options = {}) {
  const { onComplete } = options;

  const preloader = document.getElementById('cinematic-preloader');
  const video = document.getElementById('cinematic-video');
  const btnSkip = document.getElementById('btn-skip-intro');
  const btnMobileEnter = document.getElementById('btn-mobile-enter');

  if (!preloader || !video) {
    if (typeof onComplete === 'function') onComplete();
    return { dismiss: () => {} };
  }

  let isDismissed = false;
  let hasTriggeredClimaxAudio = false;
  let safetyTimeout = null;

  const dismiss = (triggeredByEvent = false) => {
    if (isDismissed) return;
    isDismissed = true;

    if (safetyTimeout) {
      clearTimeout(safetyTimeout);
      safetyTimeout = null;
    }

    preloader.classList.add('fade-out');

    // Reveal 3D showcase & convergence
    if (typeof onComplete === 'function') {
      onComplete();
    }

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

  // Video climax trigger (cosmic surge when INFINITY HACKATHON title crystallizes)
  video.addEventListener('timeupdate', () => {
    if (!video.duration || isDismissed) return;

    if (video.currentTime >= 13.2 && !hasTriggeredClimaxAudio) {
      hasTriggeredClimaxAudio = true;
      audioEngine.init();
      audioEngine.resume();
      audioEngine.playConvergenceChord();
    }
  });

  // When video completes loading
  video.addEventListener('ended', () => {
    dismiss(false);
  });

  // Skip buttons
  if (btnSkip) {
    btnSkip.addEventListener('click', (e) => {
      e.stopPropagation();
      dismiss(true);
    });
  }

  if (btnMobileEnter) {
    btnMobileEnter.addEventListener('click', (e) => {
      e.stopPropagation();
      dismiss(true);
    });
  }

  // Keyboard shortcut: ESC or SPACE to skip loader
  window.addEventListener('keydown', (e) => {
    if (!isDismissed && preloader.style.display !== 'none') {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        dismiss(true);
      }
    }
  });

  // Always Unmuted Playback Configuration
  video.muted = false;
  video.volume = 1.0;
  audioEngine.isMuted = false;

  const attemptPlayback = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Unmuted autoplay prevented by browser policy; queuing audio on interaction:', error);
        // Browser requires user gesture before playing unmuted audio
        video.muted = true;
        video.play().catch(() => {});

        const unmuteOnInteraction = () => {
          video.muted = false;
          video.volume = 1.0;
          audioEngine.init();
          audioEngine.resume();
          window.removeEventListener('pointerdown', unmuteOnInteraction);
          window.removeEventListener('keydown', unmuteOnInteraction);
          window.removeEventListener('touchstart', unmuteOnInteraction);
          window.removeEventListener('click', unmuteOnInteraction);
        };

        window.addEventListener('pointerdown', unmuteOnInteraction, { once: true, passive: true });
        window.addEventListener('keydown', unmuteOnInteraction, { once: true });
        window.addEventListener('touchstart', unmuteOnInteraction, { once: true, passive: true });
        window.addEventListener('click', unmuteOnInteraction, { once: true });
      });
    }
  };

  preloader.style.display = 'flex';
  attemptPlayback();

  // Safety watchdog: If network or video decode halts for >4s, seamlessly transition to site
  safetyTimeout = setTimeout(() => {
    if (!isDismissed && video.currentTime === 0) {
      console.warn('Site loader safety timeout reached; proceeding to 3D showcase.');
      dismiss(false);
    }
  }, 4200);

  return { dismiss };
}
