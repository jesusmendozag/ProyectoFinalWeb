const config = require('../config/env');

// ─────────────────────────────────────────────────────────────
// Contenido real de Kukin v1.4. Si algo no está aquí, la app no lo hace.
// ─────────────────────────────────────────────────────────────

const VERSION = '1.4';

const tieneApk = Boolean(config.apkDownloadUrl && config.apkDownloadUrl !== '#');

const dolores = [
  {
    frase: 'Tengo cosas en el refri y no sé qué hacer con ellas.',
    respuesta: 'Recetas con lo que ya tienes',
    emoji: '🍳'
  },
  {
    frase: 'Se me echó a perder otra vez el jitomate.',
    respuesta: 'Te avisamos 2 días antes',
    emoji: '⏰'
  },
  {
    frase: 'Fui al súper y se me olvidó lo que necesitaba.',
    respuesta: 'Tu lista se arma sola',
    emoji: '🛒'
  }
];

const pasos = [
  {
    num: 1,
    titulo: 'Agrega lo que tienes',
    texto: 'Busca entre más de 200 ingredientes en español, pon cuánto tienes y cuándo caduca. Si no sabes la fecha, Kukin la calcula.',
    screen: 'alacena'
  },
  {
    num: 2,
    titulo: 'Elige una receta',
    texto: 'Kukin te muestra primero lo que puedes cocinar con lo que ya tienes, y lo que usa lo que está por caducar.',
    screen: 'recetas'
  },
  {
    num: 3,
    titulo: 'Cocina sin estrés',
    texto: 'Pasos en letra grande, la app te los lee en voz alta y el temporizador te avisa. La pantalla no se apaga mientras cocinas.',
    screen: 'cocina'
  },
  {
    num: 4,
    titulo: 'Compra solo lo que falta',
    texto: 'Lo que no tienes se va a tu lista del súper con un toque. La compartes por WhatsApp y, al volver, todo pasa a tu alacena.',
    screen: 'lista'
  }
];

const funciones = [
  {
    id: 'alacena',
    emoji: '🥫',
    titulo: 'Tu alacena en el celular',
    corto: 'Más de 200 ingredientes en español, con emoji y color. Lo que caduca primero, arriba.',
    puntos: [
      'Buscas en un catálogo de más de 200 ingredientes en español y eliges cantidad, unidad y fecha de caducidad.',
      'Si no pones la fecha, la app la estima por ti.',
      '¿No está tu ingrediente? Lo agregas tú.',
      'Se ordena por lo que caduca primero, con etiquetas de fresco o por caducar.',
      'Tocas un ingrediente para cambiar cuánto te queda o marcar "Se acabó".'
    ],
    color: 'fresco'
  },
  {
    id: 'recetas',
    emoji: '🍳',
    titulo: 'Recetas con lo que ya tienes',
    corto: 'Ordenadas por cuánto de cada receta ya tienes. Primero, lo que está por caducar.',
    puntos: [
      'Las recetas se ordenan según qué porcentaje de los ingredientes ya tienes.',
      'Primero ves las que usan lo que está por caducar, para no tirar comida.',
      'Filtros: rápidas, tienes todo, baratas, sin horno, pocos ingredientes, lo que caduca pronto y para tu objetivo.',
      'Cada receta muestra calorías aproximadas cuando hay datos.'
    ],
    color: 'arena'
  },
  {
    id: 'cocina',
    emoji: '👩‍🍳',
    titulo: 'Modo cocina',
    corto: 'Te lee los pasos en voz alta, trae temporizador y la pantalla no se apaga.',
    puntos: [
      'Ves qué ingredientes ya tienes y cuáles te faltan; si tienes poco de algo, te avisa.',
      'Cambias las porciones y las cantidades se ajustan solas.',
      'Pasos uno por uno, en letra grande, y la app te los lee en voz alta.',
      'Si un paso dice "10 minutos", aparece el temporizador. Suena aunque la app esté en segundo plano.',
      'Al terminar tocas "Ya la cociné" y Kukin descuenta de tu alacena.'
    ],
    color: 'morado'
  },
  {
    id: 'lista',
    emoji: '🛒',
    titulo: 'Lista del súper',
    corto: 'Lo que te falta, con su cantidad. Se comparte por WhatsApp con un toque.',
    puntos: [
      '"Agregar lo que falta a mi lista" manda los ingredientes que no tienes, con su cantidad.',
      'Se agrupa por receta y también puedes escribir cosas a mano: tortillas, jabón…',
      'Vas palomeando lo que metes al carrito y ves tu avance.',
      'La compartes por WhatsApp con la familia o con tu roomie.',
      'Al volver, "Guardar lo comprado en alacena" pasa todo sin volver a escribirlo.'
    ],
    color: 'verde'
  },
  {
    id: 'avisos',
    emoji: '⏰',
    titulo: 'Avisos antes de que caduque',
    corto: 'Una notificación 2 días antes. Al tocarla, ves recetas con ese ingrediente.',
    puntos: [
      'Recibes una notificación 2 días antes de que caduque un ingrediente.',
      'Al tocarla, se abren recetas que usan ese ingrediente.'
    ],
    color: 'alerta'
  },
  {
    id: 'objetivo',
    emoji: '🥗',
    titulo: 'Tu objetivo de alimentación',
    corto: 'Bajar de peso, ganar músculo, cuidar el corazón o comer equilibrado.',
    puntos: [
      'Eliges un objetivo: bajar de peso, ganar músculo, cuidar el corazón o comer equilibrado.',
      'Filtras las recetas para tu objetivo por calorías, proteína o qué tan saludable es la receta.',
      'Las calorías son aproximadas: te orientan, no son una medida exacta.'
    ],
    color: 'ambar'
  },
  {
    id: 'offline',
    emoji: '📴',
    titulo: 'Funciona sin internet',
    corto: 'Sin datos, ves lo último que guardaste: alacena, recetas y lista.',
    puntos: [
      'Si te quedas sin datos, la app te muestra lo último que guardaste.',
      'Tu alacena, tus recetas y tu lista del súper siguen ahí.'
    ],
    color: 'marino'
  },
  {
    id: 'cuenta',
    emoji: '🔒',
    titulo: 'Tu cuenta, segura',
    corto: 'Registro con correo y contraseña. Las contraseñas se guardan cifradas.',
    puntos: [
      'Te registras con tu correo y una contraseña.',
      'Las contraseñas se guardan cifradas. Tus datos son tuyos.'
    ],
    color: 'arena'
  }
];

const recetario = [
  { nombre: 'Huevo a la mexicana', emoji: '🍳' },
  { nombre: 'Frijoles de la olla', emoji: '🫘' },
  { nombre: 'Sopa de fideo', emoji: '🍜' },
  { nombre: 'Chilaquiles rojos', emoji: '🌶️' },
  { nombre: 'Arroz rojo', emoji: '🍚' },
  { nombre: 'Quesadillas', emoji: '🧀' },
  { nombre: 'Tacos dorados de papa', emoji: '🌮' },
  { nombre: 'Molletes', emoji: '🥖' },
  { nombre: 'Calabacitas a la mexicana', emoji: '🥒' },
  { nombre: 'Tinga de pollo', emoji: '🍗' },
  { nombre: 'Enfrijoladas', emoji: '🫓' },
  { nombre: 'Picadillo', emoji: '🥔' },
  { nombre: 'Avena con plátano y canela', emoji: '🥣' },
  { nombre: 'Sincronizadas', emoji: '🥪' }
];

// Demo interactiva del inicio: versión simplificada de los ingredientes de cada receta
// (solo para explicar el porcentaje; en la app las recetas traen su lista completa).
const demoIngredientes = [
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚' },
  { id: 'jitomate', nombre: 'Jitomate', emoji: '🍅' },
  { id: 'cebolla', nombre: 'Cebolla', emoji: '🧅' },
  { id: 'chile', nombre: 'Chile', emoji: '🌶️' },
  { id: 'tortillas', nombre: 'Tortillas', emoji: '🫓' },
  { id: 'frijoles', nombre: 'Frijoles', emoji: '🫘' },
  { id: 'queso', nombre: 'Queso', emoji: '🧀' },
  { id: 'crema', nombre: 'Crema', emoji: '🥣' },
  { id: 'papa', nombre: 'Papa', emoji: '🥔' },
  { id: 'pollo', nombre: 'Pollo', emoji: '🍗' },
  { id: 'carne', nombre: 'Carne molida', emoji: '🥩' },
  { id: 'arroz', nombre: 'Arroz', emoji: '🍚' },
  { id: 'fideo', nombre: 'Fideo', emoji: '🍜' },
  { id: 'bolillo', nombre: 'Bolillo', emoji: '🥖' },
  { id: 'calabacita', nombre: 'Calabacita', emoji: '🥒' },
  { id: 'jamon', nombre: 'Jamón', emoji: '🍖' },
  { id: 'avena', nombre: 'Avena', emoji: '🌾' },
  { id: 'platano', nombre: 'Plátano', emoji: '🍌' },
  { id: 'leche', nombre: 'Leche', emoji: '🥛' }
];
const demoInicial = ['huevo', 'jitomate', 'cebolla', 'tortillas', 'queso'];
const demoRecetas = [
  { nombre: 'Huevo a la mexicana', emoji: '🍳', ings: ['huevo', 'jitomate', 'cebolla', 'chile'] },
  { nombre: 'Frijoles de la olla', emoji: '🫘', ings: ['frijoles', 'cebolla'] },
  { nombre: 'Sopa de fideo', emoji: '🍜', ings: ['fideo', 'jitomate', 'cebolla'] },
  { nombre: 'Chilaquiles rojos', emoji: '🌶️', ings: ['tortillas', 'jitomate', 'chile', 'cebolla', 'queso', 'crema'] },
  { nombre: 'Arroz rojo', emoji: '🍚', ings: ['arroz', 'jitomate', 'cebolla'] },
  { nombre: 'Quesadillas', emoji: '🧀', ings: ['tortillas', 'queso'] },
  { nombre: 'Tacos dorados de papa', emoji: '🌮', ings: ['tortillas', 'papa', 'crema', 'queso'] },
  { nombre: 'Molletes', emoji: '🥖', ings: ['bolillo', 'frijoles', 'queso'] },
  { nombre: 'Calabacitas a la mexicana', emoji: '🥒', ings: ['calabacita', 'jitomate', 'cebolla', 'chile'] },
  { nombre: 'Tinga de pollo', emoji: '🍗', ings: ['pollo', 'jitomate', 'cebolla', 'chile'] },
  { nombre: 'Enfrijoladas', emoji: '🫓', ings: ['tortillas', 'frijoles', 'queso', 'crema'] },
  { nombre: 'Picadillo', emoji: '🥔', ings: ['carne', 'papa', 'jitomate', 'cebolla'] },
  { nombre: 'Avena con plátano y canela', emoji: '🥣', ings: ['avena', 'platano', 'leche'] },
  { nombre: 'Sincronizadas', emoji: '🥪', ings: ['tortillas', 'jamon', 'queso'] }
].map(function (r) {
  var tengo = r.ings.filter(function (i) { return demoInicial.indexOf(i) > -1; }).length;
  return Object.assign({}, r, { pct: Math.round(tengo / r.ings.length * 100) });
}).sort(function (a, b) { return b.pct - a.pct; });

const publicos = [
  {
    id: 'estudiante',
    etiqueta: 'Soy estudiante',
    emoji: '🎒',
    titulo: 'Vives solo, tienes poco tiempo y poco dinero.',
    texto: 'Kukin te dice qué hacer con lo que hay en tu refri, rápido y sin complicarte.',
    puntos: [
      'Filtros de recetas rápidas, baratas, sin horno y con pocos ingredientes.',
      'Pasos en voz alta y temporizador, aunque nunca hayas cocinado.',
      'La lista del súper se comparte por WhatsApp con tu roomie.',
      'Te avisa antes de que se eche a perder lo que compraste.'
    ]
  },
  {
    id: 'mama',
    etiqueta: 'Soy mamá',
    emoji: '🏡',
    titulo: 'Tú organizas la comida de la casa.',
    texto: 'Aprovecha lo que hay en la alacena, tira menos comida y ahorra en el súper.',
    puntos: [
      'Ideas de qué hacer hoy con lo que ya tienes, con recetas mexicanas de diario.',
      'Cambias las porciones y las cantidades se ajustan solas.',
      'Mandas la lista del súper a la familia por WhatsApp.',
      'Letra grande, emojis y botones claros. Nada complicado.'
    ]
  }
];

const faq = [
  {
    p: '¿Cuándo puedo descargar Kukin?',
    r: 'Kukin todavía no está en Google Play: llegará muy pronto. Mientras tanto, en la página de descarga encontrarás la versión de prueba para Android.'
  },
  {
    p: '¿Funciona sin internet?',
    r: 'Sí. Si te quedas sin datos, la app te muestra lo último que guardaste: tu alacena, tus recetas y tu lista del súper siguen ahí.'
  },
  {
    p: '¿Hay versión para iPhone?',
    r: 'Por ahora Kukin es solo para Android.'
  },
  {
    p: '¿Tengo que pesar todo?',
    r: 'No. Puedes poner cantidades aproximadas y unidades como piezas, tazas o cucharadas.'
  },
  {
    p: '¿Y si mi ingrediente no está en el catálogo?',
    r: 'Lo agregas tú. El catálogo trae más de 200 ingredientes en español, pero tu cocina manda.'
  },
  {
    p: '¿Las calorías son exactas?',
    r: 'No. Son aproximadas y aparecen cuando la receta tiene datos. Te sirven de guía para tu objetivo.'
  },
  {
    p: '¿Puedo compartir mi lista del súper?',
    r: 'Sí, por WhatsApp con un toque. Ideal para mandarla a la familia o al roomie.'
  },
  {
    p: '¿Mis datos están seguros?',
    r: 'Te registras con correo y contraseña, y las contraseñas se guardan cifradas. Tus datos son tuyos.'
  }
];

// ─────────────────────────────────────────────────────────────

const base = (extra) => Object.assign({
  appName: config.appName,
  version: VERSION,
  tieneApk,
  downloadUrl: config.apkDownloadUrl
}, extra);

const getHome = (req, res) => {
  res.render('index', base({
    title: 'Kukin · ¿Qué hago de comer hoy?',
    description: 'Kukin es una app para Android que te dice qué cocinar con lo que ya tienes, te avisa antes de que se eche a perder la comida y te arma la lista del súper.',
    activePage: 'inicio',
    dolores,
    pasos,
    funciones,
    recetario,
    demoIngredientes,
    demoInicial,
    demoRecetas,
    publicos,
    faq: faq.slice(0, 4)
  }));
};

const getCaracteristicas = (req, res) => {
  res.render('caracteristicas', base({
    title: 'Funciones · Kukin',
    description: 'Alacena, recetas con lo que tienes, modo cocina con voz y temporizador, lista del súper por WhatsApp y avisos antes de que caduque.',
    activePage: 'caracteristicas',
    funciones
  }));
};

const getComoFunciona = (req, res) => {
  res.render('como-funciona', base({
    title: 'Cómo funciona · Kukin',
    description: 'De tu alacena a la mesa: agrega lo que tienes, elige una receta, cocina y compra solo lo que falta.',
    activePage: 'como-funciona',
    faq
  }));
};

const getDescargar = (req, res) => {
  res.render('descargar', base({
    title: 'Descargar · Kukin',
    description: 'Kukin para Android. Muy pronto en Google Play.',
    activePage: 'descargar'
  }));
};

const getContacto = (req, res) => {
  res.render('contacto', base({
    title: 'Contacto · Kukin',
    activePage: 'contacto',
    enviado: req.query.enviado === 'true',
    error: req.query.error === 'true'
  }));
};

const postContacto = (req, res) => {
  const nombre = String(req.body.nombre || '').trim();
  const correo = String(req.body.correo || '').trim();
  const mensaje = String(req.body.mensaje || '').trim();
  if (!nombre || !correo || !mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return res.redirect('/contacto?error=true#formulario');
  }
  // Aquí en el futuro puedes conectar Nodemailer usando las variables SMTP del .env
  console.log(`Nuevo mensaje de ${nombre} (${correo}): ${mensaje}`);
  res.redirect('/contacto?enviado=true#formulario');
};

module.exports = {
  getHome,
  getCaracteristicas,
  getComoFunciona,
  getDescargar,
  getContacto,
  postContacto
};
