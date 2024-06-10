const jwt = require("jsonwebtoken");
const jwtSecret = "secretkey";

function verifyToken(req, resp, next) {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, jwtSecret, (err, valid) => {
      if (err) {
        resp.status(401).json({
          message: "Invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    resp.status(401).json({
      message: "No token provided",
    });
  }
}

module.exports = {
  verifyToken,
};
