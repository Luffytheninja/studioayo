import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'faem',
    title: 'Faemous',
    subtitle: 'Building a digital home for FāëM',
    tagline: 'A digital experience for FāëM, a Lagos-based Afro-Electronic DJ and producer duo.',
    year: '2024 - 2026',
    status: 'Live',
    liveUrl: 'http://www.faemous010.com',
    client: 'FāëM',
    role: 'Product Designer / Web Designer / Developer',
    scope: ['UX', 'UI', 'Visual Direction', 'Responsive Web Design', 'Development'],
    tools: ['Figma', 'Google Antigravity', 'Vercel'],
    categories: ['Web Design', 'Web Development', 'Digital Experience', 'Creative Direction'],
    credits: [
      { role: 'Product Design & Creative Engineering', person: 'Studio Ayo' },
      { role: 'Artists & Direction', person: 'Demi & Fapelo (FāëM)' },
    ],
    thumbnail: '/media/images/faem-thumbnail.png',
    videoUrl: '/media/videos/faem.mp4',
    description: 'A digital experience for FāëM, a Lagos-based Afro-Electronic DJ and producer duo. Built as a home for the FāëM universe.',
    overview: 'FāëM is the musical project of brothers Demi and Fapelo. Their sound sits somewhere between African music and electronic music, combining their individual tastes into what they describe as Afro-Electronic fusion. The challenge was not simply to make them a website. It was to create a digital space that could hold the different sides of FāëM: the music, the people behind it, the visual world, live performances, releases, videos, press, community and future projects. So we built Faemous as a home for the FāëM universe.',
    oneLiner: 'One website. Many frequencies.',
    sections: [
      {
        title: 'The Idea',
        content: [
          'Artists often end up with their identity scattered across platforms. Music lives on streaming services. Videos live somewhere else. Social media becomes the primary source of information. Press features disappear into timelines. Bookings happen through another channel.',
          'Each platform serves its own purpose, but none of them necessarily communicates the complete identity of the artist.',
          'FāëM needed a central place that could connect these pieces. The goal was therefore to make the website feel less like an information directory and more like an extension of the FāëM identity.',
          'A visitor should be able to arrive without knowing the duo, understand who they are, experience their music and visual world, discover their projects, and find a way to continue the relationship.',
        ],
      },
      {
        title: "Designing an Artist's Universe",
        subtitle: 'Information Architecture',
        content: 'The website was structured around the different ways someone might interact with FāëM:',
        items: [
          'Discover — Introduce the duo, their sound and their story.',
          'Listen — Surface releases and make it easy to move from the website into their music.',
          'Watch — Bring together music videos, visualizers and live performances.',
          'Experience — Give projects such as WAWDH? enough space to communicate their ideas and narrative.',
          'Follow — Connect visitors to FāëM’s social platforms and wider ecosystem.',
          'Support — Create space for merchandise, Bandcamp, SoundCloud and other ways to support the project.',
          'Work with them — Make bookings accessible without forcing visitors to hunt through social media.',
        ],
      },
      {
        title: 'The Homepage',
        content: [
          'The homepage acts as the front door to the FāëM universe. Instead of beginning with a generic biography, the experience immediately establishes the current moment around the artist.',
          'The current release, WAWDH?, becomes an important entry point, followed by the duo’s story, their sound, music releases, performances, videos, press and ways to support the project.',
          'The result is a page that can function almost like an editorial spread. It tells visitors: This is who we are. This is what we’re making. This is what we’re thinking about. This is where you can experience it.',
        ],
      },
      {
        title: 'Giving the Music Room to Breathe',
        content: [
          'One of the more important decisions was not treating the music section as a simple list of streaming links. FāëM’s releases form part of their story, so the website gives projects context.',
          'The current WAWDH? section, for example, introduces the project as a work conceptualised in 2024 and explains the ideas behind it, before directing visitors toward the music and accompanying visual material.',
          'That distinction matters. Instead of "Album → Listen", the experience becomes "Idea → Context → Music → Visual experience". The website therefore works as both an artist archive and discovery experience.',
        ],
      },
      {
        title: 'WAWDH?',
        content: [
          'The WAWDH? project became one of the strongest opportunities for this approach. The project isn’t presented simply as a release; the website gives it room to explain what it means to the brothers.',
          'The writing explores individuality, uncertainty, emotion, existence and the relationship between the individual and the larger universe. That gave the website a second job beyond navigation: it became a place where FāëM could explain the thinking behind the art.',
          'The visitor isn’t only being asked to listen. They’re being invited into the thought process.',
        ],
      },
      {
        title: 'Beyond Music',
        content: [
          'FāëM’s identity extends beyond recorded tracks. The site therefore brings together music videos, visualizers, live sets, listening experiences, press features, social channels, community, merchandise, direct support, and bookings.',
          'The current website includes videos such as Through Time, Messiah Complex and Wakabout, alongside live-set material and a collection of external press features.',
          'This was important because a music artist’s website can very easily become a glorified streaming link. Faemous was designed to avoid that.',
        ],
      },
      {
        title: 'Visual Direction',
        content: [
          'The visual language was built around the character of FāëM rather than a conventional music-industry template. The brand describes its sound as: "Afro-Electronic fusion from Lagos. Dark, trippy, cinematic."',
          'That description became useful as a north star for the experience. The interface needed enough restraint to let the photography, artwork, videos and music carry the emotional weight.',
          'Rather than filling every section with decoration, the design uses the content itself as part of the visual system. The result is intended to feel cinematic, contemporary, slightly otherworldly and rooted in the artists’ identity.',
        ],
      },
      {
        title: 'Designing for an Evolving Artist',
        content: [
          'Another consideration was that the website couldn’t be treated as a static brochure. FāëM is an active music project: new releases will arrive, performances will change, videos will be added, press coverage will grow, merchandise may launch, and community channels will evolve.',
          'The architecture therefore had to accommodate change. The current site already reflects this with sections for upcoming performances, releases, videos, press, shop and community.',
          'Some areas are intentionally ready for future content rather than being artificially filled. For example, the Live section currently communicates that more shows are coming instead of manufacturing an experience around unavailable information. That sounds small, but it is an important product decision: the interface reflects the actual state of the artist.',
        ],
      },
      {
        title: 'From Figma to the Browser',
        content: [
          'I began the project by working through the experience in Figma, using wireframes to establish the structure before moving into the visual interface. From there, I translated the design into the working website.',
          'For implementation, I used Google Antigravity as an AI-assisted development environment, using it to accelerate the transition from designed interface to functional web experience.',
          'The final site was deployed through Vercel and eventually moved onto the project’s own domain: www.faemous010.com. The process allowed me to work across the boundary between design and development rather than treating implementation as something completely separate from the design process.',
        ],
      },
      {
        title: 'The Result',
        content: [
          'Faemous became a central digital home for FāëM. The live experience now brings the major parts of their ecosystem into one place: their story, current releases, discography, videos, live performances, press, community, support channels and bookings.',
          'More importantly, the website gives those things a shared context. Instead of sending someone from Instagram to Spotify, from Spotify to YouTube, and from YouTube somewhere else, the website gives the visitor a place to begin and a reason to stay.',
          'The website is not the music. It is the environment around it.',
        ],
      },
      {
        title: 'Faemous Today',
        content: [
          'The website is now live at www.faemous010.com. And as FāëM continues releasing music, performing, publishing visual work and building its community, Faemous has room to grow with them. One website. Many frequencies.',
        ],
      },
    ],
    roleBreakdown: [
      {
        category: 'UX / Structure',
        tasks: [
          'Information architecture',
          'Content hierarchy',
          'Page and section structure',
          'User journeys',
          'Artist-content organisation',
        ],
      },
      {
        category: 'UI / Visual Design',
        tasks: [
          'Interface design',
          'Typography & layout systems',
          'Responsive viewport behaviours',
          'Content presentation',
          'Visual hierarchy & pacing',
        ],
      },
      {
        category: 'Web Development',
        tasks: [
          'Frontend implementation',
          'Responsive interactive layouts',
          'External platform integration',
          'Sub-second optimization & Vercel deployment',
        ],
      },
      {
        category: 'Creative Direction',
        tasks: [
          'Translating FāëM identity into digital environment',
          'Balancing music, editorial content and visual media',
          'Designing experience around the artist rather than a generic template',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: 'A creative website does not need to behave like a conventional product website',
        description: 'For an artist, the website can simultaneously be an archive, a portfolio, a press kit, a storefront, a community hub, a storytelling device, and an invitation.',
      },
      {
        title: 'Knowing when each role should take the lead',
        description: 'For FāëM, the answer was not to build more pages. It was to create a system that allowed the different pieces of their identity to exist together without losing the personality that made them worth visiting.',
      },
      {
        title: 'The website is the environment around the music',
        description: 'Instead of scattering visitors across disconnected channels, Faemous establishes a cohesive digital world with room to grow.',
      },
    ],
    galleryImages: [
      '/media/images/faem-thumbnail.png',
    ],
    review: {
      quote: 'The website instantly set our universe apart from every traditional record label. It looks, moves, and feels like high art.',
      author: 'FAËM (Demi & Fapelo)',
      title: 'Lagos Afro-Electronic Duo',
    },
  },
  {
    slug: 'a-century-flame',
    title: 'A Century Flame',
    year: '2024 - 2026',
    categories: ['Web Design', 'Web Development', 'Visual Identity'],
    credits: [
      { role: 'Web Design & Dev', person: 'Studio Ayo' },
      { role: 'Creative Direction', person: 'Studio Ayo' },
    ],
    thumbnail: '/media/images/a-century-flame-thumbnail.png',
    videoUrl: '/media/videos/a-century-flame-website.mp4',
    description: 'An archival streetwear & heritage fashion house web platform with kinetic typography and editorial layouts.',
    overview: 'Designing an editorial digital home for the A Century Flame fashion collection. Studio Ayo merged stark high-contrast imagery with kinetic web typography and fluid scroll dynamics to create an uncompromising luxury streetwear digital flagship.',
    client: 'A Century Flame',
    galleryImages: [
      '/media/images/a-century-flame-thumbnail.png',
    ],
    review: {
      quote: 'Studio Ayo built a digital gallery experience that matched the soul of our clothing collection. Our customer engagement doubled post-launch.',
      author: 'Lanre',
      title: 'Creative Director',
    },
  },
  {
    slug: 'ountodun',
    title: 'Ountodun',
    subtitle: 'Building the identity and digital storefront for a Nigerian concept store',
    role: 'Brand Designer · UI/UX Designer · Art Director',
    scope: ['Visual Identity', 'Art Direction', 'Shopify Design'],
    deliverables: [
      'Logo',
      'Typography',
      'Colour System',
      'Brand Guidelines',
      'Mockups',
      'Social Templates',
      'Product Photography Direction',
      'Shopify Storefront',
      'Product & Collection Pages',
      'Mobile Design',
      'Newsletter Popup',
    ],
    platform: 'Shopify',
    status: 'Concept / Pre-launch',
    year: '2025',
    categories: ['Visual Identity', 'Art Direction', 'Shopify Design', 'Custom Illustration'],
    credits: [
      { role: 'Brand Designer, UI/UX & Art Direction', person: 'Studio Ayo' },
      { role: 'Bespoke Illustrations', person: 'Alex for Studio Ayo' },
    ],
    thumbnail: '/media/images/ountodun-thumbnail.png',
    bannerImage: '/media/images/ountodun-banner.png',
    description: 'A contemporary luxury concept store identity and Shopify e-commerce experience celebrating curated African craftsmanship and quiet luxury.',
    overview: 'Ountodun began with very little: a name, a Shopify account, and an idea. The concept was to create a curated store for African and Nigerian-made products, bringing together pieces across fashion, accessories and other lifestyle categories. At the time, there were no products, established brand identity, or defined visual system. I was brought in to redesign the Shopify experience, but the absence of an identity quickly made it clear that the project needed to start further upstream. I developed the visual identity alongside the ecommerce experience, creating a system that could give Ountodun a recognizable personality while remaining flexible enough to work across different products and categories. The resulting direction was chic, curated, organic, earthy, subtly Afro-inspired, and quietly luxurious.',
    client: 'Ountodun Concept Store',
    sections: [
      {
        title: 'The Starting Point',
        content: [
          'Ountodun’s initial setup was essentially a blank canvas. The business had a name, a Shopify account, and a concept for a curated store — but no finalized products, no existing visual identity, and no established design system.',
          'The initial budget was ₦80,000, and I was also involved beyond pure design, helping develop ideas and supporting parts of the communication around the project.',
          'This created a slightly unusual design challenge. Rather than receiving a complete brief with established products, photography and brand guidelines, I had to help shape the visual direction from the information available.',
        ],
      },
      {
        title: 'The Challenge',
        content: [
          'The core challenge was not simply making a Shopify store look better. It was defining what Ountodun should look and feel like before the business had enough physical material to define itself.',
          'The store needed to feel:',
          '• Curated rather than crowded\n• Feminine without becoming overly delicate\n• African without relying on obvious visual clichés\n• Premium without feeling inaccessible\n• Organic and warm rather than overly polished\n• Flexible enough to accommodate different products',
          'At the same time, the identity needed to work beyond the website, eventually extending into social media, product presentation and photography.',
        ],
      },
      {
        title: 'Research & Direction',
        subtitle: 'Four Core Pillars',
        content: [
          'I researched a broad range of concept stores and African-focused brands to understand how different businesses approached curation, cultural references, product presentation and contemporary luxury. Brands such as ALÁRA Lagos, This Is Us, and Good NG became part of the reference landscape, alongside other concept stores and independent brands.',
          'The goal wasn’t to reproduce any particular reference. Instead, I looked for the common principles behind them: How can a store feel distinctly African without becoming visually predictable? How can multiple products live within one visual world? How can warmth and cultural character coexist with a contemporary ecommerce experience?',
          'From that research, I developed a direction around four ideas:',
        ],
        items: [
          'Chic — A refined visual language with enough restraint to allow the products to remain the focus.',
          'Curated — The brand should feel intentionally assembled rather than mass-market.',
          'Organic — Muted, earthy colours and softer visual relationships gave the identity a natural quality.',
          'Subtle Afro — African influence was treated as an underlying cultural character rather than a collection of obvious motifs.',
        ],
      },
      {
        title: 'Visual Identity',
        content: [
          'With no existing identity to work from, I developed the core visual system for Ountodun:',
          '• Colour: The palette moved toward muted, warm and earthy tones, creating a flexible foundation that could sit comfortably alongside different products and photography. Rather than relying on highly saturated colours, the system was designed to feel calm and tactile.',
          '• Typography: Typography was selected to balance the refined and approachable qualities of the concept (CANOBIS for the brand logo mark and Wavehaus for body/subheaders), establishing distinct character while remaining highly usable across ecommerce interfaces.',
          '• Logo: The logo was designed as the primary visual identifier within a broader system rather than an isolated mark, remaining recognizable across Shopify navigation, social media, and physical brand touchpoints.',
        ],
      },
      {
        title: 'Building the Brand Beyond the Logo',
        content: [
          'A major part of the project was making sure the identity could actually function as a brand. I developed supporting applications including brand guidelines, social media templates, brand mockups, product presentation direction, and photography direction.',
          'The photography direction was particularly important because the eventual store would depend heavily on product imagery. Rather than treating photography as an afterthought, I considered how lighting, composition, backgrounds and framing could contribute to the overall brand language.',
          'The objective was to make the products and the environment around them feel like part of the same curated world.',
        ],
      },
      {
        title: 'Translating the Identity into Shopify',
        content: [
          'Once the identity had been established, I translated the system into the ecommerce experience. The Shopify store became the first major digital application of the brand, designed to feel more like a curated editorial space than a generic ecommerce template:',
          '• Homepage: Established the brand atmosphere before moving users into the product experience, using visual hierarchy, spacing, and typography to give the brand room to breathe.',
          '• Collection Pages: Designed around curation so browsing feels intentional and organized rather than overwhelming.',
          '• Product Pages: Structured to balance visual presentation with the practical information needed to make a purchase decision.',
          '• Mobile: Translated the visual hierarchy into a narrower viewport while maintaining the brand’s spacious, product-focused approach.',
          '• Newsletter: Designed a custom newsletter popup to make email capture feel like part of the brand experience rather than an intrusive utility.',
        ],
      },
      {
        title: "Designing Within Shopify's Constraints",
        content: [
          'One of the interesting parts of the project was working within an existing ecommerce platform rather than designing an entirely custom storefront. Shopify provides the underlying infrastructure, but the challenge is making a template feel like your brand rather than Shopify’s template.',
          'I worked within those constraints to adapt the storefront’s visual language, including typography, spacing, colour treatment, product presentation, and supporting interactions. This required thinking about both sides of the problem: What should the customer experience? and What can the business realistically maintain?',
        ],
      },
      {
        title: 'Outcome & Project Status',
        content: [
          'Ountodun ultimately did not progress into a full commercial launch under the original project timeline. As a result, there are no meaningful sales, conversion or customer metrics to present, and I don’t treat the project as a commercially validated ecommerce success.',
          'Instead, the value of the project is in the design work itself: taking an early-stage concept with almost no established visual infrastructure and developing it into a cohesive identity and ecommerce direction. It became an exercise in designing the world around a business before the business had fully formed.',
        ],
      },
    ],
    roleBreakdown: [
      {
        category: 'Brand Identity',
        tasks: ['Logo design', 'Typography system', 'Colour palette', 'Brand guidelines', 'Social media templates', 'Brand mockups'],
      },
      {
        category: 'Art Direction',
        tasks: ['Product photography direction', 'Visual styling principles', 'Product presentation guidelines', 'Editorial tone'],
      },
      {
        category: 'Shopify E-Commerce',
        tasks: ['Shopify storefront design', 'Homepage architecture', 'Collection/category layouts', 'Product detail pages', 'Mobile responsive UI', 'Custom newsletter popup'],
      },
    ],
    keyTakeaways: [
      {
        title: 'Sometimes the brief is not actually the starting point',
        description: 'When a business is still forming, the designer often has to help define the problem before designing the solution.',
      },
      {
        title: 'Brand identity and ecommerce are connected systems',
        description: 'The logo, colours and typography aren’t finished when guidelines are exported. They must survive contact with the real world: product photography, mobile screens, collection grids, and platform constraints.',
      },
      {
        title: 'Designing quiet contemporary luxury',
        description: 'African influence was treated as an underlying cultural character and warm tactile elegance rather than visual clichés.',
      },
    ],
    typography: {
      logoFontName: 'CANOBIS',
      secondaryFontName: 'Wavehaus',
      logoFontUsage: 'Logo and Brand Name Only',
      secondaryFontUsage: 'Taglines, body text (Light & Book weights)',
      imagePath: '/media/images/ountodun-typography.png',
    },
    colorPalette: [
      { hex: '#EC7320', name: 'Terracotta Warm' },
      { hex: '#841400', name: 'Deep Crimson' },
      { hex: '#FDD6B3', name: 'Alabaster Silk' },
    ],
    galleryImages: [
      '/media/images/ountodun-banner.png',
      '/media/images/ountodun-shopping-bag.png',
      '/media/images/ountodun-color-palette.png',
      '/media/images/ountodun-typography.png',
    ],
    review: {
      quote: 'Studio Ayo elevated our concept store into a global luxury benchmark. The brand identity and Shopify experience captured our heritage with unmatched sophistication.',
      author: 'Ountodun Leadership',
      title: 'Founder & Creative Lead',
    },
  },
  {
    slug: 'hachi',
    title: 'Hachi',
    subtitle: 'A shared grocery system for people who live together',
    tagline: 'When people live together, keeping track of what needs to be bought, what has already been bought, and who is responsible for it can become surprisingly messy.',
    year: '2026',
    client: 'Personal Product / PWA',
    role: 'Product Designer · UI/UX Designer · Visual Designer · Developer · Creative Lead',
    collaborators: 'Lanre · Visual Direction',
    disciplines: ['Product Design', 'UX/UI', 'Visual Design', 'Development', 'Art Direction'],
    platform: 'Personal Product / PWA',
    status: 'Working MVP / Launching Soon',
    oneLiner: 'Hachi is a shared grocery experience designed to make the everyday coordination of household shopping simpler, clearer and more collaborative.',
    categories: ['Product Design', 'UX/UI', 'Visual Design', 'Web App Dev', 'PWA'],
    credits: [
      { role: 'Product Design, UI/UX, Dev & Creative Lead', person: 'Studio Ayo' },
      { role: 'Visual Direction', person: 'Lanre' },
    ],
    thumbnail: '/media/images/hachi-thumbnail.png',
    description: 'A shared grocery system for people who live together. Built from concept to working MVP PWA, exploring product thinking, visual design, and development as one loop.',
    overview: 'Hachi is a personal product experiment built around a simple problem: when people live together, keeping track of what needs to be bought, what has already been bought, and who is responsible for it can become surprisingly messy. The information usually lives in conversations, calls, notes, memory and scattered messages. I wanted to turn that everyday friction into a simple shared experience. So I built Hachi. From the initial idea and research to the user flows, interface design, prototyping and working MVP, I took the product from concept to something people can actually interact with on the web and mobile. Hachi is currently a launching-soon PWA, and this project is an exploration of what happens when product thinking, visual design and development are treated as parts of the same process.',
    sections: [
      {
        title: 'The Idea',
        content: [
          'Household grocery shopping sounds simple — until several people are involved. Someone notices that something is finished. Someone else says they’ll buy it. Another person goes shopping and forgets something. A message gets buried. Someone buys an item that was already purchased.',
          'The problem isn’t necessarily the shopping itself. It is the coordination around the shopping.',
          'I became interested in that small gap between knowing what a household needs and actually coordinating that information between people. That became the starting point for Hachi.',
        ],
      },
      {
        title: 'The Problem',
        content: [
          'Existing ways of coordinating household groceries often rely on tools that weren’t specifically designed for the problem:',
          '• Messaging apps are good for conversations, but grocery information can quickly disappear inside a conversation.\n• Notes are useful for individuals, but they don’t naturally create a shared household state.\n• Memory works until it doesn’t.',
          'The underlying problem I wanted to address was: How might a household maintain one shared understanding of what needs to be bought without turning grocery management into another chore?',
          'That question shaped the product. Rather than designing a complicated household-management platform, I wanted Hachi to focus on one thing and make that thing feel effortless.',
        ],
      },
      {
        title: 'Starting with the Experience',
        subtitle: 'Designing the Household State',
        content: [
          'I began by thinking through the situations surrounding grocery shopping: Who notices that something is missing? Who adds it? Who is going shopping? What happens when someone buys it? How does everyone else know? What happens when plans change?',
          'These questions helped me move away from designing screens and toward designing the state of the household. The product wasn’t simply a checklist. It needed to communicate a constantly changing shared state.',
          'That became an important principle throughout the design: Hachi should make the current state obvious.',
        ],
      },
      {
        title: 'From Idea to Product Structure',
        subtitle: 'The Central Loop',
        content: [
          'I mapped the basic journey before thinking about visual styling. The goal was to reduce the number of decisions someone has to make when adding or checking an item.',
          'I explored the core interactions around: Adding → Tracking → Updating → Completing.',
          'The resulting experience needed to accommodate both the person adding groceries and the people who would later see, update or complete them. This helped establish the foundation for the MVP. Instead of filling the product with features, I focused on making the central loop understandable.',
        ],
      },
      {
        title: 'UX Design',
        content: [
          'I moved from the product structure into flows and wireframes. At this stage, I deliberately stripped away visual decoration. The questions were more basic:',
          '• Can someone understand what the product is for?\n• Can they find the information they need quickly?\n• Is it obvious what needs attention?\n• Can an item be added without unnecessary friction?\n• Can the shared state change without confusion?\n• Does the interface communicate what happened after an action?',
          'The wireframes became a way of testing the logic of Hachi before investing heavily in its visual language.',
        ],
      },
      {
        title: 'Designing the Interface',
        content: [
          'Once the core experience was established, I began developing Hachi’s visual identity and interface. I wanted the product to feel approachable without becoming childish, and distinctive without allowing visual personality to interfere with usability.',
          'The interface became a balance between four core principles:',
          '• Clarity — Information needs to be understood quickly.\n• Personality — Hachi should feel like a product with character rather than another generic productivity tool.\n• Structure — Shared information needs clear hierarchy.\n• Feedback — Actions need to communicate what has changed.',
          'The visual system grew directly from the product’s functional requirements.',
        ],
      },
      {
        title: 'Designing for Shared Information',
        content: [
          'One of the more interesting design problems was that Hachi isn’t purely an individual productivity tool. Its information belongs to a group. That changes how the interface needs to communicate.',
          'An item isn’t simply: "I added this." It becomes: "This is something our household currently needs."',
          'That distinction influenced how I thought about hierarchy, status and interaction. The interface needs to help people understand not just what they did, but what the household currently knows. This became one of the central ideas behind the product.',
        ],
      },
      {
        title: 'The Visual Layer & Art Direction',
        content: [
          'Although Hachi is a product-design project, I didn’t want the visual language to feel disconnected from my broader design practice. I approached the product as both a functional interface and a visual system, exploring graphic composition, typography, visual hierarchy, illustration, interaction, motion, and art direction.',
          'Lanre supported the visual direction of the project. My role was to connect the visual work back to the product experience — asking: Does it communicate the product? Does it belong to the same visual language? Where can the product afford to be expressive, and where should it remain functional and quiet?',
          'This is where multidisciplinary practice becomes useful: design and engineering aren’t separate projects, but parts of the same product.',
        ],
      },
      {
        title: 'Building the MVP',
        subtitle: 'Design and Development as One Loop',
        content: [
          'The project became particularly valuable to me when I moved beyond the design file. I built the frontend and turned the product into a functioning web/mobile MVP.',
          'That changed the way I evaluated my own design. In Figma, an interaction can look finished. In a working product, everything has consequences: spacing becomes real, responsive behaviour becomes real, states have to exist, and interactions have to actually work.',
          'My process became cyclical: Think → Structure → Design → Build → Test → Adjust. Implementation exposed problems that weren’t always visible in design, turning Hachi from a concept into a working MVP.',
        ],
      },
      {
        title: 'The Current MVP & Where Hachi Is Going',
        content: [
          'Hachi is currently available as a working web/mobile experience, with the product being prepared for launch. The MVP represents the first practical version of the idea rather than the final version of Hachi.',
          'The next phase is about learning from real use, identifying where the experience creates genuine value and deciding which parts of the concept deserve to become more developed.',
          'For now, Hachi represents something important: an idea I didn’t leave inside a notebook or Figma file. I took it through the messy middle: researched it, designed it, built it, and turned it into something that exists.',
        ],
      },
    ],
    roleBreakdown: [
      {
        category: 'Product',
        tasks: ['Product ideation', 'Problem definition', 'Research', 'Product structure', 'Feature thinking'],
      },
      {
        category: 'UX',
        tasks: ['User flows', 'Information architecture', 'Wireframing', 'Interaction design', 'Prototyping'],
      },
      {
        category: 'UI',
        tasks: ['Interface design', 'Visual hierarchy', 'Components', 'Responsive layouts', 'Interaction states'],
      },
      {
        category: 'Visual',
        tasks: ['Art direction', 'Graphic design', 'Visual language', 'Creative experimentation'],
      },
      {
        category: 'Development',
        tasks: ['Frontend development', 'Translating interface into working product', 'Testing experience in-browser', 'Iterating based on implementation'],
      },
    ],
    keyTakeaways: [
      {
        number: '01',
        title: 'Small problems can contain real product opportunities',
        description: 'Grocery shopping isn’t a glamorous problem. That’s exactly why I found it interesting. There are plenty of everyday systems that people have simply learned to tolerate because nobody has bothered to make them significantly better.',
      },
      {
        number: '02',
        title: 'Designing the system matters more than designing the screen',
        description: 'The interface is only the visible layer. The harder work was figuring out what information exists, how it changes and how different people understand the same shared state.',
      },
      {
        number: '03',
        title: 'Building changes how I design',
        description: 'Working directly on the MVP made technical constraints part of my design thinking. It forced me to consider how ideas behave outside Figma and in real browsers.',
      },
      {
        number: '04',
        title: 'Multidisciplinary doesn’t mean doing everything at once',
        description: 'My role is to establish the direction, understand the different disciplines and bring their contributions into one coherent experience. That is where creative direction becomes useful.',
      },
    ],
    galleryImages: [
      '/media/images/hachi-home-screen.png',
      '/media/images/hachi-login-screen.png',
      '/media/images/hachi-sign-in-screen.png',
      '/media/images/hachi-splash-screen.png',
      '/media/images/hachi-splash-screen-2.png',
    ],
    review: {
      quote: 'Hachi turns everyday household friction into a simple, collaborative shared product experience.',
      author: 'Studio Ayo Product Lab',
      title: 'Working MVP / PWA',
    },
  },
  {
    slug: 'eoe-website',
    title: 'EOE Web Experience',
    year: '2026',
    categories: ['Web Design', 'Web Development', 'Interactive Design'],
    credits: [
      { role: 'Web Design & Engineering', person: 'Studio Ayo' },
    ],
    thumbnail: '/media/by-ayo/eoe-website-thumbnail.png',
    videoUrl: '/media/by-ayo/eoe-website.mp4',
    description: 'Immersive kinetic digital platform featuring experimental typography, audio-visual feedback loops, and smooth web layouts.',
    overview: 'An interactive web design and development showcase demonstrating high-performance transitions, customized micro-interactions, and horizontal editorial layouts designed to captivate forward-thinking creative brands.',
    client: 'EOE Collective',
    galleryImages: ['/media/by-ayo/eoe-website-thumbnail.png'],
    review: {
      quote: 'Fluid, rebellious, and technically flawless. Studio Ayo pushed web animation to another level.',
      author: 'Creative Lead',
      title: 'EOE Collective',
    },
  },
  {
    slug: 'masher-website',
    title: 'Masher Web Platform',
    year: '2026',
    categories: ['Web Design', 'Web Development', 'UI/UX'],
    credits: [
      { role: 'Web Design & Frontend Development', person: 'Studio Ayo' },
    ],
    thumbnail: '/media/by-ayo/masher-website-thumbnail.png',
    videoUrl: '/media/by-ayo/masher-website.mp4',
    description: 'A dark-mode portfolio landing page and web application interface with responsive layout cards and fluid smooth scroll.',
    overview: 'Designing and developing the digital home for Masher, emphasizing sharp typography, intentional negative space, and rapid sub-second page transitions.',
    client: 'Masher Studio',
    galleryImages: ['/media/by-ayo/masher-website-thumbnail.png'],
  },
  {
    slug: 'natural-american-spirit',
    title: 'Natural American Spirit',
    year: '2026',
    categories: ['3D Modeling', '3D Motion', 'Tactile CGI'],
    credits: [
      { role: '3D Modeling & Motion', person: 'Mosa for Studio Ayo' },
    ],
    thumbnail: '/media/images/natural-american-spirit-thumbnail.png',
    videoUrl: '/media/videos/natural-american-spirit.mp4',
    description: 'Hyper-realistic 3D product modeling, tactile material exploration, and dynamic motion study.',
    overview: 'An exploration into physical material simulation, high-fidelity lighting, and photorealistic spatial rendering for premium product showcases. Demonstrated Studio Ayo’s capability to bring physical products to life digitally before manufacturing.',
    client: 'Natural American Spirit',
    galleryImages: [
      '/media/images/natural-american-spirit-thumbnail.png',
    ],
    review: {
      quote: 'The 3D craftsmanship and material render quality produced by Studio Ayo was beyond immaculate.',
      author: 'Brand Design Director',
      title: 'Product Marketing',
    },
  },
  {
    slug: 'retro-camera',
    title: 'Retro Camera Study',
    year: '2026',
    categories: ['3D Design', 'Interactive WebGL', 'Product Visualization'],
    credits: [
      { role: '3D Modeling & Interactive WebGL', person: 'Mosa for Studio Ayo' },
    ],
    thumbnail: '/media/by-mosa/camera/camera-blue.png',
    videoUrl: '/media/by-mosa/camera/camera.mp4',
    modelUrl: '/media/by-mosa/camera.glb',
    description: 'Hyper-realistic 3D rendering and motion study of a classic camera design across multiple colorways with real-time WebGL inspection.',
    overview: 'An in-depth study of mechanical assembly, lens glass refraction, and product animation of a vintage camera. Integrated with an interactive 3D WebGL viewer directly on the web.',
    client: 'Product Study',
    galleryImages: [
      '/media/by-mosa/camera/camera-blue.png',
      '/media/by-mosa/camera/camera-brown.png',
      '/media/by-mosa/camera/camera-white.png',
    ],
  },
  {
    slug: 'vietnam-cities',
    title: 'Vietnam Cities Series',
    year: '2026',
    categories: ['Bespoke Illustration', 'Digital Art', 'Editorial'],
    credits: [
      { role: 'Original Illustrations', person: 'Alex for Studio Ayo' },
    ],
    thumbnail: '/media/by-alex/hanoi-city-illustration.PNG',
    description: 'A vibrant series of digital illustrations capturing the energy, architecture, and spirit of Hanoi, Da Nang, and Saigon.',
    overview: 'Travel and editorial illustration series visualizing major urban landscapes in Vietnam, featuring detailed street scenes, historic landmarks, and signature color stories created to give editorial web projects a bespoke handcrafted feel.',
    client: 'Editorial Series',
    galleryImages: [
      '/media/by-alex/hanoi-city-illustration.PNG',
      '/media/by-alex/da-nang-city-illustration.PNG',
      '/media/by-alex/saigon-city-illustration.PNG',
    ],
  },
  {
    slug: 'selected-illustrations',
    title: 'Selected Editorial Illustrations',
    year: '2026',
    categories: ['Custom Illustration', 'Visual Storytelling', 'Digital Art'],
    credits: [
      { role: 'Illustrations', person: 'Alex for Studio Ayo' },
    ],
    thumbnail: '/media/by-alex/riri-illustration.png',
    description: 'A curated collection of bespoke illustrations bridging pop culture icons, still life, and character design.',
    overview: 'A collection of custom editorial illustration commissions and visual identity assets, demonstrating how Studio Ayo crafts bespoke illustrations to make brand websites memorable.',
    client: 'Various Clients',
    galleryImages: [
      '/media/by-alex/riri-illustration.png',
      '/media/by-alex/tatted-babe-illustration.png',
      '/media/by-alex/luffy-illustration.jpeg',
      '/media/by-alex/omelette-illustration.PNG',
      '/media/by-alex/form-and-light-illustration.PNG',
    ],
  },
  {
    slug: 'cosmetic-container',
    title: 'Cosmetic Container Motion',
    year: '2026',
    categories: ['3D Motion', 'Product Visualization', 'CGI'],
    credits: [
      { role: '3D Simulation & Motion', person: 'Studio Ayo' },
    ],
    thumbnail: '/media/by-mosa/cosmetic-container-thumbnail.png',
    videoUrl: '/media/by-mosa/cosmetic-container-animation.mp4',
    description: 'Fluid 3D animation highlighting elegant packaging form, tactile materiality, and premium branding of luxury cosmetics.',
    overview: 'Motion and rendering study for a premium cosmetic container, utilizing smooth camera pans, depth of field, and fluid simulation for high-end product websites.',
    client: 'Cosmetic Concept',
    galleryImages: [
      '/media/by-mosa/cosmetic-container-thumbnail.png',
    ],
  },
  {
    slug: 'want-magazine',
    title: 'WANT Magazine',
    year: '2025',
    categories: ['Editorial Design', 'Art Direction', 'Typography'],
    credits: [
      { role: 'Editorial Art Direction & Design', person: 'Studio Ayo' },
    ],
    thumbnail: '/media/by-ayo/want-magazine-cover.png',
    description: 'A high-fashion print and digital magazine concept exploring contemporary streetwear, product design, and cultural narratives.',
    overview: 'WANT Magazine is an editorial design concept featuring custom typographic hierarchies, editorial spreads, and streetwear curation designed for luxury digital storytelling.',
    client: 'WANT Collective',
    galleryImages: [
      '/media/by-ayo/want-magazine-cover.png',
      '/media/by-ayo/want-magazine-exotic.png',
      '/media/by-ayo/want-magazine-jersey.png',
      '/media/by-ayo/want-magazine-jeans.png',
      '/media/by-ayo/want-magazine-loafers.png',
      '/media/by-ayo/want-magazine-ties.png',
    ],
  },
];
