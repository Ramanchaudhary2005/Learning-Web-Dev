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

const getProductController = async(req, res)=>{
    try{
        const productId = req.params.productId.trim(); // <-- trim here
        const product = await ProductModel.findById(productId);

        if(!product){
            return res.status(404).json({
                isSuccess: false,
                message: "Product not found",
                data: {},
            })
        }

        res.status(200).json({
            isSuccess: true,
            message: "Product retrieved",
            data: {
                product
            }
        })
    }
    catch(err){
        console.log('---error in getting product---', err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        })
    }
};

const updateProductController = async(req, res)=>{
    try{
        const data = req.body;
        const productId = req.params.productId.trim(); // <-- trim here
        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, data, {
            new: true,
            runValidators: true,
        });

        res.status(201);
        res.json({
            isSuccess: true,
            message: "Product updated",
            data:{
                product: updatedProduct,
            }
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

const deleteProductController = async(req, res)=>{
    try{
        const productId = req.params.productId.trim(); // <-- trim here
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if(!deletedProduct){
            return res.status(404).json({
                isSuccess: false,
                message: "Product not found",
                data: {},
            })
        }

        res.status(200).json({
            isSuccess: true,
            message: "Product deleted",
            data: {
                product: deletedProduct
            }
        })
    }
    catch(err){
        console.log('---error in deleting product---', err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        })
    }
};

module.exports = {createProductController, getProductController, updateProductController, deleteProductController}