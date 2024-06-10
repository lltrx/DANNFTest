const express = require("express");
const completeRegistration = express();
const User = require("../../db/User");

completeRegistration.post("/complete-registration", async (req, resp) => {
  const { email, name, nationalIdNumber } = req.body;

  if (!email || !name || !nationalIdNumber) {
    return resp
      .status(400)
      .send({ message: "Please provide email, name, and nationalIdNumber" });
  }

  const nationalIdNumberString = String(nationalIdNumber);

  if (nationalIdNumberString.length !== 10) {
    return resp
      .status(400)
      .send({ message: "National ID number must be 10 digits long" });
  }

  if (!/^[0-9]+$/.test(nationalIdNumberString)) {
    return resp
      .status(400)
      .send({ message: "National ID number must contain only digits" });
  }

  if (name.length < 2 || name.length > 50) {
    return resp
      .status(400)
      .send({ message: "Name must be between 2 and 50 characters long" });
  }

  if (!/^[a-zA-Z0-9_\s]+$/.test(name)) {
    return resp
      .status(400)
      .send({
        message:
          "Name can only contain letters, digits, underscores, and spaces",
      });
  }

  try {
    const user = await User.findOneAndUpdate(
      { email: email },
      { name: name, nationalIdNumber: nationalIdNumberString },
      { new: true }
    );

    if (!user) {
      return resp.status(404).send({ message: "User not found" });
    }

    return resp.send({
      message: "Registration completed successfully",
      user: user.toObject(),
    });
  } catch (error) {
    console.error("Error completing registration:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { completeRegistration };
