const Orders = require('../../models/Order');

// Get all orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Orders.find({})
            .populate('client')
            .populate({
                path: 'order.product',
                model: 'Products'
            });
        res.json(orders);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
