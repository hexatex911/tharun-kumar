import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Let's build something together</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Open for internships, freelance projects, research collaborations, and tutoring inquiries
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Contact Info */}
          <Card className="p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">Email</h3>
                <a 
                  href="mailto:tharunkumardeveloper@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  tharunkumardeveloper@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">Phone</h3>
                <a 
                  href="tel:+918610677504"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 8610677504
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/tharun-kumar-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/tharunkumardeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  github.com/tharunkumardeveloper
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
