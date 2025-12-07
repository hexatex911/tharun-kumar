import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export const PDFViewer = ({ pdfUrl, title = 'Project Presentation' }: PDFViewerProps) => {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-xl sm:text-2xl font-heading font-bold">{title}</h2>
        <div className="flex gap-2">
          <a href={pdfUrl} download className="inline-block">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </a>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in New Tab
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-full h-[500px] sm:h-[600px] rounded-lg overflow-hidden border border-border bg-muted/30">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full"
            title={title}
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">
        If the PDF doesn't load, use the buttons above to download or open in a new tab
      </p>
    </Card>
  );
};
