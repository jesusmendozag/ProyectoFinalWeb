/**
 * Genera una versión estática del sitio (HTML + CSS + JS) en KukinWeb/dist
 * para publicarla en GitHub Pages.
 *
 * Uso:  BASE_PATH=/ProyectoFinalWeb/ node scripts/build-static.js
 *   - BASE_PATH: carpeta donde vivirá el sitio (en GitHub Pages: /<nombre-del-repo>/). Por defecto "/".
 *   - APK_DOWNLOAD_URL (opcional): enlace del APK de prueba, igual que en el .env.
 *
 * Reutiliza los mismos controladores y vistas EJS del servidor Express, así que
 * el contenido siempre es el mismo en las dos versiones.
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const raiz = path.join(__dirname, '..');
const vistas = path.join(raiz, 'src', 'views');
const salida = path.join(raiz, 'dist');
const config = require('../src/config/env');
const pageController = require('../src/controllers/pageController');

let base = process.env.BASE_PATH || '/';
if (!base.startsWith('/')) base = '/' + base;
if (!base.endsWith('/')) base += '/';

const paginas = [
  { handler: 'getHome', archivo: 'index.html' },
  { handler: 'getCaracteristicas', archivo: 'caracteristicas/index.html' },
  { handler: 'getComoFunciona', archivo: 'como-funciona/index.html' },
  { handler: 'getDescargar', archivo: 'descargar/index.html' },
  { handler: 'getContacto', archivo: 'contacto/index.html' }
];

// Cambia las rutas absolutas ("/css/...", "/contacto") por rutas dentro de BASE_PATH
function ajustarRutas(html) {
  return html.replace(/\b(href|src|action)="\/(?!\/)/g, '$1="' + base);
}

function renderizar(vista, datos) {
  const archivo = path.join(vistas, vista + '.ejs');
  return ejs.renderFile(archivo, Object.assign({ estatico: true }, datos), { views: [vistas] });
}

function escribir(rel, contenido) {
  const destino = path.join(salida, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido);
}

function copiarCarpeta(origen, destino) {
  fs.mkdirSync(destino, { recursive: true });
  for (const item of fs.readdirSync(origen, { withFileTypes: true })) {
    const o = path.join(origen, item.name);
    const d = path.join(destino, item.name);
    if (item.isDirectory()) copiarCarpeta(o, d);
    else fs.copyFileSync(o, d);
  }
}

function copiarArchivos(origen, destino, nombres) {
  fs.mkdirSync(destino, { recursive: true });
  for (const n of nombres) fs.copyFileSync(path.join(origen, n), path.join(destino, n));
}

async function main() {
  fs.rmSync(salida, { recursive: true, force: true });

  // Páginas: se "llama" a cada controlador con un req/res falso para obtener vista y datos
  for (const p of paginas) {
    let capturado = null;
    const req = { query: {}, body: {} };
    const res = { render: (vista, datos) => { capturado = { vista, datos }; } };
    pageController[p.handler](req, res);
    if (!capturado) throw new Error('El controlador ' + p.handler + ' no renderizó nada');
    const html = await renderizar(capturado.vista, capturado.datos);
    escribir(p.archivo, ajustarRutas(html));
    console.log('  ✓', p.archivo);
  }

  // Página 404 (GitHub Pages la usa automáticamente)
  const html404 = await renderizar('404', { title: 'Página no encontrada | Kukin', activePage: '', appName: config.appName });
  escribir('404.html', ajustarRutas(html404));
  console.log('  ✓ 404.html');

  // Archivos públicos (css, js, img) y librerías de animación
  copiarCarpeta(path.join(raiz, 'src', 'public'), salida);
  copiarArchivos(path.join(raiz, 'node_modules', 'gsap', 'dist'), path.join(salida, 'vendor', 'gsap'),
    ['gsap.min.js', 'ScrollTrigger.min.js', 'SplitText.min.js']);
  copiarArchivos(path.join(raiz, 'node_modules', 'lenis', 'dist'), path.join(salida, 'vendor', 'lenis'), ['lenis.min.js']);

  // Evita que GitHub Pages procese el sitio con Jekyll
  escribir('.nojekyll', '');

  console.log('\nSitio estático listo en ' + path.relative(process.cwd(), salida) + ' (base: ' + base + ')');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
