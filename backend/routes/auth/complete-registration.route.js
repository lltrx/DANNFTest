const express = require("express");
const completeRegistration = express();
const User = require("../../db/User");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

completeRegistration.post(
  "/complete-registration",
  upload.single("bill"),
  async (req, resp) => {
    const { email, name, nationalIdNumber, phoneNumber, numberOfMotorBikes } =
      req.body;
    if (
      !email ||
      !name ||
      !nationalIdNumber ||
      !phoneNumber ||
      !numberOfMotorBikes
    ) {
      return resp.status(400).send({
        message:
          "Please provide email, name, nationalIdNumber, phoneNumber, and numberOfMotorBikes",
      });
    }
    const nationalIdNumberString = String(nationalIdNumber);
    if (nationalIdNumberString.length !== 10) {
      return resp
        .status(400)
        .send({ message: "National ID number must be 10 digits long" });
    }
    if (!/^[\u0600-\u06FF\w]+$/.test(nationalIdNumberString)) {
      return resp
        .status(400)
        .send({ message: "National ID number must contain only digits and Arabic characters" });
    }
    if (name.length < 2 || name.length > 50) {
      return resp
        .status(400)
        .send({ message: "Name must be between 2 and 50 characters long" });
    }
    if (!/^[\u0600-\u06FF\w\s]+$/.test(name)) {
      return resp.status(400).send({
        message:
          "Name can only contain letters, digits, underscores, and spaces (both English and Arabic characters)",
      });
    }
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return resp.status(404).send({ message: "User not found" });
      }
      user.name = name;
      user.nationalIdNumber = nationalIdNumberString;
      user.phoneNumber = phoneNumber;
      user.numberOfMotorBikes = numberOfMotorBikes;
      if (req.file) {
        user.bill = req.file.filename;
        user.billStatus = true;
      }
      await user.save();
      return resp.send({
        message: "Registration completed successfully",
        user: user.toObject(),
      });
    } catch (error) {
      console.error("Error completing registration:", error);
      return resp.status(500).send({ message: "Internal server error" });
    }
  }
);

module.exports = { completeRegistration };