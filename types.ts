export type Language = 'vi' | 'en';

export interface NavContent {
  home: string;
  about: string;
  programs: string;
  facilities: string;
  contact: string;
  langBtn: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
}

export interface StatItem {
  num: string;
  label: string;
}

export interface PhilosophyItem {
  title: string;
  desc: string;
}

export interface PhilosophyContent {
  title: string;
  items: PhilosophyItem[];
}

export interface ProgramGroup {
  name: string;
  items: string[];
}

export interface MajorsContent {
  title: string;
  groups: ProgramGroup[];
}

export interface FacilitiesContent {
  title: string;
  list: string[];
}

export interface LocationsContent {
  title: string;
  list: string[];
}

export interface FooterContent {
  copy: string;
}

export interface AppContent {
  nav: NavContent;
  hero: HeroContent;
  stats: StatItem[];
  philosophy: PhilosophyContent;
  majors: MajorsContent;
  facilities: FacilitiesContent;
  locations: LocationsContent;
  footer: FooterContent;
}