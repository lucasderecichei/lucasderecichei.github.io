export type BadgeKind = 'PAPER' | 'PROJECT' | 'TALK';
export type ThemeTone = 'teal' | 'burgundy' | 'slate';
export type PublicationTag = 'systems' | 'reliability' | 'tooling';

export interface TextSegment {
  text: string;
  href?: string;
  accent?: ThemeTone | 'bold';
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'github' | 'scholar' | 'linkedin' | 'cv';
}

export interface UpdateItem {
  date: string;
  badge: BadgeKind;
  segments: TextSegment[];
}

export interface ResearchTheme {
  number: string;
  title: string;
  tone: ThemeTone;
  segments: TextSegment[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  tag: PublicationTag;
  figure: string;
  authors: string[];
  summary: string;
  award?: string;
  links: {
    paper?: string;
    code?: string;
    website?: string;
  };
  bibtex: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  year: string;
  category: string;
  tone: ThemeTone;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const portfolioData = {
  meta: {
    siteTitle: 'Alexandru Ionescu — Systems & ML Researcher',
    siteDescription:
      'Academic and technical portfolio of Alexandru Ionescu: distributed inference systems, verifiable ML reliability, and developer observability.',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Updates', href: '#updates' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],

  hero: {
    name: 'Alexandru Ionescu',
    portrait: '/images/portrait.svg',
    portraitAlt: 'Portrait of Alexandru Ionescu',
    socials: [
      { label: 'Email', href: 'mailto:alex.ionescu@example.edu', icon: 'email' },
      { label: 'GitHub', href: 'https://github.com/example-researcher', icon: 'github' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: 'scholar' },
      { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
      { label: 'CV (PDF)', href: '/cv.pdf', icon: 'cv' },
    ] satisfies SocialLink[],
    bioIntro: [
      { text: 'Hi, I am ' },
      { text: 'Alexandru', accent: 'bold' },
      { text: ' — a Computer Science Ph.D. researcher in the ' },
      { text: 'Reliable Systems Group', href: 'https://github.com/example-researcher' },
      { text: ', advised by Prof. Dan Popescu. Previously, I completed my M.Sc. and B.Sc. in Computer Engineering at ' },
      { text: 'Politehnica University of Bucharest', href: 'https://upb.ro/' },
      { text: '.' },
    ] satisfies TextSegment[],
    researchPrompt:
      'How can we design ML inference systems whose latency, failures, and confidence stay inspectable in production?',
    bioBody: [
      {
        text: 'I investigate this question from the perspective of engineers and practitioners deploying models under strict latency and reliability budgets. ',
      },
      {
        text: 'My work bridges ',
      },
      { text: 'distributed systems', accent: 'bold' },
      { text: ' and ', },
      { text: 'applied machine learning', accent: 'bold' },
      { text: ', focusing on three complementary directions: (1) profiling ', },
      { text: 'runtime bottlenecks', accent: 'teal' },
      { text: ' across heterogeneous accelerators, (2) building ', },
      { text: 'verifiable guardrails', accent: 'burgundy' },
      { text: ' for silent model degradation, and (3) crafting ', },
      { text: 'lightweight observability', accent: 'slate' },
      { text: ' interfaces for production teams.' },
    ] satisfies TextSegment[],
    bioClosing:
      'Outside the lab, I enjoy endurance cycling, mechanical keyboards, analog photography, and contributing to open-source Rust tooling.',
    pills: [
      { label: 'Distributed ML Systems', tone: 'teal' as ThemeTone },
      { label: 'Verifiable Reliability', tone: 'burgundy' as ThemeTone },
      { label: 'Observability Tooling', tone: 'slate' as ThemeTone },
    ],
  },

  updates: [
    {
      date: 'Oct 2026',
      badge: 'PAPER',
      segments: [
        { text: 'Our paper ' },
        { text: '“TraceKV: Deterministic Memory Paging for Multi-Tenant Inference”', href: '#research' },
        { text: ' was accepted to ' },
        { text: 'SOSP 2026', accent: 'bold' },
        { text: '! Source code and reproduction benchmarks are now public.' },
      ],
    },
    {
      date: 'Sep 2026',
      badge: 'PROJECT',
      segments: [
        { text: 'Released ' },
        { text: 'DriftLens v0.8', href: '#projects' },
        { text: ', an open-source zero-overhead telemetry daemon for tracking embedding shift and tail-latency spikes in real time.' },
      ],
    },
    {
      date: 'Jul 2026',
      badge: 'TALK',
      segments: [
        { text: 'Gave an invited talk at the ' },
        { text: 'Zurich Systems Colloquium', href: '#experience' },
        { text: ' on isolating silent numerical drift across quantized serving pipelines.' },
      ],
    },
    {
      date: 'May 2026',
      badge: 'PAPER',
      segments: [
        { text: '“BoundsCheck: Calibrated Abstention Under Covariate Shift”', href: '#research' },
        { text: ' received a ' },
        { text: 'Spotlight', accent: 'bold' },
        { text: ' at ICML 2026. Looking forward to presenting in Vienna!' },
      ],
    },
    {
      date: 'Jan 2026',
      badge: 'PROJECT',
      segments: [
        { text: 'Published our interactive ' },
        { text: 'GPU Kernel Roofline Explorer', href: '#projects' },
        { text: ' alongside an educational walkthrough on mixed-precision scheduling.' },
      ],
    },
  ] satisfies UpdateItem[],

  research: {
    intro:
      'Modern machine learning pipelines are often treated as opaque black boxes once deployed, hiding subtle hardware stalls, quantization errors, and distribution drift until downstream workflows break. My research makes these failure modes measurable, predictable, and debuggable through three pillars.',
    scholarUrl: 'https://scholar.google.com/',
    themes: [
      {
        number: '01',
        title: 'Predictable Serving Systems',
        tone: 'teal',
        segments: [
          { text: 'I design schedulers and memory allocators that eliminate tail-latency jitter in ' },
          { text: 'multi-tenant inference', accent: 'bold' },
          { text: ' clusters, guaranteeing strict SLA isolation.' },
        ],
      },
      {
        number: '02',
        title: 'Runtime Verification & Drift',
        tone: 'burgundy',
        segments: [
          { text: 'I develop statistical certificates and lightweight probes that detect ' },
          { text: 'silent degradation', accent: 'bold' },
          { text: ' before corrupted predictions reach downstream users.' },
        ],
      },
      {
        number: '03',
        title: 'Developer Observability',
        tone: 'slate',
        segments: [
          { text: 'I build open-source profilers and trace visualizers that turn dense ' },
          { text: 'execution graphs', accent: 'bold' },
          { text: ' into actionable diagnostics for systems engineers.' },
        ],
      },
    ] satisfies ResearchTheme[],

    tagLabels: {
      systems: 'systems',
      reliability: 'reliability',
      tooling: 'tooling',
    } satisfies Record<PublicationTag, string>,

    publications: [
      {
        id: 'tracekv-2026',
        title: 'TraceKV: Deterministic Memory Paging for Multi-Tenant Inference',
        venue: 'SOSP 2026',
        year: 2026,
        tag: 'systems',
        figure: '/images/papers/fig-1.svg',
        authors: ['Alexandru Ionescu', 'Mara Dumitrescu', 'Dan Popescu'],
        summary:
          'We introduce a page-table-inspired KV-cache allocator that bounds p99 latency variance across concurrent workloads without sacrificing GPU memory utilization.',
        award: 'BEST PAPER CANDIDATE',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
          website: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{ionescu2026tracekv,
  title={TraceKV: Deterministic Memory Paging for Multi-Tenant Inference},
  author={Ionescu, Alexandru and Dumitrescu, Mara and Popescu, Dan},
  booktitle={Proceedings of the ACM SIGOPS Symposium on Operating Systems Principles (SOSP)},
  year={2026}
}`,
      },
      {
        id: 'boundscheck-2026',
        title: 'BoundsCheck: Calibrated Abstention Under Covariate Shift',
        venue: 'ICML 2026',
        year: 2026,
        tag: 'reliability',
        figure: '/images/papers/fig-2.svg',
        authors: ['Alexandru Ionescu', 'Elena Rusu', 'Lukas Weber', 'Dan Popescu'],
        summary:
          'A distribution-free conformal gating mechanism that flags out-of-support inputs in streaming pipelines with provable false-alarm control.',
        award: 'SPOTLIGHT',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{ionescu2026boundscheck,
  title={BoundsCheck: Calibrated Abstention Under Covariate Shift},
  author={Ionescu, Alexandru and Rusu, Elena and Weber, Lukas and Popescu, Dan},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2026}
}`,
      },
      {
        id: 'quantprobe-2025',
        title: 'QuantProbe: Diagnosing Silent Numerical Divergence in Low-Bit Kernels',
        venue: 'MLSys 2025',
        year: 2025,
        tag: 'reliability',
        figure: '/images/papers/fig-3.svg',
        authors: ['Mara Dumitrescu', 'Alexandru Ionescu', 'Henrik Lindqvist'],
        summary:
          'We characterize layer-wise error amplification across FP8 and INT4 operators and propose a fast canary pass to isolate unstable blocks.',
        award: 'ORAL PRESENTATION',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{dumitrescu2025quantprobe,
  title={QuantProbe: Diagnosing Silent Numerical Divergence in Low-Bit Kernels},
  author={Dumitrescu, Mara and Ionescu, Alexandru and Lindqvist, Henrik},
  booktitle={Proceedings of Machine Learning and Systems (MLSys)},
  year={2025}
}`,
      },
      {
        id: 'rooflineviz-2025',
        title: 'RooflineViz: Interactive Flamegraphs for Heterogeneous Tensor Schedules',
        venue: 'UIST 2025',
        year: 2025,
        tag: 'tooling',
        figure: '/images/papers/fig-4.svg',
        authors: ['Alexandru Ionescu', 'Clara Novak', 'Dan Popescu'],
        summary:
          'An interactive profiler linking compiler IR transforms directly to hardware stall counters, cutting kernel tuning iteration time in half.',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
          website: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{ionescu2025rooflineviz,
  title={RooflineViz: Interactive Flamegraphs for Heterogeneous Tensor Schedules},
  author={Ionescu, Alexandru and Novak, Clara and Popescu, Dan},
  booktitle={ACM Symposium on User Interface Software and Technology (UIST)},
  year={2025}
}`,
      },
      {
        id: 'shardflow-2024',
        title: 'ShardFlow: Topology-Aware Pipeline Parallelism on Commodity Clusters',
        venue: 'NSDI 2024',
        year: 2024,
        tag: 'systems',
        figure: '/images/papers/fig-5.svg',
        authors: ['Alexandru Ionescu', 'Matei Stan', 'Dan Popescu'],
        summary:
          'An adaptive micro-batch planner that overlaps collective communication with asymmetric PCIe and Ethernet link capacities.',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{ionescu2024shardflow,
  title={ShardFlow: Topology-Aware Pipeline Parallelism on Commodity Clusters},
  author={Ionescu, Alexandru and Stan, Matei and Popescu, Dan},
  booktitle={USENIX Symposium on Networked Systems Design and Implementation (NSDI)},
  year={2024}
}`,
      },
      {
        id: 'logstream-2023',
        title: 'LogStream: Sub-Millisecond Trace Compression for Edge Inference Nodes',
        venue: 'SOCC 2023',
        year: 2023,
        tag: 'tooling',
        figure: '/images/papers/fig-6.svg',
        authors: ['Alexandru Ionescu', 'Stefan Georgescu'],
        summary:
          'A columnar ring-buffer format enabling continuous execution tracing on resource-constrained edge accelerators under 1% CPU overhead.',
        links: {
          paper: 'https://arxiv.org/',
          code: 'https://github.com/example-researcher',
        },
        bibtex: `@inproceedings{ionescu2023logstream,
  title={LogStream: Sub-Millisecond Trace Compression for Edge Inference Nodes},
  author={Ionescu, Alexandru and Georgescu, Stefan},
  booktitle={ACM Symposium on Cloud Computing (SoCC)},
  year={2023}
}`,
      },
    ] satisfies Publication[],
  },

  experience: [
    {
      period: 'Summer 2026',
      role: 'Research Intern — Inference Systems',
      organization: 'Nordic Compute Labs',
      location: 'Zurich, Switzerland',
      badge: 'INDUSTRY',
      summary:
        'Designed deterministic request batching and speculative memory prefetching for high-throughput serving clusters.',
      highlights: [
        'Reduced p99 queuing latency by 31% under bursty multi-model traffic.',
        'Built an automated regression harness comparing FP16 vs. FP8 numerical drift across 14 benchmarks.',
      ],
    },
    {
      period: '2023 — Present',
      role: 'Graduate Research Assistant',
      organization: 'Reliable Systems Group',
      location: 'Bucharest, Romania',
      badge: 'ACADEMIC',
      summary:
        'Conducting doctoral research on predictable ML runtime systems, fault isolation, and hardware-aware scheduling.',
      highlights: [
        'Lead author on systems and ML reliability papers across SOSP, ICML, and NSDI.',
        'Co-mentored 4 undergraduate theses on GPU kernel profiling and distributed tracing.',
      ],
    },
    {
      period: '2022 — 2023',
      role: 'Systems Software Engineer',
      organization: 'CloudCore Telemetry',
      location: 'Remote / EU',
      badge: 'ENGINEERING',
      summary:
        'Engineered high-volume Rust ingestion pipelines and eBPF probes for container-level performance observability.',
      highlights: [
        'Maintained zero-copy telemetry collectors processing 1.2M events/sec per cluster node.',
        'Authored open-source trace exporters adopted across internal Kubernetes workloads.',
      ],
    },
  ] satisfies ExperienceItem[],

  projects: [
    {
      name: 'DriftLens',
      year: '2026',
      category: 'Observability Daemon',
      tone: 'teal',
      description:
        'Zero-allocation Rust sidecar for monitoring embedding shift, confidence collapse, and tail-latency anomalies via OpenTelemetry.',
      stack: ['Rust', 'OpenTelemetry', 'Arrow', 'WebAssembly'],
      githubUrl: 'https://github.com/example-researcher',
      demoUrl: 'https://github.com/example-researcher',
    },
    {
      name: 'Roofline Explorer',
      year: '2025',
      category: 'Interactive Profiler',
      tone: 'burgundy',
      description:
        'Browser-based visualizer mapping PyTorch and Triton operator traces onto arithmetic intensity rooflines for rapid bottleneck triage.',
      stack: ['TypeScript', 'Canvas API', 'Python', 'Triton'],
      githubUrl: 'https://github.com/example-researcher',
      demoUrl: 'https://github.com/example-researcher',
    },
    {
      name: 'TinySched',
      year: '2024',
      category: 'Simulation Toolkit',
      tone: 'slate',
      description:
        'Discrete-event simulator for testing continuous batching, KV-cache eviction policies, and heterogeneous cluster routing algorithms.',
      stack: ['Python', 'C++20', 'PyBind11'],
      githubUrl: 'https://github.com/example-researcher',
    },
  ] satisfies ProjectItem[],
};
