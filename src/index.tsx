import { Hono } from 'hono';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ServicesHubPage } from './pages/services-hub';
import { ServiceDetailPage } from './pages/service-detail';
import { AreasHubPage } from './pages/areas-hub';
import { CityDetailPage } from './pages/city-detail';
import { GalleryPage } from './pages/gallery';
import { ContactPage } from './pages/contact';
import { SERVICES, SERVICE_BY_SLUG } from './data/services';
import { CITIES, CITY_BY_SLUG } from './data/cities';
import { BUSINESS, SITE_URL } from './data/business';

const app = new Hono();

// ---------- Security Headers Middleware (Bible ISO mandate) ----------
app.use('*', async (c, next) => {
  await next();
  c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('X-Frame-Options', 'SAMEORIGIN');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  c.header('X-XSS-Protection', '1; mode=block');
});

// ---------- Page routes ----------
app.get('/', (c) => c.html(HomePage()));
app.get('/about', (c) => c.html(AboutPage()));
app.get('/services', (c) => c.html(ServicesHubPage()));
app.get('/services/:slug', (c) => {
  const slug = c.req.param('slug');
  if (!SERVICE_BY_SLUG[slug]) return c.notFound();
  return c.html(ServiceDetailPage(slug)!);
});
app.get('/areas', (c) => c.html(AreasHubPage()));
app.get('/areas/:slug', (c) => {
  const slug = c.req.param('slug');
  if (!CITY_BY_SLUG[slug]) return c.notFound();
  return c.html(CityDetailPage(slug)!);
});
app.get('/gallery', (c) => c.html(GalleryPage()));
app.get('/contact', (c) => c.html(ContactPage()));

// ---------- robots.txt ----------
app.get('/robots.txt', (c) => {
  const body = `# robots.txt for ${BUSINESS.name}
User-agent: *
Allow: /

# AI crawlers — explicitly allowed (Bible Section J)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  return c.text(body, 200, { 'Content-Type': 'text/plain; charset=utf-8' });
});

// ---------- sitemap.xml ----------
app.get('/sitemap.xml', (c) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls: { loc: string; priority: string; changefreq: string }[] = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.7', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'weekly' },
    ...SERVICES.map((s) => ({
      loc: `/services/${s.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    { loc: '/areas', priority: '0.9', changefreq: 'weekly' },
    ...CITIES.map((ci) => ({
      loc: `/areas/${ci.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    { loc: '/gallery', priority: '0.6', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${SITE_URL}${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;
  return c.text(xml, 200, { 'Content-Type': 'application/xml; charset=utf-8' });
});

// ---------- llms.txt ----------
app.get('/llms.txt', (c) => {
  const svcLines = SERVICES.map(
    (s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.subhead}`
  ).join('\n');
  const cityLines = CITIES.map(
    (ci) => `- [${ci.name}, NC](${SITE_URL}/areas/${ci.slug}): ${ci.subhead}`
  ).join('\n');
  const body = `# ${BUSINESS.name}

> ${BUSINESS.description}

## About

- **Founder:** ${BUSINESS.founder}
- **Founded:** ${BUSINESS.foundingYear} (${BUSINESS.yearsInBusiness}+ years)
- **License:** ${BUSINESS.license}
- **Slogan:** ${BUSINESS.slogan}

## Contact

- **Phone:** ${BUSINESS.phoneDisplay}
- **Email:** ${BUSINESS.email}
- **Address:** ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}
- **Hours:** ${BUSINESS.hours.days} ${BUSINESS.hours.open}\u2013${BUSINESS.hours.close}
- **Website:** ${SITE_URL}/
- **Contact form:** ${SITE_URL}/contact

## Services

${svcLines}

## Service Area (Coastal North Carolina)

${cityLines}

## Credentials & Materials

- North Carolina General Contractor License #100980
- Fully insured (liability + worker\u2019s compensation)
- Marine-grade pressure-treated lumber
- 316 stainless steel fasteners
- USA-made HDPE float drums
- Hot-dipped galvanized framing
- IPE Brazilian hardwood and copper-finish hardware on custom builds
- All pilings driven to refusal

## Permitting Experience

- Pender County CAMA general permits
- New Hanover County CAMA general permits
- Onslow County CAMA general permits
- Town reviews (Topsail Beach, Wrightsville Beach, Carolina Beach, Surf City)
- Figure Eight Island private association coordination
`;
  return c.text(body, 200, { 'Content-Type': 'text/plain; charset=utf-8' });
});

// ---------- 404 ----------
app.notFound((c) =>
  c.html(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Page not found \u00b7 Intracoastal Installs</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen flex items-center justify-center bg-[#F5F1E8] font-sans"><div class="text-center p-8 max-w-md"><p class="text-sm tracking-widest uppercase text-[#C9A961] font-medium mb-3">404</p><h1 class="text-3xl text-[#0B2545] font-serif mb-4">Page not found</h1><p class="text-slate-600 mb-6">The dock you\u2019re looking for drifted off. Head back home or call ${BUSINESS.phoneDisplay}.</p><a href="/" class="inline-block bg-[#0B2545] text-white px-5 py-2.5 rounded-md">Back to home</a></div></body></html>`,
    404
  )
);

export default app;
