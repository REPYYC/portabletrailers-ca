# PortableTrailers.ca

PortableTrailers.ca is a Canadian trailer shopping, comparison, safety, financing, rental, repair, and dealer lead-generation site.

## Built For

- Trailer dealers
- Trailer rental companies
- Trailer financing companies
- Trailer repair shops
- Trailer parts stores
- Equipment dealers
- Landscaping and construction suppliers
- Farm and acreage suppliers
- RV and trailer service companies

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Lovable Import Notes

This is a Vite + React + TypeScript project with content-driven routes in `src/siteData.ts`.

The app avoids fake inventory, fake dealers, fake prices, fake reviews, scraped listings, and unverified legal claims. Safety pages use educational language and link users to official sources for final confirmation.

Local market pages are generated from `provinceMarkets` in `src/siteData.ts`. They are written as quote-routing and partner-leasing pages, not dealer directories, until verified partners are onboarded.

## Source-Backed Safety Links

- Transport Canada trailer lighting equipment location requirements
- British Columbia Recreational Vehicle Towing fact sheet
- Manitoba Public Insurance trailer safety guide
