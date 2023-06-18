const Sequelize = require("sequelize");
const env = require("../config/evironments");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
  logging: true,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.user = require("../models/user.model.js")(sequelize, Sequelize);



//db.project.belongsTo(db.projectCategory)

module.exports = db;
