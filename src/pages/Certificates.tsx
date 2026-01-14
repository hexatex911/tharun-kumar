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
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    issuer: 'Deloitte',
    issuerLogo: '/images/certlogos/deloitte cert logo.jpg',
    issuedDate: 'Jan 2026',
    credentialId: 'SKbofWofTDGYd8D2J',
    credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6964420c4b3bff447afe7854_1768178832005_completion_certificate.pdf',
    skills: ['Data Analytics', 'Business Intelligence', 'Data Visualization'],
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