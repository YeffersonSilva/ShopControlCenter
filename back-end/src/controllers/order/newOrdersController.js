const Orders = require('../../models/Order');

exports.newOrder = async (req, res, next) => {
    const order = new Orders(req.body);
    try {
        await order.save();
        res.json({ message: 'New order added' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
        next(error);
    }
};
