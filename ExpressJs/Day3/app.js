const express = require("express");
require("./config/db");
const app = express();

app.listen(3900, ()=>{
    console.log("--------Server Started---------");
});


