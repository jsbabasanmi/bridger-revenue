# Bedrock - AI Business Systems Website

**Tagline:** AI systems built to last. The foundation for intelligent business.

## Overview

Bedrock is an AI implementation company starting in Nigeria that builds AI Business Systems - not generic AI tools, but integrated systems around how businesses actually work. This website communicates our product architecture, implementation methodology, and services-to-software-to-platform progression.

## Core Positioning

**Primary Message:**  
"We don't sell AI tools. We build AI systems around the way your business works."

**Supporting Message:**  
"Start with one workflow. Prove the value. Then build the next system."

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
bedrock/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── systems/           # System detail pages
│   ├── industries/        # Industry pages
│   ├── solutions/         # Solution pages
│   ├── how-we-work/       # Methodology page
│   └── about/             # About page
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── diagrams/         # Visualization components
├── content/              # Content data
│   ├── systems.ts        # System definitions
│   ├── modules.ts        # Module definitions
│   ├── workflows.ts      # Workflow examples
│   └── industries.ts     # Industry data
├── lib/                  # Utilities
│   ├── utils.ts         # Helper functions
│   └── types.ts         # TypeScript types
└── public/              # Static assets
\`\`\`

## Design System

### Brand Identity

- **Name:** Bedrock
- **Aesthetic:** Premium B2B - precise, editorial, technical, trustworthy
- **Voice:** Confident but not hyperbolic, honest about boundaries

### Colors

- **Primary (Slate/Charcoal):** Deep grays for text and structure
- **Accent (Warm Amber):** #e89110 - used sparingly for CTAs and highlights
- **Background:** Cream (#fafaf8), White, Slate (#f8f9fa)

### Typography

- **Headings:** Crimson Pro (serif) - authority and editorial feel
- **Body:** Inter (sans-serif) - clarity and readability
- **Mono:** JetBrains Mono - technical details

### Visual Language

- Architectural diagrams
- Flow charts and system schematics
- Before/After comparisons
- Process timelines
- No cyberpunk, no glowing brains, no generic AI imagery

## Content Principles

### What We Say

- Concrete workflows over abstract AI claims
- Operational language over transformation hype
- Specific examples over vague promises
- Honest capability boundaries
- Nigerian context without limitation framing

### What We Avoid

- AI buzzwords: "revolutionary", "transform", "next-generation"
- Fake testimonials, case studies, statistics
- Generic "AI-powered" everything
- Overpromising capabilities
- Hiding services-to-product progression

### Content Labeling

- **Example Workflow:** Clearly label demonstrations
- **Available Now:** What can genuinely be deployed
- **Productized:** Standardized capabilities
- **Roadmap:** Future platform concepts

## Site Architecture

### Homepage (12-section narrative)

1. Hero
2. Problem
3. What We Do
4. System Library
5. How It Works (workflow deep dive)
6. Modularity
7. Human + AI
8. Integration
9. Implementation
10. ROI
11. Expansion
12. CTA

### Core Systems (6)

1. **AI Revenue System** - Lead capture through retention
2. **AI Customer Operations** - Service, support, onboarding
3. **AI Finance Operations** - Invoice, AR, reconciliation
4. **AI Procurement** - RFQs, suppliers, approvals
5. **AI Document Operations** - Intake, extraction, routing
6. **AI Management Intelligence** - KPIs, reporting, alerts

### Industries (9)

Financial Services • Healthcare • Distribution & Commerce • Professional Services • Real Estate • Manufacturing • Logistics • Education • Export & International Trade

## Content Management

### Adding a New System

1. Add system data to `content/systems.ts`
2. Add related modules to `content/modules.ts`
3. Add workflows to `content/workflows.ts`
4. System page auto-generates at `/systems/[slug]`

### Adding a New Industry

1. Add industry data to `content/industries.ts`
2. Industry page auto-generates at `/industries/[slug]`

### Adding a New Guide

1. Create MDX file in `content/guides/`
2. Add frontmatter metadata
3. Guide auto-appears in resources section

## Development Guidelines

### Component Patterns

- Use TypeScript interfaces for all props
- Implement responsive designs mobile-first
- Ensure accessibility (ARIA labels, keyboard navigation)
- Use Framer Motion for scroll animations
- Keep components focused and reusable

### Performance

- Lazy load images with Next.js Image component
- Code-split with dynamic imports
- Minimize client-side JavaScript
- Target Lighthouse scores: 90+ across all metrics

### Accessibility

- WCAG AA minimum
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigable
- Screen reader friendly

## Deployment

The site is designed to be deployed on Vercel, but works on any Next.js-compatible platform.

### Environment Variables

\`\`\`bash
# Add to .env.local
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## Implementation Status

- [x] **Task 1:** Project setup & brand foundation
- [ ] **Task 2:** Core component library
- [ ] **Task 3:** Content architecture & data layer
- [ ] **Task 4-7:** Homepage sections
- [ ] **Task 8-9:** System detail pages
- [ ] **Task 10:** How We Work methodology
- [ ] **Task 11:** Industry pages
- [ ] **Task 12:** Solution pages
- [ ] **Task 13:** Diagram components
- [ ] **Task 14:** Resources section
- [ ] **Task 15:** About page
- [ ] **Task 16:** Assessment booking
- [ ] **Task 17:** Navigation polish
- [ ] **Task 18:** SEO optimization
- [ ] **Task 19:** Content review
- [ ] **Task 20:** Accessibility audit
- [ ] **Task 21:** Performance optimization
- [ ] **Task 22:** Documentation

## License

Proprietary - All rights reserved

## Contact

For questions about this project, contact the Bedrock team.
