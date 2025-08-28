const { OtpModel } = require("../../../models/otpSchema");
const { sendOtpEmail } = require("../../../utils/emailhelper");

const sendOtpController = async (req, res) => {
    try {
        const { email } = req.body;

        // generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        await sendOtpEmail(email, otp); // <-- this function should be defined to send the OTP via email

        // save in DB
        await OtpModel.create({ email, otp });

        console.log("Generated OTP:", otp); // now otp exists

        // send success response
        return res.status(201).json({
            isSuccess: true,
            message: "OTP sent successfully",
        });
    } catch (err) {
        console.error("Error in sendOtpController:", err);
        return res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
};

module.exports = { sendOtpController };
