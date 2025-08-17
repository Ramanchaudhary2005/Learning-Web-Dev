const validateOtpMiddleware = async (req, res, next) => {
    try{
        const {email, otp} = req.body;
        
    }
    catch(err){
        console.error("Error in validateOtpController:", err);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
};

module.exports = { validateOtpMiddleware };