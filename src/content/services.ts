import { ServiceCategory } from '@/types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Distinctive identities built for businesses that want to be remembered.',
    bestForLabel: 'Perfect for',
    bestForItems: ['startups', 'hospitality', 'fashion', 'architecture', 'beauty', 'culture', 'premium SMEs'],
    includesLabel: 'Includes',
    includesItems: [
      'Brand Strategy',
      'Naming Support (optional)',
      'Logo System',
      'Typography',
      'Color System',
      'Visual Language',
      'Brand Guidelines',
      'Social Templates',
      'Stationery',
      'Packaging Direction',
      'Art Direction'
    ],
    deliverablesLabel: 'Deliverables',
    deliverablesItems: [
      'Complete Logo Suite',
      'Brand Guidelines',
      'Social Media Assets',
      'Print Assets',
      'Production Files'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦250,000 - ₦2,500,000' },
          { currency: 'USD', amount: '$250 - $3,000' }
        ]
      }
    ],
    signatureImage: '/media/images/ountodun-thumbnail.png',
    signatureProject: 'ountodun'
  },
  {
    id: 'web-design',
    title: 'Websites & Digital Experiences',
    description: 'Beautiful websites engineered to turn visitors into customers.',
    bestForLabel: 'Ideal For',
    bestForItems: ['Company Websites', 'Creative Portfolios', 'Landing Pages', 'Shopify Stores', 'Editorial Websites'],
    includesLabel: 'Includes',
    includesItems: [
      'UX Research',
      'Information Architecture',
      'Wireframes',
      'UI Design',
      'Motion Design',
      'Responsive Design',
      'CMS Integration',
      'Development',
      'SEO Fundamentals'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦450,000 - ₦5,500,000' },
          { currency: 'USD', amount: '$500 - $6,000' }
        ]
      }
    ],
    signatureImage: '/media/images/faem-thumbnail.png',
    signatureProject: 'faem'
  },
  {
    id: 'ui-ux-design',
    title: 'Product Design (UI/UX)',
    description: 'Digital products designed around people.',
    bestForLabel: 'Products',
    bestForItems: ['Mobile Apps', 'Web Apps', 'SaaS Platforms', 'Dashboards', 'Internal Tools'],
    includesLabel: 'Includes',
    includesItems: [
      'Product Discovery',
      'User Research',
      'UX Strategy',
      'User Flows',
      'Wireframes',
      'Design Systems',
      'High Fidelity UI',
      'Interactive Prototypes',
      'Developer Handoff'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦700,000 - ₦8,000,000' },
          { currency: 'USD', amount: '$800 - $10,000' }
        ]
      }
    ],
    signatureImage: '/media/images/hachi-thumbnail.png',
    signatureProject: 'hachi'
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    description: 'Creating the visual language before anything gets made.',
    bestForLabel: 'Perfect for',
    bestForItems: ['campaigns', 'launches', 'fashion collections', 'music projects', 'exhibitions', 'luxury brands'],
    includesLabel: 'Includes',
    includesItems: [
      'Creative Strategy',
      'Campaign Concepts',
      'Story Development',
      'Moodboards',
      'Visual Direction',
      'Production Planning',
      'Shoot Supervision',
      'Art Direction'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦300,000 - ₦3,500,000' },
          { currency: 'USD', amount: '$350 - $4,000' }
        ]
      }
    ],
    signatureImage: '/media/images/ountodun-banner.png',
    signatureProject: 'ountodun'
  },
  {
    id: 'photography-film',
    title: 'Photography & Film',
    description: 'Premium imagery crafted to elevate perception.',
    bestForLabel: 'Services',
    bestForItems: [
      'Brand Photography',
      'Product Photography',
      'Fashion Campaigns',
      'Editorial Photography',
      'Architecture',
      'Lifestyle',
      'Commercial Films',
      'Brand Documentaries',
      'Product Videos',
      'Launch Films',
      'Social Content'
    ],
    includesLabel: 'Expertise',
    includesItems: [
      'Commercial Photography',
      'Fashion Photography',
      'Brand Campaigns',
      'Cinematography',
      'Creative Direction',
      'Video Editing'
    ],
    pricing: [
      {
        label: 'Photography',
        ranges: [
          { currency: 'NGN', amount: '₦200,000 - ₦2,500,000' },
          { currency: 'USD', amount: '$250 - $3,000' }
        ]
      },
      {
        label: 'Film Production',
        ranges: [
          { currency: 'NGN', amount: '₦600,000 - ₦10,000,000+' },
          { currency: 'USD', amount: '$700 - $12,000+' }
        ]
      }
    ],
    signatureImage: '/media/images/a-century-flame-thumbnail.png',
    signatureProject: 'a-century-flame'
  },
  {
    id: 'motion-design-3d',
    title: 'Motion Design & 3D',
    description: 'Visuals impossible to ignore. High-end motion graphics, CGI, and product visualization for launches, marketing, and storytelling.',
    bestForLabel: 'Services',
    bestForItems: [
      'Product Visualization',
      'CGI',
      'Motion Graphics',
      'Logo Animation',
      '3D Rendering',
      'Interactive Assets',
      'Product Animation'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦250,000 - ₦4,500,000' },
          { currency: 'USD', amount: '$300 - $5,000' }
        ]
      }
    ],
    signatureImage: '/media/images/natural-american-spirit-thumbnail.png',
    signatureProject: 'natural-american-spirit'
  },
  {
    id: 'illustration-graphic-art',
    title: 'Illustration & Graphic Art',
    description: 'Original artwork that gives brands personality. From editorial illustration to campaign artwork, every piece is created specifically for your project.',
    bestForLabel: 'Services',
    bestForItems: [
      'Editorial Illustration',
      'Packaging Illustration',
      'Album Artwork',
      'Book Covers',
      'Poster Design',
      'Character Design',
      'Digital Painting',
      'Murals',
      'Campaign Artwork'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦80,000 - ₦1,500,000' },
          { currency: 'USD', amount: '$100 - $2,000' }
        ]
      }
    ],
    signatureImage: '/media/images/ountodun-shopping-bag.png',
    signatureProject: 'ountodun'
  },
  {
    id: 'creative-retainers',
    title: 'Creative Retainers',
    description: 'Your remote creative department. Ideal for businesses that need continuous creative support without building an in-house team.',
    bestForLabel: 'Monthly Support',
    bestForItems: [
      'Brand Management',
      'Social Media Design',
      'Marketing Campaigns',
      'Website Updates',
      'Product Design',
      'Presentation Design',
      'Motion Graphics',
      'Creative Consulting'
    ],
    pricing: [
      {
        label: 'Starting from',
        ranges: [
          { currency: 'NGN', amount: '₦400,000 - ₦3,500,000 / month' },
          { currency: 'USD', amount: '$500 - $4,000 / month' }
        ]
      }
    ],
    signatureImage: '/media/images/hachi-login-screen.png',
    signatureProject: 'hachi'
  }
];
