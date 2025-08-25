const { UserModel } = require("../../../models/userSchema");
const { OtpModel } = require("../../../models/otpSchema");
const jwt = require("jsonwebtoken");

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

    // user accorunt already exists
    if (err.code === 11000) {
      return res.status(409).json({
        isSuccess: false,
        message: "User already exists with this email",
        data: {},
      });
    }

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

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        isSuccess: false,
        message: "User not found",
        data: {},
      });
    }
    // 2. Check password match
    if (user.password !== password) {
      return res.status(401).json({
        isSuccess: false,
        message: "Invalid password",
        data: {},
      });
    }
    // 3. Return user data (excluding password)

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_SECRET, { expiresIn: 60*60*24 }, (err, token) => {
      if (err) {
        console.log("Error generating token", err);
        return res.status(500).json({
          isSuccess: false,
          message: "Error generating token",
          data: {},
        });
      }
      // Send token in response
      res.setHeader('Authorization', `Bearer ${token}`);
    })

    console.log("Generated Token:", token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Use secure cookies in production
      sameSite: "None",
      
    });

    const { password: _, ...userData } = user.toObject();
    res.status(200).json({
      isSuccess: true,
      message: "User logged in successfully ✅",
      data: { user: userData },
    });
  } catch (err) {
    console.log("---error in user login---", err.message);
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = { userSignupController , userLoginController};
