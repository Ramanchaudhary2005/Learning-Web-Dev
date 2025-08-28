const mongoose = require("mongoose");

const createProductValidator = (req, res, next) => {
    try{
        const { title, price } = req.body;
        if (!title || !price) {
            return res.status(400).json({ error: "Name and price are required" });
        }
        next();
    }
    catch(err){
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getProductValidator = (req, res, next) => {
    const productId = req.params.productId.trim();
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
            isSuccess: false,
            message: "Invalid product id",
            data: {},
        });
    }
    next();
};

module.exports = { createProductValidator, getProductValidator };