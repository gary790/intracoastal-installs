// About page — Premium Editorial Design
// $60K visual standard. Founder story + brand credibility.
import { html, raw } from 'hono/html';
import { Layout } from '../components/Layout';
import { trustStrip, pullQuote, ctaBand } from '../components/UI';
import { BUSINESS, SITE_URL } from '../data/business';
import {
  localBusinessSchema,
  organizationSchema,
  personSchema,
  breadcrumbSchema,
} from '../components/Schema';

export function AboutPage() {
  const schemas = [
    personSchema(),
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]),
  ];

  return Layout({
    title: `About ${BUSINESS.founder} & Our Story | Intracoastal Installs`,
    description: `Family-owned dock builder based in Hampstead, NC. ${BUSINESS.yearsInBusiness}+ years on the same coast. ${BUSINESS.licenseShort}.`,
    canonical: `${SITE_URL}/about`,
    schemas,
    children: html`
<section class="hero grain relative" style="min-height: clamp(400px, 50vh, 560px);">
  <div class="hero__media">
    <img src="/static/images/detail-hardware.jpg" alt="Marine-grade stainless steel hardware detail on a coastal dock" width="1200" height="800" fetchpriority="high" class="img-cover" style="object-position: center 50%;">
    <div class="hero__overlay bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
  </div>
  <div class="hero__content max-w-wide mx-auto px-6 md:px-12 flex items-end" style="min-height: clamp(400px, 50vh, 560px);">
    <div class="w-full pb-12 md:pb-16">
      <nav class="reveal-blur mb-6 text-sm text-white/50" aria-label="Breadcrumb">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        <span class="mx-2">/</span>
        <span class="text-white/80">About</span>
      </nav>
      <p class="reveal-blur kicker text-brass/80 mb-4">OUR STORY</p>
      <h1 class="reveal-blur text-display-xl text-white max-w-3xl" style="transition-delay:100ms">Three Decades in Construction.</h1>
      <p class="reveal-blur mt-5 text-white/70 text-[1.05rem] max-w-xl leading-relaxed" style="transition-delay:200ms">${BUSINESS.founder} started building docks on the coastal NC waterway in ${BUSINESS.foundingYear}. The standard is still refusal-driven pilings, stainless fasteners, and a written line-item estimate.</p>
    </div>
  </div>
</section>

${trustStrip(['Family-Owned', '30+ Years Construction', 'NC GC #100980', 'Fully Insured', 'Hampstead HQ'])}

<section class="section">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
      <div class="reveal-left">
        <p class="kicker mb-4">ORIGIN</p>
        <h2 class="text-display-lg text-navy mb-8">Started with a single floating dock on the ICW</h2>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem] mb-6">${BUSINESS.founder} has over thirty years in the construction industry \u2014 framing houses, building custom structures, and working with wood in coastal conditions. When he turned that experience toward docks and piers, the same precision followed. The shop at 312 Olde Point Loop has been building that way ever since.</p>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem]">We have framed piers through three named hurricanes and rebuilt dozens that the storms took out. The ones we built original came back online intact.</p>
      </div>
      <div class="reveal-right">
        <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-atlantic to-navy p-8 md:p-10 aspect-[4/5] flex flex-col justify-end">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,169,97,0.08),transparent_70%)]"></div>
          <div class="relative text-white">
            <span class="text-xs tracking-[0.15em] uppercase text-brass font-semibold">FOUNDER & GENERAL CONTRACTOR</span>
            <p class="font-display text-[1.75rem] mt-3 font-semibold">${BUSINESS.founder}</p>
            <p class="text-sm text-white/60 mt-2">${BUSINESS.licenseShort} \u00b7 Since ${BUSINESS.foundingYear}</p>
            <p class="text-xs text-white/40 mt-6">[Founder photo placeholder \u2014 awaiting client supply]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <p class="kicker mb-4">VALUES IN PRACTICE</p>
      <h2 class="text-display-lg text-navy">Three rules we will not bend</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-6 stagger-children">
      ${raw([
        { title: 'Refusal-driven pilings', text: 'Every piling we drive goes to refusal. Not to a number on a clipboard \u2014 to refusal. That is why our docks are still standing after Florence.', icon: '01' },
        { title: 'Stainless where it matters', text: '316 stainless on the saltwater side, hot-dipped galvanized inboard. Galvanized hardware fails on a five-year cycle in this air; we build for thirty.', icon: '02' },
        { title: 'Plain-language estimates', text: 'Every estimate lists every board, fastener, and piling. No \"miscellaneous,\" no surprise change orders. The estimate is the estimate.', icon: '03' },
      ].map(v => `
      <div class="card p-8 md:p-9 text-center hover:border-brass/30">
        <span class="inline-block font-display text-[3rem] font-bold text-brass/15 mb-4">${v.icon}</span>
        <h3 class="font-display text-[1.1rem] text-navy font-semibold mb-3">${v.title}</h3>
        <p class="text-neutral-600 text-[0.9375rem] leading-relaxed">${v.text}</p>
      </div>`).join(''))}
    </div>
  </div>
</section>

${pullQuote('I still walk every fastener with the homeowner before we leave the site. Every job, same standard.', BUSINESS.founder)}

<section class="section section--sand">
  <div class="container max-w-wide">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div class="reveal-left">
        <p class="kicker mb-4">COMMUNITY</p>
        <h2 class="text-display-lg text-navy mb-6">Rooted in Hampstead</h2>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem] mb-5">We live here. Our kids went to Topsail schools. We launch from the same ramps, fish the same waters, and ride the same tides as our customers.</p>
        <p class="text-neutral-600 leading-[1.8] text-[1.0625rem]">That proximity is not just convenient \u2014 it means we understand how the Intracoastal behaves season to season, what a northeast blow does to an unbraced pier, and why you need a dock that works at 3 am for a red-drum run.</p>
      </div>
      <div class="reveal-right">
        <div class="grid grid-cols-2 gap-4 stagger-children">
          <div class="card p-6 text-center hover:border-brass/30"><p class="font-display text-[2rem] text-brass font-bold">${BUSINESS.yearsInBusiness}+</p><p class="text-sm text-neutral-500 mt-2">Years on this coast</p></div>
          <div class="card p-6 text-center hover:border-brass/30"><p class="font-display text-[2rem] text-brass font-bold">8</p><p class="text-sm text-neutral-500 mt-2">Cities we serve</p></div>
          <div class="card p-6 text-center hover:border-brass/30"><p class="font-display text-[2rem] text-brass font-bold">3</p><p class="text-sm text-neutral-500 mt-2">Counties we permit in</p></div>
          <div class="card p-6 text-center hover:border-brass/30"><p class="font-display text-[2rem] text-brass font-bold">45</p><p class="text-sm text-neutral-500 mt-2">Min max trailer haul</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container max-w-wide">
    <div class="reveal text-center mb-14">
      <p class="kicker mb-4">CREDENTIALS</p>
      <h2 class="text-display-lg text-navy">Licensed, insured, local, lasting</h2>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
      ${raw([
        { label: 'License', value: 'NC GC #100980' },
        { label: 'Insurance', value: 'Liability + WC' },
        { label: 'Years on the coast', value: `${BUSINESS.yearsInBusiness}+` },
        { label: 'USA-Made parts', value: 'HDPE \u00b7 316 SS' },
      ].map(cred => `
      <div class="card p-6 md:p-7 text-center hover:border-brass/30">
        <p class="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-3">${cred.label}</p>
        <p class="font-display text-[1.25rem] text-navy font-semibold">${cred.value}</p>
      </div>`).join(''))}
    </div>
  </div>
</section>

${ctaBand({ heading: 'Talk to Mark directly', sub: `Call ${BUSINESS.phoneDisplay} or send a note. We respond within one business day.`, btn: 'Send a message' })}
`,
  });
}
