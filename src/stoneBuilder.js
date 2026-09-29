import * as THREE from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

/**
 * Procedural Mineral Bump Map Generator
 * Adds microscopic crystal grain, cleavage fissures, and stone texture.
 */
let sharedMineralBumpMap = null;
function getMineralBumpMap() {
  if (sharedMineralBumpMap) return sharedMineralBumpMap;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Neutral base
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  // Layer 1: High-frequency mineral grain
  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 48;
    data[i] = Math.min(255, Math.max(0, 128 + grain));
    data[i + 1] = data[i];
    data[i + 2] = data[i];
    data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);

  // Layer 2: Natural crystalline crack lines & veins
  ctx.strokeStyle = 'rgba(240, 240, 240, 0.35)';
  ctx.lineWidth = 1.4;
  for (let v = 0; v < 22; v++) {
    ctx.beginPath();
    let x = Math.random() * 512;
    let y = Math.random() * 512;
    ctx.moveTo(x, y);
    for (let s = 0; s < 5; s++) {
      x += (Math.random() - 0.5) * 90;
      y += (Math.random() - 0.5) * 90;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  sharedMineralBumpMap = new THREE.CanvasTexture(canvas);
  sharedMineralBumpMap.wrapS = THREE.RepeatWrapping;
  sharedMineralBumpMap.wrapT = THREE.RepeatWrapping;
  sharedMineralBumpMap.repeat.set(2, 2);
  return sharedMineralBumpMap;
}

/**
 * Creates an authentic multifaceted Cushion Emerald Cut Gemstone for the Time Stone.
 * 12-sided stepped brilliant cut with flat table, dual-stepped crown, girdle, and pavilion.
 */
function createEmeraldGemGeometry(n = 12) {
  const positions = [];
  const angles = [];
  for (let i = 0; i < n; i++) {
    angles.push((i / n) * Math.PI * 2 + Math.PI / n);
  }

  // Cushion aspect ratio with 12 radial facets
  const r0 = angles.map(a => new THREE.Vector3(Math.cos(a) * 0.72 * (1 + 0.12 * Math.cos(2 * a)), 0.58, Math.sin(a) * 0.6 * (1 - 0.12 * Math.cos(2 * a))));
  const topCenter = new THREE.Vector3(0, 0.59, 0);

  // Crown upper stepped facet tier
  const rCrown = angles.map(a => new THREE.Vector3(Math.cos(a) * 1.05 * (1 + 0.12 * Math.cos(2 * a)), 0.35, Math.sin(a) * 0.88 * (1 - 0.12 * Math.cos(2 * a))));

  // Girdle facets
  const r1 = angles.map(a => new THREE.Vector3(Math.cos(a) * 1.30 * (1 + 0.12 * Math.cos(2 * a)), 0.12, Math.sin(a) * 1.08 * (1 - 0.12 * Math.cos(2 * a))));
  const r2 = angles.map(a => new THREE.Vector3(Math.cos(a) * 1.30 * (1 + 0.12 * Math.cos(2 * a)), -0.12, Math.sin(a) * 1.08 * (1 - 0.12 * Math.cos(2 * a))));

  // Pavilion stepped facet tier
  const r3 = angles.map(a => new THREE.Vector3(Math.cos(a) * 0.80 * (1 + 0.12 * Math.cos(2 * a)), -0.58, Math.sin(a) * 0.66 * (1 - 0.12 * Math.cos(2 * a))));
  const bottomCulet = new THREE.Vector3(0, -0.98, 0);

  function addTri(p1, p2, p3) {
    positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
  }
  function addQuad(p1, p2, p3, p4) {
    addTri(p1, p2, p3);
    addTri(p1, p3, p4);
  }

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    addTri(topCenter, r0[i], r0[next]);
    addQuad(r0[i], rCrown[i], rCrown[next], r0[next]);
    addQuad(rCrown[i], r1[i], r1[next], rCrown[next]);
    addQuad(r1[i], r2[i], r2[next], r1[next]);
    addQuad(r2[i], r3[i], r3[next], r2[next]);
    addTri(r3[i], bottomCulet, r3[next]);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Creates an authentic Cosmic Raw Random-Cut Mineral Gemstone.
 * Procedurally carves a 3D mineral volume using 34 intersecting planar fracture cuts (half-spaces).
 * Produces crisp, asymmetric, faceted cleavage planes, sharp irregular corners, and natural rock facets.
 */
function createRandomCutStoneGeometry(seed = 42, sx = 1.15, sy = 1.35, sz = 1.05) {
  let s = seed;
  function rnd() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  }

  const planes = [];
  const numPlanes = 30;

  for (let i = 0; i < numPlanes; i++) {
    const z = (rnd() * 2.0) - 1.0;
    const phi = rnd() * Math.PI * 2;
    const r = Math.sqrt(Math.max(0, 1.0 - z * z));
    const nx = r * Math.cos(phi);
    const ny = z;
    const nz = r * Math.sin(phi);

    // Natural stone habit dimensions
    const ex = nx * sx;
    const ey = ny * sy;
    const ez = nz * sz;
    const baseDist = Math.sqrt(ex * ex + ey * ey + ez * ez);

    // Varied cut depths: large primary fracture planes and fine edge bevels
    const depthFactor = (i % 4 === 0) ? (0.78 + rnd() * 0.12) : (0.90 + rnd() * 0.22);
    const d = baseDist * depthFactor;

    planes.push({ nx, ny, nz, d });
  }

  // 4 defining primary crystalline fracture cuts
  planes.push({ nx: 0.55, ny: 0.65, nz: 0.40, d: 1.00 });   // Prominent upper table facet
  planes.push({ nx: -0.60, ny: 0.50, nz: -0.55, d: 0.95 }); // Sharp back bevel
  planes.push({ nx: 0.65, ny: -0.60, nz: -0.40, d: 0.98 }); // Lower chisel cut
  planes.push({ nx: -0.50, ny: -0.75, nz: 0.40, d: 0.92 }); // Basal cleavage

  const total = planes.length;
  const vertices = [];

  for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
      for (let k = j + 1; k < total; k++) {
        const p1 = planes[i];
        const p2 = planes[j];
        const p3 = planes[k];

        const det = p1.nx * (p2.ny * p3.nz - p2.nz * p3.ny) -
                    p1.ny * (p2.nx * p3.nz - p2.nz * p3.nx) +
                    p1.nz * (p2.nx * p3.ny - p2.ny * p3.nx);

        if (Math.abs(det) < 1e-4) continue;

        const x = (p1.d * (p2.ny * p3.nz - p2.nz * p3.ny) - p1.ny * (p2.d * p3.nz - p2.nz * p3.d) + p1.nz * (p2.d * p3.ny - p2.ny * p3.d)) / det;
        const y = (p1.nx * (p2.d * p3.nz - p2.nz * p3.d) - p1.d * (p2.nx * p3.nz - p2.nz * p3.nx) + p1.nz * (p2.nx * p3.d - p2.d * p3.nx)) / det;
        const z = (p1.nx * (p2.ny * p3.d - p2.d * p3.ny) - p1.ny * (p2.nx * p3.d - p2.d * p3.nx) + p1.d * (p2.nx * p3.ny - p2.ny * p3.nx)) / det;

        let inside = true;
        for (let m = 0; m < total; m++) {
          const pm = planes[m];
          if (pm.nx * x + pm.ny * y + pm.nz * z > pm.d + 1e-3) {
            inside = false;
            break;
          }
        }

        if (inside) {
          vertices.push(new THREE.Vector3(x, y, z));
        }
      }
    }
  }

  const geo = new ConvexGeometry(vertices);
  geo.center(); // Center around origin for balanced rotation
  geo.computeVertexNormals();
  return geo;
}

/**
 * Returns the bespoke Marvel stone geometry in the user's chosen organic crystal shape,
 * enriched with more corners & facets and solid watertight construction.
 */
function createRawStoneGeometry(stoneId) {
  if (stoneId === 'time') {
    return createEmeraldGemGeometry(12);
  }
  if (stoneId === 'soul') {
    return createRandomCutStoneGeometry(42, 1.15, 1.35, 1.05);
  }
  if (stoneId === 'mind') {
    return createRandomCutStoneGeometry(77, 1.08, 1.48, 1.02);
  }
  if (stoneId === 'power') {
    return createRandomCutStoneGeometry(93, 1.25, 1.28, 1.18);
  }
  if (stoneId === 'space') {
    return createRandomCutStoneGeometry(17, 1.20, 1.30, 1.12);
  }
  if (stoneId === 'reality') {
    return createRandomCutStoneGeometry(51, 1.16, 1.34, 1.14);
  }

  return createRandomCutStoneGeometry(42, 1.20, 1.20, 1.20);
}

/**
 * Sets up an animated cosmic light gradient across the 3D crystal mineral facets.
 * Returns an update function that flows a breathing, undulating wave of celestial light
 * through the crystal facets on each animation frame.
 */
function setupAnimatedStoneGradient(geometry, stoneData) {
  geometry.computeBoundingBox();
  const bbox = geometry.boundingBox;
  const minY = bbox.min.y;
  const maxY = bbox.max.y;
  const height = Math.max(0.001, maxY - minY);

  const minX = bbox.min.x;
  const maxX = bbox.max.x;
  const width = Math.max(0.001, maxX - minX);

  const minZ = bbox.min.z;
  const maxZ = bbox.max.z;
  const depth = Math.max(0.001, maxZ - minZ);

  const pos = geometry.attributes.position;
  const vertexNormCoords = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    vertexNormCoords[i * 3]     = (pos.getX(i) - minX) / width;
    vertexNormCoords[i * 3 + 1] = (pos.getY(i) - minY) / height;
    vertexNormCoords[i * 3 + 2] = (pos.getZ(i) - minZ) / depth;
  }

  const colors = new Float32Array(pos.count * 3);
  const colorAttr = new THREE.BufferAttribute(colors, 3);
  geometry.setAttribute('color', colorAttr);

  // 1. Lite apex base: high-luminance pale crystalline highlight
  const cLiteBase = new THREE.Color(stoneData.coreColor).lerp(new THREE.Color(0xffffff), 0.62);
  // 2. Mid waist color: vibrant authentic stone hue
  const cMid = new THREE.Color(stoneData.colorThree);
  // 3. Deep dark base color: intense dark mineral shadow
  const cDark = new THREE.Color(stoneData.darkColor).multiplyScalar(0.36);

  const tmpColor = new THREE.Color();
  const tmpLite = new THREE.Color();

  const updateGradient = (time) => {
    // Breathing luminous pulse on the apex (faster dynamic cycle)
    const apexPulse = 0.5 + Math.sin(time * 4.6) * 0.30;
    tmpLite.copy(cLiteBase).lerp(new THREE.Color(0xffffff), apexPulse);

    for (let i = 0; i < pos.count; i++) {
      const nx = vertexNormCoords[i * 3];
      const ny = vertexNormCoords[i * 3 + 1];
      const nz = vertexNormCoords[i * 3 + 2];

      // Traveling harmonic wave of cosmic light rippling through the facets at accelerated speed
      const wave = Math.sin(time * 4.5 + nx * 3.0 + nz * 2.4) * 0.22 + Math.cos(time * 3.5 + ny * 2.6) * 0.13;
      let t = ny * 0.88 + nx * 0.12 + wave;
      t = Math.max(0, Math.min(1, t));

      if (t < 0.5) {
        // Deep dark mineral base -> vibrant body
        const factor = Math.pow(t * 2.0, 1.25);
        tmpColor.copy(cDark).lerp(cMid, factor);
      } else {
        // Vibrant body -> luminous breathing apex
        const factor = Math.pow((t - 0.5) * 2.0, 0.82);
        tmpColor.copy(cMid).lerp(tmpLite, factor);
      }

      colors[i * 3]     = tmpColor.r;
      colors[i * 3 + 1] = tmpColor.g;
      colors[i * 3 + 2] = tmpColor.b;
    }

    colorAttr.needsUpdate = true;
  };

  // Initial calculation at time = 0
  updateGradient(0);

  return updateGradient;
}

/**
 * Creates an authentic Marvel Infinity Stone with raw crystalline facets,
 * internal energy veins, subsurface light transmission, and radiant halo.
 */
export function createStoneMesh(stoneData) {
  const group = new THREE.Group();
  group.name = stoneData.id;
  group.userData = { stoneData };

  // 1. Generate Organic Multifaceted Mineral Geometry with Animated Cosmic Gradient
  const stoneGeo = createRawStoneGeometry(stoneData.id);
  const updateGradient = setupAnimatedStoneGradient(stoneGeo, stoneData);

  // 2. High-Fidelity Solid Mineral Gem Material (Polished shining factor & dramatic light-to-dark gradient)
  const bumpMap = getMineralBumpMap();

  const gemMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,         // White base so vertexColors renders the exact lite-to-dark gradient!
    vertexColors: true,      // Enables multi-toned light-to-dark gradient
    emissive: stoneData.colorThree,
    emissiveIntensity: 0.18, // Radiant crystalline inner luminescence!
    roughness: 0.14,         // Silky polished mineral finish (adds shining factor)
    metalness: 0.06,         // Subtle crystalline luster
    transmission: 0.0,       // 100% SOLID OPAQUE STONE
    transparent: false,
    opacity: 1.0,
    depthWrite: true,
    ior: 1.76,               // Authentic sapphire/diamond refractive index
    specularIntensity: 1.0,  // Crisp, sparkling facet highlights
    specularColor: new THREE.Color(0xffffff),
    clearcoat: 0.55,         // Polished gem clearcoat glaze for sparkling facet glints
    clearcoatRoughness: 0.06,
    bumpMap: bumpMap,
    bumpScale: 0.015,
    flatShading: true        // Crisp planar facets with independent gemstone sparkle
  });

  const gemMesh = new THREE.Mesh(stoneGeo, gemMat);
  gemMesh.castShadow = true;
  gemMesh.receiveShadow = true;
  group.add(gemMesh);

  // 3. Internal Crystalline Energy Veins (Hidden on solid stone)
  const veinGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.05, 1));
  const veinMat = new THREE.LineBasicMaterial({
    color: stoneData.coreColor,
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending
  });
  const veinMesh = new THREE.LineSegments(veinGeo, veinMat);
  veinMesh.visible = false;
  group.add(veinMesh);

  // Specular Diamond Facet & Corner Lines (Crisp geometric corner edges visible at all times)
  const wireMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });
  const wireMesh = new THREE.LineSegments(new THREE.WireframeGeometry(stoneGeo), wireMat);
  wireMesh.visible = true; // Always visible on top of the solid stone facets!
  group.add(wireMesh);

  // 4. Inner Cosmic Energy Singularity Core (Hidden - stone is completely solid)
  const coreGeo = new THREE.SphereGeometry(0.24, 18, 18);
  const coreMat = new THREE.MeshBasicMaterial({
    color: stoneData.coreColor,
    transparent: true,
    opacity: 0.0
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreMesh.visible = false;
  group.add(coreMesh);

  // Frontal & rear cosmic radiance point lights (bathes tumbling facets in vibrant cosmic light)
  const pointLight = new THREE.PointLight(stoneData.coreColor, 1.8, 10, 1.4);
  pointLight.position.set(0, 1.0, 2.6);
  group.add(pointLight);

  const backLight = new THREE.PointLight(stoneData.colorThree, 1.3, 8, 1.4);
  backLight.position.set(0, -1.0, -2.6);
  group.add(backLight);

  // 5. Stone-Specific Cosmic Halo Phenomena
  const artifactsGroup = new THREE.Group();
  artifactsGroup.name = 'artifacts';

  if (stoneData.id === 'space') {
    // Ethereal Tesseract Energy Cage (Subtle, sleek, doesn't overwhelm the stone)
    const cageGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
    const cageEdges = new THREE.EdgesGeometry(cageGeo);
    const cageLine = new THREE.LineSegments(
      cageEdges,
      new THREE.LineBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending })
    );
    artifactsGroup.add(cageLine);
  } else if (stoneData.id === 'mind') {
    // Neural Psionic Filament Rings (Delicate, faint neural ribbons - no harsh X-slice!)
    const ringGeo = new THREE.TorusGeometry(1.92, 0.005, 6, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.set(Math.PI / 3.5, 0, Math.PI / 6);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.set(-Math.PI / 3.5, 0, -Math.PI / 6);
    artifactsGroup.add(ring1, ring2);
  } else if (stoneData.id === 'reality') {
    // Swirling Dark Aether Mist Rings
    for (let r = 0; r < 2; r++) {
      const radius = 1.7 + r * 0.35;
      const ringGeo = new THREE.TorusGeometry(radius, 0.015, 6, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xff1744,
        transparent: true,
        opacity: 0.3 - r * 0.08,
        blending: THREE.AdditiveBlending
      });
      const aetherRing = new THREE.Mesh(ringGeo, ringMat);
      aetherRing.rotation.x = Math.random() * Math.PI;
      aetherRing.rotation.y = Math.random() * Math.PI;
      aetherRing.userData = { speedX: 0.006 + r * 0.004, speedY: 0.008 + r * 0.003 };
      artifactsGroup.add(aetherRing);
    }
  } else if (stoneData.id === 'power') {
    // Celestial Planetary Fragment Orbit (Inclined 3D asteroid cloud - no flat equator slice!)
    const debrisGroup = new THREE.Group();
    const debrisGeo = new THREE.TetrahedronGeometry(0.055, 0);
    const debrisMat = new THREE.MeshBasicMaterial({
      color: 0xdf80ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < 18; i++) {
      const scale = 0.6 + Math.random() * 0.7;
      const chunk = new THREE.Mesh(debrisGeo, debrisMat);
      chunk.scale.set(scale, scale, scale);
      const theta = (i / 18) * Math.PI * 2;
      const rad = 1.85 + (Math.random() - 0.5) * 0.4;
      const yOffset = (Math.random() - 0.5) * 0.7;
      chunk.position.set(Math.cos(theta) * rad, yOffset, Math.sin(theta) * rad);
      debrisGroup.add(chunk);
    }
    debrisGroup.rotation.set(Math.PI / 4, 0, Math.PI / 6);
    artifactsGroup.add(debrisGroup);
  } else if (stoneData.id === 'time') {
    // Doctor Strange Kamar-Taj Eldritch Time Mandalas
    const mandalaGroup = new THREE.Group();

    // 1. Concentric Runic Rings
    const ring1Geo = new THREE.RingGeometry(1.68, 1.72, 64);
    const ring2Geo = new THREE.RingGeometry(2.1, 2.15, 64);
    const runicMat1 = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const runicMat2 = new THREE.MeshBasicMaterial({
      color: 0x69f0ae,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ring1Geo, runicMat1);
    const ring2 = new THREE.Mesh(ring2Geo, runicMat2);
    ring1.rotation.x = Math.PI / 2;
    ring2.rotation.x = Math.PI / 2;

    // 2. Doctor Strange Mystic Square/Octagram in inner mandala
    const squareGeo = new THREE.BufferGeometry();
    const s = 1.18;
    const sqPts = [
      -s, 0, -s,   s, 0, -s,
       s, 0, -s,   s, 0,  s,
       s, 0,  s,  -s, 0,  s,
      -s, 0,  s,  -s, 0, -s
    ];
    squareGeo.setAttribute('position', new THREE.Float32BufferAttribute(sqPts, 3));
    const sqMat = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const sq1 = new THREE.LineSegments(squareGeo, sqMat);
    const sq2 = sq1.clone();
    sq2.rotation.y = Math.PI / 4; // Rotated by 45 deg to form octagram!

    ring1.add(sq1, sq2);

    // 3. Dial tick marks along outer ring (clock ticks of time)
    const tickGeo = new THREE.PlaneGeometry(0.025, 0.14);
    const tickMat = new THREE.MeshBasicMaterial({ color: 0x8affc1, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    for (let t = 0; t < 24; t++) {
      const ang = (t / 24) * Math.PI * 2;
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(ang) * 2.12, 0, Math.sin(ang) * 2.12);
      tick.rotation.y = -ang;
      ring2.add(tick);
    }

    mandalaGroup.add(ring1, ring2);
    artifactsGroup.add(mandalaGroup);
  } else if (stoneData.id === 'soul') {
    // Vormir Celestial Spirit Ribbons (Faint, ethereal golden wisps)
    const soulGroup = new THREE.Group();
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffb855,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const halo1 = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.006, 6, 64), haloMat);
    halo1.rotation.set(Math.PI / 3, 0, Math.PI / 6);

    const halo2 = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.005, 6, 64), haloMat);
    halo2.rotation.set(-Math.PI / 3, 0, -Math.PI / 6);

    soulGroup.add(halo1, halo2);
    artifactsGroup.add(soulGroup);
  }

  group.add(artifactsGroup);

  // 6. Ethereal Micro-Particle Radiance
  const pCount = 120;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);

  for (let i = 0; i < pCount; i++) {
    const radius = 1.0 + Math.random() * 1.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    pPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pPos[i * 3 + 2] = radius * Math.cos(phi);
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));

  // Circular particle sprite texture
  const pCanvas = document.createElement('canvas');
  pCanvas.width = 32;
  pCanvas.height = 32;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
  pGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  pGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
  pGrad.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
  pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 32, 32);
  const pTex = new THREE.CanvasTexture(pCanvas);

  const pMat = new THREE.PointsMaterial({
    color: stoneData.coreColor,
    size: 0.1,
    map: pTex,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(pGeo, pMat);
  particles.name = 'particles';
  group.add(particles);

  // Unique 3D tumbling velocity vector per stone (brisk, energetic pitch, yaw, and roll in microgravity)
  const rotSpeedX = 0.0055 + ((stoneData.colorThree & 0x07) * 0.0004);
  const rotSpeedY = 0.0090 + (((stoneData.colorThree >> 4) & 0x07) * 0.0004);
  const rotSpeedZ = 0.0042 + (((stoneData.colorThree >> 8) & 0x07) * 0.0004);

  return {
    group,
    gemMesh,
    gemMat,
    wireMesh,
    veinMesh,
    coreMesh,
    pointLight,
    artifactsGroup,
    particles,
    update: (time, delta) => {
      // Natural internal breathing pulsation (energetic inner glow)
      const pulse = 1.0 + Math.sin(time * 3.6) * 0.10;
      coreMesh.scale.set(pulse, pulse, pulse);
      pointLight.intensity = 1.8 + Math.sin(time * 4.5) * 0.40;
      backLight.intensity = 1.3 + Math.cos(time * 4.0) * 0.30;

      // Dynamic internal vein pulse
      veinMat.opacity = 0.12 + Math.sin(time * 4.2) * 0.07;

      // Accelerated organic 3D random tumbling across pitch, yaw, and roll
      gemMesh.rotation.x += rotSpeedX + Math.sin(time * 1.8) * 0.0016;
      gemMesh.rotation.y += rotSpeedY;
      gemMesh.rotation.z += rotSpeedZ + Math.cos(time * 1.5) * 0.0016;
      veinMesh.rotation.copy(gemMesh.rotation);
      wireMesh.rotation.copy(gemMesh.rotation);

      // Flow animated cosmic light wave through the crystal facets
      updateGradient(time);

      // Accelerated artifact animations
      if (stoneData.id === 'space') {
        const cage = artifactsGroup.children[0];
        if (cage) {
          cage.rotation.y += 0.007;
          cage.rotation.x += 0.004;
        }
      } else if (stoneData.id === 'mind') {
        artifactsGroup.children.forEach((ring, idx) => {
          ring.rotation.y += (idx === 0 ? 0.009 : -0.009);
          ring.rotation.z += 0.004;
        });
      } else if (stoneData.id === 'reality') {
        artifactsGroup.children.forEach(ring => {
          if (ring.userData) {
            ring.rotation.x += ring.userData.speedX * 1.8;
            ring.rotation.y += ring.userData.speedY * 1.8;
          }
        });
      } else if (stoneData.id === 'power') {
        const debris = artifactsGroup.children[0];
        if (debris) {
          debris.rotation.y += 0.015;
          debris.rotation.z += 0.005;
        }
      } else if (stoneData.id === 'time') {
        const mandala = artifactsGroup.children[0];
        if (mandala && mandala.children.length >= 2) {
          mandala.children[0].rotation.z += 0.012; // Inner ring & octagram clockwise
          mandala.children[1].rotation.z -= 0.008; // Outer ring & dials counter-clockwise
        }
      } else if (stoneData.id === 'soul') {
        const soulGroup = artifactsGroup.children[0];
        if (soulGroup && soulGroup.children.length >= 2) {
          soulGroup.children[0].rotation.y += 0.009;
          soulGroup.children[1].rotation.y -= 0.009;
        }
      }

      // Accelerated particle orbital motion
      const positions = particles.geometry.attributes.position.array;
      const count = positions.length / 3;
      for (let i = 0; i < count; i++) {
        const px = positions[i * 3];
        const pz = positions[i * 3 + 2];
        const angle = 0.006;
        positions[i * 3] = px * Math.cos(angle) - pz * Math.sin(angle);
        positions[i * 3 + 2] = px * Math.sin(angle) + pz * Math.cos(angle);
      }
      particles.geometry.attributes.position.needsUpdate = true;
    }
  };
}
