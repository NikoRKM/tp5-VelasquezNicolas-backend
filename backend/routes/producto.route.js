const productoCtrl = require('./../controllers/producto.controller');

const express = require('express');
const router = express.Router();

router.post('/agregarProducto', productoCtrl.createProducto);
router.get('/verProductos', productoCtrl.getProductos);
router.delete('/borrarProducto/:id', productoCtrl.deleteProducto);
router.put('/actualizarProducto/:id', productoCtrl.editProducto);
router.get('/verProductosDestacados', productoCtrl.getProductosDestacados);

module.exports = router;
