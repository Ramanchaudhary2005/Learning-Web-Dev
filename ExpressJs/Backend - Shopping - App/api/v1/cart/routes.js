const express = require("express");
const { getCartItems, addCartItem, removeCartItem, updateCartItem } = require("./controllers");

const cartRouter = express.Router();

// Get all cart items
cartRouter.get("/", getCartItems);

// Add a new item to cart
cartRouter.post("/", addCartItem);

// Update cart item quantity
cartRouter.put("/:id", updateCartItem);

// Delete a cart item by ID
cartRouter.delete("/:id", removeCartItem);

module.exports = { cartRouter };