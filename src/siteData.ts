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

export type PageGroup = 'category' | 'buyer' | 'safety';

export type RoutePage = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  group: PageGroup;
  intent: string;
  sections: string[];
};

export type Category = {
  name: string;
  slug: string;
  icon: LucideIcon;
  bestFor: string;
  compare: string;
};

export const primaryCta = 'Get trailer quotes near me';

export const categories: Category[] = [
  {
    name: 'Enclosed trailers',
    slug: '/enclosed-trailers/',
    icon: PackageCheck,
    bestFor: 'tools, moving, mobile services, powersports, and weather-protected cargo',
    compare: 'Utility trailers cost less, but enclosed trailers protect gear and can support shelving, branding, and locks.',
  },
  {
    name: 'Utility trailers',
    slug: '/utility-trailers/',
    icon: Truck,
    bestFor: 'yard cleanup, acreage runs, lumber, ATVs, and general hauling',
    compare: 'Open decks are easier to load from the side, but cargo is exposed to weather and road spray.',
  },
  {
    name: 'Dump trailers',
    slug: '/dump-trailers/',
    icon: HardHat,
    bestFor: 'gravel, soil, demolition debris, landscaping, and construction cleanup',
    compare: 'A dump trailer can save labour, but tow vehicle capacity, hydraulic systems, and payload ratings matter.',
  },
  {
    name: 'Flatdeck trailers',
    slug: '/flatdeck-trailers/',
    icon: Cable,
    bestFor: 'pallets, equipment, hay, skids, farm supplies, and side loading',
    compare: 'Flatdecks suit awkward cargo, while enclosed or utility trailers may be better for smaller mixed loads.',
  },
  {
    name: 'Equipment trailers',
    slug: '/equipment-trailers/',
    icon: Hammer,
    bestFor: 'skid steers, compact tractors, mini excavators, and rental equipment',
    compare: 'Match ramp style, deck height, axle rating, brakes, tie-downs, and GVWR before shopping.',
  },
  {
    name: 'Car hauler trailers',
    slug: '/car-hauler-trailers/',
    icon: CarFront,
    bestFor: 'project cars, collector vehicles, auction buys, and dealership transport',
    compare: 'Open car haulers are lighter and cheaper; enclosed haulers add protection and security.',
  },
  {
    name: 'Landscape trailers',
    slug: '/landscape-trailers/',
    icon: Sprout,
    bestFor: 'mowers, trimmers, blowers, bins, mulch, and lawn care routes',
    compare: 'Think through gate width, tool racks, side rails, daily loading, and commercial durability.',
  },
  {
    name: 'Trailer rentals',
    slug: '/trailer-rentals/',
    icon: MapPinned,
    bestFor: 'one-time moves, weekend projects, temporary equipment needs, and seasonal jobs',
    compare: 'Renting reduces storage and maintenance, but availability, deposits, insurance, and tow setup can vary.',
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

const groupCopy: Record<PageGroup, Pick<RoutePage, 'kicker' | 'summary' | 'intent' | 'sections'>> = {
  category: {
    kicker: 'Trailer category guide',
    summary:
      'Compare common uses, sizing questions, cost factors, rental fit, financing fit, and quote details before contacting a local trailer business.',
    intent: 'Category pages are built to capture shoppers comparing trailer types before they choose a dealer, rental company, repair shop, or finance partner.',
    sections: ['Best uses', 'Common sizes', 'New vs used considerations', 'Rental and financing fit', 'Questions to ask a dealer'],
  },
  buyer: {
    kicker: 'High-intent buying guide',
    summary:
      'Match the job to trailer type, capacity, loading style, weather protection, towing setup, and total ownership cost.',
    intent: 'Buyer-intent pages help visitors self-qualify by job type, then move them toward quotes, rentals, financing, parts, or service.',
    sections: ['Recommended trailer types', 'Capacity checklist', 'Cost factors', 'When to rent instead', 'Quote request checklist'],
  },
  safety: {
    kicker: 'Canadian towing and safety guide',
    summary:
      'Plain-English safety education with links to official sources. Rules can vary by province, weight, trailer use, and registration class.',
    intent: 'Safety pages build trust and organic search reach while sending users to qualified dealers, service shops, insurers, and authorities for final confirmation.',
    sections: ['What to verify', 'Weight ratings', 'Brakes and lights', 'Loading and maintenance', 'Official source links'],
  },
};

const buildPage = (slug: string, group: PageGroup): RoutePage => ({
  slug,
  title: prettyTitle(slug),
  group,
  ...groupCopy[group],
});

export const routePages: RoutePage[] = [
  ...allCategorySlugs.map((slug) => buildPage(slug, 'category')),
  ...buyerSlugs.map((slug) => buildPage(slug, 'buyer')),
  ...safetySlugs.map((slug) => buildPage(slug, 'safety')),
];

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

export const useCases = [
  { title: 'Moving and storage', icon: Home, detail: 'Enclosed and cargo trailers for boxes, furniture, tools, and weather-sensitive loads.' },
  { title: 'Contractors', icon: HardHat, detail: 'Equipment, dump, enclosed, and flatdeck trailers for jobsite hauling and tool security.' },
  { title: 'Acreage and farm', icon: Sprout, detail: 'Utility, deckover, stock-ready, flatdeck, and dump trailers for rural property work.' },
  { title: 'Small business', icon: Building2, detail: 'Mobile service, delivery, landscaping, market, repair, and seasonal business setups.' },
  { title: 'Repairs and parts', icon: Wrench, detail: 'Brakes, lights, tires, bearings, hitches, ramps, floors, doors, wiring, and inspections.' },
  { title: 'Financing and rentals', icon: BadgeDollarSign, detail: 'Quote paths for buying, renting, leasing, financing, and comparing ownership costs.' },
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
