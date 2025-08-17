const express = require("express");
const { productRouter } = require("./products/routes");
const { authRouter } = require("./auth/routes");

const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/auth", authRouter);

module.exports = { apiRouter };