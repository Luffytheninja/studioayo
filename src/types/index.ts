export interface Project {
  slug: string;
  title: string;
  year: string;
  categories: string[];
  credits: {
    role: string;
    person: string;
  }[];
  thumbnail: string;
  bannerImage?: string;
  videoUrl?: string;
  description: string;
  overview?: string;
  client?: string;
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
