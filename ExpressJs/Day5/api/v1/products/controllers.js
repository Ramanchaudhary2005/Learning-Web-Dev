const { ProductModel } = require("../../../models/productSchema.js");

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
       
        const product = await ProductModel.find()
         
        res.status(200).json({
            isSuccess: true,
            message: "Product retrieved",
            data: {
                products: product,
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

// List product controller

const listProductController = async (req, res) => {
    try {
        const { q = "" } = req.query;
        const limit = parseInt(req.query.limit) || 5;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * limit;

        // sort field & order (default: price descending)
        const sortField = req.query.sort || "price";
        const sortOrder = req.query.order === "asc" ? 1 : -1; // default = descending

        const searchRegex = new RegExp(q, "i");

        // Count all results
        const totalProducts = await ProductModel.countDocuments({
            $or: [{ title: searchRegex }, { description: searchRegex }]
        });

        const products = await ProductModel.find({
            $or: [{ title: searchRegex }, { description: searchRegex }]
        })
        .skip(skip)
        .limit(limit)
        .sort({ [sortField]: sortOrder }); // <-- apply sorting

        res.status(200).json({
            isSuccess: true,
            message: "Products retrieved",
            data: { products, total: totalProducts, limit, page }
        });
    } catch (err) {
        console.log('---error in getting products---', err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
};



module.exports = {createProductController, getProductController, updateProductController, deleteProductController, listProductController}