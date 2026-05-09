// JSON-LD schema builders — Bible Part 31
import { BUSINESS, SITE_URL } from '../data/business';
import type { Service } from '../data/services';
import type { City } from '../data/cities';
import { SERVICES } from '../data/services';

export function localBusinessSchema(opts?: { areaServed?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    image: `${SITE_URL}${BUSINESS.ogImage}`,
    logo: `${SITE_URL}${BUSINESS.logo}`,
    priceRange: BUSINESS.priceRange,
    slogan: BUSINESS.slogan,
    foundingDate: String(BUSINESS.foundingYear),
    founder: { '@type': 'Person', name: BUSINESS.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: opts?.areaServed
      ? [{ '@type': 'City', name: opts.areaServed }]
      : [
          'Hampstead, NC',
          'Wilmington, NC',
          'Topsail Beach, NC',
          'Wrightsville Beach, NC',
          'Carolina Beach, NC',
          'Figure Eight Island, NC',
          'Surf City, NC',
          'Sneads Ferry, NC',
        ].map((n) => ({ '@type': 'City', name: n })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: BUSINESS.hours.open,
        closes: BUSINESS.hours.close,
      },
    ],
    sameAs: [BUSINESS.facebook],
    knowsAbout: BUSINESS.knowsAbout,
    hasCredential: BUSINESS.license,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marine Construction Services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${BUSINESS.logo}`,
    founder: { '@type': 'Person', name: BUSINESS.founder },
    foundingDate: String(BUSINESS.foundingYear),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(svc: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    serviceType: svc.name,
    description: svc.metaDescription,
    url: `${SITE_URL}/services/${svc.slug}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: [
      'Hampstead, NC',
      'Wilmington, NC',
      'Topsail Beach, NC',
      'Wrightsville Beach, NC',
      'Carolina Beach, NC',
      'Figure Eight Island, NC',
      'Surf City, NC',
      'Sneads Ferry, NC',
    ].map((n) => ({ '@type': 'City', name: n })),
    image: `${SITE_URL}${svc.ogImage}`,
  };
}

export function howToSchema(svc: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How we build ${svc.name.toLowerCase()}`,
    description: `Our 5-step process for ${svc.name.toLowerCase()} in coastal NC.`,
    step: svc.process.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.name,
      text: p.text,
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BUSINESS.founder,
    jobTitle: 'Founder & General Contractor',
    worksFor: { '@id': `${SITE_URL}/#business` },
    url: `${SITE_URL}/about`,
  };
}

export function citySchema(city: City) {
  const business = localBusinessSchema({ areaServed: `${city.name}, NC` });
  return {
    ...business,
    '@id': `${SITE_URL}/areas/${city.slug}#business`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
  };
}
