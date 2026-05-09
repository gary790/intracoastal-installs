// 8 city definitions — Bible Part 14C
export interface CityTestimonial {
  quote: string;
  author: string;
  service: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  h1: string;
  titleTag: string;
  metaDescription: string;
  subhead: string;
  primaryKeyword: string;
  trustPills: string[];
  geo: { lat: number; lng: number };
  localHook: string;
  facts: string[];
  testimonials: CityTestimonial[];
  featuredServices: string[]; // service slugs
  adjacent: string[]; // city slugs
  faqs: { q: string; a: string }[];
  image: string;
  ogImage: string;
  mapEmbed: string;
}

export const CITIES: City[] = [
  {
    slug: 'hampstead-nc',
    name: 'Hampstead',
    county: 'Pender County',
    h1: 'Hampstead Floating Docks and Pier Builds',
    titleTag: 'Dock Builder in Hampstead, NC | Intracoastal Installs',
    metaDescription:
      'Floating docks, fixed piers, and boat lifts in Hampstead, NC. Local crew based at 312 Olde Point Loop. NC GC #100980.',
    subhead:
      'We are based in Hampstead. Most of our crew lives within ten miles of your bulkhead.',
    primaryKeyword: 'dock builder Hampstead NC',
    trustPills: ['Local HQ', '3\u20134 ft Tide Swing', 'Pender CAMA'],
    geo: { lat: 34.3683, lng: -77.7102 },
    localHook:
      'Our shop is at 312 Olde Point Loop. We see Hampstead\u2019s 3\u20134 foot tide swings every day, and we spec heavier framing lumber on Olde Point and Belvedere bulkheads because of it.',
    facts: [
      'Mature waterfront homes from Olde Point to Belvedere',
      '3\u20134 ft tide swing requires heavier lumber spec',
      'Pender County CAMA general permits handled in-house',
      '30+ years in the construction industry, building docks within ten miles of our shop',
    ],
    testimonials: [
      { quote: 'Mark and his crew replaced our 30-year-old dock in under a week. Every board is level, every fastener is stainless.', author: 'Homeowner', service: 'Floating Dock' },
      { quote: 'Living on Olde Point, the tide swings are brutal. Mark specified heavier lumber and our dock has not shifted once.', author: 'Homeowner', service: 'Fixed Pier' },
    ],
    featuredServices: ['floating-docks', 'fixed-piers', 'boat-lifts', 'dock-repairs', 'gazebos'],
    adjacent: ['surf-city-nc', 'topsail-beach-nc'],
    faqs: [
      {
        q: 'How fast can you get to a Hampstead site?',
        a: 'Same day in most cases. Our shop is at 312 Olde Point Loop \u2014 most Hampstead jobs are within a ten-minute drive.',
      },
      {
        q: 'Do you handle Pender County CAMA permits?',
        a: 'Yes. Hampstead docks fall under Pender County CAMA general permits and we walk the application through with you.',
      },
      {
        q: 'What spec lumber do you use in Hampstead?',
        a: 'On the 3\u20134 foot tide swings around Olde Point and Belvedere we step the framing lumber up to 2x10 stringers. Standard 2x8 is fine on shorter spans.',
      },
    ],
    image: '/static/images/cities/hampstead.jpg',
    ogImage: '/static/images/og/og-hampstead.jpg',
    mapEmbed:
      'https://www.google.com/maps?q=Hampstead,NC&output=embed',
  },
  {
    slug: 'wilmington-nc',
    name: 'Wilmington',
    county: 'New Hanover County',
    h1: 'Wilmington Dock and Pier Construction',
    titleTag: 'Dock Builder in Wilmington, NC | Intracoastal Installs',
    metaDescription:
      'Cape Fear River and ICW dock builds in Wilmington, NC. Historic-home retrofits, salt-spec hardware. NC GC #100980.',
    subhead:
      'Cape Fear River and ICW docks for Wilmington \u2014 historic-home retrofits and severe salt-air corrosion handled.',
    primaryKeyword: 'dock builder Wilmington NC',
    trustPills: ['Cape Fear & ICW', 'Historic Retrofit', 'New Hanover CAMA'],
    geo: { lat: 34.2257, lng: -77.9447 },
    localHook:
      'Cape Fear River pilings need different driving than ICW pilings \u2014 the bottom is softer in the river basin and refusal can be six feet deeper. We adjust spec on every Wilmington job.',
    facts: [
      'Cape Fear River bottom requires deeper piling drives than ICW',
      'Historic-district homes need trim profiles that match the original',
      'New Hanover County CAMA permits processed locally',
      'Severe salt-air corrosion zone \u2014 316 stainless throughout',
    ],
    testimonials: [
      { quote: 'Mark probed the Cape Fear bottom and found we needed 10x10 pilings \u2014 the other guys quoted 8x8 without even checking.', author: 'Homeowner', service: 'Fixed Pier' },
      { quote: 'Historic district dock with trim that matches the house. Nobody else offered to try.', author: 'Homeowner', service: 'Custom Dock' },
    ],
    featuredServices: ['fixed-piers', 'floating-docks', 'dock-repairs', 'pilings', 'custom-docks'],
    adjacent: ['wrightsville-beach-nc', 'carolina-beach-nc'],
    faqs: [
      {
        q: 'Cape Fear River or ICW \u2014 does it matter?',
        a: 'Yes. The Cape Fear River basin is softer-bottomed than the ICW, so pilings drive deeper and we step up to 10x10 in most river projects.',
      },
      {
        q: 'Do you work in the historic district?',
        a: 'Yes. We have built and retrofitted docks in the Wilmington historic district with trim profiles that match the originals.',
      },
      {
        q: 'How bad is salt-air corrosion in Wilmington?',
        a: 'It is severe. We use 316 stainless throughout on Wilmington jobs \u2014 galvanized hardware fails on a 5\u20137 year cycle here.',
      },
    ],
    image: '/static/images/cities/wilmington.jpg',
    ogImage: '/static/images/og/og-wilmington.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Wilmington,NC&output=embed',
  },
  {
    slug: 'topsail-beach-nc',
    name: 'Topsail Beach',
    county: 'Pender County',
    h1: 'Topsail Beach Sound-Side Dock Builds',
    titleTag: 'Dock Builder in Topsail Beach, NC | Intracoastal Installs',
    metaDescription:
      'Sound-side floating docks and piers in Topsail Beach, NC. Hurricane-rated, dual-permit experienced. NC GC #100980.',
    subhead:
      'Sound-side floating docks and fixed piers for Topsail Beach, designed for shallow draft and hurricane-rated.',
    primaryKeyword: 'dock builder Topsail Beach NC',
    trustPills: ['Sound-Side', 'Hurricane-Rated', 'Dual-Permit'],
    geo: { lat: 34.3733, lng: -77.5747 },
    localHook:
      'Topsail Beach docks are sound-side only \u2014 ocean-side construction is not permitted. We size pilings for the shallow draft and run a CAMA general permit plus the town review.',
    facts: [
      'Sound-side construction only \u2014 no ocean-side dock permits',
      'Shallow draft requires careful piling depth surveys',
      'Hurricane-rated framing required (Florence reconstruction zone)',
      'Dual permits \u2014 CAMA + town of Topsail Beach review',
    ],
    testimonials: [
      { quote: 'Our gazebo survived Florence with zero damage. The neighbors lost theirs.', author: 'Homeowner', service: 'Gazebo' },
      { quote: 'Sound-side floating dock rides the tides perfectly \u2014 even on those super-low winter draws.', author: 'Homeowner', service: 'Floating Dock' },
    ],
    featuredServices: ['floating-docks', 'fixed-piers', 'boat-lifts', 'dock-repairs', 'gazebos'],
    adjacent: ['surf-city-nc', 'hampstead-nc'],
    faqs: [
      {
        q: 'Do I need a town permit on Topsail Beach?',
        a: 'Yes. Topsail Beach requires a town review on top of the CAMA general permit. We handle both.',
      },
      {
        q: 'How shallow is too shallow for a floating dock?',
        a: 'A floating dock needs about 18 inches of water at low tide. We probe the bottom on every site and recommend a fixed pier or hybrid if depth is borderline.',
      },
      {
        q: 'Are your docks hurricane-rated?',
        a: 'Yes. We frame to refusal-driven pilings and use stainless hardware throughout. Most of our Topsail Beach docks survived Florence intact.',
      },
    ],
    image: '/static/images/cities/topsail-beach.jpg',
    ogImage: '/static/images/og/og-topsail-beach.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Topsail+Beach,NC&output=embed',
  },
  {
    slug: 'wrightsville-beach-nc',
    name: 'Wrightsville Beach',
    county: 'New Hanover County',
    h1: 'Wrightsville Beach Boat Lifts and Dock Builds',
    titleTag: 'Dock Builder in Wrightsville Beach, NC | Intracoastal Installs',
    metaDescription:
      'Boat lifts and dock construction in Wrightsville Beach, NC. Tight lots, tidal currents, dual permits. NC GC #100980.',
    subhead:
      'Boat lifts and dock builds for Wrightsville Beach \u2014 tight lots, strong currents, and dual permits handled.',
    primaryKeyword: 'dock builder Wrightsville Beach NC',
    trustPills: ['Strong Currents', 'Tight Lot Layout', 'Dual Permits'],
    geo: { lat: 34.2085, lng: -77.7960 },
    localHook:
      'Banks Channel and Motts Channel run hard at full tide. We size lift cradles and pier framing for the current load every Wrightsville Beach job sees.',
    facts: [
      'Strong tidal currents in Banks Channel and Motts Channel',
      'Boat-lift demand is the highest on our coast',
      'Tight lot layouts require careful dock geometry',
      'Dual permits \u2014 New Hanover County + town of Wrightsville Beach',
    ],
    testimonials: [
      { quote: 'Banks Channel runs hard but the lift has not budged in two hurricane seasons. Correctly sized from day one.', author: 'Homeowner', service: 'Boat Lift' },
      { quote: 'Tight lot, 26 feet of frontage. Mark fit a pier and a lift where the other guys said it couldn\'t be done.', author: 'Homeowner', service: 'Fixed Pier' },
    ],
    featuredServices: ['boat-lifts', 'fixed-piers', 'floating-docks', 'dock-repairs', 'custom-docks'],
    adjacent: ['wilmington-nc', 'figure-eight-island-nc'],
    faqs: [
      {
        q: 'Will my lift handle Wrightsville Beach currents?',
        a: 'Yes if it is sized right. We spec lifts for the boat plus 25% safety on Wrightsville Beach jobs and run a 4-post cradle on most builds.',
      },
      {
        q: 'How do you handle tight lot layouts?',
        a: 'We measure twice and lay out the dock on paper before any piling drives. Most Wrightsville Beach lots have less than 30 feet of frontage.',
      },
      {
        q: 'Do I need a town permit?',
        a: 'Yes. Wrightsville Beach has its own dock review on top of New Hanover County CAMA. We process both for you.',
      },
    ],
    image: '/static/images/cities/wrightsville-beach.jpg',
    ogImage: '/static/images/og/og-wrightsville-beach.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Wrightsville+Beach,NC&output=embed',
  },
  {
    slug: 'carolina-beach-nc',
    name: 'Carolina Beach',
    county: 'New Hanover County',
    h1: 'Carolina Beach Dock and Boat Lift Builds',
    titleTag: 'Dock Builder in Carolina Beach, NC | Intracoastal Installs',
    metaDescription:
      'Dock construction and boat lifts at Carolina Beach Yacht Basin and ICW. Wind-braced piers. NC GC #100980.',
    subhead:
      'Yacht Basin and ICW dock construction for Carolina Beach, with wind-braced piers and high-demand boat lifts.',
    primaryKeyword: 'dock builder Carolina Beach NC',
    trustPills: ['Yacht Basin Experience', 'Wind-Braced Piers', 'High Lift Demand'],
    geo: { lat: 34.0354, lng: -77.8936 },
    localHook:
      'Carolina Beach Yacht Basin has its own wave-state on a windy day. We add wind bracing to every pier we build there and oversize the pilings under boat lifts.',
    facts: [
      'Yacht Basin construction has a unique wave-state',
      'Wind bracing required on most piers',
      'Boat-lift demand is high \u2014 most homes want a lift',
      'Dual permits \u2014 New Hanover CAMA + town of Carolina Beach',
    ],
    testimonials: [
      { quote: 'Yacht Basin waves would rock the old dock something fierce. Wind bracing made all the difference on the rebuild.', author: 'Homeowner', service: 'Fixed Pier' },
      { quote: 'Lift is rock solid even on windy days when the basin chops up. Best investment on the dock.', author: 'Homeowner', service: 'Boat Lift' },
    ],
    featuredServices: ['boat-lifts', 'fixed-piers', 'floating-docks', 'gazebos', 'dock-repairs'],
    adjacent: ['wilmington-nc', 'wrightsville-beach-nc'],
    faqs: [
      {
        q: 'Do you work in the Yacht Basin?',
        a: 'Yes \u2014 we have built and repaired docks throughout the Yacht Basin. Wave-state there is sharper than the open ICW so we frame heavier.',
      },
      {
        q: 'Wind bracing on a residential pier \u2014 necessary?',
        a: 'On Carolina Beach, yes. The fetch from the Cape Fear and the basin runs hard in a southwest wind, and unbraced piers walk over time.',
      },
      {
        q: 'Can you do a lift on a small lot?',
        a: 'Yes. We have done 4-post cradle lifts on Carolina Beach lots with 25 feet of frontage. The trick is the cradle width and the pile spacing.',
      },
    ],
    image: '/static/images/cities/carolina-beach.jpg',
    ogImage: '/static/images/og/og-carolina-beach.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Carolina+Beach,NC&output=embed',
  },
  {
    slug: 'figure-eight-island-nc',
    name: 'Figure Eight Island',
    county: 'New Hanover County',
    h1: 'Figure Eight Island Waterfront Construction',
    titleTag: 'Dock Builder for Figure Eight Island, NC | Intracoastal Installs',
    metaDescription:
      'Custom dock and waterfront construction for Figure Eight Island, NC. IPE hardwood, copper-finish hardware, custom gazebos. NC GC #100980.',
    subhead:
      'Custom dock and waterfront construction for Figure Eight Island residences \u2014 IPE hardwood, copper-finish hardware, custom gazebos.',
    primaryKeyword: 'dock builder Figure Eight Island NC',
    trustPills: ['Private Island Access', 'IPE Hardwood', 'Custom Designs'],
    geo: { lat: 34.2705, lng: -77.7400 },
    localHook:
      'Figure Eight Island access runs through one gatehouse. We schedule deliveries and crew arrivals through the homeowner association so there is one bridge trip a day, not five.',
    facts: [
      'Private island access via single gatehouse',
      'Variable channel exposure \u2014 Banks and Nixon Channels',
      'High-end residential market \u2014 IPE hardwood and copper-finish standard',
      'New Hanover County permitting plus private association coordination',
    ],
    testimonials: [
      { quote: 'IPE dock is three years old and still looks brand new. No rot, no gray, no complaints.', author: 'Homeowner', service: 'Custom Dock' },
      { quote: 'The crew coordinated through the gatehouse perfectly \u2014 one trip a day, zero disruption to the neighbors.', author: 'Homeowner', service: 'Gazebo' },
    ],
    featuredServices: ['custom-docks', 'floating-docks', 'gazebos', 'waterfront-decks', 'boat-lifts'],
    adjacent: ['wrightsville-beach-nc', 'wilmington-nc'],
    faqs: [
      {
        q: 'How do you coordinate access to Figure Eight Island?',
        a: 'We schedule deliveries and crew arrivals through the gatehouse and homeowner, staging materials so we minimize bridge trips.',
      },
      {
        q: 'Do you build with IPE on Figure Eight Island?',
        a: 'Yes \u2014 IPE Brazilian hardwood is a top material on the island, paired with copper-finish hardware and custom gazebos.',
      },
      {
        q: 'Do you work with the homeowner association?',
        a: 'Yes. Figure Eight Island has its own dock and bulkhead review and we route every set of plans through it.',
      },
    ],
    image: '/static/images/cities/figure-eight-island.jpg',
    ogImage: '/static/images/og/og-figure-eight-island.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Figure+Eight+Island,NC&output=embed',
  },
  {
    slug: 'surf-city-nc',
    name: 'Surf City',
    county: 'Pender / Onslow County',
    h1: 'Surf City Sound-Side Floating Docks',
    titleTag: 'Dock Builder in Surf City, NC | Intracoastal Installs',
    metaDescription:
      'Sound-side floating docks and fixed piers in Surf City, NC. Topsail Sound and Stump Sound expertise. NC GC #100980.',
    subhead:
      'Topsail Sound and Stump Sound floating docks and fixed piers across Surf City\u2019s sound-side waterfronts.',
    primaryKeyword: 'dock builder Surf City NC',
    trustPills: ['Sound-Side', 'Hurricane-Rated', 'Pender / Onslow'],
    geo: { lat: 34.4263, lng: -77.5450 },
    localHook:
      'Surf City sits across two counties \u2014 north of the swing bridge is Onslow, south is Pender. We file the right permit on the right side every time.',
    facts: [
      'County boundary runs through town \u2014 dual permitting reach',
      'Topsail Sound and Stump Sound \u2014 both sound-side waters',
      'Heavy floating-dock demand for shallow-draft homes',
      'Hurricane Florence reconstruction experience',
    ],
    testimonials: [
      { quote: 'Mark filed the right county permit without us even asking. Other contractors guessed wrong and had to start over.', author: 'Homeowner', service: 'Floating Dock' },
      { quote: 'Our Florence rebuild is stronger than the original ever was. Stainless throughout and pilings to refusal.', author: 'Homeowner', service: 'Dock Repair' },
    ],
    featuredServices: ['floating-docks', 'fixed-piers', 'boat-lifts', 'dock-repairs', 'gazebos'],
    adjacent: ['topsail-beach-nc', 'sneads-ferry-nc'],
    faqs: [
      {
        q: 'Pender or Onslow \u2014 which county is my home in?',
        a: 'It depends which side of the swing bridge you are on. We confirm county before we file CAMA paperwork on every Surf City job.',
      },
      {
        q: 'Floating or fixed for sound-side Surf City?',
        a: 'Most Surf City sound-side homes do better with a floating dock \u2014 the shallow draft and tide swing fight a fixed pier.',
      },
      {
        q: 'Did you work the Florence rebuild here?',
        a: 'Yes. We reconstructed dozens of Surf City docks after Florence, and the ones we built original survived intact.',
      },
    ],
    image: '/static/images/cities/surf-city.jpg',
    ogImage: '/static/images/og/og-surf-city.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Surf+City,NC&output=embed',
  },
  {
    slug: 'sneads-ferry-nc',
    name: 'Sneads Ferry',
    county: 'Onslow County',
    h1: 'Sneads Ferry Commercial and Residential Docks',
    titleTag: 'Dock Builder in Sneads Ferry, NC | Intracoastal Installs',
    metaDescription:
      'Commercial and residential dock builds in Sneads Ferry, NC. New River Inlet currents, Onslow CAMA. NC GC #100980.',
    subhead:
      'Commercial fishing docks and residential pier builds in Sneads Ferry, designed for New River Inlet currents.',
    primaryKeyword: 'dock builder Sneads Ferry NC',
    trustPills: ['Inlet Currents', 'Onslow CAMA', 'Residential & Commercial'],
    geo: { lat: 34.5471, lng: -77.3886 },
    localHook:
      'New River Inlet currents move six to eight knots on a peak tide. Every Sneads Ferry pier we frame gets storm bracing and oversized pilings.',
    facts: [
      'Commercial fishing dock experience',
      'Onslow County CAMA + Coastal Resources Commission rules',
      'Strong New River Inlet currents require oversized pilings',
      'Residential and small commercial scopes',
    ],
    testimonials: [
      { quote: 'New River current is no joke. Mark oversized the pilings and added bracing \u2014 pier hasn\'t moved in three storm seasons.', author: 'Homeowner', service: 'Fixed Pier' },
      { quote: 'Commercial charter dock holding up great. The fishermen are rough on it and it just takes it.', author: 'Business Owner', service: 'Fixed Pier' },
    ],
    featuredServices: ['fixed-piers', 'floating-docks', 'pilings', 'dock-repairs', 'boat-lifts'],
    adjacent: ['surf-city-nc', 'topsail-beach-nc'],
    faqs: [
      {
        q: 'Do you build commercial docks?',
        a: 'Yes \u2014 small commercial fishing and charter docks in Sneads Ferry are part of our regular work.',
      },
      {
        q: 'How strong are the inlet currents?',
        a: 'New River Inlet runs six to eight knots on a peak tide. We oversize pilings and add storm bracing on every pier in that current zone.',
      },
      {
        q: 'Onslow County permitting \u2014 different than Pender?',
        a: 'Yes. Onslow CAMA has its own review timelines and the Coastal Resources Commission rules apply. We file in both counties depending on the job.',
      },
    ],
    image: '/static/images/cities/sneads-ferry.jpg',
    ogImage: '/static/images/og/og-sneads-ferry.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Sneads+Ferry,NC&output=embed',
  },
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));
