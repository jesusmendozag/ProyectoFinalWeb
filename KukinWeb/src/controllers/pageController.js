const config = require('../config/env');

const getHome = (req, res) => {
  res.render('index', {
    title: 'Inicio | Kukin - Tu alacena inteligente',
    activePage: 'inicio',
    appName: config.appName
  });
};

const getCaracteristicas = (req, res) => {
  const features = [
    {
      titulo: 'Gestión de Alacena',
      descripcion: 'Registra tus ingredientes disponibles, cantidades y fechas de caducidad.'
    },
    {
      titulo: 'Recetas con lo que ya tienes',
      descripcion: 'Encuentra platillos mexicanos e internacionales filtrados según tu inventario.'
    },
    {
      titulo: 'Sustitución Inteligente',
      descripcion: '¿Te falta un ingrediente? Kukin te sugiere equivalentes accesibles en México.'
    }
  ];

  res.render('caracteristicas', {
    title: 'Características | Kukin',
    activePage: 'caracteristicas',
    features
  });
};

const getComoFunciona = (req, res) => {
  res.render('como-funciona', {
    title: 'Cómo Funciona | Kukin',
    activePage: 'como-funciona'
  });
};

const getDescargar = (req, res) => {
  res.render('descargar', {
    title: 'Descargar App | Kukin',
    activePage: 'descargar',
    downloadUrl: config.apkDownloadUrl,
    version: 'v1.0.0-beta',
    requisitos: 'Android 10 o superior • 45 MB libres'
  });
};

const getContacto = (req, res) => {
  res.render('contacto', {
    title: 'Contacto y Soporte | Kukin',
    activePage: 'contacto',
    enviado: req.query.enviado === 'true'
  });
};

const postContacto = (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  // Aquí en el futuro puedes conectar Nodemailer usando config.smtpUser y config.smtpPass
  console.log(`Nuevo mensaje de ${nombre} (${correo}): ${mensaje}`);
  res.redirect('/contacto?enviado=true');
};

module.exports = {
  getHome,
  getCaracteristicas,
  getComoFunciona,
  getDescargar,
  getContacto,
  postContacto
};