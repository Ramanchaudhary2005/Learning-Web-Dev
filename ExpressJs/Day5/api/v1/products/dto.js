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

module.exports = { createProductValidator };