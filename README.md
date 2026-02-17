# Personal CV — Shivam Chaudhary

A single-page portfolio and CV application.

**Live:** [shivam-cv.space](https://shivam-cv.space)

## Tech Stack

- **Framework:** Nuxt 4 (Vue 3 Composition API)
- **UI:** Nuxt UI 4, Tailwind CSS v4
- **Language:** TypeScript
- **Linting:** Biome
- **Package Manager:** Bun
- **Deployment:** Docker + Caddy, automated via GitHub Actions

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed

### Install Dependencies

```bash
bun install
```

### Development

```bash
bun run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
app/
├── components/
│   ├── base/       — Reusable UI primitives (wrapping Nuxt UI)
│   └── cv/         — CV section components
├── composables/    — Vue composables (SEO, etc.)
├── data/           — Static typed CV data
├── types/          — TypeScript interfaces
├── layouts/        — Page layouts
├── pages/          — File-based routing
└── utils/          — Auto-imported utility functions
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that:

1. Builds a Docker image (Bun + Alpine)
2. Pushes it to GitHub Container Registry
3. Deploys to the server via SSH with Docker Compose + Caddy as reverse proxy
