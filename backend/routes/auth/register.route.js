const {
  sendConfirmationEmail,
  generateConfirmationCode,
} = require("../../utils/emailConf");
const express = require("express");
const register = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";
const validator = require("validator");

register.post("/register", async (req, resp) => {
  if (!req.body.email) {
    return resp.status(400).send({ message: "Please provide your email" });
  }
  if (!validator.isEmail(req.body.email)) {
    return resp.status(400).send({ message: "Please enter a valid email" });
  }
  req.body.email = req.body.email.toLowerCase();
  let emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return resp.status(400).send({ message: "Email already exists" });
  }

  const confirmationCode = generateConfirmationCode();

  let user = new User({
    ...req.body,
    confirmationCode: confirmationCode,
  });

  let result = await user.save();
  user = result.toObject();

  try {
    await sendConfirmationEmail(user.email, confirmationCode);
    jwt.sign({ result }, jwtSecret, { expiresIn: "4h" }, (err, token) => {
      if (err) {
        return resp.status(401).json({ message: "Error in generating token" });
      }
      return resp.send({ user, auth: token });
    });
  } catch (error) {
    console.error("Error sending confirmation code:", error);
    return resp
      .status(500)
      .json({ message: "Error sending confirmation code" });
  }
});

module.exports = { register };
