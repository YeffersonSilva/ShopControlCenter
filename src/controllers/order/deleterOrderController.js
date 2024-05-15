const Orders = require('../../models/Order');

// Delete an order by its ID
exports.deleteOrder = async (req, res, next) => {
    try {
        await Orders.findOneAndDelete({ _id: req.params.idOrder });
        res.json({ message: 'Order has been deleted' });
    } catch (error) {
        console.log(error);
        next();
    }
};
