---
name: Kukin
description: "¿Qué hago de comer hoy? The promotional site that looks and moves like the Kukin app."
colors:
  verde: "#2D7A47"
  verde-osc: "#236239"
  verde-claro: "#E6F2EA"
  marino: "#0B1E36"
  crema: "#FDFBF7"
  arena: "#F7F3EE"
  papel: "#FFFFFF"
  texto2: "#5B6577"
  linea: "#ECE7DF"
  fresco-bg: "#E8F5E9"
  fresco: "#2E7D32"
  alerta-bg: "#FFEBEE"
  alerta: "#C62828"
  ambar: "#F59E0B"
  ambar-bg: "#FFF4DC"
  morado-bg: "#EDE7F6"
  morado: "#4527A0"
  menta: "#8FD3A7"
  niebla: "#DCE3EC"
  grano: "#CFC7BB"
typography:
  display:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(3.2rem, 7.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'SOFT' 60"
  headline:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'SOFT' 60"
  title:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.4rem, 2vw, 1.75rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'SOFT' 60"
  subhead:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.45rem, 2.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    fontVariation: "'SOFT' 100"
  lead:
    fontFamily: "system-ui, -apple-system, Roboto, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "system-ui, -apple-system, Roboto, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, Roboto, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: "14px"
  md: "22px"
  lg: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  container: "1240px"
  xs: "0.5rem"
  sm: "0.8rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
  section: "clamp(5rem, 10vw, 8.5rem)"
  nav-height: "76px"
components:
  button-primary:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.papel}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.verde-osc}"
    textColor: "{colors.papel}"
  button-primary-lg:
    padding: "1rem 1.9rem"
    height: "58px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.marino}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.crema}"
  button-light:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.marino}"
    rounded: "{rounded.pill}"
  button-light-hover:
    backgroundColor: "{colors.papel}"
  button-ghost-light:
    backgroundColor: "transparent"
    textColor: "{colors.papel}"
    rounded: "{rounded.pill}"
  chip:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.marino}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem"
  chip-verde:
    backgroundColor: "{colors.fresco-bg}"
    textColor: "{colors.fresco}"
    rounded: "{rounded.pill}"
  tag-fresco:
    backgroundColor: "{colors.fresco-bg}"
    textColor: "{colors.fresco}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.65em"
  tag-alerta:
    backgroundColor: "{colors.alerta-bg}"
    textColor: "{colors.alerta}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.65em"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.texto2}"
    rounded: "{rounded.pill}"
    padding: "0 0.9rem"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.marino}"
  nav-link-active:
    backgroundColor: "{colors.fresco-bg}"
    textColor: "{colors.marino}"
  hcard:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.marino}"
    rounded: "{rounded.lg}"
    padding: "2rem"
    width: "clamp(280px, 30vw, 380px)"
    height: "420px"
  hcard-fresco:
    backgroundColor: "{colors.fresco-bg}"
  hcard-morado:
    backgroundColor: "{colors.morado-bg}"
  hcard-alerta:
    backgroundColor: "{colors.alerta-bg}"
  hcard-ambar:
    backgroundColor: "{colors.ambar-bg}"
  hcard-verde:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.papel}"
  hcard-marino:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.papel}"
  tabs:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.pill}"
    padding: "0.35rem"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.texto2}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "52px"
  tab-selected:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.papel}"
  faq-item:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.marino}"
    rounded: "{rounded.md}"
    padding: "1.25rem 1.5rem"
    height: "64px"
  marquee:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.crema}"
    padding: "1.05rem 0"
  marquee-rev:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.papel}"
  green-field:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.papel}"
    rounded: "{rounded.lg}"
    padding: "clamp(5rem, 10vw, 8rem) 0"
  phone-frame:
    backgroundColor: "{colors.marino}"
    width: "300px"
  phone-screen:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.marino}"
  app-row:
    backgroundColor: "{colors.papel}"
    rounded: "1em"
    padding: "0.5em 0.6em"
  app-suggest:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.papel}"
    rounded: "1.2em"
    padding: "0.9em 1em"
  input-field:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.marino}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.1rem"
    height: "54px"
  input-field-focus:
    backgroundColor: "{colors.papel}"
  footer:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.niebla}"
    padding: "clamp(4rem, 8vw, 6rem) 0 2rem"
  motion-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.papel}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "44px"
---

<!-- Provenance: brief-pinned. This world was taken from the project brief and the app's binding identity (PRODUCT.md, direction contract "seed: none (pinned)"). It was not seeded by `impeccable world` and no catalog world was rolled, so there is no `world:` key here and no `seededFrom` in the sidecar. Tokens below were extracted from the shipped build (KukinWeb/src/public/css/styles.css, views, main.js). -->

# Design System: Kukin

## Overview

**Creative North Star: "La alacena en la mano"** (the pantry in your hand)

The site is the app, enlarged. Every surface is borrowed from the Kukin Android app: a warm cream ground (crema), sand bands (arena), white rounded cards with soft navy-tinted drops, pill buttons, the fresh / por caducar status tags, and big ingredient emoji used as stickers. The page does not describe the app beside a screenshot; it plays the app's own loop (alacena, receta, cocina, súper) inside a recreated phone frame that stays pinned while the visitor scrolls. Headlines are very heavy, soft Fraunces at very large sizes; everything you read or press is the plain system stack, large and high-contrast for visitors who are not tech-savvy.

Density is low and generous: one idea per band, sections of 5–8.5rem vertical padding, and large text throughout (body at 1.125rem). Color arrives in whole fields rather than accents: a full albahaca-green field for the recipe book and the closing download call, navy for the marquees and the footer. Motion is rich (Lenis smooth scroll, SplitText letters rising, scroll-scrubbed words, clip-path wipes, magnetic pills, parallax stickers, velocity-linked marquees) and on by default for every visitor (owner's decision), yet always optional: everything renders complete without JavaScript or after the visitor presses "Pausar animaciones".

Provenance: this world is brief-pinned. It came from the user's binding instruction that the website must look like the app, recorded in PRODUCT.md and the direction contract. It was not seeded, and no catalog world was rolled.

**Key Characteristics:**
- Cream ground, sand bands, white cards; green and navy arrive as whole fields, never as thin accents.
- Fraunces 900 with the SOFT axis for every heading; system sans for all reading and interaction.
- Pills for everything pressable, 22–32px pebbles for every container, nothing square.
- Shadows are long, soft and tinted with navy; colored buttons glow in their own hue.
- The phone frame with recreated app screens is the product proof, always captioned "Ilustración de la app".
- Expressive motion, one easing curve (expo-out), on by default and fully gated by the pause toggle.

## Colors

A warm, food-friendly palette lifted directly from the app: herb green and deep navy on cream, with semantic pastel pairs for pantry states.

### Primary
- **Albahaca** (#2D7A47, `verde`): the brand green. Primary pill buttons, the hero headline's italic "hoy?", story step numbers, progress bar, focus ring, selection, scrollbar thumb, and the whole green fields (recipe book, closing download band, reversed marquee).
- **Albahaca Honda** (#236239, `verde-osc`): the hover fill that rises inside primary buttons. Never used as a surface.
- **Brote** (#E6F2EA, `verde-claro`): secondary text on green fields (field paragraphs, suggestion captions inside the phone).

### Secondary
- **Marino de Noche** (#0B1E36, `marino`): body text color, the phone frame, the ingredient marquee, the footer, the Naat Labs card, selected tab ink, secondary button outline and fill, the "on" state of app chips.
- **Menta** (#8FD3A7, `menta`): the only accent allowed on navy: footer column labels, Naat Labs definition terms, and the outlined giant "Kukin" footer word.
- **Niebla** (#DCE3EC, `niebla`): body text on navy (footer, Naat Labs card).

### Tertiary (semantic pairs, borrowed from the app's pantry)
- **Fresco** (#2E7D32 on #E8F5E9, `fresco` / `fresco-bg`): "Fresco" tags, check ticks, success alerts, the active nav link background, the hero blob, the fresco feature card.
- **Por Caducar** (#C62828 on #FFEBEE, `alerta` / `alerta-bg`): "Por caducar" and "Caduca en 2 días" tags, expiry notification icons, form errors, the second pain answer.
- **Ámbar** (#F59E0B, `ambar`; background #FFF4DC, `ambar-bg`): marquee dot separators, progress fills on green, the cooking timer pill, offline banner, alternating dish pills.
- **Morado** (#4527A0 on #EDE7F6, `morado` / `morado-bg`): one feature card and one feature visual (the eating-goal feature). Rare by design.

### Neutral
- **Crema** (#FDFBF7, `crema`): the page ground, the phone screen, input fields at rest, light buttons on green.
- **Arena** (#F7F3EE, `arena`): alternating section bands (story, features track, recipe book, audiences), chip and icon-well backgrounds, nav hover.
- **Papel** (#FFFFFF, `papel`): every card surface (hcards, FAQ items, tab panel, timeline bodies, download and form cards, app list rows, stickers).
- **Tinta Suave** (#5B6577, `texto2`): secondary text, leads, captions, inactive nav and tab labels.
- **Línea** (#ECE7DF, `linea`): hairline borders on chips, FAQ items, fields at rest, dividers, the timeline rail.
- **Grano** (#CFC7BB, `grano`): the unlit state of scroll-scrubbed pain sentences only; words turn marino as the scroll lights them. Without motion, all words render marino.

### Named Rules
**The App-Is-The-Brand Rule.** The palette is the app's palette and is binding. No new hue enters the site; new surfaces combine the tokens above.

**The Whole-Field Rule.** Green and navy appear as full-bleed or near-full-bleed fields (rounded 32px, inset 0.5–1.25rem from the viewport) for the big moments, or as solid pill fills. They are never thin borders, underlines or gradient washes.

**The Two-Tag Truth Rule.** Fresco green and Por Caducar red are pantry semantics. Use them only for freshness, success and expiry or error states, never as decoration.

## Typography

**Display Font:** Fraunces (with 'Iowan Old Style', Georgia, serif), variable, loaded with opsz, wght 600–900 and SOFT 0–100.
**Body Font:** system-ui (with -apple-system, Roboto, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif).

**Character:** A chunky, soft-cornered serif shouting kitchen questions at very large sizes, over a plain, familiar system sans that reads like the phone the visitor already owns.

### Hierarchy
- **Display** (900, clamp(3.2rem, 7.6vw, 6rem), 0.94, -0.035em): the hero H1 only; its letters rise on load. Closing H2 goes even larger (clamp(2.8rem, 8vw, 7rem), 0.95) and pain sentences sit at clamp(2.3rem, 5.6vw, 5rem).
- **Headline** (900, clamp(2.2rem, 4.6vw, 4rem), 1, -0.03em): section H2s; inner-page H1s use clamp(2.8rem, 6.4vw, 5.6rem).
- **Title** (900, clamp(1.4rem, 2vw, 1.75rem), 1.1, -0.02em): card and step H3s; feature cards scale to clamp(1.7rem, 2.4vw, 2.1rem).
- **Subhead** (Fraunces 700, SOFT 100, clamp(1.45rem, 2.4vw, 2rem), 1.15): the single answer line under the hero H1.
- **Lead** (400, clamp(1.15rem, 1.4vw, 1.3rem), 1.55, texto2): section intros, max 52ch in heroes.
- **Body** (400, 1.125rem, 1.6; 1.08rem under 600px): all running text, paragraphs capped at 68ch.
- **Label** (600–700, 0.92–1.05rem): chips, nav links, buttons, tabs, footer column labels. Sentence case, no tracking, no uppercase.

Fraunces also carries display-like data: big numbers in feature demos (900, 3.4rem, -0.04em), dish pills (800, SOFT 100), marquee text (800, clamp(1.25rem, 2vw, 1.6rem)), the logo wordmark (900, SOFT 100, 1.75rem) and the outlined footer word (900, clamp(6rem, 24vw, 21rem), line-height 0.8, 1.5px menta stroke).

### Named Rules
**The Soft Heavy Rule.** Fraunces is set at 800–900 (700 only for the hero subhead), with negative tracking between -0.02em and -0.05em. Headings use SOFT 60; warm accents (logo, hero italic, dish pills, footer word, hero subhead) use SOFT 100.

**The Say-It-Big, Press-It-Plain Rule.** Fraunces is for things the page says: headings, big numbers, dish names, marquees. Everything the visitor reads at length or presses (body, buttons, tabs, nav, fields, labels) is the system stack.

## Layout

A single 1240px container with a fluid gutter of clamp(1.25rem, 4vw, 2.5rem). Sections breathe at clamp(5rem, 10vw, 8.5rem) vertical padding; the pain section opens wider at clamp(6rem, 12vw, 10rem). Bands alternate crema and arena; green fields and the closing band are inset from the viewport edge by clamp(0.5rem, 1.5vw, 1.25rem) so their 32px corners stay visible.

Two-column grids are asymmetric (hero 1.12fr / 0.88fr, FAQ 0.8fr / 1.2fr, download 1.1fr / 0.9fr) with column gaps of clamp(2rem, 6vw, 6rem). Internal gaps step through 0.5rem, 0.8rem, 1.25rem, 2rem and 3rem.

Two scroll structures define the home page. The story track is `n × 85vh + 20vh` tall with a sticky stage under the navbar; steps stack in one grid cell and crossfade, while the phone wipes between screens. The features track pins at 921px and wider and translates horizontally with the scroll; below that it becomes a native scroll-snap row.

Responsive behavior: at 920px the navbar collapses into a clip-path drop menu (nav height 68px), all two-column grids stack, and the story centers with the phone above the text (phone width min(250px, 30svh)). At 600px CTA pills go full width, tabs stretch to equal halves, hero stickers shrink, and page-head stickers hide. At 1080px floating hero cards tuck closer to the phone.

## Elevation & Depth

A lifted system on a flat cream ground. Depth comes from long, soft, navy-tinted drop shadows with negative spread, so cards seem to float a few centimeters above paper without a visible edge. Status and hover increase lift; open FAQ items gain a shadow and drop their border. Colored solids (primary pill, pain answers) cast a glow in their own hue instead of gray.

### Shadow Vocabulary
- **Sombra** (`box-shadow: 0 2px 6px rgba(11,30,54,.05), 0 22px 44px -22px rgba(11,30,54,.28)`): resting cards, tabs, FAQ open, stickers, timeline nodes and bodies, form and download cards.
- **Sombra Alta** (`box-shadow: 0 4px 10px rgba(11,30,54,.06), 0 40px 80px -30px rgba(11,30,54,.42)`): phone frame, floating hero cards, Naat Labs card, hovered hcards, mini app cards in feature visuals.
- **Brillo Verde** (`box-shadow: 0 14px 28px -14px rgba(45,122,71,.75)`): primary pill buttons.
- **App Row** (`box-shadow: 0 1px 2px rgba(11,30,54,.06), 0 6px 14px -10px rgba(11,30,54,.3)`): list rows inside phone screens.

### Named Rules
**The Navy-Tint Rule.** Every neutral shadow is tinted with marino (rgb 11, 30, 54) and uses a negative spread. Gray or black hard offsets do not exist in this world.

## Shapes

Everything is rounded, in two families. Pressable and status elements are full pills (999px): buttons, chips, tags, nav links, tabs and their sliding ink, store and footer pills, the motion toggle, the search field inside the phone. Containers are pebbles: 14px for fields, alerts and small wells, 22px for FAQ items and timeline bodies, 32px for hcards, tab panels, feature visuals, green fields and the story band's top corners. Inside the phone, radii are set in em so the whole screen scales with the frame width.

Circles hold numbers and emoji: story numbers (58–72px), timeline dots (74px with a 4px crema ring), stickers (1.6em white discs). The hero blob is the one organic shape, a morphing border-radius on fresco-bg.

### Named Rules
**The Pill-Or-Pebble Rule.** If you can press it, it is a pill. If it holds content, it is a 14/22/32px pebble. Nothing ships with square corners.

## Components

### Buttons
Tactile pills with a fill that rises from below.
- **Shape:** full pill (999px), 2px border, min height 48px (58px large, 44px small).
- **Primary:** albahaca fill, white bold 1.05rem label, green glow shadow, padding 0.85rem 1.6rem.
- **Hover:** a `::after` layer in albahaca honda slides from translateY(101%) to 0 over 0.45s expo-out. On fine pointers, `.magnet` buttons follow the cursor (25% x, 35% y) and spring back over 0.6s. Active removes the shadow.
- **Secondary:** transparent with a 2px marino border and marino label; the rising fill is marino and the label turns crema.
- **Light (on green):** crema fill, marino label, white rising fill, dark soft shadow. **Ghost light (on green):** transparent with a 70% white border, white label, 14% white fill.
- **Arrow link:** albahaca bold text with an arrow icon that shifts 5px right on hover.

### Chips and Status Tags
- **Chip:** arena background, 1px línea border, 0.92rem semibold label, pill. **Chip verde** swaps to fresco-bg/fresco with no border (used for the version chip).
- **Fresco / Por caducar tags:** small bold pills inside app rows and feature demos: fresco-bg with fresco text, or alerta-bg with alerta text ("Por caducar", "Caduca en 2 días", "Tienes poco: crema").
- **App filter chips:** white with línea border; the "on" chip is marino with white text.

### Cards / Containers (hcards)
- **Corner Style:** 32px.
- **Background:** white by default; variants fresco-bg, morado-bg, alerta-bg, ambar-bg, albahaca (white text, brote secondary) and marino (white text, light slate secondary).
- **Shadow Strategy:** Sombra at rest; Sombra Alta on hover with translateY(-8px) rotate(-1deg).
- **Internal Padding:** 2rem, min height 420px (380px on phones), width clamp(280px, 30vw, 380px).
- **Signature details:** a big emoji (4.2rem) that tilts and scales on hover, a 48px round marino arrow link in the top-right corner whose hit area covers the whole card and rotates -45deg on hover, and a live mini demo (rows, big number with progress bar, timer pills, notification, goal chips, offline banner) pinned to the bottom.

### Inputs / Fields
- **Style:** crema fill, 2px línea border, 14px radius, 1.1rem text, min height 54px; textarea 150px.
- **Focus:** border turns albahaca, fill turns white, plus a 4px albahaca ring at 16% opacity.
- **Error:** alerta border, faint red fill, semibold alerta message under the field.

### Navigation
- **Style:** sticky 76px bar in 86% crema with saturate(1.4) blur(14px). Gains a línea bottom border and a soft shadow after 10px of scroll. A 3px albahaca progress bar along its bottom edge scales with page scroll.
- **Links:** semibold texto2 pills, 44px tall; hover arena + marino; current page fresco-bg + marino. The last item is a small primary pill.
- **Logo:** app icon plus Fraunces 900 SOFT 100 wordmark; the icon rotates -12deg and scales on hover.
- **Mobile (≤920px):** 48px round outlined toggle that morphs to an X; the menu drops with a clip-path reveal and closes on Escape or link tap.

### Phone Frame and App Screens (signature)
A recreated Android phone that carries the product proof.
- **Frame:** marino body, aspect 9 / 19.2, width set by `--w` (300px hero and download, 320px story, 250px on phones). Radius and padding derive from the width (16% and 3.5%), with a pill notch and Sombra Alta plus a faint inner highlight.
- **Screen:** crema, all inner sizes in em from a font size of 4.3% of the frame width, so screens scale as one unit. Status row "9:41".
- **Screen parts:** greeting and Fraunces screen title; white pill search; white pantry rows with a tinted emoji well, name, quantity and a fresco or por caducar tag; an albahaca suggestion card with an amber progress bar ("Tienes el 83% de los ingredientes"); recipe cards with match bars; a cooking screen with portion stepper, step card, marino "Leer" pill and amber timer pill (live countdown when motion is on); a shopping list with check boxes and a WhatsApp-green share pill.
- **Behavior:** in the story, screens stack and the active one wipes up with clip-path inset over 0.8s; rows and bars then stagger in. The hero phone tilts in 3D toward the pointer and is surrounded by parallax emoji stickers and two floating notification cards.
- **Caption:** always followed by "Ilustración de la app" in texto2.

### Tabs (Soy estudiante / Soy mamá)
A white pill track with Sombra and 0.35rem padding. Tabs are 52px transparent pills with texto2 labels; a marino ink pill slides and resizes under the selected tab over 0.55s expo-out and the label turns white. Arrow, Home and End keys move selection. The panel is a 32px white card in two columns with fresco check ticks that rise in sequence when a tab is selected.

### FAQ
Native `details` items: white, 22px radius, 1px línea border (darker on hover), 64px summary in bold 1.15rem with a 36px round arena plus icon. When open, the item gains Sombra, loses its border, and the icon rotates 45deg on an albahaca disc. With motion on, the answer height animates open (480ms) and closed (320ms).

### Marquee
Full-width bands of Fraunces 800 ingredient and dish names separated by small round dots. The default band is marino with crema text and amber dots; the reversed band is albahaca with white text and crema dots, rotated -1.2deg and slightly scaled so it crosses the page. Tracks advance at 70px/s and speed up with scroll velocity (capped), pause on hover, and stop entirely without motion. They are `aria-hidden`.

### Green Fields
The recipe book and the closing download section are albahaca fields with 32px corners inset from the viewport. On scroll they expand from `inset(6% 5% round 48px)` to full. The recipe field holds crema dish pills (Fraunces 800, emoji in an arena disc, every third pill ambar-bg, slight alternating rotations) that drop in like stickers. The closing field carries the largest heading, brote text, light and ghost-light pills, and emoji that drift upward.

### Footer
Marino, niebla text, generous top padding. A three-column grid (brand, Explora, Ayuda) with menta body-font column labels, white 44px link rows underlined in menta on hover, and a pill "Muy pronto en Google Play". Below sits a giant outlined "Kukin" in Fraunces 900 with a menta stroke whose letters rise with the scroll, then a bottom row with the credit line and the **Pausar animaciones** toggle (44px outlined white pill, `aria-pressed`, label switches to "Activar animaciones").

### Motion Grammar
- **Gate:** `early.js` runs in `<head>` and sets `html.js`, then `html.no-motion` when "kukin-sin-movimiento" is stored as `1`, otherwise `html.motion`. Motion is on by default even when the OS requests reduced motion (owner's decision, recorded in PRODUCT.md); the footer toggle is the off switch. All animation CSS is scoped to `html.motion` / `html.js.motion`, and GSAP, Lenis and SplitText only start when `motion` is present.
- **Without motion:** `html.no-motion *` kills every CSS animation, reveals render visible, scrubbed words render marino, the timeline line is drawn full, stickers stop, marquees stand still, and the timer does not tick. Without JS, the story shows only its first screen statically and marquees fall back to a CSS slide.
- **Pause toggle:** pressing it stores the choice, swaps `motion` for `no-motion`, destroys Lenis and reveals everything at once. Re-enabling reloads the page to remount animations.
- **Safety net:** hero pieces hidden for the entrance become visible after 2.5s even if JS fails.
- **Vocabulary:** one curve, expo-out (`cubic-bezier(.16,1,.3,1)` in CSS, `expo.out` in GSAP); `back.out(2)` only for things that pop (stickers, pain answers, dish pills, hcard emoji). Lenis smooth scroll (lerp 0.11). SplitText letters rise 115% with a 6deg tilt over 1.15s; section lines rise 110% over 1.2s on entry. Reveals fade up 36px from a 6px blur over 0.9–1.1s, staggered 80ms; feature visuals open with an inset clip-path wipe. Scroll-scrubbed: pain words lighting, hero parallax, story phone rise, green fields expanding, the horizontal features track, feature visual parallax, and the footer word.
- **Loading screen = the cooking moment (once per session, motion only):** a server-rendered green field (`partials/loader.ejs`, shown by `html.cargando` set in early.js, so nothing flashes first) holds the SVG pot boiling in pure CSS (rattling lid, flames, bubbles, steam) ringed by the six ingredient stickers, "Kukin", and a "Calentando la olla…" amber bar driven by real load stages (scripts 55%, fonts 80%, window load 100%; 1.7s minimum, 6s cap). At 100% the bar swaps for a navy "0/6 Desliza o toca la olla para cocinar" pill and the visitor cooks: wheel, touch drag, ArrowDown/Space/Enter or a tap on the pot advance a paused GSAP timeline (lid lifts, each sticker flies into the pot with splash, squash and a popping counter; lid bounces shut, rattle, steam); scrolling up takes ingredients back out; page scroll stays locked. At 6/6 the explosion plays: lid flies, confetti and the stickers burst outward, "¡Listo!" pops, then the panel lifts with an inset clip-path and the hero entrance (phone, stickers, float cards) starts. "Saltar" or Esc exits at any time. The home hero shows the phone directly; the pot never lives in the page. Safety: early.js removes the loader after 7s unless main.js has taken control (`html.carga-js`).
- **Signature moments added later:** cross-page view transitions (old page lifts away, new page rises through a rounded inset clip); a follower cursor dot on fine pointers that grows over controls and reads "Ver" over feature cards; and the interactive "Pruébalo aquí" demo on a whole marino field, where ingredient pills toggle and recipe rows recount their percentage, FLIP-reorder and fill a mini shopping list.

## Do's and Don'ts

### Do:
- **Do** set every heading in Fraunces 800–900 with negative tracking and the SOFT axis (60 for headings, 100 for warm accents).
- **Do** make every button, chip, tab and nav item a pill at least 44px tall, and every container a 14, 22 or 32px pebble.
- **Do** use whole albahaca or marino fields for big moments, with crema, arena and white carrying everything else.
- **Do** tint neutral shadows with marino and give colored pills a glow in their own hue.
- **Do** show product proof inside the phone frame with recreated app screens, captioned "Ilustración de la app".
- **Do** gate every new animation behind `html.motion`, use expo-out, and make the static state complete.

### Don't:
- **Don't** introduce a hue outside the app palette, or use gradients in place of solid fields.
- **Don't** use fresco green or por caducar red for anything other than freshness, success, expiry or error.
- **Don't** set buttons, nav, form fields or body copy in Fraunces.
- **Don't** use square corners, hard offset shadows, or gray/black drop shadows.
- **Don't** add motion that ignores the "Pausar animaciones" toggle or leaves content hidden when motion is off.

## Mexican Accents (added 2026-11-26)

The owner asked for the site to read as young, trustworthy, technological and Mexican, so the web palette now extends beyond the app. Albahaca and marino stay the trust base and keep every functional role: buttons, text, fields, and the fresco / por caducar tags.

- **Rosa mexicano `#E4007C`** (dark `#B8005F`, background `#FDE4F1`) is a youthful accent only. It is used for the italic "hoy?" in the hero H1, the second, tilted marquee band (white text), the reading-progress bar under the nav, the third pain answer pill, the "¡Listo!" pill, confetti, the follower cursor over feature cards, and the dot in the loader wordmark. Never use it for body text or primary buttons.
- **Azul talavera `#1E4FA3`** is used for a 72px talavera tile drawn as a light-blue line pattern (`--talavera-tile`, about 24% opacity) layered over marino on the demo field and the footer, and for the band of tiles on the pot.
- **Barro `#C65D35`** (lid `#B24E2B`, highlight `#E08A62`, dots `#9E4423`) is the clay pot of the loading screen, with a crema band of talavera diamonds.
- **Papel picado** (`partials/papel-picado.ejs`): 14 cut-paper flags hang from a curved string across the top of the green recetario field and the closing field. They cycle rosa, cempasúchil, crema, talavera and menta, are cut with a diamond, dots and a dash, and sway ±5deg in a staggered 3.2s loop that stops when motion is off.
