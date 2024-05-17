const express = require('express');
const router = express.Router();

const newOrderController = require('../controllers/order/newOrdersController'); // Make sure this path is correct
const deleteOrderController = require('../controllers/order/deleteOrderController');
const getOrderController = require('../controllers/order/getOrderController');
const getOrdersController = require('../controllers/order/getOrdersController');
const updateOrderController = require('../controllers/order/updateOrderController');

router.post('/', newOrderController.newOrder);
router.get('/:id', getOrderController.getOrder);
router.get('/', getOrdersController.getOrders);
router.put('/:id', updateOrderController.updateOrder);
router.delete('/:id', deleteOrderController.deleteOrder);

module.exports = router;
