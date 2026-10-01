/**
 * Official Timeline & Schedule Data for The Infinity Hackathon 2026
 * Organized by: Gayatri Vidya Parishad College for Degree and PG Courses (A)
 * Departments: CSE & CSE-AIML
 * Venues:
 *  - Day 1: Rushikonda Campus, Visakhapatnam (Build Before Zero)
 *  - Day 2: Engineering Block 3rd Floor (Victory Awaits)
 */

export const HACKATHON_METADATA = {
  institution: "Gayatri Vidya Parishad College for Degree and PG Courses (A)",
  departments: "CSE & CSE-AIML",
  campus: "Rushikonda Campus, Visakhapatnam",
  finaleVenue: "Engineering Block 3rd Floor",
  day1Tagline: "Build Before Zero",
  day2Tagline: "Victory Awaits",
  format: "24-Hour Continuous Sprint"
};

export const TIMELINE_DAY_1 = [
  {
    id: 'd1-checkin',
    time: '08:30 – 09:30 AM',
    stone: 'space',
    stoneName: 'SPACE STONE',
    stoneColor: '#00d2ff',
    stoneRgb: '0, 210, 255',
    title: 'Space Stone: Realm Check-In',
    type: 'Logistics',
    category: 'checkin',
    desc: 'Badge clearance & workstation allocation (Venue by 9 AM).',
    location: 'Rushikonda Campus Ingress'
  },
  {
    id: 'd1-ps-reveal',
    time: '09:30 – 11:00 AM',
    stone: 'mind',
    stoneName: 'MIND STONE',
    stoneColor: '#ffd000',
    stoneRgb: '255, 208, 0',
    title: 'Mind Stone: Problem Matrix Reveal',
    type: 'Decryption',
    category: 'kickoff',
    desc: 'Challenge statements unveiled & initial ideation kick-off across the 6 Infinity domains.',
    location: 'Main Arena & Leader Portals'
  },
  {
    id: 'd1-ceremony',
    time: '11:00 – 12:00 PM',
    stone: 'power',
    stoneName: 'POWER STONE',
    stoneColor: '#b026ff',
    stoneRgb: '176, 38, 255',
    title: 'Cosmic Inception: Inaugural Ceremony',
    type: 'Ceremony',
    category: 'keynote',
    desc: 'Official keynote addresses, protocols & mission rules of engagement.',
    location: 'Central Auditorium'
  },
  {
    id: 'd1-lunch',
    time: '12:00 – 01:00 PM',
    stone: 'reality',
    stoneName: 'REALITY STONE',
    stoneColor: '#ff2a4b',
    stoneRgb: '255, 42, 75',
    title: 'Infinity Feast: Midday Refuel',
    type: 'Meal',
    category: 'food',
    desc: 'Lunch break & energy recharge for upcoming code battles.',
    location: 'Dining Quad'
  },
  {
    id: 'd1-stage1',
    time: '01:00 – 02:00 PM',
    stone: 'time',
    stoneName: 'TIME STONE',
    stoneColor: '#00ff88',
    stoneRgb: '0, 255, 136',
    title: 'Eye of Agamotto: Stage 1 Review',
    type: 'Evaluation',
    category: 'judging',
    badge: 'STAGE 1 REVIEW',
    desc: 'Initial idea validation & presentation deck evaluation before domain evaluators.',
    location: 'Evaluation Pods'
  },
  {
    id: 'd1-power-sprint',
    time: '02:00 – 05:00 PM',
    stone: 'power',
    stoneName: 'POWER STONE',
    stoneColor: '#b026ff',
    stoneRgb: '176, 38, 255',
    title: 'Power Stone: Core Development Sprint',
    type: 'Dev Sprint',
    category: 'hacking',
    desc: 'High-octane coding sprint on core problem solutions, schemas, and API design.',
    location: 'High-Performance Labs'
  },
  {
    id: 'd1-stage2',
    time: '05:00 – 06:00 PM',
    stone: 'reality',
    stoneName: 'REALITY STONE',
    stoneColor: '#ff2a4b',
    stoneRgb: '255, 42, 75',
    title: 'Reality Stone: Early Prototype Review',
    type: 'Evaluation',
    category: 'judging',
    badge: 'STAGE 2 REVIEW',
    desc: 'Stage 2 evaluation by second judge on system architecture, database bindings, and code rigor.',
    location: 'Evaluation Pods'
  },
  {
    id: 'd1-tea-break',
    time: '06:00 – 06:30 PM',
    stone: 'mind',
    stoneName: 'MIND STONE',
    stoneColor: '#ffd000',
    stoneRgb: '255, 208, 0',
    title: 'Pym Particles: Snap Refreshment',
    type: 'Break',
    category: 'food',
    desc: 'Power snacks & tea break for team recharging.',
    location: 'Dining Quad'
  },
  {
    id: 'd1-quantum-pipeline',
    time: '06:30 – 08:00 PM',
    stone: 'space',
    stoneName: 'SPACE STONE',
    stoneColor: '#00d2ff',
    stoneRgb: '0, 210, 255',
    title: 'Quantum Pipeline: Build Sprint',
    type: 'Dev Sprint',
    category: 'hacking',
    desc: 'Deep implementation, database syncing & feature setup.',
    location: 'Workstation Arena'
  },
  {
    id: 'd1-dinner',
    time: '08:00 – 09:00 PM',
    stone: 'soul',
    stoneName: 'SOUL STONE',
    stoneColor: '#ff7700',
    stoneRgb: '255, 119, 0',
    title: 'Grand Alliance: Infinity Dinner',
    type: 'Meal',
    category: 'food',
    desc: 'Community dinner break & evening mentor discussions.',
    location: 'Dining Quad'
  },
  {
    id: 'd1-midnight-build',
    time: '09:00 – 12:00 AM',
    stone: 'power',
    stoneName: 'POWER STONE',
    stoneColor: '#b026ff',
    stoneRgb: '176, 38, 255',
    title: 'Overnight Continuum: Midnight Build',
    type: 'Dev Sprint',
    category: 'hacking',
    desc: 'Unbroken coding stretch leading into Day 2 endgame.',
    location: 'High-Performance Labs'
  }
];

export const TIMELINE_DAY_2 = [
  {
    id: 'd2-arcade',
    time: '12:00 – 01:00 AM',
    stone: 'reality',
    stoneName: 'REALITY STONE',
    stoneColor: '#ff2a4b',
    stoneRgb: '255, 42, 75',
    title: 'Multiverse Arcade: Midnight Games',
    type: 'Recreation',
    category: 'gaming',
    desc: 'Gaming tournaments, music, movie screening & icebreakers.',
    location: 'Arcade & Chill Arena'
  },
  {
    id: 'd2-soul-integration',
    time: '01:00 – 02:00 AM',
    stone: 'soul',
    stoneName: 'SOUL STONE',
    stoneColor: '#ff7700',
    stoneRgb: '255, 119, 0',
    title: 'Soul Stone: Dev Integration',
    type: 'Dev Sprint',
    category: 'hacking',
    desc: 'Integration sprint, live debugging & feature freeze.',
    location: 'Engineering Labs'
  },
  {
    id: 'd2-stage3',
    time: '02:00 – 03:00 AM',
    stone: 'time',
    stoneName: 'TIME STONE',
    stoneColor: '#00ff88',
    stoneRgb: '0, 255, 136',
    title: 'Time-Loop: Stage 3 Review',
    type: 'Evaluation',
    category: 'judging',
    badge: 'STAGE 3 REVIEW',
    desc: '3rd judge review on working MVP, stress test & product feasibility.',
    location: 'Evaluation Pods'
  },
  {
    id: 'd2-snap-polish',
    time: '03:00 – 06:00 AM',
    stone: 'mind',
    stoneName: 'MIND STONE',
    stoneColor: '#ffd000',
    stoneRgb: '255, 208, 0',
    title: 'Infinity Snap: Final Polish Sprint',
    type: 'UI/UX Polish',
    category: 'hacking',
    desc: 'Snap bugs out of existence & polish UI before dawn.',
    location: 'Workstation Arena'
  },
  {
    id: 'd2-chrono-ranking',
    time: '06:00 – 07:00 AM',
    stone: 'space',
    stoneName: 'SPACE STONE',
    stoneColor: '#00d2ff',
    stoneRgb: '0, 210, 255',
    title: 'Chrono-Ranking: Top 6 Shortlist',
    type: 'Milestone',
    category: 'shortlist',
    badge: 'CODE FREEZE & SHORTLIST',
    desc: 'Final code freeze & jury shortlisting of the top 6 teams for the Grand Jury.',
    location: 'Jury Command Center'
  },
  {
    id: 'd2-breakfast',
    time: '07:00 – 08:00 AM',
    stone: 'reality',
    stoneName: 'REALITY STONE',
    stoneColor: '#ff2a4b',
    stoneRgb: '255, 42, 75',
    title: 'Morning Dawn: Hero Breakfast',
    type: 'Meal',
    category: 'food',
    desc: 'Breakfast refuel & prep for final presentations.',
    location: 'Dining Quad'
  },
  {
    id: 'd2-closing-assembly',
    time: '08:00 – 09:00 AM',
    stone: 'power',
    stoneName: 'POWER STONE',
    stoneColor: '#b026ff',
    stoneRgb: '176, 38, 255',
    title: 'Hall of Heroes: Closing Assembly',
    type: 'Ceremony',
    category: 'ceremony',
    desc: 'Official valedictory remarks & mentor appreciation.',
    location: 'Auditorium'
  },
  {
    id: 'd2-top6-showdown',
    time: '09:00 – 09:45 AM',
    stone: 'time',
    stoneName: 'TIME STONE',
    stoneColor: '#00ff88',
    stoneRgb: '0, 255, 136',
    title: 'Cosmic Endgame: Top 6 Showdown',
    type: 'Grand Finale',
    category: 'finale',
    badge: 'GRAND JURY SHOWDOWN',
    desc: 'Final live product pitches & grand jury defense.',
    location: 'Engineering Block 3rd Floor'
  },
  {
    id: 'd2-grand-finale',
    time: '09:45 – 10:00 AM',
    stone: 'soul',
    stoneName: 'SOUL STONE',
    stoneColor: '#ffd000',
    stoneRgb: '255, 208, 0',
    title: 'The Inevitable Victor: Grand Finale',
    type: 'Awards',
    category: 'awards',
    badge: 'VICTORY AWAITS',
    desc: 'Official announcement of winners & prize distribution.',
    location: 'Engineering Block 3rd Floor'
  }
];

export const TIMELINE_EVENTS = [...TIMELINE_DAY_1, ...TIMELINE_DAY_2];
