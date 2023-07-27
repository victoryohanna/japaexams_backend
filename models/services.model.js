module.exports = (sequelize, Datatypes) => {
  const Service = sequelize.define("services", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fullName: {
      type: Datatypes.STRING,
      required: true,
    },
    email: {
      type: Datatypes.STRING,
      required: true,
    },
    passport: {
      type: Datatypes.BOOLEAN,
    },
    country: {
      type: Datatypes.STRING,
      required: true,
    },
    course: {
      type: Datatypes.STRING,
      required: true,
    },
    course_category: {
      type: Datatypes.STRING,
    },
    prev_exams: {
      type: Datatypes.STRING,
    },
  });

  return Service;
};
