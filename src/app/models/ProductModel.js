const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    productUrl: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
