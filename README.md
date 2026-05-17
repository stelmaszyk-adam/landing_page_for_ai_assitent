# AI Sekretarka — Landing Page

Landing page for an AI phone receptionist SaaS targeting appointment-based businesses (medical clinics, dentists, law firms, home services).

## Tech Stack

- **Vite + React** — fast development and builds
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite` plugin
- **Framer Motion** — scroll-triggered animations
- **Lucide React** — icon library
- **Inter** — font via Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component
├── index.css             # Tailwind imports & theme
└── components/
    ├── Navbar.jsx        # Sticky nav with mobile menu
    ├── Hero.jsx          # Hero section with AI chat mockup
    ├── ProblemSolution.jsx # Pain vs. solution comparison
    ├── HowItWorks.jsx   # 3-step setup flow
    ├── Features.jsx      # 6 features grid
    ├── IndustryUseCases.jsx # 4 industry cards
    ├── Testimonials.jsx  # Customer testimonials
    ├── FinalCTA.jsx      # Call-to-action section
    ├── Footer.jsx        # Multi-column footer
    └── ui/
        ├── Button.jsx    # Reusable CTA button
        ├── SectionWrapper.jsx # Animated section container
        └── Card.jsx      # Feature card component
```
