import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, Trophy, Award, DollarSign } from 'lucide-react';

interface Event {
  date: string;
  title: string;
  institution?: string;
  department?: string;
  project?: string;
  sponsor?: string;
  achievement: string;
  details: string;
}

interface Grant {
  title: string;
  organization: string;
  achievement: string;
  project?: string;
  outcome?: string;
  role?: string;
  recognition?: string;
}

const events2023: Event[] = [
  {
    date: '18 October 2023',
    title: 'AIRO 3.0 – Web Development Event',
    institution: 'Sri Sairam Engineering College',
    achievement: 'First Place',
    details: 'Developed an instant website within the event duration, evaluated on speed, design, and technical execution.',
  },
  {
    date: '29 November 2023',
    title: 'TechXelerate – Orator Quest',
    institution: 'Sri Sairam Engineering College',
    achievement: 'Winner',
    details: 'Assessed on public speaking, articulation, confidence, and audience engagement.',
  },
  {
    date: '13 December 2023',
    title: 'FIKRA – Business Pitch Competition',
    project: 'INDICRAFT',
    achievement: '3rd Place',
    details: 'Evaluated on business model, market feasibility, and scalability.',
  },
];

const events2025: Event[] = [
  {
    date: '27 August 2025',
    title: 'Mine Your Ideas – Idea Pitching Competition',
    institution: 'Loyola-ICAM College of Engineering',
    project: 'RATSAFE',
    achievement: 'Winner',
    details: 'Focused on safety-oriented innovation; judged on originality, feasibility, and real-world impact.',
  },
  {
    date: '17 September 2025',
    title: "UNSCRIPTED'25 – Paper Presentation",
    institution: 'St. Joseph Institute of Technology',
    department: 'Electrical & Electronics Engineering',
    achievement: 'Paper Presented / Selected',
    details: 'Technical paper presentation evaluated on clarity and technical depth.',
  },
  {
    date: '15 October 2025',
    title: 'Business Pitch Competition',
    institution: 'Gojan School of Business',
    project: 'InSight IQ',
    achievement: 'First Place',
    details: 'Strategic intelligence platform pitched; evaluated on innovation and business relevance.',
  },
  {
    date: '24 December 2025',
    title: 'App Development Competition',
    institution: 'KCG College of Technology',
    sponsor: 'Institution of Engineering and Technology (IET)',
    achievement: 'First Place',
    details: 'Built and demonstrated a functional mobile application; judged on UI/UX and usability.',
  },
];

const grants: Grant[] = [
  {
    title: 'IEEE Tech4Good',
    organization: 'IEEE SIGHT',
    achievement: '$3,300 USD Grant Awarded',
    project: 'Aeroponics-based Vertical Farming System',
    outcome: 'Patent Published',
  },
  {
    title: 'Volunteer Excellence Award',
    organization: 'IEEE TEMS',
    achievement: 'Excellence Award',
    role: 'Webmaster',
    recognition: 'Awarded for outstanding contribution and digital leadership.',
  },
];

const getAchievementColor = (achievement: string) => {
  if (achievement.toLowerCase().includes('first') || achievement.toLowerCase().includes('winner')) {
    return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
  }
  if (achievement.toLowerCase().includes('second') || achievement.toLowerCase().includes('2nd')) {
    return 'bg-gray-400/20 text-gray-300 border-gray-400/30';
  }
  if (achievement.toLowerCase().includes('third') || achievement.toLowerCase().includes('3rd')) {
    return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
  }
  return 'bg-accent/20 text-accent border-accent/30';
};

export default function Events() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Events & Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Competitions won, papers presented, and recognition earned
            </p>
          </div>
        </div>
      </section>

      {/* 2025 Events */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">2025</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {events2025.map((event, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <Card className="p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Trophy className="h-5 w-5 text-accent flex-shrink-0" />
                          <h3 className="text-xl font-heading font-bold">{event.title}</h3>
                        </div>
                        
                        <div className="space-y-1 text-sm text-muted-foreground mb-3">
                          <p><span className="font-medium">Date:</span> {event.date}</p>
                          {event.institution && <p><span className="font-medium">Institution:</span> {event.institution}</p>}
                          {event.department && <p><span className="font-medium">Department:</span> {event.department}</p>}
                          {event.project && <p><span className="font-medium">Project:</span> {event.project}</p>}
                          {event.sponsor && <p><span className="font-medium">Sponsor:</span> {event.sponsor}</p>}
                        </div>

                        <p className="text-sm text-foreground/80">{event.details}</p>
                      </div>

                      <Badge className={`${getAchievementColor(event.achievement)} whitespace-nowrap`}>
                        {event.achievement}
                      </Badge>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2023 Events */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">2023</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {events2023.map((event, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <Card className="p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Trophy className="h-5 w-5 text-accent flex-shrink-0" />
                          <h3 className="text-xl font-heading font-bold">{event.title}</h3>
                        </div>
                        
                        <div className="space-y-1 text-sm text-muted-foreground mb-3">
                          <p><span className="font-medium">Date:</span> {event.date}</p>
                          {event.institution && <p><span className="font-medium">Institution:</span> {event.institution}</p>}
                          {event.project && <p><span className="font-medium">Project:</span> {event.project}</p>}
                        </div>

                        <p className="text-sm text-foreground/80">{event.details}</p>
                      </div>

                      <Badge className={`${getAchievementColor(event.achievement)} whitespace-nowrap`}>
                        {event.achievement}
                      </Badge>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grants & Recognition */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">Grants & Professional Recognition</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {grants.map((grant, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <Card className="p-6 hover-lift border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="h-5 w-5 text-accent flex-shrink-0" />
                          <h3 className="text-xl font-heading font-bold">{grant.title}</h3>
                        </div>
                        
                        <div className="space-y-1 text-sm text-muted-foreground mb-3">
                          <p><span className="font-medium">Organization:</span> {grant.organization}</p>
                          {grant.project && <p><span className="font-medium">Project:</span> {grant.project}</p>}
                          {grant.role && <p><span className="font-medium">Role:</span> {grant.role}</p>}
                          {grant.outcome && <p><span className="font-medium">Outcome:</span> {grant.outcome}</p>}
                        </div>

                        {grant.recognition && <p className="text-sm text-foreground/80">{grant.recognition}</p>}
                      </div>

                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 whitespace-nowrap">
                        {grant.achievement}
                      </Badge>
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