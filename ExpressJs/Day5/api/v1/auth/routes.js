const express = require("express");
const { userSignupController } = require("./controllers");
const { userSignupValidator } = require("./dto");

const authRouter = express.Router();

authRouter.post("/signup", userSignupValidator,userSignupController);

module.exports = { authRouter };