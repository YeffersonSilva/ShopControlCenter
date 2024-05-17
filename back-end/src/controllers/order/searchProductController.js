const Products = require('../../models/Products');

exports.searchProduct = async (req, res, next) => {
    try {
        const { query } = req.params;
        const products = await Products.find({ name: new RegExp(query, 'i') });
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
        next();
    }
};
