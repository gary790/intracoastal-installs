// 10 service definitions — Bible Part 14B
export interface ServiceTestimonial {
  quote: string;
  author: string;
  city: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  titleTag: string;
  metaDescription: string;
  subhead: string;
  trustPills: string[];
  problem: string;
  included: string[];
  process: { name: string; text: string }[];
  materials: string[];
  pricing: string;
  warranty: string;
  brandedAnswer: { term: string; explanation: string };
  faqs: { q: string; a: string }[];
  testimonials: ServiceTestimonial[];
  related: string[]; // service slugs
  image: string;
  ogImage: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'floating-docks',
    name: 'Floating Docks',
    shortName: 'Floating Docks',
    h1: 'Floating Docks Built to Outlast Coastal NC Salt',
    titleTag: 'Floating Docks in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Floating docks for sound-side and ICW homes in coastal NC. Marine-grade lumber, stainless fasteners, hurricane-rated. NC GC #100980.',
    subhead:
      'Sound-side floating docks engineered for 3\u20134 ft tide swings, designed and installed from Hampstead to Sneads Ferry.',
    trustPills: ['Marine-Grade Lumber', 'Stainless Hardware', 'Hurricane-Rated'],
    brandedAnswer: { term: 'The Tide-Match Float System', explanation: 'Our proprietary sizing method matches float drum displacement to your exact tide range, shoreline fetch, and vessel weight \u2014 so the dock rides level at every water stage without bottoming out at low tide or over-floating at high.' },
    problem:
      'Tide swings of three to four feet make a fixed pier the wrong tool on most coastal NC waterfronts. A floating dock keeps your boat at deck level at every tide \u2014 and stays put when storms roll in.',
    included: [
      'Site evaluation and CAMA permit-aware design',
      'HDPE float drums or encapsulated foam, fully bonded',
      'Marine-grade lumber decking with stainless 316 fasteners',
      'Galvanized truss frame, gangway, pile guides, cleats',
      'Removal and disposal of existing dock if requested',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We visit the site, measure depths, check tide swing, and review CAMA permit needs.' },
      { name: 'Permit-Aware Design', text: 'We sketch the layout to fit your shoreline and the rules of your county.' },
      { name: 'Material Order', text: 'Marine-grade lumber, 316 stainless fasteners, HDPE floats, and pile guides are delivered.' },
      { name: 'Build & Install', text: 'Our crew assembles on the bulkhead, then floats the dock into place and bonds it to your guides.' },
      { name: 'Walkthrough & Cleanup', text: 'We walk every fastener with you, leave the site cleaner than we found it, and hand you a maintenance sheet.' },
    ],
    materials: [
      'Pressure-treated marine-grade lumber',
      '316 stainless steel fasteners',
      'HDPE float drums (USA-made)',
      'Galvanized truss framing',
      'Aluminum gangways (optional)',
    ],
    pricing:
      'Free site evaluation, written estimate within one business day. Most residential floating docks fall in the $12,000 \u2013 $35,000 range, plus permits.',
    warranty: 'One-year workmanship warranty on every install. Materials carry their manufacturer warranty.',
    faqs: [
      { q: 'How long does a floating dock take to install?', a: 'Most residential floating docks are built in 3 to 7 working days once permits are in hand and material is on site.' },
      { q: 'Do you handle CAMA permits?', a: 'Yes. We design the dock to fit CAMA general permit rules and walk the application through Pender, New Hanover, or Onslow County with you.' },
      { q: 'What kind of float drums do you use?', a: 'We use USA-made HDPE float drums rated for marine use. They resist UV, salt, and impact better than encapsulated foam.' },
    ],
    testimonials: [
      { quote: 'Mark and his crew replaced our 30-year-old dock in under a week. Every board is level, every fastener is stainless. This is how it should be done.', author: 'Homeowner', city: 'Hampstead, NC' },
      { quote: 'The floating dock rides the 4-foot tide perfectly. No more climbing down a ladder at low water.', author: 'Homeowner', city: 'Topsail Beach' },
    ],
    related: ['fixed-piers', 'boat-lifts', 'pilings'],
    image: '/static/images/services/svc-floating-docks.jpg',
    ogImage: '/static/images/og/og-floating-docks.jpg',
  },
  {
    slug: 'fixed-piers',
    name: 'Fixed Piers',
    shortName: 'Fixed Piers',
    h1: 'Fixed Piers That Stand Strong for Decades',
    titleTag: 'Fixed Piers in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Fixed piers built to outlast hurricanes on the Cape Fear River and ICW. Pressure-treated pilings, stainless hardware. NC GC #100980.',
    subhead:
      'Hurricane-rated pier construction for the Cape Fear River, ICW, and Topsail Sound, built on pressure-treated pilings.',
    trustPills: ['Hurricane-Rated', 'Pressure-Treated Pilings', '30+ Years Construction'],
    brandedAnswer: { term: 'The Refusal-Driven Piling Standard', explanation: 'Every piling we set goes to refusal \u2014 the point where the hydraulic driver cannot advance it further. We do not stop at a number on a clipboard. This standard is why our piers survived Florence when hundreds of others did not.' },
    problem:
      'A pier that wobbles in a six-knot tide will not survive a Category 1 storm. Most pier failures we repair started with the wrong piling depth or undersized hardware.',
    included: [
      'CAMA permit-aware piling layout',
      'Pressure-treated 8x8 or 10x10 pilings driven to refusal',
      'Marine-grade lumber decking, stringers, and railings',
      '316 stainless lag bolts and through-bolts',
      'Optional T-head, L-head, or covered roof structure',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We probe the bottom, check water depth, and confirm the pier length your shoreline allows.' },
      { name: 'Permit-Aware Design', text: 'We draw the layout for your CAMA general permit and county sign-off.' },
      { name: 'Pile Driving', text: 'We barge in the pile driver and set every piling to refusal so the pier stays put in a storm.' },
      { name: 'Frame & Deck', text: 'Stringers, decking, and railing go on with stainless fasteners, square and level.' },
      { name: 'Walkthrough & Cleanup', text: 'We test every railing, sweep the deck, and leave a copy of the as-built sketch for your records.' },
    ],
    materials: [
      '8x8 or 10x10 pressure-treated pilings',
      '2x8 marine-grade stringers',
      '5/4 deck boards or IPE hardwood',
      '316 stainless through-bolts',
      'Aluminum or stainless cleats',
    ],
    pricing:
      'Free site evaluation. Most residential fixed piers fall in the $18,000 \u2013 $60,000 range depending on length and head shape, plus permits.',
    warranty: 'One-year workmanship warranty. Pilings carry their treatment warranty.',
    faqs: [
      { q: 'How deep do you drive pilings?', a: 'We drive every piling to refusal \u2014 usually 12 to 20 feet depending on the bottom. We do not stop short to save time.' },
      { q: 'Will my pier survive a hurricane?', a: 'A pier built to refusal with stainless hardware and a properly engineered roof will survive a direct Category 2 hit. Florence took out hundreds of piers in 2018; ours stayed.' },
      { q: 'Do you build covered piers?', a: 'Yes, we frame metal-roof covered T-heads and gazebo-style ends. We size the roof for the local wind zone.' },
    ],
    testimonials: [
      { quote: 'Our pier survived Florence with zero damage while the neighbor lost theirs. Every piling was driven to refusal \u2014 that made the difference.', author: 'Homeowner', city: 'Wrightsville Beach' },
      { quote: 'We called three contractors. Mark was the only one who probed the bottom before quoting.', author: 'Homeowner', city: 'Wilmington, NC' },
    ],
    related: ['floating-docks', 'pilings', 'boat-lifts'],
    image: '/static/images/services/svc-fixed-piers.jpg',
    ogImage: '/static/images/og/og-fixed-piers.jpg',
  },
  {
    slug: 'boat-lifts',
    name: 'Boat Lifts',
    shortName: 'Boat Lifts',
    h1: 'Boat Lifts That Protect Your Hull All Season',
    titleTag: 'Boat Lifts in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Boat lifts for vessels up to 24,000 lb on the ICW and Cape Fear River. USA-made motors, galvanized cradles. NC GC #100980.',
    subhead:
      'Cradle, beam, and PWC lifts sized to your boat and your dock \u2014 installed across coastal NC.',
    trustPills: ['Up to 24,000 lb', 'USA-Made Motors', 'Stainless Cables'],
    brandedAnswer: { term: 'The Dry-Weight-Plus-25 Sizing Rule', explanation: 'We size every lift to your boat\'s dry weight plus fuel, gear, and a 25% safety margin. This prevents cable fatigue, motor strain, and the premature failures we see on under-spec\'d lifts across the coast.' },
    problem:
      'Leaving your boat in coastal NC saltwater all season costs you bottom paint, lower units, and resale value. The right lift takes the boat out of the water in under two minutes.',
    included: [
      'Lift sizing based on dry weight + 25% safety',
      'Galvanized I-beam cradle or 4-post beam lift',
      '316 stainless cables and pulleys',
      '110V or 220V USA-made motors',
      'Remote control + auto-stop upper limit',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We check water depth at low tide, your boat dry weight, and the dock geometry.' },
      { name: 'Lift Sizing', text: 'We spec the lift to your boat plus 25% safety margin and choose 4-post or 8-post.' },
      { name: 'Install', text: 'We set the pilings or bolt to your existing pier, run the motor, and balance the cradle.' },
      { name: 'Test Cycle', text: 'We run 10 full cycles with weight to bed in cables and confirm clearance.' },
      { name: 'Walkthrough', text: 'We hand you the remote, the wiring diagram, and the maintenance schedule.' },
    ],
    materials: [
      'Galvanized I-beam cradle frame',
      '316 stainless cables and pulleys',
      'USA-made 110V/220V motors',
      'Hot-dipped galvanized hardware',
      'Marine-grade plywood bunks',
    ],
    pricing:
      'Free site evaluation. Most 4-post 10,000 lb lifts fall in the $7,500 \u2013 $14,000 range installed. PWC lifts start at $3,500.',
    warranty: 'One-year workmanship warranty. Motors and cables carry their manufacturer warranty.',
    faqs: [
      { q: 'How big a lift do I need?', a: 'Take your boat dry weight, add fuel and gear, then add 25%. A 22-foot center console with a 250 hp outboard usually needs a 10,000 lb lift.' },
      { q: 'Can you add a lift to my existing dock?', a: 'In most cases yes. We inspect the pilings and framing first; if they are sound, we bolt the lift right to them.' },
      { q: 'Do lifts work in shallow water?', a: 'Yes. We size the cradle for your low-tide depth and can use a beam lift if water is very shallow.' },
    ],
    testimonials: [
      { quote: 'The lift takes my 22-foot bay boat out of the water in ninety seconds flat. Best investment I have made for this dock.', author: 'Homeowner', city: 'Carolina Beach' },
      { quote: 'Mark sized the lift correctly the first time. No guessing \u2014 he weighed the boat, added margin, and it works every time.', author: 'Homeowner', city: 'Wrightsville Beach' },
    ],
    related: ['fixed-piers', 'floating-docks', 'pilings'],
    image: '/static/images/services/svc-boat-lifts.jpg',
    ogImage: '/static/images/og/og-boat-lifts.jpg',
  },
  {
    slug: 'dock-repairs',
    name: 'Dock Repairs',
    shortName: 'Dock Repairs',
    h1: 'Dock Repairs Done Right the First Time',
    titleTag: 'Dock Repairs in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Dock and pier repair in coastal NC. Decking, pilings, framing, hardware. Storm and rot specialists. NC GC #100980.',
    subhead:
      'Decking, framing, pilings, and hardware repair across the eight cities we serve \u2014 fast turnarounds, real warranties.',
    trustPills: ['Storm Specialists', 'Same-Week Estimates', 'Warranty Work'],
    brandedAnswer: { term: 'The Full-Probe Structural Inspection', explanation: 'Before quoting any repair, we probe every piling and tap every board to map the hidden damage \u2014 not just the visible rot. Most dock failures we fix started with invisible stringer decay that a surface inspection missed.' },
    problem:
      'A loose board today is a structural failure next year. We repair the rot you can see and the framing damage you cannot.',
    included: [
      'Full structural inspection (pilings, framing, hardware, decking)',
      'Replace rotten decking with marine-grade lumber',
      'Sister or replace stringers and joists',
      'Reset or replace pilings as needed',
      'Replace corroded fasteners with 316 stainless',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We probe every piling and tap every board to find every soft spot, not just the visible ones.' },
      { name: 'Written Scope', text: 'You get a written estimate that lists every board, fastener, and piling we plan to replace.' },
      { name: 'Repair', text: 'We mobilize material, demo the damaged sections, and rebuild to original or upgraded spec.' },
      { name: 'Hardware Refresh', text: 'We swap out corroded galvanized hardware for 316 stainless wherever it makes sense.' },
      { name: 'Walkthrough', text: 'We walk the dock with you, show every repair, and leave a maintenance sheet.' },
    ],
    materials: [
      'Pressure-treated marine-grade lumber',
      '316 stainless fasteners',
      'Pressure-treated 8x8 piling stock',
      'Aluminum or stainless cleats',
      'Hot-dipped galvanized framing brackets',
    ],
    pricing:
      'Free site evaluation. Most repair jobs fall in the $1,500 \u2013 $15,000 range. Storm-damage scopes are quoted per inspection.',
    warranty: 'One-year workmanship warranty on all repair work.',
    faqs: [
      { q: 'How fast can you start?', a: 'Most repairs start within two to three weeks of estimate sign-off. Storm-damage emergencies move to the front.' },
      { q: 'Should I repair or replace?', a: 'If more than 40% of the framing or pilings are compromised, replacement usually costs less per year than chasing repairs. We tell you the truth either way.' },
      { q: 'Do you work with insurance?', a: 'Yes. We provide written scopes, photos, and material lists that adjusters can process directly.' },
    ],
    testimonials: [
      { quote: 'We thought we needed a full replacement. Mark found only the stringers were gone and saved us $20,000 on what we expected to spend.', author: 'Homeowner', city: 'Hampstead, NC' },
      { quote: 'Storm took out four boards and bent the cleats. Mark had new stainless on within the week.', author: 'Homeowner', city: 'Surf City' },
    ],
    related: ['marine-carpentry', 'pilings', 'fixed-piers'],
    image: '/static/images/services/svc-dock-repairs.jpg',
    ogImage: '/static/images/og/og-dock-repairs.jpg',
  },
  {
    slug: 'gazebos',
    name: 'Gazebos',
    shortName: 'Gazebos',
    h1: 'Waterfront Gazebos for Shade and Storms',
    titleTag: 'Waterfront Gazebos in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Custom waterfront gazebos for piers and decks in coastal NC. Metal roofs, IPE hardwood, hurricane-rated. NC GC #100980.',
    subhead:
      'Metal-roofed and IPE-trimmed gazebos that anchor your pier and shade your view from Hampstead to Carolina Beach.',
    trustPills: ['Metal Roofs', 'Hurricane-Rated', 'IPE Hardwood Available'],
    brandedAnswer: { term: 'The Hurricane-Strap Roof System', explanation: 'Every gazebo we frame uses Simpson hurricane straps at every rafter-to-post connection and metal-roof panels rated for 130 mph. Kit gazebos skip these connections \u2014 ours are bolted to refusal-driven pilings and framed to survive direct squalls.' },
    problem:
      'Most "kit" gazebos blow away in the first 70-knot squall. A real waterfront gazebo is framed like a house and bolted to pilings.',
    included: [
      'Custom 8x8, 10x10, 12x12, or 14x14 footprint',
      'Pressure-treated framing on dedicated pilings',
      'Standing-seam or 5V-crimp metal roof',
      'IPE, cedar, or PT decking and rails',
      'Optional electrical and ceiling fan rough-in',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We measure the pier, check piling spacing, and lay out the gazebo to your view.' },
      { name: 'Custom Design', text: 'We sketch the roof pitch, post style, and rail detail before any saw runs.' },
      { name: 'Frame & Roof', text: 'Posts go up first, then the roof rafters, then the metal roof and ridge cap.' },
      { name: 'Trim & Finish', text: 'IPE rails, cedar trim, or pressure-treated finish work \u2014 your call.' },
      { name: 'Walkthrough', text: 'We test every rail, vacuum the roof, and hand you the wiring diagram if applicable.' },
    ],
    materials: [
      'Pressure-treated framing lumber',
      '5V-crimp galvalume metal roofing',
      'IPE, cedar, or PT trim',
      '316 stainless lag screws',
      'Hurricane straps and post bases',
    ],
    pricing:
      'Free site evaluation. Most waterfront gazebos fall in the $9,000 \u2013 $28,000 range, plus electrical if included.',
    warranty: 'One-year workmanship warranty. Metal roofing carries a 30-year manufacturer warranty.',
    faqs: [
      { q: 'Will a gazebo fit my existing pier?', a: 'In most cases yes. We inspect the pilings and may add two more under the gazebo footprint to handle the roof load.' },
      { q: 'Do you frame for a ceiling fan?', a: 'Yes. We rough-in the box, run conduit down a post, and coordinate with your electrician.' },
      { q: 'Metal or shingle roof?', a: 'On the water, metal wins every time. Shingles tear off in a squall and leak from salt corrosion.' },
    ],
    testimonials: [
      { quote: 'Our gazebo survived Hurricane Florence with zero damage. The neighbors lost theirs. That tells you everything about the build quality.', author: 'Homeowner', city: 'Topsail Beach' },
      { quote: 'Standing-seam roof, IPE rails, ceiling fan \u2014 it is the room we use most from April to October.', author: 'Homeowner', city: 'Figure Eight Island' },
    ],
    related: ['fixed-piers', 'custom-docks', 'waterfront-decks'],
    image: '/static/images/services/svc-gazebos.jpg',
    ogImage: '/static/images/og/og-gazebos.jpg',
  },
  {
    slug: 'pilings',
    name: 'Pilings',
    shortName: 'Pilings',
    h1: 'Piling Driving and Replacement on the Coast',
    titleTag: 'Pilings & Piling Driving in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Piling driving, replacement, and inspection in coastal NC. Pressure-treated 8x8 to 12x12, driven to refusal. NC GC #100980.',
    subhead:
      'Pressure-treated and CCA pilings driven to refusal \u2014 for new docks, pier rebuilds, and bulkhead repair.',
    trustPills: ['Driven to Refusal', 'CCA & PT Available', 'Barge-Mounted Driver'],
    brandedAnswer: { term: 'The Blow-Count Verification Record', explanation: 'We log every piling\'s location, depth, and final blow count on a written record you keep. If a future contractor claims your pilings are short, you have the proof in hand.' },
    problem:
      'A piling that stops short does not hold a pier or a bulkhead. Refusal is the only spec we drive to.',
    included: [
      'Bottom probe and refusal estimate before quoting',
      '8x8, 10x10, or 12x12 pressure-treated pilings',
      'Marine-rated CCA treatment available',
      'Barge-mounted hydraulic pile driver',
      'Cut-off, cap, and clean-up included',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We probe the bottom and confirm refusal depth before quoting.' },
      { name: 'Material Order', text: 'Pilings are delivered direct from the treatment yard, never stockpiled.' },
      { name: 'Drive', text: 'Our barge-mounted hydraulic driver sets each piling to refusal \u2014 no shortcuts.' },
      { name: 'Cut & Cap', text: 'We cut every piling square at finish elevation and apply a piling cap if specified.' },
      { name: 'Walkthrough', text: 'You get a written record of every piling location, depth, and refusal blow count.' },
    ],
    materials: [
      'Pressure-treated 8x8, 10x10, 12x12 pilings',
      'CCA-treated marine pilings (available)',
      'Stainless or galvanized piling caps',
      'Hot-dipped galvanized straps',
      'Marine sealant on cut tops',
    ],
    pricing:
      'Free site evaluation. Most piling jobs fall in the $300 \u2013 $900 per piling range installed, depending on size and access.',
    warranty: 'One-year workmanship warranty. Pilings carry their treatment warranty (typically 25 years).',
    faqs: [
      { q: 'What size piling do I need?', a: 'Light residential docks use 8x8. T-head piers and lift pilings usually need 10x10. Bulkheads and commercial docks step up to 12x12.' },
      { q: 'PT or CCA?', a: 'PT (pressure-treated) is the standard. CCA is the older marine-grade treatment and lasts longer in salt water but is special order.' },
      { q: 'How do you reach the site?', a: 'We barge in the driver for water-only sites or truck it in if there is a launch within reach.' },
    ],
    testimonials: [
      { quote: 'He drove every piling to refusal. The old builder stopped at twelve feet and called it done \u2014 those pilings shifted in two years.', author: 'Homeowner', city: 'Sneads Ferry' },
      { quote: 'The barge crew was in and out in a day. Every piling is straight and capped.', author: 'Homeowner', city: 'Wilmington, NC' },
    ],
    related: ['fixed-piers', 'dock-repairs', 'floating-docks'],
    image: '/static/images/services/svc-pilings.jpg',
    ogImage: '/static/images/og/og-pilings.jpg',
  },
  {
    slug: 'custom-docks',
    name: 'Custom Docks',
    shortName: 'Custom Docks',
    h1: 'Custom Docks Designed for Your Shoreline',
    titleTag: 'Custom Docks in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Custom dock design and build for coastal NC waterfronts. IPE hardwood, copper trim, hurricane-rated. NC GC #100980.',
    subhead:
      'One-off pier and dock designs for Figure Eight Island and the rest of coastal NC \u2014 IPE hardwood, copper trim, and hurricane-rated framing.',
    trustPills: ['IPE Hardwood', 'Copper Trim Available', 'Custom Design'],
    brandedAnswer: { term: 'The Sight-Line Design Method', explanation: 'We design every custom dock around your view first \u2014 measuring sight lines from the house, the deck, and the dock itself so hardware never blocks a sunset and every angle frames the water.' },
    problem:
      'A stock dock kit cannot solve a curved shoreline, a 4-foot tide, and a 30-year material spec at the same time. Custom design can.',
    included: [
      'On-site design with measured drawings',
      'IPE, cumaru, cedar, or PT decking',
      'Copper- or stainless-finish hardware',
      'Custom railings, benches, and storage',
      'Optional gazebo, lift, or floating section',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We measure your shoreline, water depth, and view lines so the design fits the water and the house.' },
      { name: 'Design Sketch', text: 'You see a hand-drawn or CAD layout before we order one board.' },
      { name: 'Permit-Aware Refinement', text: 'We tune the design to fit your county\u2019s CAMA general permit rules.' },
      { name: 'Build', text: 'IPE or PT decking, custom rails, and copper or stainless finish hardware.' },
      { name: 'Walkthrough', text: 'We walk every detail with you, leave the as-built sketch, and check in at one year.' },
    ],
    materials: [
      'IPE Brazilian hardwood',
      'Cumaru hardwood (alternative)',
      'Pressure-treated lumber',
      '316 stainless or copper-finish hardware',
      'Custom-fabricated rail brackets',
    ],
    pricing:
      'Free site evaluation. Custom dock projects start around $35,000 and scale with footprint and material spec.',
    warranty: 'One-year workmanship warranty. IPE carries a 25-year material warranty.',
    faqs: [
      { q: 'Why IPE instead of PT?', a: 'IPE is roughly twice the density of PT, takes salt and UV without rotting, and can outlast the pilings if maintained. It costs more up front and pays back over 25 years.' },
      { q: 'Can you match a historic home?', a: 'Yes. We have built docks to match Wilmington historic-district trim profiles and Figure Eight Island brackets.' },
      { q: 'Do you do CAD drawings?', a: 'For custom projects over $40,000 we provide CAD drawings as part of the design fee.' },
    ],
    testimonials: [
      { quote: 'The IPE dock is stunning. Three years in and it still looks like the day they installed it \u2014 no rot, no gray.', author: 'Homeowner', city: 'Figure Eight Island' },
      { quote: 'Mark matched the dock trim to our 1920s house. No one else even offered to try.', author: 'Homeowner', city: 'Wilmington, NC' },
    ],
    related: ['gazebos', 'waterfront-decks', 'floating-docks'],
    image: '/static/images/services/svc-custom-docks.jpg',
    ogImage: '/static/images/og/og-custom-docks.jpg',
  },
  {
    slug: 'deck-construction',
    name: 'Deck Construction',
    shortName: 'Deck Construction',
    h1: 'Decks That Hold Up to Salt Air',
    titleTag: 'Deck Construction in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Waterfront deck construction in coastal NC. PT, composite, IPE. Hurricane-rated framing. NC GC #100980.',
    subhead:
      'Salt-air decks framed for hurricane country \u2014 pressure-treated, composite, or IPE, with stainless hardware throughout.',
    trustPills: ['Hurricane-Rated Framing', 'Stainless Hardware', 'Composite or IPE'],
    brandedAnswer: { term: 'The Wind-Zone Framing Spec', explanation: 'Every deck we build is framed to your county\'s wind zone rating \u2014 130 mph on most of our coast. Hot-dipped joist hangers, stainless fasteners, and hurricane straps are standard, not upgrades.' },
    problem:
      'Inland deck details fail fast on the water. We frame decks for 130 mph wind zones with stainless hardware and hot-dipped joist hangers.',
    included: [
      'Site layout, demo of existing deck if needed',
      'Pressure-treated framing with hot-dipped joist hangers',
      'PT, composite (Trex/TimberTech), or IPE decking',
      '316 stainless deck screws or hidden fasteners',
      'Custom rails (cable, glass, or composite)',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We measure, check footings, and confirm the wind zone for your county.' },
      { name: 'Material Choice', text: 'PT, composite, or IPE \u2014 we walk you through cost, look, and 20-year math.' },
      { name: 'Frame', text: 'Joists, beams, and footings go in to code or above with hot-dipped hangers.' },
      { name: 'Deck & Rail', text: 'Decking, rails, and trim go on with stainless or hidden fasteners.' },
      { name: 'Walkthrough', text: 'We walk every screw, every rail, and every step before we leave the site.' },
    ],
    materials: [
      'Pressure-treated framing lumber',
      'Trex or TimberTech composite',
      'IPE Brazilian hardwood',
      '316 stainless screws',
      'Cable, glass, or composite railings',
    ],
    pricing:
      'Free site evaluation. Most waterfront decks fall in the $20 \u2013 $55 per square foot range installed, depending on material.',
    warranty: 'One-year workmanship warranty. Composite and IPE carry their manufacturer warranties (25\u201350 years).',
    faqs: [
      { q: 'PT vs composite vs IPE?', a: 'PT is cheapest up front. Composite splits the difference and skips most maintenance. IPE costs the most and lasts the longest. We help you do the 20-year math.' },
      { q: 'Do you replace existing decks?', a: 'Yes. We demo and haul off the old deck, inspect framing, and build the new one to current code.' },
      { q: 'Cable rails on the water \u2014 do they corrode?', a: 'Not if they are 316 stainless. We install only 316 cable on coastal NC decks.' },
    ],
    testimonials: [
      { quote: 'The composite deck has been through two hurricane seasons without a single loose screw. The stainless was worth it.', author: 'Homeowner', city: 'Carolina Beach' },
      { quote: 'Old deck was PT that rotted out in eight years. New one is composite on stainless \u2014 should outlast us.', author: 'Homeowner', city: 'Hampstead, NC' },
    ],
    related: ['waterfront-decks', 'gazebos', 'marine-carpentry'],
    image: '/static/images/services/svc-deck-construction.jpg',
    ogImage: '/static/images/og/og-deck-construction.jpg',
  },
  {
    slug: 'waterfront-decks',
    name: 'Waterfront Decks',
    shortName: 'Waterfront Decks',
    h1: 'Waterfront Decks That Open Up the View',
    titleTag: 'Waterfront Decks in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Waterfront deck design and build in coastal NC. Cable rails, IPE, composite. Hurricane-rated. NC GC #100980.',
    subhead:
      'Sound-side, ICW, and bulkhead-edge decks designed to frame your view, with cable rails and salt-spec hardware.',
    trustPills: ['Cable & Glass Rails', 'View-First Design', 'Salt-Spec Hardware'],
    brandedAnswer: { term: 'The View-First Layout', explanation: 'We sit at your eye-level sightline before drawing a single rail post. Every waterfront deck is designed so the railing system \u2014 cable, glass, or low-profile composite \u2014 preserves 100% of your water view from seated position.' },
    problem:
      'A standard 36-inch picket rail on the sound is a wasted view. We design every waterfront deck around the sight lines first.',
    included: [
      'View-first layout drawn to your sight lines',
      'Cable, glass, or low-profile composite rails',
      'PT, composite, or IPE decking',
      'Wraparound or stepped layouts to fit grade',
      'Optional pergola, gazebo, or built-in seating',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We sit on your existing deck or footprint and sketch the view-first layout.' },
      { name: 'Design Sketch', text: 'You see the layout before any framing goes in.' },
      { name: 'Frame & Deck', text: 'PT framing with hot-dipped hangers, decking in your chosen material, stainless fasteners.' },
      { name: 'Rail & Trim', text: 'Cable, glass, or composite rails \u2014 installed to keep the view open.' },
      { name: 'Walkthrough', text: 'We walk every detail and hand you a maintenance schedule.' },
    ],
    materials: [
      'Pressure-treated framing',
      'IPE, composite, or PT decking',
      '316 stainless cable rail systems',
      'Tempered glass rail panels',
      'Hot-dipped galvanized hangers',
    ],
    pricing:
      'Free site evaluation. Most waterfront decks fall in the $25 \u2013 $70 per square foot range installed, depending on material and rail.',
    warranty: 'One-year workmanship warranty. Composite, IPE, and cable systems carry their manufacturer warranties.',
    faqs: [
      { q: 'Cable rail or glass?', a: 'Cable is lighter and cheaper, glass is 100% see-through. Both keep the view open. We help you pick based on wind exposure and budget.' },
      { q: 'Do you build over an existing patio?', a: 'Yes. We can frame a deck over a slab or a patio, as long as drainage is sound.' },
      { q: 'Can you tie into the dock?', a: 'Often yes. We frame waterfront decks and docks together to keep the steps and decking aligned.' },
    ],
    testimonials: [
      { quote: 'The cable rails disappear into the view. We can finally see the water from the kitchen.', author: 'Homeowner', city: 'Wrightsville Beach' },
      { quote: 'Mark designed the deck so the sunset lines up with the seating. It is our favorite spot every evening.', author: 'Homeowner', city: 'Topsail Beach' },
    ],
    related: ['deck-construction', 'gazebos', 'custom-docks'],
    image: '/static/images/services/svc-waterfront-decks.jpg',
    ogImage: '/static/images/og/og-waterfront-decks.jpg',
  },
  {
    slug: 'marine-carpentry',
    name: 'Marine Carpentry',
    shortName: 'Marine Carpentry',
    h1: 'Marine Carpentry for the Pieces Others Skip',
    titleTag: 'Marine Carpentry in Coastal NC | Intracoastal Installs',
    metaDescription:
      'Marine carpentry in coastal NC: stairs, ladders, rails, benches, lockers, fish-cleaning stations. NC GC #100980.',
    subhead:
      'Stairs, ladders, dock boxes, fish-cleaning stations, benches, and the small custom pieces that finish a waterfront.',
    trustPills: ['Custom Builds', 'Marine-Grade', '30+ Years Construction'],
    brandedAnswer: { term: 'The Finish-the-Dock Detail List', explanation: 'After every major build, we walk the dock with you and sketch the custom pieces that finish the space \u2014 rod holders, dock boxes, fish stations, ladders, and cleats. These small builds use the same stainless and marine-grade spec as the dock itself.' },
    problem:
      'Most dock builders skip the small pieces \u2014 the rod holders, dock boxes, fish stations, and ladders that turn a pier into a usable space.',
    included: [
      'Custom stairs and ladders',
      'Dock boxes and storage benches',
      'Fish-cleaning stations with water hookup',
      'Rod holders, fender locks, mooring whips',
      'Custom railings and bench seating',
    ],
    process: [
      { name: 'Free Site Evaluation', text: 'We listen to how you use the dock and sketch the pieces you need.' },
      { name: 'Sketch & Quote', text: 'You see a drawing and a price for each piece before any wood is cut.' },
      { name: 'Build', text: 'Marine-grade lumber, stainless hardware, and finish details that match the rest of your dock.' },
      { name: 'Install', text: 'We bolt, screw, and seal every piece on site.' },
      { name: 'Walkthrough', text: 'We show you every piece and how to maintain it.' },
    ],
    materials: [
      'Marine-grade lumber',
      'IPE or cedar trim (optional)',
      '316 stainless fasteners',
      'Marine-rated plumbing fittings',
      'Powder-coated steel hardware',
    ],
    pricing:
      'Free site evaluation. Carpentry adds typically run $400 \u2013 $4,500 depending on the piece.',
    warranty: 'One-year workmanship warranty on all custom carpentry.',
    faqs: [
      { q: 'Can you build a fish-cleaning station with running water?', a: 'Yes. We coordinate the plumbing tap-in, build the station, and seal the surfaces.' },
      { q: 'Do you do stair retrofits?', a: 'Yes \u2014 bulkhead stairs, dock-side stairs, and home-to-dock landings are common requests.' },
      { q: 'How small a job will you take?', a: 'We will build a single ladder or a single bench if you have us out for a bigger evaluation. Standalone tiny jobs depend on the schedule.' },
    ],
    testimonials: [
      { quote: 'The fish-cleaning station with running water changed how we use the pier. Should have done it years ago.', author: 'Homeowner', city: 'Surf City' },
      { quote: 'Custom dock box, rod holders, and a new swim ladder \u2014 all stainless, all perfect.', author: 'Homeowner', city: 'Sneads Ferry' },
    ],
    related: ['dock-repairs', 'custom-docks', 'gazebos'],
    image: '/static/images/services/svc-marine-carpentry.jpg',
    ogImage: '/static/images/og/og-marine-carpentry.jpg',
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
