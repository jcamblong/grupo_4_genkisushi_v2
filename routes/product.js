const express = require('express');
const router = express.Router();
let productController = require('../controller/productController.js');

/* GET - All products */
router.get('/', productController.index); 
/* GET - Product detail */
router.get('/detalle/:id', productController.productDetail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.productAdd); /* GET - Form to create */
router.post('/create', productController.store); /* POST - Store in DB */


//

//EDIT Product by id | CGR
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);

//DELETE Product by id  | CGR
router.delete('/delete/:id', productController.destroy); 


router.get('/carrito', productController.productCart);


module.exports = router;


