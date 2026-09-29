import * as XLSX from 'xlsx';

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

const R2_DB_KEY = 'state/database.json';

// Helper: JSON response with CORS headers
function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      ...extraHeaders,
    },
  });
}

// Helper: CORS preflight
function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// Helper: Load database from R2
async function loadDb(env) {
  if (env && env.BUCKET) {
    try {
      const obj = await env.BUCKET.get(R2_DB_KEY);
      if (obj) {
        const text = await obj.text();
        const parsed = JSON.parse(text);
        if (parsed && Array.isArray(parsed.domains) && Array.isArray(parsed.teams)) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Error fetching database from R2:', err);
    }
  }
  return { domains: INITIAL_DOMAINS, teams: [] };
}

// Helper: Save database to R2
async function saveDb(env, data) {
  if (env && env.BUCKET) {
    await env.BUCKET.put(R2_DB_KEY, JSON.stringify(data, null, 2), {
      httpMetadata: {
        contentType: 'application/json',
      },
    });
  }
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const method = request.method.toUpperCase();

  // 1. CORS Preflight
  if (method === 'OPTIONS') {
    return handleOptions();
  }

  const ADMIN_SECRET = env.ADMIN_SECRET || 'admin123';
  const COORDINATOR_PASS = env.COORDINATOR_PASS || 'coord2026';
  const JUDGES_PASS = env.JUDGES_PASS || 'judge2026';
  const PUBLIC_DOMAIN = env.CLOUDFLARE_R2_PUBLIC_DOMAIN || 'https://pub-aa1b426e7ec64c31a70bdd49676fdec1.r2.dev';

  try {
    // -------------------------------------------------------------
    // Health Check & Stats
    // -------------------------------------------------------------
    if (pathname === '/api/health') {
      return jsonResponse({
        success: true,
        status: 'operational',
        edge: 'cloudflare-pages',
        timestamp: new Date().toISOString(),
      });
    }

    if (pathname === '/api/stats') {
      const db = await loadDb(env);
      const totalTeams = db.teams.length;
      const confirmedTeams = db.teams.filter(t => t.payment?.status === 'confirmed').length;
      const totalRevenue = db.teams.reduce((acc, t) => acc + (t.payment?.amount || 0), 0);
      return jsonResponse({
        success: true,
        totalTeams,
        confirmedTeams,
        totalRevenue,
      });
    }

    // -------------------------------------------------------------
    // Domains & Problem Statements
    // -------------------------------------------------------------
    if (pathname === '/api/domains' && method === 'GET') {
      const db = await loadDb(env);
      return jsonResponse({ success: true, domains: db.domains });
    }

    // -------------------------------------------------------------
    // Verify UTR Uniqueness
    // -------------------------------------------------------------
    if (pathname === '/api/verify-utr' && method === 'GET') {
      const utr = (url.searchParams.get('utr') || '').trim();
      if (!utr) return jsonResponse({ exists: false });

      const db = await loadDb(env);
      const existing = db.teams.find(
        (t) => t.payment?.utr && t.payment.utr.trim().toLowerCase() === utr.toLowerCase()
      );
      return jsonResponse({ exists: Boolean(existing), utr });
    }

    // -------------------------------------------------------------
    // Team Registration
    // -------------------------------------------------------------
    if (pathname === '/api/register' && method === 'POST') {
      let teamName, college, preferredDomain, techStack, teamSize, teamPassword;
      let leaderName, leaderEmail, leaderPhone, paymentUtr, paymentPhone, members;
      let screenshotBuffer = null;
      let screenshotMime = 'image/png';
      let screenshotExt = '.png';

      const contentType = request.headers.get('content-type') || '';

      if (contentType.includes('multipart/form-data')) {
        const formData = await request.formData();
        teamName = formData.get('teamName');
        college = formData.get('college');
        preferredDomain = formData.get('preferredDomain');
        techStack = formData.get('techStack');
        teamSize = formData.get('teamSize');
        teamPassword = formData.get('teamPassword');
        leaderName = formData.get('leaderName');
        leaderEmail = formData.get('leaderEmail');
        leaderPhone = formData.get('leaderPhone');
        paymentUtr = formData.get('paymentUtr');
        paymentPhone = formData.get('paymentPhone');
        members = formData.get('members');

        const file = formData.get('paymentScreenshot');
        if (file && typeof file === 'object' && file.size > 0) {
          screenshotBuffer = await file.arrayBuffer();
          screenshotMime = file.type || 'image/png';
          if (file.name && file.name.includes('.')) {
            screenshotExt = file.name.substring(file.name.lastIndexOf('.'));
          }
        }
      } else {
        const body = await request.json();
        ({
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
        } = body);
      }

      if (!teamName || !college || !preferredDomain || !teamPassword || !leaderEmail || !paymentUtr) {
        return jsonResponse({ success: false, error: 'Missing mandatory registration fields.' }, 400);
      }

      const cleanUtr = (paymentUtr || '').toString().trim();
      const db = await loadDb(env);

      // Enforce unique UTR
      const duplicateUtr = db.teams.find(
        (t) => t.payment?.utr && t.payment.utr.trim().toLowerCase() === cleanUtr.toLowerCase()
      );
      if (duplicateUtr) {
        return jsonResponse({
          success: false,
          error: `The payment UTR '${cleanUtr}' has already been registered with another team. Every transaction UTR must be unique.`,
        }, 409);
      }

      // Upload screenshot to R2 if provided
      let screenshotUrl = '/placeholder-receipt.png';
      if (screenshotBuffer && env.BUCKET) {
        const key = `receipts/${Date.now()}-${Math.random().toString(36).substring(2, 8)}${screenshotExt}`;
        await env.BUCKET.put(key, screenshotBuffer, {
          httpMetadata: { contentType: screenshotMime },
        });
        screenshotUrl = `${PUBLIC_DOMAIN.replace(/\/$/, '')}/${key}`;
      }

      // Parse members
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
        return jsonResponse({ success: false, error: 'Team size must be strictly 3 or 4 members.' }, 400);
      }

      const calculatedAmount = 390 * parsedSize; // 3 => ₹1,170; 4 => ₹1,560

      let parsedTechStack = [];
      if (Array.isArray(techStack)) {
        parsedTechStack = techStack;
      } else if (typeof techStack === 'string') {
        parsedTechStack = techStack.split(',').map((s) => s.trim()).filter(Boolean);
      }

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
          email: leaderEmail.trim().toLowerCase(),
          phone: leaderPhone ? leaderPhone.trim() : '',
        },
        members: parsedMembers,
        roomAllocated: 'TBA (Lab Block 3)',
        selectedProblemStatement: null,
        payment: {
          utr: cleanUtr,
          phone: paymentPhone ? paymentPhone.trim() : (leaderPhone ? leaderPhone.trim() : ''),
          screenshotUrl,
          submittedAt: new Date().toISOString(),
          amount: calculatedAmount,
          status: 'pending',
        },
        reviews: {
          r1: { attended: false, time: null, notes: '' },
          r2: { attended: false, time: null, notes: '' },
          r3: { attended: false, time: null, notes: '' },
        },
        food: {
          highTea: { collected: false, time: null },
          dinner: { collected: false, time: null },
          midnightFuel: { collected: false, time: null },
          breakfast: { collected: false, time: null },
          lunch: { collected: false, time: null },
        },
        scores: {
          innovation: 0,
          technical: 0,
          execution: 0,
          presentation: 0,
          total: 0,
          remarks: '',
        },
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      };

      db.teams.push(newTeam);
      await saveDb(env, db);

      return jsonResponse({
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
    }

    // -------------------------------------------------------------
    // Team Leader Login
    // -------------------------------------------------------------
    if (pathname === '/api/teams/login' && method === 'POST') {
      const { email, password } = await request.json();
      if (!email || !password) {
        return jsonResponse({ success: false, error: 'Leader email and team password are required.' }, 400);
      }

      const db = await loadDb(env);
      const cleanEmail = email.trim().toLowerCase();
      const team = db.teams.find(
        (t) => t.leader?.email && t.leader.email.trim().toLowerCase() === cleanEmail
      );

      if (!team) {
        return jsonResponse({ success: false, error: 'No team registered with this leader email.' }, 404);
      }
      if (team.teamPassword !== password) {
        return jsonResponse({ success: false, error: 'Incorrect team password.' }, 401);
      }

      const assignedDomain = db.domains.find(
        (d) => d.id === team.preferredDomain || d.stoneId === team.preferredDomain
      ) || db.domains[0];

      // Hide scores and password from team
      const safeTeam = JSON.parse(JSON.stringify(team));
      delete safeTeam.scores;
      delete safeTeam.teamPassword;

      return jsonResponse({ success: true, team: safeTeam, domainInfo: assignedDomain });
    }

    // -------------------------------------------------------------
    // Team Leader Update Selection
    // -------------------------------------------------------------
    if (pathname === '/api/teams/update-selection' && method === 'POST') {
      const { email, password, newDomainId, problemStatementId } = await request.json();
      if (!email || !password) {
        return jsonResponse({ success: false, error: 'Authentication credentials required.' }, 400);
      }

      const db = await loadDb(env);
      const cleanEmail = email.trim().toLowerCase();
      const team = db.teams.find(
        (t) => t.leader?.email && t.leader.email.trim().toLowerCase() === cleanEmail
      );

      if (!team || team.teamPassword !== password) {
        return jsonResponse({ success: false, error: 'Authentication failed.' }, 401);
      }

      if (newDomainId && db.domains.some((d) => d.id === newDomainId || d.stoneId === newDomainId)) {
        team.preferredDomain = newDomainId;
        team.selectedProblemStatement = null;
      }

      const currentDomain = db.domains.find(
        (d) => d.id === team.preferredDomain || d.stoneId === team.preferredDomain
      );

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

      await saveDb(env, db);

      const safeTeam = JSON.parse(JSON.stringify(team));
      delete safeTeam.scores;
      delete safeTeam.teamPassword;

      return jsonResponse({ success: true, team: safeTeam, domainInfo: currentDomain });
    }

    // -------------------------------------------------------------
    // Coordinator Login
    // -------------------------------------------------------------
    if (pathname === '/api/coordinator/login' && method === 'POST') {
      const { password } = (await request.json().catch(() => ({}))) || {};
      if (password === COORDINATOR_PASS) {
        const token = btoa(`coordinator_${Date.now()}`);
        return jsonResponse({ success: true, token, message: 'Coordinator clearance granted.' });
      }
      return jsonResponse({ success: false, error: 'Invalid coordinator password.' }, 401);
    }

    // -------------------------------------------------------------
    // Coordinator Get Teams
    // -------------------------------------------------------------
    if (pathname === '/api/coordinator/teams' && method === 'GET') {
      const db = await loadDb(env);
      const teams = db.teams.map((t) => {
        const copy = { ...t };
        delete copy.scores;
        delete copy.teamPassword;
        return copy;
      });
      return jsonResponse({ success: true, teams });
    }

    // -------------------------------------------------------------
    // Coordinator Mark Food or Review
    // -------------------------------------------------------------
    if (pathname === '/api/coordinator/mark' && method === 'POST') {
      const { teamId, type, key, value, notes } = await request.json();
      if (!teamId || !type || !key) {
        return jsonResponse({ success: false, error: 'Missing teamId, type, or key.' }, 400);
      }

      const db = await loadDb(env);
      const team = db.teams.find((t) => t.id === teamId);
      if (!team) return jsonResponse({ success: false, error: 'Team not found.' }, 404);

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

      await saveDb(env, db);
      return jsonResponse({ success: true, team });
    }

    // -------------------------------------------------------------
    // Judges Login
    // -------------------------------------------------------------
    if (pathname === '/api/judges/login' && method === 'POST') {
      const { password } = (await request.json().catch(() => ({}))) || {};
      if (password === JUDGES_PASS) {
        const token = btoa(`judge_${Date.now()}`);
        return jsonResponse({ success: true, token, message: 'Judge clearance granted.' });
      }
      return jsonResponse({ success: false, error: 'Invalid judges password.' }, 401);
    }

    // -------------------------------------------------------------
    // Judges Get Teams
    // -------------------------------------------------------------
    if (pathname === '/api/judges/teams' && method === 'GET') {
      const db = await loadDb(env);
      const teams = db.teams.map((t) => ({
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
        scores: t.scores || { innovation: 0, technical: 0, execution: 0, presentation: 0, total: 0, remarks: '' },
      }));
      return jsonResponse({ success: true, teams, domains: db.domains });
    }

    // -------------------------------------------------------------
    // Judges Submit Score
    // -------------------------------------------------------------
    if (pathname === '/api/judges/score' && method === 'POST') {
      const { teamId, innovation, technical, execution, presentation, remarks } = await request.json();
      if (!teamId) return jsonResponse({ success: false, error: 'teamId is required.' }, 400);

      const db = await loadDb(env);
      const team = db.teams.find((t) => t.id === teamId);
      if (!team) return jsonResponse({ success: false, error: 'Team not found.' }, 404);

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
        updatedAt: new Date().toISOString(),
      };

      await saveDb(env, db);
      return jsonResponse({ success: true, teamId, scores: team.scores });
    }

    // -------------------------------------------------------------
    // Admin Login
    // -------------------------------------------------------------
    if (pathname === '/api/admin/login' && method === 'POST') {
      const { password } = (await request.json().catch(() => ({}))) || {};
      if (!password) return jsonResponse({ success: false, error: 'Passphrase is required.' }, 400);
      if (password === ADMIN_SECRET) {
        const token = btoa(`admin_clearance_${Date.now()}`);
        return jsonResponse({ success: true, token, message: 'Organizer clearance granted.' });
      }
      return jsonResponse({ success: false, error: 'Invalid admin passphrase.' }, 401);
    }

    // -------------------------------------------------------------
    // Admin Get Teams
    // -------------------------------------------------------------
    if (pathname === '/api/admin/teams' && method === 'GET') {
      const db = await loadDb(env);
      return jsonResponse({ success: true, teams: db.teams });
    }

    // -------------------------------------------------------------
    // Admin Edit Team
    // -------------------------------------------------------------
    if (pathname.startsWith('/api/admin/teams/') && method === 'PUT') {
      const id = pathname.replace('/api/admin/teams/', '').trim();
      const updates = await request.json();
      const db = await loadDb(env);
      const idx = db.teams.findIndex((t) => t.id === id);

      if (idx === -1) {
        return jsonResponse({ success: false, error: `Team ${id} not found.` }, 404);
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
        },
      };

      await saveDb(env, db);
      return jsonResponse({ success: true, team: db.teams[idx] });
    }

    // -------------------------------------------------------------
    // Admin Delete Team
    // -------------------------------------------------------------
    if (pathname.startsWith('/api/admin/teams/') && method === 'DELETE') {
      const id = pathname.replace('/api/admin/teams/', '').trim();
      const db = await loadDb(env);
      const prevLen = db.teams.length;
      db.teams = db.teams.filter((t) => t.id !== id);

      if (db.teams.length !== prevLen) {
        await saveDb(env, db);
        return jsonResponse({ success: true, message: `Team ${id} removed.` });
      }
      return jsonResponse({ success: false, error: 'Team not found' }, 404);
    }

    // -------------------------------------------------------------
    // Admin Update Domains & Problem Statements
    // -------------------------------------------------------------
    if (pathname === '/api/admin/domains' && method === 'PUT') {
      const updatedDomain = await request.json();
      const db = await loadDb(env);
      const idx = db.domains.findIndex((d) => d.id === updatedDomain.id || d.stoneId === updatedDomain.id);
      if (idx >= 0) {
        db.domains[idx] = { ...db.domains[idx], ...updatedDomain };
        await saveDb(env, db);
        return jsonResponse({ success: true, domain: db.domains[idx] });
      }
      db.domains.push(updatedDomain);
      await saveDb(env, db);
      return jsonResponse({ success: true, domain: updatedDomain });
    }

    // -------------------------------------------------------------
    // Admin Excel Export (.xlsx)
    // -------------------------------------------------------------
    if (pathname === '/api/admin/export' && method === 'GET') {
      const db = await loadDb(env);
      const teams = db.teams;

      const paymentRows = teams.map((t, idx) => ({
        'S.No': idx + 1,
        'Team ID': t.id,
        'Team Name': t.teamName,
        'College': t.college,
        'Domain': (t.preferredDomain || '').toUpperCase(),
        'Team Size': t.teamSize || (t.members ? t.members.length + 1 : 4),
        'Fee Amount (₹)': t.payment?.amount || (390 * (t.teamSize || 4)),
        'Payment Status': (t.payment?.status || 'pending').toUpperCase(),
        'UTR / Transaction No': t.payment?.utr || 'N/A',
        'Payer Phone': t.payment?.phone || 'N/A',
        'Leader Email': t.leader?.email || '',
        'Leader Phone': t.leader?.phone || '',
        'Proof Screenshot URL': t.payment?.screenshotUrl || 'N/A',
        'Registration Time': new Date(t.createdAt).toLocaleString(),
      }));

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

      const excelArray = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
      return new Response(excelArray, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': `attachment; filename="infinity_hackathon_export_${Date.now()}.xlsx"`,
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Unmatched API endpoint
    return jsonResponse({ success: false, error: 'Endpoint not found' }, 404);
  } catch (err) {
    console.error('Pages function error:', err);
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}
