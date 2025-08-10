const express = require("express");
const {createProductController} = require("./controllers");
const { createProductValidator } = require("./dto");
const productRouter = express.Router();

productRouter.post("/", createProductValidator,createProductController);

module.exports = {productRouter};