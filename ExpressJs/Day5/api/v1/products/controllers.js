const { ProductModel } = require("../../../models/productSchema");

const createProductController = async(req, res)=>{
    try{
        const data = req.body;
        const newProduct = await ProductModel.create(data);

        res.status(201);
        res.json({
            isSuccess: true,
            message: "Product created",
        })
    }
    catch{
        console.log('---error in createingproduct---', err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        })
    }
};

module.exports = {createProductController}