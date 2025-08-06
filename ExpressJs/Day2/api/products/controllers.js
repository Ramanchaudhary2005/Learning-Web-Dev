const createProductController = async (req,res) =>{
    try{
        const data = req.body;
        saveProduct(data);
        res.status(201).json({
            isSuccess: true,
            message: "product Created"
        });
    }
    catch(err){
        console.log("---> Error in createProductController", err.message);
        res.status(500).json({isSuccess: false, message: "Internal server Error"})
    }
}

module.exports = {createProductController};