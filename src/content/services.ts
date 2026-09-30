import { ServiceCategory } from '@/types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'web-design',
    title: 'Web Design & Art Direction',
    description: 'High-converting, editorial web design crafted to elevate perception and turn visitors into loyal clients.',
    bestForLabel: 'Ideal For',
    bestForItems: [
      'Brand Flagship Websites',
      'Luxury & Culture E-Commerce',
      'High-Growth Startups',
      'Editorial Publications',
      'Creative Studios & Portfolios',
    ],
    includesLabel: 'What We Deliver',
    includesItems: [
      'UI/UX Discovery & Research',
      'Strategic Information Architecture',
      'Interactive Figma Prototyping',
      'Editorial Typography Systems',
      'Mobile-First Design Systems',
      'Conversion Rate Optimization',
      'Responsive Interaction Specs',
    ],
    deliverablesLabel: 'Deliverables',
    deliverablesItems: [
      'Complete Figma Design File',
      'Interactive Clickable Prototype',
      'Responsive UI Component Library',
      'Asset Suite (SVG, WebP, Typography)',
      'Design Token Specifications',
    ],
    pricing: [
      {
        label: 'Project Investment',
        ranges: [
          { currency: 'USD', amount: '$2,500 – $8,000' },
          { currency: 'NGN', amount: '₦2,500,000 – ₦8,000,000' },
        ],
      },
    ],
    signatureImage: '/media/images/faem-thumbnail.png',
    signatureProject: 'faem',
  },
  {
    id: 'web-development',
    title: 'Web Development & Creative Engineering',
    description: 'Bespoke, production-grade web applications engineered for sub-second speeds, fluid 60fps animations, and maximum search visibility.',
    bestForLabel: 'Technologies',
    bestForItems: [
      'Next.js 15 & React 19',
      'TypeScript Strict Architecture',
      'Tailwind CSS v4 Styling',
      'Framer Motion & GSAP Physics',
      'Headless Shopify & CMS',
    ],
    includesLabel: 'Technical Standards',
    includesItems: [
      'Clean Modular TypeScript Codebase',
      'Lenis Smooth Scroll & Kinetic Motion',
      'Pixel-Perfect Responsive QA (Mobile/Tablet/PC)',
      'Lighthouse 95+ Performance Scores',
      'Full Technical SEO & OpenGraph Setup',
      'W3C Accessibility Compliance',
      'Zero-Downtime Deployment Setup',
    ],
    pricing: [
      {
        label: 'Project Investment',
        ranges: [
          { currency: 'USD', amount: '$3,500 – $10,000+' },
          { currency: 'NGN', amount: '₦3,500,000 – ₦10,000,000+' },
        ],
      },
    ],
    signatureImage: '/media/images/a-century-flame-thumbnail.png',
    signatureProject: 'a-century-flame',
  },
  {
    id: 'illustration',
    title: 'Bespoke Illustration & Brand Visuals',
    description: 'Original artwork, editorial illustrations, and narrative visuals that give your digital experience an unmistakable human soul.',
    bestForLabel: 'Creative Mediums',
    bestForItems: [
      'Editorial Hero Illustrations',
      'Digital Painting & Fine Art',
      'Packaging & Print Visuals',
      'Custom Iconography Suites',
      'Brand Mascot & World-building',
    ],
    includesLabel: 'Creative Process',
    includesItems: [
      'Concept Sketches & Storyboarding',
      'Custom Color Palette Exploration',
      'High-Resolution Digital Art Creation',
      'Scalable Vector Asset Delivery',
      'Web-Optimized Image Integration',
    ],
    pricing: [
      {
        label: 'Project Investment',
        ranges: [
          { currency: 'USD', amount: '$1,000 – $3,500' },
          { currency: 'NGN', amount: '₦1,000,000 – ₦3,500,000' },
        ],
      },
    ],
    signatureImage: '/media/by-alex/hanoi-city-illustration.PNG',
    signatureProject: 'ountodun',
  },
  {
    id: '3d-design',
    title: 'Occasional 3D Design & Spatial Motion',
    description: 'Tactile 3D assets, physical material simulations, and interactive WebGL experiences that make your digital presence tangible.',
    bestForLabel: 'Specializations',
    bestForItems: [
      'Interactive 3D Web Embeds (Three.js/R3F)',
      'Photorealistic Product CGI',
      'Tactile Material Simulation',
      'Kinetic Micro-Animations',
      'Sculptural Concept Visualization',
    ],
    includesLabel: 'Production Pipeline',
    includesItems: [
      '3D Poly Modeling & Topology',
      'Lighting & Shader Architecture',
      'Blender Scene Simulation',
      'GLB / WebGL Asset Optimization',
      'Interactive Web Canvas Integration',
    ],
    pricing: [
      {
        label: 'Project Investment',
        ranges: [
          { currency: 'USD', amount: '$1,500 – $5,000' },
          { currency: 'NGN', amount: '₦1,500,000 – ₦5,000,000' },
        ],
      },
    ],
    signatureImage: '/media/images/natural-american-spirit-thumbnail.png',
    signatureProject: 'natural-american-spirit',
  },
  {
    id: 'digital-products',
    title: 'Proprietary Digital Products & Ventures',
    description: 'We build digital products for specific modern audiences. Led by our proprietary grocery coordination PWA Hachi, we take software from zero to launch.',
    bestForLabel: 'Product Focus',
    bestForItems: [
      'Progressive Web Apps (PWAs)',
      'Mobile-First Shared Systems',
      'Specialized Consumer Tools',
      'SaaS Application Interfaces',
      'Venture Design & Incubation',
    ],
    includesLabel: 'Venture Capabilities',
    includesItems: [
      'Product Strategy & Market Validation',
      'Full End-to-End UI/UX Flows',
      'Design System Architecture',
      'Mobile-Optimized Frontend Engineering',
      'Security-First Interface Design',
      'Rapid Iteration & User Testing',
    ],
    pricing: [
      {
        label: 'Venture Investment',
        ranges: [
          { currency: 'USD', amount: '$6,000 – $20,000+' },
          { currency: 'NGN', amount: '₦6,000,000 – ₦20,000,000+' },
        ],
      },
    ],
    signatureImage: '/media/images/hachi-thumbnail.png',
    signatureProject: 'hachi',
  },
  {
    id: 'studio-retainer',
    title: 'Dedicated Studio Retainer',
    description: 'Your remote senior digital web studio on monthly standby. Perfect for growing brands and funded startups needing continuous elite execution.',
    bestForLabel: 'Monthly Partnership',
    bestForItems: [
      'Ongoing Web Feature Rollouts',
      'Continuous UI/UX Evolution',
      'Custom Illustration Drops',
      'Performance & Conversion Tuning',
      'Direct Studio Communication',
    ],
    includesLabel: 'Retainer Scope',
    includesItems: [
      'Dedicated Weekly Sprint Hours',
      'Guaranteed Fast Turnaround',
      'Direct Slack / WhatsApp Channel',
      'Priority Design & Dev Queue',
      'Monthly Strategic Roadmapping',
    ],
    pricing: [
      {
        label: 'Monthly Retainer',
        ranges: [
          { currency: 'USD', amount: '$2,500 – $6,000 / month' },
          { currency: 'NGN', amount: '₦2,500,000 – ₦6,000,000 / month' },
        ],
      },
    ],
    signatureImage: '/media/images/hachi-login-screen.png',
    signatureProject: 'hachi',
  },
];
