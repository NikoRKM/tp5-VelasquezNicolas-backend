const espectadorCtrl = require('./../controllers/espectador.controller');

const express = require('express');
const router = express.Router();

router.post('/agregarEspectador', espectadorCtrl.createEspectador);
router.get('/verEspectadores', espectadorCtrl.getEspectadores);
router.get('/verEspectador/:dni', espectadorCtrl.getEspectador);

module.exports = router;