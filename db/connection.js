const Sequelize = require("sequelize");
require('dotenv').config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

sequelize.authenticate().then(() => {
  console.log('Conected');
}).catch(err => {
  console.error('Error to connect', err);
});

module.exports = sequelize;
