const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.post('/agregarTicket', ticketCtrl.createTicket);
router.get('/verTickets', ticketCtrl.getTickets);
router.delete('/borrarTicket/:id', ticketCtrl.deleteTicket);
router.put('/actualizarTicket/:id', ticketCtrl.editTicket);
router.get('/verTicketsEspectador/:categoriaEspectador', ticketCtrl.getTicketsEspectador);
router.get('/verTicket/:id', ticketCtrl.getTicket);

module.exports = router;