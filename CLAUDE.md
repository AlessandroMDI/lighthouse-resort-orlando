# CLAUDE.md — Lighthouse Key Resort Website

Persistent reference for all AI-assisted work on this project. Read this file before making any edits.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Site name | Lighthouse Key Resort |
| Developer | Moderne Development Inc. |
| Purpose | Presale investor acquisition microsite |
| Audience | High-net-worth investors, family offices, international buyers |
| Tone | Premium, calm, internationally refined |
| Deployment | Netlify Drop (flat folder, no subdirectories, no build tools) |
| Domain | lighthouse-key.com (live, HTTPS via Let's Encrypt, DNS via Namecheap) |
| Copyright | © 2026 Lighthouse Key Resort. All rights reserved. |

---

## 2. File Inventory

### HTML Files

| File | Purpose | Key Sections |
|---|---|---|
| `index.html` | Homepage — primary investor landing page | Hero · Intro · Stats Bar · Residences (feature tabs) · Floor Plans carousel (6 plans) · Full Bleed · Investment · Location · Gallery · Quote · Contact form · Footer |
| `residences.html` | Residences detail page | Hero · Interior Intro · Room sections (5: Living, Kitchen, Bedroom, Bathroom, Terrace) · Floor Plans carousel (6 plans) · Footer |
| `amenities.html` | Amenities showcase page | Hero · Intro text · 8 Amenity sections · Full Bleed break · CTA · Footer |
| `location.html` | Location & attractions page | Hero · Distance Bar (marquee) · Location Intro quote · 8 Attraction sections · Full Bleed break · Directory grid (4 columns) · CTA · Footer |

### Image Files (`/images/`)

| Filename | Used In | Notes |
|---|---|---|
| `AMEN_EXST_BUILDING_03.jpg` | index.html — intro section (left image) | Local, via Netlify CDN |
| `AMEN_GYM_01.png` | **Unused** | Available; amenities.html gym section still uses Unsplash |
| `AMEN_LAZY_RIVER_01_AI.jpg` | **Unused** | Available; similar to _03 which is used |
| `AMEN_LAZY_RIVER_03_AI.jpg` | index.html — hero bg + intro (right image) | Local, via Netlify CDN |
| `AMEN_PICKLE_BALL_02.jpg` | index.html — gallery section | Local, via Netlify CDN |
| `AMEN_POOL_BIG_01.jpg` | index.html — gallery section | Local, via Netlify CDN |
| `AMEN_ROOF_BAR_01.jpg` | **Unused** | No roof bar section exists yet |
| `AMEN_SPLASH_PAD_02.jpg` | **Unused** | amenities.html Splash Pad uses island-h2o.jpg instead |
| `BLDG_08_01.png` | index.html — full bleed break | Local, via Netlify CDN (w=2000) |
| `ENTRANCE_02.jpg` | index.html — gallery (Resort Entrance) | Local, via Netlify CDN |
| `ENTRANCE_03.jpg` | index.html — gallery (Resort Exterior) | Local, via Netlify CDN |
| `FLOOR_PLAN_123OceanBeach.png` | index.html + residences.html — all 6 floor plan slides | Placeholder image; same file used 6× per page, grayscale filter applied |
| `LOC_01.jpg` | index.html — location section (right panel) | Local, via Netlify CDN |
| `UNIT_BALCONY_04.jpg` | index.html (panel), residences.html (Terrace section) | Local, via Netlify CDN |
| `UNIT_BATH_01.jpg` | index.html (panel), residences.html (Bathroom section) | Local, via Netlify CDN |
| `UNIT_BED_MASTER_02.png` | index.html (gallery), residences.html (Bedroom section) | Local, via Netlify CDN |
| `UNIT_LIVING_02.jpg` | index.html (panel), residences.html (Living section) | Local, via Netlify CDN |
| `UNIT_LIVING_03.jpg` | residences.html hero bg + Kitchen section; index.html (panel + gallery) | **Same file used for hero AND kitchen label** |
| `disney-springs.jpg` | location.html — Disney Springs attraction | Direct src (no Netlify CDN) |
| `island-h2o.jpg` | location.html + amenities.html (Splash Pad) | Direct src on both pages |
| `legoland-florida.jpg` | location.html — LEGOLAND attraction | Direct src |
| `medieval-times.jpg` | location.html — Medieval Times attraction | Direct src |
| `old-town-kissimmee.jpg` | location.html — Old Town Kissimmee attraction | Direct src |
| `orlando-nature.jpg` | location.html — full bleed break (Greater Orlando quote) | Direct src |
| `orlando-splash.jpg` | location.html — page hero background | Direct src in CSS |
| `seaworld-orlando.jpg` | location.html — SeaWorld attraction | Direct src |
| `universal-orlando.jpg` | location.html — Universal Orlando attraction | Direct src |
| `walt-disney-world.jpg` | location.html — Walt Disney World attraction | Direct src |

---

## 3. Design System

### CSS Custom Properties (`:root` — identical across all 4 pages)

```css
--white:      #ffffff
--off-white:  #F8F6F2
--stone:      #EDEBE6
--warm-gray:  #C8C4BC
--mid-gray:   #8A8680
--dark:       #0B111F
--text:       #2C2A27
--accent:     #497d9c
```

### Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@200;300;400&display=swap" rel="stylesheet">
```

- **Playfair Display** — headings, floor plan names, prices, eyebrow labels on hero, quotes, nav wordmark
- **Outfit** — body copy, nav links, labels, captions (default body font, weight 300)

### Key Reusable Class Patterns

| Class | Role |
|---|---|
| `.eyebrow` | Small uppercase tracking label above section headings (0.93rem, letter-spacing 0.32em) |
| `.intro-eyebrow` | Variant eyebrow used in intro and gallery sections |
| `.page-hero-eyebrow` | Eyebrow on page heroes (animated in on load) |
| `.section-header` | Wrapper for eyebrow + h2 + intro paragraph in major sections |
| `.rule` | 28px × 1px accent-colour horizontal rule used as decorative divider |
| `.reveal` | Scroll-in animation trigger (opacity 0 → 1, translateY 28px → 0, 0.85s) |
| `.reveal.in` | Applied by IntersectionObserver when element enters viewport |
| `.d1 .d2 .d3` | Transition delay modifiers (0.15s, 0.25s, used with `.reveal`) |
| `em` inside headings | Italic variant — used decoratively in nearly every h1/h2 |
| `.alt` | Alternates background: `.amenity.alt .amenity-content` uses `var(--off-white)` |
| `.reverse` | Flips two-column grid layout (uses `direction: rtl` trick) |

---

## 4. Navigation

### Exact Nav HTML Structure (same on all 4 pages)

```html
<nav id="nav">
  <!-- Left: wordmark (Logo 03 — symbol + wordmark SVG) -->
  <a href="index.html" class="nav-logo">
    [inline SVG viewBox="0 0 469.23 105.91" height 48px]
  </a>

  <!-- Centre: symbol + nav links stacked -->
  <div class="nav-middle">
    <a href="index.html" class="nav-symbol-inner">
      [inline SVG viewBox="0 0 435.05 499.16" height 64px]
    </a>
    <div class="nav-center">
      <a href="index.html">Home</a>
      <a href="residences.html">Residences</a>
      <a href="amenities.html">Amenities</a>
      <a href="location.html">Location</a>
      <a href="index.html#gallery">Gallery</a>
    </div>
  </div>

  <!-- Right: CTA button -->
  <div class="nav-right">
    <a href="index.html#contact">Inquire Now</a>
  </div>

  <!-- Hamburger (mobile only, position: fixed top: 14px right: 16px z-index: 999999) -->
  <button class="hamburger" id="hamburger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile overlay (separate from nav, full-screen off-white panel) -->
<div class="mob-menu" id="mob-menu">
  <button class="mob-menu-close" id="mob-close" aria-label="Close menu"></button>
  <div class="mob-menu-backdrop" id="mob-backdrop"></div>
  <nav class="mob-menu-links">
    <a href="index.html">Home</a>
    <a href="residences.html">Residences</a>
    <a href="amenities.html">Amenities</a>
    <a href="location.html">Location</a>
    <a href="index.html#gallery">Gallery</a>
  </nav>
  <a href="index.html#contact" class="mob-menu-enquire">Inquire Now</a>
</div>
```

### Critical CSS Scoping Rule

Nav styles use `nav#nav {}` — **never `nav {}`**. This prevents `<nav class="foot-nav">` in the footer from inheriting `position: fixed`. The footer nav is a flex row of links inside `<footer>` and must never be position:fixed.

```css
nav#nav { position: fixed; top: 0; left: 0; right: 0; z-index: 99999; ... }
nav#nav.solid { background: rgba(255,255,255,0.96); backdrop-filter: blur(16px); ... }
```

**Never revert `nav#nav` to `nav`. Never add styles to `nav` without the `#nav` ID qualifier.**

### Scroll Behaviour

```javascript
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 60);
});
```

- Below 60px: nav is transparent, all elements white
- Above 60px: `.solid` class applied — white frosted background, dark text, accent-blue logo fills

### Active Link Per Page

Each page adds `class="active"` to its own nav link:
- `index.html` → `<a href="index.html" class="active">Home</a>`
- `residences.html` → `<a href="residences.html" class="active">Residences</a>`
- `amenities.html` → `<a href="amenities.html" class="active">Amenities</a>`
- `location.html` → `<a href="location.html" class="active">Location</a>`

Active state: `color: var(--white); border-bottom: 1px solid rgba(255,255,255,0.5); padding-bottom: 2px;`
On `.solid` nav: `color: var(--dark); border-bottom-color: var(--dark);`

---

## 5. Logos

Both logos are **inline SVGs** embedded directly in the HTML — no external image files.

| Logo | Location | viewBox | Height | Fill |
|---|---|---|---|---|
| Logo 03 (symbol + wordmark) | Left of nav (`nav-logo`) + footer (`foot-logo-svg`) | `0 0 469.23 105.91` | 48px (nav), 44px/48px (footer) | White over hero; `#497d9c` on solid nav; `#F8F6F2` in footer |
| Logo 01 (symbol only) | Centre of nav (`nav-symbol-inner`) | `0 0 435.05 499.16` | 64px | Same as Logo 03 |

Logo fill transitions:
```css
.nav-logo svg path, .nav-symbol-inner svg path { fill: #ffffff !important; transition: fill 0.4s; }
nav#nav.solid .nav-logo svg path,
nav#nav.solid .nav-symbol-inner svg path { fill: #497d9c !important; }
.foot-logo-svg svg path { fill: #F8F6F2 !important; }
```

---

## 6. Floor Plans

There are **6 floor plans** (`fpTotal = 6` in JS). The carousel is identical on both `index.html` and `residences.html`.

| # | ID | Name | Type | Beds | Baths | Sq Ft | Max Occ | Avg Nightly | Est Annual Rev | Price |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | fp-0 | The Bay A | 2 Bed · Plan A | 2 | 2 | TBC | 6 | $240 | $42–50K | From $490,000 |
| 2 | fp-1 | The Bay B | 2 Bed · Plan B | 2 | 2 | TBC | 6 | $240 | $42–50K | From $490,000 |
| 3 | fp-2 | The Bay C | 2 Bed · Plan C | 2 | 2 | TBC | 6 | $240 | $42–50K | From $490,000 |
| 4 | fp-3 | The Lighthouse A | 3 Bed · Plan A | 3 | 2 | TBC | 8 | $320 | $52–62K | From $590,000 |
| 5 | fp-4 | The Lighthouse B | 3 Bed · Plan B | 3 | 2 | TBC | 8 | $320 | $52–62K | From $590,000 |
| 6 | fp-5 | The Grand | 4 Bed | 4 | 3 | TBC | 10 | TBC | $62–74K | From $946,000 |

All floor plan images use the same placeholder: `FLOOR_PLAN_123OceanBeach.png` with `filter: grayscale(1) contrast(1.1)`.

Counter format: `01 / 06` — the `/06` is hardcoded in HTML (`fp-controls-inline` and `.fp-plan-num`).

---

## 7. Per-Page Content Audit

### index.html

| Section | Heading / Eyebrow | Copy Status | Image Status |
|---|---|---|---|
| Hero | "Orlando, Florida · 7 Minutes from Walt Disney World" · *"Calm by Design. Returns by Location."* | Real | `AMEN_LAZY_RIVER_03_AI.jpg` — local ✓ |
| Intro | "Introducing Lighthouse Key" · *"A Thoughtfully Designed Resort Residence Collection"* | Real | `AMEN_EXST_BUILDING_03.jpg` + `AMEN_LAZY_RIVER_03_AI.jpg` — local ✓ |
| Stats Bar | — | **Placeholder figures**: $285 ADR, 87% occupancy, 600 units, 7 min Disney | — |
| Residences (tabs) | "Residence Features" · *"Spaces That Feel Like Escape"* | Real | `UNIT_LIVING_02/03.jpg`, `UNIT_BALCONY_04.jpg`, `UNIT_BATH_01.jpg` — local ✓ |
| Floor Plans | "Floor Plans" | Real section; **all financial figures placeholder** | `FLOOR_PLAN_123OceanBeach.png` — placeholder image |
| Full Bleed | — | — | `BLDG_08_01.png` — local ✓ |
| Investment | "The Investment" · *"A Market That Performs Year-Round"* | Real; disclaimer present | No images |
| Location | "Location" · *"At the Centre of Everything"* | Real | `LOC_01.jpg` — local ✓ |
| Gallery | "The Experience" · *"Life at Lighthouse Key"* | Real labels | 6 local images ✓ |
| Quote | — | Real quote (attributed to Dev Team) | No image |
| Contact | "Investor Enquiries" · *"Reserve Your Position"* | Real | No image |

**HTML anomaly**: A Cloudflare email-decode script is present at the bottom of `index.html`:
```html
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
```
This suggests the email address was obfuscated by Cloudflare at some point (possibly when served through Cloudflare proxy). May be a stale artifact.

### residences.html

| Section | Heading / Eyebrow | Copy Status | Image Status |
|---|---|---|---|
| Hero (90vh) | "Lighthouse Key Resort · Orlando, Florida" · *"The Residences"* | Real | `UNIT_LIVING_03.jpg` via Netlify CDN (same as Kitchen section) |
| Interior Intro | "Interior Design" · *"Spaces That Feel Like Escape"* | Real | — |
| Living (01/05) | *"Open, Light-Filled Living Rooms"* | Real, with features list | `UNIT_LIVING_02.jpg` ✓ |
| Kitchen (02/05) | *"Chef-Grade Kitchens"* | Real, with features list | `UNIT_LIVING_03.jpg` ✓ (same file as hero) |
| Bedroom (03/05) | *"Restful, Considered Bedrooms"* | Real, with features list | `UNIT_BED_MASTER_02.png` ✓ |
| Bathroom (04/05) | *"Spa-Quality Bathrooms"* | Real, with features list | `UNIT_BATH_01.jpg` ✓ |
| Terrace (05/05) | *"Private Outdoor Terraces"* | Real, with features list | `UNIT_BALCONY_04.jpg` ✓ |
| Floor Plans | "Floor Plans" · *"Your Residence, in Detail"* | Real; **all sq ft and financial figures placeholder** | `FLOOR_PLAN_123OceanBeach.png` — placeholder |

### amenities.html

Hero background: **still Unsplash** (`photo-1582268611958-ebfd161ef9cf` — appears to be a resort pool)

| # | Amenity | Image Status | Notes |
|---|---|---|---|
| 01/08 | Resort *Pool* | **Unsplash** `photo-1582268611958-ebfd161ef9cf` | Local file `AMEN_POOL_BIG_01.jpg` exists and is unused |
| 02/08 | Lazy *River* | **Unsplash** `photo-1519046904884-53103b34b206` | Local files `AMEN_LAZY_RIVER_01_AI.jpg` + `_03_AI.jpg` exist and are unused |
| 03/08 | Splash *Pad* | `images/island-h2o.jpg` — local ✓ | `AMEN_SPLASH_PAD_02.jpg` also exists but unused here |
| 04/08 | Mini *Golf* | **Unsplash** `photo-1587174486073-ae5e5cff23aa` | No local replacement yet |
| 05/08 | Pizza *Restaurant* | **Unsplash** `photo-1555396273-367ea4eb4db5` | No local replacement yet |
| 06/08 | Pickleball *Courts* | **Unsplash** `photo-1554068865-24cecd4e34b8` | Local `AMEN_PICKLE_BALL_02.jpg` exists (used on index gallery) |
| 07/08 | Game *Room* | **Unsplash** `photo-1511882150382-421056c89033` | No local replacement yet |
| 08/08 | Fitness *Centre* | **Unsplash** `photo-1534438327276-14e5300c3a48` | Local `AMEN_GYM_01.png` exists and is unused |

All amenity copy is real marketing prose (not lorem ipsum). All Unsplash images use `w=1200&q=85`.

CTA section: *"Experience It For Yourself"* — links to `index.html#contact`. Copy is real.

**Footer on amenities.html**: Home · Residences · Location · Enquire (no Amenities link — this page omits itself)

### location.html

Hero background: `images/orlando-splash.jpg` — local ✓ (direct src in CSS, no Netlify CDN)

| Section | Status | Notes |
|---|---|---|
| Distance Bar (marquee) | Real — verified | 8 items duplicated for seamless loop |
| Location Intro quote | Real | "There is no address in Florida…" |
| Attraction 01: Walt Disney World | Local `walt-disney-world.jpg` ✓ | ~7 min drive pill ✓ |
| Attraction 02: Universal Orlando | Local `universal-orlando.jpg` ✓ | ~35 min drive pill ✓ |
| Attraction 03: SeaWorld Orlando | Local `seaworld-orlando.jpg` ✓ | ~28 min drive pill ✓ |
| Attraction 04: Old Town Kissimmee | Local `old-town-kissimmee.jpg` ✓ | **Drive pill says ~22 min; distance bar says 12 min — DISCREPANCY** |
| Full Bleed break | Local `orlando-nature.jpg` ✓ | "Greater Orlando" overlay quote |
| Attraction 05: Disney Springs | Local `disney-springs.jpg` ✓ | ~22 min drive pill ✓ |
| Attraction 06: Island H2O | Local `island-h2o.jpg` ✓ | ~5 min drive pill ✓ |
| Attraction 07: Medieval Times | Local `medieval-times.jpg` ✓ | Drive pill present |
| Attraction 08: LEGOLAND Florida | Local `legoland-florida.jpg` ✓ | ~40 min drive pill ✓ |
| Directory (4-col grid) | Real | Theme Parks, Dining & Entertainment, Water & Outdoors, Practical — ~40+ items |
| CTA | — | Links to `index.html#contact` |

All location.html images are served **without** Netlify CDN optimisation (direct `images/filename` src). No `/.netlify/images?url=` format.

**No HTML comments contain TODOs on any of the 4 pages.**

---

## 8. Verified Data — DO NOT CHANGE WITHOUT INSTRUCTION

### Drive Times (distance bar, location.html)

```
5 min  — Island H2O Water Park
7 min  — Walt Disney World
12 min — Old Town Kissimmee
20 min — Medieval Times
22 min — Disney Springs
28 min — SeaWorld Orlando
35 min — Universal Orlando
40 min — LEGOLAND Florida
```

### Floor Plan Pricing & Yields (placeholders)

| Type | Price | Est. Annual Revenue | Avg Nightly Rate | Max Occupancy |
|---|---|---|---|---|
| 2-Bed (Bay A/B/C) | From $490,000 | $42–50K/yr | $240 | 6 guests |
| 3-Bed (Lighthouse A/B) | From $590,000 | $52–62K/yr | $320 | 8 guests |
| 4-Bed (The Grand) | From $946,000 | $62–74K/yr | TBC | 10 guests |

### Stats Bar (index.html — all placeholders)

```
$285    Stabilised Nightly Rate (ADR)
87%     Projected Occupancy
600     Unit Lakefront Resort Community
7 min   To Walt Disney World
```

### Investment Cards (index.html — all placeholders)

```
$490K   Entry Unit Price
87%     Projected Annual Occupancy
$45K    Est. Annual Revenue Per Unit
Monthly Owner Income Distributions
```

### Contact Details

```
Phone:  +1 (407) 555 0100
Email:  invest@lighthousekeyresort.com
```

---

## 9. Technical Rules (MUST follow on every edit)

1. **Never modify `nav#nav {}` CSS scoping.** Nav styles must always use `nav#nav {}`, not `nav {}`. This prevents `<nav class="foot-nav">` in the footer from inheriting `position: fixed`. Never revert this.

2. **Python string replacement preferred over `sed` for HTML edits.** Always read the file fresh before each replacement, then grep-verify after.

3. **Netlify Image CDN URL format:**
   ```
   /.netlify/images?url=/images/FILENAME&w=WIDTH&q=100
   ```
   - Do NOT add `fit=cover` — causes oversized images; CSS handles cropping.
   - Width conventions: `2000` (hero/full-bleed), `900` (large sections), `800` (standard panels), `700` (smaller grid items).
   - `q=100` required — images appear degraded at lower quality on live Netlify.

4. **Image filenames in HTML must be hyphenated to match exactly.** Non-hyphenated copies cause broken images.

5. **All amenity sections locked to `height: 620px` with `overflow: hidden` on `.amenity-content` — preserve this.** (Note: as of audit date, `.amenity-content` uses flex layout; `.amenity` uses `min-height: 560px`. If adding height lock, apply to `.amenity-content`.)

6. **location.html images are served without Netlify CDN.** They use direct `images/filename` src paths (not `/.netlify/images?url=`). Keep consistent when adding/replacing images on that page.

---

## 10. Spelling & Terminology

- Always **Enquire** / **Enquiry** (never Inquire / Inquiry)
- **Lighthouse Key Resort** (full name) or **Lighthouse Key** (shorthand) — never "LKR"
- Drive times format: `X min` or `X hrs Y min`
- Walt Disney World is always **7 minutes** from the resort
- **Fitness Centre** (not Center) — British/international spelling used throughout
- Floor plan names: **The Bay A/B/C**, **The Lighthouse A/B**, **The Grand**

---

## 11. Pending Items

- [ ] **amenities.html image replacement pass** — 7 Unsplash images + hero bg remain. Local files exist for pool (`AMEN_POOL_BIG_01.jpg`), lazy river (`AMEN_LAZY_RIVER_01_AI.jpg`, `_03_AI.jpg`), pickleball (`AMEN_PICKLE_BALL_02.jpg`), gym (`AMEN_GYM_01.png`), splash pad (`AMEN_SPLASH_PAD_02.jpg`). Mini golf, pizza restaurant, and game room have no local replacements yet.
- [ ] **location.html image replacement pass** — all images are local but served without Netlify CDN optimisation; consider switching to `/.netlify/images?url=` format for consistency.
- [ ] **Old Town Kissimmee distance discrepancy** — distance bar says 12 min; attraction section drive pill says ~22 min. One needs correcting.
- [ ] **Placeholder copy** — all financial figures (prices, yields, nightly rates, sq footage, ADR, occupancy %) are placeholder. Track specific confirmed figures before publishing.
- [ ] **Floor plan square footage** — all 6 plans currently show "TBC".
- [ ] **Pricing and yield figures** — all placeholder; update when confirmed by developer.
- [ ] **Actual floor plan images** — all 6 plans use same `FLOOR_PLAN_123OceanBeach.png` with grayscale filter. Replace with actual plans when available.
- [ ] **Contact form backend** — form is cosmetic only (hides form, shows `.success-msg` div). Formspree integration recommended for real email delivery.
- [ ] **SEO pass deferred** — title tags, meta descriptions, OG tags across all 4 pages not yet optimised.
- [ ] **GitHub migration unresolved** — large image assets hit file size limits; consider Git LFS or external image host.
- [ ] **Logo colour/scroll decision** — currently `#497d9c` static (on solid nav); may want white over hero, switching to `#497d9c` on scroll. Already partially implemented (fill transitions in CSS).
- [ ] **Cloudflare email script** — stale Cloudflare obfuscation script in `index.html` may be safe to remove if no longer using Cloudflare proxy.
- [ ] **AMEN_ROOF_BAR_01.jpg** — exists in `/images/` but no roof bar section exists. Either add section or clean up unused file.
- [ ] **Unused image: AMEN_LAZY_RIVER_01_AI.jpg** — similar to `_03_AI.jpg`; evaluate which to use and delete the other.

---

## 12. Context Notes

- **Hybrid development**: This is a remodel of an existing resort plus new construction (new buildings added). This framing is an investor advantage — emphasise infrastructure benefits of the existing property combined with the yield potential of new development.
- **All numbers are placeholders** unless stated otherwise in this document. Pricing, yields, sq footage, ADR, occupancy rates — nothing is set in stone until confirmed by the developer.
- **The contact form submit** shows a thank-you message (`.success-msg` div) but has no backend — purely client-side JS that hides the form. No emails are sent.
- **fpTotal = 6**, not 5. The floor plan carousel has 6 slides. The counter reads "XX / 06".
- **No NOTES.md file** exists in the project root as of the initial audit.
- **Footer navigation varies by page**: index.html footer has Residences/Amenities/Location (3 links, no Home); amenities.html footer has Home/Residences/Location/Enquire (4 links); other pages follow similar patterns. This inconsistency may be intentional (each page omits itself) or may need normalising.
