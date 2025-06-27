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


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};