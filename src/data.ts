import { CampaignItem, CompetitorData, GrowthStrategyItem, WeeklyPlanItem, FutureGrowthIdea, DeliverableItem } from './types';

export const campaignItems: CampaignItem[] = [
  {
    id: 'brand-launch',
    title: 'Brand Launch Carousel',
    subtitle: 'Chapter I: The Arrival of Jalashka',
    description: 'A 5-slide editorial narrative introducing Jalashka\'s brand values, origin, and design philosophy of quiet luxury.',
    category: 'Editorial Carousel',
    themeColor: 'bg-deep-burgundy text-warm-ivory',
    bgPattern: 'waves',
    accentText: 'THE PREMIERE',
    slides: [
      {
        title: '01 / The Manifesto',
        description: 'A striking typographic cover with the Jalashka emblem and a quote: "Timeless silhouettes crafted for the modern soul."',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'waves',
      },
      {
        title: '02 / Structural Integrity',
        description: 'Focusing on material detail and high-end fabric sources. Highlighting linen, organic silk, and heritage wools.',
        slideBg: 'bg-[#2B2B2B] text-[#F7F1E7]',
        pattern: 'grid',
      },
      {
        title: '03 / Designing for Grace',
        description: 'A mood-board slide pairing abstract architectural arcs with close-up tailoring textures.',
        slideBg: 'bg-[#B89B5E] text-[#2B2B2B]',
        pattern: 'minimal',
      },
      {
        title: '04 / Join the Collective',
        description: 'Call-to-action slide guiding users to the newsletter waitlist for the debut capsule drop.',
        slideBg: 'bg-[#F7F1E7] text-[#5C1B29]',
        pattern: 'radial',
      },
    ],
  },
  {
    id: 'four-elements',
    title: 'Four Elements Campaign',
    subtitle: 'Chapter II: Forces of Nature',
    description: 'A conceptual campaign connecting four key fashion postures to nature\'s foundational states: Fire, Water, Earth, and Air.',
    category: 'Concept Campaign',
    themeColor: 'bg-charcoal text-warm-ivory border-muted-gold/20 border',
    bgPattern: 'geometric',
    accentText: 'ELEMENTS 2026',
    slides: [
      {
        title: '01 / Fire — Confidence',
        description: 'Bold tailoring, structured shoulders, deep crimson tones, and confident direct-to-camera gaze.',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'waves',
      },
      {
        title: '02 / Water — Fluidity',
        description: 'Satin slip dresses, flowing silhouettes, cool silver lighting, and elegant, sweeping posture dynamics.',
        slideBg: 'bg-[#1e293b] text-[#F7F1E7]',
        pattern: 'circles',
      },
      {
        title: '03 / Earth — Grounded',
        description: 'Oversized trench coats, organic knits, warm clay and olive palette, rooted and serene expressions.',
        slideBg: 'bg-[#453229] text-[#F7F1E7]',
        pattern: 'radial',
      },
      {
        title: '04 / Air — Lightness',
        description: 'Sheer layering, delicate pastel hues, soft wind machine motion, and spacious, weightless styling.',
        slideBg: 'bg-[#D1E2EC] text-[#2B2B2B]',
        pattern: 'minimal',
      },
    ],
  },
  {
    id: 'styling-series',
    title: 'Styling Series',
    subtitle: 'Chapter III: The Modular Wardrobe',
    description: 'A multi-part educational reel and carousel format demonstrating how to style 5 core Jalashka pieces in 15 versatile ways.',
    category: 'Educational Series',
    themeColor: 'bg-muted-gold text-charcoal',
    bgPattern: 'grid',
    accentText: 'HOW TO WEAR',
    slides: [
      {
        title: '01 / The Core Five Pieces',
        description: 'An overview of the foundational pieces: The Pleated Trouser, The Silk Wrap, The Boxy Blazer, The Knit Vest, and The Linen Shirt.',
        slideBg: 'bg-[#B89B5E] text-[#2B2B2B]',
        pattern: 'grid',
      },
      {
        title: '02 / Desk to Dinner',
        description: 'Transforming The Silk Wrap and Pleated Trouser from an executive look to an evening statement with minimal accessory shifts.',
        slideBg: 'bg-[#2B2B2B] text-[#F7F1E7]',
        pattern: 'lines',
      },
      {
        title: '03 / Weekend Simplicity',
        description: 'Layering The Knit Vest over The Linen Shirt for a refined, relaxed getaway aesthetic.',
        slideBg: 'bg-[#F7F1E7] text-[#5C1B29]',
        pattern: 'waves',
      },
    ],
  },
  {
    id: 'product-launch',
    title: 'Product Launch Carousel',
    subtitle: 'Chapter IV: Core Capsule 01',
    description: 'A direct-to-consumer product showcase with detailed tags, size specs, and fabric transparency notes.',
    category: 'Product Debut',
    themeColor: 'bg-deep-burgundy text-warm-ivory',
    bgPattern: 'circles',
    accentText: 'CAPSULE 01',
    slides: [
      {
        title: '01 / The Pleated Trouser',
        description: 'Product profile: Premium virgin wool, high-waisted fluid drape, handcrafted tortoise button closures.',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'circles',
      },
      {
        title: '02 / The Silk Wrap Blazer',
        description: 'Product profile: Pure mulberry silk lining, relaxed waist tie, structured shoulders, deep hidden pockets.',
        slideBg: 'bg-[#B89B5E] text-[#2B2B2B]',
        pattern: 'minimal',
      },
      {
        title: '03 / Complete Look 01',
        description: 'Styling pairing both elements. Editorial shot against a brutalist architectural backdrop.',
        slideBg: 'bg-[#2B2B2B] text-[#F7F1E7]',
        pattern: 'grid',
      },
    ],
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon Creative',
    subtitle: 'Chapter V: The Countdown',
    description: 'An atmospheric, high-anticipation visual series designed to build early email signups and FOMO.',
    category: 'Teaser Creative',
    themeColor: 'bg-charcoal text-warm-ivory border border-muted-gold/10',
    bgPattern: 'minimal',
    accentText: 'JULY 2026',
    slides: [
      {
        title: '01 / In the Shadows',
        description: 'A highly cropped, low-contrast silhouette of a model wearing the signature trench coat. "Patience is a craft."',
        slideBg: 'bg-[#2B2B2B] text-[#B89B5E]',
        pattern: 'lines',
      },
      {
        title: '02 / The Thread Count',
        description: 'A macro video/still showing the weave of the linen fabric. Caption: "100% Organic. Hand-woven. Launching 24.07.26."',
        slideBg: 'bg-[#F7F1E7] text-[#2B2B2B]',
        pattern: 'radial',
      },
      {
        title: '03 / Access Granted',
        description: 'Exclusive early access announcement. "The first 100 subscribers unlock private pre-ordering on 20.07.26."',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'waves',
      },
    ],
  },
  {
    id: 'packaging-reveal',
    title: 'Packaging Reveal',
    subtitle: 'Chapter VI: Tangible Luxury',
    description: 'An unboxing concept detailing the textured cotton paper box, gold-foil lettering, and reusable linen garment bags.',
    category: 'Unboxing Reveal',
    themeColor: 'bg-warm-ivory text-charcoal border border-charcoal/10',
    bgPattern: 'radial',
    accentText: 'UNBOXING',
    slides: [
      {
        title: '01 / The Box',
        description: 'Heavyweight rigid cardboard made of 100% recycled cotton pulp, featuring debossed Jalashka typography.',
        slideBg: 'bg-[#F7F1E7] text-[#2B2B2B]',
        pattern: 'radial',
      },
      {
        title: '02 / The Envelope',
        description: 'A translucent vellum document envelope containing the garment certification, sealed with custom burgundy wax.',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'minimal',
      },
      {
        title: '03 / Zero Waste Commitment',
        description: 'Our signature linen garment bags designed to replace standard plastic polybags, usable as travel organizers.',
        slideBg: 'bg-[#2B2B2B] text-[#B89B5E]',
        pattern: 'grid',
      },
    ],
  },
  {
    id: 'story-set',
    title: 'Instagram Story Set',
    subtitle: 'Chapter VII: Everyday Dialogue',
    description: 'An interactive, high-contrast, multi-poll story template system designed to drive direct daily communication with the community.',
    category: 'Interactive Stories',
    themeColor: 'bg-deep-burgundy text-warm-ivory',
    bgPattern: 'lines',
    accentText: 'INTERACTIVE',
    slides: [
      {
        title: '01 / "This or That" Styling',
        description: 'An elegant split screen showing styling options: Silk Slip with Oversized Blazer vs. Silk Slip with Knit Cardigan. Interactive Poll widget overlay.',
        slideBg: 'bg-[#5C1B29] text-[#F7F1E7]',
        pattern: 'lines',
      },
      {
        title: '02 / Behind the Atelier',
        description: 'A Q&A prompt sticker: "Ask our lead pattern-maker anything about the tailoring of Capsule 01."',
        slideBg: 'bg-[#2B2B2B] text-[#F7F1E7]',
        pattern: 'minimal',
      },
      {
        title: '03 / Sustainable Sourcing QA',
        description: 'A beautiful typography slide explaining where our wool is sheared, inviting community thoughts via a slider widget.',
        slideBg: 'bg-[#B89B5E] text-[#2B2B2B]',
        pattern: 'waves',
      },
    ],
  },
];

export const competitorResearch: CompetitorData[] = [
  {
    name: 'Toteme',
    contentStyle: 'Editorial minimalism, muted palette, styling-led lifestyle shots.',
    strengths: 'Signature photogenic pieces, strong founder POV, consistent visual grid.',
    contentGap: 'Little community or UGC involvement, feels extremely distant and inaccessible.',
    keyLearning: 'Minimalism still needs a highly distinct point of view to stand out, but adding approachability is our window of opportunity.',
    color: '#2B2B2B', // Charcoal
  },
  {
    name: 'Anavila',
    contentStyle: 'Artisan-process storytelling, product-forward, handmade craft focus.',
    strengths: 'Singular product hook (linen sarees), strong heritage narrative, deep cultural roots.',
    contentGap: 'Limited styling education, low reel/video cadence, less modern visual energy.',
    keyLearning: 'One strong organizing idea beats a broad product mix. Aligning hand-craft with sleek modern styling is key.',
    color: '#B89B5E', // Muted Gold
  },
  {
    name: 'Nicobar / Bhaane',
    contentStyle: 'Lifestyle-and-travel world-building, conscious-living aesthetic.',
    strengths: 'Brand feels bigger than the product; strong seasonal storytelling, beautiful store layouts.',
    contentGap: 'Blurs into generic "conscious lifestyle" content, hard to tell apart from adjacent brands.',
    keyLearning: 'World-building without a sharp, unmistakable visual signature dilutes brand memory. Jalashka must maintain strict architectural precision.',
    color: '#5C1B29', // Deep Burgundy
  },
];

export const growthStrategies: GrowthStrategyItem[] = [
  {
    title: 'Nano & Micro Creator Collaborations',
    description: 'Partner with creators (5k - 50k followers) who reflect the quiet luxury aesthetic.',
    iconName: 'Users',
    details: 'Send them a styled "Atelier Box" containing one core piece. Task them with creating natural, authentic "Get Ready With Me" (GRWM) Reels, styled alongside their vintage wardrobes.',
  },
  {
    title: 'UGC Campaign',
    description: 'Launch the #StyledByJalashka initiative with high-quality incentive rules.',
    iconName: 'Sparkles',
    details: 'Include a beautifully printed card in every order asking customers to post their styling. Offer a premium curated Silk Hair Band or Linen Pouch for featured posts.',
  },
  {
    title: 'Interactive Stories',
    description: 'Elevate weekly Story templates with luxury quizzes and transparent styling polls.',
    iconName: 'Smartphone',
    details: 'Utilize custom stickers, background frames, and gorgeous typography overlays to run "Atelier Q&A" and "This or That" series that drive high algorithmic engagement.',
  },
  {
    title: 'Educational Content',
    description: 'Provide high-value, aesthetic tutorials on tailoring, fabric care, and capsule building.',
    iconName: 'BookOpen',
    details: 'Create short, soothing Reels explaining: "How to properly wash organic silk," "The architecture of a perfect lapel," and "How to build a 10-piece timeless wardrobe."',
  },
  {
    title: 'Community Building',
    description: 'Cultivate a closed-loop VIP group with exclusive drops and preview surveys.',
    iconName: 'Compass',
    details: 'Host periodic salon gatherings (physical or virtual) and create Close Friends lists on Instagram for early lookbooks and co-designing input on future collections.',
  },
  {
    title: 'Weekly Content Themes',
    description: 'Maintain strict structural rhythm in the feed to build strong user anticipation.',
    iconName: 'CalendarRange',
    details: 'Establish fixed weekly columns like "Monday Mood", "Styling Tips", and "Sunday Spotlights" to make feed scrolling a beautiful, predictable ritual.',
  },
];

export const weeklyContentPlan: WeeklyPlanItem[] = [
  {
    day: 'Monday',
    title: 'Monday Mood',
    concept: 'Aesthetic mood-boarding connecting art, architecture, and drapery.',
    format: 'Single Post',
    objective: 'Set the aesthetic tone for the week, anchoring the brand in high culture.',
    color: 'bg-[#5C1B29] text-[#F7F1E7]',
  },
  {
    day: 'Wednesday',
    title: 'Styling Tips',
    concept: 'Educational transition Reel styling a single staple item in three ways.',
    format: 'Reel',
    objective: 'Drive saves and shares with useful capsule wardrobe knowledge.',
    color: 'bg-[#B89B5E] text-[#2B2B2B]',
  },
  {
    day: 'Friday',
    title: 'Product Spotlight',
    concept: 'Macro-detailed closeups highlighting fabric weave, stitches, and silhouette lines.',
    format: 'Carousel',
    objective: 'Highlight craftsmanship, durability, and luxury material value.',
    color: 'bg-[#2B2B2B] text-[#F7F1E7]',
  },
  {
    day: 'Saturday',
    title: 'Style Series',
    concept: 'Collaborator or client feature showcasing Jalashka pieces in real-life contexts.',
    format: 'Single Post',
    objective: 'Establish social proof and display real-world fit, drape, and versatility.',
    color: 'bg-[#F7F1E7] text-[#5C1B29] border border-[#5C1B29]/10',
  },
  {
    day: 'Sunday',
    title: 'Community Spotlight',
    concept: 'Interactive story takeover or direct sharing of client feedback and reviews.',
    format: 'Story Set',
    objective: 'Close the loop, thank customers, and drive high interactive engagement.',
    color: 'bg-[#5C1B29] text-[#F7F1E7]',
  },
];

export const futureGrowthIdeas: FutureGrowthIdea[] = [
  {
    title: 'The Creator Circle',
    description: 'An invite-only collective of 20 premium tastemakers who co-design a seasonal mini-capsule and drive natural brand storytelling.',
    metrics: 'Estimated reach: 500K+ hyper-targeted organic views per quarter.',
  },
  {
    title: '#StyledByJalashka Lookbook',
    description: 'A seasonal digital lookbook published on Instagram Guides and website, curated entirely from customer-submitted photography.',
    metrics: 'Expected 40% increase in customer tag rate and repeat purchases.',
  },
  {
    title: 'Capsule Wardrobe Series',
    description: 'A 4-part cinematic video series hosted on IGTV and YouTube Shorts, detailing the life of minimalist garments from raw wool to finished drape.',
    metrics: 'Drives long-form educational authority and brand loyalty.',
  },
  {
    title: 'Customer Styling Features',
    description: 'A dedicated story highlight and weekly feed carousel celebrating real people styling Jalashka across different age ranges, shapes, and countries.',
    metrics: 'Humanizes the brand and disproves the "cold distant minimalist" stereotype.',
  },
  {
    title: 'Seasonal Campaigns',
    description: 'Sleek, high-production capsule campaigns synced with solstices (Summer Solstice, Winter Equinox), releasing limited collections.',
    metrics: 'Leverages astrological and physical season shifts to create buying urgency.',
  },
  {
    title: 'Interactive Story Campaigns',
    description: 'Interactive filters that let users "try on" color palettes of Capsule 01 virtually to see which fits their undertone.',
    metrics: 'Boosts shareable user actions and builds tech-forward brand credit.',
  },
];

export const deliverables: DeliverableItem[] = [
  {
    title: 'Instagram Launch Creatives',
    status: 'completed',
    description: 'Figma templates, motion graphic mockups, and copy blueprints for chapters I to VII.',
  },
  {
    title: 'Competitor Research Matrix',
    status: 'completed',
    description: 'In-depth audit of 12 luxury and boutique competitors detailing content pacing, gaps, and learnings.',
  },
  {
    title: 'Organic Growth Roadmap',
    status: 'completed',
    description: 'Step-by-step 90-day pipeline for micro-collaborations, UGC, and viral educational reels.',
  },
  {
    title: 'Campaign Recommendations',
    status: 'completed',
    description: 'Concrete visual outlines, narrative structures, and copy directions for the Four Elements Campaign.',
  },
  {
    title: 'Website Presentation Site',
    status: 'completed',
    description: 'Premium responsive microsite presenting the complete conceptual launch strategy elegantly.',
  },
];
