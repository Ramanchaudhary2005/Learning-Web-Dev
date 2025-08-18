const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const otpSchema = new Schema({
    email: { type: String, required: true, trim: true }, // removed unique: true
    otp: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now, expires: '5m' }, // OTP expires in 5 minutes
});

const OtpModel = model("Otp", otpSchema);
module.exports = { OtpModel };

