import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Tharun_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur-sm">
          <h2 className="text-xl font-heading font-bold">Resume - Tharun Kumar C</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in Tab
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[calc(100%-4rem)] bg-muted/30">
          <iframe
            src="/Resume.pdf#view=FitH"
            className="w-full h-full border-0"
            title="Tharun Kumar Resume"
            loading="lazy"
          />
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          Use Ctrl+Scroll to zoom • ESC to close
        </div>
      </div>
    </div>
  );
};