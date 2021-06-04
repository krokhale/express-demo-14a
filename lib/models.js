const {Sequelize, DataTypes, Model} = require('sequelize');
// ORM
const {sequelize} = require('../lib/db');

class User extends Model {
}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});



sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    User
};
