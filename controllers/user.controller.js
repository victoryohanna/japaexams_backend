const db = require("../config/db.config");
const sendEmail = require("../helpers/mailer");
const User = db.user;

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "content cannot be empty",
    });
  }

  await User.findOne({ where: { email: req.body.email } })
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
          gender: req.body.gender,
          birthDate: req.body.birthDate,
          address: req.body.address,
          examType: req.body.examType,
          examCenter: req.body.examCenter,
          examDate: req.body.examDate,
        });

        user.save().then((data) => {
          if (data) {
            sendEmail()
            return res.status(200).send({
              data,
              message: "Saved Successfully",
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

exports.findAll = async (req, res) => {
  await User.findAll()
    .then((users) => {
      return res.status(200).json({  
        status: "success",
        data: users,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

exports.findUserById = async (req, res) => {
  await User.findOne({ where: { email: req.body.email } }).then((data) => {
    if (!data) {
      return res.status(400).json({
        message: "User not found",
      });
    } else {
      return res.status(200).json({
        data,
      });
    }
  });
};

exports.updateUser = async (req, res) => {
  // const user = {
  //   firstName: req.body.firstName,
  //   surName: req.body.surName,
  //   otherName: req.body.otherName,
  //   email: req.body.email,
  //   phoneNumber: req.body.phoneNumber,
  //   gender: req.body.gender,
  //   birthDate: req.body.birthDate,
  //   address: req.body.address,
  //   examType: req.body.examType,
  //   examCenter: req.body.examCenter,
  //   examDate: req.body.examDate,
  // };
  // if(!req.boy){
  //   return res.status(401).json({
  //     message: "Request is empty"
  //   })

  await User.update(
    { firstName: req.body.firstName },
    { where: { email: req.body.email } }
  ).then((data) => {
    return data;
  });
  // }
};
