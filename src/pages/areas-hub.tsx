// Areas Hub page — Premium Editorial Design
// $60K visual standard. Showcase all 8 cities with premium layout.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { CITIES } from '../data/cities';
import {
  breadcrumbSchema,
  itemListSchema,
  localBusinessSchema,
} from '../components/Schema';

export function AreasHubPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas' },
    ]),
    itemListSchema(CITIES.map((c) => ({ name: `${c.name}, NC`, url: `/areas/${c.slug}` }))),
    localBusinessSchema(),
  ];

  return Layout({
    title: 'Service Areas | 8 Coastal NC Cities | Intracoastal Installs',
    description: `Dock builder serving 8 coastal NC cities: Hampstead, Wilmington, Topsail Beach, Wrightsville Beach, Carolina Beach, Figure Eight Island, Surf City, Sneads Ferry. ${BUSINESS.licenseShort}.`,
    canonical: `${SITE_URL}/areas`,
    schemas,
    children: html`
<section class="hero grain relative" style="min-height: clamp(360px, 45vh, 500px);">
  <div class="hero__media">
    <img src="/static/images/hero-home.jpg" alt="Coastal North Carolina waterway at golden hour" width="1365" height="768" fetchpriority="high" class="img-cover" style="object-position: center 60%;">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/75 to-navy/50"></div>
  </div>
  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(360px, 45vh, 500px);">
    <div class="w-full pb-12 md:pb-16 text-center">
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb"><a href="/" class="hover:text-white transition-colors">Home</a><span class="mx-2">/</span><span class="text-white/80">Areas</span></nav>
      <p class="reveal-blur kicker text-brass/80 mb-4">SERVICE AREA</p>
      <h1 class="reveal-blur text-display-xl text-white text-balance" style="transition-delay:100ms">Eight Cities. Three Counties. One Coast.</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-2xl mx-auto leading-relaxed" style="transition-delay:200ms">We work the coastal North Carolina corridor from Sneads Ferry to Carolina Beach. Our crew is based in Hampstead \u2014 most of the coast is within a 45-minute trailer haul.</p>
    </div>
  </div>
</section>

${trustStrip(['Hampstead HQ', '3 Counties', 'CAMA Experts', '45-Min Reach', '30+ Years Construction'])}

<section class="section">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <h2 class="text-display-lg text-navy">Choose your city</h2>
      <p class="mt-4 text-neutral-600 max-w-xl mx-auto">Select your city to see local expertise, permit knowledge, and featured services available in your area.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
      ${raw(CITIES.map((c) => `
      <a href="/areas/${c.slug}" class="card group p-6 hover:border-brass/30 text-center">
        <div class="w-14 h-14 mx-auto rounded-full bg-sand flex items-center justify-center mb-5 group-hover:bg-brass/10 transition-colors">
          <svg class="w-6 h-6 text-brass" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
        </div>
        <h2 class="font-display text-[1.1rem] text-navy font-semibold group-hover:text-brass transition-colors">${c.name}</h2>
        <p class="text-xs text-neutral-400 mt-1 mb-3">${c.county}</p>
        <p class="text-sm text-neutral-500 line-clamp-2 leading-relaxed">${c.subhead}</p>
        <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brass opacity-0 group-hover:opacity-100 transition-all duration-300">Explore <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </a>`).join(''))}
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div class="reveal-left">
        <p class="kicker mb-4">PERMIT EXPERTISE</p>
        <h2 class="text-display-lg text-navy mb-6">Three counties, one crew that files in all of them</h2>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem] mb-5">CAMA paperwork in Pender, New Hanover, and Onslow every month. Town reviews in Topsail Beach, Wrightsville Beach, Carolina Beach, and Surf City. Figure Eight Island\u2019s private association coordination.</p>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem]">The wrong permit on the wrong side of a swing bridge costs you a season. We know which county your property sits in before we drive a single piling.</p>
      </div>
      <div class="reveal-right grid grid-cols-3 gap-5 text-center">
        ${raw([
          { name: 'Pender County', cities: 'Hampstead \u00b7 Topsail Beach \u00b7 Surf City' },
          { name: 'New Hanover County', cities: 'Wilmington \u00b7 Wrightsville \u00b7 Carolina \u00b7 Figure Eight' },
          { name: 'Onslow County', cities: 'Surf City (north) \u00b7 Sneads Ferry' },
        ].map(county => `
        <div class="card p-5">
          <p class="font-display text-sm text-navy font-semibold mb-2">${county.name}</p>
          <p class="text-xs text-neutral-400 leading-relaxed">${county.cities}</p>
        </div>`).join(''))}
      </div>
    </div>
  </div>
</section>

${pullQuote('The wrong permit on the wrong side of a swing bridge costs you a season. We file CAMA paperwork in three counties every month \u2014 we do not make that mistake.', 'Mark Lipe, Founder', 'FROM MARK LIPE')}

${ctaBand({ heading: 'Find us on your waterfront', sub: 'Free site evaluation anywhere in our eight-city service area. Written estimate within one business day.' })}
`,
  });
}
