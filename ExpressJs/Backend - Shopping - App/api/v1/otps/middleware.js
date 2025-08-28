const { OtpModel } = require("../../../models/otpSchema.js");

const validateOtpMiddleware = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        // Find the latest OTP for the email
        const otpDocs = await OtpModel.find({ email }).sort({ createdAt: -1 });
        if (!otpDocs || otpDocs.length === 0) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid OTP or OTP expired",
                data: {},
            });
        }

        const latestOtpDoc = otpDocs[0];
        // Compare as string to avoid type issues
        if (String(latestOtpDoc.otp) !== String(otp)) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid OTP",
                data: {},
            });
        }

        // Optionally: check expiry (if you want to be extra sure)
        // if (latestOtpDoc.createdAt.getTime() + 5 * 60 * 1000 < Date.now()) {
        //     return res.status(400).json({
        //         isSuccess: false,
        //         message: "OTP expired",
        //         data: {},
        //     });
        // }

        next(); // OTP is valid, proceed to the next middleware or route handler
    } catch (err) {
        console.error("Error in validateOtpController:", err);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
};

module.exports = { validateOtpMiddleware };