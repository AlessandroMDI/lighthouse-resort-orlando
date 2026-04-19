# CLAUDE.md — LightHouse Resort - Orlando

Read before editing. All numbers are placeholders unless confirmed otherwise.

---

## Project

- **Site:** Presale investor microsite — 4 flat HTML files, Netlify Drop deployment
- **Domain:** lighthouse-key.com | **Copyright:** © 2026 LightHouse Resort - Orlando
- **Tone:** Premium, calm, internationally refined. Audience: HNW investors.
- **Pages:** `index.html` · `residences.html` · `amenities.html` · `location.html`

---

## Design System

**CSS vars** (identical on all pages):
```
--white: #fff  --off-white: #F8F6F2  --stone: #EDEBE6  --warm-gray: #C8C4BC
--mid-gray: #8A8680  --dark: #0B111F  --text: #2C2A27  --accent: #497d9c
```

**Fonts:** Playfair Display (headings, quotes) · Outfit weight 300 (body, nav, labels)

**Key classes:**
- `.eyebrow` — small uppercase tracking label (0.93rem, letter-spacing 0.32em)
- `.rule` — 28px × 1px accent-colour decorative divider
- `.reveal` / `.reveal.in` — scroll-in animation via IntersectionObserver
- `.alt` — alternates section bg to `--off-white`
- `.reverse` — flips two-column grid via `direction: rtl`

---

## Technical Rules (mandatory)

1. **Nav CSS must use `nav#nav {}`, never `nav {}`** — prevents `<nav class="foot-nav">` inheriting `position: fixed`.

2. **Netlify Image CDN format:** `/.netlify/images?url=/images/FILENAME&w=WIDTH&q=100`
   - No `fit=cover`. Width: `2000` hero, `900` large, `800` standard, `700` grid.
   - `q=100` required — lower quality looks degraded on Netlify live.

3. **location.html images use direct `images/filename` paths** — no Netlify CDN. Keep consistent.

4. **Read file before editing, grep-verify after.** Use the Edit tool over Bash for HTML changes.

---

## Navigation

- Structure: logo left · symbol + links centre · CTA right · hamburger mobile
- Nav links: Home · Residences · Amenities · Location · Gallery · Inquire Now (→ `index.html#contact`)
- Each page sets `class="active"` on its own nav link
- Scroll >60px adds `.solid` class: frosted white bg, dark text, accent logo fills
- Logo fills: white over hero → `#497d9c` on `.solid` nav → `#F8F6F2` in footer
- Both logos are **inline SVGs** (no external files)

---

## Images

**Netlify CDN** (index + residences): standard `/.netlify/images?url=` format.
