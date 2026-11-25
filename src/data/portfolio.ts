export type BadgeKind = 'PAPER' | 'PROJECT' | 'TALK';
export type ThemeTone = 'teal' | 'burgundy' | 'slate';
export type PublicationTag = 'systems' | 'reliability' | 'tooling' | (string & {});

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
    siteTitle: 'Portfolio',
    siteDescription: 'Personal academic and technical portfolio.',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Updates', href: '#updates' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],

  hero: {
    name: '',
    portrait: '',
    portraitAlt: 'Portrait',
    socials: [] as SocialLink[],
    bioIntro: [] as TextSegment[],
    researchPrompt: '',
    bioBody: [] as TextSegment[],
    bioClosing: '',
    pills: [] as Array<{ label: string; tone: ThemeTone }>,
  },

  updates: [] as UpdateItem[],

  research: {
    intro: '',
    scholarUrl: '',
    themes: [] as ResearchTheme[],
    tagLabels: {} as Record<string, string>,
    publications: [] as Publication[],
  },

  experience: [] as ExperienceItem[],

  projects: [] as ProjectItem[],
};
