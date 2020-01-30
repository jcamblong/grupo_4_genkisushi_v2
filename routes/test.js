const express = require('express');
const router = express.Router();
let testController = require('../controller/testController.js');

/******dejo solo la ruta y agrego el controller *******/
router.get('/', testController.index);
router.post('/', testController.elegirColor);


module.exports = router;
