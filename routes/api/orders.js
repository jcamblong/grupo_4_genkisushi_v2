var express = require("express");
var router = express.Router();
let ordersController = require("../../controller/api/ordersController.js");

router.get("/", ordersController.list);

router.get("/recent", ordersController.recent);


module.exports = router;
