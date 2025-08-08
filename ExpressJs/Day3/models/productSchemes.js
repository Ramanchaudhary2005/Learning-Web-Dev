const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    quantity: Number,
});

const ProductModel = model("product", productSchema);