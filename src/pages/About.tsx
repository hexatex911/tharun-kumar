import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code, Brain, Database, Wrench, GraduationCap, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import profilePersonal from '/images/profile-new.png';

const skills = {
  Frontend: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  ],
  Backend: [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  ],
  'AI & CV': [
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'MediaPipe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'LLaMA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Computer Vision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  ],
  Tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Netlify', logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
  ],
};

const certifications = [
  'Infosys Springboard AI Virtual Internship (Shortlisted)',
  'AI, Business, and the Future of Work (Lund University, Coursera)',
  'WordPress Development (LinkedIn Learning)',
  'Generative AI Learning Paths (Microsoft LinkedIn)',
  '25+ Infosys Springboard Certifications',
  'IEEE TEMS Volunteer Excellence Award',
  'Multiple competition certificates and achievements',
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">About</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Building products, publishing research, and teaching the next generation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Current Focus with Image */}
            <Card className="p-8 hover-lift mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Brain className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">Current Focus</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a pre-final year student pursuing Computer Science and Business Systems. 
                    I build cross-platform apps (Flutter), web apps (React, Next.js), and applied AI 
                    systems (MediaPipe/OpenCV, LLMs). Recent achievements include winning 1st place at multiple competitions 
                    (Gojan Business Pitch, IET App Development, AIRO 3.0), securing 2nd place at Steganos'25 with Talent Track, 
                    and receiving IEEE SIGHT funding for sustainable agriculture research. I publish research and collaborate 
                    with IEEE and college research groups.
                  </p>
                </div>
                <div className="order-first md:order-last flex items-center justify-center">
                  <img
                    src={profilePersonal}
                    alt="Tharun Kumar C"
                    className="w-64 h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Leadership & Achievements */}
            <Card className="p-8 hover-lift mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">Leadership & Achievements</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Multiple 1st place wins: Gojan Business Pitch (InSight IQ), IET App Development, AIRO 3.0 Web Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>2nd place at Steganos'25 Idea Pitching with Talent Track AI fitness platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Runner-up at UNSCRIPTED'25 Paper Presentation (EEE Department)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>IEEE TEMS Volunteer Excellence Award recipient and Webmaster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Winner of Mine Your Ideas competition with RATSAFE project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>School Pupil Leader at Immanuel MHSS and Youth Red Cross (YRC) member</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-3">Teaching & Community</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I run online tutoring sessions, teaching HTML/CSS/WordPress and practical 
                      business-analytics workshops to learners in India and abroad. I also host the podcast 
                      "Just Relax Machi" where I discuss tech, career, and life with fellow developers and students.
                      Recently presented at multiple competitions including technical paper presentations and business pitches.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-3">Background</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Started with HTML, CSS and WordPress in school, delivered multiple school projects and 
                      developed an early love for building web products — a foundation that sparked the journey 
                      to full-stack applications and AI systems.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => {
                const icons = {
                  Frontend: Code,
                  Backend: Database,
                  'AI & CV': Brain,
                  Tools: Wrench,
                };
                const Icon = icons[category as keyof typeof icons];
                
                return (
                  <Card key={category} className="p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-heading font-bold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill) => (
                        <div 
                          key={skill.name} 
                          className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg hover:bg-accent/10 transition-colors border border-border"
                          title={skill.name}
                        >
                          <img 
                            src={skill.logo} 
                            alt={`${skill.name} logo`}
                            className="h-5 w-5 object-contain"
                            onError={(e) => {
                              // Fallback if image fails to load
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Education & Certifications
            </h2>
            
            <Card className="p-8 mb-6 hover-lift">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    B.Tech — Computer Science & Business Systems
                  </h3>
                  <p className="text-muted-foreground">Sri Sairam Engineering College</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Want to work together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm open to internships, freelance projects, and research collaborations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
