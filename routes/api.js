var express = require('express');
var router = express.Router();
const {User} = require('../lib/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('responding from the api router');
});

// RESTful endpoints
// Users
// Created - POST http://localhost:3000/api/v1/users
// Deleted - DELETE http://localhost:3000/api/v1/users/12 - delete user with id = 12
// Updated - PUT http://localhost:3000/api/v1/users/12 - update the user with the id = 12
// Listed - GET http://localhost:3000/api/v1/users
// CRUD operations


// Created - POST http://localhost:3000/api/v1/users
router.post('/users', async function(req, res, next) {
    console.log('req.body is', req.body)
    let newUser = await User.create(req.body)
    // write some code here to create a row in the users table
    res.json(newUser)
});

// Listed - GET http://localhost:3000/api/v1/users
router.get('/users', async function(req, res, next) {
    let users = await User.findAll()
    // write some code here to create a row in the users table
    res.json(users)
});

// Deleted - DELETE http://localhost:3000/api/v1/users/12 - delete user with id = 12
router.delete('/users/:id', async function(req, res, next) {
    let user = await User.destroy({where: {id: req.params.id}});
    // write some code here to create a row in the users table
    res.json(user)
});


// Created - PUT http://localhost:3000/api/v1/users/:id
router.put('/users/:id', async function(req, res, next) {
    console.log('req.body is', req.body)
    console.log('req.params is', req.params)
    let updatedUser = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    // // write some code here to create a row in the users table
    res.json(updatedUser)
    // res.json(newUser)
});





module.exports = router;
