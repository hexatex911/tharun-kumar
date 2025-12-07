import { useState, useRef } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { WordPressProjectCard } from '@/components/WordPressProjectCard';
import { WordPressProjectModal } from '@/components/WordPressProjectModal';
import { Button } from '@/components/ui/button';
import { wordpressProjects, WordPressProject } from '@/data/wordpressProjects';
import talenttrackMock from '@/assets/talenttrack-cover.png';
import venmathiMock from '@/assets/venmathi-indicraft-home.png';
import indicraftMock from '@/assets/indicraft-hero.png';
import aeroponicsMock from '@/assets/aeroponics-hero.jpeg';
import insightiqMock from '@/assets/insightiq-dashboard.png';

const projects = [
  {
    title: 'Talent Track',
    slug: 'talenttrack',
    description: 'AI-powered fitness analysis platform that turns any smartphone camera into a professional-grade workout evaluation system with no gym, no wearables, and no subscriptions.',
    role: 'Solo Developer — Built in 10.5 days using Kiro AI',
    tech: ['MediaPipe', 'React', 'AI Pose Detection', 'Computer Vision', 'Browser-based ML'],
    highlights: [
      'Real-time AI pose detection using MediaPipe (33 body landmarks)',
      'Rep counting, joint-angle tracking & live form scoring (0–100)',
      'Ghost Mode – train against a perfect AI skeleton',
      'Evaluator Test Mode – instant performance analysis without video upload',
      'FitFranken AI chatbot – explains performance & gives coaching tips',
      'Badge & streak system for motivation and habit building',
      'Full privacy-first design – all processing happens locally in the browser',
      'Built in just 10.5 days, saving over 62% development time with spec-driven dev',
    ],
    image: talenttrackMock,
    liveUrl: 'https://talent-track-cyber.vercel.app',
    category: ['All', 'AI', 'Web', 'Fitness'],
  },
  {
    title: 'JARVIS AI Assistant',
    slug: 'jarvis',
    description: 'JARVIS-inspired AI agent built for Google Cloud Run Hackathon. An AI-powered offline conversational agent that switches seamlessly to online mode when connected.',
    role: 'Solo Developer — Google Cloud Run Hackathon Project',
    tech: ['Google Cloud Run', 'Gmail API', 'Google Meet', 'Google Docs API', 'Google Vision API', 'Python', 'AI/ML'],
    highlights: [
      'Chat naturally with users (voice & text modes)',
      'Send emails via Gmail API',
      'Schedule meetings using Google Meet',
      'Read and summarize Google Docs',
      'Use Google Vision API for image understanding',
      'Manage a contact section for quick communication',
      'Handle file attachments effortlessly',
      'Works offline with local intelligence, supercharged when online',
    ],
    image: '/images/jarvis-1.png',
    videoUrl: 'https://www.youtube.com/watch?v=2jOhWb1g8oQ',
    category: ['All', 'AI', 'Cloud', 'Hackathon'],
  },
  {
    title: 'Vertical Tower Aeroponics',
    slug: 'aeroponics',
    description: 'Innovative vertical farming solution using aeroponics technology to grow plants without soil, maximizing space efficiency and resource conservation for sustainable urban agriculture.',
    role: 'Lead Researcher — IoT integration & system design',
    tech: ['IoT', 'Arduino', 'Sensors', 'Aeroponics', 'Cloud Platform', 'Sustainable Agriculture'],
    highlights: [
      'Vertical tower design for space optimization',
      'Automated nutrient delivery system',
      'IoT-enabled monitoring and control',
      'Water-efficient aeroponic misting',
      'Sustainable urban agriculture solution',
      'Addresses food security challenges in urban environments',
    ],
    image: aeroponicsMock,
    category: ['All', 'Research', 'IoT', 'Agriculture'],
  },
  {
    title: 'INSIGHT IQ',
    slug: 'insightiq',
    description: 'Strategic intelligence platform providing real-time market intelligence across 10 technology domains.',
    role: 'Full-stack Developer — Platform architecture, analytics dashboard, AI-powered insights',
    tech: ['React', 'FastAPI', 'Python', 'Recharts', 'TextBlob', 'PostgreSQL'],
    highlights: [
      '10 technology domains with 50+ competitor tracking',
      'AI-powered sentiment analysis & trend detection',
      '12+ interactive charts with real-time analytics',
    ],
    image: insightiqMock,
    category: ['All', 'AI', 'Web'],
  },
  {
    title: 'Venmathi',
    slug: 'venmathi',
    description: 'Fine-tuned LLaMA assistant delivering Tanglish responses for customer support.',
    role: 'Full pipeline — dataset generation, fine-tuning, quantization, Ollama hosting',
    tech: ['LLaMA 3', 'Python', 'Ollama', 'React', 'Netlify'],
    highlights: [
      'Custom Tanglish (Tamil + English) dataset generation',
      'Model quantization for edge deployment',
      'Integrated into Indicraft as local-language helper',
    ],
    image: venmathiMock,
    category: ['All', 'AI', 'Web'],
  },
  {
    title: 'Indicraft',
    slug: 'indicraft',
    description: 'Marketplace linking Indian artisans with global diaspora, verified products & standardized India Post shipping.',
    role: 'Platform contributor — frontend, onboarding flows, recommendation prototype',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'India Post API'],
    highlights: [
      'Verified artisan onboarding & product verification',
      'AI recommendation engine for festival and region-based suggestions',
      'Fair-pay model for artisans, SDG-aligned (17, 8, 12)',
    ],
    image: indicraftMock,
    category: ['All', 'Web', 'Freelance'],
  },
];

const filters = ['All', 'AI', 'Web', 'Research', 'Freelance', 'IoT', 'Cloud', 'Fitness', 'Agriculture', 'Hackathon', 'WordPress'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedWordPressProject, setSelectedWordPressProject] = useState<WordPressProject | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProjects = projects.filter(project => 
    project.category.includes(activeFilter)
  );

  const filteredWordPressProjects = activeFilter === 'All' || activeFilter === 'WordPress'
    ? wordpressProjects
    : [];

  const handleWordPressProjectClick = (project: WordPressProject, slug: string) => {
    setSelectedWordPressProject(project);
  };

  const handleWordPressProjectKeyDown = (e: React.KeyboardEvent, project: WordPressProject, slug: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleWordPressProjectClick(project, slug);
    }
  };

  const handleCloseModal = () => {
    const slug = selectedWordPressProject?.slug;
    setSelectedWordPressProject(null);
    // Return focus handled by modal component
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Selected works — clickable case studies that show problem, approach, architecture, and measurable outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="container mx-auto px-4">
          {/* Main Projects */}
          {filteredProjects.length > 0 && (
            <>
              {activeFilter !== 'WordPress' && (
                <h2 className="text-2xl font-heading font-bold mb-6">
                  {activeFilter === 'All' ? 'Featured Projects' : `${activeFilter} Projects`}
                </h2>
              )}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {filteredProjects.map((project, idx) => (
                  <div 
                    key={project.slug} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* WordPress Projects */}
          {filteredWordPressProjects.length > 0 && (
            <>
              {activeFilter === 'All' && (
                <h2 className="text-2xl font-heading font-bold mb-6">
                  WordPress Projects
                </h2>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredWordPressProjects.map((project, idx) => (
                  <div 
                    key={project.slug}
                    ref={(el) => (cardRefs.current[project.slug] = el)}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <WordPressProjectCard
                      project={project}
                      onClick={() => handleWordPressProjectClick(project, project.slug)}
                      onKeyDown={(e) => handleWordPressProjectKeyDown(e, project, project.slug)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {filteredProjects.length === 0 && filteredWordPressProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WordPress Project Modal */}
      {selectedWordPressProject && (
        <WordPressProjectModal
          project={selectedWordPressProject}
          onClose={handleCloseModal}
          returnFocusRef={cardRefs.current[selectedWordPressProject.slug]}
        />
      )}
    </div>
  );
}
