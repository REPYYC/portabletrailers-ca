import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  MapPin,
  Menu,
  Search,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import {
  categories,
  ctaCards,
  officialSources,
  primaryCta,
  provinces,
  routePages,
  safetySlugs,
  useCases,
} from './siteData';

const currentPath = window.location.pathname;
const activePage = routePages.find((page) => page.slug === currentPath);
const featuredSafetyPages = routePages.filter((page) => safetySlugs.includes(page.slug)).slice(0, 6);

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
        <a href="#trailer-finder">Types</a>
        <a href="#dealers-by-province">Local dealers</a>
        <a href="#safety">Safety</a>
        <a href="#partner">Partners</a>
      </nav>
      <a className="header-cta" href="#quote">
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
          <a href="#trailer-finder" onClick={() => setMenuOpen(false)}>
            Compare trailer types
          </a>
          <a href="#dealers-by-province" onClick={() => setMenuOpen(false)}>
            Find local dealers
          </a>
          <a href="#safety" onClick={() => setMenuOpen(false)}>
            Check towing basics
          </a>
          <a href="#quote" onClick={() => setMenuOpen(false)}>
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
        {categories.map((category) => {
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
          <a href={`/#quote?province=${encodeURIComponent(province)}`} key={province}>
            <MapPin size={17} />
            {province}
          </a>
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
    </section>
  );
}

function QuoteForm() {
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
      <form className="lead-form">
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
          <select defaultValue="">
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
        <button className="button primary wide" type="button">
          {primaryCta}
          <ArrowRight size={19} />
        </button>
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
      <a className="button secondary" href="#quote">
        Dealers: lease this city / claim your area
      </a>
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
      <TrailerFinder />
      <BuyingGuides />
      <SafetySection />
      <ProvinceDealers />
      <CostAndUseCases />
      <QuoteForm />
      <PartnerSection />
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
          <a className="button primary" href="/#quote">
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
        </article>
        <aside>
          <h3>Lead quality checklist</h3>
          <p>Ask every shopper for location, trailer use, load weight, tow vehicle, timeline, and whether they need buying, rental, financing, parts, or repair help.</p>
          <a href="/#quote">Send this visitor to quote intake</a>
        </aside>
      </section>
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

  return (
    <>
      <Header />
      <main>{isHome ? <HomePage /> : <ContentPage />}</main>
      <Footer />
    </>
  );
}
