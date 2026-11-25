# Academic & Technical Portfolio (Astro + Tailwind CSS)

A dark-mode academic/technical portfolio template built with **Astro 5** and **Tailwind CSS v4**, configured for static deployment on **GitHub Pages**.

## Project Structure

- `src/data/portfolio.ts` — Centralized content (profile, bio, socials, updates, research themes, publications + BibTeX, experience, projects).
- `src/components/` — Modular UI sections (`Navbar`, `Hero`, `Updates`, `Research`, `PublicationCard`, `Experience`, `Projects`, `Footer`).
- `public/images/` — Portrait and 16:9 publication figure assets (replace `portrait.svg` and `papers/fig-*.svg` with your own images).
- `public/cv.pdf` — Placeholder CV file (replace with your real PDF).
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

1. Update `site` (and `base`, if deploying to `https://<username>.github.io/<repo>/`) in `astro.config.mjs`.
2. Push to `main`.
3. In your GitHub repository settings under **Settings → Pages**, set **Source** to **GitHub Actions**.
