const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/db.config");
db.sequelize.sync({ force: false }).then(() => {});
app.get("/", (req, res) => {
  return res.json({ message: "Welcome" });
});

app.use(express.static(path.join(__dirname, "uploads")));

require("./routes/user.route")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = { app };
