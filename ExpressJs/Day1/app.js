const express = require("express");
const { myReadFile, mySaveFile } = require("./utils/file_helpers");

const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log("-->",new Date(),req.method, req.url); //middleware
    next();
});

app.get("/api/v1/products",(req,res)=>{
    console.log(Object.keys(req));
});

app.post("/api/v1/products", async (req, res) => {
    const data = req.body;
    console.log(data);
    const odlArr = myReadFile("./data.json");
    odlArr.push(data);
    await mySaveFile("./data.json", odlArr);
});

app.listen(2900, ()=>{
    console.log("--------server started-------");
})