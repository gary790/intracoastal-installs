// Gallery page — Premium Editorial Design
// $60K visual standard. Masonry portfolio with cinematic hover effects.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';
import { breadcrumbSchema } from '../components/Schema';

export function GalleryPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Gallery', url: '/gallery' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Intracoastal Installs Project Gallery',
      url: `${SITE_URL}/gallery`,
    },
  ];

  const galleryItems = [
    { src: '/static/images/hero-aerial.jpg', alt: 'T-head pier with covered gazebo and dual boat lift on the Intracoastal Waterway, Hampstead NC', service: 'Fixed Piers', city: 'Hampstead', caption: 'Olde Point \u00b7 T-Head Pier & Gazebo \u00b7 2024', aspect: '3/4' },
    { src: '/static/images/services/svc-floating-docks.jpg', alt: 'Floating dock system with HDPE floats on calm Topsail Sound waters', service: 'Floating Docks', city: 'Topsail Beach', caption: 'Sound-Side \u00b7 Floating Dock \u00b7 2023', aspect: '4/3' },
    { src: '/static/images/gallery/gazebo-pier.jpg', alt: 'Waterfront gazebo with standing-seam metal roof and cable rail system on residential pier', service: 'Gazebos', city: 'Topsail Beach', caption: 'Topsail Island \u00b7 Gazebo & Pier \u00b7 2023', aspect: '4/3' },
    { src: '/static/images/services/svc-boat-lifts.jpg', alt: 'Boat lift holding center-console vessel at residential dock in Wrightsville Beach', service: 'Boat Lifts', city: 'Wrightsville Beach', caption: 'Banks Channel \u00b7 10,000 lb Lift \u00b7 2024', aspect: '4/3' },
    { src: '/static/images/services/svc-custom-docks.jpg', alt: 'Custom IPE Brazilian hardwood dock with copper-finish hardware on Figure Eight Island', service: 'Custom Docks', city: 'Figure Eight Island', caption: 'Figure Eight \u00b7 IPE Custom Dock \u00b7 2024', aspect: '3/4' },
    { src: '/static/images/services/svc-fixed-piers.jpg', alt: 'Long fixed pier extending into the ICW with pressure-treated pilings driven to refusal', service: 'Fixed Piers', city: 'Wilmington', caption: 'Cape Fear River \u00b7 Fixed Pier \u00b7 2023', aspect: '4/3' },
    { src: '/static/images/gallery/boat-lift.jpg', alt: 'Boat lift at early morning blue hour on Carolina Beach Yacht Basin', service: 'Boat Lifts', city: 'Carolina Beach', caption: 'Yacht Basin \u00b7 Boat Lift \u00b7 2024', aspect: '4/3' },
    { src: '/static/images/services/svc-waterfront-decks.jpg', alt: 'Composite deck with cable rails overlooking Topsail Sound in Surf City', service: 'Waterfront Decks', city: 'Surf City', caption: 'Topsail Sound \u00b7 Waterfront Deck \u00b7 2023', aspect: '4/3' },
    { src: '/static/images/services/svc-pilings.jpg', alt: 'Hydraulic pile driver setting 10x10 pilings to refusal in Sneads Ferry', service: 'Pilings', city: 'Sneads Ferry', caption: 'New River \u00b7 Piling Install \u00b7 2024', aspect: '3/4' },
    { src: '/static/images/services/svc-dock-repairs.jpg', alt: 'Dock repair with new pressure-treated lumber replacing storm-damaged decking', service: 'Dock Repairs', city: 'Hampstead', caption: 'Belvedere \u00b7 Dock Repair \u00b7 2024', aspect: '4/3' },
    { src: '/static/images/services/svc-gazebos.jpg', alt: 'Metal-roof gazebo at end of pier overlooking the Intracoastal Waterway', service: 'Gazebos', city: 'Wilmington', caption: 'ICW \u00b7 Covered Gazebo \u00b7 2023', aspect: '4/3' },
    { src: '/static/images/detail-hardware.jpg', alt: 'Marine-grade 316 stainless steel hardware detail on coastal NC dock', service: 'Marine Carpentry', city: 'Figure Eight Island', caption: 'Detail \u00b7 316 Stainless Hardware \u00b7 2024', aspect: '4/3' },
  ];

  return Layout({
    title: 'Coastal NC Dock & Pier Portfolio | Intracoastal Installs',
    description: `Floating docks, fixed piers, gazebos, and waterfront decks built across coastal NC. ${BUSINESS.licenseShort}.`,
    canonical: `${SITE_URL}/gallery`,
    schemas,
    children: html`
<section class="hero grain relative" style="min-height: clamp(340px, 40vh, 460px);">
  <div class="hero__media">
    <img src="/static/images/hero-home.jpg" alt="Coastal NC marine construction portfolio" width="1365" height="768" fetchpriority="high" class="img-cover" style="object-position: center 50%;">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/80 to-navy/50"></div>
  </div>
  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(340px, 40vh, 460px);">
    <div class="w-full pb-12 md:pb-16 text-center">
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb"><a href="/" class="hover:text-white transition-colors">Home</a><span class="mx-2">/</span><span class="text-white/80">Gallery</span></nav>
      <p class="reveal-blur kicker text-brass/80 mb-4">PORTFOLIO</p>
      <h1 class="reveal-blur text-display-xl text-white text-balance" style="transition-delay:100ms">Coastal NC Dock & Pier Portfolio</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-2xl mx-auto leading-relaxed" style="transition-delay:200ms">Real projects from real waterfronts \u2014 Hampstead to Sneads Ferry.</p>
    </div>
  </div>
</section>

${trustStrip(['10 Services', '8 Cities', '30+ Years Construction', 'NC GC #100980'])}

<section class="section">
  <div class="container max-w-wide">
    <div class="reveal flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter by service">
      <button data-filter="all" class="px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 bg-navy text-white border-navy shadow-card">All</button>
      ${raw(['Floating Docks', 'Fixed Piers', 'Boat Lifts', 'Gazebos', 'Custom Docks', 'Waterfront Decks'].map(f => 
        `<button data-filter="${f.toLowerCase().replace(/\s+/g, '-')}" class="px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-brass hover:text-brass transition-all duration-300">${f}</button>`
      ).join(''))}
    </div>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-5" id="galleryGrid">
      ${raw(galleryItems.map((item, i) => `
      <figure class="gallery-item mb-5 break-inside-avoid group" data-category="${item.service.toLowerCase().replace(/\s+/g, '-')}" style="transition: opacity 0.3s, transform 0.3s;">
        <div class="relative overflow-hidden rounded-xl aspect-[${item.aspect}] cursor-pointer" data-lightbox-src="${item.src}" data-lightbox-alt="${item.alt}" data-lightbox-caption="${item.caption}">
          <img src="${item.src}" alt="${item.alt}" width="600" height="${item.aspect === '3/4' ? '800' : '450'}" loading="${i < 4 ? 'eager' : 'lazy'}" class="img-cover img-zoom w-full h-full">
          <div class="gallery-item__overlay rounded-xl">
            <div class="text-white">
              <p class="text-xs tracking-widest uppercase text-brass/90 mb-1">${item.city}, NC</p>
              <p class="font-display text-base font-semibold">${item.alt}</p>
              <p class="text-xs text-white/60 mt-1">${item.caption}</p>
            </div>
          </div>
        </div>
        <figcaption class="mt-2 px-1 text-[0.75rem] text-neutral-500">${item.caption}</figcaption>
      </figure>`).join(''))}
    </div>
    <p class="reveal mt-10 text-center text-sm text-neutral-400">Additional project photography will be added as builds complete. All images represent real coastal NC work.</p>
  </div>
</section>

${pullQuote('Every dock in this portfolio is still standing \u2014 and most of them have a story behind them.', BUSINESS.founder)}
${ctaBand({ heading: 'Like what you see?', sub: 'Let us build something like this for your waterfront. Free site evaluation.', btn: 'Get my free estimate' })}
`,
  });
}
