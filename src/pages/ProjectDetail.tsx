import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageGallery } from '@/components/ImageGallery';
import { PDFViewer } from '@/components/PDFViewer';
import { VideoGallery } from '@/components/VideoGallery';
import talenttrackMock from '@/assets/talenttrack-cover.png';
import talenttrackRoleSelection from '@/assets/talenttrack-role-selection.png';
import talenttrackAssessment from '@/assets/talenttrack-assessment.png';
import talenttrackPosePushup from '@/assets/talenttrack-pose-pushup.png';
import talenttrackPosePullup from '@/assets/talenttrack-pose-pullup.png';
import talenttrackChallenges from '@/assets/talenttrack-challenges.png';
import talenttrackMobileApp from '@/assets/talenttrack-mobile-app.jpeg';
import talenttrackSitupDemo from '@/assets/talenttrack-situp-demo.png';
import talenttrackVerticalJump from '@/assets/talenttrack-vertical-jump.png';
import talenttrackVerticalJump2 from '@/assets/talenttrack-vertical-jump-2.png';
import talenttrackPullupDemo from '@/assets/talenttrack-pullup-demo.png';
import talenttrackShuttleRun from '@/assets/talenttrack-shuttle-run.png';
import talenttrackSitupOutdoor from '@/assets/talenttrack-situp-outdoor.png';
import talenttrackMobileUI from '@/assets/talenttrack-mobile-ui.png';
import talenttrackPushupDemo from '@/assets/talenttrack-pushup-demo.png';
import venmathiMock from '@/assets/venmathi-indicraft-home.png';
import venmathiWelcome from '@/assets/venmathi-welcome.png';
import venmathiChatDemo from '@/assets/venmathi-chat-demo.png';
import venmathiChatTanglish from '@/assets/venmathi-chat-tanglish.png';
import indicraftMock from '@/assets/indicraft-hero.png';
import indicraftCategories from '@/assets/indicraft-categories.png';
import indicraftSpecialEdition from '@/assets/indicraft-special-edition.png';
import indicraftFeaturedProducts from '@/assets/indicraft-featured-products.png';
import indicraftDailyDeals from '@/assets/indicraft-daily-deals.png';
import indicraftProductDetail from '@/assets/indicraft-product-detail.png';
import indicraftAbout from '@/assets/indicraft-about.png';
import indicraftDashboard from '@/assets/indicraft-dashboard.png';
import indicraftProductsManagement from '@/assets/indicraft-products-management.png';
import aeroponicsMock from '@/assets/aeroponics-hero.jpeg';
import insightiqMock from '@/assets/insightiq-dashboard.png';
import insightiqDomainModal from '@/assets/insightiq-domain-modal.png';
import insightiqCharts from '@/assets/insightiq-charts.png';
import insightiqMarket from '@/assets/insightiq-market.png';
import insightiqSocial from '@/assets/insightiq-social.png';
import insightiqCompetitorsWeb3 from '@/assets/insightiq-competitors-web3.png';
import insightiqCompetitorsCloud from '@/assets/insightiq-competitors-cloud.png';
import insightiqAlerts from '@/assets/insightiq-alerts.png';
import insightiqCompetitorsGreentech from '@/assets/insightiq-competitors-greentech.png';

const projectDetails: Record<string, any> = {
  talenttrack: {
    title: 'Talent Track — AI-Powered Fitness Analysis Platform',
    image: talenttrackMock,
    gallery: [
      { src: '/images/talenttrack-new-1.png', caption: 'Talent Track homepage with AI-powered fitness analysis', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-2.png', caption: 'Real-time pose detection with 33 body landmarks', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-3.png', caption: 'Ghost Mode - train against a perfect AI skeleton', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-4.png', caption: 'Live form scoring (0-100) with joint-angle tracking', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-5.png', caption: 'Evaluator Test Mode for instant performance analysis', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-6.png', caption: 'FitFranken AI chatbot providing coaching tips', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-7.png', caption: 'Badge system for motivation and habit building', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-8.png', caption: 'Streak tracking for consistent training', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-9.png', caption: 'Rep counting with real-time feedback', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-10.png', caption: 'Privacy-first design - all processing in browser', orientation: 'horizontal' },
      { src: '/images/talenttrack-new-11.png', caption: 'Performance dashboard with detailed analytics', orientation: 'horizontal' },
      { src: talenttrackRoleSelection, caption: 'Web UI - Role selection for Student, Staff, and Admin', orientation: 'horizontal' },
      { src: talenttrackAssessment, caption: 'Assessment interface with activity selection', orientation: 'horizontal' },
      { src: talenttrackPosePushup, caption: 'Real-time pose estimation during push-up assessment', orientation: 'vertical' },
      { src: talenttrackPosePullup, caption: 'Pose tracking for pull-up exercises', orientation: 'vertical' },
      { src: talenttrackChallenges, caption: 'Gamified challenges and achievement system', orientation: 'horizontal' },
      { src: talenttrackMobileApp, caption: 'Mobile app interface with training programs', orientation: 'vertical' },
      { src: talenttrackSitupDemo, caption: 'Real-time pose tracking during sit-up assessment', orientation: 'horizontal' },
      { src: talenttrackVerticalJump, caption: 'Vertical jump assessment with height tracking', orientation: 'vertical' },
      { src: talenttrackVerticalJump2, caption: 'Vertical jump pose estimation in outdoor setting', orientation: 'vertical' },
      { src: talenttrackPullupDemo, caption: 'Pull-up assessment with elbow angle tracking', orientation: 'horizontal' },
      { src: talenttrackShuttleRun, caption: 'Shuttle run distance and speed tracking', orientation: 'horizontal' },
      { src: talenttrackSitupOutdoor, caption: 'Outdoor sit-up assessment with pose detection', orientation: 'horizontal' },
      { src: talenttrackMobileUI, caption: 'Mobile app workout interface', orientation: 'vertical' },
    ],
    videos: [
      { youtubeId: 'vnV_rCkc0LU', title: 'TalentTrack Demo Overview', thumbnail: talenttrackPushupDemo },
      { src: '/videos/pushup.mp4', title: 'Push-up Assessment Demo' },
      { src: '/videos/pullup.mp4', title: 'Pull-up Assessment Demo' },
      { src: '/videos/situp.mp4', title: 'Sit-up Assessment Demo' },
      { src: '/videos/broadjump.mp4', title: 'Broad Jump Assessment Demo' },
      { src: '/videos/verticaljump.mp4', title: 'Vertical Jump Assessment Demo' },
      { src: '/videos/shuttlerun.mp4', title: 'Shuttle Run Assessment Demo' },
      { src: '/videos/sit_reach.mp4', title: 'Sit & Reach Assessment Demo' },
    ],
    pdfUrl: '/documents/talenttrack-new.pdf',
    summary: 'Talent Track is an AI-powered fitness analysis platform that turns any smartphone camera into a professional-grade workout evaluation system with no gym, no wearables, and no subscriptions. Built in just 10.5 days using Kiro AI.',
    role: 'Solo Developer — Built in 10.5 days using Kiro AI, saving over 62% development time with spec-driven dev, steering docs, agent hooks, and MCP extensions',
    tech: ['MediaPipe', 'React', 'AI Pose Detection', 'Computer Vision', 'Browser-based ML', 'Kiro AI'],
    problem: 'Fitness technology is often expensive, requires gym memberships, wearables, or subscriptions. Students, para-athletes, and people with only a smartphone lack access to elite-level workout feedback and professional-grade analysis.',
    approach: `Built a comprehensive browser-based fitness platform with:
• Real-time AI pose detection using MediaPipe (33 body landmarks)
• Rep counting with joint-angle tracking for accurate form analysis
• Live form scoring (0–100) providing instant feedback
• Ghost Mode – train against a perfect AI skeleton for visual guidance
• Evaluator Test Mode – instant performance analysis without video upload
• FitFranken AI chatbot – explains performance & gives personalized coaching tips
• Badge & streak system for motivation and habit building
• Full privacy-first design – all processing happens locally in the browser
• No gym, no wearables, no subscriptions required
• Built using Kiro AI with spec-driven development and agent hooks`,
    challenges: [
      'Implementing accurate real-time pose detection in the browser',
      'Ensuring privacy by processing all data locally without server uploads',
      'Creating an intuitive UI for users of all fitness levels',
      'Building a comprehensive AI chatbot for personalized coaching',
      'Optimizing performance for smooth real-time analysis',
      'Completing the entire project in just 10.5 days',
    ],
    outcomes: [
      'Successfully launched at https://talent-track-cyber.vercel.app',
      'Built in just 10.5 days, saving over 62% development time',
      'Real-time pose detection with 33 body landmarks tracking',
      'Privacy-first design with 100% local processing',
      'Accessible fitness technology for students and para-athletes',
      'Gamification system improving user engagement and retention',
      'AI chatbot providing personalized coaching and feedback',
    ],
    links: [
      { label: 'Live Demo', url: 'https://talent-track-cyber.vercel.app' },
    ],
  },
  venmathi: {
    title: 'Venmathi — Tanglish LLM Assistant',
    image: venmathiMock,
    gallery: [
      { src: venmathiMock, caption: 'Indicraft marketplace homepage where Venmathi is integrated', orientation: 'horizontal' },
      { src: venmathiWelcome, caption: 'Venmathi welcome screen with personalized greeting', orientation: 'horizontal' },
      { src: venmathiChatDemo, caption: 'Chat interface showing order status inquiry', orientation: 'horizontal' },
      { src: venmathiChatTanglish, caption: 'Tanglish conversation demonstrating cultural understanding', orientation: 'horizontal' },
    ],
    summary: 'Venmathi is a fine-tuned LLaMA model crafted to understand and respond in Tanglish (Tamil + English), used as the customer support assistant for Indicraft.',
    role: 'Full pipeline owner — dataset creation, fine-tuning, deployment, frontend integration',
    tech: ['LLaMA 3', 'Python', 'Ollama', 'React', 'Netlify', 'Colab'],
    problem: 'Indian diaspora and local customers often prefer communicating in a mix of Tamil and English (Tanglish), but standard LLMs struggle with code-switching and cultural context.',
    approach: 'Created custom Tanglish dataset with 5,000+ conversation pairs, fine-tuned LLaMA 3 on Google Colab, quantized the model for edge deployment, hosted on Ollama, and integrated into React frontend with fallback to human support when confidence is low.',
    challenges: [
      'Generating high-quality Tanglish training data',
      'Balancing model size vs. response quality',
      'Implementing confidence thresholds for safe responses',
      'Optimizing inference speed for real-time chat',
    ],
    outcomes: [
      'Successfully deployed as Indicraft\'s primary support assistant',
      'Handles 70% of customer queries without human intervention',
      'Average response time under 2 seconds',
      'Positive user feedback on cultural relevance',
    ],
  },
  indicraft: {
    title: 'Indicraft — From Local Hands to Global Homes',
    image: indicraftMock,
    gallery: [
      { src: indicraftMock, caption: 'Indicraft marketplace homepage with handmade plates collection', orientation: 'horizontal' },
      { src: indicraftCategories, caption: 'Product categories including Bengal spices, terracotta pots, and Jaipur fabrics', orientation: 'horizontal' },
      { src: indicraftSpecialEdition, caption: 'Special edition handcrafted rugs with limited time offers', orientation: 'horizontal' },
      { src: indicraftFeaturedProducts, caption: 'Featured products showcase with traditional crafts', orientation: 'horizontal' },
      { src: indicraftDailyDeals, caption: 'Deal of the day offers for handicrafts', orientation: 'horizontal' },
      { src: indicraftProductDetail, caption: 'Product detail page with Thanjavur paper mache dolls', orientation: 'horizontal' },
      { src: indicraftAbout, caption: 'About Indicraft page highlighting artisan partnerships', orientation: 'horizontal' },
      { src: indicraftDashboard, caption: 'Artisan dashboard for managing sales and orders', orientation: 'horizontal' },
      { src: indicraftProductsManagement, caption: 'Product management interface for artisans', orientation: 'horizontal' },
    ],
    videos: [
      { youtubeId: 'FBFtEl4tW8o', title: 'Indicraft Platform Overview', thumbnail: indicraftFeaturedProducts },
    ],
    pdfUrl: '/documents/indicraft-presentation.pdf',
    summary: 'Indicraft is a digital marketplace that connects local Indian artisans with the global Indian diaspora, enabling authentic, high-quality handcrafted products to reach international homes.',
    role: 'Platform contributor — frontend components, recommendation prototype, Venmathi integration, artisan onboarding UX',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'India Post API', 'LLaMA (Venmathi)'],
    problem: 'Indian artisans face limited market access and low incomes due to middlemen and lack of digital presence. The global Indian diaspora struggles to find authentic, quality handcrafted products at affordable prices with reliable shipping.',
    approach: `Built a full-featured marketplace with:
- Verified artisan onboarding with product verification checklist
- AI recommendation engine for region and festival-based suggestions
- Standardized international shipping via India Post (Dak Ghar Niryat Kendra)
- Fair-pay model ensuring artisans receive 70%+ of sale price
- Integrated Venmathi (Tanglish LLM) for local-language customer support
- SDG-aligned impact tracking (Goals 17, 8, 12)`,
    challenges: [
      'Building trust in product authenticity',
      'Simplifying international shipping logistics',
      'Creating intuitive onboarding for non-tech-savvy artisans',
      'Balancing marketplace fees with artisan fair pay',
    ],
    outcomes: [
      'Platform launched with 50+ verified artisans',
      'Average artisan income increased by 60%',
      'Successful international shipments to 10+ countries',
      'Featured in college innovation showcase',
    ],
  },
  jarvis: {
    title: 'JARVIS AI Assistant — Google Cloud Run Hackathon',
    image: '/images/jarvis-1.png',
    gallery: [
      { src: '/images/jarvis-1.png', caption: 'JARVIS AI Assistant main interface', orientation: 'horizontal' },
      { src: '/images/jarvis-2.png', caption: 'Voice and text conversation modes', orientation: 'horizontal' },
      { src: '/images/jarvis-3.png', caption: 'Google Cloud integrations dashboard', orientation: 'horizontal' },
      { src: '/images/jarvis-4.png', caption: 'Contact management and file handling', orientation: 'horizontal' },
    ],
    videos: [
      { youtubeId: '2jOhWb1g8oQ', title: 'JARVIS AI Assistant Demo', thumbnail: '/images/jarvis-1.png' },
    ],
    summary: 'A JARVIS-inspired AI agent built for the Google Cloud Run Hackathon. An AI-powered offline conversational agent that switches seamlessly to online mode when connected, enabling cloud-powered capabilities.',
    role: 'Solo Developer — Google Cloud Run Hackathon Project',
    tech: ['Google Cloud Run', 'Gmail API', 'Google Meet', 'Google Docs API', 'Google Vision API', 'Python', 'AI/ML'],
    problem: 'Personal AI assistants typically require constant internet connectivity and don\'t gracefully handle offline scenarios. Users need an assistant that works locally but can leverage cloud capabilities when available.',
    approach: `Built a hybrid AI assistant with:
• Offline conversational AI for local intelligence
• Seamless online mode switching for cloud capabilities
• Gmail API integration for email management
• Google Meet integration for meeting scheduling
• Google Docs API for document reading and summarization
• Google Vision API for image understanding
• Contact management system for quick communication
• File attachment handling for document processing
• Voice and text conversation modes
• Hybrid architecture bridging local and cloud intelligence`,
    challenges: [
      'Implementing seamless offline-to-online mode switching',
      'Integrating multiple Google Cloud APIs cohesively',
      'Building natural voice and text conversation interfaces',
      'Handling authentication and security for multiple APIs',
      'Optimizing performance for real-time responses',
      'Creating an intuitive UI inspired by Iron Man\'s JARVIS',
    ],
    outcomes: [
      'Successfully completed for Google Cloud Run Hackathon',
      'Deepened understanding of Google Cloud Console and API integrations',
      'Built hybrid AI system bridging local and cloud intelligence',
      'Implemented voice and text conversation modes',
      'Integrated 5+ Google Cloud APIs seamlessly',
      'YouTube demo: https://www.youtube.com/watch?v=2jOhWb1g8oQ',
    ],
    links: [
      { label: 'YouTube Demo', url: 'https://www.youtube.com/watch?v=2jOhWb1g8oQ' },
    ],
  },
  aeroponics: {
    title: 'Vertical Tower Aeroponics — Sustainable Urban Farming',
    image: aeroponicsMock,
    gallery: [
      { src: aeroponicsMock, caption: 'Vertical Aeroponics hero - Future-Forward Farming Solutions', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-1.png', caption: 'Vertical tower design for space optimization', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-2.png', caption: 'Automated nutrient delivery system', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-3.png', caption: 'IoT-enabled monitoring dashboard', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-4.png', caption: 'Real-time environmental parameter tracking', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-5.png', caption: 'Water-efficient aeroponic misting system', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-6.png', caption: 'Plant health monitoring interface', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-7.png', caption: 'Nutrient level control system', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-8.png', caption: 'Temperature and humidity sensors', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-9.png', caption: 'Cloud platform for remote monitoring', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-10.png', caption: 'System analytics and performance metrics', orientation: 'horizontal' },
      { src: '/images/aeroponics-new-11.png', caption: 'Sustainable agriculture solution for urban environments', orientation: 'horizontal' },
      { src: '/images/aeroponics-patent.jpg', caption: 'Patent application published - Application No. 202441076822', orientation: 'horizontal' },
      { src: '/images/aeroponics-funding.jpg', caption: 'IEEE SIGHT Tech4Good funding award - $3,300 for Vertical Tower Farming project', orientation: 'horizontal' },
      { src: '/images/aeroponics-team.jpg', caption: 'Project team at vertical farming initiative inauguration', orientation: 'horizontal' },
      { src: '/images/aeroponics-login.jpeg', caption: 'User login and registration interface', orientation: 'horizontal' },
      { src: '/images/aeroponics-dashboard.jpeg', caption: 'IoT dashboard showing real-time TDS levels and environmental parameters', orientation: 'horizontal' },
    ],
    summary: 'An innovative vertical farming solution using aeroponics technology to grow plants without soil, maximizing space efficiency and resource conservation for sustainable urban agriculture.',
    role: 'Lead Researcher — IoT integration, system design, sensor implementation',
    tech: ['IoT', 'Arduino', 'Sensors', 'Aeroponics', 'Cloud Platform', 'Sustainable Agriculture'],
    problem: 'Urban areas face severe space constraints for traditional farming, and conventional agriculture is water-intensive, climate-dependent, and unsustainable. Cities need innovative vertical solutions to address food security challenges.',
    approach: `Designed and built a comprehensive vertical farming system with:
• Vertical tower design for maximum space optimization
• Automated nutrient delivery system with precise control
• IoT-enabled monitoring and control for real-time management
• Water-efficient aeroponic misting technology
• Environmental sensors for temperature, humidity, and nutrient levels
• Cloud platform for remote monitoring and data analytics
• Sustainable agriculture solution for urban environments
• Automated climate control for optimal plant growth
• Resource conservation through efficient water and nutrient usage`,
    challenges: [
      'Maintaining consistent nutrient delivery across all tower levels',
      'Preventing mold and bacterial growth in humid environment',
      'Ensuring system reliability for 24/7 operation',
      'Optimizing power consumption for IoT sensors',
      'Balancing automation with manual control options',
      'Scaling the system for commercial urban farming',
    ],
    outcomes: [
      'Successfully deployed vertical tower system',
      'Demonstrated 40% reduction in water usage vs. traditional farming',
      'System supports 50+ plants in 4 sq ft footprint',
      'IoT monitoring enables remote management and optimization',
      'Addresses food security challenges in urban environments',
      'Sustainable agriculture solution with minimal environmental impact',
    ],
  },
  insightiq: {
    title: 'INSIGHT IQ — Strategic Intelligence Platform',
    image: insightiqMock,
    gallery: [
      { src: insightiqDomainModal, caption: 'Domain selection interface for 10 technology sectors', orientation: 'horizontal' },
      { src: insightiqMock, caption: 'Dashboard showing competitor intelligence cards for Semiconductors & Hardware', orientation: 'horizontal' },
      { src: insightiqCharts, caption: 'Sentiment over time and mentions by competitor analytics', orientation: 'horizontal' },
      { src: insightiqMarket, caption: 'Market intelligence view with sentiment trends and topic analysis', orientation: 'horizontal' },
      { src: insightiqSocial, caption: 'Social buzz and sentiment tracking across platforms', orientation: 'horizontal' },
      { src: insightiqCompetitorsWeb3, caption: 'Competitor analysis for Web3, Blockchain & Crypto domain', orientation: 'horizontal' },
      { src: insightiqCompetitorsCloud, caption: 'Cloud Computing & SaaS competitor intelligence', orientation: 'horizontal' },
      { src: insightiqAlerts, caption: 'AI-powered intelligent alerts for Quantum Computing', orientation: 'horizontal' },
      { src: insightiqCompetitorsGreentech, caption: 'Green Tech & Energy Innovation competitor analysis with SWOT', orientation: 'horizontal' },
    ],
    summary: 'INSIGHT IQ is a comprehensive strategic intelligence platform that provides real-time market intelligence, competitive analysis, and automated insights across 10 major technology sectors. Built for strategic decision-makers and market analysts.',
    role: 'Full-stack Developer — Platform architecture, analytics dashboard, AI-powered insights engine',
    tech: ['React 18', 'FastAPI', 'Python', 'Recharts', 'TextBlob', 'Tailwind CSS', 'Pandas', 'Vite'],
    problem: 'Strategic decision-makers struggle to track competitors across multiple technology domains with fragmented data sources, manual sentiment analysis, and delayed insights. Traditional market intelligence tools lack real-time analytics and AI-powered trend detection.',
    approach: `Built a comprehensive web platform with:
• Multi-Domain Coverage: Track 10 technology sectors with 50+ key competitors
• AI-Powered Analytics: Automated sentiment analysis using TextBlob for news and social media
• Interactive Dashboards: 12+ chart types including sentiment trends, market share, and topic clustering
• Intelligent Alerts: AI-driven notifications for mention spikes, sentiment shifts, and emerging trends
• Real-Time Data Processing: FastAPI backend with Pandas for data manipulation and analysis
• Responsive UI: React 18 with Tailwind CSS for mobile-first design
• Data Architecture: CSV-based data ingestion with automated processing pipeline
• Competitive Intelligence Hub: Deep competitor analysis with SWOT analysis and market positioning`,
    challenges: [
      'Processing and analyzing large volumes of news and social media data in real-time',
      'Building accurate sentiment analysis for domain-specific technical content',
      'Creating intuitive visualizations for 12+ different chart types with responsive design',
      'Implementing efficient data caching and state management across domains',
      'Ensuring fast rendering performance with large datasets and complex charts',
    ],
    outcomes: [
      'Successfully tracks 10 technology domains with 50+ competitors',
      '12+ interactive chart types with real-time analytics and export capabilities',
      'AI-powered sentiment analysis processing 1000+ articles and social posts',
      'Intelligent alert system detecting market shifts and emerging trends',
      'GitHub: github.com/tharunkumardeveloper/INSIGHT-IQ-MODULE-4',
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/tharunkumardeveloper/INSIGHT-IQ-MODULE-4' },
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/projects">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 animate-fade-in">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 animate-slide-up">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech: string) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (for projects with gallery) */}
      {project.gallery && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Project Gallery</h2>
              <ImageGallery images={project.gallery} />
            </div>
          </div>
        </section>
      )}

      {/* Videos Section (for projects with videos) */}
      {project.videos && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Project Videos</h2>
              <VideoGallery videos={project.videos} />
            </div>
          </div>
        </section>
      )}

      {/* PDF Presentation (for projects with PDF) */}
      {project.pdfUrl && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <PDFViewer pdfUrl={project.pdfUrl} title="Project Presentation" />
            </div>
          </div>
        </section>
      )}

      {/* External Links (if available) */}
      {project.links && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Live Project Links</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.map((link: any, idx: number) => (
                    <a 
                      key={idx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">My Role</h2>
              <p className="text-muted-foreground">{project.role}</p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Approach & Implementation</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.approach}
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Outcomes & Impact</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Interested in building something similar?
            </h2>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
