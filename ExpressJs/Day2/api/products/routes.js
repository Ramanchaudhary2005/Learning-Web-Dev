const express = require("express");
const { createProductController } = require("./controllers");

const productsRouter = express.Router();

// apiRouter.use((res,req,next)=>{
//     console.log("--> Api router invoked");
//     next();
// });

productsRouter.get("/", (req,res)=>{
    res.status(200).send("get Dummy products endpoint!");
});
productsRouter.post("/", createProductController);
productsRouter.patch("/", (req,res)=>{
    res.status(200).send("patch Dummy products endpoint!");
});
productsRouter.delete("/", (req,res)=>{
    res.status(200).send("delete Dummy products endpoint!");
});

module.exports = {productsRouter};