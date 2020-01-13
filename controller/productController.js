const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController ={
    'index': function(req, res) {
        res.render('products', {products: products});
    },
    'productDetail': function(req, res) {
        let product = products.find(function (p) {
			return p.id == req.params.id
		})
        res.render('productDetail',  {product: product});
    },
    'productAdd': function(req, res) {
        res.render('productAdd');
    },
    'store': function(req, res){
        let products = fs.readFileSync(productsFilePath , {encoding: 'utf-8'});
		products = JSON.parse(products);
		let newproduct = req.body;
		products.push(newproduct);
		products = JSON.stringify(products);
		fs.writeFileSync(productsFilePath , products);
		res.redirect('/products/create');
	},
    'productCart': function(req, res) {
        res.render('productCart');
    }   
};

module.exports = productController;

