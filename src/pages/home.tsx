// Homepage — Premium Cinematic Editorial (Bible Part 14, Section N Override)
// Full 13-section layout per Section N mandate. $60K visual standard.
// Section order: Header → Hero → Trust Strip → Services → Pull Quote → Why Us →
// Areas → Reviews → Process → Gallery Teaser → FAQ → CTA → Footer
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand, faqList, processSteps } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';
import { HOME_FAQS, PROCESS_STEPS, WHY_US } from '../data/faqs';
import {
  localBusinessSchema,
  websiteSchema,
  organizationSchema,
  faqSchema,
} from '../components/Schema';

export function HomePage() {
  const schemas = [
    localBusinessSchema(),
    websiteSchema(),
    organizationSchema(),
    faqSchema(HOME_FAQS),
  ];

  return Layout({
    title: 'Coastal NC Dock Builder — Floating Docks, Piers & Boat Lifts | Intracoastal Installs',
    description: `Dock builder in coastal North Carolina with ${BUSINESS.yearsInBusiness}+ years in the construction industry. Floating docks, fixed piers, boat lifts, gazebos & marine repairs. ${BUSINESS.licenseShort}. Free estimates: ${BUSINESS.phoneDisplay}.`,
    canonical: `${SITE_URL}/`,
    schemas,
    children: html`
<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 2: HERO — Cinematic Editorial (Pattern 1)
     2-column split: Left 55% editorial content, Right 45% full-bleed image
     Massive Fraunces H1. Brass accent. Dual CTA.
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="hero grain relative" style="min-height: clamp(640px, 95vh, 960px);" aria-labelledby="hero-heading">
  <!-- Full-bleed background image -->
  <div class="hero__media" aria-hidden="true">
    <img src="/static/images/hero-home.jpg"
         alt=""
         width="1920" height="1080" fetchpriority="high"
         class="img-cover"
         style="object-position: center 30%;">
    <!-- Navy gradient sweeps from left for text legibility -->
    <div class="hero__overlay bg-gradient-to-r from-navy via-navy/[0.92] via-[55%] to-navy/[0.25] md:from-navy md:via-navy/[0.88] md:via-[48%] md:to-transparent"></div>
    <!-- Bottom vignette -->
    <div class="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-navy/70 to-transparent"></div>
  </div>

  <!-- Hero content — left panel -->
  <div class="hero__content max-w-ultrawide mx-auto px-6 md:px-12 flex items-center" style="min-height: clamp(640px, 95vh, 960px);">
    <div class="max-w-[640px] py-28 md:py-36 lg:py-44">
      <!-- Kicker with brass accent line -->
      <div class="reveal-blur flex items-center gap-4 mb-7">
        <span class="block w-14 h-[2px] bg-gradient-to-r from-brass to-brass/40" aria-hidden="true"></span>
        <span class="kicker text-white/60">${BUSINESS.yearsInBusiness}+ YEARS · COASTAL NORTH CAROLINA</span>
      </div>

      <!-- H1 — massive Fraunces display -->
      <h1 id="hero-heading" class="reveal-blur text-display-hero text-white text-balance" style="transition-delay:120ms;">
        Coastal Docks Built to<br class="hidden md:block"> <span class="text-gradient">Outlast the Salt</span>
      </h1>

      <!-- Lede — editorial voice, benefit-driven -->
      <p class="reveal-blur mt-7 text-[1.125rem] md:text-[1.25rem] text-white/70 leading-[1.7] max-w-[540px]" style="transition-delay:240ms;">
        The Intracoastal Waterway corrodes hardware, warps decking, and exposes every shortcut. We build for that reality — marine-grade lumber, 316 stainless, pilings driven to refusal.
      </p>

      <!-- Credential pills -->
      <div class="reveal-blur mt-9 flex flex-wrap items-center gap-x-7 gap-y-3" style="transition-delay:360ms;" role="list" aria-label="Credentials">
        <span role="listitem" class="flex items-center gap-2.5 text-[0.8125rem] text-white/55 font-medium tracking-wide">
          <span class="w-[6px] h-[6px] rounded-full bg-brass shadow-[0_0_8px_rgba(201,169,97,0.5)]" aria-hidden="true"></span>${BUSINESS.yearsInBusiness}+ Years
        </span>
        <span role="listitem" class="flex items-center gap-2.5 text-[0.8125rem] text-white/55 font-medium tracking-wide">
          <span class="w-[6px] h-[6px] rounded-full bg-brass shadow-[0_0_8px_rgba(201,169,97,0.5)]" aria-hidden="true"></span>${BUSINESS.licenseShort}
        </span>
        <span role="listitem" class="flex items-center gap-2.5 text-[0.8125rem] text-white/55 font-medium tracking-wide">
          <span class="w-[6px] h-[6px] rounded-full bg-brass shadow-[0_0_8px_rgba(201,169,97,0.5)]" aria-hidden="true"></span>Fully Insured
        </span>
      </div>

      <!-- Dual CTA -->
      <div class="reveal-blur mt-11 flex flex-col sm:flex-row gap-4" style="transition-delay:480ms;">
        <a href="/contact" class="btn btn--brass">
          <span>Get my free estimate</span>
          <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="tel:${BUSINESS.phoneTel}" class="btn btn--outline" aria-label="Call ${BUSINESS.phoneDisplay}">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          ${BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  </div>

  <!-- Scroll cue -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/30" aria-hidden="true">
    <span class="text-[0.625rem] tracking-[0.25em] uppercase font-medium">Scroll</span>
    <svg class="w-4 h-4 animate-[bounce_2.5s_ease-in-out_infinite]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 3: TRUST STRIP — Real numbers, brass glow dots
     ═══════════════════════════════════════════════════════════════════════ -->
${trustStrip(['30+ Years Construction', 'NC GC #100980', 'Family-Owned', 'Fully Insured', 'Marine-Grade Materials', 'Warranty-Backed'])}

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 4: SERVICES OVERVIEW — Image cards with editorial copy
     Service thumbnail + name + subhead. Visual-first grid.
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section" aria-labelledby="services-heading">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <p class="kicker mb-4">WHAT WE BUILD</p>
      <h2 id="services-heading" class="text-display-lg text-navy mb-5 text-balance">From Floating Docks to Marine Carpentry</h2>
      <p class="text-neutral-600 leading-relaxed text-[1.0625rem] max-w-2xl mx-auto">Ten services for the coastal NC waterfront — every build on marine-grade lumber, 316 stainless fasteners, and pilings driven to refusal.</p>
    </div>

    <!-- 2-column image card grid for first 6 services -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 stagger-children">
      ${raw(SERVICES.slice(0, 6).map((s) => `
      <a href="/services/${s.slug}" class="card group overflow-hidden hover:border-brass/30 hover:shadow-elevated transition-all duration-300">
        <div class="aspect-[16/10] overflow-hidden bg-sand">
          <img src="${s.image}" alt="${s.name} in coastal North Carolina" width="600" height="375" loading="lazy" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        </div>
        <div class="p-5 md:p-6">
          <h3 class="font-display text-[1.05rem] text-navy font-semibold group-hover:text-brass transition-colors">${s.name}</h3>
          <p class="mt-2 text-neutral-500 text-[0.8125rem] leading-relaxed line-clamp-2">${s.subhead}</p>
          <span class="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brass opacity-0 group-hover:opacity-100 transition-all duration-300">
            View details <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join(''))}
    </div>

    <!-- Remaining 4 services — compact row -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-5 md:mt-6 stagger-children">
      ${raw(SERVICES.slice(6).map((s) => `
      <a href="/services/${s.slug}" class="card group overflow-hidden hover:border-brass/30 hover:shadow-elevated transition-all duration-300">
        <div class="aspect-[16/10] overflow-hidden bg-sand">
          <img src="${s.image}" alt="${s.name} in coastal North Carolina" width="400" height="250" loading="lazy" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        </div>
        <div class="p-4 md:p-5">
          <h3 class="font-display text-[0.9375rem] text-navy font-semibold group-hover:text-brass transition-colors">${s.name}</h3>
          <span class="mt-2 inline-flex items-center gap-1 text-[0.75rem] font-medium text-brass opacity-0 group-hover:opacity-100 transition-all duration-300">
            Details <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join(''))}
    </div>

    <div class="reveal mt-10 text-center">
      <a href="/services" class="btn btn--ghost text-[0.875rem]">
        View all services
        <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 5: BRASS LEFT-RULE PULL QUOTE — Signature element (1 per page)
     Fraunces italic. 4px brass left border. "FROM MARK LIPE" kicker.
     ═══════════════════════════════════════════════════════════════════════ -->
${pullQuote('The Intracoastal eats hardware. It ages decking in half the time. It finds every shortcut a contractor leaves behind. That\u2019s why we build to refusal — no exceptions, no compromise.', 'Mark Lipe, Founder · 30+ years in the construction industry', 'FROM MARK LIPE')}

<!-- ═══════════════════════════════════════════════════════════════════════
     PHOTO BREAK 1 — Full-bleed cinematic aerial with overlay text
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden" style="height: clamp(320px, 45vh, 520px);" aria-hidden="true">
  <img src="/static/images/break-aerial-sunset.jpg"
       alt="Aerial view of a dock and boat lift on the Intracoastal Waterway at sunset"
       width="1920" height="1080" loading="lazy"
       class="img-cover w-full h-full"
       style="object-position: center 40%;"
       data-fallback="gradient">
  <div class="absolute inset-0 bg-navy/50"></div>
  <div class="absolute inset-0 flex items-center justify-center text-center px-6">
    <div class="reveal">
      <p class="font-display text-display-lg text-white max-w-3xl text-balance leading-[1.15]">"Your dock is where memories happen."</p>
      <p class="mt-5 text-white/50 text-sm font-medium tracking-wide uppercase">— The standard we build to</p>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 6: WHY US / DIFFERENTIATORS — The Coastal-Grade Build Standard
     Premium asymmetric layout: left editorial story + stats, right cards.
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand" aria-labelledby="why-heading">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <!-- Left: editorial story -->
      <div class="reveal-left">
        <p class="kicker mb-4">THE COASTAL-GRADE BUILD STANDARD</p>
        <h2 id="why-heading" class="text-display-lg text-navy mb-7 text-balance">Most dock failures start with the same three shortcuts</h2>
        <p class="text-[1.0625rem] text-neutral-600 leading-[1.8] mb-5">Undersized pilings. Galvanized hardware in a stainless zone. A crew that stops driving at a number instead of refusal.</p>
        <p class="text-[1.0625rem] text-neutral-600 leading-[1.8] mb-10">We run a different standard. Every piling to refusal. 316 stainless on the saltwater side. Marine-grade lumber from the treatment yard — never a box-store lumberyard. It costs more to build this way. It costs far less to own.</p>

        <!-- Stat callouts -->
        <div class="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200/80">
          <div>
            <span class="stat-number" data-count="30" data-count-suffix="+">0+</span>
            <p class="mt-2 text-[0.8125rem] text-neutral-500 font-medium">Years Building</p>
          </div>
          <div>
            <span class="stat-number" data-count="8">0</span>
            <p class="mt-2 text-[0.8125rem] text-neutral-500 font-medium">Cities Served</p>
          </div>
          <div>
            <span class="stat-number" data-count="10">0</span>
            <p class="mt-2 text-[0.8125rem] text-neutral-500 font-medium">Services</p>
          </div>
        </div>
      </div>

      <!-- Right: differentiator cards -->
      <div class="space-y-5 stagger-children">
        ${raw(WHY_US.map((w) => `
        <div class="card p-7 md:p-8 group hover:border-brass/30">
          <div class="flex items-start gap-5">
            <span class="shrink-0 w-11 h-11 rounded-full bg-brass/10 flex items-center justify-center" aria-hidden="true">
              <span class="w-3 h-3 rounded-full bg-brass"></span>
            </span>
            <div>
              <h3 class="font-display text-[1.1rem] text-navy font-semibold">${w.title}</h3>
              <p class="mt-2.5 text-neutral-600 text-[0.9375rem] leading-relaxed">${w.text}</p>
            </div>
          </div>
        </div>`).join(''))}

        <div class="pt-3">
          <a href="/about" class="link-underline inline-flex items-center gap-2 text-brass font-semibold text-[0.9375rem] hover:text-navy transition-colors">
            Read our full story
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 7: AREAS SERVED — City photo cards with editorial intro
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section" aria-labelledby="areas-heading">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-6">
      <p class="kicker mb-4">SERVICE AREA</p>
      <h2 id="areas-heading" class="text-display-lg text-navy mb-5 text-balance">Eight cities, three counties, one coast</h2>
      <p class="text-neutral-600 leading-relaxed text-[1.0625rem] max-w-2xl mx-auto">We file CAMA paperwork in Pender, New Hanover, and Onslow every month. Our shop is at 312 Olde Point Loop in Hampstead — most of the coast is within a 45-minute trailer haul.</p>
    </div>

    <!-- City photo card grid — 4 columns on large, 2 on mobile -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 stagger-children mt-10">
      ${raw(CITIES.map((c) => `
      <a href="/areas/${c.slug}" class="group block rounded-xl overflow-hidden relative" style="aspect-ratio: 4/3;">
        <img src="${c.image}" alt="${c.name} waterfront" width="400" height="300" loading="lazy" class="img-cover img-zoom w-full h-full" data-fallback="gradient">
        <div class="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent group-hover:from-navy/90 transition-all duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <p class="font-display text-white text-[0.9375rem] md:text-[1.05rem] font-semibold group-hover:text-brass transition-colors">${c.name}</p>
          <p class="text-white/50 text-[0.6875rem] mt-0.5">${c.county}</p>
        </div>
      </a>`).join(''))}
    </div>

    <div class="reveal mt-10 text-center">
      <a href="/areas" class="link-underline inline-flex items-center gap-2 text-brass font-semibold text-[0.9375rem] hover:text-navy transition-colors">
        Explore our full service area
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 8: REVIEWS — 3-card placeholder (awaiting real Google reviews)
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand" aria-labelledby="reviews-heading">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <p class="kicker mb-4">WHAT HOMEOWNERS SAY</p>
      <h2 id="reviews-heading" class="text-display-lg text-navy">Real reviews from the waterfront</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-6 stagger-children">
      ${raw([
        { quote: 'Mark and his crew replaced our 30-year-old dock in under a week. Every board is level, every fastener is stainless. This is how it should be done.', author: 'Homeowner', loc: 'Hampstead, NC', type: 'Floating Dock' },
        { quote: 'We called three contractors. Mark was the only one who probed the bottom before quoting. He found soft spots the others missed and built to refusal.', author: 'Homeowner', loc: 'Wrightsville Beach', type: 'Fixed Pier' },
        { quote: 'Our gazebo survived Hurricane Florence with zero damage. The neighbors lost theirs. That tells you everything about the build quality.', author: 'Homeowner', loc: 'Topsail Beach', type: 'Gazebo' },
      ].map((r) => `
      <article class="card p-7 md:p-8 flex flex-col">
        <div class="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
          ${'<svg class="w-[18px] h-[18px] text-brass" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(5)}
        </div>
        <blockquote class="flex-1 text-neutral-600 leading-relaxed italic text-[0.9375rem]">\u201C${r.quote}\u201D</blockquote>
        <footer class="mt-6 pt-5 border-t border-neutral-100">
          <p class="font-display text-[0.875rem] text-navy font-semibold">${r.author}</p>
          <p class="text-[0.75rem] text-neutral-400 mt-0.5">${r.loc} · ${r.type}</p>
        </footer>
      </article>`).join(''))}
    </div>
    <p class="reveal mt-8 text-center text-[0.75rem] text-neutral-400 italic">[Placeholder — authentic Google reviews will replace these once provided by client.]</p>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     PHOTO BREAK 2 — Craftsmanship detail with overlay stats
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden" style="height: clamp(280px, 38vh, 440px);" aria-hidden="true">
  <img src="/static/images/break-craftsmanship.jpg"
       alt="Close-up of stainless steel fasteners being driven into marine-grade lumber"
       width="1920" height="1080" loading="lazy"
       class="img-cover w-full h-full"
       style="object-position: center 50%;"
       data-fallback="gradient">
  <div class="absolute inset-0 bg-navy/60"></div>
  <div class="absolute inset-0 flex items-center justify-center px-6">
    <div class="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center max-w-3xl">
      <div>
        <span class="block font-display text-display-md text-white">316</span>
        <p class="mt-1 text-white/50 text-[0.75rem] font-medium tracking-wide uppercase">Stainless Grade</p>
      </div>
      <div>
        <span class="block font-display text-display-md text-white">130</span>
        <p class="mt-1 text-white/50 text-[0.75rem] font-medium tracking-wide uppercase">MPH Wind Rated</p>
      </div>
      <div>
        <span class="block font-display text-display-md text-brass">100%</span>
        <p class="mt-1 text-white/50 text-[0.75rem] font-medium tracking-wide uppercase">Pilings to Refusal</p>
      </div>
      <div>
        <span class="block font-display text-display-md text-white">USA</span>
        <p class="mt-1 text-white/50 text-[0.75rem] font-medium tracking-wide uppercase">Made Hardware</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 9: HOW IT WORKS — Premium 5-step editorial process
     ═══════════════════════════════════════════════════════════════════════ -->
${processSteps(PROCESS_STEPS, 'HOW IT WORKS', 'Five steps from first call to final walkthrough')}

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 10: GALLERY TEASER — 4-image editorial masonry
     Shows work quality; drives to /gallery
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section" aria-labelledby="gallery-heading">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <p class="kicker mb-4">RECENT BUILDS</p>
      <h2 id="gallery-heading" class="text-display-lg text-navy text-balance">Thirty years of coastal NC waterfront work</h2>
      <p class="mt-4 text-neutral-500 text-[1.0625rem] max-w-xl mx-auto">Every project built to the same uncompromising standard — marine-grade lumber, 316 stainless, pilings to refusal.</p>
    </div>

    <!-- 4-image masonry grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 stagger-children">
      <article class="gallery-item lg:col-span-2 lg:row-span-2 group">
        <div class="relative overflow-hidden rounded-xl aspect-[3/4] lg:aspect-auto lg:h-full">
          <img src="/static/images/hero-aerial.jpg"
               alt="Aerial view of a T-head pier with gazebo and boat lift on the Intracoastal Waterway"
               width="800" height="1000" loading="lazy"
               class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay">
            <div class="text-white">
              <p class="text-[0.6875rem] tracking-[0.15em] uppercase text-brass/90 mb-1 font-medium">Hampstead, NC</p>
              <p class="font-display text-base lg:text-lg font-semibold leading-tight">T-Head Pier & Gazebo</p>
              <p class="text-[0.75rem] text-white/60 mt-1">Fixed pier · Boat lift · Metal roof</p>
            </div>
          </div>
        </div>
      </article>

      <article class="gallery-item group">
        <div class="relative overflow-hidden rounded-xl aspect-square">
          <img src="/static/images/services/svc-floating-docks.jpg"
               alt="Sound-side floating dock with HDPE floats"
               width="600" height="600" loading="lazy"
               class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay">
            <div class="text-white">
              <p class="text-[0.625rem] tracking-[0.15em] uppercase text-brass/90 mb-0.5 font-medium">Topsail</p>
              <p class="font-display text-sm font-semibold">Floating Dock</p>
            </div>
          </div>
        </div>
      </article>

      <article class="gallery-item group">
        <div class="relative overflow-hidden rounded-xl aspect-square">
          <img src="/static/images/gallery/gazebo-pier.jpg"
               alt="Waterfront gazebo with standing-seam metal roof"
               width="600" height="600" loading="lazy"
               class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay">
            <div class="text-white">
              <p class="text-[0.625rem] tracking-[0.15em] uppercase text-brass/90 mb-0.5 font-medium">Wrightsville</p>
              <p class="font-display text-sm font-semibold">Gazebo & Pier</p>
            </div>
          </div>
        </div>
      </article>

      <article class="gallery-item group">
        <div class="relative overflow-hidden rounded-xl aspect-square">
          <img src="/static/images/services/svc-boat-lifts.jpg"
               alt="Boat lift installation with aluminum cradle"
               width="600" height="600" loading="lazy"
               class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay">
            <div class="text-white">
              <p class="text-[0.625rem] tracking-[0.15em] uppercase text-brass/90 mb-0.5 font-medium">Carolina Beach</p>
              <p class="font-display text-sm font-semibold">Boat Lift</p>
            </div>
          </div>
        </div>
      </article>

      <article class="gallery-item group">
        <div class="relative overflow-hidden rounded-xl aspect-square">
          <img src="/static/images/detail-hardware.jpg"
               alt="316 stainless steel hardware detail on marine-grade lumber"
               width="600" height="600" loading="lazy"
               class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay">
            <div class="text-white">
              <p class="text-[0.625rem] tracking-[0.15em] uppercase text-brass/90 mb-0.5 font-medium">Detail</p>
              <p class="font-display text-sm font-semibold">316 Stainless</p>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="reveal mt-10 text-center">
      <a href="/gallery" class="link-underline inline-flex items-center gap-2 text-brass font-semibold text-[0.9375rem] hover:text-navy transition-colors">
        View full portfolio
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 11: FAQ — 7 real questions with FAQPage schema
     ═══════════════════════════════════════════════════════════════════════ -->
${faqList(HOME_FAQS, 'Questions homeowners ask first')}

<!-- ═══════════════════════════════════════════════════════════════════════
     SECTION 12: FINAL CTA — Navy background, brass accent, conversion close
     Canonical identity sentence embedded.
     ═══════════════════════════════════════════════════════════════════════ -->
${ctaBand({
  heading: 'Tell us about your dock',
  sub: 'Free site evaluation. Written estimate within one business day. Every board, fastener, and piling listed — no surprises, no change orders.',
  btn: 'Get my free estimate',
  btnHref: '/contact',
})}
`,
  });
}
