export interface WordPressProject {
  title: string;
  slug: string;
  subtitle: string;
  role: string;
  tech: string[];
  overview: string;
  responsibilities: string[];
  highlights: string[];
  images: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  category: string[];
}

export const wordpressProjects: WordPressProject[] = [
  {
    title: 'Talent Track',
    slug: 'talent-track',
    subtitle: 'AI-powered fitness analysis platform turning smartphones into professional workout evaluation systems',
    role: 'Full-Stack Developer & AI Engineer',
    tech: ['React', 'TypeScript', 'MediaPipe', 'AI/ML', 'Computer Vision', 'Kiro AI'],
    overview: 'Talent Track is an AI-powered fitness analysis platform that turns any smartphone camera into a professional-grade workout evaluation system with no gym, no wearables, and no subscriptions. Built in just 10.5 days using Kiro AI, saving over 62% development time with spec-driven dev, steering docs, agent hooks, and MCP extensions. This project is my attempt to resurrect accessible fitness technology for students, para-athletes, and anyone who only has a phone but still wants elite-level feedback.',
    responsibilities: [
      'Implemented real-time AI pose detection using MediaPipe with 33 body landmarks tracking',
      'Built rep counting, joint-angle tracking & live form scoring system (0–100 scale)',
      'Developed Ghost Mode feature allowing users to train against a perfect AI skeleton',
      'Created Evaluator Test Mode for instant performance analysis without video upload',
      'Integrated FitFranken AI chatbot for performance explanations and coaching tips',
      'Designed badge & streak system for motivation and habit building',
      'Ensured full privacy-first design with all processing happening locally in the browser'
    ],
    highlights: [
      'Built in just 10.5 days using Kiro AI, achieving 62% faster development time',
      'Privacy-first architecture - all AI processing happens locally in browser',
      'Accessible fitness technology for students, para-athletes, and budget-conscious users',
      'Real-time pose detection with professional-grade accuracy using only smartphone camera',
      'Ghost Mode training feature for perfect form comparison'
    ],
    images: [
      '/images/talenttrack-new-1.png',
      '/images/talenttrack-new-2.png',
      '/images/talenttrack-new-3.png',
      '/images/talenttrack-new-4.png',
      '/images/talenttrack-new-5.png',
      '/images/talenttrack-new-6.png',
      '/images/talenttrack-new-7.png',
      '/images/talenttrack-new-8.png',
      '/images/talenttrack-new-9.png',
      '/images/talenttrack-new-10.png',
      '/images/talenttrack-new-11.png'
    ],
    liveUrl: 'https://talent-track-cyber.vercel.app',
    category: ['All', 'AI/ML', 'Fitness', 'Computer Vision']
  },
  {
    title: 'JARVIS AI Assistant',
    slug: 'jarvis-ai',
    subtitle: 'Google Cloud Run Hackathon: JARVIS-inspired AI agent with hybrid offline/online capabilities',
    role: 'AI Engineer & Cloud Developer',
    tech: ['Google Cloud', 'AI/ML', 'Gmail API', 'Google Meet', 'Google Docs API', 'Vision API', 'Voice Recognition'],
    overview: 'Ever since Iron Man\'s JARVIS amazed us all, I\'ve always wanted to bring something like that to life — and that\'s exactly what I set out to do at the Google Cloud Run Hackathon! I built an AI-powered offline conversational agent that switches seamlessly to online mode when connected. The goal was to create a personal AI assistant that works even when offline, but becomes supercharged with cloud capabilities when online. This project truly deepened my understanding of Google Cloud Console, API integrations, and hybrid AI systems — bridging the gap between local intelligence and cloud power.',
    responsibilities: [
      'Developed hybrid AI system working offline with local intelligence and online with cloud capabilities',
      'Integrated Gmail API for email sending and management',
      'Implemented Google Meet scheduling functionality',
      'Built Google Docs reading and summarization features',
      'Integrated Google Vision API for image understanding',
      'Created contact management section for quick communication',
      'Implemented file attachment handling system',
      'Developed voice and text chat modes for natural conversation'
    ],
    highlights: [
      'Hybrid offline/online architecture - works without internet, supercharged when connected',
      'Full Google Workspace integration (Gmail, Meet, Docs, Vision)',
      'Natural voice and text conversation capabilities',
      'Deep understanding of Google Cloud Console and API integrations',
      'Bridges gap between local AI intelligence and cloud computing power'
    ],
    images: [
      '/images/jarvis-1.png',
      '/images/jarvis-2.png',
      '/images/jarvis-3.png',
      '/images/jarvis-4.png'
    ],
    caseStudyUrl: 'https://www.youtube.com/watch?v=2jOhWb1g8oQ',
    category: ['All', 'AI/ML', 'Cloud', 'Google Cloud']
  },
  {
    title: 'Aeroponics Vertical Farming',
    slug: 'aeroponics-farming',
    subtitle: 'IoT-enabled vertical farming system using aeroponics for sustainable urban agriculture',
    role: 'IoT Developer & Agricultural Tech Engineer',
    tech: ['IoT', 'Aeroponics', 'Sensors', 'Automation', 'Sustainable Agriculture', 'Vertical Farming'],
    overview: 'An innovative vertical farming solution using aeroponics technology to grow plants without soil, maximizing space efficiency and resource conservation. This project addresses food security and sustainable agriculture challenges in urban environments through automated nutrient delivery, IoT-enabled monitoring, and water-efficient aeroponic misting systems.',
    responsibilities: [
      'Designed vertical tower architecture for maximum space optimization',
      'Implemented automated nutrient delivery system with precise control',
      'Developed IoT-enabled monitoring and control dashboard',
      'Created water-efficient aeroponic misting mechanism',
      'Built sensor integration for real-time environmental monitoring',
      'Designed sustainable urban agriculture solution for food security'
    ],
    highlights: [
      'Vertical design maximizes growing capacity in limited urban spaces',
      'Automated systems reduce manual intervention and optimize plant growth',
      'Water-efficient aeroponics uses 90% less water than traditional farming',
      'IoT monitoring enables remote management and data-driven decisions',
      'Addresses urban food security and sustainability challenges'
    ],
    images: [
      '/images/aeroponics-new-1.png',
      '/images/aeroponics-new-2.png',
      '/images/aeroponics-new-3.png',
      '/images/aeroponics-new-4.png',
      '/images/aeroponics-new-5.png',
      '/images/aeroponics-new-6.png',
      '/images/aeroponics-new-7.png',
      '/images/aeroponics-new-8.png',
      '/images/aeroponics-new-9.png',
      '/images/aeroponics-new-10.png',
      '/images/aeroponics-new-11.png'
    ],
    category: ['All', 'IoT', 'Agriculture', 'Sustainability']
  },
  {
    title: 'LocalBees',
    slug: 'localbees',
    subtitle: 'Platform to uplift local businesses across India — branding, marketplace pages, merchant onboarding.',
    role: 'Web Developer (Front-end & WordPress customizations)',
    tech: ['WordPress', 'UI', 'UX', 'SEO', 'Merchant Onboarding'],
    overview: 'LocalBees is a localized commerce platform created to support small entrepreneurs, artisans and street vendors — giving them an affordable, simple storefront to reach buyers and survive in the digital economy. My work focused on building a robust, user-friendly website with an emphasis on discoverability, clear merchant flows, and fast client handover.',
    responsibilities: [
      'Implemented responsive UI using Elementor + custom CSS for consistent branding',
      'Built merchant onboarding pages and product listing templates to simplify seller signup',
      'Integrated analytics & basic SEO best practices to improve organic reach',
      'Implemented usability improvements for product browsing and mobile checkout flows',
      'Wrote documentation & handover notes for non-technical admins'
    ],
    highlights: [
      'Helped align the UI with a "Vocal for Local" brand tone — trustable and easy for non-technical sellers',
      'Reduced merchant onboarding friction with a step-by-step flow and templated pages',
      'Provided SEO and analytics setup so the team could track growth and product discoverability'
    ],
    images: ['/images/localbees-1.png', '/images/localbees-2.png', '/images/localbees-3.png', '/images/localbees-4.png', '/images/localbees-5.png'],
    category: ['All', 'WordPress', 'E-commerce']
  },
  {
    title: 'IEEE TEMS',
    slug: 'ieee-tems',
    subtitle: 'Full redesign and rebuild of IEEE TEMS student society website — modern UI and governance.',
    role: 'Lead Webmaster & Front-end Developer',
    tech: ['WordPress', 'CMS', 'Accessibility', 'Community'],
    overview: 'As IEEE TEMS webmaster I led a redesign to modernize the society\'s web presence — making it easier for students to discover events, committees, call for volunteers, and resources. The goal was a professional, accessible, and maintainable website that future committees can update with minimal effort.',
    responsibilities: [
      'Complete site redesign focusing on clarity, information architecture and event discovery',
      'Built templates for events, news, member directories, and resource pages so non-technical admins can add content',
      'Implemented accessibility fixes (semantic markup, alt text, keyboard focus) and responsive design',
      'Created documentation and a handover playbook for future web coordinators'
    ],
    highlights: [
      'Received Volunteer Excellence Award recognition for the redesign and ongoing maintenance',
      'Improved usability for students, enabling easier volunteer signups and event RSVPs',
      'The design intentionally supports long-term maintainability by successive volunteer teams'
    ],
    images: ['/images/ieee-tems-1.png', '/images/ieee-tems-2.png', '/images/ieee-tems-3.png', '/images/ieee-tems-4.png'],
    liveUrl: 'https://edu.ieee.org/in-sairamtems/',
    category: ['All', 'WordPress', 'Community']
  },
  {
    title: 'MitrahOrganics.com',
    slug: 'mitrahorganics',
    subtitle: 'WordPress + WooCommerce store for organic products — custom sections & client handover.',
    role: 'Freelance Web Developer (end-to-end WordPress build)',
    tech: ['WordPress', 'WooCommerce', 'E-commerce', 'PHP'],
    overview: 'Built a clean, mobile-friendly e-commerce site for a local organic products brand. Focus was on quick delivery, intuitive product discovery, secure checkout, and an admin interface the client could manage without technical help.',
    responsibilities: [
      'Setup WordPress + WooCommerce with Astra starter templates and customized product pages',
      'Added custom sections using Elementor and small PHP tweaks for unique display needs',
      'Configured payment and shipping, tested on local/dev environment, and deployed to production',
      'Provided client training and handover documentation for product & order management'
    ],
    highlights: [
      'Delivered a fully-managed e-commerce store ready for sales and future expansion',
      'Client-friendly admin UI and documentation reduced support calls from the client after launch'
    ],
    images: ['/images/mitrahorganics-1.png', '/images/mitrahorganics-2.png', '/images/mitrahorganics-3.png', '/images/mitrahorganics-4.png'],
    liveUrl: 'https://mitrahorganics.com',
    category: ['All', 'WordPress', 'E-commerce']
  },
  {
    title: 'HomeKitchen',
    slug: 'homekitchen',
    subtitle: 'Tech support and front-end development for a home-cooked meal marketplace.',
    role: 'Front-end developer & technical support',
    tech: ['WordPress', 'Marketplace support', 'UI/UX'],
    overview: 'HomeKitchen is a platform connecting home-cooks with diners in Chennai. I provided technical support and front-end work to improve usability and speed the onboarding of home-makers and contributors.',
    responsibilities: [
      'Implemented front-end UI improvements for menu listings and contributor signups',
      'Assisted with plugin configuration to support orders and basic tracking',
      'Worked on performance improvements and responsive tweaks for mobile users'
    ],
    highlights: [
      'Improved UX for contributor onboarding to make signups faster and easier',
      'Enhanced mobile experience for customers ordering lunch/dinner on-the-go'
    ],
    images: ['/images/homekitchen-1.png'],
    category: ['All', 'WordPress', 'Marketplace']
  },
  {
    title: 'Rudhra Ingenious Solutions',
    slug: 'rudhra-ingenious',
    subtitle: 'Built service pages for Life Science, Manufacturing, Automotive, Data Analytics & App Modernization during internship.',
    role: 'Web Development Intern — WordPress specialist',
    tech: ['WordPress', 'Enterprise Pages', 'Content Structuring'],
    overview: 'During my Rudhra internship I contributed to several service pages and company verticals — designing content structure and templates for Life Science, Manufacturing, Automotive, Data Analytics, and Application Services & Modernization.',
    responsibilities: [
      'Built and optimized service pages focused on clarity and conversion',
      'Ensured consistent design language across verticals with reusable templates',
      'Performed plugin integrations and basic page speed optimizations'
    ],
    highlights: [
      'Enhanced the company\'s service presentation making it easier for visitors to understand offerings and contact sales',
      'Gained production-level experience in enterprise WordPress workflows'
    ],
    images: ['/images/rudhra-1.png', '/images/rudhra-2.png', '/images/rudhra-3.png', '/images/rudhra-4.png', '/images/rudhra-5.png'],
    liveUrl: 'https://rudhraingenioussolutions.com/life-science',
    category: ['All', 'WordPress', 'Enterprise']
  },
  {
    title: 'GemEnterprises',
    slug: 'gem-enterprises',
    subtitle: 'Built a B2B website for a coco peat & packaging firm — end-to-end from wireframe to delivery.',
    role: 'Solo developer — Full project delivery',
    tech: ['WordPress', 'B2B', 'SEO', 'UI'],
    overview: 'Following the school website, a well-wisher engaged me to build a website for their coco peat and packaging products. I designed and implemented the site end-to-end, working from initial wireframes to final delivery.',
    responsibilities: [
      'Defined site architecture and UX for a B2B audience with clear product catalogs and contact flows',
      'Implemented responsive product pages and SEO-friendly templates',
      'Performed content optimization and basic on-page SEO to improve discoverability'
    ],
    highlights: [
      'Delivered a professional B2B website that met client requirements and increased inbound inquiries',
      'Built the project solo, reinforcing independent delivery capability for business clients'
    ],
    images: ['/images/gem-enterprises-1.jpg'],
    category: ['All', 'WordPress', 'B2B']
  },
  {
    title: 'ImmanuelMHSS',
    slug: 'immanuel-mhss',
    subtitle: 'Led a school website project in 11th grade — team lead for end-to-end WordPress build.',
    role: 'Team lead & WordPress developer',
    tech: ['WordPress', 'Leadership', 'Education', 'Teamwork'],
    overview: 'In 11th grade I mastered WordPress and led a team to build the school website. This project taught me leadership, team coordination, and how to translate stakeholders\' needs into a working web product.',
    responsibilities: [
      'Led planning, delegation and execution of the school website project',
      'Built the site structure, key pages and templates, and coordinated content from teachers',
      'Ensured timely delivery and polished visual presentation'
    ],
    highlights: [
      'Project showcased to school management and served as a portfolio milestone',
      'Inspired me to start a freelance venture: The Web Sparrow'
    ],
    images: ['/images/immanuel-mhss-1.jpg', '/images/immanuel-mhss-2.jpg', '/images/immanuel-mhss-3.jpg', '/images/immanuel-mhss-4.jpg'],
    category: ['All', 'WordPress', 'Education']
  },
  {
    title: 'SBEngineeringTamilNadu',
    slug: 'sb-engineering',
    subtitle: 'First paid client for my startup — bespoke site with domain-specific research and UX.',
    role: 'Founder & lead developer (The Web Sparrow)',
    tech: ['WordPress', 'Startup', 'Client Delivery'],
    overview: 'After launching my startup, I secured my first client — a demanding domain that required research and careful UX decisions. I delivered a polished website that reflected the client\'s specialized business needs.',
    responsibilities: [
      'Conducted domain research to understand client needs and user expectations',
      'Built a tailored, responsive website that reflected the client\'s brand and services',
      'Delivered documentation and basic SEO setup'
    ],
    highlights: [
      'This project validated the startup model and demonstrated capability to handle client-specific challenges',
      'Served as a sales reference for the startup\'s next projects'
    ],
    images: ['/images/sb-engineering-1.jpg'],
    category: ['All', 'WordPress', 'Startup']
  }
];
