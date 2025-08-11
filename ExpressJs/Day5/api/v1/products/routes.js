const express = require("express");
const {createProductController, updateProductController, getProductController, deleteProductController} = require("./controllers");
const { createProductValidator, getProductValidator } = require("./dto");
const productRouter = express.Router();

productRouter.post("/", createProductValidator,createProductController);
productRouter.patch("/:productId",createProductValidator, updateProductController);
productRouter.get("/", getProductValidator, getProductController);
productRouter.delete("/:productId",  deleteProductController);

module.exports = {productRouter};