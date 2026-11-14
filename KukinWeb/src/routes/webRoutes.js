const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.getHome);
router.get('/caracteristicas', pageController.getCaracteristicas);
router.get('/como-funciona', pageController.getComoFunciona);
router.get('/descargar', pageController.getDescargar);
router.get('/contacto', pageController.getContacto);
router.post('/contacto', pageController.postContacto);

module.exports = router;