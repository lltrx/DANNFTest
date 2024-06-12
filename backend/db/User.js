const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  confirmationCode: Number,
  name: String,
  nationalIdNumber: String,
  verifiedAccount: { type: Boolean, default: false },
  phoneNumber: Number,
  numberOfMotorBikes: Number,
  totalAmount: { type: Number, default: 0 },
  bill: Object,
  billStatus: { type: Boolean, default: false },
  role: { type: String, default: "user" },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
