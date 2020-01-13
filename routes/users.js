var express = require('express');
var router = express.Router();
let usersController = require('../controller/usersController.js');
let {check, validationResult, body} = require('express-validator');


router.get('/login', usersController.form);

router.post('/login', [
  check('email').isEmail().withMessage('El email ingresado no es valido'),
  check('password').isLength({min:6, max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres')
], usersController.login);

router.get('/register', usersController.register);

router.post('/register', [
  check('email').isEmail().withMessage('Email invallido'),
  check('password').isLength({min:6, max:10}).withMessage('El password debe tener entre 6 y 10 caracteres')
], usersController.saveUser);

module.exports = router;
