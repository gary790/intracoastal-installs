// Shared UI partials — Premium editorial design (Bible Part 21/43)
// $60K visual standard. Cinematic components.
import { html, raw } from 'hono/html';
import { BUSINESS } from '../data/business';

// Trust Strip — thin navy band with brass glow dots
export function trustStrip(pills: string[] = BUSINESS.trustPills as unknown as string[]) {
  const items = pills
    .map((p) => `<span class="trust-strip__item"><span class="trust-strip__dot"></span>${p}</span>`)
    .join('');
  return html`<div class="trust-strip"><div class="container trust-strip__inner">${raw(items)}</div></div>`;
}

// Brass Left-Rule Pull Quote — Signature Element (Bible Part 23)
export function pullQuote(text: string, attribution?: string, kicker = 'FROM MARK LIPE') {
  return html`
<section class="section section--sand-warm">
  <div class="container max-w-default">
    <div class="reveal max-w-3xl mx-auto">
      <p class="kicker mb-6">${kicker}</p>
      <blockquote class="brass-quote">
        <p class="brass-quote__text">${text}</p>
        ${attribution ? raw(`<footer class="brass-quote__attribution">\u2014 ${attribution}</footer>`) : ''}
      </blockquote>
    </div>
  </div>
</section>`;
}

// Final CTA Band — full-width navy with brass accent + grain overlay
export function ctaBand(opts?: { heading?: string; sub?: string; btn?: string; btnHref?: string }) {
  const heading = opts?.heading || 'Tell us about your dock';
  const sub = opts?.sub || 'Free site evaluation. Written estimate within one business day. Every board, fastener, and piling listed.';
  const btn = opts?.btn || 'Get my free estimate';
  const href = opts?.btnHref || '/contact';
  return html`
<section class="section--navy section grain relative overflow-hidden">
  <!-- Decorative brass line at top -->
  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"></div>
  
  <div class="container relative z-10">
    <div class="max-w-3xl mx-auto text-center reveal">
      <div class="divider-brass mx-auto mb-8"></div>
      <h2 class="text-display-lg text-white text-balance">${heading}</h2>
      <p class="mt-5 text-[1.0625rem] text-white/65 max-w-xl mx-auto leading-relaxed">${sub}</p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="${href}" class="btn btn--brass" data-magnetic="0.2">${btn}</a>
        <a href="tel:${BUSINESS.phoneTel}" class="btn btn--outline">${BUSINESS.phoneDisplay}</a>
      </div>
    </div>
  </div>
</section>`;
}

// FAQ Accordion — Premium with smooth open/close
export function faqList(faqs: { q: string; a: string }[], heading?: string) {
  const items = faqs
    .map(
      (f, i) => `
    <details class="group border-b border-neutral-200 py-7 transition-colors hover:border-brass/30" ${i === 0 ? 'open' : ''}>
      <summary class="flex items-start justify-between gap-6 cursor-pointer select-none">
        <h3 class="font-display text-[1.1rem] md:text-[1.2rem] text-navy pr-4 font-semibold leading-snug">${f.q}</h3>
        <span class="faq-icon mt-0.5 shrink-0 w-8 h-8 rounded-full bg-sand text-brass flex items-center justify-center font-medium text-lg select-none" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-neutral-600 leading-relaxed max-w-2xl text-[0.9375rem]">${f.a}</div>
    </details>`
    )
    .join('');
  return html`
<section class="section">
  <div class="container max-w-default">
    <div class="reveal">
      ${heading ? raw(`<div class="text-center mb-12"><p class="kicker mb-4">FAQ</p><h2 class="text-display-lg text-navy">${heading}</h2></div>`) : ''}
      <div class="max-w-3xl mx-auto">${raw(items)}</div>
    </div>
  </div>
</section>`;
}

// Process Steps — numbered editorial with premium styling
export function processSteps(steps: { name: string; text: string }[], kicker = 'OUR PROCESS', heading = 'Five steps from first call to final walkthrough') {
  const items = steps
    .map(
      (s, i) => `
    <div class="reveal grid md:grid-cols-[80px_1fr] gap-4 md:gap-8 items-start" style="transition-delay:${i * 100}ms">
      <div class="flex md:flex-col items-center md:items-end gap-3">
        <span class="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-brass/20 leading-none">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="pb-8 md:pb-10 border-b border-neutral-200 last:border-0">
        <h3 class="font-display text-[1.15rem] text-navy font-semibold">${s.name}</h3>
        <p class="mt-3 text-neutral-600 leading-relaxed text-[0.9375rem]">${s.text}</p>
      </div>
    </div>`
    )
    .join('');
  return html`
<section class="section section--sand">
  <div class="container max-w-default">
    <div class="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
      <div class="reveal lg:sticky lg:top-32">
        <p class="kicker mb-4">${kicker}</p>
        <h2 class="text-display-lg text-navy mb-5">${heading}</h2>
        <div class="divider-brass"></div>
      </div>
      <div class="space-y-0">${raw(items)}</div>
    </div>
  </div>
</section>`;
}
