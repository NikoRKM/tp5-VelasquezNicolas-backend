const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: '1',
            msg: 'Ticket removido.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.editTicket = async (req, res) => {
    const v_ticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, v_ticket);
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getTicketsEspectador = async (req, res) => {
    let tipo = req.params.categoriaEspectador;
    const ticket = await Ticket.find({categoriaEspectador: tipo}).populate("espectador");
    res.json(ticket);
}

ticketCtrl.getTicket = async (req, res) => {
    var ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}

module.exports = ticketCtrl;