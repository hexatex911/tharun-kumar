import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResearchCardProps {
  title: string;
  slug: string;
  category: string;
  summary: string;
  year: string;
  pdfUrl: string;
  coverImage: string;
  objectPosition?: string;
}

export const ResearchCard = ({ title, slug, category, summary, year, pdfUrl, coverImage, objectPosition = 'object-left-top' }: ResearchCardProps) => {
  return (
    <Card className="p-6 hover-lift flex flex-col h-full">
      {/* PDF Cover Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden aspect-[4/3]">
        <img 
          src={coverImage} 
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover ${objectPosition}`}
        />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">{year}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <Badge variant="secondary" className="text-xs mb-3 w-fit">
          {category}
        </Badge>
        <h3 className="text-lg font-heading font-bold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
          {summary}
        </p>

        {/* Action Button */}
        <Link to={`/research?project=${slug}`} className="mt-auto">
          <Button variant="ghost" size="sm" className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            View More
          </Button>
        </Link>
      </div>
    </Card>
  );
};
