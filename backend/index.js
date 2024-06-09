const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("./db/config");

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
