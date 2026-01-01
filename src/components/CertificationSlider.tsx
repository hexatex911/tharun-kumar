import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    name: 'Microsoft',
    logo: '/images/certificates/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg',
    alt: 'Microsoft Certification'
  },
  {
    name: 'Great Learning',
    logo: '/images/certificates/great-learning-logo-white-bg.png',
    alt: 'Great Learning Certification'
  },
  {
    name: 'LinkedIn Learning',
    logo: '/images/certificates/linkedin-logo-2003.webp',
    alt: 'LinkedIn Learning Certification'
  },
  {
    name: 'Scaler',
    logo: '/images/certificates/Scaler_Logo_WhiteBG-860x484.jpg',
    alt: 'Scaler Certification'
  },
  {
    name: 'Infosys Springboard',
    logo: '/images/certificates/infosys-springboard-new.png',
    alt: 'Infosys Springboard Certification'
  },
  {
    name: 'Udemy',
    logo: '/images/certificates/udemy-new-20212512.jpg',
    alt: 'Udemy Certification'
  },
  {
    name: 'Additional Certification 1',
    logo: '/images/certificates/02yVL9f8Jw1atwoG6sgFZDH-7.webp',
    alt: 'Professional Certification'
  },
  {
    name: 'Google Cloud',
    logo: '/images/certificates/images.jpg',
    alt: 'Google Cloud Certification'
  },
  {
    name: 'Meta',
    logo: '/images/certificates/meta-logo-new.png',
    alt: 'Meta Certification'
  },
];

export const CertificationSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create duplicated array for seamless infinite scroll
  const duplicatedCertifications = [...certifications, ...certifications];

  const scrollLeft = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollAmount = 200;
      
      // Check if we're at the beginning, if so jump to the end of first set
      if (container.scrollLeft <= scrollAmount) {
        const itemWidth = 200; // 48 (w-48) * 4 (1rem = 4px) + margins
        const totalWidth = certifications.length * itemWidth;
        container.scrollLeft = totalWidth;
      }
      
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollAmount = 200;
      const itemWidth = 200;
      const totalWidth = certifications.length * itemWidth;
      
      // Check if we're near the end, if so jump to the beginning of second set
      if (container.scrollLeft >= totalWidth - scrollAmount) {
        container.scrollLeft = 0;
      }
      
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-secondary/30 via-background to-secondary/30 py-8">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
            Certifications & Training
          </h3>
          <p className="text-muted-foreground">
            Continuous learning from industry-leading platforms
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg border-blue-200 hover:border-blue-300"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4 text-blue-600" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg border-blue-200 hover:border-blue-300"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </Button>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Sliding container */}
          <div className="flex overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                className="flex animate-scroll-x"
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
              {duplicatedCertifications.map((cert, index) => {
                // Special padding for specific logos
                const getPadding = (certName: string) => {
                  if (certName === 'Infosys Springboard') return 'p-0.5'; // Zoom in more
                  if (certName === 'Google Cloud') return 'p-0.5'; // Zoom in more
                  if (certName === 'Meta') return 'p-0.5'; // Zoom in more
                  return 'p-1'; // Default padding
                };
                
                return (
                  <div
                    key={`${cert.name}-${index}`}
                    className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50 group"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.alt}
                      className={`max-w-full max-h-full object-contain ${getPadding(cert.name)} transition-all duration-300 group-hover:scale-105`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};