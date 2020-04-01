var express = require("express");
var router = express.Router();
let productsController = require("../../controller/api/productsController.js");

router.get("/", productsController.list);

router.get("/categories", productsController.categories);

router.get("/last", productsController.last);

router.get("/:id", productsController.find);



module.exports = router;
