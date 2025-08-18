const { UserModel } = require("../../../models/userSchema");
const { OtpModel } = require("../../../models/otpSchema");

const userSignupController = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    // 1. Check OTP in DB
    const existingOtp = await OtpModel.findOne({ email }).sort({ createdAt: -1 });

    if (!existingOtp) {
      return res.status(400).json({
        isSuccess: false,
        message: "No OTP found. Please request a new one.",
        data: {},
      });
    }

    // 2. Check OTP match
    if (existingOtp.otp !== otp) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid OTP",
        data: {},
      });
    }

    // 3. Check OTP expiry
    if (existingOtp.expiresAt < new Date()) {
      return res.status(400).json({
        isSuccess: false,
        message: "OTP expired. Please request a new one.",
        data: {},
      });
    }

    // 4. Create user directly without hashing password
    const newUser = await UserModel.create({
      email,
      password, // ⚠️ plain password
    });

    // 5. Delete OTP after success
    await OtpModel.deleteMany({ email });

    res.status(201).json({
      isSuccess: true,
      message: "User signed up successfully ✅",
      data: { user: newUser },
    });
  } catch (err) {
    console.log("---error in user signup---", err.message);

    if (err.name === "ValidationError") {
      return res.status(400).json({
        isSuccess: false,
        message: "Validation Error",
        data: { errors: err.errors },
      });
    }

    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = { userSignupController };
