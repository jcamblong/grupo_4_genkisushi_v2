var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Genki Sushi' });
});

router.get('/agregar-producto', function(req, res) {
  res.render('productAdd', { title: 'Genki Sushi: Agregar Producto' });
});

router.get('/carrito', function(req, res) {
  res.render('productCart', { title: 'Genki Sushi: Carrito' });
});

router.get('/productos', function(req, res) {
  res.render('productDetail', { title: 'Genki Sushi: Productos' });
});

router.get('/registro', function(req, res) {
  res.render('register', { title: 'Genki Sushi: Registración' });
});

module.exports = router;
