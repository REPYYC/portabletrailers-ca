import {
  BadgeDollarSign,
  Building2,
  Cable,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  HardHat,
  Home,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Truck,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type PageGroup = 'category' | 'buyer' | 'safety' | 'local';

export type RoutePage = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  group: PageGroup;
  intent: string;
  sections: string[];
  bestFor: string[];
  watchOut: string[];
  quotePrompts: string[];
  leadPath: string;
  market?: string;
  cityList?: string[];
};

export type Category = {
  name: string;
  slug: string;
  icon: LucideIcon;
  bestFor: string;
  compare: string;
  fitTags: string[];
};

export const primaryCta = 'Get trailer quotes near me';

export const categories: Category[] = [
  {
    name: 'Enclosed trailers',
    slug: '/enclosed-trailers/',
    icon: PackageCheck,
    bestFor: 'tools, moving, mobile services, powersports, and weather-protected cargo',
    compare: 'Utility trailers cost less, but enclosed trailers protect gear and can support shelving, branding, and locks.',
    fitTags: ['weather protection', 'tool security', 'moving', 'mobile business'],
  },
  {
    name: 'Utility trailers',
    slug: '/utility-trailers/',
    icon: Truck,
    bestFor: 'yard cleanup, acreage runs, lumber, ATVs, and general hauling',
    compare: 'Open decks are easier to load from the side, but cargo is exposed to weather and road spray.',
    fitTags: ['general hauling', 'acreage', 'yard work', 'budget-friendly'],
  },
  {
    name: 'Dump trailers',
    slug: '/dump-trailers/',
    icon: HardHat,
    bestFor: 'gravel, soil, demolition debris, landscaping, and construction cleanup',
    compare: 'A dump trailer can save labour, but tow vehicle capacity, hydraulic systems, and payload ratings matter.',
    fitTags: ['gravel', 'soil', 'construction', 'landscaping'],
  },
  {
    name: 'Flatdeck trailers',
    slug: '/flatdeck-trailers/',
    icon: Cable,
    bestFor: 'pallets, equipment, hay, skids, farm supplies, and side loading',
    compare: 'Flatdecks suit awkward cargo, while enclosed or utility trailers may be better for smaller mixed loads.',
    fitTags: ['side loading', 'pallets', 'farm', 'equipment'],
  },
  {
    name: 'Equipment trailers',
    slug: '/equipment-trailers/',
    icon: Hammer,
    bestFor: 'skid steers, compact tractors, mini excavators, and rental equipment',
    compare: 'Match ramp style, deck height, axle rating, brakes, tie-downs, and GVWR before shopping.',
    fitTags: ['machinery', 'contractors', 'ramps', 'heavy loads'],
  },
  {
    name: 'Car hauler trailers',
    slug: '/car-hauler-trailers/',
    icon: CarFront,
    bestFor: 'project cars, collector vehicles, auction buys, and dealership transport',
    compare: 'Open car haulers are lighter and cheaper; enclosed haulers add protection and security.',
    fitTags: ['vehicles', 'low ramps', 'tie-downs', 'transport'],
  },
  {
    name: 'Landscape trailers',
    slug: '/landscape-trailers/',
    icon: Sprout,
    bestFor: 'mowers, trimmers, blowers, bins, mulch, and lawn care routes',
    compare: 'Think through gate width, tool racks, side rails, daily loading, and commercial durability.',
    fitTags: ['mowers', 'lawn care', 'tool racks', 'daily loading'],
  },
  {
    name: 'Trailer rentals',
    slug: '/trailer-rentals/',
    icon: MapPinned,
    bestFor: 'one-time moves, weekend projects, temporary equipment needs, and seasonal jobs',
    compare: 'Renting reduces storage and maintenance, but availability, deposits, insurance, and tow setup can vary.',
    fitTags: ['short-term', 'moving', 'seasonal', 'no storage'],
  },
];

export const allCategorySlugs = [
  '/enclosed-trailers/',
  '/utility-trailers/',
  '/cargo-trailers/',
  '/dump-trailers/',
  '/flatdeck-trailers/',
  '/equipment-trailers/',
  '/car-hauler-trailers/',
  '/landscape-trailers/',
  '/atv-trailers/',
  '/snowmobile-trailers/',
  '/motorcycle-trailers/',
  '/gooseneck-trailers/',
  '/tilt-deck-trailers/',
  '/deckover-trailers/',
  '/single-axle-trailers/',
  '/tandem-axle-trailers/',
  '/small-trailers/',
  '/custom-trailers/',
  '/used-trailers/',
  '/trailer-rentals/',
  '/trailer-financing/',
  '/trailer-parts/',
  '/trailer-repair/',
];

export const buyerSlugs = [
  '/best-trailer-for-moving/',
  '/best-trailer-for-landscaping/',
  '/best-trailer-for-contractors/',
  '/best-trailer-for-acreage-owners/',
  '/best-trailer-for-small-business/',
  '/best-trailer-for-atv/',
  '/best-trailer-for-snowmobile/',
  '/best-trailer-for-side-by-side/',
  '/best-trailer-for-construction/',
  '/best-trailer-for-hauling-gravel/',
  '/best-trailer-for-lawn-care-business/',
  '/best-trailer-for-mobile-business/',
  '/enclosed-vs-utility-trailer/',
  '/dump-trailer-vs-utility-trailer/',
  '/single-axle-vs-tandem-axle-trailer/',
  '/new-vs-used-trailer/',
  '/rent-vs-buy-trailer/',
];

export const safetySlugs = [
  '/trailer-towing-guide-canada/',
  '/trailer-brake-requirements-canada/',
  '/trailer-lighting-requirements-canada/',
  '/trailer-weight-ratings-explained/',
  '/gvwr-vs-payload-trailer/',
  '/trailer-hitch-guide/',
  '/trailer-tongue-weight-guide/',
  '/how-to-load-a-trailer-safely/',
  '/trailer-insurance-canada/',
  '/trailer-registration-canada/',
  '/trailer-safety-checklist/',
  '/trailer-maintenance-checklist/',
];

const prettyTitle = (slug: string) =>
  slug
    .replaceAll('/', '')
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const groupCopy: Record<
  PageGroup,
  Pick<RoutePage, 'kicker' | 'summary' | 'intent' | 'sections' | 'bestFor' | 'watchOut' | 'quotePrompts' | 'leadPath'>
> = {
  category: {
    kicker: 'Trailer category guide',
    summary:
      'Compare common uses, sizing questions, cost factors, rental fit, financing fit, and quote details before contacting a local trailer business.',
    intent: 'Category pages are built to capture shoppers comparing trailer types before they choose a dealer, rental company, repair shop, or finance partner.',
    sections: ['Best uses', 'Common sizes', 'New vs used considerations', 'Rental and financing fit', 'Questions to ask a dealer'],
    bestFor: ['Comparing trailer styles', 'Shortlisting dealers or rental yards', 'Planning accessories, ramps, brakes, and tie-downs'],
    watchOut: ['Payload after trailer weight', 'Door, gate, and ramp clearance', 'Tow vehicle limits and hitch setup'],
    quotePrompts: ['Primary load or job type', 'Estimated load weight', 'Tow vehicle year/make/model', 'Preferred province or city'],
    leadPath: 'Dealer, rental, financing, parts, and service leads',
  },
  buyer: {
    kicker: 'High-intent buying guide',
    summary:
      'Match the job to trailer type, capacity, loading style, weather protection, towing setup, and total ownership cost.',
    intent: 'Buyer-intent pages help visitors self-qualify by job type, then move them toward quotes, rentals, financing, parts, or service.',
    sections: ['Recommended trailer types', 'Capacity checklist', 'Cost factors', 'When to rent instead', 'Quote request checklist'],
    bestFor: ['Matching a trailer to a job', 'Comparing ownership vs rental', 'Building a quote-ready checklist'],
    watchOut: ['Buying for occasional peak use', 'Underestimating cargo weight', 'Ignoring storage, insurance, and maintenance'],
    quotePrompts: ['What you need to haul', 'How often you will use it', 'Whether buying, renting, or financing makes sense', 'Timeline'],
    leadPath: 'High-intent buyer, rental, and finance leads',
  },
  safety: {
    kicker: 'Canadian towing and safety guide',
    summary:
      'Plain-English safety education with links to official sources. Rules can vary by province, weight, trailer use, and registration class.',
    intent: 'Safety pages build trust and organic search reach while sending users to qualified dealers, service shops, insurers, and authorities for final confirmation.',
    sections: ['What to verify', 'Weight ratings', 'Brakes and lights', 'Loading and maintenance', 'Official source links'],
    bestFor: ['Learning towing vocabulary', 'Preparing questions for a dealer or mechanic', 'Understanding why provincial verification matters'],
    watchOut: ['Assuming rules are identical across Canada', 'Relying on internet summaries as legal advice', 'Skipping brake, light, tire, and bearing checks'],
    quotePrompts: ['Province of operation', 'Registered or estimated trailer weight', 'Tow vehicle setup', 'Service or inspection needs'],
    leadPath: 'Service, parts, dealer, insurance, and compliance-adjacent leads',
  },
  local: {
    kicker: 'Local trailer quote hub',
    summary:
      'Find trailer quote paths by market without fake dealer listings. Request local buying, rental, financing, repair, or parts help from verified partners when available.',
    intent: 'Local pages are designed for city and province search traffic while protecting trust by avoiding invented dealers, inventory, prices, and reviews.',
    sections: ['Local trailer demand', 'Quote routing', 'Partner leasing options', 'No fake listings', 'Next-step checklist'],
    bestFor: ['Finding local quote help', 'Comparing buy, rent, finance, repair, and parts paths', 'Understanding which partner type should respond'],
    watchOut: ['Assuming every city has a live partner yet', 'Treating quote estimates as listed inventory', 'Skipping tow vehicle and load details'],
    quotePrompts: ['City or nearest market', 'Trailer type', 'Buy, rent, finance, repair, or parts intent', 'Timeline and contact method'],
    leadPath: 'Local dealer, rental, finance, repair, and parts leads',
  },
};

const buildPage = (slug: string, group: PageGroup): RoutePage => ({
  slug,
  title: prettyTitle(slug),
  group,
  ...groupCopy[group],
});

export const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon',
];

export const provinceMarkets = [
  { province: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Grande Prairie'], emphasis: 'contractors, acreage owners, oilfield support, landscaping, and powersports' },
  { province: 'British Columbia', cities: ['Vancouver', 'Surrey', 'Kelowna', 'Victoria', 'Prince George'], emphasis: 'moving, trades, rural properties, recreation, and equipment hauling' },
  { province: 'Saskatchewan', cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw'], emphasis: 'farm, acreage, construction, and utility trailer demand' },
  { province: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson'], emphasis: 'cargo, snowmobile, utility, and contractor trailer demand' },
  { province: 'Ontario', cities: ['Toronto', 'Ottawa', 'Hamilton', 'London', 'Kitchener'], emphasis: 'moving, contractors, landscape businesses, powersports, and mobile services' },
  { province: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Sherbrooke'], emphasis: 'cargo, utility, equipment, rental, and service demand' },
  { province: 'Atlantic Canada', cities: ['Halifax', 'Moncton', 'Saint John', "St. John's", 'Charlottetown'], emphasis: 'rural, small business, recreation, moving, and repair demand' },
  { province: 'Northern Canada', cities: ['Whitehorse', 'Yellowknife', 'Iqaluit'], emphasis: 'remote hauling, utility, cargo, service, and parts demand' },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const localMarketPages: RoutePage[] = provinceMarkets.flatMap((market) => {
  const provincePage: RoutePage = {
    ...groupCopy.local,
    group: 'local',
    slug: `/trailer-dealers-${slugify(market.province)}/`,
    title: `${market.province} Trailer Dealers, Rentals, Financing, Parts and Repair`,
    summary: `Compare trailer quote paths across ${market.province}. This page is built for ${market.emphasis}, with no fake dealers, inventory, prices, or reviews.`,
    market: market.province,
    cityList: market.cities,
  };

  const cityPages = market.cities.map<RoutePage>((city) => ({
    ...groupCopy.local,
    group: 'local',
    slug: `/trailer-dealers-${slugify(city)}/`,
    title: `${city} Trailer Dealers, Rentals, Financing, Parts and Repair`,
    summary: `Request trailer quotes around ${city} for buying, rentals, financing, repair, or parts. Partner placement is verified before any dealer, shop, rental yard, or finance company is named.`,
    market: city,
    cityList: [city, market.province],
  }));

  return [provincePage, ...cityPages];
});

export const routePages: RoutePage[] = [
  ...allCategorySlugs.map((slug) => buildPage(slug, 'category')),
  ...buyerSlugs.map((slug) => buildPage(slug, 'buyer')),
  ...safetySlugs.map((slug) => buildPage(slug, 'safety')),
  ...localMarketPages,
];

export const useCases = [
  { title: 'Moving and storage', icon: Home, detail: 'Enclosed and cargo trailers for boxes, furniture, tools, and weather-sensitive loads.' },
  { title: 'Contractors', icon: HardHat, detail: 'Equipment, dump, enclosed, and flatdeck trailers for jobsite hauling and tool security.' },
  { title: 'Acreage and farm', icon: Sprout, detail: 'Utility, deckover, stock-ready, flatdeck, and dump trailers for rural property work.' },
  { title: 'Small business', icon: Building2, detail: 'Mobile service, delivery, landscaping, market, repair, and seasonal business setups.' },
  { title: 'Repairs and parts', icon: Wrench, detail: 'Brakes, lights, tires, bearings, hitches, ramps, floors, doors, wiring, and inspections.' },
  { title: 'Financing and rentals', icon: BadgeDollarSign, detail: 'Quote paths for buying, renting, leasing, financing, and comparing ownership costs.' },
];

export const jobProfiles = [
  {
    title: 'Acreage owner',
    recommended: 'Utility, dump, flatdeck, small equipment, or deckover trailer',
    signals: ['yard cleanup', 'firewood', 'acreage supplies', 'ATV or side-by-side hauling'],
  },
  {
    title: 'Landscape crew',
    recommended: 'Landscape, enclosed, utility, dump, or equipment trailer',
    signals: ['mowers', 'tool racks', 'mulch', 'soil', 'daily loading'],
  },
  {
    title: 'Contractor',
    recommended: 'Enclosed, equipment, dump, flatdeck, or cargo trailer',
    signals: ['tool security', 'jobsite materials', 'machines', 'debris'],
  },
  {
    title: 'Moving or storage',
    recommended: 'Enclosed, cargo, or rental trailer',
    signals: ['weather protection', 'short-term use', 'door height', 'tie-downs'],
  },
  {
    title: 'Powersports',
    recommended: 'ATV, snowmobile, motorcycle, enclosed, or utility trailer',
    signals: ['ramp angle', 'deck width', 'salt protection', 'tie-down points'],
  },
  {
    title: 'Mobile business',
    recommended: 'Enclosed, cargo, custom, or financing-ready trailer',
    signals: ['branding', 'shelving', 'power needs', 'insurance'],
  },
];

export const costFactors = [
  'Trailer type and construction',
  'Axle count and GVWR',
  'Deck length, width, and height',
  'Brakes, tires, suspension, and wheels',
  'Ramp, gate, door, and side-loading options',
  'Weather protection, insulation, shelving, or custom buildout',
  'Financing terms, delivery, registration, insurance, and service',
];

export const leadPackages = [
  {
    name: 'City lease',
    fit: 'One verified dealer, rental yard, service shop, or finance partner owns the primary CTA path for a city.',
    inventory: 'No fake listings required. Leads are routed by shopper intent and location.',
  },
  {
    name: 'Category sponsor',
    fit: 'A partner sponsors a trailer type such as enclosed, dump, utility, landscape, or equipment trailers.',
    inventory: 'Useful for specialists who want category-level demand rather than broad local exposure.',
  },
  {
    name: 'Service lane',
    fit: 'Repair shops, parts stores, hitch installers, brake shops, tire shops, and inspection providers capture safety traffic.',
    inventory: 'Pairs well with safety, maintenance, brake, lighting, hitch, and registration pages.',
  },
];

export const comparisonRows = [
  {
    trailer: 'Enclosed cargo trailer',
    bestUse: 'Tools, moving, weather-protected cargo, mobile service, powersports',
    buyerQuestion: 'Do you need lockable storage, interior height, shelving, or ramp access?',
    partnerFit: 'Dealer, finance partner, parts, mobile business buildout',
  },
  {
    trailer: 'Open utility trailer',
    bestUse: 'Acreage chores, yard cleanup, lumber, ATVs, weekend hauling',
    buyerQuestion: 'Will the load handle weather exposure and side loading?',
    partnerFit: 'Dealer, rental yard, hitch shop, parts store',
  },
  {
    trailer: 'Dump trailer',
    bestUse: 'Gravel, soil, landscaping, demolition debris, contractor cleanup',
    buyerQuestion: 'What payload, hydraulic setup, gate style, and brake service do you need?',
    partnerFit: 'Dealer, contractor finance, service shop, rental yard',
  },
  {
    trailer: 'Flatdeck equipment trailer',
    bestUse: 'Skid steers, compact tractors, pallets, farm supplies, equipment rental',
    buyerQuestion: 'What is the machine weight, ramp angle, deck height, and tie-down plan?',
    partnerFit: 'Equipment dealer, finance partner, rental yard, service shop',
  },
  {
    trailer: 'Landscape trailer',
    bestUse: 'Mowers, trimmers, blowers, mulch, bins, lawn care routes',
    buyerQuestion: 'How many times per day will the crew load and unload equipment?',
    partnerFit: 'Dealer, small business finance, parts, repair',
  },
];

export const leadRoutingRows = [
  {
    intent: 'Buy new or used',
    leadOwner: 'Trailer dealer or equipment dealer',
    dataNeeded: 'Trailer type, city, timeline, tow vehicle, load, financing interest',
  },
  {
    intent: 'Rent short term',
    leadOwner: 'Trailer rental company or equipment rental yard',
    dataNeeded: 'Dates, trailer type, load, pickup city, tow setup, insurance questions',
  },
  {
    intent: 'Finance or lease',
    leadOwner: 'Trailer financing company or dealer finance desk',
    dataNeeded: 'Business/personal use, purchase timeline, trailer type, budget comfort, contact method',
  },
  {
    intent: 'Repair or inspect',
    leadOwner: 'Trailer repair shop, brake shop, tire shop, RV/trailer service company',
    dataNeeded: 'Issue, trailer type, urgency, city, symptoms, photos later in CRM',
  },
  {
    intent: 'Parts or accessories',
    leadOwner: 'Trailer parts store, hitch installer, dealer parts counter',
    dataNeeded: 'Part needed, trailer type, axle/brake/light details, city, urgency',
  },
];

export const launchChecklist = [
  'Replace example configurations with verified partner inventory only when supplied',
  'Connect quote intake to CRM, email routing, or Lovable backend actions',
  'Assign leased cities, categories, or service lanes to real partners',
  'Add partner phone numbers, service areas, and offers only after verification',
  'Keep safety pages source-backed and province-specific before making exact rule claims',
  'Track source page, market, trailer type, intent, and timeline on every lead',
];

export const ctaCards = [
  { label: 'Compare trailer types', href: '/enclosed-vs-utility-trailer/', icon: ClipboardCheck },
  { label: 'Find local trailer dealers', href: '#dealers-by-province', icon: MapPinned },
  { label: 'Estimate trailer cost', href: '#cost-factors', icon: BadgeDollarSign },
  { label: 'Check towing basics', href: '/trailer-towing-guide-canada/', icon: ShieldCheck },
  { label: 'Rent a trailer near me', href: '/trailer-rentals/', icon: Truck },
  { label: 'Finance a trailer', href: '/trailer-financing/', icon: CheckCircle2 },
];

export const officialSources = [
  {
    label: 'Transport Canada trailer lighting equipment location requirements',
    href: 'https://tc.canada.ca/en/road-transportation/publications/trailers-federal-lighting-equipment-location-requirements',
  },
  {
    label: 'British Columbia Recreational Vehicle Towing fact sheet',
    href: 'https://www2.gov.bc.ca/assets/gov/driving-and-transportation/cvse/bulletins-notices-circulars/vehicle-inspection/inspection-and-safety-information/mv3230.pdf',
  },
  {
    label: 'Manitoba Public Insurance trailer safety guide',
    href: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/TrailerSafety.pdf',
  },
];
