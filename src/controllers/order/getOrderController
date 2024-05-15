const Orders = require('../../models/Order');

// Get an order by its ID
exports.getOrder = async (req, res, next) => {
    try {
        const order = await Orders.findById(req.params.idOrder).populate('client').populate({
            path: 'order.product',
            model: 'Products'
        });

        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return next();
        }

        // Return the order
        res.json(order);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
