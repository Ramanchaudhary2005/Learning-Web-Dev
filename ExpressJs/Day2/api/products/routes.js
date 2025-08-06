const express = require("express");

const productsRouter = express.Router();

// apiRouter.use((res,req,next)=>{
//     console.log("--> Api router invoked");
//     next();
// });

productsRouter.get("/", (req,res)=>{
    res.status(200).send("get Dummy products endpoint!");
});
productsRouter.post("/", (req,res)=>{
    res.status(200).send(" post Dummy products endpoint!");
});
productsRouter.patch("/", (req,res)=>{
    res.status(200).send("patch Dummy products endpoint!");
});
productsRouter.delete("/", (req,res)=>{
    res.status(200).send("delete Dummy products endpoint!");
});

module.exports = {productsRouter};