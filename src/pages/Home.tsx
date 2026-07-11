import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/StatCounter';
import { ProjectCard } from '@/components/ProjectCard';
import { ResearchCard } from '@/components/ResearchCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CertificationSlider } from '@/components/CertificationSlider';
import { TypewriterText } from '@/components/TypewriterText';
import { InternshipNotification } from '@/components/InternshipNotification';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { innovationProjects } from '@/data/researchProjects';
import profileProfessional from '/images/profile-new.png';
import talenttrackHero from '@/assets/talenttrack-cover.png';
import aeroponicsMock from '@/assets/aeroponics-hero.jpeg';
import insightiqMock from '@/assets/insightiq-dashboard.png';

const featuredProjects = [
  {
    title: 'ScamShield',
    slug: 'scamshield',
    description: '🏆 IIT Delhi Finalist - Multi-layer AI pipeline detecting money mule accounts. FLSM Engine + Graph Intelligence + Ensemble ML on 400M+ transactions.',
    role: 'Data Scientist & ML Engineer — Fraud Analytics',
    tech: ['LightGBM', 'XGBoost', 'NetworkX', 'SHAP'],
    highlights: [
      '🏆 IIT Delhi Finalist (Top 12/87 teams)',
      'AUC: 0.9424, F1: 0.6816, 400M+ transactions',
      'FLSM: 5-state fraud lifecycle + Graph: 2.8M+ edges',
    ],
    image: '/images/scamshield/thumbnail.png',
    category: ['AI', 'FinTech'],
  },
  {
    title: 'Talent Track',
    slug: 'talenttrack',
    description: 'AI-powered fitness analysis platform that turns any smartphone camera into a professional-grade workout evaluation system.',
    role: 'Solo Developer — Built in 10.5 days using Kiro AI',
    tech: ['MediaPipe', 'React', 'AI Pose Detection', 'Computer Vision'],
    highlights: [
      'Real-time AI pose detection (33 body landmarks)',
      'Ghost Mode & live form scoring (0-100)',
      'Privacy-first - all processing in browser',
    ],
    image: talenttrackHero,
    category: ['AI', 'Web'],
  },
  {
    title: 'INSIGHT IQ',
    slug: 'insightiq',
    description: 'Strategic intelligence platform providing real-time market intelligence across 10 technology domains.',
    role: 'Full-stack Developer — Platform architecture & AI insights',
    tech: ['React', 'FastAPI', 'Python', 'Recharts', 'TextBlob'],
    highlights: [
      '10 technology domains with 50+ competitors',
      'AI-powered sentiment analysis',
      '12+ interactive charts with real-time analytics',
    ],
    image: insightiqMock,
    category: ['AI', 'Web'],
  },
  {
    title: 'NeuroVision',
    slug: 'neurovision',
    description: 'AI-Powered Clinical Decision Support System for Early Alzheimer\'s Disease Detection using multi-modal biomarker integration.',
    role: 'AI/ML Engineer — Healthcare Tech Developer',
    tech: ['Python', 'PyTorch', 'Medical AI', 'Computer Vision'],
    highlights: [
      'Early Alzheimer\'s detection with 88% accuracy',
      'Multi-modal: MRI, biomarkers, handwriting analysis',
      'Explainable AI for clinical transparency',
    ],
    image: '/images/neurovision/thumbnail.jpg',
    category: ['AI', 'Healthcare'],
  },
  {
    title: 'Vertical Tower Aeroponics',
    slug: 'aeroponics',
    description: 'Innovative vertical farming solution using aeroponics for sustainable urban agriculture.',
    role: 'Lead Researcher — IoT integration & system design',
    tech: ['IoT', 'Arduino', 'Sensors', 'Aeroponics'],
    highlights: [
      'Vertical tower design for space optimization',
      'IoT-enabled monitoring and control',
      'Sustainable agriculture solution',
    ],
    image: aeroponicsMock,
    category: ['Research', 'IoT'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Internship Notification Toast */}
      <InternshipNotification />

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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold mb-4 lg:mb-6 leading-tight min-h-[3rem] sm:min-h-[4rem]">
                <TypewriterText
                  texts={['Web Developer', 'AI Engineer', 'Researcher']}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={1500}
                />
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Passionate about crafting scalable digital systems and AI-powered solutions. Currently interning at <span className="text-accent font-semibold">1M1B</span>,
                focusing on cloud-native development and applied machine learning. Experienced in modern web stacks and AI frameworks with a track record of 
                winning competitions and securing research funding for innovative projects.
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
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
              <StatCounter
                end={25}
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
                end={4}
                label="Internships Completed"
                description="Professional internships and work experience"
              />
              <StatCounter
                end={10}
                suffix="+"
                label="Competition Wins"
                description="First place wins in hackathons and competitions"
              />
              <StatCounter
                end={8}
                label="Publications"
                description="Research papers and technical publications"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievement Highlight Section */}
      <section className="py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8">
              <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/20 rounded-full mb-3">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Recent Achievement</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Latest Recognition</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={100}>
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                {/* Card with elegant gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-[300px,1fr] gap-6">
                    {/* Image Section */}
                    <div className="relative h-full min-h-[200px] md:min-h-0">
                      <img 
                        src="/images/events/1782191504408.jpg?v=2" 
                        alt="STATATHON 2025 Team RenoX"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:py-8 md:pr-8 md:pl-0">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs font-semibold rounded-full border border-gray-500/30">
                          RUNNER-UP
                        </span>
                        <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full border border-accent/30">
                          NATIONAL LEVEL
                        </span>
                        <span className="text-sm text-muted-foreground">June 2026</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">
                        STATATHON 2025 - National Hackathon
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                        Ministry of Statistics & Programme Implementation (MoSPI) & Ministry of Education (MoE), Govt. of India
                      </p>

                      {/* Stats Grid - Compact */}
                      <div className="grid grid-cols-4 gap-3 mb-4 p-4 bg-muted/30 rounded-lg">
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-accent">5,300</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground">Teams</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-accent">Top 25</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground">Finalists</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-accent">0.5%</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground">Selected</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-accent">₹50K</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground">Prize</div>
                        </div>
                      </div>

                      {/* Description - Compact */}
                      <p className="text-sm text-foreground/80 mb-3 leading-relaxed">
                        Led research and case study analysis for <span className="font-semibold text-accent">Team RenoX</span>, 
                        developing the statistical formulation that became the turning point in our solution.
                      </p>

                      {/* Action Button */}
                      <Link to="/events">
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                        >
                          View All Achievements
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-8 sm:py-12">
        <ScrollReveal animation="fade-up">
          <CertificationSlider />
        </ScrollReveal>
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
