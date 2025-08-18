const { use } = require("react");

const userSignupValidator = (req, res, next)=>{
    try{
        const {email, password, otp} = req.body;

        if(!email || !password || !otp){
            return res.status(400).json({
                isSuccess: false,
                message: "Email and password are required",
                data: {},
            });
        }

        // vaild email using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid email format",
                data: {},
            });
        }
        // vaild password at least 8 charcter one is big letter, one small letter, one number and one special charcter
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            return res.status(400).json({
                isSuccess: false,
                message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                data: {},
            });
        }
        next(); // Proceed to the next middleware/controller if validation passes
    }
    catch(err){
        console.error("Error in userSignupValidator:", err);
        throw err; // Re-throw the error for further handling
    }
}

const userLoginValidator = (req, res, next) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                isSuccess: false,
                message: "Email and password are required",
                data: {},
            });
        }

        // vaild email using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid email format",
                data: {},
            });
        }
        // vaild password at least 8 charcter one is big letter, one small letter, one number and one special charcter
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            return res.status(400).json({
                isSuccess: false,
                message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                data: {},
            });
        }
        next(); // Proceed to the next middleware/controller if validation passes
    }
    catch(err){
        console.error("Error in userSignupValidator:", err);
        throw err; // Re-throw the error for further handling
    }
};

module.exports = { userSignupValidator, userLoginValidator };