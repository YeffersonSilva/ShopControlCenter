const Products = require('../../models/Products');
//const productService = require('../../services/productService'); // Asegúrate de que esta ruta sea correcta

exports.addProduct = async (req, res) => {
    const product = new Products(req.body);
    try {
        if (req.file.filename) {
            product.image = req.file.filename;
        }
        await product.save();
        res.json({ message: 'Product added successfully' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
    }
}