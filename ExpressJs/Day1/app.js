const express = require("express");
const { myReadFile, mySaveFile } = require("./utils/file_helpers");
const {v4: uuidv4} = require("uuid");


const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log("-->",new Date(),req.method, req.url); //middleware
    next();
});

app.get("/api/v1/products", async (req, res) => {
    const products = await myReadFile("./data.json");
    res.json(products);
});

app.post("/api/v1/products", async (req, res) => {
    const data = req.body;
    newId = uuidv4();
    data.id = newId;
    console.log(data);
    const products = await myReadFile("./data.json");
    products.push(data);
    await mySaveFile("./data.json", products);
});

// dynamic route

app.patch("/api/v1/products/:productId", async (req, res)=>{
    const {productId} = req.params;
    const data = req.body;

    const products = await myReadFile("./data.json");
    const idx = products.findIndex((elem)=>{
        return elem.id === productId;
    });

    if(idx===-1){
        res.status(400);
        res.json({
            isSuccess: false,
            message: "Invalid product id"
        });
    }

    const oldObj = products[idx];
    products[idx] = {...oldObj, ...data};

    mySaveFile("./data.json", products);
    res.status(200);
    res.json({
        isSuccess: true,
        message: "Product updated",
        data: {
            product: products[idx],
        },
    });

})

app.delete("/api/v1/products/:productId", async (req, res)=>{
    const {productId} = req.params;
    const data = req.body;

    const products = await myReadFile("./data.json");
    const idx = products.findIndex((elem)=>{
        return elem.id === productId;
    });

    if(idx===-1){
        res.status(400);
        res.json({
            isSuccess: false,
            message: "Invalid product id"
        });
    }

    products.splice(idx, 1);

    mySaveFile("./data.json", products);
    res.status(204);
    res.json({
        isSuccess: true,
        message: "Product updated",
        data: {}
    });

})

app.listen(2900, ()=>{
    console.log("--------server started-------");
})