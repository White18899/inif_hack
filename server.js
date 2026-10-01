import express from 'express';
import crypto from 'crypto';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as XLSX from 'xlsx';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

// Load .env.local first, fallback to .env
if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Static files (dist if built, otherwise public/assets)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// ==========================================
// CLOUDFLARE R2 CONFIGURATION
// ==========================================
const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID;
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'infinity-hackathon-bucket';
const publicDomain = process.env.CLOUDFLARE_R2_PUBLIC_DOMAIN;

const isR2Enabled = Boolean(accountId && accessKeyId && secretAccessKey && bucketName);

let s3Client = null;
if (isR2Enabled) {
  s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  });
  console.log(`[R2 Storage] Connected to Cloudflare R2 bucket: ${bucketName}`);
} else {
  console.log('[R2 Storage] Running with local persistent filesystem storage fallback.');
}

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');
const R2_DB_KEY = 'state/database.json';

// Initial Domains & Problem Statements — Marvel Infinity Stones
const INITIAL_DOMAINS = [
  {
    id: 'intelligence',
    stoneId: 'mind',
    stoneName: 'Mind Stone',
    domainName: 'INTELLIGENCE',
    tagline: 'AI • ML • Decision Systems',
    marvelTheme: 'Vision Neural Gold',
    accentHex: '#ffd000',
    techStackSuggestions: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Gemini API', 'TensorFlow'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Architect autonomous multi-agent networks, neural cognition models, self-refining LLM pipelines, and intelligent decision systems capable of enterprise-scale problem-solving.',
    problemStatements: [
      {
        id: 'ps-intel-01',
        code: 'PS-INTEL-01',
        title: 'Autonomous Multi-Agent Synthesis & Dynamic Self-Correction Engine',
        category: 'AI & Decision Systems',
        description: 'Build an autonomous team of specialized AI agents (Architect, Auditor, Coder, Verifier) that debate trade-offs, execute verification loops, and generate verified artifact packages.',
        difficulty: 'Advanced',
        deliverables: [
          'Interactive agent trace visualizer UI',
          'Self-correcting verification testbench',
          'Multi-modal decision engine integration'
        ]
      },
      {
        id: 'ps-intel-02',
        code: 'PS-INTEL-02',
        title: 'Neuro-Symbolic Automated Theorem Prover & Code Certifier',
        category: 'Formal AI Verification',
        description: 'Construct a neural-guided symbolic solver that produces formally verified correctness certificates for distributed protocols and cryptographic smart contracts.',
        difficulty: 'Hardcore',
        deliverables: [
          'Automated proof trace generation visualizer',
          'CLI benchmark suite verifying real-world protocols',
          'Exportable formal verification certificate'
        ]
      }
    ]
  },
  {
    id: 'connectivity',
    stoneId: 'space',
    stoneName: 'Space Stone',
    domainName: 'CONNECTIVITY',
    tagline: 'Cybersecurity • Cloud • Networks',
    marvelTheme: 'Tesseract Cyan',
    accentHex: '#00d2ff',
    techStackSuggestions: ['Rust', 'Go', 'Kubernetes', 'eBPF', 'Cloudflare Workers', 'WireGuard'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Forge zero-trust defense architectures, planet-scale cloud networks, high-throughput distributed protocols, and resilient cybersecurity fabrics.',
    problemStatements: [
      {
        id: 'ps-conn-01',
        code: 'PS-CONN-01',
        title: 'Zero-Trust Multi-Cloud Mesh Failover & Network Threat Shield',
        category: 'Cybersecurity & Cloud',
        description: 'Design a self-healing reverse proxy and global routing daemon that dynamically migrates stateful traffic across multiple cloud providers and edge nodes during regional outages or active DDoS attacks.',
        difficulty: 'Hardcore',
        deliverables: [
          'Working distributed controller and lightweight edge proxy agent',
          'Zero-loss connection migration benchmark demonstration',
          'Real-time threat detection & firewall isolation rules'
        ]
      },
      {
        id: 'ps-conn-02',
        code: 'PS-CONN-02',
        title: 'Post-Quantum Encrypted Peer-to-Peer Mesh Fabric',
        category: 'Quantum Cryptography',
        description: 'Engineer a lightweight decentralized P2P transport layer implementing Kyber/Dilithium lattice-based key exchanges with zero external central coordinator dependency.',
        difficulty: 'Hardcore',
        deliverables: [
          'Working multi-node mesh simulator daemon',
          'Quantum-resistant handshake latency benchmark',
          'Live packet telemetry visualizer'
        ]
      }
    ]
  },
  {
    id: 'digital',
    stoneId: 'reality',
    stoneName: 'Reality Stone',
    domainName: 'DIGITAL',
    tagline: 'Web • Mobile • Digital Platforms',
    marvelTheme: 'Aether Crimson',
    accentHex: '#ff2a4b',
    techStackSuggestions: ['TypeScript', 'React', 'Flutter', 'Next.js', 'Node.js', 'WebGL'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Bend digital reality. Build hyper-responsive web applications, cross-platform mobile architectures, immersive real-time canvases, and scalable modern platforms.',
    problemStatements: [
      {
        id: 'ps-dig-01',
        code: 'PS-DIG-01',
        title: 'Sub-30ms Collaborative Digital Canvas & Universal Component Mesh',
        category: 'Web & Mobile Platforms',
        description: 'Construct a browser-based and mobile-first real-time workspace enabling multi-user manipulation of high-fidelity state with cryptographic attribution and instant offline synchronization.',
        difficulty: 'Advanced',
        deliverables: [
          'Interactive cross-platform collaboration UI',
          'Sub-30ms CRDT state synchronization pipeline',
          'Offline-first progressive synchronization'
        ]
      },
      {
        id: 'ps-dig-02',
        code: 'PS-DIG-02',
        title: 'Generative Spatial Reality Studio for WebXR & Mobile AR',
        category: 'Spatial Realities',
        description: 'Build an in-browser 3D WebXR workspace enabling instantaneous procedural generation of reactive 3D worlds controllable across VR headsets, desktops, and mobile devices.',
        difficulty: 'Advanced',
        deliverables: [
          'Fully functional Three.js/WebXR interactive world',
          'Procedural asset generator with real-time lighting',
          'Cross-device responsive controls'
        ]
      }
    ]
  },
  {
    id: 'automation',
    stoneId: 'power',
    stoneName: 'Power Stone',
    domainName: 'AUTOMATION',
    tagline: 'IoT • Robotics • Embedded Systems',
    marvelTheme: 'Thanos Void Purple',
    accentHex: '#b026ff',
    techStackSuggestions: ['C++', 'Rust', 'ESP32 / Arduino', 'ROS2', 'MQTT', 'FreeRTOS'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Unleash physical and digital kinetic power. Develop autonomous robotics, smart hardware controllers, industrial IoT pipelines, and embedded real-time systems.',
    problemStatements: [
      {
        id: 'ps-auto-01',
        code: 'PS-AUTO-01',
        title: 'Autonomous Edge Robotics Fleet Controller & Sensor Telemetry Hub',
        category: 'Robotics & Embedded Systems',
        description: 'Develop a microsecond telemetry agent and swarm control hub that continuously coordinates robotic actuators and IoT sensors, isolating hardware faults automatically.',
        difficulty: 'Hardcore',
        deliverables: [
          'Hardware-in-the-loop or simulation telemetry interface',
          'Autonomous failover daemon for robotic actuators',
          'Real-time metrics visualizer with latency histograms'
        ]
      },
      {
        id: 'ps-auto-02',
        code: 'PS-AUTO-02',
        title: 'Industrial Energy Grid Balancer & Automated Micro-Inverter Mesh',
        category: 'Embedded IoT & Power Systems',
        description: 'Design an ultra-low-power embedded firmware orchestrator that coordinates distributed renewable energy sources, balancing load across power nodes in real time.',
        difficulty: 'Advanced',
        deliverables: [
          'Embedded firmware code compatible with ESP32/ARM Cortex',
          'Hardware simulation testbench with load surges',
          'Interactive telemetry dashboard'
        ]
      }
    ]
  },
  {
    id: 'analytics',
    stoneId: 'time',
    stoneName: 'Time Stone',
    domainName: 'ANALYTICS',
    tagline: 'Data • Prediction • Optimization',
    marvelTheme: 'Doctor Strange Emerald',
    accentHex: '#00ff88',
    techStackSuggestions: ['Python', 'Kafka', 'ClickHouse', 'Pandas', 'DuckDB', 'Scikit-Learn'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Control temporal velocity. Engineer real-time streaming pipelines, high-throughput predictive time-series models, algorithmic optimization engines, and big data intelligence.',
    problemStatements: [
      {
        id: 'ps-ana-01',
        code: 'PS-ANA-01',
        title: 'Sub-Millisecond Streaming Prediction & Algorithmic Optimization Pipeline',
        category: 'Data & Prediction',
        description: 'Engineer an event-driven analytical router that processes high-throughput telemetry streams, predicts impending anomaly spikes using micro-statistical models, and dynamically optimizes execution paths.',
        difficulty: 'Hardcore',
        deliverables: [
          'Real-time streaming pipeline processing benchmarks',
          'Live statistical prediction vs naive forecast models',
          'Visual telemetry interface with latency histograms'
        ]
      },
      {
        id: 'ps-ana-02',
        code: 'PS-ANA-02',
        title: 'Temporal Graph Analytics & Supply Chain Bottleneck Oracle',
        category: 'Graph Analytics',
        description: 'Build a temporal graph processing engine capable of querying millions of dynamic shipment nodes and calculating optimal routing adjustments seconds before cascading delays occur.',
        difficulty: 'Advanced',
        deliverables: [
          'Interactive graph visualization canvas with time-slider',
          'Predictive bottleneck alert daemon',
          'Benchmarking report showing speedup vs standard algorithms'
        ]
      }
    ]
  },
  {
    id: 'impact',
    stoneId: 'soul',
    stoneName: 'Soul Stone',
    domainName: 'IMPACT',
    tagline: 'Healthcare • Agriculture • Education • Social Good',
    marvelTheme: 'Vormir Sunset Orange',
    accentHex: '#ff7700',
    techStackSuggestions: ['Python', 'Flutter', 'PostgreSQL', 'FastAPI', 'Edge AI', 'OpenCV'],
    isPsReleased: false,
    psReleaseDate: '2026-10-10T09:00:00Z',
    description: 'Channel technology to transform lives. Pioneer accessible healthcare diagnostics, precision agricultural sensors, adaptive educational tools, and sustainable social impact networks.',
    problemStatements: [
      {
        id: 'ps-imp-01',
        code: 'PS-IMP-01',
        title: 'Decentralized Community Healthcare Triage & Precision Agriculture Telemetry',
        category: 'HealthTech & Social Impact',
        description: 'Construct a privacy-preserving triage engine and sensor aggregation hub for underserved rural communities that pairs offline-first inference with automated resource distribution.',
        difficulty: 'Advanced',
        deliverables: [
          'Offline-first progressive web and mobile application',
          'Differential-privacy epidemiological & soil telemetry dashboard',
          'SMS/WhatsApp fallback alerting pipeline'
        ]
      },
      {
        id: 'ps-imp-02',
        code: 'PS-IMP-02',
        title: 'Adaptive Multi-Lingual AI Tutor for Low-Resource Classrooms',
        category: 'EdTech & Inclusivity',
        description: 'Develop a localized voice and text pedagogical assistant that adapts curriculum lessons into indigenous languages without requiring high-speed cloud internet connectivity.',
        difficulty: 'Advanced',
        deliverables: [
          'Accessible PWA optimized for low-end mobile devices',
          'Local offline speech-to-text / text-to-speech fallback engine',
          'Student mastery & gamified progress tracker'
        ]
      }
    ]
  }
];

// Helper: Ensure Data Directory
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load Database (R2 First, then Local Cache)
export async function loadDb() {
  if (isR2Enabled && s3Client) {
    try {
      const res = await s3Client.send(new GetObjectCommand({ Bucket: bucketName, Key: R2_DB_KEY }));
      if (res.Body) {
        const text = await res.Body.transformToString();
        const parsed = JSON.parse(text);
        if (parsed.domains && parsed.teams) {
          // Normalize domains if needed
          return parsed;
        }
      }
    } catch (e) {
      console.log('[R2 Storage] database.json not found on R2, checking local.');
    }
  }

  ensureDataDir();
  if (fs.existsSync(DB_FILE)) {
    try {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(raw);
    } catch (e) {
      console.error('Error reading local db.json:', e);
    }
  }

  const initial = { domains: INITIAL_DOMAINS, teams: [] };
  await saveDb(initial);
  return initial;
}

// Save Database (Local Cache + R2)
export async function saveDb(data) {
  ensureDataDir();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');

  if (isR2Enabled && s3Client) {
    try {
      await s3Client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: R2_DB_KEY,
        Body: Buffer.from(JSON.stringify(data, null, 2)),
        ContentType: 'application/json',
      }));
    } catch (err) {
      console.warn('[R2 Sync Error]:', err.message);
    }
  }
}

// Multer Storage for Payment Proof Screenshots
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB upload limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (PNG, JPG, JPEG, WEBP) are allowed.'));
    }
  },
});

// Helper: Upload Buffer to Cloudflare R2
async function uploadToR2(buffer, key, contentType) {
  if (!isR2Enabled || !s3Client) {
    const localPath = path.join(uploadDir, path.basename(key));
    fs.writeFileSync(localPath, buffer);
    return `/uploads/${path.basename(key)}`;
  }

  try {
    await s3Client.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    }));
    if (publicDomain) {
      return `${publicDomain.replace(/\/$/, '')}/${key}`;
    }
    return `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${key}`;
  } catch (err) {
    console.error('R2 PutObject error, saving locally fallback:', err);
    const localPath = path.join(uploadDir, path.basename(key));
    fs.writeFileSync(localPath, buffer);
    return `/uploads/${path.basename(key)}`;
  }
}

// ==========================================
// API ROUTES
// ==========================================

// 1. Get Domains & Problem Statements
app.get('/api/domains', async (req, res) => {
  try {
    const db = await loadDb();
    res.json({ success: true, domains: db.domains });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Validation & Deduplication Helpers
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const clean = email.trim();
  if (clean.length < 5 || clean.length > 100) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(clean);
}

export function normalizePhone(phone) {
  if (!phone || typeof phone !== 'string') return '';
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }
  return digits;
}

export function isValidPhone(phone) {
  const digits = normalizePhone(phone);
  // Valid phone: 10 digits (standard Indian mobile) or 10-14 digits international
  return digits.length >= 10 && digits.length <= 14;
}

export function checkParticipantConflicts(existingTeams, participants, currentTeamId = null) {
  const seenEmails = new Map();
  const seenPhones = new Map();

  // 1. Intra-team duplicates (within the newly submitted squad)
  for (const p of participants) {
    const cleanEmail = (p.email || '').trim().toLowerCase();
    const cleanPhone = normalizePhone(p.phone);

    if (cleanEmail) {
      if (seenEmails.has(cleanEmail)) {
        return {
          conflict: true,
          type: 'intra_team',
          field: 'email',
          value: cleanEmail,
          message: `Duplicate email '${cleanEmail}' detected within your squad (${seenEmails.get(cleanEmail)} and ${p.role}). Each participant must have a distinct, personal email address.`,
        };
      }
      seenEmails.set(cleanEmail, p.role);
    }

    if (cleanPhone) {
      if (seenPhones.has(cleanPhone)) {
        return {
          conflict: true,
          type: 'intra_team',
          field: 'phone',
          value: p.phone,
          message: `Duplicate phone number '${p.phone}' detected within your squad (${seenPhones.get(cleanPhone)} and ${p.role}). Each participant must have their own unique mobile number.`,
        };
      }
      seenPhones.set(cleanPhone, p.role);
    }
  }

  // 2. Cross-team duplicates (against already registered teams in the database)
  for (const team of existingTeams || []) {
    if (currentTeamId && team.id === currentTeamId) continue;

    const registered = [];
    if (team.leader?.email) {
      registered.push({
        role: 'Team Leader',
        name: team.leader.name,
        email: team.leader.email.trim().toLowerCase(),
        phone: normalizePhone(team.leader.phone),
      });
    }
    if (Array.isArray(team.members)) {
      team.members.forEach((m, idx) => {
        registered.push({
          role: `Member 0${idx + 2}`,
          name: m.name,
          email: (m.email || '').trim().toLowerCase(),
          phone: normalizePhone(m.phone),
        });
      });
    }

    for (const p of participants) {
      const cleanEmail = (p.email || '').trim().toLowerCase();
      const cleanPhone = normalizePhone(p.phone);

      const emailMatch = registered.find((r) => r.email && r.email === cleanEmail);
      if (emailMatch) {
        return {
          conflict: true,
          type: 'cross_team',
          field: 'email',
          value: cleanEmail,
          teamName: team.teamName,
          teamId: team.id,
          message: `The email '${cleanEmail}' (${p.role}) is already registered with team '${team.teamName}' (${team.id}). A participant can only participate in one team.`,
        };
      }

      const phoneMatch = registered.find((r) => r.phone && r.phone === cleanPhone);
      if (phoneMatch) {
        return {
          conflict: true,
          type: 'cross_team',
          field: 'phone',
          value: p.phone,
          teamName: team.teamName,
          teamId: team.id,
          message: `The mobile number '${p.phone}' (${p.role}) is already registered with team '${team.teamName}' (${team.id}). A participant can only participate in one team.`,
        };
      }
    }
  }

  return { conflict: false };
}

export function isDummyUtr(utr) {
  if (!utr || typeof utr !== 'string') return true;
  const clean = utr.trim();
  if (/^(\d)\1+$/.test(clean)) return true; // 000000000000, 111111111111
  const dummies = ['123456789012', '12345678901', '012345678901', '987654321098', '112233445566', '998877665544', '123456123456'];
  return dummies.includes(clean);
}

// 2. Real-time UTR Uniqueness Verification
app.get('/api/verify-utr', async (req, res) => {
  try {
    const utr = (req.query.utr || '').toString().trim();
    if (!utr) return res.json({ exists: false });

    if (isDummyUtr(utr)) {
      return res.json({ exists: false, isDummy: true, error: 'Fake or dummy UTR' });
    }

    const db = await loadDb();
    const existing = db.teams.find((t) => t.payment && t.payment.utr && t.payment.utr.trim().toLowerCase() === utr.toLowerCase());
    res.json({ exists: Boolean(existing), utr, isDummy: false });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Real-time Participant (Email & Phone) Verification Endpoint
app.get('/api/verify-participant', async (req, res) => {
  try {
    const email = (req.query.email || '').toString().trim().toLowerCase();
    const phone = normalizePhone((req.query.phone || '').toString());
    const excludeTeamId = (req.query.teamId || '').toString().trim();

    if (!email && !phone) {
      return res.json({ exists: false });
    }

    const db = await loadDb();
    for (const team of db.teams || []) {
      if (excludeTeamId && team.id === excludeTeamId) continue;

      if (email) {
        if (team.leader?.email?.trim().toLowerCase() === email) {
          return res.json({ exists: true, field: 'email', value: email, teamName: team.teamName, teamId: team.id, role: 'Team Leader' });
        }
        const m = (team.members || []).find((mem) => mem.email?.trim().toLowerCase() === email);
        if (m) {
          return res.json({ exists: true, field: 'email', value: email, teamName: team.teamName, teamId: team.id, role: 'Team Member' });
        }
      }

      if (phone) {
        if (normalizePhone(team.leader?.phone) === phone) {
          return res.json({ exists: true, field: 'phone', value: phone, teamName: team.teamName, teamId: team.id, role: 'Team Leader' });
        }
        const m = (team.members || []).find((mem) => normalizePhone(mem.phone) === phone);
        if (m) {
          return res.json({ exists: true, field: 'phone', value: phone, teamName: team.teamName, teamId: team.id, role: 'Team Member' });
        }
      }
    }

    res.json({ exists: false });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Team Registration Endpoint
// Enforces:
// - Mandatory fields (all leader and team details)
// - Team size: strictly 3 or 4
// - Strict email format validation for leader and all members
// - Strict mobile phone format validation (10 digits)
// - Strictly unique UTR
// - Strictly unique emails and phones (intra-team and cross-team)
// - Auto stores reviews & food structures
// - Uploads screenshot to Cloudflare R2
app.post('/api/register', upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const {
      teamName,
      college,
      preferredDomain,
      techStack,
      teamSize,
      teamPassword,
      leaderName,
      leaderEmail,
      leaderPhone,
      paymentUtr,
      paymentPhone,
      members,
    } = req.body;

    if (!teamName || !college || !preferredDomain || !teamPassword || !leaderName || !leaderEmail || !leaderPhone || !paymentUtr) {
      return res.status(400).json({ success: false, error: 'Missing mandatory registration fields. All leader and squad details are required.' });
    }

    const cleanLeaderEmail = leaderEmail.trim().toLowerCase();
    if (!isValidEmail(cleanLeaderEmail)) {
      return res.status(400).json({
        success: false,
        error: `Invalid Leader Email format: '${leaderEmail}'. Please enter a valid email address (e.g. name@domain.com).`,
      });
    }

    const cleanLeaderPhone = normalizePhone(leaderPhone);
    if (!isValidPhone(cleanLeaderPhone)) {
      return res.status(400).json({
        success: false,
        error: `Invalid Leader Phone number: '${leaderPhone}'. Please provide a valid 10-digit mobile number.`,
      });
    }

    const cleanUtr = paymentUtr.trim();
    if (cleanUtr.length < 10 || cleanUtr.length > 22 || !/^[A-Za-z0-9]+$/.test(cleanUtr) || isDummyUtr(cleanUtr)) {
      return res.status(400).json({
        success: false,
        error: `Invalid or fake Payment UTR: '${paymentUtr}'. Authentic 12-digit UPI reference number required.`,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Payment confirmation screenshot is required. Please upload your payment receipt (Max 20MB).',
      });
    }

    // Process screenshot file
    let screenshotUrl = '/placeholder-receipt.png';
    if (req.file) {
      const ext = path.extname(req.file.originalname) || '.png';
      const key = `receipts/${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
      screenshotUrl = await uploadToR2(req.file.buffer, key, req.file.mimetype);
    }

    // Parse teammates
    let parsedMembers = [];
    if (typeof members === 'string') {
      try {
        parsedMembers = JSON.parse(members);
      } catch (e) {
        parsedMembers = [];
      }
    } else if (Array.isArray(members)) {
      parsedMembers = members;
    }

    const parsedSize = parseInt(teamSize, 10) || (parsedMembers.length + 1);
    if (parsedSize < 3 || parsedSize > 4) {
      return res.status(400).json({ success: false, error: 'Team size must be strictly 3 or 4 members.' });
    }

    const expectedMemberCount = parsedSize - 1; // 2 teammates for size 3, 3 teammates for size 4
    if (parsedMembers.length < expectedMemberCount) {
      return res.status(400).json({
        success: false,
        error: `Team size is ${parsedSize} members, but details for only ${parsedMembers.length + 1} were provided. Please fill all member details.`,
      });
    }

    // Validate each teammate's name, email, and phone
    const validatedMembers = [];
    for (let i = 0; i < expectedMemberCount; i++) {
      const m = parsedMembers[i] || {};
      const mName = (m.name || '').trim();
      const mEmail = (m.email || '').trim().toLowerCase();
      const mPhone = normalizePhone(m.phone);

      if (!mName) {
        return res.status(400).json({ success: false, error: `Member 0${i + 2} name is required.` });
      }
      if (!isValidEmail(mEmail)) {
        return res.status(400).json({
          success: false,
          error: `Invalid email format for Member 0${i + 2} (${mName}): '${m.email}'. Please provide a valid email.`,
        });
      }
      if (!isValidPhone(mPhone)) {
        return res.status(400).json({
          success: false,
          error: `Invalid mobile number for Member 0${i + 2} (${mName}): '${m.phone}'. Please provide a valid 10-digit number.`,
        });
      }

      validatedMembers.push({
        name: mName,
        email: mEmail,
        phone: mPhone,
      });
    }

    const db = await loadDb();

    // Check for duplicate participants (Intra-team & Cross-team)
    const allParticipants = [
      { role: 'Team Leader', name: leaderName.trim(), email: cleanLeaderEmail, phone: cleanLeaderPhone },
      ...validatedMembers.map((m, i) => ({
        role: `Member 0${i + 2}`,
        name: m.name,
        email: m.email,
        phone: m.phone,
      })),
    ];

    const conflict = checkParticipantConflicts(db.teams, allParticipants);
    if (conflict.conflict) {
      return res.status(409).json({
        success: false,
        error: conflict.message,
      });
    }

    // Enforce strictly UNIQUE UTR across all teams
    const duplicateUtr = db.teams.find(
      (t) => t.payment && t.payment.utr && t.payment.utr.trim().toLowerCase() === cleanUtr.toLowerCase()
    );
    if (duplicateUtr) {
      return res.status(409).json({
        success: false,
        error: `The payment UTR '${cleanUtr}' has already been registered with another team. Every transaction UTR must be unique.`,
      });
    }

    // Calculate dynamic fee at ₹349 per member
    const calculatedAmount = 349 * parsedSize; // 3 => ₹1,047; 4 => ₹1,396

    // Parse tech stack
    let parsedTechStack = [];
    if (Array.isArray(techStack)) {
      parsedTechStack = techStack;
    } else if (typeof techStack === 'string') {
      parsedTechStack = techStack.split(',').map(s => s.trim()).filter(Boolean);
    }

    // Construct squad record
    const teamId = `INF-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTeam = {
      id: teamId,
      teamName: teamName.trim(),
      college: college.trim(),
      preferredDomain: preferredDomain.trim().toLowerCase(),
      techStack: parsedTechStack,
      teamSize: parsedSize,
      teamPassword: teamPassword.trim(),
      leader: {
        name: leaderName ? leaderName.trim() : '',
        email: cleanLeaderEmail,
        phone: cleanLeaderPhone,
      },
      members: validatedMembers,
      roomAllocated: 'TBA (Lab Block 3)',
      selectedProblemStatement: null,
      payment: {
        utr: cleanUtr,
        phone: paymentPhone ? paymentPhone.trim() : cleanLeaderPhone,
        screenshotUrl,
        submittedAt: new Date().toISOString(),
        amount: calculatedAmount,
        status: 'pending',
      },
      // Review milestones (for Team Leader timeline and Coordinator checkoff)
      reviews: {
        r1: { attended: false, time: null, notes: '' },
        r2: { attended: false, time: null, notes: '' },
        r3: { attended: false, time: null, notes: '' }
      },
      // Food meal tokens (for Coordinator and Team Leader dashboard)
      food: {
        highTea: { collected: false, time: null },
        dinner: { collected: false, time: null },
        midnightFuel: { collected: false, time: null },
        breakfast: { collected: false, time: null },
        lunch: { collected: false, time: null }
      },
      // Judges marks (STRICTLY HIDDEN from Team Leader view)
      scores: {
        innovation: 0,
        technical: 0,
        execution: 0,
        presentation: 0,
        total: 0,
        remarks: ''
      },
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    db.teams.push(newTeam);
    await saveDb(db);

    res.json({
      success: true,
      message: `Registration successful for ${newTeam.teamName}! Total registration fee: ₹${calculatedAmount}.`,
      team: {
        id: newTeam.id,
        teamName: newTeam.teamName,
        preferredDomain: newTeam.preferredDomain,
        leaderEmail: newTeam.leader.email,
        amount: calculatedAmount,
      },
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Team Leader Portal Login
// CRITICAL: Strictly HIDE judges' scores from teams!
app.post('/api/teams/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Leader email and team password are required.' });
    }
    const db = await loadDb();
    const cleanEmail = email.trim().toLowerCase();
    const team = db.teams.find((t) => t.leader && t.leader.email && t.leader.email.trim().toLowerCase() === cleanEmail);

    if (!team) {
      return res.status(404).json({ success: false, error: 'No team registered with this leader email.' });
    }
    if (team.teamPassword !== password) {
      return res.status(401).json({ success: false, error: 'Incorrect team password.' });
    }

    // Map stone or domain
    const assignedDomain = db.domains.find(
      (d) => d.id === team.preferredDomain || d.stoneId === team.preferredDomain
    ) || db.domains[0];

    // Create safe payload: STRIP SCORES AND JUDGE REMARKS
    const safeTeam = JSON.parse(JSON.stringify(team));
    delete safeTeam.scores; // STRICTLY HIDDEN FROM TEAMS
    delete safeTeam.teamPassword;

    res.json({ success: true, team: safeTeam, domainInfo: assignedDomain });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Team Leader Select Problem Statement or Change Domain
app.post('/api/teams/update-selection', async (req, res) => {
  try {
    const { email, password, newDomainId, problemStatementId } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Authentication credentials required.' });
    }

    const db = await loadDb();
    const cleanEmail = email.trim().toLowerCase();
    const team = db.teams.find((t) => t.leader && t.leader.email && t.leader.email.trim().toLowerCase() === cleanEmail);

    if (!team || team.teamPassword !== password) {
      return res.status(401).json({ success: false, error: 'Authentication failed.' });
    }

    // Change domain if specified
    if (newDomainId && db.domains.some((d) => d.id === newDomainId || d.stoneId === newDomainId)) {
      team.preferredDomain = newDomainId;
      team.selectedProblemStatement = null;
    }

    const currentDomain = db.domains.find(
      (d) => d.id === team.preferredDomain || d.stoneId === team.preferredDomain
    );

    // Select 1 Problem Statement if specified
    if (problemStatementId && currentDomain) {
      const ps = currentDomain.problemStatements?.find(
        (p) => p.id === problemStatementId || p.code === problemStatementId
      );
      if (ps) {
        team.selectedProblemStatement = {
          id: ps.id,
          code: ps.code,
          title: ps.title,
          category: ps.category,
          selectedAt: new Date().toISOString(),
        };
      }
    }

    await saveDb(db);

    const safeTeam = JSON.parse(JSON.stringify(team));
    delete safeTeam.scores;
    delete safeTeam.teamPassword;

    res.json({ success: true, team: safeTeam, domainInfo: currentDomain });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Coordinator Authentication & Data
app.post('/api/coordinator/login', (req, res) => {
  const { password } = req.body || {};
  const secret = process.env.COORDINATOR_PASS || 'coord2026';
  if (password === secret) {
    const token = Buffer.from(`coordinator_${Date.now()}`).toString('base64');
    return res.json({ success: true, token, message: 'Coordinator clearance granted.' });
  }
  return res.status(401).json({ success: false, error: 'Invalid coordinator password.' });
});

app.get('/api/coordinator/teams', async (req, res) => {
  try {
    const db = await loadDb();
    // Coordinators can view teams, reviews, and food status
    const teams = db.teams.map(t => {
      const copy = { ...t };
      delete copy.scores; // hide judge scores from coordinators as well
      delete copy.teamPassword;
      return copy;
    });
    res.json({ success: true, teams });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Coordinator Mark Food or Review
app.post('/api/coordinator/mark', async (req, res) => {
  try {
    const { teamId, type, key, value, notes } = req.body;
    if (!teamId || !type || !key) {
      return res.status(400).json({ success: false, error: 'Missing teamId, type, or key.' });
    }

    const db = await loadDb();
    const team = db.teams.find(t => t.id === teamId);
    if (!team) return res.status(404).json({ success: false, error: 'Team not found.' });

    if (type === 'food') {
      if (!team.food) team.food = {};
      team.food[key] = {
        collected: Boolean(value),
        time: value ? new Date().toISOString() : null,
      };
    } else if (type === 'review') {
      if (!team.reviews) team.reviews = {};
      team.reviews[key] = {
        attended: Boolean(value),
        time: value ? new Date().toISOString() : null,
        notes: notes || team.reviews[key]?.notes || '',
      };
    }

    await saveDb(db);
    res.json({ success: true, team });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Judges Authentication & Data
app.post('/api/judges/login', (req, res) => {
  const { password } = req.body || {};
  const secret = process.env.JUDGES_PASS || 'judge2026';
  if (password === secret) {
    const token = Buffer.from(`judge_${Date.now()}`).toString('base64');
    return res.json({ success: true, token, message: 'Judge clearance granted.' });
  }
  return res.status(401).json({ success: false, error: 'Invalid judges password.' });
});

app.get('/api/judges/teams', async (req, res) => {
  try {
    const db = await loadDb();
    // Judges can view teams, domains, problem statement, and scores
    const teams = db.teams.map(t => ({
      id: t.id,
      teamName: t.teamName,
      college: t.college,
      preferredDomain: t.preferredDomain,
      techStack: t.techStack,
      teamSize: t.teamSize,
      leader: t.leader,
      members: t.members,
      roomAllocated: t.roomAllocated,
      selectedProblemStatement: t.selectedProblemStatement,
      reviews: t.reviews,
      scores: t.scores || { innovation: 0, technical: 0, execution: 0, presentation: 0, total: 0, remarks: '' }
    }));
    res.json({ success: true, teams, domains: db.domains });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Judges Submit Marks (STRICTLY HIDDEN FROM TEAMS)
app.post('/api/judges/score', async (req, res) => {
  try {
    const { teamId, innovation, technical, execution, presentation, remarks } = req.body;
    if (!teamId) return res.status(400).json({ success: false, error: 'teamId is required.' });

    const db = await loadDb();
    const team = db.teams.find(t => t.id === teamId);
    if (!team) return res.status(404).json({ success: false, error: 'Team not found.' });

    const numInno = Math.min(25, Math.max(0, parseFloat(innovation) || 0));
    const numTech = Math.min(25, Math.max(0, parseFloat(technical) || 0));
    const numExec = Math.min(25, Math.max(0, parseFloat(execution) || 0));
    const numPres = Math.min(25, Math.max(0, parseFloat(presentation) || 0));
    const total = numInno + numTech + numExec + numPres;

    team.scores = {
      innovation: numInno,
      technical: numTech,
      execution: numExec,
      presentation: numPres,
      total,
      remarks: remarks || '',
      updatedAt: new Date().toISOString()
    };

    await saveDb(db);
    res.json({ success: true, teamId, scores: team.scores });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Admin Authentication & Authorization
function generateAdminToken(secret) {
  const ts = Date.now().toString();
  const signature = crypto.createHmac('sha256', secret).update(`admin:${ts}`).digest('hex');
  return Buffer.from(`${ts}:${signature}`).toString('base64');
}

function verifyAdminToken(token, secret) {
  if (!token) return false;
  if (token === secret) return true; // Direct admin secret supported
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const [ts, sig] = decoded.split(':');
    if (!ts || !sig || sig.length !== 64) return false;

    const age = Date.now() - parseInt(ts, 10);
    if (isNaN(age) || age < 0 || age > 24 * 60 * 60 * 1000) return false; // 24-hour expiration

    const expectedSig = crypto.createHmac('sha256', secret).update(`admin:${ts}`).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig));
  } catch (e) {
    return false;
  }
}

function requireAdminAuth(req, res, next) {
  const secret = process.env.ADMIN_SECRET || 'admin123';
  const authHeader = req.headers['authorization'] || '';
  const tokenFromHeader = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader.trim();
  const tokenFromQuery = (req.query.token || '').toString().trim();
  const token = tokenFromHeader || tokenFromQuery;

  if (!token || !verifyAdminToken(token, secret)) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Valid Admin Authorization required.' });
  }
  next();
}

app.post('/api/admin/login', (req, res) => {
  try {
    const { password } = req.body || {};
    const secret = process.env.ADMIN_SECRET || 'admin123';

    if (!password) return res.status(400).json({ success: false, error: 'Passphrase is required.' });
    if (password === secret) {
      const token = generateAdminToken(secret);
      return res.status(200).json({ success: true, token, message: 'Organizer clearance granted.' });
    }
    return res.status(401).json({ success: false, error: 'Invalid admin passphrase.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. Admin Get All Teams (Protected)
app.get('/api/admin/teams', requireAdminAuth, async (req, res) => {
  try {
    const db = await loadDb();
    res.json({ success: true, teams: db.teams });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 10. Admin Edit ANYTHING about Teams (Protected)
app.put('/api/admin/teams/:id', requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const db = await loadDb();
    const idx = db.teams.findIndex((t) => t.id === id);

    if (idx === -1) {
      return res.status(404).json({ success: false, error: `Team ${id} not found.` });
    }

    const existing = db.teams[idx];
    db.teams[idx] = {
      ...existing,
      teamName: updates.teamName !== undefined ? updates.teamName : existing.teamName,
      college: updates.college !== undefined ? updates.college : existing.college,
      preferredDomain: updates.preferredDomain !== undefined ? updates.preferredDomain : existing.preferredDomain,
      teamSize: updates.teamSize !== undefined ? updates.teamSize : existing.teamSize,
      techStack: updates.techStack !== undefined ? updates.techStack : existing.techStack,
      teamPassword: updates.teamPassword !== undefined ? updates.teamPassword : existing.teamPassword,
      roomAllocated: updates.roomAllocated !== undefined ? updates.roomAllocated : existing.roomAllocated,
      selectedProblemStatement: updates.selectedProblemStatement !== undefined ? updates.selectedProblemStatement : existing.selectedProblemStatement,
      leader: {
        ...existing.leader,
        ...(updates.leader || {}),
      },
      members: updates.members !== undefined ? updates.members : existing.members,
      payment: {
        ...existing.payment,
        ...(updates.payment || {}),
      },
      reviews: {
        ...existing.reviews,
        ...(updates.reviews || {}),
      },
      food: {
        ...existing.food,
        ...(updates.food || {}),
      },
      scores: {
        ...existing.scores,
        ...(updates.scores || {}),
      }
    };

    await saveDb(db);
    res.json({ success: true, team: db.teams[idx] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 11. Admin Delete Team (Protected)
app.delete('/api/admin/teams/:id', requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const db = await loadDb();
    const prevLen = db.teams.length;
    db.teams = db.teams.filter((t) => t.id !== id);
    if (db.teams.length !== prevLen) {
      await saveDb(db);
      return res.json({ success: true, message: `Team ${id} removed.` });
    }
    res.status(404).json({ success: false, error: 'Team not found' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 12. Admin Update Domains & Problem Statements (Protected)
app.put('/api/admin/domains', requireAdminAuth, async (req, res) => {
  try {
    const updatedDomain = req.body;
    const db = await loadDb();
    const idx = db.domains.findIndex((d) => d.id === updatedDomain.id || d.stoneId === updatedDomain.id);
    if (idx >= 0) {
      db.domains[idx] = { ...db.domains[idx], ...updatedDomain };
      await saveDb(db);
      return res.json({ success: true, domain: db.domains[idx] });
    }
    // If not existing, push new domain
    db.domains.push(updatedDomain);
    await saveDb(db);
    res.json({ success: true, domain: updatedDomain });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 13. Admin Multi-Sheet Excel Export (.xlsx) (Protected)
app.get('/api/admin/export', requireAdminAuth, async (req, res) => {
  try {
    const db = await loadDb();
    const teams = db.teams;

    // Sheet 1: Payment Details & Status
    const paymentRows = teams.map((t, idx) => ({
      'S.No': idx + 1,
      'Team ID': t.id,
      'Team Name': t.teamName,
      'College': t.college,
      'Domain': (t.preferredDomain || '').toUpperCase(),
      'Team Size': t.teamSize || (t.members ? t.members.length + 1 : 4),
      'Fee Amount (₹)': t.payment?.amount || (349 * (t.teamSize || 4)),
      'Payment Status': (t.payment?.status || 'pending').toUpperCase(),
      'UTR / Transaction No': t.payment?.utr || 'N/A',
      'Payer Phone': t.payment?.phone || 'N/A',
      'Leader Email': t.leader?.email || '',
      'Leader Phone': t.leader?.phone || '',
      'Proof Screenshot URL': t.payment?.screenshotUrl || 'N/A',
      'Registration Time': new Date(t.createdAt).toLocaleString(),
    }));

    // Sheet 2: Food & Review Tracking
    const foodReviewRows = teams.map((t, idx) => ({
      'S.No': idx + 1,
      'Team ID': t.id,
      'Team Name': t.teamName,
      'College': t.college,
      'High Tea': t.food?.highTea?.collected ? 'RECEIVED' : 'PENDING',
      'Dinner': t.food?.dinner?.collected ? 'RECEIVED' : 'PENDING',
      'Midnight Fuel': t.food?.midnightFuel?.collected ? 'RECEIVED' : 'PENDING',
      'Breakfast': t.food?.breakfast?.collected ? 'RECEIVED' : 'PENDING',
      'Lunch': t.food?.lunch?.collected ? 'RECEIVED' : 'PENDING',
      'Review 1 (Ideation)': t.reviews?.r1?.attended ? 'ATTENDED' : 'PENDING',
      'Review 2 (Midpoint)': t.reviews?.r2?.attended ? 'ATTENDED' : 'PENDING',
      'Review 3 (Final)': t.reviews?.r3?.attended ? 'ATTENDED' : 'PENDING',
      'Room / Lab Block': t.roomAllocated || 'TBA',
    }));

    // Sheet 3: Judges Scores (Confidential)
    const judgeRows = teams.map((t, idx) => ({
      'S.No': idx + 1,
      'Team ID': t.id,
      'Team Name': t.teamName,
      'Domain': (t.preferredDomain || '').toUpperCase(),
      'Selected Problem Statement': t.selectedProblemStatement ? `${t.selectedProblemStatement.code}: ${t.selectedProblemStatement.title}` : 'Not Selected',
      'Innovation (25)': t.scores?.innovation || 0,
      'Technical Depth (25)': t.scores?.technical || 0,
      'Execution / Demo (25)': t.scores?.execution || 0,
      'UI/UX & Pitch (25)': t.scores?.presentation || 0,
      'Total Score (100)': t.scores?.total || 0,
      'Judge Remarks': t.scores?.remarks || 'None',
    }));

    // Sheet 4: Full Team Rosters
    const teamRows = teams.map((t, idx) => {
      const row = {
        'S.No': idx + 1,
        'Team ID': t.id,
        'Team Name': t.teamName,
        'College': t.college,
        'Domain': (t.preferredDomain || '').toUpperCase(),
        'Tech Stack': Array.isArray(t.techStack) ? t.techStack.join(', ') : (t.techStack || ''),
        'Leader Name': t.leader?.name || '',
        'Leader Email': t.leader?.email || '',
        'Leader Phone': t.leader?.phone || '',
      };
      (t.members || []).forEach((m, mIdx) => {
        row[`Member ${mIdx + 2} Name`] = m.name || '';
        row[`Member ${mIdx + 2} Email`] = m.email || '';
        row[`Member ${mIdx + 2} Phone`] = m.phone || '';
      });
      return row;
    });

    const workbook = XLSX.utils.book_new();
    const pSheet = XLSX.utils.json_to_sheet(paymentRows);
    XLSX.utils.book_append_sheet(workbook, pSheet, 'Payments & UTRs');
    const fSheet = XLSX.utils.json_to_sheet(foodReviewRows);
    XLSX.utils.book_append_sheet(workbook, fSheet, 'Food & Reviews');
    const jSheet = XLSX.utils.json_to_sheet(judgeRows);
    XLSX.utils.book_append_sheet(workbook, jSheet, 'Judges Scores');
    const tSheet = XLSX.utils.json_to_sheet(teamRows);
    XLSX.utils.book_append_sheet(workbook, tSheet, 'Full Team Rosters');

    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="infinity_hackathon_export_${Date.now()}.xlsx"`);
    res.send(excelBuffer);
  } catch (err) {
    console.error('Excel export error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Direct Page URLs
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/leader', (req, res) => res.sendFile(path.join(__dirname, 'leader.html')));
app.get('/coordinator', (req, res) => res.sendFile(path.join(__dirname, 'coordinator.html')));
app.get('/judges', (req, res) => res.sendFile(path.join(__dirname, 'judges.html')));

app.listen(PORT, () => {
  console.log(`[Infinity Hackathon 2026] Backend running on http://localhost:${PORT}`);
});
