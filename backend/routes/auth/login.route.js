const express = require("express");
const login = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";

login.post("/login", async (req, resp) => {
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase();
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return resp.send({ message: "No user found with this email" });
    }
    if (user.verifiedAccount) {
      user = user.toObject();
      delete user.password;
      delete user.confirmationCode;
      jwt.sign({ user }, jwtSecret, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          return resp.send({ message: "Error in generating token" });
        }
        return resp.send({ user, auth: token });
      });
    } else {
      return resp.send({ message: "Please verify your account first" });
    }
  } else {
    return resp.send({ message: "Please enter email" });
  }
});

module.exports = { login };
