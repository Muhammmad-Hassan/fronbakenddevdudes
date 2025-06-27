const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../controllers/productController');




router.post('/addproduct', addProduct);
router.get('/getproducts', getAllProducts);


module.exports = router;