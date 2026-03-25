# Panorama Style — Visual UX/Design Audit
**Site:** https://panorama-style-hwox.vercel.app
**Date:** 2026-03-20
**Auditor:** Claude (Antigravity)
**Scope:** Homepage, /events, /gallery, /contact — desktop (1440px) + mobile (375px)

---

## Executive Summary

The site communicates the right information and has solid structural bones — multilingual support, clear pricing, WhatsApp CTAs, review badges. But the execution reads like a template with minor customization. The overall feel is budget wedding venue website, not a premium restaurant and event hall. The design lacks the visual authority that justifies the price point (₪250–₪400/person). Core problems: hero is weak and content-buried, gallery is repetitive with low-quality party photos, reviews section is bloated and broken-looking, and mobile experience falls apart in the middle sections.

---

## Page-by-Page Findings

### Homepage

#### Hero Section
**What works:**
- Full-width background photo with overlay. Dark treatment fits the black/gold palette.
- Location badge ("Хайфа, Израиль") with a small icon is a nice touch.
- Two CTAs present (events + contact).

**What's broken / weak:**
- The hero image is a photo of the restaurant interior (dining hall with blue LED ceiling). It's fine visually but it renders small, low-contrast, and feels like a backdrop rather than an immersive hero. Compare to Nobu's site where the hero is a full bleed atmospheric food/space shot that overwhelms you.
- The H1 "Panorama Style" is the restaurant's own name — this is wasted headline real estate. The value prop is buried in the subtext. High-end restaurant sites lead with the feeling ("Where celebration begins" / "Haifa's premier event hall"), not the brand name.
- The two CTAs have different visual weights but the secondary one ("Связаться с нами") uses an outline style that disappears against the dark background. Contrast is too low.
- There's a floating WhatsApp button (green circle) parked in the middle-right of the hero, which overlaps content and looks like a plugin from 2017. It persists across all pages.

#### About Section
**What works:**
- Clean two-column layout: text left, stat badges right.
- The three stat callouts (4.2/5, #111 из 1850, 40–350) are good at a glance.

**What's broken:**
- Extremely low visual hierarchy. The "О нас" label above the heading and the heading itself are almost the same visual weight. No clear entry point for the eye.
- The stat badges are plain text numbers on dark cards — no visual differentiation, no icons, no treatment that makes them feel earned. Looks like a code snippet placeholder.
- The about copy is competent but generic. "Аутентичную кухню с праздничной атмосферой" is a phrase that appears on 10,000 restaurant sites. No specific hooks — no founding story, no chef, no signature dish, nothing that makes Panorama Style feel specific.

#### Gallery Grid (Homepage Preview)
**What works:**
- 6-photo grid preview with a "Все фото" link is the right structure.

**What's broken:**
- The grid has a large, unexplained empty/dark block in the lower-left area. This appears to be a broken or empty image slot. It renders as a solid black rectangle. This is a major credibility killer — it looks like something is loading or broken.
- The photos themselves are all party event shots (people posing in front of heart balloon backdrops). There are zero food photos, zero venue mood shots from the daytime, zero photos showing the hall set for a wedding. For a venue trying to sell ₪400/person packages, the gallery needs to aspirationally sell the space, not just document past events.
- All 6 preview photos appear to be the same shoot (same balloon setup, same venue backdrop). No variety.

#### Reviews Section
**What works:**
- Three platform badges (Google Maps, Restaurant Guru, Facebook) with star ratings is smart social proof stacking.
- Carousel auto-scrolls with real review text.

**What's broken:**
- The platform badges are tiny and hard to read. The Google badge shows a small icon and "4.2/5" in small text — it's not immediately clear this is a Google Maps score. Restaurant Guru badge shows "RG" in a plain box — looks like a placeholder.
- The review carousel loops the same 7 reviews but the DOM shows them duplicated 3x (21+ instances visible in the snapshot). The carousel is infinite-looping by tripling the content — fine technically, but if a user inspects the page or the carousel stutters, it looks broken.
- Review cards have no differentiation — no author photo/avatar, no platform logo on each card (just tiny "Rest. Guru" text), no date. Anonymous "Happy guest" and "Visitor" labels signal fake or unverified reviews even when they're real.
- Review text is in 3 languages in the same carousel (Russian, Hebrew, English). This is confusing — a Russian-speaking user scrolling through will hit Hebrew-language reviews mid-carousel. Reviews should be filtered by the active language.

#### Events / Banquet Hall Section (Homepage version)
**What works:**
- The included-vs-addon split is clear and genuinely differentiating.
- The emoji icons for event types (💍 Свадьбы, 🎂 Дни рождения, etc.) are readable on mobile.
- WhatsApp + Call CTAs side by side is good — meets the audience where they are.

**What's broken:**
- This section is doing too much. It's trying to be both a pricing overview AND an event type selector AND a contact block. On desktop it renders as a cramped two-column layout where the left column is a wall of small text (included/addon lists) and the right is a grid of emoji cards.
- The two green CTA buttons ("Написать в WhatsApp" and "Позвонить сейчас") are the same visual weight as each other and similar to the pricing tier buttons on /events. There's no visual hierarchy telling the user which action matters most.
- "Работаем в Шаббат · Можно со своим алкоголем · Не кошерно" is a critically important differentiator for this audience but it's rendered as a small muted line below the event type grid. It should be called out prominently.

#### WhyUs Section
**What works:**
- The five feature bullets (Шаббат, свой алкоголь, живая музыка, гибкий формат, парковка) are the right differentiators.
- The three stat callouts at the top (price, ranking, rating) work as a fast-scan value proof.

**What's broken:**
- The section header "Разница в деталях" is vague. Visitors don't know what difference is being referenced. Better: "Почему Panorama Style?" or "Что входит в цену?"
- The five features are rendered as simple icon + text rows in a list. There's no visual rhythm — icons appear to be small SVG checkmarks, not custom icons. Feels like a feature list from a SaaS landing page, not a premium venue.
- The three stat numbers at the top (₪250, #111, 4.2★) are bold gold text on dark — this works, but they're not clickable or linked to proof sources despite being claims that require trust.

#### Contact Section (Homepage bottom)
**What works:**
- Address, phone, WhatsApp icon-labeled rows work.
- Static map thumbnail with "Открыть в Google Maps" link is a decent pattern.

**What's broken:**
- The map thumbnail is a static screenshot (not an interactive embed here, unlike /contact). The thumbnail is very small and dark — can barely see the map.
- "Страница контактов" link below the contact rows is oddly formal and redundant — the user is already looking at contact info.
- No mention of hours. This is a banquet hall — people need to know when they can visit, when they can call, and whether walk-ins are welcome.

---

### /events Page

**What works:**
- Three-tier pricing cards (Essential / Premium / VIP) are well-structured and easy to compare.
- The "Самый популярный" badge on Premium is correct sales psychology.
- Booking form at the bottom (event type, name, phone, date, guest count, notes) is comprehensive.
- FAQ accordion is the right pattern for common objections.

**What's broken:**

#### Pricing Cards
- All three cards have the same border style and color on dark background — the Popular (Premium) card is distinguished only by a tiny label and a gold button vs. grey buttons on the others. The visual differentiation isn't strong enough. Nobu / Cipriani price tiers feel like distinct product offerings; these feel like the same card with different text.
- The CTA buttons ("Выбрать пакет") link directly to WhatsApp pre-fill, which is smart. But "Выбрать пакет" is generic — "Забронировать Essential" etc. would reduce friction and feel more committed.
- The Essential card has 6 items, Premium has 4 (including "Всё из Essential"), VIP has 4 — but VIP has fewer visible items than Essential because "Всё из Premium" compresses the list. This makes VIP look like less value, not more.

#### FAQ Accordion
- The FAQs are exactly right (alcohol, Shabbat, capacity, kosher, DJ, venue visit). Good objection handling.
- Visually the accordion items are rendered with a small chevron arrow on the right, but the styling is identical to a plain dark card — there's no affordance that these are interactive. A user who doesn't try clicking them might never know.
- The section label "Часто задаваемые вопросы" in small uppercase orange/gold text above the accordion is undersized and easy to miss.

#### Booking Form
- The form field labels ("Тип мероприятия", "Имя", "Телефон", etc.) are in small uppercase grey — readable but low contrast.
- Date field shows placeholder "dd/mm/yyyy" which is fine but there's no calendar picker visible — on mobile this will open the native date picker which is inconsistent.
- "Отправить в WhatsApp" as the submit action is clever (auto-fills a WhatsApp message with form data). But the button is bright green (WhatsApp brand color) which clashes with the site's gold/black palette. The green feels like a different product injected into the page.
- "Отвечаем в течение 2 часов" response time promise below the button is good trust-building.

---

### /gallery Page

**What works:**
- Filter pills (Все / Свадьбы / Дни рождения / Корпоративы / Зал) are correctly implemented.
- Masonry-style grid with hover captions is appropriate for a venue gallery.
- "Хотите провести мероприятие?" CTA at the bottom is a good conversion attempt from gallery browsing.

**What's broken:**
- The photos are almost exclusively the same event — multiple shots of the same group of women posing in front of the same heart/balloon backdrop. This is a critical content problem. A venue gallery must show: different event types, the hall empty and dressed for different occasions, food, the bar area, the stage, different décor styles. What's here looks like someone uploaded their personal phone album.
- Image captions are in English ("Main hall", "Bar area", "Stage setup", "Dining hall") while the rest of the site is in Russian. These look like placeholder alt text that was never updated with real captions. Breaks immersion.
- The masonry layout has no consistent gap rhythm — some image pairs are tightly packed while others have large dark voids between them depending on aspect ratios. On the visual as rendered, the lower-right quadrant of the grid has large empty dark spaces.
- Gallery page has no hero/banner — it starts immediately with the "Фотографии / Галерея" heading in very small text, then filter pills. There's no atmospheric entry point that sets the mood before showing the photos.
- No photo count indicator ("Показано 9 из 24 фото"). No lightbox appears to be implemented — clicking a photo likely just navigates to /gallery (per the snapshot, all links go to /gallery not to individual image routes).

---

### /contact Page

**What works:**
- Four contact cards (Address, Phone, WhatsApp, Facebook) are clearly laid out.
- Google Maps embed is live and interactive (iframe confirmed in snapshot).
- Two-column layout (cards left, map right) is sensible.

**What's broken:**
- The page is extremely sparse — the contact cards and map take up about 60% of the viewport height, then there's a large empty dark void before the footer. The page looks unfinished.
- No business hours listed anywhere. This is the contact page — it's the most common question after "where are you?" and it's completely absent.
- "Для уточнения часов работы — свяжитесь с нами напрямую" (for hours, contact us directly) is shown in a grey box below the contact cards. This is a bad user experience — it's the digital equivalent of "call us to find out if we're open." Hours should be listed.
- The map embed shows the correct pin but it's not fullbleed — it has the same card-style border as the contact rows on the left, making it feel like just another info card rather than a proper location visual.
- No directions or parking notes. For an event venue where guests arrive in groups from unfamiliar areas, this matters.
- Facebook is listed as a contact channel but there's no Instagram. For an Israeli event venue targeting Russian-speaking community, Instagram is likely more relevant than Facebook.

---

## Desktop vs Mobile Comparison

| Element | Desktop | Mobile |
|---|---|---|
| Navigation | Full horizontal nav, clean | Hamburger menu — functional |
| Hero | Text visible, two CTAs clear | Hero text crowded, both CTAs stack vertically but are legible |
| About stats | Three stat boxes side by side | Stack to single column — fine |
| Gallery grid | Visible misalignment/empty block | Grid columns too narrow, photos very small |
| Reviews badges | Three badges in one row | Stack and become very compressed |
| Reviews carousel | Cards are tight but readable | Cards cut off at edges, text very small |
| Events section | Two-column layout cramped | Single column, readable, long scroll |
| WhyUs section | Works | Works |
| Contact section | Works | Map thumbnail nearly invisible |
| Floating WhatsApp button | Overlaps content at certain scrollpoints | Overlaps content more aggressively |

**Key mobile-specific failures:**
- The gallery grid preview on homepage shows photos that are ~100px wide on 375px viewport. Completely un-usable as gallery preview.
- The review platform badges (Google, RG, Facebook) on mobile collapse into a very compressed row where the star ratings are barely readable.
- The events section on mobile has a very long scroll through the included/addon lists before reaching the CTAs. The primary CTA (WhatsApp) is buried more than 3 full screens into the scroll on mobile.
- Language switcher (RU/HE/EN) appears in the top-right of mobile nav next to the hamburger — these compete for the same space and the language buttons are very small tap targets.

---

## Conversion Killers

1. **Floating WhatsApp button** renders on top of content mid-page. On mobile, it covers CTA text. Needs to be bottom-fixed or removed in favor of inline CTAs (which already exist).

2. **No social proof beyond text ratings.** There are no photos of happy events, no video testimonials, no Instagram feed embed. For a venue costing ₪250–400/person, people expect to see evidence of other events.

3. **Gallery content is wrong.** Every photo is of the same event with party balloons. Someone deciding between venues will not be convinced by this. They need to see: the hall dressed for a wedding, the table settings, the food presentation, the stage during a live performance.

4. **Broken/empty image block on homepage gallery grid.** The black rectangle in the 6-photo preview looks like a broken image or failed load. Immediate trust damage.

5. **Image captions in English on Russian-language site.** "Main hall", "Bar area" etc. on the gallery page — looks like the site wasn't finished.

6. **No hours of operation.** Anywhere on the site. This is a basic expectation and its absence creates friction.

7. **Green WhatsApp form button clashes with site palette.** The entire site is black/dark + gold. A bright Telegram-green submit button looks like a UI component from a different site was dropped in.

8. **Review carousel duplicates reviews 3x.** If a user notices the same review appearing again, they assume the review count is fake-inflated. The reviews are real but the looping implementation undermines them.

9. **Pricing is mentioned twice without clear connection.** The homepage Events section says "от ₪250" and the /events pricing cards show ₪250/320/400. There's no navigation-level pathway from "see prices" to "see what's included" to "book." The funnel is scattered.

---

## Changes to Make It Feel Premium and Modern

### Visual Language
- **Shift from builder-template dark to editorial dark.** Current: dark background, gold text, generic sans-serif. Target: use a high-end serif for headings (something like Playfair Display, Cormorant Garamond, or EB Garamond), keep the dark base but add texture (subtle noise, deep gradient), and treat gold as a true accent not a primary color. Reference: Nobu uses near-black with warm amber accents and Helvetica Neue Condensed. Cipriani uses cream/warm white with gold and serif type.
- **Establish a consistent type scale.** Currently there are 4–5 text sizes all in similar weights. A clear hierarchy: hero headline (very large, serif), section heading (large), subheading (medium, light weight), body, caption. None of this exists clearly right now.
- **Replace emoji icons with proper SVG icons.** The 💍🎂🏢🥂 emojis in the events section look like WhatsApp stickers. Custom thin-line icons or gold-tinted pictograms would communicate luxury.
- **Introduce a "gold line" design system.** A consistent thin horizontal or vertical gold line separator between sections would create visual rhythm and a premium editorial feel.

### Hero
- Replace H1 "Panorama Style" with a headline that sells: "Ваш банкетный зал в Хайфе" or an evocative line like "До 350 гостей. Живая музыка. Незабываемо."
- Use the brand name as the logo only, not as a headline.
- Add a cinematic video loop as background (30 seconds of the hall, the food, guests dancing, the stage). This alone upgrades the page tier significantly.
- One primary CTA, not two. "Узнать стоимость →" takes people to the events page pricing. Contact is secondary.

### Gallery
- **Reshoot priority.** This is the single biggest investment needed. Need: 20+ high-quality photos spanning empty hall (different setups), food/table styling, bar area, at least two different event types (wedding vs. corporate vs. birthday), and exterior approach.
- Until reshoots happen: remove the gallery preview from the homepage entirely or replace it with 2–3 of the best available photos in a full-bleed parallax section rather than a grid.
- Gallery page: implement actual lightbox (photo viewer on click, keyboard navigation).
- Gallery image captions must be in the active language, not English placeholders.

### Reviews
- Show **3 reviews max** above the fold in a designed card layout — large pull-quote style, platform icon, star rating. Not an auto-scrolling carousel.
- Filter reviews by active language (RU reviews shown to RU users, HE to HE users).
- Add real reviewer context: date, platform source badge, and if possible first name + last initial.
- Kill the looping triplication.

### Events / Pricing
- Pricing cards: make the VIP card visually dominant (border glow, slightly larger card, different background). Currently all three look like equals.
- Add a CTA above the pricing section: "Не знаете, с чего начать? Напишите нам — подберём под ваш бюджет." This reduces the pressure of committing to a tier.
- Shabbat + bring your own alcohol + flexible capacity — these three differentiators need their own callout section with larger type. They are the reasons to choose Panorama Style over competitors and they're buried in lists.

### Contact Page
- Add hours of operation. Even "Режим работы уточняется — свяжитесь с нами" is better than nothing, but actual hours are much better.
- Make the map fullbleed (full right half of the viewport, no card border).
- Add a "How to get there" mini-section: bus lines, parking notes, landmark callout.
- Add Instagram link if account exists. Remove or de-emphasize Facebook — it's a less relevant social platform for this audience.

### Floating WhatsApp Button
- Remove the floating persistent WhatsApp button. It's already everywhere inline. The floating button is visual noise that signals "low-budget plugin" to design-aware visitors. Keep the inline WhatsApp CTAs — they work fine.

### Mobile Fixes (specific)
- Language switcher should move inside the hamburger menu, not compete for tap space at the top bar.
- Events section CTA (WhatsApp + Call) must appear much earlier in the mobile scroll — ideally within the first 2 screens of the page, not buried after the included/addon lists.
- Gallery preview on homepage: on mobile, replace the 6-photo grid with a single swipeable carousel (one photo at a time, full width).

---

## Priority Order

**Immediately (copy/content fixes, no design work):**
1. Fix gallery image captions — change from English placeholders to Russian text
2. Remove the empty/black block in the homepage gallery grid
3. Add business hours somewhere (contact page, footer)
4. Replace H1 "Panorama Style" in hero with a real value proposition headline
5. Filter review carousel by active language

**Short-term (design improvements, no new assets needed):**
6. Remove floating WhatsApp button — rely on inline CTAs
7. Increase visual differentiation between pricing tiers (VIP card should look premium)
8. Replace WhatsApp form submit button green with site palette color (gold/dark)
9. Strengthen hero CTA contrast (outline button is too low contrast on dark bg)
10. Rewrite "Разница в деталях" section header to something clearer
11. Move events CTAs higher in mobile scroll order

**Medium-term (requires new assets or dev work):**
12. Reshoot gallery — get proper venue/food/event photography
13. Implement lightbox on gallery page
14. Add serif type to headings (Cormorant or Playfair Display)
15. Add a fullbleed video or cinematic still to hero
16. Add a dedicated "Шаббат + свой алкоголь" callout block — these are key differentiators for the specific audience

---

## Screenshots Captured

- `/tmp/audit-homepage-desktop.png` — full homepage at 1440px
- `/tmp/audit-events-desktop.png` — /events full page at 1440px
- `/tmp/audit-gallery-desktop.png` — /gallery full page at 1440px
- `/tmp/audit-contact-desktop.png` — /contact full page at 1440px
- `/tmp/audit-homepage-mobile.png` — homepage at 375px
