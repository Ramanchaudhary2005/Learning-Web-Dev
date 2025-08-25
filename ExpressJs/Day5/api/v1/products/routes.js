const express = require("express");
const {createProductController, updateProductController, getProductController, deleteProductController, listProductController, viewProductController} = require("./controllers");
const { createProductValidator, getProductValidator } = require("./dto");
const productRouter = express.Router();

productRouter.post("/", createProductValidator,createProductController);
productRouter.patch("/:productId",createProductValidator, updateProductController);
productRouter.get("/", getProductController);
productRouter.get("/list", listProductController);
productRouter.delete("/:productId",  deleteProductController);
productRouter.patch("/view/:productId", viewProductController);

module.exports = {productRouter};