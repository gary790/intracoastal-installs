// Service sub-page template — Premium Editorial Design
// $60K visual standard. Immersive hero, editorial storytelling, premium cards.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand, faqList, processSteps } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { SERVICES, SERVICE_BY_SLUG, type Service } from '../data/services';
import { CITIES } from '../data/cities';
import {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  howToSchema,
  faqSchema,
} from '../components/Schema';

export function ServiceDetailPage(slug: string) {
  const svc = SERVICE_BY_SLUG[slug] as Service | undefined;
  if (!svc) return null;

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: svc.name, url: `/services/${svc.slug}` },
    ]),
    serviceSchema(svc),
    howToSchema(svc),
    faqSchema(svc.faqs),
    localBusinessSchema(),
  ];

  return Layout({
    title: svc.titleTag,
    description: svc.metaDescription,
    canonical: `${SITE_URL}/services/${svc.slug}`,
    ogImage: svc.ogImage,
    schemas,
    children: html`
<!-- ═══════════════════════════════════════════════════════════════════════
     HERO — Service Detail: Editorial 2-column split
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="hero grain relative" style="min-height: clamp(480px, 65vh, 680px);">
  <div class="hero__media">
    <img src="${svc.image}" alt="${svc.name} construction in coastal North Carolina" width="1200" height="800" fetchpriority="high" class="img-cover" style="object-position: center 40%;" data-fallback="gradient">
    <div class="hero__overlay bg-gradient-to-r from-navy via-navy/[0.92] via-55% to-navy/40 md:from-navy md:via-navy/[0.85] md:via-50% md:to-navy/30"></div>
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/80 to-transparent"></div>
  </div>

  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(480px, 65vh, 680px);">
    <div class="w-full pb-12 md:pb-16">
      <!-- Breadcrumb -->
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        <span class="mx-2">/</span>
        <a href="/services" class="hover:text-white transition-colors">Services</a>
        <span class="mx-2">/</span>
        <span class="text-white/80">${svc.name}</span>
      </nav>

      <div class="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-end">
        <div>
          <p class="reveal-blur kicker text-brass/80 mb-4">${svc.name.toUpperCase()}</p>
          <h1 class="reveal-blur text-display-xl text-white leading-[1.05]" style="transition-delay:100ms">${svc.h1}</h1>
          <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-xl leading-relaxed" style="transition-delay:200ms">${svc.subhead}</p>
        </div>
        <div class="reveal-blur hidden md:flex flex-col sm:flex-row gap-3" style="transition-delay:300ms">
          <a href="/contact?service=${svc.slug}" class="btn btn--brass">Get my free estimate</a>
          <a href="tel:${BUSINESS.phoneTel}" class="btn btn--outline">${BUSINESS.phoneDisplay}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trust pills -->
${trustStrip(svc.trustPills)}

<!-- ═══════════════════════════════════════════════════════════════════════
     PROBLEM + SOLUTION — Split editorial layout
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
      <!-- The Problem -->
      <div class="reveal-left">
        <p class="kicker mb-4">THE CHALLENGE</p>
        <h2 class="text-display-md text-navy mb-6">Why this matters on coastal NC</h2>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem]">${svc.problem}</p>
        
        <!-- Materials badge grid -->
        <div class="mt-10">
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-4">MATERIALS WE USE</p>
          <div class="flex flex-wrap gap-2">
            ${raw(svc.materials.map(m => `<span class="px-3.5 py-2 text-xs font-medium text-navy bg-sand rounded-full border border-neutral-200">${m}</span>`).join(''))}
          </div>
        </div>
      </div>

      <!-- What's Included -->
      <div class="reveal-right">
        <p class="kicker mb-4">WHAT'S INCLUDED</p>
        <h2 class="text-display-md text-navy mb-6">Every ${svc.shortName.toLowerCase()} build covers</h2>
        <ul class="space-y-4">
          ${raw(svc.included.map((item, i) => `
          <li class="flex gap-4 items-start p-4 rounded-xl bg-sand/60 border border-transparent hover:border-brass/20 transition-all duration-300" style="transition-delay:${i * 60}ms">
            <span class="shrink-0 w-7 h-7 rounded-full bg-brass/10 flex items-center justify-center mt-0.5">
              <svg class="w-3.5 h-3.5 text-brass" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
            </span>
            <span class="text-neutral-700 text-[0.9375rem] leading-relaxed">${item}</span>
          </li>`).join(''))}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     PROCESS — 5-step editorial
     ═══════════════════════════════════════════════════════════════════════ -->
${processSteps(svc.process, `HOW WE BUILD ${svc.shortName.toUpperCase()}`, `Our ${svc.process.length}-step process`)}

<!-- ═══════════════════════════════════════════════════════════════════════
     PRICING + WARRANTY — Premium glass cards
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="grid md:grid-cols-2 gap-6 stagger-children">
      <div class="card p-8 md:p-10 border-t-4 border-t-brass">
        <p class="kicker mb-3">PRICING & TIMELINE</p>
        <h3 class="font-display text-display-sm text-navy mb-1">Free Site Evaluation</h3>
        <div class="divider-brass mt-4 mb-5"></div>
        <p class="text-neutral-600 leading-relaxed text-[0.9375rem]">${svc.pricing}</p>
        <a href="/contact?service=${svc.slug}" class="mt-6 inline-flex items-center gap-2 text-brass font-semibold hover:text-navy transition-colors link-underline">
          Request estimate <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div class="card p-8 md:p-10 border-t-4 border-t-navy">
        <p class="kicker mb-3">WARRANTY</p>
        <h3 class="font-display text-display-sm text-navy mb-1">One-Year Workmanship</h3>
        <div class="divider-brass mt-4 mb-5"></div>
        <p class="text-neutral-600 leading-relaxed text-[0.9375rem]">${svc.warranty}</p>
        <p class="mt-4 text-xs text-neutral-400">Materials carry their respective manufacturer warranties.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     TESTIMONIALS — Real reviews mentioning this service
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-12">
      <p class="kicker mb-4">WHAT HOMEOWNERS SAY</p>
      <h2 class="text-display-md text-navy">Real feedback on our ${svc.shortName.toLowerCase()}</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-6 stagger-children">
      ${raw(svc.testimonials.map((t) => `
      <article class="card p-7 md:p-8 flex flex-col">
        <div class="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
          ${'<svg class="w-[18px] h-[18px] text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(5)}
        </div>
        <blockquote class="flex-1 text-neutral-600 leading-relaxed italic text-[0.9375rem]">\u201C${t.quote}\u201D</blockquote>
        <footer class="mt-6 pt-5 border-t border-neutral-100">
          <p class="font-display text-[0.875rem] text-navy font-semibold">${t.author}</p>
          <p class="text-[0.75rem] text-neutral-400 mt-0.5">${t.city} · ${svc.name}</p>
        </footer>
      </article>`).join(''))}
    </div>
    <p class="reveal mt-6 text-center text-[0.75rem] text-neutral-400 italic">[Placeholder — authentic Google reviews will replace these once provided.]</p>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     BRANDED ANSWER — Proprietary methodology
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="reveal max-w-3xl mx-auto">
      <p class="kicker mb-4">OUR APPROACH</p>
      <h2 class="text-display-md text-navy mb-6">${svc.brandedAnswer.term}</h2>
      <div class="card p-8 md:p-10 border-l-4 border-l-brass bg-sand/40">
        <p class="text-neutral-700 leading-[1.85] text-[1.0625rem]">${svc.brandedAnswer.explanation}</p>
        <p class="mt-6 text-sm font-semibold text-navy">— ${BUSINESS.founder}, ${BUSINESS.licenseShort}</p>
      </div>
    </div>
  </div>
</section>

<!-- Pull Quote -->
${pullQuote(`${svc.shortName} done right is invisible — it just works through the next storm and the next ten tides. That's the standard.`, BUSINESS.founder)}

<!-- FAQ -->
${faqList(svc.faqs, `Questions about ${svc.shortName.toLowerCase()}`)}

<!-- ═══════════════════════════════════════════════════════════════════════
     AVAILABLE IN — City chips with cross-links
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal">
      <div class="text-center mb-10">
        <p class="kicker mb-4">AVAILABLE IN</p>
        <h2 class="text-display-md text-navy">All eight coastal NC cities</h2>
      </div>
      <div class="flex flex-wrap justify-center gap-3 stagger-children">
        ${raw(CITIES.map((c) => `
        <a href="/areas/${c.slug}?service=${svc.slug}" class="group px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-brass hover:shadow-elevated transition-all duration-300 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-brass/40 group-hover:bg-brass transition-colors"></span>
          <span class="text-sm font-medium text-navy group-hover:text-brass transition-colors">${c.name}, NC</span>
        </a>`).join(''))}
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     RELATED SERVICES
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-10">
      <p class="kicker mb-4">RELATED SERVICES</p>
      <h2 class="text-display-md text-navy">Often built together</h2>
    </div>
    <div class="grid gap-5 sm:grid-cols-3 stagger-children">
      ${raw(svc.related.map((rs) => {
        const r = SERVICE_BY_SLUG[rs];
        if (!r) return '';
        return `
      <a href="/services/${r.slug}" class="card group p-6 md:p-7 hover:border-brass/30">
        <div class="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-sand">
          <img src="${r.image}" alt="${r.name}" width="400" height="225" loading="lazy" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        </div>
        <h3 class="font-display text-[1.05rem] text-navy font-semibold group-hover:text-brass transition-colors">${r.name}</h3>
        <p class="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">${r.subhead}</p>
        <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brass opacity-0 group-hover:opacity-100 transition-opacity">
          Explore ${r.name.toLowerCase()} <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </a>`;
      }).join(''))}
    </div>
  </div>
</section>

<!-- Final CTA -->
${ctaBand({ heading: `Talk to us about ${svc.shortName.toLowerCase()}`, btn: 'Get my free estimate', btnHref: `/contact?service=${svc.slug}` })}
`,
  });
}
