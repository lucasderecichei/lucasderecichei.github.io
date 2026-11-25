# Academic & Technical Portfolio (Astro + Tailwind CSS)

A dark-mode academic/technical portfolio template built with **Astro 5** and **Tailwind CSS v4**, configured for static deployment on **GitHub Pages** (`https://lucasderecichei.github.io`).

## Project Structure

- `src/data/portfolio.ts` — Centralized content (currently empty placeholder; fill in profile, bio, socials, updates, research themes, publications, experience, and projects when ready).
- `src/components/` — Modular UI sections (`Navbar`, `Hero`, `Updates`, `Research`, `PublicationCard`, `Experience`, `Projects`, `Footer`).
- `public/` — Place static assets here (e.g. `images/portrait.jpg`, `images/papers/...`, `cv.pdf`).
- `.github/workflows/deploy.yml` — Automated GitHub Actions workflow for GitHub Pages.

## Local Development

Install **Node.js 20+** (or 22 LTS), then run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

1. Push to `main`.
2. In your GitHub repository settings under **Settings → Pages**, set **Source** to **GitHub Actions**.
