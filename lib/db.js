






const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/express-cohort14a', {logging: false});
module.exports = {sequelize};
