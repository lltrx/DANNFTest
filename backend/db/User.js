const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  confirmationCode: Number,
  name: String,
  nationalIdNumber: Number,
  verifiedAccount: { type: Boolean, default: false },
  phoneNumber: Number,
  numberOfMotorBikes: Number,
  bill: Object,
  billStatus: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
