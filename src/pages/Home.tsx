import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/StatCounter';
import { ProjectCard } from '@/components/ProjectCard';
import { ResearchCard } from '@/components/ResearchCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { innovationProjects } from '@/data/researchProjects';
import profileProfessional from '@/assets/profile-professional.png';
import talenttrackHero from '@/assets/talenttrack-cover.png';
import venmathiMock from '@/assets/venmathi-indicraft-home.png';
import indicraftMock from '@/assets/indicraft-hero.png';
import aeroponicsMock from '@/assets/aeroponics-hero.jpeg';

const featuredProjects = [
  {
    title: 'TalentTrack',
    slug: 'talenttrack',
    description: 'Democratizing athlete evaluation using only a smartphone camera.',
    role: 'Technical Lead — Flutter + CV pipeline owner',
    tech: ['Flutter', 'MediaPipe', 'OpenCV', 'Firebase', 'Node.js'],
    highlights: [
      'On-device pose estimation for privacy & speed',
      'Lighting/framing checks & anomaly detection',
      'Para-athlete adaptive protocols & gamified progression',
    ],
    image: talenttrackHero,
    category: ['AI', 'Mobile'],
  },
  {
    title: 'Venmathi',
    slug: 'venmathi',
    description: 'Fine-tuned LLaMA assistant delivering Tanglish responses for customer support.',
    role: 'Full pipeline — dataset generation, fine-tuning, quantization',
    tech: ['LLaMA 3', 'Python', 'Ollama', 'React', 'Netlify'],
    highlights: [
      'Custom Tanglish dataset generation',
      'Quantized model for edge deployment',
      'Integrated into Indicraft marketplace',
    ],
    image: venmathiMock,
    category: ['AI', 'Web'],
  },
  {
    title: 'Indicraft',
    slug: 'indicraft',
    description: 'Marketplace linking Indian artisans with global diaspora, verified products & India Post shipping.',
    role: 'Platform contributor — frontend, onboarding flows',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'India Post API'],
    highlights: [
      'Verified artisan onboarding system',
      'AI recommendation engine for festivals',
      'Fair-pay model for artisans (SDG 8, 12, 17)',
    ],
    image: indicraftMock,
    category: ['Web', 'E-commerce'],
  },
  {
    title: 'Vertical Tower Farming',
    slug: 'aeroponics',
    description: 'Patent-published vertical aeroponics system with IoT monitoring.',
    role: 'Lead Researcher — IoT integration & patent filing',
    tech: ['IoT', 'Arduino', 'Sensors', 'Cloud Platform'],
    highlights: [
      'Patent published',
      'IEEE SIGHT funding: $3,300',
      'Sustainable agriculture solution',
    ],
    image: aeroponicsMock,
    category: ['Research', 'IoT'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 lg:mb-6 leading-tight">
                Tharun Kumar C
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold mb-4 lg:mb-6 leading-tight">
                <span className="text-gradient">Web Developer | AI Engineer | Researcher</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Passionate about crafting scalable digital systems. Currently interning at <span className="text-accent font-semibold">Infosys Springboard</span>, 
                focusing on cloud-native development and applied machine learning.
                Experienced in modern web stacks including React, Next.js, and WordPress, with strong expertise in AI frameworks like TensorFlow, PyTorch, and LangChain.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 justify-center lg:justify-start">
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto shadow-accent hover:shadow-xl transition-shadow">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Available for internships, freelance projects, and research collaborations.
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-fade-in lg:animate-scale-in mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-shadow duration-500 max-w-md mx-auto">
                <img
                  src={profileProfessional}
                  alt="Tharun Kumar C - Professional Portfolio Photo"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StatCounter
                end={19}
                suffix="+"
                label="Certifications"
                description="Infosys Springboard certifications & professional courses"
              />
              <StatCounter
                end={1}
                label="Patent Published"
                description="Vertical Tower Farming using Aeroponics"
              />
              <StatCounter
                end={3300}
                suffix=" $"
                label="IEEE Funding"
                description="IEEE SIGHT funding for aeroponics research"
              />
              <StatCounter
                end={1200}
                suffix="+"
                label="LinkedIn Followers"
                description="Growing professional network"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="pt-4 pb-12 sm:pb-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 sm:mb-4">Featured Projects</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Selected works showcasing problem-solving, technical depth, and measurable impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal 
                key={project.slug} 
                animation={idx % 2 === 0 ? 'slide-right' : 'slide-left'}
                delay={idx * 100}
              >
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <Link to="/projects">
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 sm:mb-4">Innovation & Research</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Presentation slides showcasing innovative solutions across robotics, AI security, and renewable energy
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12">
            {innovationProjects.map((project, idx) => {
              // Custom positioning for each card
              const objectPositions: Record<string, string> = {
                'ratsafe': 'object-[25%_top]',
                'truthlens': 'object-center',
                'aquavolt': 'object-left-top',
                'battleheal': 'object-[40%_top]',
              };
              
              return (
                <ScrollReveal 
                  key={project.slug} 
                  animation="fade-up"
                  delay={idx * 100}
                >
                  <ResearchCard 
                    title={project.title}
                    slug={project.slug}
                    category={project.category}
                    summary={project.summary}
                    year={project.year}
                    pdfUrl={project.pdfUrl}
                    coverImage={project.coverImage}
                    objectPosition={objectPositions[project.slug]}
                  />
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <Link to="/research">
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  View All Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <ScrollReveal animation="scale-in">
            <div className="max-w-3xl text-center p-6 sm:p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl hover:shadow-accent/30 transition-shadow duration-500">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                Open for internships, freelance opportunities, and research collaborations
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
