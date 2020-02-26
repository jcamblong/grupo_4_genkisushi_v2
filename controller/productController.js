const fs = require('fs');
const path = require('path');
/*agrego db al controlador*/
const db = require("../database/models");



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

		console.log(req.body);
		
		let newproduct = {
						id: products.length,
						...req.body,
						...{image: req.files[0].filename}
						}		
		products.push(newproduct);
		products = JSON.stringify(products);
		fs.writeFileSync(productsFilePath , products);
		res.redirect('/products/create');
	},
    'productCart': function(req, res) {
        res.render('productCart');
    },
// Update - Form to edit GET | CGR
/*Paso de json a db el método edit por get*/
	'edit': (req, res) => {
		
		db.products.findOne({
			where: {id: req.params.id}
			//incluir categoria y tipo de producto
			//include:[{association: 'categories'}]
		})
		.then(products =>{
				console.log(products);
				//buscar todas las categorias y todo los productos para cargar el form
				res.render('productEdit', {products: products});
			});
	},


	// Update - Method to update PUT| CGR
	'update': (req, res, next) => {

	/*	let arrayIndex;

		let product = products.find(function (p, index) {
			if (p.id == req.params.id){
				arrayIndex = index;
				return true;
			}
			return false;
		});
			
		let editado;
		
		console.log(req.files)

		if(req.files.length != 0){ 
			editado = {
			...product,
			...req.body,
			...{image: req.files[0].filename}
			}
		} else {
			editado = {
				...product,
				...req.body
				}
			}

		products[arrayIndex] = editado;

		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		*/
			db.products.update({
			name: req.body.name,
			detail:req.body.detail,
			image: req.files[0].filename
		},{
			where: {id: req.params.id}
		})
		.then(res.redirect('/products/detail/'+ req.params.id));
	},

	// Delete - Delete one product from DB DELETE | CGR
	// Delete on DB
	'destroy': (req, res) => {
		db.products.destroy({
			where: {id: req.params.id}
		})
		.then(res.redirect('/products'))
	}
		
			/*let products = fs.readFileSync(productsFilePath , {encoding: 'utf-8'});
		products = JSON.parse(products);
        
        var filtered = products.filter(function(value, index, arr){
                return value.id != req.params.id;
                });

        fs.writeFileSync(productsFilePath, JSON.stringify(filtered));
*/
		
};

module.exports = productController;

