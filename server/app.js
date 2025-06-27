// server/index.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
require("./config/db")
const { getAllProducts } = require("./controllers/productController")

const app = express();

// Middleware

app.use(cors({
    origin: [process.env.FRONT_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.send('Deployed version is working ✅');
});

app.get("/api/products/getproducts", getAllProducts)


app.use("/api/products", productRoutes)

module.exports = app;

