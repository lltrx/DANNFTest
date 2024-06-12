const express = require("express");
const verifyLogin = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";

verifyLogin.post("/verify-login", async (req, resp) => {
  const { email, code } = req.body;
  if (email && code) {
    const userEmail = email.toLowerCase();
    let user = await User.findOne({ email: userEmail });
    if (!user) {
      console.log("No user found with email:", email);
      return resp.send({ message: "No user found with this email" });
    }

    if (user.confirmationCode === parseInt(code)) {
      user.confirmationCode = undefined;
      await user.save();
      user = user.toObject();
      delete user.confirmationCode;
      jwt.sign({ user }, jwtSecret, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          console.error("Error generating token:", err);
          return resp.send({ message: "Error in generating token" });
        }
        return resp.send({ user, auth: token });
      });
    } else {
      console.log("Invalid confirmation code provided:", code);
      return resp.send({ message: "Invalid confirmation code" });
    }
  } else {
    console.log("Missing email or code in request body");
    return resp.send({ message: "Please enter email and confirmation code" });
  }
});

module.exports = { verifyLogin };
