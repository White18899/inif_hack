# Marvel Infinity Stones // 3D Minimalist Showcase

A high-fidelity 3D interactive archival exhibition of Marvel's six Infinity Stones rendered with physically based crystal optics (`MeshPhysicalMaterial`), HDR post-processing bloom, and procedural cosmic Web Audio sound design.

Designed with a high-contrast minimalist aesthetic: monolithic obsidian black backdrop, architectural typography (`Syne`, `Space Grotesk`, `Inter`), and pure white technical metadata HUD.

> 📖 **Deep Dive Documentation**: For an in-depth breakdown of how the lights, color gradients, 3D coordinate spaces, procedural crystal geometries, and audio engine work, see [**HOW_IT_WORKS.md**](HOW_IT_WORKS.md).

---

## 💎 The 6 Singularities

| Specimen | MCU Color | Artifact / Vessel | Primary Domain | Harmonic Frequency |
|---|---|---|---|---|
| **01 SPACE** | Cosmic Blue (`#00d2ff`) | The Tesseract (4D Hypercube) | Spatial manipulation & wormholes | `432.18 THz` |
| **02 MIND** | Solar Gold (`#ffd700`) | Chitauri Scepter / Vision | Psionic intellect & consciousness | `528.00 THz` |
| **03 REALITY** | Crimson Red (`#ff1744`) | The Aether | Metamorphic matter alteration | `612.44 THz` |
| **04 POWER** | Celestial Purple (`#b026ff`) | The Orb of Morag | Kinetic destruction & energy surge | `741.89 THz` |
| **05 TIME** | Mystic Emerald (`#00ff88`) | Eye of Agamotto | Chronomancy & temporal loops | `852.12 THz` |
| **06 SOUL** | Solar Amber (`#ff7b00`) | Vormir Shrine | Spiritual consciousness & Soul World | `963.00 THz` |

---

## ⚡ Core Features

1. **Dual Viewing Modes**:
   - **Constellation Orbit Mode**: All 6 stones levitate in a circular cosmic array with synchronized harmonic oscillation.
   - **Macro Specimen Inspection Mode**: Smooth cinematic GSAP camera dolly zoom to 360° inspect any individual stone.
2. **Hexagonal Convergence ("The Snap")**:
   - **Automatic Opening Sequence**: Plays immediately upon opening the website, bringing all 6 Infinity Stones together in a rotating cosmic hexagram before focusing on Specimen 1.
   - **Interactive Trigger**: Can be re-triggered or toggled anytime via the **✦ CONVERGENCE** button or `Space` key.
3. **Procedural Cosmic Audio Engine**:
   - Built on the Web Audio API with zero external dependencies.
   - Deep space sub-bass drone with resonant chord chimes calibrated to each stone's frequency.
4. **Interactive Diagnostics**:
   - Energy Pulse discharge effect (`P`).
   - Crystalline Wireframe toggle (`W`).
   - Click-to-inspect 3D Raycasting.

---

## ⌨️ Hotkeys Reference

| Key | Action |
|---|---|
| `1` - `6` | Focus specimen directly (Space &rarr; Soul) |
| `Space` | Activate Hexagonal Convergence sequence |
| `Esc` | Return to Constellation Ring view |
| `P` | Discharge kinetic Energy Pulse |
| `W` | Toggle Crystal Wireframe diagnostics |
| `M` | Toggle Cosmic Synthesizer (Audio) |
| `?` | Toggle Terminal Shortcuts modal |
| `Drag Mouse` | 360° orbital rotation |
| `Scroll` | Zoom in / out |

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build production bundle
npm run build
```
