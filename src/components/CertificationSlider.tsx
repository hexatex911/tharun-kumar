import { useEffect, useState, useRef } from 'react';

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
    name: 'Meta',
    logo: '/images/certificates/meta-logo.avif',
    alt: 'Meta Certification'
  },
  {
    name: 'Additional Certification 1',
    logo: '/images/certificates/02yVL9f8Jw1atwoG6sgFZDH-7.webp',
    alt: 'Professional Certification'
  },
  {
    name: 'Additional Certification 2',
    logo: '/images/certificates/06bnqFCCqMYNmhahHfpuUFs-13.webp',
    alt: 'Technical Certification'
  },
  {
    name: 'Additional Certification 3',
    logo: '/images/certificates/images.jpg',
    alt: 'Industry Certification'
  }
];

export const CertificationSlider = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Create duplicated array for seamless infinite scroll
  const duplicatedCertifications = [...certifications, ...certifications];

  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Resume auto-scroll after 3 seconds of no interaction
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Sliding container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar"
            onMouseEnter={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            onScroll={handleUserInteraction}
          >
            <div className={`flex ${!isUserInteracting ? 'animate-scroll-x' : ''}`}>
              {duplicatedCertifications.map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50 group"
                >
                  <img
                    src={cert.logo}
                    alt={cert.alt}
                    className="max-w-full max-h-full object-contain p-1 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};