const Products = require('../../models/Products');

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
    }
};

exports.searchProducts = async (req, res, next) => {
    try {
        const query = req.body.query;
        const products = await Products.find({ name: new RegExp(query, 'i') });
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
    }
};
