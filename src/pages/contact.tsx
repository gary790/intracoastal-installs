// Contact page — Premium Editorial Design
// $60K visual standard. Conversion-focused with premium form + direct contact.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, faqList } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from '../components/Schema';

const CONTACT_FAQS = [
  {
    q: 'How fast will I hear back?',
    a: 'Within one business day. Most inquiries get a same-day call from Mark or a written response if you prefer email.',
  },
  {
    q: 'Is the site evaluation really free?',
    a: 'Yes. We come out, walk the shoreline, probe the bottom, and listen to your plan at no charge. The written estimate follows within one business day.',
  },
  {
    q: 'What information should I include?',
    a: 'Your address, the type of project (floating dock, repair, lift, etc.), and a sentence about how you plan to use the dock. Photos help but are not required.',
  },
  {
    q: 'Do you offer on-site estimates?',
    a: 'Always. We do not quote docks or piers from satellite photos — every estimate is grounded in a site visit.',
  },
];

export function ContactPage() {
  const svcOptions = SERVICES.map(
    (s) => `<option value="${s.slug}">${s.name}</option>`
  ).join('');
  const cityOptions = CITIES.map(
    (c) => `<option value="${c.slug}">${c.name}, NC</option>`
  ).join('');

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    localBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: `${SITE_URL}/contact`,
      mainEntity: { '@id': `${SITE_URL}/#business` },
    },
    faqSchema(CONTACT_FAQS),
  ];

  return Layout({
    title: 'Contact Mark Lipe & Get Your Free Estimate | Intracoastal Installs',
    description: `Talk to Mark Lipe about your dock project. Call ${BUSINESS.phoneDisplay}, email ${BUSINESS.email}, or send a note. Response within one business day.`,
    canonical: `${SITE_URL}/contact`,
    schemas,
    children: html`
<!-- ═══════════════════════════════════════════════════════════════════════
     HERO — Contact: Conversion-focused
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="hero grain relative" style="min-height: clamp(340px, 40vh, 460px);">
  <div class="hero__media">
    <img src="/static/images/detail-hardware.jpg" alt="Marine-grade stainless hardware on a coastal NC dock" width="1200" height="800" fetchpriority="high" class="img-cover" style="object-position: center 60%;">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
  </div>

  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(340px, 40vh, 460px);">
    <div class="w-full pb-12 md:pb-16">
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        <span class="mx-2">/</span>
        <span class="text-white/80">Contact</span>
      </nav>
      <p class="reveal-blur kicker text-brass/80 mb-4">FREE ESTIMATE</p>
      <h1 class="reveal-blur text-display-xl text-white max-w-3xl" style="transition-delay:100ms">Tell us about your project</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-xl leading-relaxed" style="transition-delay:200ms">We respond within one business hour during open hours (M–F, 7 am – 5 pm). Call, email, or send a note below — a free site evaluation follows fast.</p>
    </div>
  </div>
</section>

${trustStrip(['Free Site Evaluation', 'Written Estimates', '1-Day Response', 'NC GC #100980'])}

<!-- ═══════════════════════════════════════════════════════════════════════
     CONTACT FORM + DIRECT INFO — Split layout
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">

      <!-- Form -->
      <div class="reveal-left">
        <div class="card p-8 md:p-10 border-t-4 border-t-brass">
          <h2 class="font-display text-display-md text-navy mb-2">Send us a note</h2>
          <p class="text-sm text-neutral-500 mb-8">All fields required unless marked optional.</p>

          <form id="contactForm" method="POST" action="${BUSINESS.formEndpoint}" class="space-y-6" novalidate>
            <input type="hidden" name="access_key" value="${BUSINESS.formAccessKey}">
            <input type="hidden" name="subject" value="New inquiry from intracoastalinstalls.com">
            <input type="hidden" name="from_name" value="Intracoastal Installs Website">
            <input type="text" name="botcheck" tabindex="-1" autocomplete="off" class="absolute opacity-0 -left-[9999px]" aria-hidden="true">

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-sm font-medium text-navy mb-2">Your name</label>
                <input id="name" name="name" type="text" required autocomplete="name" class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 placeholder:text-neutral-300" placeholder="Full name">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-navy mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" required autocomplete="tel" class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 placeholder:text-neutral-300" placeholder="(910) 555-0000">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-navy mb-2">Email</label>
              <input id="email" name="email" type="email" required autocomplete="email" class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 placeholder:text-neutral-300" placeholder="you@email.com">
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="project_type" class="block text-sm font-medium text-navy mb-2">Project type</label>
                <select id="project_type" name="project_type" required class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 appearance-none cursor-pointer">
                  <option value="">Choose service…</option>${raw(svcOptions)}<option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label for="city" class="block text-sm font-medium text-navy mb-2">City</label>
                <select id="city" name="city" required class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 appearance-none cursor-pointer">
                  <option value="">Choose city…</option>${raw(cityOptions)}<option value="other">Other coastal NC</option>
                </select>
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-navy mb-2">Tell us about the project</label>
              <textarea id="message" name="message" rows="5" required class="w-full rounded-xl border border-neutral-200 bg-sand/30 px-4 py-3 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition-all duration-200 resize-y placeholder:text-neutral-300" placeholder="Describe your dock project, location, and goals…"></textarea>
            </div>
            <p class="text-xs text-neutral-400">We use this only to respond to your inquiry. We do not share or sell your information.</p>
            <button type="submit" class="btn btn--brass w-full sm:w-auto">
              Send Message
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

            <div id="formSuccess" class="hidden mt-4 p-6 bg-sand border border-brass/30 rounded-xl" style="display:none;">
              <p class="font-display text-[1.15rem] text-navy font-semibold">Thanks — your note is in.</p>
              <p class="text-sm text-neutral-600 mt-2">We respond within one business day. For urgent matters, call ${BUSINESS.phoneDisplay}.</p>
            </div>
            <div id="formError" class="hidden mt-4 p-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm" style="display:none;">
              Something went wrong sending the form. Please call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email} directly.
            </div>
          </form>
        </div>
      </div>

      <!-- Direct Contact Info -->
      <div class="reveal-right space-y-6">
        <div class="card p-8 md:p-9">
          <h2 class="font-display text-display-sm text-navy mb-6">Get in touch directly</h2>
          <ul class="space-y-6">
            <li>
              <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">Phone</p>
              <a href="tel:${BUSINESS.phoneTel}" class="font-display text-[1.35rem] text-navy font-semibold hover:text-brass transition-colors">${BUSINESS.phoneDisplay}</a>
            </li>
            <li>
              <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">Email</p>
              <a href="mailto:${BUSINESS.email}" class="text-navy hover:text-brass transition-colors break-all font-medium">${BUSINESS.email}</a>
            </li>
            <li>
              <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">Office</p>
              <p class="text-neutral-700">${BUSINESS.address.street}<br>${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}</p>
            </li>
            <li>
              <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">Hours</p>
              <p class="text-neutral-700">Monday – Friday · ${BUSINESS.hours.open} – ${BUSINESS.hours.close}</p>
            </li>
            <li>
              <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">License</p>
              <p class="text-neutral-700 font-medium">${BUSINESS.license}</p>
            </li>
          </ul>
        </div>

        <!-- Map -->
        <div class="card overflow-hidden" data-map-embed data-map-src="https://www.google.com/maps?q=312+Olde+Point+Loop,+Hampstead,+NC+28443&output=embed" data-map-title="Intracoastal Installs office location">
          <div class="aspect-[4/3] bg-sand">
            <noscript><iframe src="https://www.google.com/maps?q=312+Olde+Point+Loop,+Hampstead,+NC+28443&output=embed" loading="lazy" title="Office map" class="w-full h-full border-0"></iframe></noscript>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

${pullQuote('We answer the phone. We show up to the site. We send the estimate. Nothing fancy — just thirty years in construction and doing it right.', BUSINESS.founder)}

<!-- ═══════════════════════════════════════════════════════════════════════
     SERVICE AREA VISUAL — Cities we serve
     ═══════════════════════════════════════════════════════════════════════ -->
<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-10">
      <p class="kicker mb-4">SERVICE AREA</p>
      <h2 class="text-display-md text-navy">Eight cities, three counties</h2>
      <p class="mt-4 text-neutral-500 text-[1.0625rem]">Our shop is in Hampstead. Most of the coast is within a 45-minute trailer haul.</p>
    </div>
    <div class="flex flex-wrap justify-center gap-3 stagger-children">
      ${raw(CITIES.map((c) => `
      <a href="/areas/${c.slug}" class="group px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:border-brass hover:shadow-elevated transition-all duration-300 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brass/40 group-hover:bg-brass transition-colors"></span>
        <span class="text-sm font-medium text-navy group-hover:text-brass transition-colors">${c.name}, NC</span>
      </a>`).join(''))}
    </div>
    <p class="mt-6 text-center text-sm text-neutral-400">Pender County · New Hanover County · Onslow County</p>
  </div>
</section>

${faqList(CONTACT_FAQS, 'Before you reach out')}
`,
  });
}
