require('dotenv').config();
const express = require("express");
const { ProductModel } = require("./models/productSchemes");
require("./config/db");
const app = express();


app.get("/",async (req,res)=>{
    const newProduct = await ProductModel.create({
        title: "Bag",
        price: 10,
    });
    console.log(newProduct);
    res.json({
        isSuccess: 'true',
        message: 'Product created',
    })
});

app.listen(3900, ()=>{
    console.log("--------Server Started---------");
});


