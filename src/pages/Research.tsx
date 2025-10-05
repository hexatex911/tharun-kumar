import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Award, ExternalLink, Lightbulb, Trophy } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { ResearchPDFDialog } from '@/components/ResearchPDFDialog';

const publications = [
  {
    title: 'Optimizing the Quantum Circuit of Quantum K-Nearest Neighbors (QKNN) Using Quantum Natural Gradient Descent',
    conference: 'ICCTDC 2025',
    summary: 'Research on optimizing quantum machine learning circuits using gradient descent techniques.',
    year: '2025',
    pdfUrl: '/documents/qknn-optimization.pdf',
    content: (
      <>
        <h3>Overview</h3>
        <p>This research presents a novel approach to optimizing Quantum K-Nearest Neighbors (QKNN) circuits using Hybrid Gradient Descent and Golden Eagle Optimization Algorithm.</p>
        
        <h3>Key Contributions</h3>
        <ul>
          <li>Fusion of quantum computing with machine learning for efficient data processing</li>
          <li>Hybrid optimization framework combining gradient descent with nature-inspired algorithms</li>
          <li>Enhanced performance on Noisy Intermediate-Scale Quantum (NISQ) devices</li>
          <li>Reduced circuit complexity while maintaining classification accuracy</li>
        </ul>

        <h3>Methodology</h3>
        <p>The approach combines quantum data encoding, parameterized quantum circuits, and quantum distance calculation to achieve superior classification performance.</p>

        <h3>Results</h3>
        <p>Demonstrated significant improvements in classification error reduction, circuit efficiency, and robustness compared to traditional optimization methods.</p>
      </>
    ),
  },
  {
    title: 'Optimizing QSVM Circuits using QNGD & WOA',
    conference: 'INCET 2025',
    summary: 'Novel approach to quantum support vector machine optimization combining gradient descent and whale optimization.',
    year: '2025',
    pdfUrl: '/documents/qsvm-optimization.pdf',
    content: (
      <>
        <h3>Overview</h3>
        <p>This paper introduces a hybrid optimization framework for Quantum Support Vector Machine (QSVM) circuits using Quantum Natural Gradient Descent (QNGD) and Whale Optimization Algorithm (WOA).</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li>96.8% accuracy achieved in 38 iterations</li>
          <li>Reduced to just 44 quantum gates with fidelity of 0.985</li>
          <li>Combined QNGD's precision with WOA's global search capabilities</li>
          <li>Superior performance in noisy quantum environments</li>
        </ul>

        <h3>Innovation</h3>
        <p>The hybrid method addresses vanishing gradients and sensitivity issues in quantum models by merging local optimization precision with global exploration.</p>

        <h3>Impact</h3>
        <p>This work makes QSVM optimization more practical for real-world quantum applications across industries.</p>
      </>
    ),
  },
  {
    title: 'Hybrid K-Means and Firefly Algorithm for Healthcare',
    conference: 'ICoACT 2025',
    summary: 'Dynamic load balancing approach for fog computing in postoperative healthcare monitoring systems.',
    year: '2025',
    pdfUrl: '/documents/fog-computing-healthcare.pdf',
    content: (
      <>
        <h3>Overview</h3>
        <p>This research presents a hybrid load balancing approach for fog computing systems in postoperative healthcare, combining K-Means clustering with the Firefly Algorithm.</p>
        
        <h3>Problem Addressed</h3>
        <ul>
          <li>High latency in traditional cloud systems for real-time patient monitoring</li>
          <li>Uneven workload distribution in fog computing environments</li>
          <li>Resource underutilization and inefficiencies in healthcare systems</li>
        </ul>

        <h3>Solution</h3>
        <p>K-Means groups tasks based on computational needs, while the Firefly Algorithm dynamically optimizes task scheduling for improved response time and energy efficiency.</p>

        <h3>Benefits</h3>
        <ul>
          <li>Reduced response time for critical healthcare monitoring</li>
          <li>Improved energy efficiency and resource utilization</li>
          <li>Enhanced performance for postoperative patient care</li>
        </ul>
      </>
    ),
  },
  {
    title: 'HOFL-CS-FDA for Cloud Load Balancing',
    conference: 'ACOIT 2024',
    summary: 'Hybrid optimization framework for efficient cloud resource allocation and load distribution.',
    year: '2024',
  },
  {
    title: 'Hybrid Fuzzy C-Means + ACO for FANETs',
    conference: 'ICACRS 2024',
    summary: 'Clustering algorithm combining fuzzy logic and ant colony optimization for flying ad-hoc networks.',
    year: '2024',
  },
];

const innovationProjects = [
  {
    title: 'RAT-SAFE: Robotic Solution for Rat-Hole Mining',
    category: 'Robotics & Safety',
    summary: 'Advanced robotic system for safe coal extraction using crawler bots and robotic arms, eliminating human entry in dangerous mining conditions.',
    year: '2024',
    pdfUrl: '/documents/ratsafe.pdf',
    content: (
      <>
        <h3>Problem</h3>
        <p>Rat-hole mining continues to claim lives due to unstable soil, lack of ventilation, waterlogging, and toxic gases. Recent incidents include 15 miners trapped in Meghalaya (2018) and 6 miners killed in a collapse (2021).</p>
        
        <h3>Solution</h3>
        <ul>
          <li>Crawler bots with LiDAR/radar for remote sensing and tunnel mapping</li>
          <li>Robotic arms for drilling and coal extraction</li>
          <li>Gas monitoring and soil stability analysis</li>
          <li>No human entry required in dangerous zones</li>
        </ul>

        <h3>Technology</h3>
        <p>The system uses Jetson Nano, 4-DOF robotic arm, 9-axis gyro sensor, and Rplidar A1 Radar for autonomous operation with BIS compliance.</p>

        <h3>Impact</h3>
        <p>Inspired by Bandicoot robot's success in manual scavenging elimination, RAT-SAFE adapts proven technologies for mining safety.</p>
      </>
    ),
  },
  {
    title: 'TruthLens AI: Deepfake & Steganography Detector',
    category: 'AI Security',
    summary: 'AI-powered system using Vision Transformers for detecting hidden payloads and deepfake media manipulations.',
    year: '2024',
    pdfUrl: '/documents/truthlens-ai.pdf',
    content: (
      <>
        <h3>Challenge</h3>
        <p>Deepfake videos increased by over 900% in three years, with 96% being malicious. Steganography is increasingly used to hide malware and stolen data, bypassing traditional detection.</p>
        
        <h3>Solution</h3>
        <ul>
          <li>Vision Transformers for advanced steganography detection</li>
          <li>Multi-modal deepfake detection for video authenticity verification</li>
          <li>Real-time analysis for email gateways, media platforms, and enterprise security</li>
          <li>Continuous model retraining to adapt to new attack methods</li>
        </ul>

        <h3>Features</h3>
        <ul>
          <li>Scans images, videos, and audio for hidden payloads</li>
          <li>Detects facial artifacts and audio-visual mismatches</li>
          <li>Identifies temporal inconsistencies in media</li>
        </ul>

        <h3>SDG Goals</h3>
        <p>Supports SDG 16 (Peace, Justice, and Strong Institutions), SDG 9 (Industry, Innovation), and SDG 4 (Quality Education).</p>
      </>
    ),
  },
  {
    title: 'AquaVolt: Osmotic Power Generation',
    category: 'Renewable Energy',
    summary: 'Harnessing estuaries for sustainable energy through advanced nanomaterials in osmotic power plants.',
    year: '2024',
    pdfUrl: '/documents/aqua-volt.pdf',
    content: (
      <>
        <h3>Objective</h3>
        <p>Pioneer the efficient utilization of osmotic power as a renewable energy source by leveraging estuaries and river systems with advanced nanotechnology and AI.</p>
        
        <h3>Innovation</h3>
        <ul>
          <li>Replaces traditional semi-permeable membranes with advanced nanomaterials</li>
          <li>Superior selectivity and permeability for optimized osmotic pressure</li>
          <li>Precise membrane structure control and improved ion transport</li>
        </ul>

        <h3>Impact</h3>
        <p>Estimated 1.1 billion people worldwide lack electricity access. AquaVolt provides sustainable electricity to underserved communities near water bodies, improving quality of life and fostering economic development.</p>

        <h3>SDG Goals</h3>
        <ul>
          <li>SDG 7: Affordable and Clean Energy</li>
          <li>SDG 6: Clean Water and Sanitation</li>
          <li>SDG 8: Decent Work and Economic Growth</li>
        </ul>
      </>
    ),
  },
  {
    title: 'BattleHeal: Advanced Battlefield Medical Support',
    category: 'Medical Robotics',
    summary: 'Revolutionizing battlefield medicine with AI-powered medical rover featuring integrated drone surveillance.',
    year: '2024',
    pdfUrl: '/documents/battleheal.pdf',
    content: (
      <>
        <h3>System Overview</h3>
        <p>Advanced battlefield medical rover combining robust ballistic-resistant materials with AI diagnostics for real-time injury assessment and medical intervention.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Adaptive structure with ballistic-resistant carbon fiber composites</li>
          <li>Real-time adaptive camouflage system for terrain blending</li>
          <li>Integrated drone for diagnosis and situational awareness</li>
          <li>Advanced AI for rapid injury assessment</li>
        </ul>

        <h3>Capabilities</h3>
        <ul>
          <li>Real-time injury assessments through AI diagnostics</li>
          <li>Drone-enhanced surveillance for enhanced security</li>
          <li>Secure communication integration</li>
          <li>User-friendly interfaces for field operations</li>
        </ul>

        <h3>Impact</h3>
        <p>Transforms battlefield healthcare by enabling swift and precise medical interventions in dynamic combat scenarios.</p>
      </>
    ),
  },
];

const standardsProjects = [
  {
    title: 'Protective Helmet Standards for Two-Wheeler Riders',
    event: 'Standard Spectrum 4.0',
    summary: 'Comprehensive analysis of helmet safety standards (DOT, ECE 22.06, ISI, SHARP) with smart features integration.',
    year: '2024',
    pdfUrl: '/documents/helmet-standards.pdf',
    content: (
      <>
        <h3>Importance</h3>
        <p>Helmets reduce head injury risk by up to 70% and death risk by 40%. Despite proven effectiveness, many riders use substandard helmets due to discomfort and lack of features.</p>
        
        <h3>Standards Covered</h3>
        <ul>
          <li>DOT (Department of Transportation - USA)</li>
          <li>ECE 22.06 (Economic Commission for Europe - EU & 50+ countries)</li>
          <li>ISI (Indian Standards Institute - India)</li>
          <li>SHARP Rating (UK)</li>
        </ul>

        <h3>Innovation Focus</h3>
        <ul>
          <li>Integrating modern safety features like real-time crash alerts</li>
          <li>Noise reduction and integrated communication</li>
          <li>Improved comfort with better materials and ventilation</li>
          <li>Ensuring affordability and global standards compliance</li>
        </ul>

        <h3>Objective</h3>
        <p>Innovate helmet technology while ensuring maximum protection through certified standards and rigorous testing.</p>
      </>
    ),
  },
  {
    title: 'UPS Systems: Powering Safety & Reliability',
    event: 'Standard Spectrum 5.0',
    summary: 'Addressing UPS failures and fake certifications through BIS compliance and safety standards.',
    year: '2024',
    pdfUrl: '/documents/ups-systems.pdf',
    content: (
      <>
        <h3>Problem</h3>
        <p>UPS failures result in devastating fires, battery explosions, and sudden blackouts. Recent incidents across UP, Kerala, Delhi, and Coimbatore have caused property damage and loss of lives.</p>
        
        <h3>Common Malpractices</h3>
        <ul>
          <li>Manufacturers selling UPS with fake or expired BIS certifications</li>
          <li>Use of low-grade, non-compliant batteries that overheat and explode</li>
          <li>Poor quality control and testing</li>
        </ul>

        <h3>Why Standards Matter</h3>
        <ul>
          <li>Prevents fire accidents due to overheating or faulty wiring</li>
          <li>Ensures battery safety and prevents explosions or leakages</li>
          <li>Protects critical equipment and human lives</li>
          <li>Maintains essential services reliability</li>
        </ul>

        <h3>BIS-Friendly Design</h3>
        <p>Proposed new UPS design ensuring proper BIS compliance, quality components, and comprehensive safety testing.</p>
      </>
    ),
  },
];

export default function Research() {
  const [searchParams] = useSearchParams();
  const [openDialog, setOpenDialog] = useState<{
    open: boolean;
    title: string;
    pdfUrl: string;
    content: React.ReactNode;
  }>({
    open: false,
    title: '',
    pdfUrl: '',
    content: null,
  });

  useEffect(() => {
    const projectSlug = searchParams.get('project');
    if (projectSlug) {
      // Find the project in innovation or standards projects
      const allProjects = [...innovationProjects, ...standardsProjects];
      const project = allProjects.find(p => 
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(projectSlug)
      );
      
      if (project) {
        handleViewMore(project.title, project.pdfUrl, project.content);
      }
    }
  }, [searchParams]);

  const handleViewMore = (title: string, pdfUrl: string, content: React.ReactNode) => {
    setOpenDialog({
      open: true,
      title,
      pdfUrl,
      content,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Research & Patents</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Applied research at the intersection of optimization, quantum ML, and sustainable agtech
            </p>
          </div>
        </div>
      </section>

      {/* Patent */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Patent</h2>
            <Card className="p-8 hover-lift border-accent/50">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-accent/10 flex-shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        Vertical Tower Farming using Aeroponics
                      </h3>
                      <Badge className="mb-2">Patent Published</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A patent-published vertical aeroponics system with IoT monitoring for sustainable 
                    urban agriculture. The system enables efficient plant growth in vertical towers 
                    with automated nutrient delivery, climate control, and real-time monitoring.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      IEEE SIGHT Funding: $3,300
                    </span>
                  </div>
                  <Link to="/projects/aeroponics">
                    <Button variant="outline">
                      View Full Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, idx) => (
                <Card 
                  key={idx} 
                  className="p-4 sm:p-6 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <h3 className="text-base sm:text-lg font-heading font-bold break-words">
                          {pub.title}
                        </h3>
                        <Badge variant="outline" className="self-start sm:self-auto flex-shrink-0">{pub.year}</Badge>
                      </div>
                      <p className="text-sm text-accent mb-2 break-words">{pub.conference}</p>
                      <p className="text-muted-foreground text-sm mb-4 break-words">
                        {pub.summary}
                      </p>
                      {pub.pdfUrl && pub.content ? (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewMore(pub.title, pub.pdfUrl!, pub.content!)}
                          className="w-full sm:w-auto"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          View More
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" disabled className="w-full sm:w-auto">
                          <FileText className="mr-2 h-4 w-4" />
                          Download Paper (Coming Soon)
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Lightbulb className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-heading font-bold text-center">Innovation Projects</h2>
            </div>
            <div className="space-y-6">
              {innovationProjects.map((project, idx) => (
                <Card 
                  key={idx} 
                  className="p-4 sm:p-6 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                      <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-heading font-bold mb-1 break-words">
                            {project.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs flex-shrink-0">{project.category}</Badge>
                        </div>
                        <Badge variant="outline" className="self-start sm:self-auto flex-shrink-0">{project.year}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 mt-2 break-words">
                        {project.summary}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewMore(project.title, project.pdfUrl, project.content)}
                        className="w-full sm:w-auto"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Projects */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-heading font-bold text-center">Standards & Compliance</h2>
            </div>
            <div className="space-y-6">
              {standardsProjects.map((project, idx) => (
                <Card 
                  key={idx} 
                  className="p-4 sm:p-6 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-heading font-bold mb-1 break-words">
                            {project.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs flex-shrink-0">{project.event}</Badge>
                        </div>
                        <Badge variant="outline" className="self-start sm:self-auto flex-shrink-0">{project.year}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 mt-2 break-words">
                        {project.summary}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewMore(project.title, project.pdfUrl, project.content)}
                        className="w-full sm:w-auto"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Interested in collaboration?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to research opportunities, academic partnerships, and joint publications
            </p>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Dialog */}
      <ResearchPDFDialog
        open={openDialog.open}
        onOpenChange={(open) => setOpenDialog({ ...openDialog, open })}
        title={openDialog.title}
        pdfUrl={openDialog.pdfUrl}
        content={openDialog.content}
      />
    </div>
  );
}
