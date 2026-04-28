# Verdant Velocity

Astro 6 static site for Aurummi Phase 1: a German-market SEO site for lab-grown diamonds, with German pillar/cluster content, a B2B wholesale inquiry page, and standalone English SEO pages.

## Project Context

- Specification: `../docs/superpowers/specs/2026-04-27-aurummi-lab-diamond-site-design.md`
- Implementation plan: `../docs/superpowers/plans/2026-04-27-aurummi-phase1.md`
- Codex guidance: `../AGENTS.md` and `AGENTS.md`
- Astro skill: `../.agents/skills/astro-framework`

The `docs/superpowers/` directory name is historical from the Claude Code migration. The files remain the active project spec and plan.

## Commands

Run these from this directory:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the built output |
| `npm run astro -- --help` | Show Astro CLI help |

## Phase 1 Notes

- Keep the site static for Cloudflare Pages.
- Use MDX content collections for articles and product placeholders.
- Use Tailwind CSS v4 through `@tailwindcss/vite`.
- Centralize SEO tags and JSON-LD in shared Astro components.
- Do not add e-commerce, authentication, a CMS backend, analytics, or a full i18n setup in Phase 1.

## Deployment

Deploy on Cloudflare Pages with:

- Project root: `/`
- Build command: `npm run build`
- Output directory: `dist`
- Pages project name: `aurummi-diamant-site`
- Deploy command: leave empty for Git-connected Pages deployments
- Environment variable now: leave `SITE_URL` unset to use `https://aurummi-diamant-site.pages.dev`
- Environment variable after buying the domain: set `SITE_URL=https://aurummi-diamant.de`

Full deployment notes live in `../docs/deployment-cloudflare-pages.md`.
