const express = require("express");
const { productsRouter } = require("./products/routes");
const { ordersRouter } = require("./orders/routes");


const apiRouter = express.Router();

apiRouter.use((res,req,next)=>{
    console.log("--> Api router invoked");
    next();
});

apiRouter.use("/orders", ordersRouter);
apiRouter.use("/orders", productsRouter);

module.exports = {apiRouter};