var express = require('express');
var router = express.Router();
let usersController = require('../controller/usersController.js');
let {check, validationResult, body} = require('express-validator');
const path = require ('path');
const multer = require ('multer');
const logged = require('../middlewares/loggedMiddleware')

var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'public/img/users')
	},
	filename: function(req,file,cb){
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
})
var upload = multer ({storage:storage})


router.get('/login', usersController.loginForm);

router.post('/login', [
  check('email').isEmail().withMessage('El email ingresado no es valido')
], usersController.login);

router.get('/register', usersController.registerForm);

router.post('/register', upload.any(), [
  check('name')
                .isLength({min:1})
                .withMessage('Debes ingresar tu nombre'),
  check('lastName')
                .isLength({min:1})
                .withMessage('Debes ingresar tu apellido'),
  check('email')
                .isEmail()
                .withMessage('Email invallido'),
  check('password')
                .isLength({min:6, max:10})
                .withMessage('El password debe tener entre 6 y 10 caracteres')
                .custom((value,{req, loc, path}) => {
                  if (value !== req.body.repeatPassword) {
                      // trow error if passwords do not match
                      throw new Error("Las contraseñas no coinciden");
                  } else { return value }
                  }),
  check('repeatPassword')
                .isLength({min:1})
                .withMessage('Debe confirmar la contraseña'),
  check('street')
                .isLength({min:1})
                .withMessage('Debes ingresar un calle'),
  check('stNumber')
                .isLength({min:1})
                .withMessage('Debes ingresar un altura'),
  check('phone')
                .isNumeric()
                .isLength({min:10, max:10})
                .withMessage('Formato: Codigo de area sin cero + Numeros sin espacios ni guiones')
], usersController.saveUser);

router.get('/user', logged, usersController.user);

module.exports = router;
