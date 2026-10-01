/**
 * LatticeLoader component from React Bits
 * Ported to high-performance JavaScript + CSS
 */

const PATTERNS = {
  arrow: { 3: { cells: [1, 2, 3, 0, 1, 2, 1, 2, 3], loop: 7.2, scale: 1 } },
  dots: { 3: { cells: [0, 1, 2, 0, 1, 2, 0, 1, 2], loop: 3, scale: 2.4 } },
  ripple: { 3: { cells: [2, 1, 2, 1, 0, 1, 2, 1, 2], loop: 4.8, scale: 1.5 } },
  spiral: { 3: { cells: [0, 1, 2, 7, 8, 3, 6, 5, 4], loop: 9, scale: 1.2, lit: 0.35 } },
  orbit: {
    3: { cells: [0, 1, 2, 7, null, 3, 6, 5, 4], loop: 8, scale: 1.2 },
    4: { cells: [0, 1, 2, 3, 11, null, null, 4, 10, null, null, 5, 9, 8, 7, 6], loop: 6, scale: 1.2, lit: 0.45 }
  },
  snake: {
    3: { cells: [0, 1, 2, 5, 4, 3, 6, 7, 8], loop: 9, scale: 1, lit: 0.35 },
    4: { cells: [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12], loop: 16, scale: 1, lit: 0.25 }
  },
  sweep: { 4: { cells: [0, 1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6], loop: 5, scale: 1, lit: 0.45 } },
  spin: { 4: { cells: [0, 0, 1, 1, 0, 0, 1, 1, 3, 3, 2, 2, 3, 3, 2, 2], loop: 4, scale: 1.6, lit: 0.35 } },
  rain: { 4: { cells: [0, 2, 1, 3, 1, 3, 2, 4, 2, 4, 3, 5, 3, 5, 4, 6], loop: 4, scale: 1.2, lit: 0.35 } },
  pulse: { 4: { cells: [2, 1, 1, 2, 1, 0, 0, 1, 1, 0, 0, 1, 2, 1, 1, 2], loop: 2.4, scale: 2.5, lit: 0.45 } }
};

const DEFAULT_PATTERN = { 3: 'orbit', 4: 'sweep' };

const MARKS = {
  3: { done: [2, 3, 5, 7], error: [0, 2, 4, 6, 8] },
  4: { done: [7, 8, 10, 13], error: [0, 3, 5, 6, 9, 10, 12, 15] }
};

const resolvePattern = (pattern, grid) => {
  if (typeof pattern === 'string') {
    const named = PATTERNS[pattern];
    return (named && named[grid]) || PATTERNS[DEFAULT_PATTERN[grid]][grid];
  }
  const cells = Array.from({ length: grid * grid }, (_, i) => pattern.cells[i] ?? null);
  const max = Math.max(0, ...cells.filter(v => v != null));
  return { cells, loop: pattern.loop ?? max + 4.2, scale: pattern.scale ?? 1, lit: pattern.lit ?? 0.62 };
};

const fmt = (ds) => (ds < 600 ? `${(ds / 10).toFixed(1)}s` : `${Math.floor(ds / 600)}m ${((ds % 600) / 10).toFixed(1)}s`);

export function createLatticeLoader(container, options = {}) {
  const {
    label = 'Loading',
    doneLabel = 'Ready in',
    errorLabel = 'Failed after',
    pattern = 'orbit',
    grid = 3,
    shape = 'round',
    color = '#ffffff',
    doneColor = '#22c55e',
    errorColor = '#ef4444',
    cellSize = 7,
    gap = 3,
    fontSize = 13,
    step = 90,
    idleOpacity = 0.18,
    glow = true,
    glowColor = 'rgba(255, 51, 102, 0.45)',
    showTimer = true
  } = options;

  const n = grid === 4 ? 4 : 3;
  const pat = resolvePattern(pattern, n);
  const marks = MARKS[n];
  const d = step * pat.scale;
  const cycle = Math.round(pat.loop * d);

  const root = document.createElement('span');
  root.setAttribute('role', 'status');
  root.className = 'lattice-loader';
  root.setAttribute('data-status', 'working');
  root.setAttribute('data-shape', shape);
  if (glow) root.setAttribute('data-glow', '');

  root.style.setProperty('--ll-n', n);
  root.style.setProperty('--ll-cell', `${cellSize}px`);
  root.style.setProperty('--ll-gap', `${gap}px`);
  root.style.setProperty('--ll-font', `${fontSize}px`);
  root.style.setProperty('--ll-color', color);
  root.style.setProperty('--ll-mark', doneColor);
  root.style.setProperty('--ll-idle', idleOpacity);
  root.style.setProperty('--ll-glow', glowColor || color);
  root.style.setProperty('--ll-mark-glow', glowColor || doneColor);
  root.style.setProperty('--ll-cycle', `${cycle}ms`);

  // Grid element
  const gridEl = document.createElement('span');
  gridEl.className = 'lattice-loader__grid';
  gridEl.setAttribute('aria-hidden', 'true');

  // Layer 1: Run layer
  const runLayer = document.createElement('span');
  runLayer.className = 'lattice-loader__layer lattice-loader__run';

  pat.cells.forEach((unit) => {
    const cell = document.createElement('span');
    cell.className = 'lattice-loader__cell';
    if (unit == null) {
      cell.setAttribute('data-hole', '');
    } else {
      if (pat.lit && pat.lit !== 0.62) {
        cell.setAttribute('data-lit', Math.round(pat.lit * 100));
      }
      cell.style.animationDelay = `${Math.round(unit * d)}ms`;
    }
    runLayer.appendChild(cell);
  });

  // Layer 2: Mark layer (checkmark / cross)
  const markLayer = document.createElement('span');
  markLayer.className = 'lattice-loader__layer lattice-loader__mark';

  pat.cells.forEach((_, i) => {
    const cell = document.createElement('span');
    cell.className = 'lattice-loader__cell';
    if (marks.done.includes(i)) {
      cell.setAttribute('data-on', '');
    }
    markLayer.appendChild(cell);
  });

  gridEl.appendChild(runLayer);
  gridEl.appendChild(markLayer);
  root.appendChild(gridEl);

  // Label group
  const labelEl = document.createElement('span');
  labelEl.className = 'lattice-loader__label';
  labelEl.setAttribute('aria-hidden', 'true');

  const textWorking = document.createElement('span');
  textWorking.className = 'lattice-loader__text';
  textWorking.setAttribute('data-active', '');
  textWorking.textContent = label;

  const textDone = document.createElement('span');
  textDone.className = 'lattice-loader__text';
  textDone.textContent = doneLabel;

  const textError = document.createElement('span');
  textError.className = 'lattice-loader__text';
  textError.textContent = errorLabel;

  labelEl.appendChild(textWorking);
  labelEl.appendChild(textDone);
  labelEl.appendChild(textError);
  root.appendChild(labelEl);

  // Stopwatch timer
  let timerEl = null;
  if (showTimer) {
    timerEl = document.createElement('span');
    timerEl.className = 'lattice-loader__timer';
    timerEl.setAttribute('aria-hidden', 'true');
    timerEl.textContent = '0.0s';
    root.appendChild(timerEl);
  }

  // Clear container & mount
  container.innerHTML = '';
  container.appendChild(root);

  // Timer logic
  let timerId = null;
  const startedAt = performance.now();
  let currentDs = 0;

  timerId = setInterval(() => {
    currentDs = Math.floor((performance.now() - startedAt) / 100);
    if (timerEl) {
      timerEl.textContent = fmt(currentDs);
    }
  }, 100);

  // Set status helper
  const setStatus = (status = 'done') => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    root.setAttribute('data-status', status);
    root.style.setProperty('--ll-mark', status === 'error' ? errorColor : doneColor);

    // Update mark cells
    const markCells = markLayer.querySelectorAll('.lattice-loader__cell');
    markCells.forEach((c, idx) => {
      const isOn = (status === 'error' ? marks.error : marks.done).includes(idx);
      if (isOn) {
        c.setAttribute('data-on', '');
      } else {
        c.removeAttribute('data-on');
      }
    });

    // Update text labels
    textWorking.removeAttribute('data-active');
    textDone.removeAttribute('data-active');
    textError.removeAttribute('data-active');

    if (status === 'done') {
      textDone.setAttribute('data-active', '');
    } else if (status === 'error') {
      textError.setAttribute('data-active', '');
    } else {
      textWorking.setAttribute('data-active', '');
    }
  };

  const destroy = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  return { root, setStatus, destroy };
}
