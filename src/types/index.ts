export interface CaseStudySection {
  title: string;
  subtitle?: string;
  content: string | string[];
  items?: string[];
  callout?: string;
  quote?: string;
  subsections?: {
    title: string;
    content: string | string[];
  }[];
}

export interface KeyTakeaway {
  number?: string;
  title: string;
  description: string;
}

export interface RoleBreakdown {
  category: string;
  tasks: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  year: string;
  status?: string;
  liveUrl?: string;
  platform?: string;
  client?: string;
  role?: string;
  collaborators?: string;
  scope?: string[];
  tools?: string[];
  deliverables?: string[];
  disciplines?: string[];
  oneLiner?: string;
  categories: string[];
  credits: {
    role: string;
    person: string;
  }[];
  thumbnail: string;
  bannerImage?: string;
  videoUrl?: string;
  modelUrl?: string;
  description: string;
  overview?: string;
  sections?: CaseStudySection[];
  keyTakeaways?: KeyTakeaway[];
  roleBreakdown?: RoleBreakdown[];
  typography?: {
    logoFontName?: string;
    secondaryFontName?: string;
    logoFontUsage?: string;
    secondaryFontUsage?: string;
    imagePath?: string;
  };
  colorPalette?: {
    hex: string;
    name?: string;
  }[];
  review?: {
    quote: string;
    author: string;
    title: string;
  };
  galleryImages?: string[];
}


export interface ServicePricing {
  label: string;
  ranges: {
    currency: string;
    amount: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  bestForLabel?: string;
  bestForItems?: string[];
  includesLabel?: string;
  includesItems?: string[];
  deliverablesLabel?: string;
  deliverablesItems?: string[];
  pricing: ServicePricing[];
  signatureImage?: string;
  signatureProject?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
}

export interface StudioInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  aboutText: string[];
  email: string;
  location: string;
  phone?: string;
  clientsLocations?: string;
  socials: {
    name: string;
    url: string;
    colorHex: string;
  }[];
  trustedClients: string[];
}

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  priceUSD: number;
  priceNGN: number;
  image: string;
  description: string;
}
