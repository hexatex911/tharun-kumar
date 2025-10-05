import { Card } from '@/components/ui/card';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export const PDFViewer = ({ pdfUrl, title = 'Project Presentation' }: PDFViewerProps) => {
  return (
    <Card className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">{title}</h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-full h-[500px] sm:h-[600px] rounded-lg overflow-hidden border border-border">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`}
            className="w-full h-full"
            title={title}
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">
        Scroll or use the PDF controls to navigate
      </p>
    </Card>
  );
};
