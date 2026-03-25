# Case Study: Panorama Style
## Building a multilingual restaurant website from zero to live — every step, every mistake

**Client:** Panorama Style, Haifa, Israel
**Type:** Russian restaurant + banquet hall (40–350 guests)
**Goal:** Convert visitors to WhatsApp inquiries and event bookings
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Vercel
**Languages:** Russian (default) · Hebrew (RTL) · English
**Live:** panorama-style-hwox.vercel.app
**Built by:** Getflowmate · March 2026

---

## Background

Panorama Style is a Russian-style restaurant and event hall in Haifa serving the Russian-speaking community in northern Israel. No website. Bookings through Facebook and word of mouth only. Ratings: Google 4.2/5 (386 reviews), Facebook 4.5/5. They host everything from corporate events to weddings to Shabbat lunch. Operating primarily Friday–Saturday evenings plus Shabbat from noon — weekdays only by advance booking.

The ask: a website that works like a sales page, not a brochure. Primary CTA is WhatsApp — no booking system, no backend, no email. Just get people to tap the green button.

---

## Phase 1 — Architecture decisions

Before writing a line of code, three decisions locked in the entire build:

**1. Language architecture.** Three languages (RU, HE, EN) with Russian as the primary. Options were: separate routes (`/ru`, `/he`, `/en`), URL params (`?lang=ru`), or client-side state. We went client-side state with `LanguageContext` — simpler to build, no SSR complexity, and the target audience is repeat/referred visitors not cold search traffic. Hebrew needed full RTL: `dir="rtl"` set on `<html>` when HE is active. All content centralized in `lib/content.ts` so any copy change touches one file across all 3 languages.

**2. No backend, no CMS.** Everything static except the Facebook gallery API route. Contact form → WhatsApp. Event booking → WhatsApp. Date inquiry → WhatsApp. This meant zero ongoing infrastructure cost and zero deliverability issues.

**3. Single source of truth for contact info.** `lib/wa.ts` owns every phone number, URL, and WhatsApp link. Learned from experience: if phone numbers live in 6 different components, you get 5 that are wrong after the first update.

---

## Phase 2 — The build

### Design system
Dark luxury palette: near-black background (`#0a0a0a`), gold accent (`#c9a84c`), cream text (`#f5f0e8`). Playfair Display for headings — editorial, premium, slightly old-world. No hamburger menu on mobile by explicit request. StickyContactBar component: fixed Call + WhatsApp buttons pinned to the bottom of every mobile screen.

### Pages built

**Home** — Full-screen parallax hero (scroll at 0.4× speed), multiple overlay layers (solid + gradient + radial vignette + grain texture), location pill linking to maps, venue name, headline, gold rule, subline, social proof (star rating + review count), dual CTAs (Call + WhatsApp), urgency line. Below the hero: animated about section, marquee gallery (two rows, opposite directions, slows on hover), reviews strip with scrolling cards, why-us stats, events CTA section.

**Menu** — Full menu organized by category (starters, mains, seafood, soups, drinks, desserts). Also built as a popup/bottom-sheet variant (`EventsCTA.tsx`) for use inline on the events page — bottom sheet on mobile, centered modal on desktop.

**Events** — The most complex page. Pricing packages (Essential ₪250, Premium ₪290, VIP custom) with everything-included breakdown. Six event type cards with icons. Date availability checker — user picks a date, gets a pre-filled WhatsApp message. Full booking form: hall selector, event type, name, phone, date, guest count, notes — all assembled into a structured WhatsApp message on submit. FAQ accordion. All text in all 3 languages.

**Gallery** — Live Facebook Graph API feed. API route at `/api/gallery` fetches photos and videos, ISR cached for 1 hour. Front-end fetches on mount, falls back to 9 static images if API fails. Daily seed shuffle (`getDailySeed()`) so all visitors see the same order on a given day but it feels fresh each morning.

**Contact** — Google Maps embed (correct coordinates), address card with Google Maps + Waze navigation buttons, phone, WhatsApp, Facebook, TikTok, opening hours card, all 3 languages.

**Accessibility** — Created later (Phase 6).

### The Facebook API setup
Connected to Facebook Graph API v25.0 using a Page Access Token stored in Vercel environment variables as `FACEBOOK_PAGE_ACCESS_TOKEN`. This pulls the restaurant's live Facebook photos and videos directly — no manual upload, no CMS, their existing Facebook activity becomes the site gallery automatically.

⚠️ **Important note on the token:** Page Access Tokens generated via Graph API Explorer or user token exchange expire in 60 days. If the gallery goes blank in the future, the token needs to be refreshed. The right permanent fix is a System User token from Meta Business Suite — never expires. This was flagged but not yet implemented.

---

## Phase 3 — The food photography detour

Tried to generate AI food photography for the menu page using Replicate (Flux 1.1 Pro). Built `generate_dish.py`, wrote detailed prompts in `food-photography-prompts.md`, generated two test images (`dish-ribeye-test.jpg`, `dish-ribeye-v2.jpg`).

The images were fine technically but didn't match the actual dishes served at Panorama Style. A generated ribeye steak doesn't represent their actual shashlik and Kiev cutlets. Scrapped it — the Facebook gallery approach (real photos, real dishes, real events) was more honest and more effective. Files moved to `creatives/` and `docs/`.

---

## Phase 4 — First review panel

Deployed to Vercel and ran a 5-persona simulated review:

- **Lena** (Russian-speaking woman, planning a birthday party)
- **Natasha** (Russian woman, researching for a wedding)
- **Marina** (Hebrew-speaking local, looking for event venues)
- **Amir** (Arabic-speaking local, stumbled on the site via Google)
- **Sarah** (English tourist, Googled "Haifa restaurants")

Each persona browsed independently and reported back. Combined findings:

| Issue | Reporter |
|---|---|
| Menu popup can't scroll on mobile | Natasha |
| Nav logo invisible on page load (before scrolling) | Lena |
| "Google Maps" button opens Waze on desktop | Marina |
| No opening hours anywhere | Marina, Natasha, Amir |
| Hero photo barely visible under dark overlay | Lena |
| Floating WhatsApp button is green — clashes with palette | Lena |
| Rating "4.5" in hero has no source label | Natasha |
| Page title stays Russian when switching to HE/EN | Amir |
| Virtual tour iframe loads eagerly, blocks page | Sarah |
| No mobile navigation (hamburger removed by request) | Amir |

**Fix plan created** as `misty-plotting-penguin.md` — 9 fixes documented with exact code changes, file targets, and verification steps.

---

## Phase 5 — The silent deployment failure

Implemented all 9 fixes. Committed. Pushed. Checked the live site.

**Nothing changed.**

Spent time debugging. Eventually discovered: the repository had two git remotes.

```
origin       → github.com/ediftw17/panorama-style-website  (wrong)
panorama-style → github.com/ediftw17/panorama-style         (Vercel watches this)
```

Every commit since the project started had been going to `origin`. Vercel was watching `panorama-style`. The live site had been frozen since an early autoplay commit — weeks of work including all 9 fixes had never deployed.

Fixed by pushing all commits to the correct remote:
```
git push panorama-style main
```

From this point forward: every push goes to both remotes.

---

## Phase 6 — User report: button size inequality

After the fixes landed, direct feedback came in:

> "why is the button of whatsapp far larger than the call make them the same size"

Two separate places had this bug:

**Sticky contact bar (mobile):** WhatsApp had `flex-[2]`, Call had `flex-1`. WhatsApp was literally 2× wider.

**Hero CTAs:** Both used `inline-flex` with no minimum width. "WhatsApp" is a longer word than "Call" — so WhatsApp button was naturally wider. Fixed with `w-full sm:w-auto sm:min-w-[190px]` on both.

Both fixed in one commit.

---

## Phase 7 — Second review panel

Ran fresh review agents on the now-correctly-deployed live site. Added Dmitri — a 54-year-old Russian-speaking business owner from Haifa planning a corporate event.

**Dmitri's findings (real vs noise):**

Dmitri came back with a long report claiming multiple fixes hadn't landed. Cross-checked against the live site directly with Playwright:

| Dmitri's claim | Reality |
|---|---|
| Google Maps button still goes to Waze | False — URL was `maps.google.com/...`, correct |
| Opening hours missing | False — hours card visible, "Пт–Сб с 18:00 · Шаббат с 12:00" |
| Hero overlay still bg-black/65 | False — code had bg-black/45, already fixed |
| Reviews showing mixed languages | **True** — real bug |
| Site defaults to Hebrew | Session artifact — Playwright had HE stored from earlier |

The one real find: `ReviewsStrip` was pulling `allReviews` without filtering by `lang`. A Russian visitor was seeing Hebrew and English reviews scroll by. 14 reviews across all 3 languages, all shown simultaneously.

Fix: one line added to the filter.
```ts
// Before:
allReviews.filter(r => r.rating >= MIN_RATING)
// After:
allReviews.filter(r => r.rating >= MIN_RATING && r.lang === lang)
```

Also caught separately during the same session: the WhatsApp inline card on the contact page was still green (`bg-[#25D366]/10`). Fix 6 had only changed the floating button component, not the contact page card.

---

## Phase 8 — Owner feedback round

Three direct requests came in:

**"hours are not listed at the right spot — they work mostly weekends, it's really important"**

The hours existed on the contact page and footer but not prominently. Updated the hero subline across all 3 languages to include the actual schedule:
- RU: "Пт–Сб + Шаббат" (replacing the vague "работаем в Шаббат")
- Added "Будни — по предварительной записи" to the hours note in contact + footer

**"there are few google maps buttons and some of them don't work on desktop"**

Hero location pill and footer address both used `WAZE_URL` (`waze://` deeplink). Works on mobile with Waze installed, does nothing on desktop. Changed both to `MAPS_URL` (proper `https://maps.google.com/...` URL). Only the explicit "Waze" button on the contact page keeps `waze://`.

**"SITE MUST MUST MUST DEFAULT TO RUSSIAN ALWAYS"**

`LanguageContext` was reading from `localStorage` on mount — if a user had previously visited in Hebrew, next visit showed Hebrew. Removed the `localStorage.getItem` entirely. Every visit starts in Russian regardless of prior session. Language switching still works within the session.

---

## Phase 9 — Accessibility compliance

Researched Israeli accessibility law. Key findings: IS 5568 (based on WCAG 2.0 AA) is mandatory for businesses with 100k+ NIS annual revenue. Penalties up to ₪50,000 per lawsuit, plaintiff doesn't need to prove harm. Compliance deadlines already passed.

**What we fixed:**

All 7 booking form fields were missing `htmlFor`/`id` associations — labels and inputs weren't connected for screen readers. Added to every field: hall, event type, name, phone, date, guest count, notes.

Date availability checker had no label — added `aria-label`.

Marquee gallery auto-scrolls decorative photos — added `aria-hidden="true"` so screen readers skip it entirely and jump to the "View Full Gallery" link.

Created `/accessibility` page in all 3 languages with: legal basis (IS 5568), compliance level (WCAG 2.0 AA), list of implemented accessibility features, and direct contact info for accessibility issues. Added footer link on every page.

**Visual impact: zero.** These changes are entirely invisible to sighted users.

---

## Phase 10 — Final polish

**Footer sticky bar collision:** The mobile sticky CTA bar was covering the bottom of the footer — copyright, "Built by Getflowmate" credit, accessibility link were all hidden. Added `pb-32 md:pb-14` to the footer container.

**Getflowmate credit:** Added "Built by Getflowmate" with mailto link (`getflowmate2026@gmail.com`) to footer. Intentionally subtle — `text-white/15` opacity. Will swap to URL when getflowmate.com has a proper landing page.

**Root folder cleanup:** 75 panorama screenshots scattered in the workspace root moved to `projects/panorama-style/screenshots/`. Loose files from the food photography experiment moved to `creatives/` and `docs/`.

---

## Final state

### What the site does
- Opens in Russian on every visit, no exceptions
- Location pill and footer address → Google Maps (works on desktop and mobile)
- Explicit "Waze" button → Waze deeplink
- Hero subline shows actual schedule: Пт–Сб + Шаббат, no guessing
- Booking form submits a pre-filled structured WhatsApp message
- Gallery pulls live from Facebook with static fallback
- Reviews show only in the active language
- Mobile sticky bar: Call + WhatsApp equal size, always visible
- Accessibility statement at `/accessibility`
- Footer: copyright + Getflowmate credit + accessibility link, fully visible on mobile

### Commit history (key milestones)
1. Initial build — all 5 pages
2. Facebook API gallery integration
3. 9-fix post-review batch (was invisible until remote issue fixed)
4. Push to correct Vercel remote (`panorama-style`)
5. Button size equalization (sticky bar + hero)
6. WhatsApp contact card color fix (missed in batch)
7. Reviews language filter
8. Hours copy, Russian default, map links
9. Accessibility compliance (form labels, aria-hidden, /accessibility page)
10. Footer mobile padding + Getflowmate credit

### Bugs encountered and fixed: 15
### Review iterations: 2 full panels
### Languages: 3
### Pages: 6 + API route + sitemap

---

## What we'd do differently

**Token management first.** The Facebook Page Access Token will expire in ~60 days. Should have set up a System User token from Meta Business Suite at the start — never expires, no manual refresh needed.

**Vercel remote verification upfront.** Two remotes existed and we pushed to the wrong one for the entire first phase. Should be the first thing checked on any project with an existing git repo: `git remote -v` and confirm which remote Vercel is watching.

**Accessibility earlier.** Built it as Phase 9 but it should be Phase 1 infrastructure — form labels especially are easier to add at build time than retrofit.

---

## Built by

[Getflowmate](mailto:getflowmate2026@gmail.com) — March 2026
