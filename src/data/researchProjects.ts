export interface ResearchProject {
  title: string;
  slug: string;
  summary: string;
  category: string;
  year: string;
  pdfUrl: string;
  coverImage: string;
  content: React.ReactNode;
}

export const innovationProjects = [
  {
    title: 'RAT-SAFE: Robotic Solution for Rat-Hole Mining',
    slug: 'ratsafe',
    category: 'Robotics & Safety',
    summary: 'Advanced robotic system for safe coal extraction using crawler bots and robotic arms, eliminating human entry in dangerous mining conditions.',
    year: '2025',
    pdfUrl: '/documents/ratsafe.pdf',
    coverImage: '/images/ratsafe-cover.png',
  },
  {
    title: 'TruthLens AI: Deepfake & Steganography Detector',
    slug: 'truthlens',
    category: 'AI Security',
    summary: 'AI-powered system using Vision Transformers for detecting hidden payloads and deepfake media manipulations.',
    year: '2025',
    pdfUrl: '/documents/truthlens-ai.pdf',
    coverImage: '/images/truthlens-cover.png',
  },
  {
    title: 'AquaVolt: Osmotic Power Generation',
    slug: 'aquavolt',
    category: 'Renewable Energy',
    summary: 'Harnessing estuaries for sustainable energy through advanced nanomaterials in osmotic power plants.',
    year: '2024',
    pdfUrl: '/documents/aqua-volt.pdf',
    coverImage: '/images/aquavolt-cover.png',
  },
  {
    title: 'BattleHeal: Advanced Battlefield Medical Support',
    slug: 'battleheal',
    category: 'Medical Robotics',
    summary: 'Revolutionizing battlefield medicine with AI-powered medical rover featuring integrated drone surveillance.',
    year: '2024',
    pdfUrl: '/documents/battleheal.pdf',
    coverImage: '/images/battleheal-cover.png',
  },
];
