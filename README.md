# Maruti Chemicals frontend

A static React website for Maruti Chemicals, built with Vite and React Router. The original site structure and forest-green / sage / ivory / copper visual identity are preserved, with carefully sourced company-reference details added alongside improved spacing, card alignment, responsiveness, and interaction polish.

## Requirements

- Node.js 22 or compatible current Node.js release
- npm

## Run locally

```bash
npm ci
npm run dev
```

## Quality checks and production build

```bash
npm run lint
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Routes

- `/` — Home
- `/about` — About
- `/industries` — Industries overview
- `/industries/pharmaceutical` — Pharmaceutical industry
- `/industries/food` — Food industry
- `/industries/healthcare` — Hospitals & healthcare
- `/products` — Product catalogue
- `/why-us` — Why Us
- `/contact` — Contact

## Catalogue and reference content

- The Products page has **10 editable starter listings in each of the three industry filters** (30 entries total). Search, filtering, and per-category totals are included.
- “Liquid Sampling Bags” and “Sterile Tape” are product names visible in the supplied company reference screenshots.
- Other catalogue entries are a practical draft based on common chemical-supply enquiries, not a confirmation of current stock. Confirm availability, grade, concentration, pack size, specifications, regulatory status, and suitability with Maruti Chemicals before quoting or publishing.
- The About page reproduces the company reference figures: **10+ years**, **5 sectors**, **250+ customers**, and **20+ product categories**. Confirm that these figures remain current and approved before public release.
- Manufacturer names and certifications/logos were not added because the screenshots did not provide verifiable current documentation suitable for a public claim.

## Images

- `public/images/laboratory-hero.webp` is the high-resolution, optimized hero photograph used on the home page.
- Product photos are not included because the source archive referenced files that were missing. The existing product-image fallback remains in place; replace it with approved product photos when available.

## Motion and navigation

- Desktop navigation text has been enlarged, with clear hover, focus, and active states.
- A subtle continuous light sweep across the hero image adds an industrial process-flow accent. It is disabled when the visitor requests reduced motion.

## Contact form

The contact page validates its fields in the browser, but it is not connected to an email service or backend and does not send or save enquiries.
