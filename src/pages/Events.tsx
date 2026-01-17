import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, Trophy, Award, DollarSign, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface Event {
  date: string;
  title: string;
  institution?: string;
  department?: string;
  project?: string;
  sponsor?: string;
  achievement: string;
  details: string;
  photos?: string[];
}

interface Grant {
  title: string;
  organization: string;
  achievement: string;
  project?: string;
  outcome?: string;
  role?: string;
  recognition?: string;
  photos?: string[];
}

const events2023: Event[] = [
  {
    date: '18 October 2023',
    title: 'AIRO 3.0 – Web Development Event',
    institution: 'Sri Sairam Engineering College',
    achievement: 'First Place',
    details: 'Developed an instant website within the event duration, evaluated on speed, design, and technical execution.',
    photos: ['/images/events/1697556485410.jpg', '/images/events/1697942918110.jpg'],
  },
  {
    date: '29 November 2023',
    title: 'TechXelerate – Orator Quest',
    institution: 'Sri Sairam Engineering College',
    achievement: 'Winner',
    details: 'Assessed on public speaking, articulation, confidence, and audience engagement.',
    photos: ['/images/events/1700815585284.jpg', '/images/events/1700815618907.jpg'],
  },
  {
    date: '13 December 2023',
    title: 'FIKRA – Business Pitch Competition',
    project: 'INDICRAFT',
    achievement: '3rd Place',
    details: 'Evaluated on business model, market feasibility, and scalability.',
    photos: ['/images/events/1702388697675.jpg', '/images/events/fikra 2023_page-0001.jpg'],
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
    photos: ['/images/events/1756022322946.jpg', '/images/events/1756022323232.jpg'],
  },
  {
    date: '17 September 2025',
    title: "UNSCRIPTED'25 – Paper Presentation",
    institution: 'St. Joseph Institute of Technology',
    department: 'Electrical & Electronics Engineering',
    achievement: 'Runner Up',
    details: 'Technical paper presentation evaluated on clarity and technical depth.',
    photos: ['/images/events/unscripted.jpeg', '/images/events/unscripted-screenshot.png'],
  },
  {
    date: '15 October 2025',
    title: 'Business Pitch Competition',
    institution: 'Gojan School of Business',
    project: 'InSight IQ',
    achievement: 'First Place',
    details: 'Strategic intelligence platform pitched; evaluated on innovation and business relevance.',
    photos: ['/images/events/Gojan Presentation 1st_page-0001 (1).jpg', '/images/events/gojan-2.jpeg'],
  },
  {
    date: '24 December 2025',
    title: 'App Development Competition',
    institution: 'KCG College of Technology',
    sponsor: 'Institution of Engineering and Technology (IET)',
    achievement: 'First Place',
    details: 'Built and demonstrated a functional mobile application; judged on UI/UX and usability.',
    photos: ['/images/events/1765983864183.jpg', '/images/events/1765983865175.jpg'],
  },
  {
    date: '2025',
    title: "Steganos'25 – Idea Pitching",
    institution: 'SRM Easwari Engineering College',
    project: 'Talent Track',
    achievement: '2nd Place',
    details: 'Presented Talent Track AI-powered fitness analysis platform; evaluated on innovation and impact.',
    photos: ['/images/events/58b1d4f8-6261-42b9-b674-a7d481a5a1e3.jpg', '/images/events/steganos-certificate.png'],
  },
];

const grants: Grant[] = [
  {
    title: 'IEEE Tech4Good',
    organization: 'IEEE SIGHT',
    achievement: '$3,300 USD Grant Awarded',
    project: 'Aeroponics-based Vertical Farming System',
    outcome: 'Patent Published',
    photos: ['/images/events/1722068509518.jpg', '/images/events/1730548591679.jpg'],
  },
  {
    title: 'Volunteer Excellence Award',
    organization: 'IEEE TEMS',
    achievement: 'Excellence Award',
    role: 'Webmaster',
    recognition: 'Awarded for outstanding contribution and digital leadership.',
    photos: ['/images/events/1730265989540.jpg', '/images/events/1730265991103.jpg'],
  },
];

const getAchievementColor = (achievement: string) => {
  if (achievement.toLowerCase().includes('first') || achievement.toLowerCase().includes('winner')) {
    return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
  }
  if (achievement.toLowerCase().includes('second') || achievement.toLowerCase().includes('2nd') || achievement.toLowerCase().includes('runner')) {
    return 'bg-gray-400/20 text-gray-300 border-gray-400/30';
  }
  if (achievement.toLowerCase().includes('third') || achievement.toLowerCase().includes('3rd')) {
    return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
  }
  return 'bg-accent/20 text-accent border-accent/30';
};

// Image Gallery Component with Enhanced Lightbox
function ImageGallery({ photos, title }: { photos: string[]; title: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setImageLoaded(false);
    // Remove body scroll lock to allow scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setImageLoaded(false);
    // No need to restore scroll since we didn't lock it
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setImageLoaded(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setImageLoaded(false);
  };

  // Enhanced keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        if (photos.length > 1) goNext();
        break;
      case 'ArrowLeft':
        if (photos.length > 1) goPrev();
        break;
    }
  };

  // Add/remove keyboard event listeners
  useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, photos.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // No cleanup needed since we don't lock body scroll
    };
  }, []);

  if (photos.length === 0) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="mt-4">
        <div className={`grid gap-3 ${
          photos.length === 1 ? 'grid-cols-1' : 
          photos.length === 2 ? 'grid-cols-2' : 
          'grid-cols-2 md:grid-cols-3'
        }`}>
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-muted/30 aspect-[4/3] hover:border-accent/50 transition-colors"
            >
              <img
                src={photo}
                alt={`${title} - Photo ${idx + 1}`}
                className={`w-full h-full transition-all duration-300 group-hover:scale-105 ${
                  photo.includes('unscripted-screenshot.png') ? 'object-right object-cover' : 'object-cover'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              {/* Image counter for multiple photos */}
              {photos.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}/{photos.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm overflow-auto">
          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {photos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div 
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentIndex]}
                alt={`${title} - Photo ${currentIndex + 1}`}
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Image Info Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
            {photos.length > 1 && (
              <div className="text-white text-sm font-medium">
                {currentIndex + 1} / {photos.length}
              </div>
            )}
            <div className="text-white/80 text-sm">
              {title}
            </div>
          </div>

          {/* Thumbnail Strip for multiple images */}
          {photos.length > 1 && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
              {photos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentIndex 
                      ? 'border-white scale-110' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

// Event Card Component
function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="h-5 w-5 text-accent flex-shrink-0" />
              <h3 className="text-xl font-heading font-bold">{event.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
              <p><span className="font-medium text-foreground/70">Date:</span> {event.date}</p>
              {event.institution && <p><span className="font-medium text-foreground/70">Institution:</span> {event.institution}</p>}
              {event.department && <p><span className="font-medium text-foreground/70">Department:</span> {event.department}</p>}
              {event.project && <p><span className="font-medium text-foreground/70">Project:</span> {event.project}</p>}
              {event.sponsor && <p><span className="font-medium text-foreground/70">Sponsor:</span> {event.sponsor}</p>}
            </div>

            <p className="text-sm text-foreground/80">{event.details}</p>
          </div>

          <Badge className={`${getAchievementColor(event.achievement)} whitespace-nowrap self-start`}>
            {event.achievement}
          </Badge>
        </div>

        {/* Photo Gallery */}
        {event.photos && event.photos.length > 0 && (
          <ImageGallery photos={event.photos} title={event.title} />
        )}
      </div>
    </Card>
  );
}

// Grant Card Component
function GrantCard({ grant }: { grant: Grant }) {
  return (
    <Card className="overflow-hidden hover-lift border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Award className="h-5 w-5 text-accent flex-shrink-0" />
              <h3 className="text-xl font-heading font-bold">{grant.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
              <p><span className="font-medium text-foreground/70">Organization:</span> {grant.organization}</p>
              {grant.project && <p><span className="font-medium text-foreground/70">Project:</span> {grant.project}</p>}
              {grant.role && <p><span className="font-medium text-foreground/70">Role:</span> {grant.role}</p>}
              {grant.outcome && <p><span className="font-medium text-foreground/70">Outcome:</span> {grant.outcome}</p>}
            </div>

            {grant.recognition && <p className="text-sm text-foreground/80">{grant.recognition}</p>}
          </div>

          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 whitespace-nowrap self-start">
            {grant.achievement}
          </Badge>
        </div>

        {/* Photo Gallery */}
        {grant.photos && grant.photos.length > 0 && (
          <ImageGallery photos={grant.photos} title={grant.title} />
        )}
      </div>
    </Card>
  );
}

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
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">2025</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {events2025.map((event, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2023 Events */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">2023</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {events2023.map((event, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grants & Recognition */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-heading font-bold">Grants & Professional Recognition</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {grants.map((grant, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <GrantCard grant={grant} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}