const express = require("express");

const ordersRouter = express.Router();

// apiRouter.use((res,req,next)=>{
//     console.log("--> Api router invoked");
//     next();
// });

ordersRouter.get("/", (req,res)=>{
    res.status(200).send("get Dummy orders endpoint!");
});
ordersRouter.post("/", (req,res)=>{
    res.status(200).send(" post Dummy orders endpoint!");
});
ordersRouter.patch("/", (req,res)=>{
    res.status(200).send("patch Dummy orders endpoint!");
});
ordersRouter.delete("/", (req,res)=>{
    res.status(200).send("delete Dummy orders endpoint!");
});

module.exports = {ordersRouter};