import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface Certificate {
  title: string;
  issuer: string;
  issuerLogo: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  {
    title: 'What is Metaverse',
    issuer: 'Meta',
    issuerLogo: '/images/certlogos/meta-cert-logo.jpg',
    issuedDate: 'Jan 2026',
    credentialUrl: 'https://drive.google.com/file/d/1BWSTCRqEkYUJlJXo3I0WRL5sWSWhey9d/view?usp=sharing',
    skills: ['Metaverse', 'Virtual Reality', 'Digital Innovation', 'Emerging Technologies'],
  },
  {
    title: 'Go for Gold Contest - Gold Level Achievement',
    issuer: 'Accenture iAspire',
    issuerLogo: '/images/certlogos/accenture-cert-logo.png',
    issuedDate: 'Dec 2025',
    credentialUrl: 'https://drive.google.com/file/d/1SeSV3naU-LRKPLC5REjexIa9vOg4ATZp/view?usp=sharing',
    skills: ['Problem Solving', 'Technical Excellence', 'Innovation'],
  },
  {
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    issuer: 'Deloitte',
    issuerLogo: '/images/certlogos/deloitte cert logo.jpg',
    issuedDate: 'Jan 2026',
    credentialId: 'SKbofWofTDGYd8D2J',
    credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6964420c4b3bff447afe7854_1768178832005_completion_certificate.pdf',
    skills: ['Data Analytics', 'Business Intelligence', 'Data Visualization'],
  },
  {
    title: 'Deep Learning for Developers',
    issuer: 'Infosys Springboard',
    issuerLogo: '/images/certlogos/infosys-cert-logo.png',
    issuedDate: 'Jun 2025',
    credentialUrl: 'https://drive.google.com/file/d/14TA3fAn5jJ-Sr0daRRowoTYVu7SChYE6/view',
    skills: ['Deep Learning', 'Neural Networks', 'AI/ML'],
  },
  {
    title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
    issuer: 'Microsoft',
    issuerLogo: '/images/certlogos/microsoft-cert-logo.png',
    issuedDate: 'Aug 2023',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/fd9e29d2da1ec4d43a27f2163e60cab4715ad5259ec5d1c6bcd186d043cd80cb',
    skills: ['Generative AI'],
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    issuerLogo: '/images/certlogos/nptel-cert-logo.jpg',
    issuedDate: '2024',
    credentialUrl: 'https://drive.google.com/file/d/15bZXtkVrih89baJ3X6ha_CAyBUVec7uO/view?usp=sharing',
    skills: ['Cloud Computing', 'Distributed Systems'],
  },
  {
    title: 'Agile Requirements Foundations',
    issuer: 'LinkedIn',
    issuerLogo: '/images/certlogos/linkedin-cert-logo.avif',
    issuedDate: 'Aug 2023',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/22fecb7bb0444c858815b5f206c09ff213f3fe57d394ff2a923cc11c028a4d70',
    skills: ['Agile', 'Requirements Engineering'],
  },
  {
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Google (via Coursera)',
    issuerLogo: '/images/certlogos/google-cert-logo.png',
    issuedDate: '2024',
    credentialUrl: 'https://drive.google.com/file/d/1U3lcMVcZKAwzRNTXHzyBr9-1Zhak23Ak/view?usp=sharing',
    skills: ['Digital Marketing', 'E-commerce', 'Marketing Strategy'],
  },
  {
    title: 'WordPress with Docker',
    issuer: 'Great Learning',
    issuerLogo: '/images/certlogos/great-learning-cert-logo.png',
    issuedDate: '2024',
    credentialUrl: 'https://drive.google.com/file/d/1YfNDBpxGOKpb6-bUODZvnCX3FprWIjGF/view',
    skills: ['WordPress', 'Docker', 'DevOps'],
  },
  {
    title: 'Collaborating with G Suite Apps',
    issuer: 'Coursera',
    issuerLogo: '/images/certlogos/coursera-cert-logo.png',
    issuedDate: 'Aug 2023',
    credentialId: 'G9ENWMTSACUF',
    credentialUrl: 'https://drive.google.com/file/d/1fWJfeCf7-2sCFixqwS9nk4wVZD3/view?usp=sharing',
    skills: ['G Suite', 'Collaboration', 'Productivity'],
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Licenses & Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Professional certifications and credentials earned through continuous learning
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {certificates.map((cert, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <Card className="p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Issuer Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-border flex items-center justify-center">
                          <img
                            src={cert.issuerLogo}
                            alt={`${cert.issuer} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-heading font-bold mb-1">
                              {cert.title}
                            </h3>
                            <p className="text-lg text-muted-foreground mb-2">
                              {cert.issuer}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                              <Calendar className="h-4 w-4" />
                              <span>Issued {cert.issuedDate}</span>
                            </div>
                            {cert.credentialId && (
                              <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Credential ID:</span> {cert.credentialId}
                              </p>
                            )}
                          </div>

                          {/* Action Button */}
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm">
                                <Award className="mr-2 h-4 w-4" />
                                Show Credential
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Button>
                            </a>
                          )}
                        </div>

                        {/* Skills */}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}