import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  MapPin,
  Menu,
  Search,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import dumpTrailerImg from './assets/trailers/dump-trailer.webp';
import enclosedTrailerImg from './assets/trailers/enclosed-cargo-trailer.webp';
import flatdeckTrailerImg from './assets/trailers/flatdeck-equipment-trailer.webp';
import landscapeTrailerImg from './assets/trailers/landscape-trailer.webp';
import utilityTrailerImg from './assets/trailers/utility-trailer.webp';
import {
  categories,
  comparisonRows,
  costFactors,
  ctaCards,
  jobProfiles,
  leadPackages,
  leadRoutingRows,
  launchChecklist,
  localMarketPages,
  officialSources,
  pageDeepDives,
  primaryCta,
  provinceMarkets,
  provinces,
  routePages,
  safetySlugs,
  specialtyTrailerCategories,
  useCases,
} from './siteData';

const currentPath = window.location.pathname;
const activePage = routePages.find((page) => page.slug === currentPath);
const featuredSafetyPages = routePages.filter((page) => safetySlugs.includes(page.slug)).slice(0, 6);

const trailerExamples = [
  {
    name: 'Enclosed cargo trailer',
    slug: '/enclosed-trailers/',
    image: enclosedTrailerImg,
    use: 'Moving, tool storage, powersports, mobile service, and weather-protected hauling',
    specs: ['Single or tandem axle', 'Side door and rear ramp options', 'Shelving, E-track, vents, and roof height upgrades'],
    lead: 'Best lead paths: dealer, financing, mobile business buildout, parts',
  },
  {
    name: 'Open utility trailer',
    slug: '/utility-trailers/',
    image: utilityTrailerImg,
    use: 'Acreage work, yard cleanup, dump runs, ATVs, lumber, and general hauling',
    specs: ['Wood or steel deck', 'Mesh ramp gate', 'Tie-down points, spare tire, side rails'],
    lead: 'Best lead paths: dealer, rental, parts, hitch setup',
  },
  {
    name: 'Dump trailer',
    slug: '/dump-trailers/',
    image: dumpTrailerImg,
    use: 'Gravel, soil, demolition debris, landscaping, contractor cleanup, and acreage projects',
    specs: ['Hydraulic lift', 'Barn door or spreader gate', 'Battery, charger, tarp, and brake options'],
    lead: 'Best lead paths: dealer, financing, contractor, repair',
  },
  {
    name: 'Flatdeck equipment trailer',
    slug: '/equipment-trailers/',
    image: flatdeckTrailerImg,
    use: 'Skid steers, compact tractors, mini excavators, pallets, farm supplies, and equipment rental',
    specs: ['Beavertail or tilt options', 'Ramps and stake pockets', 'GVWR, payload, brakes, and tire rating checks'],
    lead: 'Best lead paths: dealer, financing, rental yard, service',
  },
  {
    name: 'Landscape trailer',
    slug: '/landscape-trailers/',
    image: landscapeTrailerImg,
    use: 'Mowers, trimmers, blowers, bins, mulch, seasonal crews, and lawn care routes',
    specs: ['Mesh gate', 'Tool racks and basket', 'Side rails, brakes, lighting, and daily loading layout'],
    lead: 'Best lead paths: dealer, small business finance, parts, repair',
  },
];

const marketQuoteHref = (market?: string) => {
  if (!market) {
    return '/#quote';
  }

  const queryKey = provinces.includes(market) ? 'province' : 'city';
  return `/?${queryKey}=${encodeURIComponent(market)}#quote`;
};

const localPageFor = (market: string) => localMarketPages.find((page) => page.market === market);

const fallbackDeepDive = (pageTitle: string) => ({
  overview: `${pageTitle} shoppers usually need help turning a broad search into a quote-ready request. The useful details are the job, location, trailer function, timeline, tow or delivery setup, service needs, and whether the visitor is trying to buy, rent, finance, repair, or compare options.`,
  useCases: [
    'Compare the trailer type against similar options before contacting a partner',
    'Prepare a better quote request with use case, location, timeline, and must-have features',
    'Decide whether buying, renting, financing, repair, or parts support is the right next step',
  ],
  configurations: [
    'Entry-level option for occasional use or short-term rental',
    'Commercial-duty option for repeated business use',
    'Custom or upgraded option when layout, access, security, weather, or load requirements matter',
  ],
  buyerQuestions: [
    'What job does the trailer need to do first?',
    'Where will it be used, delivered, parked, stored, loaded, serviced, or picked up?',
    'What timeline, budget comfort, tow setup, site setup, or utility access should a partner know?',
    'Which partner should respond: dealer, rental company, financing company, repair shop, parts store, or event/site supplier?',
  ],
  partnerAngles: [
    'Quote lead for verified local provider',
    'Rental lead for temporary or seasonal use',
    'Finance lead for recurring business use',
    'Service or parts lead when maintenance, inspection, or accessories are needed',
  ],
  avoidMistakes: [
    'Submitting a vague quote request without location, use case, or timeline',
    'Comparing only upfront cost instead of delivery, setup, service, storage, and operating needs',
    'Assuming availability, regulations, or requirements without verifying with the right local source',
  ],
});

const deepDiveFor = (slug: string, title: string) => pageDeepDives.find((page) => page.slug === slug) ?? fallbackDeepDive(title);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">PT</span>
        <span>
          <strong>PortableTrailers.ca</strong>
          <small>Canadian trailer buying guide</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#trailer-finder">Types</a>
        <a href="/#dealers-by-province">Local dealers</a>
        <a href="/#safety">Safety</a>
        <a href="/#partner">Partners</a>
      </nav>
      <a className="header-cta" href="/#quote">
        <Search size={18} />
        Quotes near me
      </a>
      <button
        className="icon-button"
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu size={21} />
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/#trailer-finder" onClick={() => setMenuOpen(false)}>
            Compare trailer types
          </a>
          <a href="/#dealers-by-province" onClick={() => setMenuOpen(false)}>
            Find local dealers
          </a>
          <a href="/#safety" onClick={() => setMenuOpen(false)}>
            Check towing basics
          </a>
          <a href="/#quote" onClick={() => setMenuOpen(false)}>
            {primaryCta}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow">
          <MapPin size={17} />
          Built for Canadian trailer shoppers and partner lead generation
        </div>
        <h1>Portable Trailers Canada: Compare, Buy, Rent & Finance Trailers Near You</h1>
        <p className="hero-subhead">
          Find the right enclosed trailer, utility trailer, dump trailer, flatdeck, car hauler, equipment trailer, or cargo
          trailer for work, moving, acreage life, construction, landscaping, or weekend hauling.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#quote">
            {primaryCta}
            <ArrowRight size={19} />
          </a>
          <a className="button secondary" href="#trailer-finder">
            Compare trailer types
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Trailer shopping tools">
        <img className="hero-trailer-image" src={enclosedTrailerImg} alt="Enclosed cargo trailer illustration" />
        <div className="tool-card strong">
          <Calculator size={27} />
          <span>Trailer fit score</span>
          <strong>Match job, load, tow vehicle, and budget</strong>
        </div>
        <div className="tool-grid">
          <span>Buy</span>
          <span>Rent</span>
          <span>Finance</span>
          <span>Repair</span>
        </div>
        <div className="route-strip">
          <span>Lead paths</span>
          <b>Dealer</b>
          <b>Rental</b>
          <b>Parts</b>
          <b>Service</b>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function TrailerFinder() {
  return (
    <section id="trailer-finder" className="section band">
      <SectionHeader
        eyebrow="Trailer Type Finder"
        title="Start with the job, then narrow the trailer"
        copy="PortableTrailers.ca routes shoppers by use case, trailer style, tow setup, and buying stage so partner leads arrive with clearer intent."
      />
      <div className="finder-grid">
        {categories.slice(0, 14).map((category) => {
          const Icon = category.icon;
          return (
            <a className="category-card" href={category.slug} key={category.slug}>
              <Icon size={25} />
              <h3>{category.name}</h3>
              <p>{category.bestFor}</p>
              <small>{category.compare}</small>
            </a>
          );
        })}
      </div>
      <div className="finder-extra">
        <h3>More portable trailer types</h3>
        <div className="pill-row">
          {categories.slice(14).map((category) => (
            <a href={category.slug} key={category.slug}>
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickCtas() {
  return (
    <section className="quick-ctas" aria-label="Common trailer shopper actions">
      {ctaCards.map((card) => {
        const Icon = card.icon;
        return (
          <a href={card.href} key={card.label}>
            <Icon size={20} />
            <span>{card.label}</span>
            <ChevronRight size={18} />
          </a>
        );
      })}
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="section product-section">
      <SectionHeader
        eyebrow="Popular Trailer Configurations"
        title="Illustrated trailer examples shoppers can compare before they call"
        copy="These are product-style examples, not live inventory. A leased city or category partner can replace them with verified stock, rental units, financing offers, or service packages."
      />
      <div className="product-grid">
        {trailerExamples.map((trailer) => (
          <article className="product-card" key={trailer.name}>
            <a className="product-image-link" href={trailer.slug}>
              <img src={trailer.image} alt={`${trailer.name} illustration`} loading="lazy" />
            </a>
            <div className="product-copy">
              <span>Example configuration</span>
              <h3>{trailer.name}</h3>
              <p>{trailer.use}</p>
              <ul>
                {trailer.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <small>{trailer.lead}</small>
              <a className="text-link" href={trailer.slug}>
                Compare this trailer type
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpecialtyTrailerTypes() {
  const grouped = [
    {
      title: 'Jobsite and crew trailers',
      copy: 'Temporary office, crew, lunchroom, security, first aid, and storage trailer paths for construction and industrial sites.',
      types: specialtyTrailerCategories.filter((category) => category.segment === 'site' || category.segment === 'service').slice(0, 9),
    },
    {
      title: 'Event and facility trailers',
      copy: 'Bathroom, washroom, restroom, shower, concession, food, mobile business, event, and disaster support trailer paths.',
      types: specialtyTrailerCategories.filter((category) => category.segment === 'event' || category.slug.includes('disaster')),
    },
  ];

  return (
    <section className="section specialty-section">
      <SectionHeader
        eyebrow="Portable Site, Event, and Service Trailers"
        title="Include the non-hauling trailer types buyers actually search for"
        copy="PortableTrailers.ca now supports office, bathroom, washroom, shower, storage, lunchroom, crew, first-aid, security, concession, food, event, and disaster relief trailer demand."
      />
      <div className="specialty-grid">
        {grouped.map((group) => (
          <article className="specialty-panel" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.copy}</p>
            <div className="specialty-link-grid">
              {group.types.map((type) => {
                const Icon = type.icon;
                return (
                  <a href={type.slug} key={type.slug}>
                    <Icon size={18} />
                    <span>{type.name}</span>
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function relatedTrailersFor(pageTitle: string) {
  const lowerTitle = pageTitle.toLowerCase();
  const matches = trailerExamples.filter((trailer) => lowerTitle.includes(trailer.name.split(' ')[0].toLowerCase()));

  if (matches.length) {
    return [...matches, ...trailerExamples.filter((trailer) => !matches.includes(trailer))].slice(0, 3);
  }

  if (lowerTitle.includes('landscap') || lowerTitle.includes('lawn')) {
    return trailerExamples.filter((trailer) => ['Landscape trailer', 'Dump trailer', 'Open utility trailer'].includes(trailer.name));
  }

  if (lowerTitle.includes('contractor') || lowerTitle.includes('construction') || lowerTitle.includes('equipment')) {
    return trailerExamples.filter((trailer) => ['Flatdeck equipment trailer', 'Dump trailer', 'Enclosed cargo trailer'].includes(trailer.name));
  }

  if (lowerTitle.includes('moving') || lowerTitle.includes('mobile')) {
    return trailerExamples.filter((trailer) => ['Enclosed cargo trailer', 'Open utility trailer', 'Landscape trailer'].includes(trailer.name));
  }

  return trailerExamples.slice(0, 3);
}

function RelatedProductStrip({ pageTitle }: { pageTitle: string }) {
  return (
    <section className="section compact-products">
      <SectionHeader
        eyebrow="Trailer Examples"
        title="Product-style examples for this search"
        copy="These illustrations help shoppers visualize trailer options before a verified partner adds real inventory, rental units, or finance offers."
      />
      <div className="product-grid">
        {relatedTrailersFor(pageTitle).map((trailer) => (
          <article className="product-card" key={trailer.name}>
            <a className="product-image-link" href={trailer.slug}>
              <img src={trailer.image} alt={`${trailer.name} illustration`} loading="lazy" />
            </a>
            <div className="product-copy">
              <span>Illustrated example</span>
              <h3>{trailer.name}</h3>
              <p>{trailer.use}</p>
              <small>{trailer.lead}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeepDiveGuide({ page }: { page: NonNullable<typeof activePage> }) {
  const guide = deepDiveFor(page.slug, page.title);

  return (
    <section className="section deep-dive-section">
      <div className="deep-dive-intro">
        <span className="eyebrow plain">Deeper Buying Guide</span>
        <h2>{page.title}: what shoppers and partners need to know</h2>
        <p>{guide.overview}</p>
      </div>
      <div className="deep-dive-grid">
        <article>
          <h3>Common use cases</h3>
          <ul>
            {guide.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Configuration decisions</h3>
          <ul>
            {guide.configurations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Questions before quoting</h3>
          <ul>
            {guide.buyerQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Lead opportunities</h3>
          <ul>
            {guide.partnerAngles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mistake-panel">
        <h3>Common mistakes to avoid</h3>
        <div className="cost-factor-grid">
          {guide.avoidMistakes.map((item) => (
            <span key={item}>
              <ShieldAlert size={17} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrailerMatchTool() {
  const [job, setJob] = useState(jobProfiles[0].title);
  const [priority, setPriority] = useState('Weather protection');
  const selectedProfile = useMemo(() => jobProfiles.find((profile) => profile.title === job) ?? jobProfiles[0], [job]);
  const matchedCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.fitTags.some((tag) =>
          [...selectedProfile.signals, priority].some((signal) => tag.toLowerCase().includes(signal.toLowerCase().split(' ')[0])),
        ),
      ),
    [priority, selectedProfile],
  );

  return (
    <section className="section match-section">
      <div>
        <span className="eyebrow plain">Trailer Type Finder</span>
        <h2>Help shoppers self-qualify before they ask for quotes</h2>
        <p>
          This tool turns a broad visitor into a more useful lead by tying their job, buying priority, and likely trailer
          types together before the form.
        </p>
      </div>
      <div className="match-tool">
        <label>
          Shopper profile
          <select value={job} onChange={(event) => setJob(event.target.value)}>
            {jobProfiles.map((profile) => (
              <option key={profile.title}>{profile.title}</option>
            ))}
          </select>
        </label>
        <label>
          Main priority
          <select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option>Weather protection</option>
            <option>Lowest total cost</option>
            <option>Heavy payload</option>
            <option>Fast loading</option>
            <option>Tool security</option>
            <option>Short-term rental</option>
          </select>
        </label>
        <div className="match-result">
          <strong>{selectedProfile.recommended}</strong>
          <p>Common signals: {selectedProfile.signals.join(', ')}.</p>
          <div className="pill-row">
            {(matchedCategories.length ? matchedCategories : categories.slice(0, 3)).slice(0, 4).map((category) => (
              <a href={category.slug} key={category.slug}>
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TowingPlanner() {
  const [towRating, setTowRating] = useState(3500);
  const [emptyTrailer, setEmptyTrailer] = useState(1200);
  const [cargoWeight, setCargoWeight] = useState(800);
  const grossLoad = emptyTrailer + cargoWeight;
  const remaining = towRating - grossLoad;
  const capacityUsed = towRating > 0 ? Math.round((grossLoad / towRating) * 100) : 0;
  const tongueLow = Math.round(grossLoad * 0.1);
  const tongueHigh = Math.round(grossLoad * 0.15);
  const status =
    remaining < 0
      ? 'Over the tow rating entered'
      : capacityUsed >= 90
        ? 'Very tight planning result'
        : capacityUsed >= 75
          ? 'Needs careful verification'
          : 'Looks workable for early planning';

  return (
    <section className="section planner-section">
      <div>
        <span className="eyebrow plain">Towing Capacity Basics</span>
        <h2>Trailer load planner for quote-ready conversations</h2>
        <p>
          This is a planning tool, not a legal or manufacturer approval. Shoppers still need to verify tow rating,
          payload, hitch rating, axle rating, brakes, tires, registration, insurance, and provincial requirements.
        </p>
      </div>
      <div className="planner-card">
        <div className="planner-inputs">
          <label>
            Tow rating entered
            <input type="number" value={towRating} onChange={(event) => setTowRating(Number(event.target.value))} />
          </label>
          <label>
            Empty trailer weight
            <input type="number" value={emptyTrailer} onChange={(event) => setEmptyTrailer(Number(event.target.value))} />
          </label>
          <label>
            Estimated cargo weight
            <input type="number" value={cargoWeight} onChange={(event) => setCargoWeight(Number(event.target.value))} />
          </label>
        </div>
        <div className="planner-result">
          <span>{status}</span>
          <strong>{capacityUsed}% of entered tow rating</strong>
          <div className="meter" aria-label="Entered tow rating used">
            <i style={{ width: `${Math.min(Math.max(capacityUsed, 0), 100)}%` }} />
          </div>
          <div className="planner-stats">
            <b>Estimated trailer + cargo: {grossLoad.toLocaleString()} lb</b>
            <b>Remaining rating entered: {remaining.toLocaleString()} lb</b>
            <b>Planning tongue-weight check: {tongueLow.toLocaleString()}-{tongueHigh.toLocaleString()} lb</b>
          </div>
          <p>
            Use this to prepare better questions for a dealer, rental company, hitch installer, or repair shop. Final
            numbers must come from the tow vehicle, trailer, hitch, tire, and provincial authority sources.
          </p>
        </div>
      </div>
    </section>
  );
}

function BuyingGuides() {
  const guideBlocks = [
    {
      title: 'Buy vs Rent vs Finance',
      text: 'Buying suits repeated use, customization, and long-term business needs. Renting works for one-off moves and short jobs. Financing can preserve cash flow when the trailer earns revenue.',
      bullets: ['Usage frequency', 'Storage space', 'Insurance and maintenance', 'Cash flow and tax advice'],
    },
    {
      title: 'New vs Used Trailers',
      text: 'New trailers offer warranty, known history, and custom options. Used trailers may lower upfront cost, but condition, brakes, tires, wiring, rust, floor, VIN, and registration need careful review.',
      bullets: ['Frame and axle condition', 'Tire date codes', 'Brake and light function', 'Ownership paperwork'],
    },
    {
      title: 'Trailer Size Guide',
      text: 'Size depends on load footprint, payload, loading angle, gate or ramp style, axle rating, and where the trailer will be stored or parked.',
      bullets: ['Deck length and width', 'Payload after trailer weight', 'Door or ramp clearance', 'Tow vehicle limits'],
    },
  ];

  return (
    <section className="section">
      <SectionHeader
        eyebrow="Buying decisions"
        title="Clear comparison pages for high-intent shoppers"
        copy="The first build includes every requested route as a real content landing page, ready for deeper city and partner expansion."
      />
      <div className="three-col">
        {guideBlocks.map((block) => (
          <article className="info-card" key={block.title}>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
            <ul>
              {block.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComparisonMatrix() {
  return (
    <section className="section comparison-section">
      <SectionHeader
        eyebrow="Compare Trailer Types"
        title="Make the site feel like a buying desk, not a brochure"
        copy="A shopper can compare common trailer configurations, then route to the right partner lane without seeing fake prices or fake listings."
      />
      <div className="comparison-table" role="table" aria-label="Trailer type comparison">
        <div className="comparison-row comparison-head" role="row">
          <span>Trailer</span>
          <span>Best use</span>
          <span>Buyer question</span>
          <span>Partner fit</span>
        </div>
        {comparisonRows.map((row) => (
          <div className="comparison-row" role="row" key={row.trailer}>
            <strong>{row.trailer}</strong>
            <p>{row.bestUse}</p>
            <p>{row.buyerQuestion}</p>
            <p>{row.partnerFit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section id="safety" className="section split-section">
      <div>
        <SectionHeader
          eyebrow="Towing Capacity Basics"
          title="Brake, light, hitch, loading, and safety basics"
          copy="Safety content is written as education, not legal advice. Every page reminds users to confirm current rules with their province, Transport Canada, insurers, and qualified trailer dealers."
        />
        <div className="warning-box">
          <ShieldAlert size={22} />
          <p>
            Requirements vary by province and trailer setup. Transport Canada provides federal lighting guidance for
            trailers, while provincial sources may set brake, registration, inspection, and operating requirements.
          </p>
        </div>
        <ul className="source-list">
          {officialSources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer">
                {source.label}
                <ExternalLink size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="safety-links">
        {featuredSafetyPages.map((page) => (
          <a href={page.slug} key={page.slug}>
            <BadgeCheck size={19} />
            <span>{page.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProvinceDealers() {
  return (
    <section id="dealers-by-province" className="section band">
      <SectionHeader
        eyebrow="Local Trailer Dealers by Province"
        title="Province pages without fake dealer listings"
        copy="The site can lease city or province lead placement to verified partners. Until a partner is onboarded, pages collect quote requests and explain how matching works."
      />
      <div className="province-grid">
        {provinces.map((province) => (
          <a href={localPageFor(province)?.slug ?? `/?province=${encodeURIComponent(province)}#quote`} key={province}>
            <MapPin size={17} />
            {province}
          </a>
        ))}
      </div>
      <div className="market-grid">
        {provinceMarkets.map((market) => (
          <article className="market-card" key={market.province}>
            <h3>{market.province}</h3>
            <p>{market.emphasis}</p>
            <div className="pill-row">
              {market.cities.map((city) => (
                <a href={localPageFor(city)?.slug ?? `/?city=${encodeURIComponent(city)}#quote`} key={city}>
                  {city}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CostAndUseCases() {
  return (
    <section id="cost-factors" className="section">
      <SectionHeader
        eyebrow="Trailer Cost Factors"
        title="Show shoppers what affects price without inventing prices"
        copy="Cost pages explain the variables that matter so visitors can request informed quotes from real businesses."
      />
      <div className="use-grid">
        {useCases.map((item) => {
          const Icon = item.icon;
          return (
            <article className="use-card" key={item.title}>
              <Icon size={23} />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          );
        })}
      </div>
      <div className="cost-panel">
        <h3>Quote variables to collect before a partner call</h3>
        <div className="cost-factor-grid">
          {costFactors.map((factor) => (
            <span key={factor}>
              <CheckCircle2 size={17} />
              {factor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const query = new URLSearchParams(window.location.search);
  const initialProvince = query.get('province') ?? '';
  const initialCity = query.get('city') ?? '';

  return (
    <section id="quote" className="section quote-section">
      <div>
        <span className="eyebrow plain">Request Trailer Quotes</span>
        <h2>Turn search traffic into qualified trailer leads</h2>
        <p>
          This intake is structured for dealers, rental companies, financing partners, repair shops, and parts stores.
          It asks for intent, province, timeline, tow vehicle, and trailer type before handoff.
        </p>
      </div>
      <form
        className="lead-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label>
          What do you need?
          <select defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Buy a trailer</option>
            <option>Rent a trailer</option>
            <option>Finance a trailer</option>
            <option>Repair or parts</option>
          </select>
        </label>
        <label>
          Trailer type
          <select defaultValue="">
            <option value="" disabled>
              Choose trailer type
            </option>
            {categories.map((category) => (
              <option key={category.slug}>{category.name}</option>
            ))}
          </select>
        </label>
        <label>
          Province
          <select defaultValue={initialProvince}>
            <option value="" disabled>
              Choose province
            </option>
            {provinces.map((province) => (
              <option key={province}>{province}</option>
            ))}
          </select>
        </label>
        <label>
          Timeline
          <select defaultValue="">
            <option value="" disabled>
              Choose timeline
            </option>
            <option>As soon as possible</option>
            <option>Within 30 days</option>
            <option>1 to 3 months</option>
            <option>Researching options</option>
          </select>
        </label>
        <label className="wide">
          Notes
          <textarea placeholder="Load, tow vehicle, budget range, city, rental dates, or repair issue" />
        </label>
        <label>
          City or nearest market
          <input defaultValue={initialCity} placeholder="Example: Calgary, Edmonton, Saskatoon" />
        </label>
        <label>
          Contact email or phone
          <input placeholder="Where should a partner reply?" />
        </label>
        <button className="button primary wide" type="submit">
          {primaryCta}
          <ArrowRight size={19} />
        </button>
        {submitted && (
          <p className="form-status wide">
            Lead captured locally for prototype review. Connect this form to Lovable, a CRM, email, or partner routing
            workflow before launch.
          </p>
        )}
      </form>
    </section>
  );
}

function PartnerSection() {
  return (
    <section id="partner" className="section partner-section">
      <div>
        <span className="eyebrow plain">Dealer / Rental Partner Section</span>
        <h2>Lease a city, province, category, or lead path</h2>
        <p>
          PortableTrailers.ca is structured as a monetizable lead-gen asset for trailer dealers, rental yards, financing
          companies, repair shops, parts stores, equipment dealers, and rural supply partners.
        </p>
      </div>
      <div className="partner-grid">
        {['Exclusive city placement', 'Category sponsorship', 'Quote routing', 'Finance lead path', 'Repair and parts leads', 'Rental demand capture'].map(
          (item) => (
            <span key={item}>
              <Sparkles size={17} />
              {item}
            </span>
          ),
        )}
      </div>
      <div className="package-grid">
        {leadPackages.map((item) => (
          <article key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.fit}</p>
            <small>{item.inventory}</small>
          </article>
        ))}
      </div>
      <div className="routing-grid">
        {leadRoutingRows.map((row) => (
          <article key={row.intent}>
            <span>{row.intent}</span>
            <h3>{row.leadOwner}</h3>
            <p>{row.dataNeeded}</p>
          </article>
        ))}
      </div>
      <a className="button secondary" href="#quote">
        Dealers: lease this city / claim your area
      </a>
    </section>
  );
}

function LaunchReadySection() {
  return (
    <section className="section launch-section">
      <SectionHeader
        eyebrow="Launch Ready Partner Asset"
        title="Built to rebrand, lease, and hand leads to real trailer businesses"
        copy="The structure is ready for a dealer, rental company, finance provider, repair shop, or parts partner to lease a city, province, category, or service lane."
      />
      <div className="launch-grid">
        <article>
          <h3>What changes for a partner</h3>
          <p>
            Add verified business name, phone number, service area, real offers, approved inventory, financing copy, and
            routing rules. The core buyer education and lead capture flow can stay intact.
          </p>
        </article>
        <article>
          <h3>What stays protected</h3>
          <p>
            No fake dealers, no fake listings, no invented reviews, no scraped inventory, and no exact legal claims
            unless they are verified from official provincial or federal sources.
          </p>
        </article>
      </div>
      <div className="launch-checklist">
        {launchChecklist.map((item) => (
          <span key={item}>
            <CheckCircle2 size={17} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    ['Does PortableTrailers.ca list real trailer inventory?', 'Not in this first build. The site avoids fake inventory and routes shoppers toward quote requests and verified partners.'],
    ['Can I rely on the safety pages as legal advice?', 'No. They are educational starting points and link to official sources. Always verify current rules with provincial authorities, Transport Canada, insurers, and qualified trailer professionals.'],
    ['What businesses can lease leads?', 'Trailer dealers, rental companies, finance providers, repair shops, parts stores, equipment dealers, RV service companies, and farm or acreage supply partners.'],
  ];

  return (
    <section className="section faq-section">
      <SectionHeader
        eyebrow="FAQ"
        title="Plain answers for shoppers and partners"
        copy="Short, practical answers that keep the site useful and defensible."
      />
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <QuickCtas />
      <ProductShowcase />
      <SpecialtyTrailerTypes />
      <TrailerMatchTool />
      <TowingPlanner />
      <TrailerFinder />
      <BuyingGuides />
      <ComparisonMatrix />
      <SafetySection />
      <ProvinceDealers />
      <CostAndUseCases />
      <QuoteForm />
      <PartnerSection />
      <LaunchReadySection />
      <Faq />
    </>
  );
}

function ContentPage() {
  if (!activePage) {
    return (
      <main>
        <section className="section page-hero">
          <span className="eyebrow plain">Route ready</span>
          <h1>Trailer guide page</h1>
          <p>This route is ready for future city, category, or partner content.</p>
          <a className="button primary" href="/">
            Back to PortableTrailers.ca
          </a>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section page-hero">
        <span className="eyebrow plain">{activePage.kicker}</span>
        <h1>{activePage.title}</h1>
        <p>{activePage.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href={activePage.group === 'local' ? marketQuoteHref(activePage.market) : '/#quote'}>
            {primaryCta}
            <ArrowRight size={19} />
          </a>
          <a className="button secondary" href="/#trailer-finder">
            Compare trailer types
          </a>
        </div>
      </section>
      <section className="section page-content">
        <article>
          <h2>What this page is for</h2>
          <p>{activePage.intent}</p>
          <div className="check-grid">
            {activePage.sections.map((section) => (
              <span key={section}>
                <ClipboardList size={18} />
                {section}
              </span>
            ))}
          </div>
          <div className="page-deep-grid">
            <div>
              <h3>Best for</h3>
              <ul>
                {activePage.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Watch out for</h3>
              <ul>
                {activePage.watchOut.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="quote-prompt-panel">
            <h3>What this page should ask before routing the lead</h3>
            <div className="cost-factor-grid">
              {activePage.quotePrompts.map((prompt) => (
                <span key={prompt}>
                  <CheckCircle2 size={17} />
                  {prompt}
                </span>
              ))}
            </div>
          </div>
          {activePage.group === 'local' && (
            <div className="local-market-panel">
              <h3>{activePage.market} local trailer lead page</h3>
              <p>
                This page is ready for a verified partner, but it does not invent local businesses. Until a dealer,
                rental yard, shop, parts store, or finance company leases this market, shoppers are sent through quote
                intake.
              </p>
              {activePage.cityList && (
                <div className="pill-row">
                  {activePage.cityList.map((market) => (
                    <a href={localPageFor(market)?.slug ?? marketQuoteHref(market)} key={market}>
                      {market}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </article>
        <aside>
          <h3>Lead quality checklist</h3>
          <p>Ask every shopper for location, trailer use, load weight, tow vehicle, timeline, and whether they need buying, rental, financing, parts, or repair help.</p>
          <strong>{activePage.leadPath}</strong>
          <a href={activePage.group === 'local' ? marketQuoteHref(activePage.market) : '/#quote'}>Send this visitor to quote intake</a>
        </aside>
      </section>
      <DeepDiveGuide page={activePage} />
      <RelatedProductStrip pageTitle={activePage.title} />
      {activePage.group === 'safety' && <SafetySection />}
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>PortableTrailers.ca</strong>
      <p>
        Educational trailer shopping guidance for Canada. No fake inventory, dealers, prices, reviews, or legal claims.
      </p>
      <a href="/#partner">Partner leasing and lead generation</a>
    </footer>
  );
}

export default function App() {
  const isHome = currentPath === '/';

  useEffect(() => {
    const title = activePage
      ? `${activePage.title} | PortableTrailers.ca`
      : 'Portable Trailers Canada | Compare, Buy, Rent & Finance Trailers';
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        activePage
          ? activePage.summary
          : 'PortableTrailers.ca helps Canadians compare, buy, rent, finance, repair, and choose portable trailers with plain-English towing and safety guidance.',
      );
  }, []);

  return (
    <>
      <Header />
      <main>{isHome ? <HomePage /> : <ContentPage />}</main>
      <Footer />
    </>
  );
}
