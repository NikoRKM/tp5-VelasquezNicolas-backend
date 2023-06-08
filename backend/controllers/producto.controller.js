const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: '1',
            msg: 'Producto removido.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.editProducto = async (req, res) => {
    const v_producto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, v_producto);
        res.status(200).json({
            'status': '1',
            'msg': 'Producto actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.getProductosDestacados = async (req, res) => {
    const producto = await Producto.find({destacado: true});
    res.json(producto);
}

module.exports = productoCtrl;