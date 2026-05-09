// Canonical business data — single source of truth (NAP, identity, credentials)
// Per Build Bible Part 28, NAP-consistent across all pages and JSON-LD.

export const BUSINESS = {
  name: 'Intracoastal Installs',
  legalName: 'Intracoastal Installs LLC',
  founder: 'Mark Lipe',
  foundingYear: 1995,
  yearsInBusiness: 30, // 30+ years in the construction industry, not dock-building
  license: 'NC General Contractor License #100980',
  licenseShort: 'NC GC #100980',
  description:
    'Family-owned dock builder and marine contractor serving coastal North Carolina with floating docks, fixed piers, boat lifts, gazebos, and waterfront repairs.',
  slogan: 'Professional Dock Building, Repair, and Replacement!',
  url: 'https://intracoastalinstalls.com',
  phoneDisplay: '(910) 612-6107',
  phoneTel: '+19106126107',
  email: 'mark@intracoastalinstalls.com',
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
  facebook: 'https://www.facebook.com/intracoastalinstalls',
  address: {
    street: '312 Olde Point Loop',
    city: 'Hampstead',
    region: 'NC',
    postalCode: '28443',
    country: 'US',
  },
  geo: { lat: 34.3683, lng: -77.7102 },
  hours: { open: '07:00', close: '17:00', days: 'Mo-Fr' },
  priceRange: '$$',
  logo: '/static/images/logo.svg',
  ogImage: '/static/images/og/og-home.jpg',
  knowsAbout: [
    'floating docks',
    'fixed piers',
    'boat lifts',
    'marine carpentry',
    'pilings',
    'gazebos',
    'CAMA permits',
    'IPE hardwood',
    'marine-grade lumber',
  ],
  trustPills: [
    '30+ Years Construction',
    'NC GC #100980',
    'Fully Insured',
    '10 Services',
    '8 Coastal Cities',
  ],
} as const;

export const SITE_URL = BUSINESS.url;
