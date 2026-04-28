export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE || 'https://aurummi-diamant-site.pages.dev';

  return new Response(`User-agent: *
Allow: /
Sitemap: ${site}/sitemap-index.xml
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
