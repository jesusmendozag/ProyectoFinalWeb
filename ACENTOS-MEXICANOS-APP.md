# Kukin: acentos mexicanos para llevar a la app

> Pega este documento en el chat donde se construye la app de Kukin (React + Capacitor). Describe lo que se hizo en la página web para que se sintiera **juvenil, confiable, tecnológica y mexicana**, y cómo aplicarlo en la app sin romper su identidad.

---

## 1. La idea en una frase

La base de la marca **no cambia**: el verde albahaca y el azul marino siguen dando confianza y aire tecnológico. Encima se agregan **tres acentos mexicanos** en lugares puntuales:

- **rosa mexicano**, para lo juvenil;
- **azul talavera**, en patrones;
- **barro**, en ilustraciones.

Los acentos decoran y celebran; **nunca reemplazan colores funcionales**.

---

## 2. Paleta

### Base (ya existe en la app, no se toca)

| Uso | Color |
|---|---|
| Verde albahaca (botones principales) | `#2D7A47` (presionado `#236239`) |
| Azul marino (títulos, texto fuerte) | `#0B1E36` |
| Crema (fondo) | `#FDFBF7` |
| Arena (fondo alterno) | `#F7F3EE` |
| Texto secundario | `#5B6577` |
| Fresco | fondo `#E8F5E9`, texto `#2E7D32` |
| Por caducar / alerta | fondo `#FFEBEE`, texto `#C62828` |
| Ámbar / cempasúchil | `#F59E0B` |

### Acentos nuevos

| Token | Color | Para qué |
|---|---|---|
| `rosa` | `#E4007C` | Acento juvenil (ver reglas abajo) |
| `rosaOscuro` | `#B8005F` | Rosa presionado o sobre fondos claros pequeños |
| `rosaFondo` | `#FDE4F1` | Fondo suave para chips o tarjetas de celebración |
| `talavera` | `#1E4FA3` | Patrones de azulejo, detalles de ilustración |
| `barro` | `#C65D35` | Ilustraciones de olla o cazuela |
| `barroOscuro` | `#B24E2B` | Sombras y tapa de la olla |
| `barroClaro` | `#E08A62` | Brillos de la olla |

```css
:root {
  /* base */
  --verde: #2D7A47; --verde-osc: #236239; --marino: #0B1E36;
  --crema: #FDFBF7; --arena: #F7F3EE; --texto2: #5B6577;
  --fresco-bg: #E8F5E9; --fresco: #2E7D32;
  --alerta-bg: #FFEBEE; --alerta: #C62828; --ambar: #F59E0B;
  /* acentos mexicanos */
  --rosa: #E4007C; --rosa-osc: #B8005F; --rosa-bg: #FDE4F1;
  --talavera: #1E4FA3;
  --barro: #C65D35; --barro-osc: #B24E2B; --barro-claro: #E08A62;
}
```

```js
// theme.js
export const colores = {
  verde: '#2D7A47', verdeOscuro: '#236239', marino: '#0B1E36',
  crema: '#FDFBF7', arena: '#F7F3EE', texto2: '#5B6577',
  frescoFondo: '#E8F5E9', fresco: '#2E7D32',
  alertaFondo: '#FFEBEE', alerta: '#C62828', ambar: '#F59E0B',
  rosa: '#E4007C', rosaOscuro: '#B8005F', rosaFondo: '#FDE4F1',
  talavera: '#1E4FA3',
  barro: '#C65D35', barroOscuro: '#B24E2B', barroClaro: '#E08A62',
};
```

---

## 3. Reglas de uso (importante)

**Sí usar el rosa mexicano en:**
- una palabra destacada dentro de un título (en la web: el "*hoy?*" de "¿Qué hago de comer hoy?", en itálica);
- momentos de celebración: "¡Listo!", "¡Compraste todo!", "Ya la cociné", confeti;
- detalles pequeños como una barra de progreso, un punto decorativo o un indicador activo secundario;
- fondos de bandas decorativas con texto blanco en negrita y tamaño grande.

**Nunca usar el rosa mexicano en:**
- botones principales (siguen en verde);
- texto de párrafo o texto pequeño (no tiene suficiente contraste);
- en lugar del rojo de "por caducar": el rojo `#C62828` significa *alerta*, el rosa significa *fiesta*. No se deben confundir.

**Contraste comprobado:**
- Rosa `#E4007C` sobre crema: válido solo para texto **grande** (títulos de 24 px o más, o negritas de 19 px o más).
- Texto blanco sobre rosa: válido en negrita o tamaño grande.
- Para texto rosa pequeño sobre fondo claro, usar `#B8005F`.

**Talavera y barro:** solo en ilustraciones, patrones y fondos decorativos, nunca en texto.

---

## 4. Lo que se hizo en la web, elemento por elemento

| Elemento web | Qué se hizo | Cómo llevarlo a la app |
|---|---|---|
| Titular del inicio | "hoy?" en rosa mexicano, itálica, Fraunces 900 | Un título de bienvenida con una palabra en rosa, p. ej. "¿Qué cocinamos **hoy**?" |
| Pantalla de carga | Olla de **barro** con banda de **talavera**, lumbre ámbar y vapor | Splash screen o estado de carga con la olla (SVG en la sección 5.3) |
| Celebración "¡Listo!" | Píldora rosa con texto blanco, ligeramente inclinada (−4°), y confeti en rosa, ámbar, crema y talavera | Al tocar "Ya la cociné" o al ver "¡Compraste todo!" |
| Papel picado | Tira de 14 banderitas que se mecen, sobre fondos verdes | Encabezado del recetario mexicano, pantalla de "¡Compraste todo!" o la bienvenida (componente en la sección 5.1) |
| Talavera | Patrón de azulejo en líneas azul claro (aprox. 24 % de opacidad) sobre azul marino | Fondo de pantallas o tarjetas oscuras (sección 5.2) |
| Banda de platillos | Banda animada con fondo rosa y nombres de platillos en blanco | Opcional: un carrusel decorativo en el recetario |
| Barra de progreso | Barra fina en rosa | Indicador de pasos en Modo cocina ("Paso 3 de 6") |

**Lo que se dejó igual a propósito:** botones principales en verde, textos en azul marino, chips de fresco / por caducar y fondos crema. Eso mantiene la confianza y la facilidad de lectura, que importan mucho para las mamás que no son muy techies.

---

## 5. Componentes listos para usar (React)

### 5.1 Papel picado

```jsx
// PapelPicado.jsx — decorativo (aria-hidden). Va arriba de una sección con fondo verde.
const COLORES = ['#E4007C', '#F59E0B', '#FDFBF7', '#1E4FA3', '#8FD3A7'];

export default function PapelPicado({ banderas = 14, alto = 96 }) {
  const n = banderas;
  return (
    <div className="papel-picado" aria-hidden="true" style={{ height: alto }}>
      <svg viewBox={`0 0 ${n * 96} 96`} preserveAspectRatio="xMidYMin slice" width="100%" height="100%">
        <path d={`M0 8 Q${(n * 96) / 2} 22 ${n * 96} 8`} stroke="rgba(255,255,255,.55)" strokeWidth="2" fill="none" />
        {Array.from({ length: n }, (_, i) => {
          const x = 8 + i * 96;
          const t = (i - (n - 1) / 2) / ((n - 1) / 2);
          const y = 8 + Math.round(14 * (1 - t * t)); // sigue la curva del hilo
          return (
            <g key={i} className="pp-flag" style={{ '--i': i }}>
              <path
                fill={COLORES[i % COLORES.length]}
                fillRule="evenodd"
                d={`M${x} ${y}h80v54l-10 10-10-10-10 10-10-10-10 10-10-10-10 10-10-10Z
                    M${x + 40} ${y + 14}l8 10-8 10-8-10Z
                    M${x + 16} ${y + 12}a5 5 0 1 0 .01 0Z M${x + 64} ${y + 12}a5 5 0 1 0 .01 0Z
                    M${x + 16} ${y + 40}a4 4 0 1 0 .01 0Z M${x + 64} ${y + 40}a4 4 0 1 0 .01 0Z
                    M${x + 30} ${y + 46}h20v4h-20Z`}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
```

```css
.papel-picado { position: absolute; top: 0; left: 0; right: 0; pointer-events: none; }
.pp-flag {
  transform-box: fill-box; transform-origin: 50% 0;
  animation: pp-mece 3.2s ease-in-out infinite alternate;
  animation-delay: calc(var(--i) * -0.37s);
}
@keyframes pp-mece { from { transform: rotate(-5deg); } to { transform: rotate(5deg); } }
@media (prefers-reduced-motion: reduce) { .pp-flag { animation: none; } }
```

En el celular conviene usar menos banderas (8 a 10) para que no se vean diminutas.

### 5.2 Fondo de talavera

```css
/* Patrón de azulejo de 72 px, en líneas azul claro, para fondos azul marino */
.fondo-talavera {
  background:
    url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2772%27 height=%2772%27 viewBox=%270 0 72 72%27%3E%3Cg fill=%27none%27 stroke=%27%235B8BE0%27 stroke-width=%271.6%27 opacity=%27.24%27%3E%3Cpath d=%27M36 20c6 7 6 25 0 32c-6-7-6-25 0-32Z%27/%3E%3Cpath d=%27M20 36c7-6 25-6 32 0c-7 6-25 6-32 0Z%27/%3E%3Ccircle cx=%2736%27 cy=%2736%27 r=%274%27/%3E%3Cpath d=%27M0 12a12 12 0 0 0 12-12M60 0a12 12 0 0 0 12 12M72 60a12 12 0 0 0-12 12M12 72A12 12 0 0 0 0 60%27/%3E%3Cpath d=%27M36 0v6M36 66v6M0 36h6M66 36h6%27/%3E%3C/g%3E%3C/svg%3E") center / 72px 72px,
    #0B1E36;
  color: #fff;
}
```

Mantener la opacidad baja (entre 20 % y 25 %): es una textura, no un dibujo. El texto encima debe ser blanco o crema.

### 5.3 Olla de barro (SVG)

```jsx
// OllaBarro.jsx — ilustración para splash/carga. Clases para animar la tapa, la lumbre y el vapor.
export default function OllaBarro({ ancho = 220 }) {
  return (
    <svg className="olla" viewBox="0 0 260 230" width={ancho} fill="none" aria-hidden="true">
      <g className="olla-vapor" stroke="#FDFBF7" strokeWidth="7" strokeLinecap="round">
        <path d="M100 62c-14-14 14-24 0-40" /><path d="M130 56c-16-16 16-26 0-46" /><path d="M160 62c-14-14 14-24 0-40" />
      </g>
      <g className="olla-lumbre">
        <path d="M92 222c-10-8-6-20 2-28 2 8 8 10 8 18 0 6-4 10-10 10Z" fill="#F59E0B" />
        <path d="M130 224c-13-10-8-26 2-36 3 10 11 13 11 23 0 8-5 13-13 13Z" fill="#F59E0B" />
        <path d="M168 222c-10-8-6-20 2-28 2 8 8 10 8 18 0 6-4 10-10 10Z" fill="#F59E0B" />
        <path d="M131 222c-6-5-4-12 1-17 1 5 5 7 5 11 0 4-3 6-6 6Z" fill="#FFF4DC" />
      </g>
      <g className="olla-cuerpo">
        <path d="M34 128h-14a10 10 0 0 0 0 20h14M226 128h14a10 10 0 0 1 0 20h-14" stroke="#0B1E36" strokeWidth="7" strokeLinecap="round" />
        <path d="M40 112h180v46a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-46Z" fill="#C65D35" stroke="#0B1E36" strokeWidth="7" strokeLinejoin="round" />
        <path d="M58 160c4 14 14 24 26 26" stroke="#E08A62" strokeWidth="5" strokeLinecap="round" />
        <rect x="43.5" y="128" width="173" height="22" fill="#FDFBF7" />
        <g fill="#1E4FA3">
          <path d="M60 139l6-6 6 6-6 6Z" /><path d="M90 139l6-6 6 6-6 6Z" /><path d="M120 139l10-8 10 8-10 8Z" />
          <path d="M158 139l6-6 6 6-6 6Z" /><path d="M188 139l6-6 6 6-6 6Z" />
          <circle cx="78" cy="139" r="2.5" /><circle cx="108" cy="139" r="2.5" /><circle cx="148" cy="139" r="2.5" /><circle cx="178" cy="139" r="2.5" />
        </g>
        <path d="M43.5 128h173M43.5 150h173" stroke="#1E4FA3" strokeWidth="2.5" />
        <circle cx="90" cy="172" r="4" fill="#9E4423" /><circle cx="130" cy="176" r="4" fill="#9E4423" /><circle cx="170" cy="172" r="4" fill="#9E4423" />
        <rect x="30" y="102" width="200" height="18" rx="9" fill="#0B1E36" />
      </g>
      <g className="olla-tapa">
        <path d="M48 102a82 36 0 0 1 164 0Z" fill="#B24E2B" stroke="#0B1E36" strokeWidth="7" strokeLinejoin="round" />
        <path d="M78 88c14-12 32-16 52-17" stroke="#E08A62" strokeWidth="5" strokeLinecap="round" />
        <circle cx="130" cy="60" r="11" fill="#F59E0B" stroke="#0B1E36" strokeWidth="6" />
      </g>
    </svg>
  );
}
```

```css
/* Animaciones de "hirviendo" (las mismas de la web) */
.olla-tapa { transform-box: fill-box; transform-origin: 50% 100%; animation: traqueteo .5s ease-in-out infinite; }
@keyframes traqueteo { 0%,100% { transform: translateY(0) rotate(0) } 25% { transform: translateY(-7px) rotate(-3deg) } 50% { transform: translateY(-2px) rotate(1deg) } 75% { transform: translateY(-6px) rotate(3deg) } }
.olla-lumbre path { transform-box: fill-box; transform-origin: 50% 100%; animation: lumbre .35s ease-in-out infinite alternate; }
@keyframes lumbre { to { transform: scaleY(1.2) scaleX(.92); } }
.olla-vapor path { stroke-dasharray: 60; animation: vapor 1.6s ease-in-out infinite; }
.olla-vapor path:nth-child(2) { animation-delay: .25s; } .olla-vapor path:nth-child(3) { animation-delay: .5s; }
@keyframes vapor { 0% { stroke-dashoffset: 60; opacity: 0 } 40% { opacity: .9 } 100% { stroke-dashoffset: -60; opacity: 0 } }
@media (prefers-reduced-motion: reduce) { .olla-tapa, .olla-lumbre path, .olla-vapor path { animation: none; } }
```

En la web, la olla aparece sobre un fondo **verde albahaca** `#2D7A47`.

### 5.4 Píldora "¡Listo!" y confeti

```css
.listo {
  display: inline-block; rotate: -4deg;
  font-family: 'Fraunces', serif; font-weight: 900; letter-spacing: -.03em;
  color: #fff; background: #E4007C; padding: .2em .7em .3em; border-radius: 999px;
  box-shadow: 0 18px 36px -16px rgba(228, 0, 124, .8);
}
/* Confeti: 16 a 18 piezas de 10 a 16 px, en rosa #E4007C (algunas cuadradas con radio 4 px),
   ámbar #F59E0B, crema #FDFBF7 y talavera #1E4FA3. Salen en círculo desde el centro y se desvanecen en 1.2 s. */
```

---

## 6. Sugerencias por pantalla de la app (solo funciones que ya existen)

- **Bienvenida o inicio:** título con una palabra en rosa y papel picado arriba, si el encabezado es verde.
- **Recetario mexicano (los 14 platillos):** encabezado verde con papel picado. Es el lugar más natural para lo mexicano.
- **Modo cocina:** barra de "Paso X de Y" en rosa. Al tocar **"Ya la cociné"**, mostrar la píldora "¡Listo!" con confeti antes de preguntar "¿Cuánto te queda?".
- **Lista del súper:** cuando aparezca **"¡Compraste todo!"**, fondo `rosaFondo` o papel picado con un poco de confeti.
- **Splash o carga:** la olla de barro hirviendo sobre verde.
- **Tarjetas oscuras** (si hay alguna en azul marino): fondo de talavera.

**No cambiar:** botones principales, chips de fresco / por caducar, colores de texto, fondo crema y la tipografía (Fraunces 900 en títulos, fuente del sistema en el texto).
