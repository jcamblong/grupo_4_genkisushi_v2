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
    'store': function(req, res, next){
        let products = fs.readFileSync(productsFilePath , {encoding: 'utf-8'});
		products = JSON.parse(products);
		let newproduct = {
						id: products.length,
						...req.body,
						...{image: req.files[0].filename}
						}		
		products.push(newproduct);
		products = JSON.stringify(products);
		fs.writeFileSync(productsFilePath , products);
		res.redirect('/productos/create');
	},
    'productCart': function(req, res) {
        res.render('productCart');
    },
// Update - Form to edit GET | CGR
	'edit': (req, res) => {
		let product = products.find(function (p) {
			return p.id == req.params.id
		})

		res.render('productEdit', {product: product})
	},

	// Update - Method to update PUT| CGR
	'update': (req, res, next) => {
		let products = fs.readFileSync(productsFilePath , {encoding: 'utf-8'});
		products = JSON.parse(products);

		let arrayIndex;

		let product = products.find(function (p, index) {
			if (p.id == req.params.id){
				arrayIndex = index;
				return true;
			}
			return false;
		});
		
		console.log(req.body);
		
		let editado = {
			...product,
			...req.body,
/* 			...{image: req.files[0].filename}
 */		};

		products[arrayIndex] = editado;

		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		res.redirect('/products/detail/'+ req.params.id);

	},

	// Delete - Delete one product from DB DELETE | CGR
	'destroy': (req, res) => {
        let products = fs.readFileSync(productsFilePath , {encoding: 'utf-8'});
		products = JSON.parse(products);
        
        var filtered = products.filter(function(value, index, arr){
                return value.id != req.params.id;
                });

        fs.writeFileSync(productsFilePath, JSON.stringify(filtered));

		res.redirect('/products');
	}
   
};

module.exports = productController;

