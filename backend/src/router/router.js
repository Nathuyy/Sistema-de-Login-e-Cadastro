const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const { middlewareCheckId, VerifyLogin, VerifyEmail } = require('../middleware/middlewares');

router.get('/users/:id', middlewareCheckId, controllers.getAllUsers);
router.post('/register', VerifyEmail, controllers.registerUser);
router.delete('/removerproduto/:id/remover/:idproduto', middlewareCheckId, controllers.removerProduto);
router.post('/login', VerifyLogin, controllers.loginUser);
router.put('/users/:id', controllers.uptadeUser);

module.exports = router;
