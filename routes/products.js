const express = require("express");
const router = express.Router();
let productController = require("../controller/productController.js");
const path = require("path");
const multer = require("multer");
const userRoute = require("../middlewares/userRoute");
const guestRoute = require("../middlewares/guestRoute");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/img/products");
  },
  filename: function(req, file, cb) {
    cb(null, req.body.name + path.extname(file.originalname));
  }
});
var upload = multer({ storage: storage });

//All products
router.get("/", productController.index);
//By Categories
router.get("/category/:id", productController.categories);
//Product detail
router.get("/detail/:id", productController.productDetail);

/*** CREATE ONE PRODUCT ***/

router.get("/create", productController.productAdd); /* GET - Form to create */
router.post(
  "/create",
  upload.any(),
  productController.store
); /* POST - Store in DB */

//EDIT Product by id | CGR
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", upload.any(), productController.update);

//DELETE Product by id  | CGR
router.delete("/delete/:id", productController.destroy);

//CART
router.get("/checkout/:id", userRoute, productController.productCart);

router.post('/checkout/:id', userRoute, productController.checkout);

module.exports = router;
