const Espectador = require('../models/espectador');
const espectadorCtrl = {};

espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.getEspectador = async (req, res) => {
    let dniEspectador = req.params.dni;
    var espectador = await Espectador.find({dni: dniEspectador});
    res.json(espectador);
}

module.exports = espectadorCtrl;