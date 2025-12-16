# West Papua Care Website

Website for West Papua Care, a community-led marine conservation organization protecting Raja Ampat's biodiversity.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page + team subpage
│   ├── approach/           # Our Approach page
│   ├── contact/            # Contact page
│   ├── get-involved/       # Get Involved page
│   ├── impact/             # Impact page
│   ├── privacy/            # Privacy Policy page
│   ├── project/            # Project Overview page
│   ├── globals.css         # Global styles + CSS variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, Mission, etc.)
│   └── ui/                 # Reusable UI components (Button)
└── lib/
    ├── data/               # Static data (navigation)
    └── utils.ts            # Utility functions (cn)
```

## Color Palette

CSS variables defined in `globals.css`:

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-forest-green-deep` | `#0A2D3D` | Header, hero, dark sections |
| `--color-forest-green` | `#1A5F7A` | Footer |
| `--color-cream` | `#F0F7FA` | Light section backgrounds |
| `--color-burnt-orange` | `#D3640F` | CTAs, buttons, interactive elements |
| `--color-navy-accent` | `#0a1628` | Accent text/borders on light backgrounds |
| `--color-charcoal` | `#2D3748` | Body text |
| `--color-gray` | `#64748B` | Secondary text |

## Key Files

- **Navigation:** `src/lib/data/navigation.ts` - Header/footer links
- **Styling:** `src/app/globals.css` - CSS variables, global styles
- **Components:** `src/components/ui/button.tsx` - Button variants

## Development Notes

- Use `--color-burnt-orange` for CTAs and buttons only
- Use `--color-navy-accent` for accent text/borders on light backgrounds
- All pages use the `PageHero` component for consistent headers
- Icons use Lucide React library

## Scripts

```bash
pnpm dev      # Start dev server with Turbopack
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```
