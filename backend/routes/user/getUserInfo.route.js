const express = require("express");
const getUserInfo = express();
const User = require("../../db/User");
const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";

getUserInfo.get("/userInfo", async (req, resp) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return resp.status(401).send({ message: "No token provided" });
    }

    const decodedToken = jwt.verify(token, jwtSecret);
    const userId = decodedToken.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return resp.status(404).send({ message: "User not found" });
    }

    const userInfo = {
      _id: user._id,
      email: user.email,
      name: user.name,
      nationalIdNumber: user.nationalIdNumber,
      phoneNumber: user.phoneNumber,
      numberOfMotorBikes: user.numberOfMotorBikes,
    };

    return resp.send({ user: userInfo });
  } catch (error) {
    console.error("Error retrieving user information:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { getUserInfo };
