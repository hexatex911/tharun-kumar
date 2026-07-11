import { useState, useEffect } from 'react';
import { X, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function InternshipNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show notification after 2 seconds every time homepage loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-slide-up">
      <div 
        className={`bg-card border-2 border-accent/30 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
          aria-label="Close notification"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Accent Top Border */}
        <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent" />

        <div className="p-5">
          {/* Logo and Badge */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center p-2.5 border border-accent/20">
              <img 
                src="/images/experience/rbih_logo.png" 
                alt="RBIH Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 pt-1">
              <div className="inline-block px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-md mb-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">New Opportunity</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">
                Internship Secured! 🎉
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                AI and Data Science Intern
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Reserve Bank Innovation Hub (RBIH)
              </p>
            </div>
          </div>

          {/* Action Button */}
          <Link to="/experience">
            <Button 
              size="sm" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              onClick={handleClose}
            >
              View Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Animated accent border */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="absolute inset-0 rounded-xl border-2 border-accent/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
