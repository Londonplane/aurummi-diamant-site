# Verdant Velocity Astro Notes

## Scope

This is the Astro 6 application for the Aurummi Phase 1 static SEO site. Keep changes aligned with:

- `../docs/superpowers/specs/2026-04-27-aurummi-lab-diamond-site-design.md`
- `../docs/superpowers/plans/2026-04-27-aurummi-phase1.md`

The `docs/superpowers/` name is legacy. The plan is now executed with Codex-native workflow.

## Commands

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run astro -- --help`

## Astro Conventions

- Use the `astro-framework` skill for framework-specific decisions.
- Use static output for Phase 1; Cloudflare Pages can deploy the `dist/` folder without an Astro adapter.
- For Astro 6 content collections, use `src/content.config.ts`, `glob()` from `astro/loaders`, and `z` from `astro/zod`.
- Use MDX for article/product content so future component embeds are possible.
- Use Tailwind CSS v4 through `@tailwindcss/vite` and theme tokens in `src/styles/global.css`; do not add a Tailwind v3-style config unless a future task requires it.
- Prefer static Astro components. Add client hydration only for real browser interactivity.
- Keep SEO metadata and JSON-LD centralized in shared components.

## Phase 1 Boundaries

- No cart, checkout, product database, auth, CMS backend, comments, analytics, or full locale tree.
- English pages are standalone SEO routes, not a full bilingual i18n implementation.
- Product landing pages are Phase 1 placeholders and should be `noindex`.
