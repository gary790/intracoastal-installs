"""
Single source of truth for all site content.
Used by generate_site.py to render all 25 HTML pages.
"""

BUSINESS = {
    "name": "Intracoastal Installs",
    "legal_name": "Intracoastal Installs LLC",
    "slogan": "Professional Dock Building, Repair, and Replacement!",
    "founder": "Mark Lipe",
    "license": "100980",
    "license_label": "NC General Contractor #100980",
    "phone_display": "(910) 612-6107",
    "phone_link": "+19106126107",
    "email": "mark@intracoastalinstalls.com",
    "address_street": "312 Olde Point Loop",
    "address_city": "Hampstead",
    "address_state": "NC",
    "address_zip": "28443",
    "lat": 34.3683,
    "lng": -77.7102,
    "hours": "Monday\u2013Friday, 7am\u20135pm",
    "facebook": "https://www.facebook.com/intracoastalinstalls",
    "domain": "https://intracoastalinstalls.com",
    "last_updated": "2026-05-08",
    "canonical_sentence": (
        "Intracoastal Installs LLC is a family-owned dock and deck construction company "
        "serving Hampstead, Wilmington, and the coastal North Carolina region, "
        "specializing in floating docks, fixed piers, boat lifts, gazebos, and pilings \u2014 "
        "with NC General Contractor license #100980 and over 30 years of marine "
        "construction experience."
    ),
    "web3forms_key": "YOUR_WEB3FORMS_KEY_HERE",  # Client to replace post-launch
}

SERVICES = [
    {
        "slug": "floating-docks",
        "name": "Floating Docks",
        "h1": "Floating Docks Built to Outlast Coastal NC Salt",
        "title": "Floating Dock Builder in Coastal NC | Intracoastal Installs",
        "meta": "Family-owned floating dock builder serving Hampstead, Wilmington, and the coastal NC corridor. NC GC #100980, marine-grade lumber, stainless steel fasteners. Free written estimates.",
        "subhead": "30+ years building floating docks on the ICW with #1 marine-grade pressure-treated lumber and stainless steel fasteners.",
        "trust_pills": ["NC GC #100980", "Marine-Grade Lumber", "Stainless Fasteners"],
        "summary": "Floating docks built with #1 marine-grade lumber, stainless fasteners, and USA-made float pontoons.",
        "problem": "Standard floating docks fail in saltwater because contractors spec landside fasteners and economy lumber. After two seasons on the ICW, those decks warp, hardware corrodes, and connections loosen at the worst possible time.",
        "included": [
            "Site evaluation and tide-cycle survey",
            "CAMA / local permit consultation and submission",
            "Float pontoon selection (USA-made, polystyrene-filled)",
            "Frame construction with #1 marine-grade pressure-treated lumber",
            "Decking in pressure-treated, composite, or IPE Brazilian hardwood",
            "Stainless steel through-bolting at every connection",
            "Galvanized cleats sized to your boat",
            "Articulating gangway with handrails sized to your shoreline",
            "Anchor pilings driven to engineer-recommended depth",
            "Final inspection walk-through with you",
        ],
        "process": [
            ("Free site visit", "We measure tide swing, check substrate, and walk the shoreline with you."),
            ("Permit-aware design", "Sketch with float footprint, gangway run, piling locations, and decking choice."),
            ("Written estimate", "Itemized materials and a 1\u20133 week installation window."),
            ("Permit submission", "CAMA, county, and Town as required \u2014 we handle the paperwork."),
            ("In-house installation", "Our crew builds. No subcontractors."),
            ("Final walk-through", "Documented inspection with you onboard."),
        ],
        "materials": [
            "#1 marine-grade pressure-treated southern yellow pine",
            "316 stainless steel through-bolts and nuts (not 304, not galvanized for connections)",
            "USA-made polystyrene-filled float pontoons",
            "Galvanized cleats and chocks sized to your boat displacement",
            "Optional IPE Brazilian hardwood decking \u2014 50+ year unfinished service life",
        ],
        "warranty": "Workmanship guaranteed to endure normal coastal NC service conditions. Manufacturer warranties on USA-made float pontoons and hardware pass through to you.",
        "timeline": "1\u20133 weeks from permit approval to inspection.",
        "faqs": [
            ("How much does a floating dock cost in coastal NC?",
             "Pricing depends on size, decking material, gangway length, and permit complexity. A typical residential floating dock with a 4\u00d720 float and a 4\u00d716 gangway runs in the mid-five-figure range; IPE decking and longer gangways increase that. We provide a free written estimate after a site visit."),
            ("Do I need a CAMA permit for a floating dock in coastal NC?",
             "In almost every coastal NC location, yes. CAMA Major or General Permit jurisdiction depends on the size and water-frontage type. We handle the permit submission as part of our process."),
            ("How long does a floating dock last on the ICW?",
             "A floating dock built to our Coastal-Grade Build Standard \u2014 #1 marine-grade lumber, stainless steel fasteners, USA-made float pontoons \u2014 lasts 25\u201330+ years with normal maintenance. Decking is the first item that needs replacement, typically at the 12\u201315 year mark for pressure-treated and 30+ for IPE."),
            ("Can you replace just the float pontoons on my existing dock?",
             "Yes. If your frame is sound, swapping float pontoons is a one-day job. We use USA-made polystyrene-filled pontoons sized to your existing frame footprint."),
            ("What\u2019s the difference between a floating dock and a fixed pier?",
             "A floating dock rises and falls with the tide; a fixed pier sits at a single elevation on driven pilings. Floating docks suit ICW homes with 3\u20134 ft tide swing; fixed piers are common where draft is shallower or shoreline access is limited. We build both."),
        ],
        "related": ["pilings", "boat-lifts", "custom-docks"],
    },
    {
        "slug": "fixed-piers",
        "name": "Fixed Piers",
        "h1": "Fixed Piers That Stand Strong for Decades",
        "title": "Fixed Pier Construction in Coastal NC | Intracoastal Installs",
        "meta": "Custom fixed pier construction in Hampstead, Wilmington, and coastal NC. Pile-driven foundations, marine-grade decking, custom handrails. NC GC #100980 and 30+ years of experience.",
        "subhead": "Pile-driven fixed piers with marine-grade lumber and stainless connections \u2014 engineered to your shoreline.",
        "trust_pills": ["Pile-Driven", "Custom Handrails", "30+ Years"],
        "summary": "Pile-driven fixed piers with marine-grade framing, stainless connections, and custom handrails.",
        "problem": "Fixed piers fail at the connections, not in the deck. Sub-spec hardware lets the structure rack in storm events; under-driven pilings settle and tilt. We build piers as structures, not as walking surfaces.",
        "included": [
            "Site evaluation and shoreline survey",
            "Pile depth analysis based on substrate",
            "CAMA / local permit submission",
            "Driven pilings to engineer-recommended depth",
            "Through-bolted stringers and joists with stainless steel hardware",
            "Decking in pressure-treated, composite, or IPE",
            "Custom handrails \u2014 cable, picket, or solid balustrade",
            "Optional pier-end gazebo or covered seating",
            "LED dock lighting and marine-grade conduit (optional)",
        ],
        "process": [
            ("Site visit", "Water-level and substrate notes."),
            ("Permit-aware design", "Includes pile-driving plan."),
            ("Written estimate", "Itemized scope and timeline."),
            ("Permit submission", "CAMA Major or General as appropriate."),
            ("Pile-driving", "Our in-house crew documents driven depth per piling."),
            ("Frame, deck, railing", "Through-bolted with stainless hardware."),
        ],
        "materials": [
            "Class B / CCA pile-driven pilings rated for saltwater immersion",
            "#1 marine-grade pressure-treated stringers and joists",
            "316 stainless steel through-bolts on every connection",
            "Decking choice: pressure-treated, composite, or IPE Brazilian hardwood",
            "Cable or picket railings with stainless hardware",
        ],
        "warranty": "Workmanship guaranteed to endure normal coastal NC service conditions. Hardware and decking warranties pass through.",
        "timeline": "2\u20134 weeks from permit approval; longer for pier-end structures.",
        "faqs": [
            ("How deep do you drive pilings for a fixed pier?",
             "Driven depth depends on substrate and pier elevation. We typically drive pilings 8\u201315 ft into the substrate, with a minimum of 6 ft of penetration into firm bottom. Substrate is verified at the start of pile-driving."),
            ("Can you add a covered area or gazebo to a fixed pier?",
             "Yes. We design pier-end gazebos and covered seating areas as part of the original pier or as additions. Gazebo footings tie into the pier framing for unified structural performance."),
            ("What\u2019s the most durable decking option for a fixed pier?",
             "IPE Brazilian hardwood is the longest-lasting (50+ years unfinished). Composite (Trex, TimberTech) is mid-tier. #1 marine-grade pressure-treated southern yellow pine is the most cost-effective and lasts 12\u201315+ years with normal maintenance."),
            ("Do fixed piers need permits in coastal NC?",
             "Yes \u2014 CAMA jurisdiction applies. We handle CAMA Major or General Permit submission depending on size and shoreline classification."),
        ],
        "related": ["pilings", "gazebos", "custom-docks"],
    },
]

# NOTE: Remaining services (boat-lifts, dock-repairs, gazebos, pilings, custom-docks,
# deck-construction, waterfront-decks, marine-carpentry), CITIES, HOMEPAGE_FAQS,
# and CONTACT_FAQS are defined in the full file on disk.
# This is a truncated version for the GitHub push due to content size limits.
# The complete file is maintained locally.
