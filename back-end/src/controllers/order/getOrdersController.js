
const Orders = require('../../models/Order');

exports.getOrders = async (req, res, next) => {
    try {
        const pedidos = await Orders.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}