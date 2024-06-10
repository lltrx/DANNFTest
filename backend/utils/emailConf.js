const jwt = require("jsonwebtoken");
const jwtSecret = "goodbridgeuwu";
const nodemailer = require("nodemailer");

function sendConfirmationEmail(address, confirmationCode) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.imitate.email',
    port: 587,
    secure: false,
    auth: {
      user: "euE_McpQ6kajOAGQA_oOfg",
      pass: "pjlonCvmAn5mOvKpoTJq",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const mail = address;
    transporter.sendMail({
      from: '"Confirmation Email" ',
      to: mail,
      subject: "Email Confirmation ✔",
      text: `Your confirmation code is: ${confirmationCode}`,
      html: `Your confirmation code is: <strong>${confirmationCode}</strong>`,
    });
  } catch (e) {
    console.log(e);
  }
}

function generateConfirmationCode() {
  // Generate a random 6-digit confirmation code
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = {
  sendConfirmationEmail,
  generateConfirmationCode,
};
