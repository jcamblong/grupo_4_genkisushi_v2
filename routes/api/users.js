var express = require("express");
var router = express.Router();
let usersController = require("../../controller/api/usersController.js");

router.get("/", usersController.list);

router.get("/:id", usersController.find);


module.exports = router;
