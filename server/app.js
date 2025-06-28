// server/index.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
require("./config/db")
const mongoose = require("mongoose")

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
app.get('/api/checkdb', async (req, res) => {
    try {
        const status = await mongoose.connection.readyState;
        const isConnected = status === 1;
        res.json({ connected: isConnected });
    } catch (error) {
        res.status(500).json({ error: "DB check failed"  });
    }
});



app.use("/api/products", productRoutes)

module.exports = app;

