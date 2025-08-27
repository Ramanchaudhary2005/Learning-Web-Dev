const express = require("express");
const { 
  createOrder, 
  getUserOrders, 
  getOrderById, 
  updateOrderStatus, 
  cancelOrder 
} = require("./controllers");

const orderRouter = express.Router();

// Create new order from cart
orderRouter.post("/", createOrder);

// Get all orders for a specific user
orderRouter.get("/user/:userId", getUserOrders);

// Get specific order by ID
orderRouter.get("/:id", getOrderById);

// Update order status (for admin)
orderRouter.put("/:id/status", updateOrderStatus);

// Cancel order
orderRouter.put("/:id/cancel", cancelOrder);

module.exports = { orderRouter };