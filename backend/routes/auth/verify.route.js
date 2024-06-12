const express = require("express");
const verify = express();
const User = require("../../db/User");

verify.post("/verify", async (req, resp) => {
  const { email, code } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return resp.status(400).send({ message: "User not found" });
  }

  if (user.confirmationCode !== parseInt(code)) {
    return resp.status(400).send({ message: "Invalid confirmation code" });
  }

  user.confirmationCode = undefined;
  user.verifiedAccount = true;

  await user.save();

  return resp.send({ message: "Email verified successfully" });
});

module.exports = { verify };
