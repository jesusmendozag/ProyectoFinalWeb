---
version: 1
slug: "kukinweb-src-views-index-ejs"
primary_target: "KukinWeb/src/views/index.ejs"
related_targets: ["KukinWeb/src/views/caracteristicas.ejs","KukinWeb/src/views/como-funciona.ejs","KukinWeb/src/views/descargar.ejs","KukinWeb/src/views/contacto.ejs"]
---

# Surface: KukinWeb public site (Inicio + Características, Cómo funciona, Descargar, Contacto)

Mode: Persuade. Audience: foráneo students and Mexican moms. Action: understand Kukin in seconds, want it, go to Descargar (placeholder "Próximamente en Google Play") or Contacto. Proof: the app's real features shown working inside phone frames (illustrative recreations, labeled, to be replaced by real captures). Constraints: no price, no Premium/scanner/diet filters, no fabricated metrics or testimonials. Build path: code-led (no image generation available).

## Direction contract

THESIS: The page plays the app's own loop (alacena → receta → cocina → súper) on one phone that stays pinned while you scroll and changes screen with each step. It refuses the generic hero plus a grid of same-size feature cards.

OWN-WORLD: Cream #FDFBF7 ground, sand #F7F3EE bands, whole albahaca green #2D7A47 fields for the big moments, navy #0B1E36 marquees and footer. Fraunces 900 at very large sizes, −0.03em. Rounded white cards (28px) with soft offset shadows, pill buttons, the fresh/por caducar chips, big ingredient emoji as floating stickers. Controls (arrows, check, play, download, voice, timer, WhatsApp) are authored SVG at a single stroke weight. Food and feature emoji are allowed, as the brief requires ("Emojis con moderación", "emojis grandes para los ingredientes").

STORY: First the three pains, spoken in the audience's own words. Then the 3-step loop on the pinned phone. Then the features on a sideways track, the Mexican recipe book, a "Soy estudiante / Soy mamá" switch, the FAQ, Naat Labs, and a green download close. The visitor ends at Descargar or Contacto.

FIRST VIEWPORT: Left 55%: H1 "¿Qué hago de comer hoy?" in Fraunces 900 at clamp(3rem, 7.5vw, 6rem), with letters rising on load. Below it the line "Kukin te dice, con lo que ya tienes.", then the primary pill "Próximamente en Google Play" and a secondary "Ver cómo funciona". Right: a 300px phone showing Alacena (jitomate por caducar, tortillas, frijoles, plus a chilaquiles suggestion), with emoji stickers in parallax around it. The navy ingredient marquee sits at the bottom edge.

FORM: Pinned scroll-story landing (scrollytelling with a sticky device), with a horizontal pinned feature track as the second moment. seed: none (pinned) — "La página debe verse como la app" + "Hero con mockup de celular → El problema (3 dolores) → Cómo funciona en 3 pasos → Funciones → Para estudiantes / Para mamás → Preguntas frecuentes → Descarga (próximamente)". User confirmed: "Sí, tal cual la app", plus "Agrega la mayor cantidad de animaciones… algo como 20.kategora.com, portresearch.co, partakefoods.com".

Signature interaction: the pinned phone changes screen with the scroll (clip-path wipe). Motion grammar: Lenis smooth scroll; SplitText letters rising with expo-out; the pain sentences light up word by word, scrubbed by the scroll; sections reveal through an inset clip-path wipe; magnetic pill buttons; parallax stickers; velocity-linked marquees. All of it is disabled under reduced motion or the "Pausar animaciones" toggle.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
