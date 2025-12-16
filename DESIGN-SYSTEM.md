# West Papua Care

## Website Design Presentation

**Community-Led Marine Conservation in Raja Ampat**

*Traditional indigenous governance meets conservation science*

December 2025

---

## Project Overview

West Papua Care is a community-led marine conservation organization protecting 250 km² of coral reefs in Raja Ampat, Indonesia - the heart of the Coral Triangle and the most biodiverse marine ecosystem on Earth.

| Metric | Value |
|--------|-------|
| Protected Area | 250 km² |
| Villages Engaged | 10+ |
| World's Coral Species | 75% |
| Fish Species | 1,600+ |

---

## Design System

### Color Palette

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Abyssal Blue** | `#0A2D3D` | `--color-forest-green-deep` | Header, hero, dark sections |
| **Ocean Teal** | `#1A5F7A` | `--color-forest-green` | Footer background |
| **Sea Foam** | `#F0F7FA` | `--color-cream` | Light section backgrounds |
| **Burnt Orange** | `#D3640F` | `--color-burnt-orange` | CTAs, buttons, interactive elements |
| **Navy Accent** | `#0a1628` | `--color-navy-accent` | Accent text/borders on light backgrounds |
| **Charcoal** | `#1A1A1A` | `--color-charcoal` | Body text |
| **Gray** | `#6B6B6B` | `--color-gray` | Secondary text |
| **Off White** | `#FFFFFF` | `--color-off-white` | White backgrounds, inverse text |

### Typography

| Element | Font Family | Weight | Size Range |
|---------|-------------|--------|------------|
| Headings | Montserrat | 600-700 | 24px - 64px (clamp) |
| Body Text | Open Sans | 400 | 16px - 20px |
| Navigation | Montserrat | 500 | 14px |
| Buttons | Montserrat | 600 | 16px - 18px |

### Button Styles

**Primary CTA Button**
- Background: Burnt Orange (`#D3640F`)
- Text: White
- Hover: Darker orange (`#b8580c`)
- Use for: Main calls-to-action (Donate, Support, Get Involved)

**Secondary Button**
- Background: Ocean Teal (`#1A5F7A`)
- Text: White
- Hover: Darker teal (`#145064`)
- Use for: Secondary actions (Learn More, View Details)

**Outline Button**
- Border: Current color
- Background: Transparent
- Use for: Tertiary actions

---

## Key Website Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Fully optimized for desktop, tablet, and mobile devices with adaptive layouts |
| **Modern Tech Stack** | Built with Next.js 16 (App Router), Tailwind CSS v4 for fast performance |
| **Accessible** | WCAG compliant with proper semantic HTML and keyboard navigation |
| **SEO Optimized** | Structured metadata, meta tags, and performance optimization |
| **Content-Rich** | Comprehensive information about the project, approach, and impact |
| **Call-to-Action** | Clear donation and get-involved pathways throughout the site |

---

## Website Pages

### Homepage (`/`)

The homepage introduces visitors to the mission with:
- Hero section with key messaging
- Stats bar with impact metrics
- Mission statement with quote
- Community-led approach overview
- Challenge/threats section
- Partners carousel
- Final call-to-action

**Sections:** Hero → Stats Bar → Mission → Approach → Challenge → Partners → CTA

---

### About Page (`/about`)

Tells the story of West Papua Care:
- Origin story
- Mission statement (highlighted box)
- Vision
- Our Values (6 cards with Lucide icons)
- Why Raja Ampat
- Join CTA

**Subpage:** `/about/team` - Team member profiles

---

### Project Page (`/project`)

Details the Marine Protected Area project:
- Project vision and goals
- Quick Facts sidebar (location, area, communities, biodiversity)
- Project goals list
- Timeline with milestones
- Impact stats
- Get Involved CTA

---

### Approach Page (`/approach`)

Explains the community-led methodology:
- Why community-led conservation
- Core principles (6 cards with icons)
- Methodology phases with status indicators
- Learn More CTA

---

### Impact Page (`/impact`)

Tracks measurable outcomes:
- Current status overview
- Impact statistics (6 metric cards)
- Timeline & milestones
- Expected outcomes (3 categories)
- Transparency commitment
- Support CTA

---

### Get Involved Page (`/get-involved`)

Multiple engagement pathways:
- Donation options (One-time, Monthly, Major gifts)
- Impact levels ($50 - $10,000)
- Partnership types (Corporate, Research, NGO)
- Career opportunities
- Stay Connected CTA

---

### Contact Page (`/contact`)

Contact information and form:
- Email contact with icon
- Project location
- Response time notice
- Contact form (Name, Email, Subject, Message)
- Privacy policy link

---

### Privacy Page (`/privacy`)

Standard privacy policy sections:
- Introduction
- Information We Collect
- How We Use Your Information
- Information Sharing
- Data Security
- Your Rights
- Cookies
- Contact

---

## Page Structure

| Route | Page | Key Sections |
|-------|------|--------------|
| `/` | Homepage | Hero, Stats, Mission, Approach, Challenge, Partners, CTA |
| `/about` | About | Story, Mission, Vision, Values |
| `/about/team` | Team | Team member profiles |
| `/project` | Project | Overview, Goals, Timeline, Impact |
| `/approach` | Approach | Methodology, Principles |
| `/impact` | Impact | Metrics, Milestones, Outcomes |
| `/get-involved` | Get Involved | Donate, Partner, Careers |
| `/contact` | Contact | Form, Information |
| `/privacy` | Privacy | Privacy Policy |

---

## Technical Specifications

### Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | Next.js 16 (App Router) | Modern React framework with SSR/SSG |
| Styling | Tailwind CSS v4 | Utility-first CSS framework |
| Language | TypeScript | Type-safe JavaScript |
| Icons | Lucide React | SVG icon library |
| UI Components | Radix UI | Accessible component primitives |
| Package Manager | pnpm | Fast, efficient package manager |
| Build Tool | Turbopack | Fast development builds |

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About + Team pages
│   ├── approach/           # Approach page
│   ├── contact/            # Contact page
│   ├── get-involved/       # Get Involved page
│   ├── impact/             # Impact page
│   ├── privacy/            # Privacy Policy
│   ├── project/            # Project Overview
│   ├── globals.css         # Design system + CSS variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Reusable page sections
│   └── ui/                 # Button, form components
└── lib/
    ├── data/               # Navigation, static data
    └── utils.ts            # Utility functions
```

---

## Design Tokens

### Spacing Scale

| Token | Value |
|-------|-------|
| `--spacing-xs` | 0.25rem (4px) |
| `--spacing-sm` | 0.5rem (8px) |
| `--spacing-md` | 1rem (16px) |
| `--spacing-lg` | 1.5rem (24px) |
| `--spacing-xl` | 2rem (32px) |
| `--spacing-2xl` | 3rem (48px) |
| `--spacing-3xl` | 4rem (64px) |

### Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | 4px |
| `--radius` | 6px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |

### Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) |
| `--shadow` | 0 4px 12px rgba(0,0,0,0.08) |
| `--shadow-md` | 0 6px 16px rgba(0,0,0,0.12) |
| `--shadow-lg` | 0 10px 24px rgba(0,0,0,0.15) |

---

## Component Patterns

### Section Label
```
[ SECTION NAME ]
```
- Font: Montserrat, 14px, uppercase
- Letter spacing: 0.1em
- Color: Gray on light backgrounds, white/70% on dark

### Page Hero
- Background: Abyssal Blue (`#0A2D3D`)
- Label + Title + Subtitle pattern
- Centered text, white color

### Stats Cards
- Border-left: 4px Navy Accent
- Value: Navy Accent, bold
- Background: Sea Foam

### Timeline Cards
- Border-left: 4px Navy Accent
- Year label: Navy Accent, uppercase
- Status badge: Ocean Teal (completed) or Burnt Orange (in progress)

### CTA Boxes
- Light: Sea Foam background, centered text
- Dark: Ocean Teal background, white text

---

## Deployment

### Recommended: Vercel
- Free tier available
- Automatic deployments from GitHub
- Built-in analytics
- Edge functions support

### Alternative: Netlify
- Similar features to Vercel
- Free tier with generous limits

### Commands
```bash
pnpm install    # Install dependencies
pnpm dev        # Development server (localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
```

---

## Contact Information

| Channel | Contact |
|---------|---------|
| Email | westpapuacare@gmail.com |
| Instagram | @westpapuacareorg |
| YouTube | @WestPapuaCare |

---

**Repository:** https://github.com/ekaearth111/west-papua-mpa

**Development Server:** http://localhost:3000
