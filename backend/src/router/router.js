const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const middlewares = require('../middleware/middlewares');


router.get('/users' , controllers.getAllUsers);
router.post('/register', controllers.registerUser);
router.delete('/users/:id', controllers.deleteUser);
// router.post('/login', controllers.login);

module.exports = router