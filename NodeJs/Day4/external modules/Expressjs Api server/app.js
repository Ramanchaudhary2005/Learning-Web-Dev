const express = require("express");

const app = express();

app.get("/",(req, res)=>{
    console.log("req res on '/'");
    // res.end("hello");
    res.json({
        isSuccess: true,
        message: "Server is running fine...",
        data: {},
    })
})

app.listen(2900,()=>{
    console.log("--------server started--------");
});