const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const middlewares = require('../middleware/middlewares');


router.get('/users/isAdminID/:adminId' , controllers.getAllUsers);
router.post('/register', middlewares.VerifyEmail, controllers.registerUser);
router.delete('/users/isAdminID/:adminId/:id', controllers.deleteUser);
router.post('/login', middlewares.VerifyLogin, controllers.loginUser);
router.put('/users/:id', controllers.uptadeUser);

module.exports = router