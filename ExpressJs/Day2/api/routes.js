const express = require("express");

const apiRouter = express.Router();

apiRouter.use((res,req,next)=>{
    console.log("--> Api router invoked");
    next();
});

apiRouter.get("/orders", (req,res)=>{
    res.status(200).send("Dummy orders endpoint!");
});

apiRouter.get("/products", (req,res)=>{
    res.status(200).send("Dummy orders endpoint!");
});

module.exports = {apiRouter};