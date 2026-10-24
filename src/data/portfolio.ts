/**
 * Central portfolio data — built from Muntazir's resume (Muntazir_Naqvi_Resume.pdf) and LinkedIn.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it is true and appears on the resume / LinkedIn.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Muntazir Naqvi',
  displayName: 'Muntazir Naqvi',
  firstName: 'MUNTAZIR',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NAQVI ORIGINAL',
  role: 'System Engineer',
  tagline: ['System Engineer', 'Automation', 'Endpoint Security'],
  intro:
    'A System Engineer at ProVal Technologies who automates and secures MSP environments — PowerShell workflows, RMM platforms (ConnectWise Automate, CW RMM, NinjaOne) and endpoint security (SentinelOne, ThreatLocker) across multiple clients.',
  /** Shown in the hero and resume stats. Update as the years go by. */
  yearsInIT: '5+',
  location: 'Mohali, Punjab',
  email: 'muntazir786.mn@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/muntazir-naqvi-391796197',
    github: 'https://github.com/muntazirnaqvi786',
  },
  resumePdf: '/assets/Muntazir_Naqvi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Muntazir Naqvi',
  },
  interests: ['DevOps', 'Cloud Infrastructure', 'Automation'],
};

export type Education = { school: string; place: string; degree: string; period: string; note?: string };

export const education: Education[] = [
  {
    school: 'Sach Tech Pvt Ltd',
    place: 'Phase 8 Industrial Area, Mohali',
    degree: 'Certificate of Technical Studies in Networking & Cloud Computing — Trainee',
    period: 'April 2021',
    note: 'Linux • CCNA/CCNP-level networking • AWS',
  },
  {
    school: 'Sri Guru Gobind Singh College',
    place: 'Chandigarh',
    degree: 'Bachelor of Computer Applications — Computer Applications Development',
    period: 'May 2019',
  },
  {
    school: 'Ishwar Singh Dev Samaj Senior Secondary School',
    place: 'Chandigarh',
    degree: 'Senior Secondary — Non-Medical',
    period: 'May 2016',
  },
  {
    school: 'Swami Ram Tirtha Public Sen-Sec School',
    place: 'Mohali',
    degree: 'Matriculation',
    period: 'March 2014',
  },
];

export const experience = [
  {
    company: 'ProVal Technologies Pvt Ltd',
    role: 'System Engineer',
    place: 'Noida, IN',
    period: 'December 2022 – Present',
    points: [
      'Managed and optimized deployment, configuration, and day-to-day administration of ConnectWise Automate, CW RMM, NinjaOne and SentinelOne for multiple clients.',
      'Developed, tested, and implemented PowerShell automation workflows and scripts to improve client service delivery and operational efficiency.',
      'Built multiple software deployment and removal workflows in CW Automate; executed patch updates and partner maintenance.',
      'Led troubleshooting and escalation for tool integrations and endpoint security systems to minimize client downtime; used ThreatLocker to whitelist deployments.',
      'Executed policy management and device/user onboarding-offboarding, documented in ITGlue; piloted automation initiatives with Level 3 engineers in line with ITIL best practices.',
      'Trained and mentored colleagues while building strong client relationships.',
    ],
  },
  {
    company: 'SankalpIT',
    role: 'IT Administrator',
    place: 'Mohali, IN',
    period: 'January 2022 – October 2022',
    points: [
      'Designed and debugged complex scripts in Automate to improve operational efficiency, and built personalized client reports.',
      'Administered remote services in ConnectWise Automate — patch management, monitoring, and client onboarding and offboarding.',
      'Configured templates, service boards and workflows in ConnectWise Manage; integrated CW Control with CW Automate.',
      'Monitored and maintained networks, servers and workstations, and provided remote technical support across channels.',
    ],
  },
  {
    company: 'SankalpIT',
    role: 'Junior IT Administrator',
    place: 'Mohali, IN',
    period: 'August 2021 – December 2022',
    points: [
      'Learned RMM tooling and ConnectWise Automate remote monitoring, including its patch-management system.',
      'Monitored operational systems and troubleshot errors to minimize downtime; ran continuous network monitoring.',
      'Configured service boards and templates in Automate and administered user accounts and permissions.',
      'Installed, configured and maintained servers, computers and printers.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'canvas' | 'voice';
};

export const projects: Project[] = [
  {
    id: 'endpoint-security',
    title: 'Endpoint Security',
    year: '2022 – Present',
    genre: 'Security • MSP • ThreatLocker',
    logline: 'Keeping client endpoints protected with SentinelOne, ThreatLocker, DNSFilter and Duo — without slowing deployments down.',
    stack: ['SentinelOne', 'ThreatLocker', 'DNSFilter', 'Duo'],
    build: [
      'Used ThreatLocker to whitelist software deployments effectively, even where the environment made it difficult.',
      'Led troubleshooting and escalation for tool integrations and endpoint security systems, keeping client downtime to a minimum.',
      'Executed policy management and device/user onboarding-offboarding, and documented the processes in ITGlue.',
    ],
    features: [
      'ThreatLocker whitelisting for deployments',
      'SentinelOne endpoint protection',
      'DNS filtering and Duo multi-factor access',
      'Policy administration across client environments',
      'Escalation handling for security integrations',
    ],
    metrics: [
      { value: '4', label: 'security & identity tools managed' },
      { value: 'Multi', label: 'client environments' },
      { value: 'ITIL', label: 'aligned processes' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'automation-workflows',
    title: 'Automation Workflows',
    year: '2022 – Present',
    genre: 'Automation • PowerShell • MSP',
    logline: 'PowerShell scripts and ConnectWise Automate workflows that deploy, remove and patch software so engineers do not have to.',
    stack: ['PowerShell', 'Batch', 'ConnectWise Automate', 'CW RMM'],
    build: [
      'Developed, tested and implemented PowerShell automation workflows and scripts to improve client service delivery and operational efficiency.',
      'Built multiple workflows for software deployment and removal using CW Automate, and debugged scripts in Automate.',
      'Piloted new automation initiatives with Level 3 engineers and helped standardize processes in line with ITIL best practices.',
    ],
    features: [
      'Software deployment and removal workflows',
      'PowerShell and Batch scripting',
      'Patch updates and partner maintenance',
      'Workflow automation and API integration',
    ],
    metrics: [
      { value: '3', label: 'scripting languages (PowerShell, Batch, Bash)' },
      { value: '3', label: 'RMM platforms automated' },
      { value: 'L3', label: 'engineers collaborated with' },
    ],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'rmm-administration',
    title: 'RMM Administration',
    year: '2021 – Present',
    genre: 'RMM • Patching • Operations',
    logline: 'Day-to-day administration of ConnectWise Automate, CW RMM, NinjaOne and SentinelOne across multiple MSP clients.',
    stack: ['ConnectWise Automate', 'CW RMM', 'NinjaOne', 'SentinelOne', 'ITGlue'],
    build: [
      'Managed and optimized deployment, configuration and administration of the RMM and endpoint tooling for multiple clients.',
      'Built expertise in CW RMM agent management, patch approval and policy management.',
      'Documented processes and client knowledge in ITGlue and similar systems; trained and mentored colleagues along the way.',
    ],
    features: [
      'Agent management and patch approval',
      'Policy management across clients',
      'Client onboarding and offboarding',
      'Documentation in ITGlue, Halo and SharePoint',
    ],
    metrics: [
      { value: '4', label: 'platforms administered' },
      { value: '2', label: 'ConnectWise expert certifications' },
      { value: `${profile.yearsInIT}`, label: 'years in MSP IT' },
    ],
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'business-card-generator',
    title: 'Business Card Generator',
    year: '2026',
    genre: 'Web App • React • AI',
    logline: 'A web-based business card designer with industry-specific layouts, AI design suggestions and high-resolution export.',
    stack: ['React', 'HTML Canvas', 'Anthropic API'],
    build: [
      'Building a web-based business card generator in React, rendered with HTML Canvas.',
      'Added industry-specific layouts and multiple colour palettes, with AI design suggestions through the Anthropic API.',
      'Designed front and back of the card independently, with high-resolution export.',
    ],
    features: [
      'Industry-specific layouts',
      'Multiple palettes',
      'AI design suggestions',
      'Independent front / back design',
      'High-resolution export',
    ],
    metrics: [
      { value: '2', label: 'sides designed independently' },
      { value: 'AI', label: 'powered design suggestions' },
    ],
    palette: violet,
    motif: 'canvas',
  },
  {
    id: 'jarvis-voice-agent',
    title: 'Jarvis Voice Agent',
    year: '2026',
    genre: 'AI • Voice • Automation',
    logline: 'A voice agent with wake-word detection, system control and a spoken confirmation gate for anything irreversible.',
    stack: ['openWakeWord', 'Anthropic API', 'Ollama'],
    build: [
      'Building a voice agent that wakes on a spoken wake word using openWakeWord.',
      'Gave it a broad set of system-control capabilities, with a spoken confirmation gate before any irreversible action.',
      'Runs on both the Anthropic API and local Ollama backends.',
    ],
    features: [
      'Wake-word detection',
      'System control capabilities',
      'Spoken confirmation for irreversible actions',
      'Cloud and local LLM backends',
    ],
    metrics: [
      { value: '2', label: 'LLM backends (cloud + local)' },
      { value: '1', label: 'confirmation gate for irreversible actions' },
    ],
    palette: jade,
    motif: 'voice',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'automate-expert',
    title: 'Automate Expert',
    org: 'ConnectWise',
    detail: 'Certified expert in ConnectWise Automate, backed by day-to-day script debugging and workflow development.',
    laurel: 'Certified Expert',
  },
  {
    id: 'cw-rmm-expert',
    title: 'CW RMM Expert',
    org: 'ConnectWise',
    detail: 'Certification expert in ConnectWise RMM — agent management, patch approval and policy management.',
    laurel: 'Certified Expert',
  },
  {
    id: 'networking-cloud',
    title: 'Networking & Cloud',
    org: 'Sach Tech Pvt Ltd',
    detail: 'Certificate of Technical Studies — Linux (Ubuntu), CCNA/CCNP-level networking and a cloud-based site hosting project on AWS.',
    laurel: 'Technical Studies',
  },
  {
    id: 'team-mentor',
    title: 'Team Mentor',
    org: 'ProVal Technologies',
    detail: 'Trained and mentored colleagues, and guided teammates toward a collaborative, high-performing team.',
    laurel: 'Mentor',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'ConnectWise', name: 'ConnectWise Automate Expert' },
  { issuer: 'ConnectWise', name: 'CW RMM Certification Expert' },
  { issuer: 'Sach Tech Pvt Ltd', name: 'Cloud Computing and Networking' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'automation',
    title: 'Automation & RMM',
    subtitle: 'The control plane',
    skills: [
      { name: 'ConnectWise Automate', mono: 'Ca' },
      { name: 'CW RMM', mono: 'Cr' },
      { name: 'NinjaOne', mono: 'Nj' },
      { name: 'CW Control', mono: 'Cc' },
    ],
  },
  {
    id: 'scripting',
    title: 'Scripting',
    subtitle: 'Automation by hand',
    skills: [
      { name: 'PowerShell', mono: 'Ps' },
      { name: 'Batch', mono: 'Ba' },
      { name: 'Bash', mono: 'Sh' },
      { name: 'Workflow Automation', mono: 'Wf' },
      { name: 'API Integration', mono: 'Ap' },
    ],
  },
  {
    id: 'security',
    title: 'Endpoint Security',
    subtitle: 'Protect & enforce',
    skills: [
      { name: 'SentinelOne', mono: 'S1' },
      { name: 'ThreatLocker', mono: 'Tl' },
      { name: 'DNSFilter', mono: 'Df' },
      { name: 'Duo', mono: 'Du' },
      { name: 'Policy Administration', mono: 'Po' },
    ],
  },
  {
    id: 'operations',
    title: 'MSP Operations',
    subtitle: 'Keeping clients running',
    skills: [
      { name: 'Patch Management', mono: 'Pm' },
      { name: 'Onboarding / Offboarding', mono: 'Ob' },
      { name: 'Troubleshooting & Escalation', mono: 'Ts' },
      { name: 'ITIL', mono: 'It' },
      { name: 'Client Relationships', mono: 'Cs' },
    ],
  },
  {
    id: 'docs',
    title: 'PSA & Documentation',
    subtitle: 'Knowledge that scales',
    skills: [
      { name: 'ConnectWise Manage', mono: 'Cm' },
      { name: 'ITGlue', mono: 'Ig' },
      { name: 'Halo', mono: 'Ha' },
      { name: 'SharePoint', mono: 'Sp' },
    ],
  },
  {
    id: 'infra',
    title: 'Networking & Cloud',
    subtitle: 'Where it started',
    skills: [
      { name: 'Linux (Ubuntu)', mono: 'Lx' },
      { name: 'CCNA / CCNP-level Networking', mono: 'Nw' },
      { name: 'AWS', mono: 'Aw', note: 'Familiar' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'DevOps', mono: 'Dv' },
      { name: 'Cloud Infrastructure', mono: 'Ci' },
      { name: 'Automation', mono: 'Au' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'ConnectWise Automate': ['ProVal Technologies', 'SankalpIT', 'ConnectWise Automate Expert'],
  'CW RMM': ['ProVal Technologies', 'CW RMM Certification Expert'],
  NinjaOne: ['ProVal Technologies', 'RMM Administration'],
  'CW Control': ['SankalpIT — integrated with CW Automate'],
  PowerShell: ['Automation Workflows', 'ProVal Technologies'],
  Batch: ['Scripting skills on the resume'],
  Bash: ['Scripting skills on the resume'],
  'Workflow Automation': ['Automation Workflows', 'Software deployment & removal'],
  'API Integration': ['Workflow automation & API integration'],
  SentinelOne: ['Endpoint Security', 'ProVal Technologies'],
  ThreatLocker: ['Endpoint Security'],
  DNSFilter: ['Endpoint Security'],
  Duo: ['Endpoint Security'],
  'Policy Administration': ['Endpoint Security', 'ProVal Technologies'],
  'Patch Management': ['ProVal Technologies', 'SankalpIT'],
  'Onboarding / Offboarding': ['ProVal Technologies', 'SankalpIT'],
  ITIL: ['Automation Workflows'],
  'ConnectWise Manage': ['SankalpIT — templates, service boards & workflows'],
  ITGlue: ['ProVal Technologies — process documentation'],
  'Linux (Ubuntu)': ['Sach Tech — Networking & Cloud Computing'],
  'CCNA / CCNP-level Networking': ['Sach Tech — Networking & Cloud Computing'],
  AWS: ['Sach Tech — cloud-based site hosting project'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2014 – 2019',
    synopsis: 'School in Mohali and Chandigarh, then a Bachelor of Computer Applications.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'Matriculation at Swami Ram Tirtha Public Sen-Sec School, Mohali.',
        tags: ['Matric', 'Mohali'],
        runtime: 'March 2014',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Choice',
        description: 'Senior secondary (Non-Medical) at Ishwar Singh Dev Samaj Senior Secondary School, Chandigarh.',
        tags: ['Non-Medical', 'Chandigarh'],
        runtime: 'May 2016',
        palette: violet,
      },
      {
        code: 'S01 E03',
        title: 'The Graduate',
        description: 'Bachelor of Computer Applications (Computer Applications Development) at Sri Guru Gobind Singh College, Chandigarh.',
        tags: ['BCA', 'Computer Applications'],
        runtime: 'May 2019',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Wiring Up',
    period: '2021',
    synopsis: 'Technical studies in Networking & Cloud Computing at Sach Tech — the hands-on start of an infrastructure career.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Terminal',
        description: 'Hands-on with Linux (Ubuntu) as part of the Sach Tech technical studies.',
        tags: ['Linux', 'Ubuntu'],
        runtime: 'Sach Tech',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The Network',
        description: 'CCNA and CCNP-level networking expertise built during the Networking & Cloud Computing certificate.',
        tags: ['CCNA', 'CCNP', 'Networking'],
        runtime: 'Sach Tech',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Cloud',
        description: 'Familiarity with AWS Cloud and a project hosting a site on the cloud.',
        tags: ['AWS', 'Cloud Hosting'],
        runtime: 'April 2021',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Entering the NOC',
    period: '2021 – 2022',
    synopsis: 'Junior IT Administrator, then IT Administrator at SankalpIT, Mohali — learning RMM tooling from the ground up.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Junior Admin',
        description: 'Learned RMM tooling, ConnectWise Automate monitoring and patch management while keeping systems running.',
        tags: ['RMM', 'Automate', 'Patching'],
        runtime: 'Aug 2021 – Dec 2022',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Administrator',
        description: 'Designed and debugged Automate scripts, built client reports and managed onboarding and offboarding.',
        tags: ['Scripting', 'Automate', 'Reports'],
        runtime: 'Jan 2022 – Oct 2022',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'The Configurator',
        description: 'Configured templates, service boards and workflows in ConnectWise Manage and integrated CW Control with Automate.',
        tags: ['ConnectWise Manage', 'CW Control'],
        runtime: 'SankalpIT',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'System Engineer',
    period: '2022 – Present',
    synopsis: 'System Engineer at ProVal Technologies, Noida — automation, endpoint security and RMM administration for multiple clients.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Automator',
        description: 'PowerShell workflows and CW Automate automation for software deployment, removal and patching.',
        tags: ['PowerShell', 'CW Automate'],
        runtime: 'ProVal Technologies',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Guardian',
        description: 'SentinelOne, ThreatLocker whitelisting, policy management and escalation handling to keep client downtime minimal.',
        tags: ['SentinelOne', 'ThreatLocker'],
        runtime: 'ProVal Technologies',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Mentor',
        description: 'Trained and mentored colleagues, and earned ConnectWise Automate and CW RMM expert certifications.',
        tags: ['Mentoring', 'ConnectWise Expert'],
        runtime: 'ProVal Technologies',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Next arc: DevOps, cloud infrastructure and deeper automation.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Moving toward DevOps, cloud infrastructure and automation roles — and building side projects along the way.',
        tags: ['DevOps', 'Cloud', 'Automation'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core craft', title: 'PowerShell', detail: 'Automation workflows & scripts', palette: amber },
  { label: 'Certified expert', title: 'ConnectWise Automate', detail: 'Expert certification', palette: crimson },
  { label: 'Certified expert', title: 'CW RMM', detail: 'Certification Expert', palette: ocean },
  { label: 'Endpoint security', title: 'ThreatLocker', detail: 'Deployment whitelisting', palette: violet },
  { label: 'RMM platform', title: 'NinjaOne', detail: 'Multi-client administration', palette: jade },
  { label: 'Current role', title: 'System Engineer', detail: 'ProVal Technologies • Dec 2022 – Present', palette: crimson },
  { label: 'Where it started', title: 'SankalpIT', detail: 'IT Administrator • 2021 – 2022', palette: amber },
  { label: 'Foundations', title: 'Networking & Cloud', detail: 'CCNA/CCNP-level • Linux • AWS', palette: ocean },
  { label: 'Knowledge sharing', title: 'ITGlue', detail: 'Plus Halo & SharePoint', palette: violet },
  { label: 'Current focus', title: 'DevOps', detail: 'with Cloud Infrastructure & Automation', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Role',
    title: 'System Engineer',
    lines: ['ProVal Technologies Pvt Ltd, Noida', 'December 2022 – Present'],
    chips: ['MSP', 'RMM', 'Automation'],
  },
  {
    kicker: 'Skills',
    title: 'Automation first.',
    lines: ['PowerShell · Batch · Bash', 'ConnectWise Automate · CW RMM · NinjaOne'],
    chips: ['PowerShell', 'CW Automate', 'CW RMM', 'NinjaOne'],
  },
  {
    kicker: 'Security',
    title: 'Locked down.',
    lines: ['SentinelOne · ThreatLocker · DNSFilter · Duo', 'Policy administration and patch management'],
  },
  {
    kicker: 'The climb',
    title: 'From NOC to System Engineer',
    lines: ['Junior IT Administrator → IT Administrator · SankalpIT · 2021 – 2022', 'System Engineer · ProVal Technologies · 2022 – Present'],
  },
  {
    kicker: 'Certified',
    title: 'Three Credentials',
    lines: ['ConnectWise Automate Expert', 'CW RMM Certification Expert', 'Cloud Computing and Networking — Sach Tech'],
  },
  {
    kicker: 'Education',
    title: 'BCA · 2019',
    lines: ['Sri Guru Gobind Singh College, Chandigarh', 'Computer Applications Development'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['DevOps · Cloud Infrastructure · Automation'],
  },
];

export type ProfileId = 'muntazir' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'muntazir',
    name: 'Muntazir',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, certifications & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Projects, stack & automation first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Storyteller',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Role & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
