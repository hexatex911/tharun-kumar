import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResearchPDFDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  pdfUrl: string;
  content: React.ReactNode;
}

export const ResearchPDFDialog = ({ 
  open, 
  onOpenChange, 
  title, 
  pdfUrl, 
  content 
}: ResearchPDFDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl h-[90vh] p-0">
        <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-heading pr-8">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col lg:flex-row h-[calc(90vh-60px)] sm:h-[calc(90vh-80px)] gap-3 sm:gap-4 px-3 sm:px-6 pb-3 sm:pb-6">
          {/* Left side - PDF viewer */}
          <div className="flex-1 rounded-lg border border-border overflow-hidden min-h-[400px] lg:min-h-0">
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`}
              className="w-full h-full"
              title={title}
            />
          </div>
          
          {/* Right side - Content */}
          <ScrollArea className="flex-1 rounded-lg border border-border p-4 sm:p-6 max-h-[400px] lg:max-h-full">
            <div className="prose prose-sm max-w-none dark:prose-invert
              [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:font-heading [&>h3]:font-bold [&>h3]:mb-3 [&>h3]:mt-6 [&>h3]:first:mt-0
              [&>p]:text-sm [&>p]:sm:text-base [&>p]:text-foreground/80 [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:text-sm [&>ul]:sm:text-base [&>ul]:mb-4 [&>ul]:space-y-2
              [&>ul>li]:text-foreground/80 [&>ul>li]:leading-relaxed
              [&>ul>li]:pl-1
            ">
              {content}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
