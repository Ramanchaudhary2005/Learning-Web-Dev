const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema({
  items: [
    {
      productId: { 
        type: Schema.Types.ObjectId, 
        ref: "Product", 
        required: true 
      },
      name: { 
        type: String, 
        required: true, 
        trim: true 
      },
      price: { 
        type: Number, 
        required: true, 
        min: 0 
      },
      quantity: { 
        type: Number, 
        required: true, 
        min: 1 
      },
      thumbnail: { 
        type: String, 
        default: "" 
      }
    }
  ],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const cartModel = model("Cart", cartSchema);

module.exports = { cartModel };


