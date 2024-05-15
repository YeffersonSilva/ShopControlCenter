const Product = require('../../models/Products');


exports.deleteProduct = async (req, res, next) => {
        
    try {
        await Product.findOneAndDelete({ _id: req.params.id });
        res.json({ message: 'Product deleted' });

    }
    catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
        next();
    }
}