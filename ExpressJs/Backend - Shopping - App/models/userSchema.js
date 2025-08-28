const mongoose = require("mongoose");   
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, trim: true }, 
    password: { type: String, required: true, trim: true },
    username: { type: String,  trim: true },
    phone: { type: String,  trim: true },
    address: {
        street: { type: String,  trim: true },
        city: { type: String,  trim: true },
        state: { type: String,  trim: true },
        zipCode: { type: String,  trim: true }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    profilepicture: {
        type: String,
        
    },
    dateofbirth: { type: Date },
}); 

const UserModel = model("User", userSchema);

module.exports = { UserModel };

