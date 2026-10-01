/**
 * Site Preloader Engine
 * - Desktop: Full-screen unmuted cinematic video loader (loading.mp4)
 * - Mobile: Normal cosmic orbital singularity loader (lightweight, zero video decoding, 1.8s auto-transition)
 */

import { audioEngine } from './audio.js';

export function initCinematicPreloader(options = {}) {
  const { onComplete } = options;

  const preloader = document.getElementById('cinematic-preloader');
  const video = document.getElementById('cinematic-video');
  const btnSkip = document.getElementById('btn-skip-intro');
  const btnMobileEnter = document.getElementById('btn-mobile-enter');
  const mobileBarFill = document.getElementById('mobile-loader-bar-fill');

  if (!preloader) {
    if (typeof onComplete === 'function') onComplete();
    return { dismiss: () => {} };
  }

  let isDismissed = false;
  let hasTriggeredClimaxAudio = false;
  let safetyTimeout = null;

  const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
      if (video) {
        try {
          video.pause();
        } catch (err) {
          // Safe pause
        }
      }
    }, 800);
  };

  // Keyboard shortcut: ESC or SPACE to skip loader
  window.addEventListener('keydown', (e) => {
    if (!isDismissed && preloader.style.display !== 'none') {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        dismiss(true);
      }
    }
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

  // --- MOBILE NORMAL LOADER BRANCH ---
  if (isMobile) {
    // Ensure video is paused on mobile to conserve bandwidth and CPU
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (err) {}
    }

    preloader.style.display = 'flex';

    // Animate mobile progress bar smoothly over 1.7 seconds
    if (mobileBarFill) {
      // Force reflow
      void mobileBarFill.offsetWidth;
      mobileBarFill.style.transition = 'width 1.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
      mobileBarFill.style.width = '100%';
    }

    // Auto-dismiss after 1.8s, triggering 3D convergence
    safetyTimeout = setTimeout(() => {
      dismiss(false);
    }, 1850);

    return { dismiss };
  }

  // --- DESKTOP CINEMATIC VIDEO BRANCH ---
  if (!video) {
    dismiss(false);
    return { dismiss };
  }

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

  // Desktop Unmuted Playback
  video.muted = false;
  video.volume = 1.0;
  audioEngine.isMuted = false;

  const attemptPlayback = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Desktop unmuted autoplay blocked by policy; setting up interaction listener:', error);
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

  // Desktop Safety Watchdog
  safetyTimeout = setTimeout(() => {
    if (!isDismissed && video.currentTime === 0) {
      console.warn('Desktop video loader timeout reached; proceeding to showcase.');
      dismiss(false);
    }
  }, 4200);

  return { dismiss };
}
