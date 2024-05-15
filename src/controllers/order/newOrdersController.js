const Orders = require('../../models/Order');

// Add a new order
exports.newOrder = async (req, res, next) => {
    const order = new Orders(req.body);
    try {
        await order.save();
        res.json({ message: 'New order added' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
