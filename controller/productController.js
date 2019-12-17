const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController ={
    'index': function(req, res) {
        res.render('products', {products: products});
    },
    'productAdd': function(req, res) {
        res.render('productAdd');
    },
    'productCart': function(req, res) {
            res.render('productCart');
    },

    'productDetail': function(req, res) {
            res.render('productDetail',  {products: products});
    }
};

module.exports = productController;

