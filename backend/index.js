const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./db/User");

const { register } = require("./routes/auth/register.route");
const { login } = require("./routes/auth/login.route");
const { verify } = require("./routes/auth/verify.route");
const {
  completeRegistration,
} = require("./routes/auth/complete-registration.route");
const { verifyLogin } = require("./routes/auth/verifyLogin.route");

require("./db/config");

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);
app.post("/verify", verify);
app.post("/complete-registration", completeRegistration);
app.post("/verify-login", verifyLogin);

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
