const { UserModel } = require("../../../models/userSchema");



const userSignupController = async (req, res) => { // <-- fixed order
    try {
        const { email, password} = req.body;
        const newUser = await UserModel.create({
            email,
            password,
        });

        res.status(201).json({ // <-- fixed typo
            isSuccess: true,
            message: "User signed up successfully",
            data: {
                user: newUser
            }
        });        
    }
    catch(err){
        console.log('---error in user signup---', err.message);

        if(err.name === "ValidationError") {
            return res.status(400).json({
                isSuccess: false,
                message: "Validation Error",
                data: {
                    errors: err.errors
                }
            });
        }

        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
};

module.exports = { userSignupController  };