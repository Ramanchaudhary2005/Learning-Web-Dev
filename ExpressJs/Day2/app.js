const express = require("express");
const morgan = require("morgan");
const { apiRouter } = require("./api/routes");


const app = express();

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.status(200).json({
        isSuccess: true,
        message: "Server is working fine"
    });
});

app.get("/orders",(req,res)=>{
    res.send("Dummy orders endpoint!");
});

app.use("/api", apiRouter);  // middleware 

app.listen(3900, ()=>{
    console.log("-----------server started------------");
});