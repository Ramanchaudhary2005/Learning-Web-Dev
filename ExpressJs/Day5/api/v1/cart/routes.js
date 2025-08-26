const express = require("express");
const { getCartItems, addCartItem, removeCartItem } = require("./controllers");

const cartRouter = express.Router();


// Get all cart items
cartRouter.get("/", getCartItems);

// Add a new item to cart
cartRouter.post("/", addCartItem);

// Delete a cart item by ID
cartRouter.delete("/:id", removeCartItem);

module.exports = { cartRouter };
