const express = require('express');
const router = express.Router();
let productController = require('../controller/productController.js');

router.get('/', productController.index);

router.get('/agregar-producto', productController.productAdd);

router.get('/carrito', productController.productCart);

router.get('/detalle/:id', productController.productDetail);

module.exports = router;


