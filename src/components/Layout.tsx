// Shared page layout — Premium editorial design (Bible Part 21/43, Section N Override)
// $60K visual standard. Premium header + footer. Hub-and-spoke navigation.
import { html, raw } from 'hono/html';
import { BUSINESS, SITE_URL } from '../data/business';
import { CITIES } from '../data/cities';
import { SERVICES } from '../data/services';

export interface LayoutProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schemas: object[];
  children: any;
  bodyClass?: string;
  geo?: { lat: number; lng: number; placename: string; region: string };
}

export function Layout(props: LayoutProps) {
  const og = props.ogImage || BUSINESS.ogImage;
  const schemaJson = props.schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');
  const geoMeta = props.geo ? `
<meta name="geo.position" content="${props.geo.lat};${props.geo.lng}">
<meta name="geo.placename" content="${props.geo.placename}">
<meta name="geo.region" content="${props.geo.region}">
<meta name="ICBM" content="${props.geo.lat}, ${props.geo.lng}">` : '';
  return html`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${props.title}</title>
<meta name="description" content="${props.description}">
<link rel="canonical" href="${props.canonical}">
${raw(geoMeta)}

<!-- Open Graph / Social -->
<meta property="og:type" content="website">
<meta property="og:title" content="${props.title}">
<meta property="og:description" content="${props.description}">
<meta property="og:url" content="${props.canonical}">
<meta property="og:image" content="${SITE_URL}${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="${BUSINESS.name}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${props.title}">
<meta name="twitter:description" content="${props.description}">
<meta name="twitter:image" content="${SITE_URL}${og}">

<!-- Theme & Favicons -->
<meta name="theme-color" content="#0B2545">
<link rel="icon" type="image/svg+xml" href="/static/images/favicon.svg">
<meta name="format-detection" content="telephone=no">

<!-- Fonts: Preconnect + Load -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,400..900,0..100&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,400..900,0..100&family=Inter:wght@400;500;600;700&display=swap">

<!-- Design System Tokens -->
<link rel="stylesheet" href="/static/css/tokens.css">

<!-- Tailwind CSS (compiled, production-ready) -->
<link rel="stylesheet" href="/static/css/tailwind.css">

<!-- Schema.org Structured Data -->
${raw(schemaJson)}
</head>
<body class="font-body text-ink bg-white antialiased ${props.bodyClass || ''}">

<!-- Skip link (WCAG 2.2 AA) -->
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-navy text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-elevated focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2">Skip to main content</a>

${Header()}

<main id="main" role="main">
${props.children}
</main>

${Footer()}

<script src="/static/js/main.js" defer></script>
</body>
</html>`;
}

// ════════════════════════════════════════════════════════════════
// HEADER — Premium fixed nav, hub-and-spoke architecture
// NO section shortcuts. Clean page-level links only.
// ════════════════════════════════════════════════════════════════
function Header() {
  return html`
<header id="siteHeader" class="fixed top-0 left-0 right-0 z-50 bg-white/[0.02] backdrop-blur-[2px]" style="height:72px" role="banner">
  <div class="max-w-ultrawide mx-auto px-5 lg:px-10 h-full flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3 group" aria-label="${BUSINESS.name} \u2014 Return to homepage">
      <img src="/static/images/logo.svg" alt="" width="34" height="34" class="w-[34px] h-[34px] transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      <span class="font-display font-semibold text-navy text-[1.1rem] tracking-tight hidden sm:inline">Intracoastal<span class="text-brass"> Installs</span></span>
    </a>

    <!-- Desktop Nav — Hub pages only, no section anchors -->
    <nav class="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
      <a href="/services" class="nav-link">Services</a>
      <a href="/areas" class="nav-link">Areas</a>
      <a href="/gallery" class="nav-link">Gallery</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/contact" class="nav-link">Contact</a>
    </nav>

    <!-- Right actions -->
    <div class="hidden lg:flex items-center gap-5">
      <a href="tel:${BUSINESS.phoneTel}" class="flex items-center gap-2 text-[0.875rem] font-semibold text-navy hover:text-brass transition-colors" aria-label="Call us at ${BUSINESS.phoneDisplay}">
        <svg class="w-[15px] h-[15px]" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        ${BUSINESS.phoneDisplay}
      </a>
      <a href="/contact" class="btn--brass bg-gradient-to-br from-brass to-[#d4b76f] text-navy font-semibold px-5 py-2.5 rounded-lg text-[0.875rem] shadow-[0_4px_12px_rgba(201,169,97,0.3)] hover:shadow-[0_8px_24px_rgba(201,169,97,0.4)] hover:-translate-y-[1px] transition-all duration-200">Free Estimate</a>
    </div>

    <!-- Mobile Toggle -->
    <button id="navToggle" class="lg:hidden relative w-11 h-11 flex items-center justify-center text-navy rounded-lg hover:bg-sand/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileNav">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>

  <!-- Mobile Nav Panel — Hub pages only -->
  <div id="mobileNav" class="lg:hidden bg-white/98 backdrop-blur-xl border-t border-neutral-100 shadow-dramatic" role="dialog" aria-label="Navigation menu" aria-hidden="true">
    <nav class="max-w-wide mx-auto px-6 py-7 flex flex-col gap-0.5" aria-label="Mobile navigation">
      <a href="/services" class="mobile-nav-link">Services</a>
      <a href="/areas" class="mobile-nav-link">Areas We Serve</a>
      <a href="/gallery" class="mobile-nav-link">Gallery</a>
      <a href="/about" class="mobile-nav-link">About</a>
      <a href="/contact" class="mobile-nav-link">Contact</a>
      <div class="flex flex-col gap-3 mt-5 pt-5 border-t border-neutral-100">
        <a href="tel:${BUSINESS.phoneTel}" class="flex items-center justify-center gap-2 py-3.5 bg-sand rounded-xl font-semibold text-navy text-[0.9375rem]" aria-label="Call ${BUSINESS.phoneDisplay}">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          ${BUSINESS.phoneDisplay}
        </a>
        <a href="/contact" class="flex items-center justify-center py-3.5 bg-gradient-to-br from-brass to-[#d4b76f] text-navy rounded-xl font-semibold shadow-lg text-[0.9375rem]">Free Estimate</a>
      </div>
    </nav>
  </div>
</header>
<!-- Header spacer -->
<div style="height:72px" aria-hidden="true"></div>`;
}

// ════════════════════════════════════════════════════════════════
// FOOTER — Premium dark treatment with complete link architecture
// ════════════════════════════════════════════════════════════════
function Footer() {
  const svcLinks = SERVICES.map(
    (s) => `<li><a href="/services/${s.slug}" class="footer-link">${s.name}</a></li>`
  ).join('');
  const cityLinks = CITIES.map(
    (c) => `<li><a href="/areas/${c.slug}" class="footer-link">${c.name}</a></li>`
  ).join('');

  return html`
<footer class="footer" role="contentinfo">
  <div class="max-w-wide mx-auto px-6 lg:px-10 pt-20 md:pt-24 pb-8">
    <!-- Main Grid -->
    <div class="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-white/10">
      <!-- Col 1: Brand -->
      <div class="lg:col-span-1">
        <a href="/" class="flex items-center gap-3 mb-6 group" aria-label="${BUSINESS.name} \u2014 Return to homepage">
          <img src="/static/images/logo.svg" alt="" width="30" height="30" class="w-[30px] h-[30px] brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <span class="font-display font-semibold text-white text-lg tracking-tight">Intracoastal <span class="text-brass">Installs</span></span>
        </a>
        <p class="text-[0.875rem] leading-relaxed text-white/50 mb-5">Family-owned dock builder and marine contractor. Three decades on the same coast, building for the salt.</p>
        <p class="text-[0.6875rem] text-white/30 font-medium tracking-wide uppercase">${BUSINESS.licenseShort} \u00b7 Fully Insured</p>
      </div>

      <!-- Col 2: Contact -->
      <div>
        <h2 class="footer-heading">Contact</h2>
        <ul class="space-y-3" role="list">
          <li><a href="tel:${BUSINESS.phoneTel}" class="text-white/80 hover:text-brass transition-colors font-display text-lg font-semibold">${BUSINESS.phoneDisplay}</a></li>
          <li><a href="mailto:${BUSINESS.email}" class="text-white/55 hover:text-brass transition-colors text-[0.8125rem] break-all">${BUSINESS.email}</a></li>
          <li class="text-white/45 text-[0.8125rem] leading-relaxed pt-1">${BUSINESS.address.street}<br>${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}</li>
          <li class="text-white/35 text-[0.75rem]">Mon\u2013Fri \u00b7 ${BUSINESS.hours.open}\u2013${BUSINESS.hours.close}</li>
        </ul>
      </div>

      <!-- Col 3: Services -->
      <div>
        <h2 class="footer-heading">Services</h2>
        <ul class="space-y-2" role="list">${raw(svcLinks)}</ul>
      </div>

      <!-- Col 4: Service Area -->
      <div>
        <h2 class="footer-heading">Service Area</h2>
        <ul class="space-y-2" role="list">${raw(cityLinks)}</ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[0.6875rem] text-white/30">
      <p>&copy; <span id="year">2026</span> ${BUSINESS.legalName}. All rights reserved.</p>
      <div class="flex items-center gap-5">
        <span>${BUSINESS.licenseShort}</span>
        <a href="${BUSINESS.facebook}" rel="noopener noreferrer" target="_blank" class="hover:text-white/60 transition-colors" aria-label="Facebook">Facebook</a>
        <a href="/sitemap.xml" class="hover:text-white/60 transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;
}
