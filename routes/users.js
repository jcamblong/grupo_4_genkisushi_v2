var express = require('express');
var router = express.Router();
let usersController = require('../controller/usersController.js');
let {check, validationResult, body} = require('express-validator');



/* GET users listing. */
router.get('/login', usersController.form);

router.post('/login', [
  check('email').isEmail().withMessage('El email ingresado no es valido'),
  check('password').isLength({min:6, max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres')
], usersController.login);

router.get('/registro', usersController.register);

router.post('/registro', [
  check('email').isEmail().withMessage('El email ingresado no es valido'),
  check('password').isLength({min:6, max:12}).withMessage('El password debe tener entre 6 y 8 caracteres')
], function(req, res){
  let result = validationResult(req)
  if(!result.isEmpty()){
    res.redirect(301,'/users/registro', {errors: result.errors, data: req.body})
  } res.redirect(301, '/users/login')
});

module.exports = router;
