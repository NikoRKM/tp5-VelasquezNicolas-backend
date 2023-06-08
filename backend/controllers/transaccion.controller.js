const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var productos = await Transaccion.find();
    res.json(productos);
}

transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    let email = req.query.emailCliente;
    var productos = await Transaccion.find({emailCliente: email});
    res.json(productos);
}

transaccionCtrl.getTransaccionesMoneda = async (req, res) => {
    let monedaOrg = req.params.monedaOrigen;
    let monedaDes = req.params.monedaDestino;
    var productos = await Transaccion.find({monedaOrigen: monedaOrg, monedaDestino: monedaDes});
    res.json(productos);
}

module.exports = transaccionCtrl;