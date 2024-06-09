const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect("mongodb://localhost/mern-stack-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//send a hello world message
app.get("/", (req, res) => {
  res.send("Hello world!");
});
