const Product = require("../models/productModel")





exports.addProduct = async (req, res) => {
    console.log("Add product controller")
    console.log(req.body)
    const { productTitle, productPrice, productDescription } = req.body;


    try {
        const newProduct = new Product({
            productTitle,
            productPrice,
            productDescription,
        });

        await newProduct.save(); // Save the product to the database

        res.status(201).json({ message: 'Product saved successfully', product: newProduct });
    } catch (error) {
        console.error('Error saving product:', error.message);
        res.status(500).json({ message: 'Failed to save product', error: error.message });
    }
};


// controllers/productController.js

exports.getAllProducts = async (req, res) => {
    try {
        // Optional: Add pagination support (limit & skip from query params)
        const limit = parseInt(req.query.limit) || 50; // default limit
        const skip = parseInt(req.query.skip) || 0;

        const products = await Product.find().skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error('[GET /products] Error:', error);
        res.status(500).json({
            success: false,
            message: 'Unable to fetch products at the moment.',
            error: error.message
        });
    }
};
