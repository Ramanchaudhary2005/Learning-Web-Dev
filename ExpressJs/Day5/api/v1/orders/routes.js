const express = require("express");
const { placeOrderController } = require("./controllers");

const orderRouter = express.Router();

orderRouter.post("/", placeOrderController);

module.exports = { orderRouter };