const db = require("../config/db.config");
const User = db.user;

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "content cannot be empty",
    });
  }

  User.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        return res.status(401).send({
          message: "User already exist",
        });
      } else {
        
        const user = new User({
          firstName: req.body.firstName,
          surName: req.body.surName,
          otherName: req.body.otherName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          gender:req.body.gender,
          birthDate: req.body.birthDate,
          address: req.body.address,
          examType:req.body.examType,
          examCenter: req.body.examCenter,
          examDate: req.body.examDate
        });

        user.save().then((data) => {
          if (data) {
            return res.status(200).send({
              data,
              message:"Saved Successfully"
            });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};
