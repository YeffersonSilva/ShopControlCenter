const Orders = require('../../models/Order');

// Update an order by its ID
exports.updateOrder = async (req, res, next) => {
    try {
        let order = await Orders.findOneAndUpdate({ _id: req.params.idOrder }, req.body, {
            new: true
        })
        .populate('client')
        .populate({
            path: 'order.product',
            model: 'Products'
        });

        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
};
