

module.exports = (sequelize, DataTypes) => { 
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING, 
      required: true,
    },
    surName: {
      type: DataTypes.STRING,
      required: true,
    },
    otherName: {
      type: DataTypes.STRING,
      
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      
    },
    birthDate: {
      type: DataTypes.STRING,
      
    },
    gender: {
      type: DataTypes.STRING,
      
    },
    address: {
      type: DataTypes.STRING,
      
    },
    examType: {
      type: DataTypes.STRING,
      required: true,
    },
    examCenter: {
      type: DataTypes.STRING,
      required: true,
    },
    examDate: {
      type: DataTypes.STRING,
      required: true,
    },
  });

  return User
};


