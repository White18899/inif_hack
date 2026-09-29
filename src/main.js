import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import gsap from 'gsap';

import { STONES } from './stonesData.js';
import { createStoneMesh } from './stoneBuilder.js';
import { audioEngine } from './audio.js';
import { TIMELINE_EVENTS } from './timelineData.js';
import { initRegistrationModule } from './registration.js';
import { TechText } from './techText.js';

class InfinityScrollShowcase {
  constructor() {
    this.container = document.getElementById('webgl-container');
    this.stones = [];
    this.currentIndex = 0;
    this.isTransitioning = false;
    this.isConvergenceActive = false;
    this.isWireframe = false;
    this.lastScrollTime = 0;
    this.scrollCooldown = 700; // ms debounce for clean single-stone step per scroll

    this.clock = new THREE.Clock();
    this.infoCard = document.getElementById('info-card');

    this.initThree();
    this.initCosmicEnvironment();
    this.initStones();
    this.initPostProcessing();
    this.initControls();
    this.initUI();
    this.initCountdownTimer();
    this.initTimeline();
    this.initScrollAndGestures();
    this.initEventListeners();
    initRegistrationModule();
    this.animate();

    // Reset window scroll to top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initial state: locked to 6-stone showcase until all 6 stones are scrolled or nav clicked
    document.body.classList.remove('timeline-unlocked');

    // Initial Presentation of Specimen 1 (Mind Stone // Intelligence)
    this.displayStone(0, false);

    // Auto-play convergence animation on all devices (mobile and desktop)
    this.triggerConvergence();
  }

  isMobile() {
    return window.innerWidth <= 820;
  }

  /* --------------------------------------------------------------------------
     1. THREE.JS SCENE SETUP
     -------------------------------------------------------------------------- */
  initThree() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x030305, 0.024);

    this.camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Initial camera position - focused on left-center stone stage
    this.updateCameraForViewport();

    this.renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;

    this.container.appendChild(this.renderer.domElement);

    // Directional, Fill, and Ambient Lights (Bright, high-clarity gemstone studio illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambientLight);

    const dirLightKey = new THREE.DirectionalLight(0xffffff, 1.35);
    dirLightKey.position.set(5, 10, 8);
    this.scene.add(dirLightKey);

    const dirLightFill = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLightFill.position.set(-6, -4, 6);
    this.scene.add(dirLightFill);

    const dirLightRim = new THREE.DirectionalLight(0x88bbff, 0.75);
    dirLightRim.position.set(-6, 8, -6);
    this.scene.add(dirLightRim);

    // Frontal environmental key light on the stone stage (illuminates facets with active stone hue)
    this.stageLight = new THREE.PointLight(0x00d2ff, 1.5, 16, 1.2);
    this.stageLight.position.set(0, 1.2, 4.5);
    this.scene.add(this.stageLight);

    // Procedural Studio Environment for authentic gemstone facet refractions & subtle luster
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 512;
    envCanvas.height = 256;
    const eCtx = envCanvas.getContext('2d');

    // Deep cosmic dark space
    const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
    bgGrad.addColorStop(0, '#0d1020');
    bgGrad.addColorStop(0.5, '#05060b');
    bgGrad.addColorStop(1, '#090b16');
    eCtx.fillStyle = bgGrad;
    eCtx.fillRect(0, 0, 512, 256);

    // Soft studio light spots to reflect subtle gemstone brilliance on facets without harsh glares
    const drawSpot = (x, y, r, intensity, col) => {
      const g = eCtx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255, 255, 255, ${intensity})`);
      g.addColorStop(0.35, col);
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      eCtx.fillStyle = g;
      eCtx.beginPath();
      eCtx.arc(x, y, r, 0, Math.PI * 2);
      eCtx.fill();
    };

    drawSpot(130, 65, 80, 0.35, 'rgba(230, 245, 255, 0.35)');
    drawSpot(370, 75, 95, 0.32, 'rgba(255, 240, 225, 0.3)');
    drawSpot(256, 175, 75, 0.2, 'rgba(160, 200, 255, 0.2)');

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    this.scene.environment = envMap;
  }

  updateCameraForViewport() {
    const stage = document.getElementById('stone-stage-overlay');
    if (stage) {
      const rect = stage.getBoundingClientRect();
      const stageCenterX = rect.left + rect.width / 2;
      const stageCenterY = rect.top + rect.height / 2;

      // Precise pixel offset to lock the 3D model into the exact center of the stage overlay
      let offsetX = (window.innerWidth / 2) - stageCenterX;
      let offsetY = (window.innerHeight / 2) - stageCenterY;

      if (this.isMobile()) {
        // Balanced offset on mobile: perfectly centered between 28px rail and info card
        offsetX += 16;
      }

      this.camera.setViewOffset(
        window.innerWidth,
        window.innerHeight,
        offsetX,
        offsetY,
        window.innerWidth,
        window.innerHeight
      );
      this.camera.updateProjectionMatrix();
    }

    this.stoneStageX = 0;
    this.stoneStageY = 0;
    const targetZ = this.isMobile() ? 12.0 : 9.8;
    this.camera.position.set(0, 0, targetZ);
    if (this.controls) {
      this.controls.target.set(0, 0, 0);
    }
  }

  /* --------------------------------------------------------------------------
     2. BACKGROUND COSMIC STARFIELD & SHOCKWAVE
     -------------------------------------------------------------------------- */
  initCosmicEnvironment() {
    // Generate soft circular radial star texture (prevents square point artifacts)
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 64;
    starCanvas.height = 64;
    const sCtx = starCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    sGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    sGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.7)');
    sGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
    sGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 64, 64);
    const starTexture = new THREE.CanvasTexture(starCanvas);

    const starCount = 2000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColor = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 38 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      let px = r * Math.sin(phi) * Math.cos(theta);
      let py = r * Math.sin(phi) * Math.sin(theta);
      let pz = r * Math.cos(phi);

      // Keep direct line of sight behind the stone clean so no stars are directly magnified into the lens
      const distFromStoneAxis = Math.hypot(px - this.stoneStageX, py - this.stoneStageY);
      if (distFromStoneAxis < 4.5 && pz < 0) {
        px += (px >= this.stoneStageX ? 5.0 : -5.0);
        py += (py >= this.stoneStageY ? 5.0 : -5.0);
      }

      starPos[i * 3] = px;
      starPos[i * 3 + 1] = py;
      starPos[i * 3 + 2] = pz;

      const brightness = 0.4 + Math.random() * 0.6;
      starColor[i * 3] = brightness;
      starColor[i * 3 + 1] = brightness;
      starColor[i * 3 + 2] = brightness;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColor, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.35,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);
  }

  /* --------------------------------------------------------------------------
     3. 3D STONES CREATION
     -------------------------------------------------------------------------- */
  initStones() {
    this.stonesContainer = new THREE.Group();
    this.scene.add(this.stonesContainer);

    const targetScale = this.isMobile() ? 0.48 : 1.0;
    STONES.forEach((stoneData, i) => {
      const stoneObj = createStoneMesh(stoneData);
      
      // Position at the hero stage
      stoneObj.group.position.set(this.stoneStageX, this.stoneStageY, 0);

      // Hide all except first stone initially
      if (i !== 0) {
        stoneObj.group.scale.set(0.001, 0.001, 0.001);
        stoneObj.group.visible = false;
      } else {
        stoneObj.group.scale.set(targetScale, targetScale, targetScale);
        stoneObj.group.visible = true;
      }

      this.stonesContainer.add(stoneObj.group);
      this.stones.push(stoneObj);
    });
  }

  /* --------------------------------------------------------------------------
     4. POST-PROCESSING (BLOOM RADIANCE)
     -------------------------------------------------------------------------- */
  initPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.55, // Rich luminous aura on specular glints
      0.45, // Soft bloom radius
      0.72  // Threshold for radiant crystal sparkle
    );
    this.composer.addPass(this.bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  /* --------------------------------------------------------------------------
     5. ORBIT CONTROLS
     -------------------------------------------------------------------------- */
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.enableZoom = false; // Disable scroll zooming so scrolling steps through stones without zooming
    this.controls.enablePan = false;  // Keep the model locked centered while allowing 360 drag rotation
    this.controls.maxPolarAngle = Math.PI / 2 + 0.25;
    this.controls.minPolarAngle = Math.PI / 2 - 0.25;
    this.controls.target.set(0, 0, 0);

    // Disable touch rotation completely so touch is strictly reserved for page scrolling
    this.controls.touches = { ONE: null, TWO: null };

    if (this.renderer.domElement) {
      this.renderer.domElement.style.touchAction = 'pan-y';
    }

    // Click on 3D stone mesh directly to shine it! (Mouse click only, ignore touch)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return;
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.renderer.domElement.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch') return;
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist < 6 && !this.isConvergenceActive) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);
        const currentStone = this.stones[this.currentIndex];
        if (currentStone) {
          const hits = raycaster.intersectObjects([currentStone.gemMesh, currentStone.coreMesh], true);
          if (hits.length > 0) {
            this.pulseCurrentStone();
          }
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     5B. PRECISION COUNTDOWN TIMER (TARGET: 31 OCT WITH LIVE MILLISECONDS)
     -------------------------------------------------------------------------- */
  initCountdownTimer() {
    // Target: October 31, 2026 09:00:00 AM IST
    const targetDate = new Date('2026-10-31T09:00:00+05:30').getTime();

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');
    const msecsEl = document.getElementById('cd-msecs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl || !msecsEl) return;

    let lastSec = -1;

    const tick = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        msecsEl.textContent = '000';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      const msecs = Math.floor(diff % 1000);

      if (secs !== lastSec) {
        lastSec = secs;
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
      }

      msecsEl.textContent = String(msecs).padStart(3, '0');

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  /* --------------------------------------------------------------------------
     6. UI & LUXURY PRECISION PAGER INITIALIZATION
     -------------------------------------------------------------------------- */
  initUI() {
    const pagerList = document.getElementById('pager-list');
    pagerList.innerHTML = '';

    STONES.forEach((stone, i) => {
      const item = document.createElement('button');
      item.className = `pager-item ${i === 0 ? 'active' : ''}`;
      item.setAttribute('data-index', i);
      
      const r = (stone.colorThree >> 16) & 255;
      const g = (stone.colorThree >> 8) & 255;
      const b = stone.colorThree & 255;
      item.setAttribute('style', `
        --item-color: ${stone.colorHex};
        --item-rgb: ${r}, ${g}, ${b};
      `);
      item.setAttribute('aria-label', `Navigate to ${stone.name}`);

      const shortName = stone.name.replace(' STONE', '');

      // Mathematical precision SVG coordinates:
      // Row height: 42px, vertical center: 21px, horizontal center: 12px
      const yStart = i === 0 ? 21 : 0;
      const yEnd = i === STONES.length - 1 ? 21 : 42;

      item.innerHTML = `
        <span class="pager-track-node">
          <svg class="pager-node-svg" width="24" height="42" viewBox="0 0 24 42" aria-hidden="true">
            <!-- Background laser guide line -->
            <line class="svg-track-line" x1="12" y1="${yStart}" x2="12" y2="${yEnd}" />
            <!-- Active laser beam segments -->
            ${i > 0 ? `<line class="svg-laser-top" x1="12" y1="0" x2="12" y2="21" />` : ''}
            ${i < STONES.length - 1 ? `<line class="svg-laser-bot" x1="12" y1="21" x2="12" y2="42" />` : ''}
            <!-- Precision Single Dot: centered at (12, 21) -->
            <circle class="svg-pip-halo" cx="12" cy="21" r="8" />
            <circle class="svg-pip-core" cx="12" cy="21" r="3.5" />
          </svg>
        </span>
        <span class="pager-name-tag">${shortName}</span>
      `;

      item.addEventListener('click', () => {
        if (this.isConvergenceActive) {
          this.endConvergence();
        }
        if (i !== this.currentIndex) {
          audioEngine.playStoneChime(stone.id);
          this.displayStone(i, true);
        }
      });

      pagerList.appendChild(item);
    });

    // Mobile Navigation Drawer Toggle & Links
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const btnCloseMobileMenu = document.getElementById('btn-close-mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
    const mobileDrawerLinks = document.querySelectorAll('.mobile-nav-link, .m-portal-item');
    const btnMobileDrawerReg = document.getElementById('btn-mobile-drawer-reg');

    if (btnMobileMenu && mobileDrawer) {
      btnMobileMenu.addEventListener('click', () => {
        mobileDrawer.classList.add('is-open');
        audioEngine.playClick();
      });
    }

    const closeMobileMenu = () => {
      if (mobileDrawer) mobileDrawer.classList.remove('is-open');
    };

    if (btnCloseMobileMenu) btnCloseMobileMenu.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    mobileDrawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
        this.unlockTimeline(true);
      });
    });

    if (btnMobileDrawerReg) {
      btnMobileDrawerReg.addEventListener('click', () => {
        closeMobileMenu();
        const regBtn = document.getElementById('btn-nav-register');
        if (regBtn) regBtn.click();
      });
    }

    const btnMobileAudio = document.getElementById('btn-mobile-audio');
    const mAudioStatus = document.getElementById('m-audio-status');
    if (btnMobileAudio) {
      btnMobileAudio.addEventListener('click', () => {
        const isUnmuted = audioEngine.toggleMute();
        if (mAudioStatus) {
          mAudioStatus.textContent = isUnmuted ? 'ACTIVE' : 'MUTED';
          mAudioStatus.style.color = isUnmuted ? '#00d2ff' : '#a1a1aa';
        }
      });
    }

    this.initTechText();
  }

  /* --------------------------------------------------------------------------
     6A. INTERACTIVE TECHTEXT WORDMARK (REACT BITS ENGINE)
     -------------------------------------------------------------------------- */
  initTechText() {
    const container = document.getElementById('stone-tech-text-container');
    if (!container) return;

    const initialStone = STONES[this.currentIndex] || STONES[0];
    this.techText = new TechText(container, {
      text: initialStone.name,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 800,
      fontSize: 42,
      letterSpacing: 0.04,
      color: '#ffffff',
      accentColor: initialStone.colorHex,
      reveal: 'letter',
      lineStyle: 'dashed',
      dashLength: 4,
      dashGap: 2,
      strokeWidth: 1.5,
      specks: 12,
      selection: false,
      labels: false,
      draggable: false,
      sweep: true,
      speed: 0.9
    });
  }

  /* --------------------------------------------------------------------------
     6B. COSMIC TIMELINE INITIALIZATION (4-PHASE DOSSIER CARDS)
     -------------------------------------------------------------------------- */
  initTimeline() {
    // Interactive sounds and bounce animations on Dossier Cards
    const dossierCards = document.querySelectorAll('.dossier-card');
    const phaseStones = ['mind', 'space', 'reality', 'time'];
    dossierCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        const stone = phaseStones[idx] || 'all';
        audioEngine.playStoneChime(stone);
        gsap.fromTo(card, { scale: 0.985 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
      });
    });

    // Header Timeline Jump Button
    const btnTimeline = document.getElementById('btn-timeline');
    if (btnTimeline) {
      btnTimeline.addEventListener('click', () => {
        audioEngine.playClick();
        this.unlockTimeline(true);
      });
    }
  }

  unlockTimeline(scroll = true, targetId = 'sponsors-section') {
    if (!document.body.classList.contains('timeline-unlocked')) {
      document.body.classList.add('timeline-unlocked');
      audioEngine.playChime(660);
    }
    if (scroll) {
      setTimeout(() => {
        const targetSec = document.getElementById(targetId) || document.getElementById('sponsors-section') || document.getElementById('timeline-section');
        if (targetSec) {
          const targetY = targetSec.offsetTop || window.innerHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 50);
    }
  }

  lockTimeline() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      document.body.classList.remove('timeline-unlocked');
    }, 550);
  }

  /* --------------------------------------------------------------------------
     7. SCROLL DRIVER & GESTURES
     Every scroll advances or reverses the stone presentation!
     -------------------------------------------------------------------------- */
  initScrollAndGestures() {
    // Wheel / Trackpad Scroll Event
    window.addEventListener('wheel', (e) => {
      // If timeline is unlocked and user has scrolled down into it, let natural page scroll handle it
      if (document.body.classList.contains('timeline-unlocked') && window.scrollY > 40) return;

      const now = Date.now();
      if (now - this.lastScrollTime < this.scrollCooldown) return;

      // Threshold to prevent micro-accidental triggers
      if (Math.abs(e.deltaY) > 18) {
        this.lastScrollTime = now;
        if (this.isConvergenceActive) {
          this.endConvergence();
        }
        if (e.deltaY > 0) {
          // Scroll Down -> Next Stone or Reveal Timeline after 6th stone
          this.stepStone(1);
        } else if (e.deltaY < 0) {
          if (document.body.classList.contains('timeline-unlocked') && window.scrollY <= 10) {
            this.lockTimeline();
          } else {
            this.stepStone(-1);
          }
        }
      }
    }, { passive: true });

    // Touch Gestures: On mobile, vertical touch MUST ONLY SCROLL the page naturally!
    // Touch Gestures:
    // When locked on 6-stone showcase: swiping up/down (or left/right) advances or reverses stones!
    // When unlocked and scrolled down into the timeline/sponsors: allow normal page scrolling!
    let touchStartX = 0;
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      if (!e.touches || !e.touches[0]) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (!e.changedTouches || !e.changedTouches[0]) return;

      // If unlocked and user has scrolled down into lower sections, do not intercept - let natural page scrolling happen!
      if (document.body.classList.contains('timeline-unlocked') && window.scrollY > 40) return;

      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);

      // Check cooldown
      const now = Date.now();
      if (now - this.lastScrollTime < this.scrollCooldown) return;

      // Minimum swipe distance threshold (35px)
      if (absY > 35 || absX > 40) {
        this.lastScrollTime = now;
        if (this.isConvergenceActive) {
          this.endConvergence();
        }

        // Determine if movement is primarily forward (scroll down / swipe up or swipe left)
        // or backward (scroll up / swipe down or swipe right)
        const isForward = (absY >= absX && diffY > 0) || (absX > absY && diffX > 0);
        const isBackward = (absY >= absX && diffY < 0) || (absX > absY && diffX < 0);

        if (isForward) {
          // If at stone 6 (index 5), stepStone(1) will automatically call unlockTimeline(true)!
          this.stepStone(1);
        } else if (isBackward) {
          if (document.body.classList.contains('timeline-unlocked') && window.scrollY <= 10) {
            this.lockTimeline();
          } else {
            this.stepStone(-1);
          }
        }
      }
    }, { passive: true });

    // Scroll Down Chevrons Button Click
    const scrollBtn = document.getElementById('scroll-btn');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        audioEngine.playClick();
        if (this.isConvergenceActive) {
          this.endConvergence();
        }
        if (this.currentIndex === STONES.length - 1) {
          this.unlockTimeline(true);
        } else {
          this.stepStone(1);
        }
      });
    }
  }

  stepStone(direction) {
    if (this.isConvergenceActive) {
      this.endConvergence();
    }
    const total = STONES.length;

    // After the 6th stone (index 5) is scrolled forward, proceed to the timeline section!
    if (this.currentIndex === total - 1 && direction > 0) {
      this.unlockTimeline(true);
      return;
    }

    let nextIndex = this.currentIndex + direction;
    if (nextIndex >= total) nextIndex = 0;
    if (nextIndex < 0) nextIndex = total - 1;

    audioEngine.playStoneChime(STONES[nextIndex].id);
    this.displayStone(nextIndex, true);
  }

  /* --------------------------------------------------------------------------
     8. TRANSITION LOGIC BETWEEN STONES
     -------------------------------------------------------------------------- */
  displayStone(index, animate = true) {
    if (this.isTransitioning && animate) return;
    this.isTransitioning = true;

    const prevIndex = this.currentIndex;
    this.currentIndex = index;
    const stoneData = STONES[index];

    // Update Theme Accent Color Variables
    document.documentElement.style.setProperty('--active-stone-color', stoneData.colorHex);
    document.documentElement.style.setProperty('--active-stone-glow', stoneData.colorHex + '55');
    const threeColor = new THREE.Color(stoneData.colorHex);
    const r = Math.round(threeColor.r * 255);
    const g = Math.round(threeColor.g * 255);
    const b = Math.round(threeColor.b * 255);
    document.documentElement.style.setProperty('--active-stone-rgb', `${r}, ${g}, ${b}`);

    // Update Stage Light
    gsap.to(this.stageLight.color, {
      r: new THREE.Color(stoneData.colorThree).r,
      g: new THREE.Color(stoneData.colorThree).g,
      b: new THREE.Color(stoneData.colorThree).b,
      duration: 0.8
    });

    // Update Vertical Pager & Laser Line Segments
    const pagerItems = document.querySelectorAll('.pager-item');
    pagerItems.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
      btn.classList.toggle('passed', idx < index);
    });

    // Update Stage Roman Numeral
    document.getElementById('stage-roman').textContent = stoneData.roman;

    // Update Scroll Chevrons Label
    const scrollLabel = document.getElementById('scroll-label');
    if (scrollLabel) {
      scrollLabel.textContent = index === STONES.length - 1 ? 'EXPLORE SPONSORS & TIMELINE ↓' : 'SCROLL TO DISCOVER';
    }

    // Fade & Slide Update of Right Info Card
    const infoCard = document.getElementById('info-card');
    if (animate) {
      infoCard.classList.add('animating');
    }

    setTimeout(() => {
      this.renderCardContent(stoneData);
      if (animate) {
        infoCard.classList.remove('animating');
      }
    }, animate ? 150 : 0);

    // Smoothly restore optimal camera distance to prevent any over-zooming
    const targetZ = this.isMobile() ? 12.0 : 9.8;
    gsap.to(this.camera.position, {
      x: 0,
      y: 0,
      z: targetZ,
      duration: 0.7,
      ease: 'power2.out'
    });

    // Dynamically illuminate stage with active stone's cosmic light color
    if (this.stageLight) {
      const targetCol = new THREE.Color(stoneData.coreColor);
      gsap.to(this.stageLight.color, {
        r: targetCol.r,
        g: targetCol.g,
        b: targetCol.b,
        duration: 0.6
      });
    }

    // 3D Stone Swap Animation
    const targetScale = this.isMobile() ? 0.48 : 1.0;
    if (animate) {
      const prevStone = this.stones[prevIndex];
      const nextStone = this.stones[index];

      // Subtle bloom surge during stone transmute
      gsap.to(this.bloomPass, {
        strength: 0.65,
        duration: 0.35,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      // Outgoing Stone
      if (prevStone && prevIndex !== index) {
        gsap.to(prevStone.group.scale, {
          x: 0.001,
          y: 0.001,
          z: 0.001,
          duration: 0.55,
          ease: 'back.in(1.4)',
          onComplete: () => {
            prevStone.group.visible = false;
          }
        });
      }

      // Strictly ensure ALL other stones are hidden immediately
      this.stones.forEach((st, i) => {
        if (i !== index && i !== prevIndex) {
          gsap.killTweensOf(st.group.scale);
          gsap.killTweensOf(st.group.position);
          st.group.scale.set(0.001, 0.001, 0.001);
          st.group.position.set(0, 0, 0);
          st.group.visible = false;
        }
      });

      // Incoming Stone
      nextStone.group.visible = true;
      nextStone.group.position.set(0, 0, 0);
      nextStone.group.rotation.y += Math.PI * 0.5;

      gsap.fromTo(
        nextStone.group.scale,
        { x: 0.1 * targetScale, y: 0.1 * targetScale, z: 0.1 * targetScale },
        {
          x: targetScale,
          y: targetScale,
          z: targetScale,
          duration: 0.85,
          ease: 'elastic.out(1, 0.75)',
          delay: 0.2,
          onComplete: () => {
            this.isTransitioning = false;
            // Absolute guarantee: hide every stone except current
            this.stones.forEach((st, idx) => {
              if (idx !== index) {
                st.group.visible = false;
                st.group.scale.set(0.001, 0.001, 0.001);
              }
            });
          }
        }
      );
    } else {
      this.stones.forEach((st, i) => {
        st.group.visible = (i === index);
        st.group.position.set(0, 0, 0);
        st.group.scale.set(i === index ? targetScale : 0.001, i === index ? targetScale : 0.001, i === index ? targetScale : 0.001);
      });
      this.isTransitioning = false;
    }
  }

  renderCardContent(stone) {
    const cardIdx = document.getElementById('card-index-tag');
    if (cardIdx) cardIdx.textContent = `${stone.index} / 06`;
    const cardTheme = document.getElementById('card-marvel-theme');
    if (cardTheme) cardTheme.textContent = (stone.marvelTheme || 'SINGULARITY').toUpperCase();
    const cardTitle = document.getElementById('card-title');
    if (cardTitle) cardTitle.textContent = stone.name;

    // Update Interactive TechText Wordmark (React Bits Engine)
    if (this.techText) {
      this.techText.update({
        text: stone.name,
        accentColor: stone.colorHex
      });
    }
    const container = document.getElementById('stone-tech-text-container');
    if (container) container.setAttribute('aria-label', stone.name);

    const cardDomain = document.getElementById('card-domain');
    if (cardDomain) cardDomain.textContent = `${stone.domain} // ${stone.domainTagline || ''}`;
    const cardDesc = document.getElementById('card-desc');
    if (cardDesc) cardDesc.textContent = stone.description;

    // Dynamic Wield Button Styling
    const btnWield = document.getElementById('btn-wield-stone');
    if (btnWield) {
      btnWield.setAttribute('data-stone-id', stone.id);
      btnWield.style.setProperty('--btn-glow', stone.colorHex);
    }
  }

  /* --------------------------------------------------------------------------
     9. HEXAGONAL CONVERGENCE EFFECT
     -------------------------------------------------------------------------- */
  triggerConvergence() {
    if (this.isConvergenceActive) return;
    this.isConvergenceActive = true;

    document.body.classList.add('convergence-mode');
    const btnConv = document.getElementById('btn-convergence');
    if (btnConv) btnConv.classList.add('active');

    audioEngine.playConvergenceChord();

    // Pull camera out smoothly to showcase all 6 stones in orbit
    if (this.camera.view && this.camera.view.enabled) {
      this.camera.clearViewOffset();
      this.camera.updateProjectionMatrix();
    }

    const convZ = this.isMobile() ? 17.0 : 14.0;
    gsap.to(this.camera.position, {
      x: 0,
      y: this.isMobile() ? 0.2 : 0.5,
      z: convZ,
      duration: 1.8,
      ease: 'power2.inOut'
    });

    gsap.to(this.controls.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (this.controls) this.controls.update();
      }
    });

    // Make all stones visible and arrange in concentric spinning hexagram
    const hexRadius = this.isMobile() ? 2.1 : 3.6;
    const convScale = this.isMobile() ? 0.38 : 0.75;
    this.stones.forEach((stone, i) => {
      stone.group.visible = true;
      stone.group.position.set(0, 0, 0);
      stone.group.scale.set(0.1, 0.1, 0.1);
      const angle = (i / this.stones.length) * Math.PI * 2;
      const targetX = Math.cos(angle) * hexRadius;
      const targetY = Math.sin(angle) * hexRadius;

      gsap.to(stone.group.position, {
        x: targetX,
        y: targetY,
        z: 0,
        duration: 1.6,
        ease: 'elastic.out(1, 0.75)'
      });

      gsap.to(stone.group.scale, {
        x: convScale,
        y: convScale,
        z: convScale,
        duration: 1.2
      });

      gsap.to(stone.pointLight, {
        intensity: 2.2,
        duration: 1.0,
        yoyo: true,
        repeat: 1
      });
    });

    // Revolve whole stones constellation container 360 degrees
    gsap.killTweensOf(this.stonesContainer.rotation);
    gsap.to(this.stonesContainer.rotation, {
      z: this.stonesContainer.rotation.z + Math.PI * 2,
      duration: 3.5,
      ease: 'power2.inOut',
      onComplete: () => {
        this.endConvergence();
      }
    });
  }

  endConvergence() {
    if (!this.isConvergenceActive) return;
    this.isConvergenceActive = false;

    document.body.classList.remove('convergence-mode');
    const btnConv = document.getElementById('btn-convergence');
    if (btnConv) btnConv.classList.remove('active');

    // Restore single stone viewport camera offset
    this.updateCameraForViewport();

    // Reset container rotation smoothly to level
    gsap.to(this.stonesContainer.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.0,
      ease: 'power2.out'
    });

    // Smooth camera glide from wide convergence view into hero inspection view
    const targetZ = this.isMobile() ? 12.0 : 9.8;
    const targetScale = this.isMobile() ? 0.48 : 1.0;
    gsap.to(this.camera.position, {
      x: 0,
      y: 0,
      z: targetZ,
      duration: 1.3,
      ease: 'power3.out'
    });

    gsap.to(this.controls.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.3,
      ease: 'power3.out',
      onUpdate: () => {
        if (this.controls) this.controls.update();
      }
    });

    // Collapse all stones back to center: focus ONLY currentIndex
    this.stones.forEach((stone, i) => {
      gsap.killTweensOf(stone.group.position);
      gsap.killTweensOf(stone.group.scale);
      gsap.killTweensOf(stone.pointLight);

      if (i === this.currentIndex) {
        stone.group.visible = true;
        stone.pointLight.intensity = 1.8;

        gsap.to(stone.group.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.0,
          ease: 'power3.out'
        });

        gsap.to(stone.group.scale, {
          x: targetScale,
          y: targetScale,
          z: targetScale,
          duration: 1.0,
          ease: 'power3.out'
        });
      } else {
        // Hide every other stone completely
        gsap.to(stone.group.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
          ease: 'power2.in'
        });

        gsap.to(stone.group.scale, {
          x: 0.001,
          y: 0.001,
          z: 0.001,
          duration: 0.8,
          ease: 'power2.in',
          onComplete: () => {
            stone.group.visible = false;
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. ENERGY PULSE & GEMSTONE SHINE
     -------------------------------------------------------------------------- */
  pulseCurrentStone() {
    const activeStone = this.stones[this.currentIndex];
    if (!activeStone) return;

    audioEngine.playEnergyPulse();

    // 1. Dazzling crystal emissive flare on the gem facets (shines with brilliant radiance!)
    if (activeStone.gemMat) {
      gsap.to(activeStone.gemMat, {
        emissiveIntensity: 1.15,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
        onComplete: () => {
          activeStone.gemMat.emissiveIntensity = 0.18;
        }
      });
    }

    // 2. High-intensity point light flare
    gsap.to(activeStone.pointLight, {
      intensity: 3.8,
      duration: 0.25,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
      onComplete: () => {
        activeStone.pointLight.intensity = 1.8;
      }
    });

    // 3. Core expansion
    gsap.to(activeStone.coreMesh.scale, {
      x: 1.4,
      y: 1.4,
      z: 1.4,
      duration: 0.35,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    // 4. White facet corner lines radiance surge
    if (activeStone.wireMesh && activeStone.wireMesh.material) {
      gsap.to(activeStone.wireMesh.material, {
        opacity: 0.9,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
        onComplete: () => {
          activeStone.wireMesh.material.opacity = 0.45;
        }
      });
    }

    // 5. Blooming radiance
    gsap.to(this.bloomPass, {
      strength: 0.95,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });
  }

  /* --------------------------------------------------------------------------
     11. WIREFRAME DIAGNOSTICS
     -------------------------------------------------------------------------- */
  toggleWireframe() {
    this.isWireframe = !this.isWireframe;
    this.stones.forEach(st => {
      st.gemMat.wireframe = this.isWireframe;
      st.wireMesh.visible = !this.isWireframe;
    });

    const btn = document.getElementById('btn-wireframe');
    btn.classList.toggle('active', this.isWireframe);
    audioEngine.playClick();
  }

  /* --------------------------------------------------------------------------
     12. EVENT LISTENERS & SHORTCUTS
     -------------------------------------------------------------------------- */
  initEventListeners() {
    // Window Resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.composer.setSize(width, height);

      this.updateCameraForViewport();
      this.controls.target.set(this.stoneStageX, this.stoneStageY, 0);

      const targetScale = this.isMobile() ? 0.48 : 1.0;
      const cur = this.stones[this.currentIndex];
      if (cur && !this.isConvergenceActive) {
        cur.group.scale.set(targetScale, targetScale, targetScale);
      }
    });

    // Audio Button Toggle (Safely guarded if element is present)
    const btnAudio = document.getElementById('btn-audio');
    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        const isUnmuted = audioEngine.toggleMute();
        btnAudio.classList.toggle('audio-unmuted', isUnmuted);
        btnAudio.classList.toggle('audio-muted', !isUnmuted);
        btnAudio.classList.toggle('active', isUnmuted);
      });
      btnAudio.classList.add('audio-muted');
    }

    // Wireframe Toggle
    document.getElementById('btn-wireframe').addEventListener('click', () => {
      this.toggleWireframe();
    });

    // Convergence Button Toggle
    document.getElementById('btn-convergence').addEventListener('click', () => {
      if (this.isConvergenceActive) {
        this.endConvergence();
      } else {
        this.triggerConvergence();
      }
    });

    // Pulse Button (if present)
    const btnPulse = document.getElementById('btn-pulse');
    if (btnPulse) {
      btnPulse.addEventListener('click', () => {
        this.pulseCurrentStone();
      });
    }

    // Resonate Button (if present)
    const btnSoundPlay = document.getElementById('btn-sound-play');
    if (btnSoundPlay) {
      btnSoundPlay.addEventListener('click', () => {
        audioEngine.playStoneChime(STONES[this.currentIndex].id);
      });
    }

    // Keyboard Hotkeys
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toUpperCase();
      if (key >= '1' && key <= '6') {
        const idx = parseInt(key, 10) - 1;
        audioEngine.playStoneChime(STONES[idx].id);
        this.displayStone(idx, true);
      } else if (e.code === 'ArrowDown' || e.code === 'PageDown') {
        e.preventDefault();
        this.stepStone(1);
      } else if (e.code === 'ArrowUp' || e.code === 'PageUp') {
        e.preventDefault();
        this.stepStone(-1);
      } else if (e.code === 'Space') {
        e.preventDefault();
        if (this.isConvergenceActive) {
          this.endConvergence();
        } else {
          this.triggerConvergence();
        }
      } else if (e.code === 'Escape') {
        if (this.isConvergenceActive) {
          this.endConvergence();
        }
      } else if (key === 'P' || key === 'S') {
        this.pulseCurrentStone();
      } else if (key === 'W') {
        this.toggleWireframe();
      } else if (key === 'M') {
        if (btnAudio) btnAudio.click();
      }
    });

    // One-time gesture audio unlocker for browser security policies
    const unlockAudio = () => {
      audioEngine.init();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });
  }

  /* --------------------------------------------------------------------------
     13. RENDER & ANIMATION LOOP
     -------------------------------------------------------------------------- */
  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Subtle drift of starfield
    if (this.starfield) {
      this.starfield.rotation.y = elapsedTime * 0.006;
    }

    // Update active stone animations
    this.stones.forEach((stone, i) => {
      if (stone.group.visible) {
        stone.update(elapsedTime, delta);

        // Lively vertical levitation on the hero stage
        if (!this.isConvergenceActive) {
          stone.group.position.y = this.stoneStageY + Math.sin(elapsedTime * 2.8) * 0.16;
        }
      }
    });

    this.controls.update();
    this.composer.render();
  }
}

// Launch on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  new InfinityScrollShowcase();
});
