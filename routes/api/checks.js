var express = require("express");
var router = express.Router();
let checksController = require("../../controller/api/checksController.js");

router.get('/:email', checksController.findByEmail);


module.exports = router;
