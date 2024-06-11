const express = require("express");
const login = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";
const {
  sendConfirmationEmail,
  generateConfirmationCode,
} = require("../../utils/emailConf");

login.post("/login", async (req, resp) => {
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase();
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return resp.send({ message: "No user found with this email" });
    }

    if (!user.verifiedAccount) {
      return resp.send({ message: "Please verify your account first" });
    }

    if (!user.billStatus) {
      return resp.send({
        message: "Please upload your bill to complete registration",
      });
    }

    const confirmationCode = generateConfirmationCode();
    user.confirmationCode = confirmationCode;
    await user.save();
    sendConfirmationEmail(user.email, confirmationCode);
    return resp.send({ message: "Confirmation code sent to your email" });
  } else {
    return resp.send({ message: "Please enter email" });
  }
});

module.exports = { login };
