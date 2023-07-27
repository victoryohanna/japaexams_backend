

module.exports = (app) => {
  
  const users = require("../controllers/user.controller.js");
  const sendEmail = require("../helpers/mailer.js");

  app.post("/register", users.create); 
  app.get("/users", users.findAll);
  app.get("/users/:id", users.findUserById);
  app.put("/user/update/:id", users.updateUser); 
};
