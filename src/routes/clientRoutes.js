const express = require('express');
const router = express.Router();

const addClientController = require('../controllers/client/addClientController');
const getClientController = require('../controllers/client/getClientController');
const getClientsController = require('../controllers/client/getClientsController');
const updateClientController = require('../controllers/client/updateClientController');
const deleteClientController = require('../controllers/client/deleteClientController');

router.post('/', addClientController.addClient);
router.get('/', getClientsController.getClients);
router.get('/:id', getClientController.getClient);
router.put('/:id', updateClientController.updateClient);
router.delete('/:id', deleteClientController.deleteClient);

module.exports = router;
