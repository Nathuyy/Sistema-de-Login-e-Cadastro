const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const middlewares = require('../middleware/middlewares');


router.get('/' , controllers.Void);
router.post('/register',middlewares.VerifyEmail, controllers.register);
router.post('/login', controllers.login);

module.exports = router