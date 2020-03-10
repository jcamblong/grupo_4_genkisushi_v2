const express = require('express');
const router = express.Router();
let indexController = require('../controller/indexController.js');

/******dejo solo la ruta y agrego el controller *******/
router.get('/', indexController.index);
router.get('/contact', indexController.contact);
router.get('/about-us', indexController.about);

module.exports = router;
