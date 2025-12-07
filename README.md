# Portfolio Website

A modern, responsive portfolio website showcasing innovative projects in AI, fitness technology, agriculture, and web development.

## Featured Projects

### 🏋️ Talent Track - AI-Powered Fitness Analysis Platform

**Live Demo**: https://talent-track-cyber.vercel.app

Talent Track is an AI-powered fitness analysis platform that turns any smartphone camera into a professional-grade workout evaluation system with no gym, no wearables, and no subscriptions.

**Key Features**:
- Real-time AI pose detection using MediaPipe (33 body landmarks)
- Rep counting, joint-angle tracking & live form scoring (0–100)
- Ghost Mode – train against a perfect AI skeleton
- Evaluator Test Mode – instant performance analysis without video upload
- FitFranken AI chatbot – explains performance & gives coaching tips
- Badge & streak system for motivation and habit building
- Full privacy-first design – all processing happens locally in the browser

**Development**: Built in just 10.5 days using Kiro AI, saving over 62% development time with spec-driven dev, steering docs, agent hooks, and MCP extensions.

**Impact**: This project is an attempt to resurrect accessible fitness technology for students, para-athletes, and anyone who only has a phone but still wants elite-level feedback.

---

### 🤖 JARVIS - AI Personal Assistant (Google Cloud Run Hackathon)

**YouTube Demo**: https://www.youtube.com/watch?v=2jOhWb1g8oQ

A JARVIS-inspired AI agent built for the Google Cloud Run Hackathon. An AI-powered offline conversational agent that switches seamlessly to online mode when connected.

**Key Features**:
- Chat naturally with users (voice & text modes)
- Send emails via Gmail API
- Schedule meetings using Google Meet
- Read and summarize Google Docs
- Use Google Vision API for image understanding
- Manage a contact section for quick communication
- Handle file attachments effortlessly

**Technical Achievement**: The goal was to create a personal AI assistant that works even when offline, but becomes supercharged with cloud capabilities when online. This project deepened understanding of Google Cloud Console, API integrations, and hybrid AI systems — bridging the gap between local intelligence and cloud power.

---

### 🌱 Aeroponics Vertical Farming System

An innovative vertical farming solution using aeroponics technology to grow plants without soil, maximizing space efficiency and resource conservation.

**Key Features**:
- Vertical tower design for space optimization
- Automated nutrient delivery system
- IoT-enabled monitoring and control
- Water-efficient aeroponic misting
- Sustainable urban agriculture solution

**Impact**: Addresses food security and sustainable agriculture challenges in urban environments.

---

## Technology Stack

This portfolio is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn-ui components
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS Animate
- **Icons**: Lucide React

## Project Structure

```
├── public/
│   ├── images/          # Project screenshots and assets
│   ├── documents/       # PDF files and documents
│   └── videos/          # Video demonstrations
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── data/           # Project data and content
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
└── aeroponics update/  # Aeroponics project screenshots
└── jarvis/             # JARVIS project screenshots
└── talent track new info/ # Talent Track project screenshots
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```sh
npm run build
# or
bun run build
```

### Preview Production Build

```sh
npm run preview
# or
bun preview
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Adding New Projects

1. Add project images to `public/images/`
2. Update project data in `src/data/wordpressProjects.ts`
3. Follow the existing project structure for consistency

## Deployment

This project can be deployed to various platforms:

- **Vercel** (Recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **Lovable** - Visit the [Lovable Project](https://lovable.dev/projects/d0111399-b54b-4e54-9aac-988f402023d5)

## Contributing

This is a personal portfolio project. However, feedback and suggestions are always welcome!

## License

All rights reserved. This portfolio and its projects are the intellectual property of the owner.

## Contact

For collaborations, feedback, or inquiries about any of the featured projects, please use the contact form on the website.

---

**Note**: The Talent Track, JARVIS, and Aeroponics projects represent innovative solutions in their respective domains, showcasing expertise in AI/ML, cloud computing, IoT, and sustainable technology.
