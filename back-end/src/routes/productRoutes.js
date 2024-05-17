const express = require('express');
const router = express.Router();


const addProductController = require('../controllers/product/addProductController')
const uploadImageController = require('../controllers/product/uploadImageController');
const getProductsController = require('../controllers/product/getProductsController');
const getProductController = require('../controllers/product/getProductController');

const updateProductController = require('../controllers/product/updateProductController');
const deleteProductController = require('../controllers/product/deleteProductController');
const searchProductController = require('../controllers/product/searchProductController');


router.post('/', uploadImageController.uploadImage, addProductController.addProduct); // Usar el middleware de carga de imagen
router.get('/', getProductsController.getProducts);
router.get('/:id', getProductController.getProduct);
router.put('/:id',uploadImageController.uploadImage, updateProductController.udpatProduct);

router.delete('/:id', deleteProductController.deleteProduct);
router.post('/search', getProductsController.searchProducts);

module.exports = router;