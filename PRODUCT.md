# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The product is a native Android app (React + Capacitor; Spring Boot + MySQL backend). This repository is its promotional website: Express + EJS in `KukinWeb/`.

## Users

1. **Students living alone or away from home (foráneos), Mexico/LatAm.** Little time, money and kitchen experience; food spoils in the fridge. Want fast, cheap, no fuss.
2. **Mexican/Latin moms who run the household kitchen.** Want to use what is in the pantry, waste less, save at the supermarket, and get ideas for today. Many are not tech-savvy.

Their questions: "¿Qué hago de comer hoy?", "Se me echó a perder otra vez el jitomate", "Fui al súper y se me olvidó lo que necesitaba".

## Product Purpose

Kukin tells you what to cook with what you already have at home, warns you before food spoils, and builds the supermarket list with what is missing. The website presents the app and leads visitors to download it (once available) or get in touch.

## Positioning

Pantry → recipe → shopping list in one loop, in Mexican Spanish, with a home-style Mexican recipe book, expiry-first recipe suggestions, and a WhatsApp-shareable list.

## Capabilities and Constraints

Confirmed (version 1.4):
- Pantry: catalog of 200+ Spanish ingredients with emoji and colour; quantity, unit and expiry date (estimated if omitted); custom ingredients; sorted by what expires first with fresh / por caducar tags; adjust "¿Cuánto te queda?" or "Se acabó".
- Recipes ranked by percentage of ingredients you already have; recipes using what is about to expire shown first. Filters: rápidas, tienes todo, baratas, sin horno, pocos ingredientes, caduca pronto, para tu objetivo. Approximate calories when data exists.
- Own Mexican recipe book, 14 dishes: huevo a la mexicana, frijoles de la olla, sopa de fideo, chilaquiles rojos, arroz rojo, quesadillas, tacos dorados de papa, molletes, calabacitas a la mexicana, tinga de pollo, enfrijoladas, picadillo, avena con plátano y canela, sincronizadas.
- Cooking mode: have/missing ingredients ("Tienes poco"), portion scaling, large one-by-one steps, read-aloud (Leer/Detener), built-in timer with background notification, screen stays on, "Ya la cociné" deducts from pantry.
- Shopping list: "Agregar lo que falta a mi lista", grouped by recipe, manual items, check-off progress ("3 de 8 en el carrito"), share via WhatsApp, "Guardar lo comprado en alacena".
- Expiry notifications 2 days before; tapping opens recipes using that ingredient.
- Eating goal: bajar de peso, ganar músculo, cuidar el corazón, comer equilibrado/descanso.
- Works offline showing the last saved data.
- Email + password account, passwords stored encrypted.

Constraints:
- Not on Google Play or App Store; no iOS version. Download is a placeholder ("Próximamente en Google Play") or an APK link the author will add (`APK_DOWNLOAD_URL`).
- **Price: undecided. Do not mention free or paid anywhere.**
- Does not exist, never claim: fridge camera/AI scanner, Premium plan, weekly meal plans, diet filters (vegan/keto/gluten-free), English ingredient names.
- Calories are approximate; never promise exact nutrition values.
- School project (Desarrollo de aplicaciones móviles / diseño de páginas web). The site keeps five routes: Inicio, Características, Cómo funciona, Descargar, Contacto.

## Brand Commitments

- Name **Kukin** (pronounced "cookin'"), by **NaatLabs / Naat Labs**, app id `com.naatlabs.kukin`. "Naat" means intelligence or understanding in Maya. Made in Zapopan, Jalisco. Mission: facilitate cooking life with intuitive tools that make the most of your ingredients, reduce waste and promote creativity. Vision: be the main household-inventory and cooking-assistance tool in Latin America.
- Author credit in the footer: Jesús Mendoza Gómez.
- Voice: tú, warm, family-like, never corporate. Natural Mexican Spanish (alacena, súper, jitomate, refri). Short clear sentences, emojis in moderation (🍲 🛒 🥑 🌮 ⏰). App phrases: "Tu lista está vacía", "¡Compraste todo!", "¿Cuánto te queda?", "Ya la cociné", "Agregar lo que falta a mi lista", "Sin conexión: te mostramos lo último que guardaste".
- Visual identity is binding (user-confirmed): the website must look like the app. Albahaca green `#2D7A47` (dark `#236239`), navy `#0B1E36`, cream `#FDFBF7`, sand `#F7F3EE`, secondary text `#5B6577`, lines `#ECE7DF`, fresh `#E8F5E9`/`#2E7D32`, expiring `#FFEBEE`/`#C62828`, amber `#F59E0B`, purple `#EDE7F6`/`#4527A0`. Titles in Fraunces 900, −0.03em; body in system-ui/Roboto. White, very rounded cards (20–32px), soft shadows on cream, pill buttons, big ingredient emojis, large text, lots of air.
- Mexican accents (owner's decision, 2026-11-26): the site may now differ from the app. Its goal is to read as young, trustworthy, technological and Mexican. Green and navy remain the trust base. Added accents: rosa mexicano `#E4007C` (headline "hoy?", second marquee, reading-progress bar, "¡Listo!", confetti, follower cursor on cards), azul talavera `#1E4FA3` (tile texture on navy fields, the band on the pot) and barro `#C65D35` (clay pot in the loading screen). Papel picado garlands hang in the green fields. Apply the same accents to the app if the two should match again.
- The user asked for rich, eye-catching motion in the spirit of 20.kategora.com, portresearch.co and partakefoods.com, and to keep the scrolling ingredient/dish marquees.

## Evidence on Hand

- No real screenshots yet (the author can provide alacena, recetas, modo cocina and lista del súper). Until then, phone frames show illustrative recreations of real features only, replaceable with captures.
- App icon and Fraunces font exist in the Android project, not in this repo yet.
- No downloads, users, ratings, reviews or testimonials exist. Never fabricate them.

## Product Principles

1. Truth over hype: only show what version 1.4 actually does.
2. Answer "¿qué hago de comer hoy?" first; waste and savings follow.
3. Speak like family, in Mexican Spanish, to people who are not tech-savvy.
4. The site should feel like holding the app.

## Accessibility & Inclusion

Large text, strong contrast, buttons at least 44px, clear labels; many visitors are not tech-savvy. Motion is ON by default for every visitor, including those whose OS asks for reduced motion (owner's explicit decision, 2026-11-26). The footer "Pausar animaciones" toggle is the way to turn it off and is remembered per visitor; it must always stay present and working.
