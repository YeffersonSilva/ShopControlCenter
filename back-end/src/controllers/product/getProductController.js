const Product = require('../../models/Products');

exports.getProduct = async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.json({ message: 'Product not found' });
        return next();
    }

    res.json(product);
}
