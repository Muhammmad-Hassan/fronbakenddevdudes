// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/product');
require("./db/connection")
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

app.use(cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.json("Hello Khan");
})

app.post('/api/products', async (req, res) => {
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
});


app.get('/api/getproducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
