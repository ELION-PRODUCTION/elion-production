# Elion Production

Elion Production is a technology-driven film production platform operating within a broader systems ecosystem focused on perception, structure, energy, and intelligence.

The repository is designed as a long-horizon company codebase, not a single-purpose website project. It supports the public corporate site today and is structured to absorb future product layers, developer tooling, documentation systems, and media-facing platform modules over time.

## Positioning

Elion Production develops cinematic properties, research-linked communication assets, and future production technologies inside a larger systems framework.

The current repository supports:

- a corporate website for partners, investors, and collaborators
- structured project and slate content
- investor and technology documentation
- localization for international audiences
- a scalable base for future platform layers such as Q³, AI tools, and backend services

## Core Concepts

The wider Elion system is organized around four ideas:

- Perception: how systems observe, interpret, and communicate the world
- Structure: how knowledge, products, and organizations are arranged into durable frameworks
- Energy: how momentum, capability, and execution are sustained
- Intelligence: how human and machine systems generate insight, coordination, and action

Elion Production is the cinematic and communication-facing layer of that broader logic.

## Repository Structure

```text
elion-production/
├── api/                     # Future backend entry points
├── config/                  # Site and platform configuration
├── docs/                    # Investor, project, and technology documentation
├── localization/            # EN/RU translation content
├── projects/                # Structured project and slate data
├── public/                  # Public static assets
├── scripts/                 # Utilities and validation scripts
├── src/
│   ├── assets/              # Internal design and source assets
│   ├── components/          # Reusable UI components
│   ├── layouts/             # Page layout shells
│   ├── pages/               # Next.js pages
│   └── styles/              # Global design system and page styles
├── .env.example
├── .github/                # CI, ownership, and collaboration templates
├── .gitignore
├── LICENSE
├── package.json
└── tsconfig.json
```

## Running the Project

Requirements:

- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Content and Data Model

The repository keeps presentation and content separated where possible.

- project summaries live in `/projects`
- shared copy and translations live in `/localization`
- investor and technical documentation live in `/docs`
- reusable configuration lives in `/config`

This keeps the public site maintainable as the company expands into additional product and documentation layers.

## Contribution Guidelines

All changes should maintain the repository’s institutional standard:

- keep naming clear and business-appropriate
- separate content from UI logic
- prefer reusable components over page-specific duplication
- avoid introducing framework or dependency sprawl without clear need
- treat documentation as part of the product, not as an afterthought

For contribution workflow details, see [CONTRIBUTING.md]([./CONTRIBUTING.md](https://github.com/ELION-PRODUCTION/elion-production/blob/main/elion-production/CONTRIBUTING.md)).

## Repository Governance

The repository includes:

- `CODEOWNERS` for ownership clarity
- issue templates for structured intake
- a pull request template for review consistency
- a baseline CI workflow for localization validation and production build checks

## License

This repository is provided under a proprietary company license unless explicitly stated otherwise in writing.
