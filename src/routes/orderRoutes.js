const express = require('express');
const router = express.Router();

const newOrderController = require('../controllers/order/newOrderController'); // Make sure this path is correct
const deleteOrderController = require('../controllers/order/deleterOrderController');
const getOrderController = require('../controllers/order/getOrderController');
const getOrdersController = require('../controllers/order/getOrdersController');
const updateOrderController = require('../controllers/order/updateOrderController');

router.post('/', newOrderController.newOrder);
router.get('/', getOrdersController.getOrders);
router.get('/:idOrder', getOrderController.getOrder);
router.put('/:idOrder', updateOrderController.updateOrder);
router.delete('/:idOrder', deleteOrderController.deleteOrder);

module.exports = router;
