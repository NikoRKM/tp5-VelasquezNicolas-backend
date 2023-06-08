const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.post('/agregarTransaccion', transaccionCtrl.createTransaccion);
router.get('/verTransacciones', transaccionCtrl.getTransacciones);
router.get('/verTransaccionesCliente', transaccionCtrl.getTransaccionesCliente);
router.get('/verTransaccionesMoneda/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesMoneda);

module.exports = router;