const express = require("express");
const verifyLogin = express();
const User = require("../../db/User");

verifyLogin.post("/verify-login", async (req, resp) => {
  if (req.body.email && req.body.confirmationCode) {
    req.body.email = req.body.email.toLowerCase();
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return resp.send({ message: "No user found with this email" });
    }
    if (user.confirmationCode === req.body.confirmationCode) {
      user.verifiedAccount = true;
      user.confirmationCode = undefined;
      await user.save();
      return resp.send({ message: "Login verified successfully" });
    } else {
      return resp.send({ message: "Invalid confirmation code" });
    }
  } else {
    return resp.send({ message: "Please enter email and confirmation code" });
  }
});

module.exports = { verifyLogin };
