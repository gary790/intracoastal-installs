// Services Hub page — Premium Editorial Design
// $60K visual standard. Showcase all 10 services with cinematic layout.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { SERVICES } from '../data/services';
import {
  breadcrumbSchema,
  itemListSchema,
  localBusinessSchema,
} from '../components/Schema';

export function ServicesHubPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]),
    itemListSchema(SERVICES.map((s) => ({ name: s.name, url: `/services/${s.slug}` }))),
    localBusinessSchema(),
  ];

  return Layout({
    title: 'Marine Construction Services | Floating Docks, Piers, Boat Lifts | Intracoastal Installs',
    description: `10 marine construction services for coastal NC waterfronts. Floating docks, fixed piers, boat lifts, gazebos, pilings, repairs. ${BUSINESS.licenseShort}.`,
    canonical: `${SITE_URL}/services`,
    schemas,
    children: html`
<section class="hero grain relative" style="min-height: clamp(360px, 45vh, 500px);">
  <div class="hero__media">
    <img src="/static/images/hero-aerial.jpg" alt="Aerial view of marine construction on the Intracoastal Waterway" width="1365" height="768" fetchpriority="high" class="img-cover" style="object-position: center 30%;">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/75 to-navy/50"></div>
  </div>
  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(360px, 45vh, 500px);">
    <div class="w-full pb-12 md:pb-16 text-center">
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb"><a href="/" class="hover:text-white transition-colors">Home</a><span class="mx-2">/</span><span class="text-white/80">Services</span></nav>
      <p class="reveal-blur kicker text-brass/80 mb-4">WHAT WE BUILD</p>
      <h1 class="reveal-blur text-display-xl text-white text-balance" style="transition-delay:100ms">Marine Construction Services</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-2xl mx-auto leading-relaxed" style="transition-delay:200ms">Ten specialized services for the coastal North Carolina waterfront \u2014 every build on marine-grade lumber, 316 stainless fasteners, and pilings driven to refusal.</p>
    </div>
  </div>
</section>

${trustStrip(['10 Services', '30+ Years Construction', 'NC GC #100980', 'Fully Insured', '8 Cities'])}

<section class="section">
  <div class="container max-w-wide">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      ${raw(SERVICES.map((s, i) => `
      <a href="/services/${s.slug}" class="card group hover:border-brass/30 overflow-hidden">
        <div class="aspect-[16/9] overflow-hidden bg-sand">
          <img src="${s.image}" alt="${s.name} in coastal NC" width="400" height="225" loading="${i < 3 ? 'eager' : 'lazy'}" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        </div>
        <div class="p-6 md:p-7">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-[2rem] font-display font-bold text-brass/20">${String(i + 1).padStart(2, '0')}</span>
            <div class="h-px flex-1 bg-neutral-100"></div>
          </div>
          <h2 class="font-display text-[1.15rem] text-navy font-semibold group-hover:text-brass transition-colors">${s.name}</h2>
          <p class="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">${s.subhead}</p>
          <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brass opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">Explore this service <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </a>`).join(''))}
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-12">
      <p class="kicker mb-4">THE COASTAL-GRADE BUILD STANDARD</p>
      <h2 class="text-display-lg text-navy">What goes into every build</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
      ${raw([
        { label: 'Marine-grade lumber', desc: 'Pressure-treated from the treatment yard, never a big-box store.' },
        { label: '316 stainless fasteners', desc: 'On the saltwater side. Galvanized fails in 5-7 years here.' },
        { label: 'Pilings driven to refusal', desc: 'Not to a number. To refusal. Every single one.' },
        { label: 'USA-made components', desc: 'HDPE float drums, galvanized frames, stainless cables.' },
      ].map(c => `
      <div class="card p-7 text-center">
        <span class="inline-flex w-12 h-12 rounded-full bg-brass/10 items-center justify-center mb-4"><span class="w-3 h-3 rounded-full bg-brass"></span></span>
        <h3 class="font-display text-[1rem] text-navy font-semibold mb-2">${c.label}</h3>
        <p class="text-sm text-neutral-500 leading-relaxed">${c.desc}</p>
      </div>`).join(''))}
    </div>
  </div>
</section>

${pullQuote('Every board, fastener, and piling is listed on the estimate. No \"miscellaneous,\" no surprise change orders. The estimate is the estimate.', 'Mark Lipe, Founder', 'FROM MARK LIPE')}

${ctaBand({ heading: 'Ready to talk about your project?', sub: 'Free site evaluation, written estimate within one business day.' })}
`,
  });
}
