var express = require('express');
var router = express.Router();
let usersController = require('../controller/usersController.js');
let {check, validationResult, body} = require('express-validator');


router.get('/login', usersController.loginForm);

router.post('/login', [
  check('email').isEmail().withMessage('El email ingresado no es valido'),
  check('password').isLength({min:6, max:10}).withMessage('La contraseña debe tener entre 6 y 10 caracteres'),

], usersController.login);

router.get('/register', usersController.registerForm);

router.post('/register', [
  check('nombre').isAlpha().withMessage('Debes ingresar tu nombre'),
  check('apellido').isAlpha().withMessage('Debes ingresar tu apellido'),
  check('email').isEmail().withMessage('Email invallido'),
  check('password').isLength({min:6, max:10}).withMessage('El password debe tener entre 6 y 10 caracteres'),
  check('calle').isLength().withMessage('Debes ingresar un calle'),
  check('altura').isLength().withMessage('Debes ingresar un altura'),
  check('telefono').isNumeric().isLength({min:10, max:10}).withMessage('Formato: Codigo de area sin cero + Numeros sin espacios ni guiones')
], usersController.saveUser);

module.exports = router;
