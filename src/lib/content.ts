export type ProjectType = 'software' | 'game' | 'automation';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: ProjectType;
}

export interface Port {
  id: string;
  name: string;
  status: 'active' | 'idle';
  description: string;
  flow: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface Flagship {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: { label: string; detail: string }[];
  accent: 'ledger' | 'hermes';
}

export const flagships: Flagship[] = [
  {
    id: 'ledger-crm',
    eyebrow: 'FLAGSHIP // SOFTWARE',
    title: 'Ledger CRM',
    tagline: 'A trading-desk CRM for a real-world export business.',
    description:
      'A Flask + SQLite web application built for a family trading and export operation. Designed under a strict layered architecture (routes -> services -> repositories -> database) so every rule of business is one file to change — with a Trade Ledger visual theme that treats the CRM more like a broker\'s desk than an office app.',
    tech: ['Flask', 'Python', 'SQLite', 'SOLID', 'Jinja2'],
    highlights: [
      {
        label: 'Layered Architecture',
        detail:
          'Routes, services, repositories, and the database live in their own tiers — no logic bleeds across boundaries.',
      },
      {
        label: 'SOLID by Default',
        detail:
          'Every service has one reason to change; repositories are pluggable, and the domain does not know the HTTP layer exists.',
      },
      {
        label: 'Trade Ledger Theme',
        detail:
          'Custom visual identity — monospace tickers, ledger-line spacing, and stat panels that feel like a trading terminal.',
      },
    ],
    accent: 'ledger',
  },
  {
    id: 'hermes-integrations',
    eyebrow: 'FLAGSHIP // AUTOMATION',
    title: 'Hermes Integrations',
    tagline: 'A private automation layer built on top of the Hermes desktop agent.',
    description:
      'A growing suite of custom integration ports built on top of the Hermes agent framework — each one wires a specific external system (Discord, Obsidian, local Ollama models, RSS feeds, the OS shell) into a shared automation surface I can call from a single chat. The goal is a personal AI stack that behaves like an operations layer, not a chatbot.',
    tech: ['Hermes', 'Ollama', 'Gemma', 'Python', 'Discord API', 'Obsidian'],
    highlights: [
      {
        label: 'Custom Integration Ports',
        detail:
          'Each port is a discrete surface (e.g. News, CRM Sync, Audio Narration) with its own tools, memory, and health status.',
      },
      {
        label: 'Local-First LLM Stack',
        detail:
          'Runs against local Ollama models — Qwen Coder for dev, Gemma for reasoning, Llama for agents — with Claude on tap when heavy lifting is needed.',
      },
      {
        label: 'Ops, Not Chat',
        detail:
          'Automations are scheduled, observable, and cronable. Every port has an active/idle status and a defined data flow.',
      },
    ],
    accent: 'hermes',
  },
];

export const projects: Project[] = [
  {
    id: 'jumpershooter',
    title: 'JumperShooter',
    description:
      'A Pygame-based side-scrolling shooter, including asset pipeline debugging, sprite/physics systems, and packaging fixes for pygame.font/mixer submodules.',
    tech: ['Python', 'Pygame', 'SDL2'],
    type: 'game',
  },
  {
    id: 'news-briefing',
    title: 'Tech News Briefing',
    description:
      'An automated tech news pipeline: RSS ingestion (BBC, Google News), LLM synthesis via local Gemma models, edge-tts narration, and delivery straight to Discord.',
    tech: ['Python', 'Gemma', 'edge-tts', 'Discord API'],
    type: 'automation',
  },
];

export const ports: Port[] = [
  {
    id: 'p1',
    name: 'News Intelligence',
    status: 'active',
    description: 'Automated news extraction and synthesis engine.',
    flow: 'RSS -> Gemma -> Discord',
  },
  {
    id: 'p2',
    name: 'CRM Sync Engine',
    status: 'idle',
    description: 'Automated synchronization between local email and Ledger CRM.',
    flow: 'IMAP -> Python -> SQLite',
  },
  {
    id: 'p3',
    name: 'Audio Narration',
    status: 'active',
    description: 'Text-to-speech generation for daily news briefings.',
    flow: 'Summary -> edge-tts -> Discord Voice',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'a1',
    year: '2022',
    title: 'ICode Global Hackathon — South Asia Qualifiers',
    description:
      'Ranked 46th out of 2,000 students in the Python Advance category during the South Asia Qualifiers round of the ICode Global Hackathon 2022.',
    image: '/certificates/cutouts/icode-2022-ranked.png',
  },
  {
    id: 'a2',
    year: '2022',
    title: 'ICode Global Hackathon — Finals',
    description:
      'Advanced through to the ICode Global Hackathon 2022 Finals and ranked 29th out of 800 students in the Python Advance category.',
    image: '/certificates/cutouts/icode-2022-b.png',
  },
  {
    id: 'a3',
    year: '2023',
    title: 'Intel AI Global Impact Festival — Participant',
    description:
      'Participated in "Integrating AI and Tinkering with Pedagogy," a session held under the Intel AI Global Impact Festival, in association with G20 and AIM NITI Aayog.',
    image: '/certificates/cutouts/intel-participant.png',
  },
  {
    id: 'a4',
    year: '2023',
    title: 'Intel AI Global Impact Festival — Demystifying Intel Dev Cloud',
    description:
      'Completed the "Demystifying Intel Dev Cloud" micro-learning module under the Intel AI Global Impact Festival 2023.',
    image: '/certificates/cutouts/intel-completion.png',
  },
  {
    id: 'a5',
    year: '2023',
    title: 'Intel AI Global Impact Festival — Introduction to Web 3.0',
    description:
      'Completed the "Introduction to Web 3.0" micro-learning module under the Intel AI Global Impact Festival 2023.',
    image: '/certificates/cutouts/intel-web3.png',
  },
  {
    id: 'a6',
    year: '2024',
    title: 'Ideathon \'23 — Top 25, Youth Leadership Summit',
    description:
      'Recognised as Top 25 at Ideathon \'23, a pioneering student innovation initiative under Brand Bengaluru\'s Inter-School Challenge. Citation awarded at the first Youth Leadership Summit in Bengaluru (January 13, 2024) — attended by D.K. Shivakumar (Deputy CM, Karnataka), Padma Bhushan Sudha Murthy, and actor Ramesh Aravind.',
    image: '/certificates/cutouts/ideathon-2023.png',
  },
  {
    id: 'a7',
    year: '2026',
    title: 'CodeRush 2026 — Winner',
    description:
      'Winner of CodeRush 2026, the Competitive Programming Challenge organised by Cluster One Technical Association at the School of Engineering and Technology, S-VYASA (Deemed to be University). Held on 11 September 2026.',
    image: '/certificates/cutouts/coderush-2026.png',
  },
  {
    id: 'a8',
    year: '2025',
    title: 'WorldQuant BRAIN Challenge — Gold Level',
    description:
      'Recognized for reaching Gold Level in the WorldQuant Challenge, a quantitative finance challenge testing algorithmic trading strategies and data science skills. Authorized and presented by Nitish Maini, CISO of WorldQuant.',
    image: '/certificates/cutouts/worldquant-gold.png',
  },
];
