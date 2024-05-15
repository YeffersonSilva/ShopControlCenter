const Product = require('../../models/Products');


exports.udpatProduct = async (req, res, next) => {

    try {
        let productLast = await Product.findById(req.params.id);
        let newProduct = req.body;

        if (req.file) {
            newProduct.image = req.file.filename;
        }else{
            newProduct.image = productLast.image;
        }

        if (!productLast) {
            res.json({ message: 'Product not found' });
            return next();
        }
        

       let products = await Product.findOneAndUpdate({ _id: req.params.id }, newProduct, { new: true });
        res.json(products);

    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
        next();
    }
}