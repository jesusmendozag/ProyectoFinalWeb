const path = require('path');
const express = require('express');
const helmet = require('helmet');
const config = require('./src/config/env');
const webRoutes = require('./src/routes/webRoutes');

const app = express();

// Seguridad de cabeceras HTTP
app.use(helmet());

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middlewares para formularios y archivos estáticos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rutas principales
app.use('/', webRoutes);

// Manejo de error 404 (Página no encontrada)
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada | Kukin',
    activePage: '',
    appName: config.appName
  });
});

app.listen(config.port, () => {
  console.log(`Servidor de ${config.appName} corriendo en http://localhost:${config.port}`);
});