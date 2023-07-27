const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    password: process.env.PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });

const sendEmail = (req, res) => {
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `${req.body.examType} Application`,
    text: "This is a test from sendMail Transporter",
    html: ""
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      return data
      //console.log(data);
    }
  });
};

module.exports = sendEmail;
