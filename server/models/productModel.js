const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true,
        trim: true,
    },
    productPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    productDescription: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
