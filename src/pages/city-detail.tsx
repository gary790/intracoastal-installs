// City sub-page template — Premium Editorial Design
// $60K visual standard. Location-specific premium treatment.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand, faqList } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { CITIES, CITY_BY_SLUG, type City } from '../data/cities';
import { SERVICE_BY_SLUG } from '../data/services';
import {
  breadcrumbSchema,
  faqSchema,
  citySchema,
} from '../components/Schema';

export function CityDetailPage(slug: string) {
  const city = CITY_BY_SLUG[slug] as City | undefined;
  if (!city) return null;

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Areas', url: '/areas' },
      { name: `${city.name}, NC`, url: `/areas/${city.slug}` },
    ]),
    citySchema(city),
    faqSchema(city.faqs),
  ];

  return Layout({
    title: city.titleTag,
    description: city.metaDescription,
    canonical: `${SITE_URL}/areas/${city.slug}`,
    ogImage: city.ogImage,
    schemas,
    geo: { lat: city.geo.lat, lng: city.geo.lng, placename: `${city.name}, NC`, region: 'US-NC' },
    children: html`
<!-- ═══════════════════════════════════════════════════════════════════════
     HERO — City: Full-width type-driven headline
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="hero grain relative" style="min-height: clamp(420px, 55vh, 600px);">
  <div class="hero__media">
    <img src="${city.image}" alt="Waterfront and dock in ${city.name}, North Carolina" width="1200" height="800" fetchpriority="high" class="img-cover" style="object-position: center 45%;" data-fallback="gradient">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
  </div>

  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(420px, 55vh, 600px);">
    <div class="w-full pb-12 md:pb-16">
      <!-- Breadcrumb -->
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        <span class="mx-2">/</span>
        <a href="/areas" class="hover:text-white transition-colors">Areas</a>
        <span class="mx-2">/</span>
        <span class="text-white/80">${city.name}, NC</span>
      </nav>

      <p class="reveal-blur kicker text-brass/80 mb-3">${city.name.toUpperCase()}, NC · ${city.county.toUpperCase()}</p>
      <h1 class="reveal-blur text-display-xl text-white leading-[1.05] max-w-3xl" style="transition-delay:100ms">${city.h1}</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-xl leading-relaxed" style="transition-delay:200ms">${city.subhead}</p>
      
      <div class="reveal-blur mt-8 flex flex-col sm:flex-row gap-3" style="transition-delay:300ms">
        <a href="/contact?city=${city.slug}" class="btn btn--brass">Book a ${city.name} site visit</a>
        <a href="tel:${BUSINESS.phoneTel}" class="btn btn--outline">${BUSINESS.phoneDisplay}</a>
      </div>
    </div>
  </div>
</section>

<!-- Trust pills -->
${trustStrip(city.trustPills)}

<!-- ═══════════════════════════════════════════════════════════════════════
     LOCAL HOOK + FACTS — Why this city is different
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
      <div class="reveal-left">
        <p class="kicker mb-4">LOCAL EXPERTISE</p>
        <h2 class="text-display-md text-navy mb-6">Why ${city.name} is different</h2>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem]">${city.localHook}</p>
        
        <!-- Map -->
        <div class="mt-10 aspect-[16/9] rounded-xl overflow-hidden border border-neutral-200 bg-sand" data-map-embed data-map-src="${city.mapEmbed}" data-map-title="${city.name}, NC service area map">
          <noscript><iframe src="${city.mapEmbed}" loading="lazy" title="${city.name}, NC map" class="w-full h-full border-0"></iframe></noscript>
        </div>
        <div class="mt-4 flex gap-6 text-sm text-neutral-500">
          <span><strong class="text-navy">County:</strong> ${city.county}</span>
          <span><strong class="text-navy">Coords:</strong> ${city.geo.lat.toFixed(4)}, ${city.geo.lng.toFixed(4)}</span>
        </div>
      </div>

      <div class="reveal-right">
        <p class="kicker mb-4">LOCAL FACTS</p>
        <h2 class="text-display-md text-navy mb-6">What we know about ${city.name}</h2>
        <ul class="space-y-4">
          ${raw(city.facts.map((f, i) => `
          <li class="flex gap-4 items-start p-5 rounded-xl bg-sand/60 border border-transparent hover:border-brass/20 transition-all duration-300" style="transition-delay:${i * 80}ms">
            <span class="shrink-0 w-7 h-7 rounded-full bg-brass/10 flex items-center justify-center mt-0.5">
              <span class="w-2 h-2 rounded-full bg-brass"></span>
            </span>
            <span class="text-neutral-700 text-[0.9375rem] leading-relaxed">${f}</span>
          </li>`).join(''))}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     FEATURED SERVICES — What we build in this city
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-12">
      <p class="kicker mb-4">FEATURED SERVICES</p>
      <h2 class="text-display-lg text-navy">What we build in ${city.name}</h2>
    </div>
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 stagger-children">
      ${raw(city.featuredServices.map((sslug) => {
        const s = SERVICE_BY_SLUG[sslug];
        if (!s) return '';
        return `
      <a href="/services/${s.slug}" class="card group p-6 md:p-7 hover:border-brass/30">
        <div class="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-navy/5">
          <img src="${s.image}" alt="${s.name} in ${city.name}" width="400" height="225" loading="lazy" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        </div>
        <h3 class="font-display text-[1.05rem] text-navy font-semibold group-hover:text-brass transition-colors">${s.name}</h3>
        <p class="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">${s.subhead}</p>
        <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brass opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
          ${s.shortName} in ${city.name} <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </a>`;
      }).join(''))}
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     TESTIMONIALS — City-specific reviews
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-12">
      <p class="kicker mb-4">WHAT ${city.name.toUpperCase()} HOMEOWNERS SAY</p>
      <h2 class="text-display-md text-navy">Real feedback from ${city.name}</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-6 stagger-children">
      ${raw(city.testimonials.map((t) => `
      <article class="card p-7 md:p-8 flex flex-col">
        <div class="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
          ${'<svg class="w-[18px] h-[18px] text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(5)}
        </div>
        <blockquote class="flex-1 text-neutral-600 leading-relaxed italic text-[0.9375rem]">\u201C${t.quote}\u201D</blockquote>
        <footer class="mt-6 pt-5 border-t border-neutral-100">
          <p class="font-display text-[0.875rem] text-navy font-semibold">${t.author}</p>
          <p class="text-[0.75rem] text-neutral-400 mt-0.5">${city.name}, NC · ${t.service}</p>
        </footer>
      </article>`).join(''))}
    </div>
    <p class="reveal mt-6 text-center text-[0.75rem] text-neutral-400 italic">[Placeholder — authentic Google reviews will replace these once provided.]</p>
  </div>
</section>

<!-- Pull Quote -->
${pullQuote(`In ${city.name}, the water teaches you fast. Build for the worst tide and the longest storm — the calm days take care of themselves.`, BUSINESS.founder)}

<!-- FAQ -->
${faqList(city.faqs, `Questions about ${city.name} dock builds`)}

<!-- ═══════════════════════════════════════════════════════════════════════
     ADJACENT AREAS
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-10">
      <p class="kicker mb-4">NEARBY</p>
      <h2 class="text-display-md text-navy">Cities we also serve near ${city.name}</h2>
    </div>
    <div class="flex flex-wrap justify-center gap-3 stagger-children">
      ${raw(city.adjacent.map((aslug) => {
        const a = CITIES.find((c) => c.slug === aslug);
        if (!a) return '';
        return `
      <a href="/areas/${a.slug}" class="group px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-brass hover:shadow-elevated transition-all duration-300 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brass/40 group-hover:bg-brass transition-colors"></span>
        <span class="text-sm font-medium text-navy group-hover:text-brass transition-colors">${a.name}, NC</span>
      </a>`;
      }).join(''))}
    </div>
  </div>
</section>

<!-- Final CTA -->
${ctaBand({ heading: `Talk to us about your ${city.name} project`, btn: `Book a ${city.name} site visit`, btnHref: `/contact?city=${city.slug}` })}
`,
  });
}
