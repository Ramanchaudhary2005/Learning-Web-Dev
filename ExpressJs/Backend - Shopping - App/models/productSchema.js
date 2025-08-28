const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    discountPercentage: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    tags: {
        type: [String],
    },
    brand: {
        type: String,
    },
    sku: {
        type: String,
    },
    weight: {
        type: Number,
    },
    dimensions: {
        depth: {
            type: Number,
        }
    },
    warrantyInformation: {
        type: String,
    },
    shippingInformation: {
        type: String,
    },
    availabilityStatus: {
        type: String,
    },
    reviews: {
        type: [mongoose.Schema.Types.Mixed],
    },
    returnPolicy: {
        type: String,
    },
    minimumOrderQuantity: {
        type: Number,
    },
    meta: {
        qrCode: {
            type: String,
        }
    },
    images: {
        type: [String],
    },
    thumbnail: {
        type: String,
    },
},{
    timestamps: true,
    versionKey: false,
});

const ProductModel = model("product", productSchema);

module.exports = {ProductModel};