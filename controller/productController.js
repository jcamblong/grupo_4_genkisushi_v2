const fs = require("fs");
const path = require("path");
/*agrego db al controlador*/
const db = require("../database/models");

let productController = {
  index: function(req, res) {
    db.products.findAll().then(products => {
      let categorias = [];
      let tipos = [];
      db.categories.findAll().then(categorias => {
        db.product_types.findAll().then(tipos => {
          res.render("products", {
            products: products,
            categorias: categorias,
            tipos: tipos
          });
        });
      });
    });
  },
  productDetail: function(req, res) {
    db.products.findByPk(req.params.id).then(function(product) {
      res.render("productDetail", { product: product });
    });
  },
  productAdd: function(req, res) {
    db.products.findAll().then(products => {
      let categorias = [];
      let tipos = [];
      db.categories.findAll().then(categorias => {
        db.product_types.findAll().then(tipos => {
          res.render("productAdd", {
            products: products,
            categorias: categorias,
            tipos: tipos
          });
        });
      });
    });
  },
  store: function(req, res, next) {
    db.products.create({
      name: req.body.name,
      category_id: req.body.category,
      type_id: req.body.type,
      detail: req.body.detail,
      price: req.body.price,
      image: req.files[0].filename
    });
    res.redirect("/products");
  },
  productCart: function(req, res) {
    res.render("productCart");
  },
  // Update - Form to edit GET | CGR
  /*Paso de json a db el método edit por get*/
  edit: (req, res) => {
    db.products
      .findOne({ where: { id: req.params.id } })
      //incluir categoria y tipo de producto
      /*include:[{association: 'categorie'}]*/
      .then(products => {
        //buscar todas las categorias y todo los productos para cargar el form
        let categorias = [];
        let tipos = [];
        db.categories.findAll().then(categorias => {
          db.product_types.findAll().then(tipos => {
            res.render("productEdit", {
              products: products,
              categorias: categorias,
              tipos: tipos
            });
          });
        });
      });
  },

  // Update - Method to update PUT| CGR
  update: (req, res, next) => {
    db.categories
      .findOne({ where: { name: req.body.category } })
      .then(categoria => {
        db.product_types
          .findOne({ where: { name: req.body.type } })
          .then(tipo => {
            if (req.files.length != 0) {
              db.products
                .update(
                  {
                    name: req.body.name,
                    detail: req.body.detail,
                    image: req.files[0].filename,
                    //categoria, tipo
                    category_id: req.body.category,
                    type_id: req.body.type
                  },
                  { where: { id: req.params.id } }
                )
                .then(res.redirect("/products/detail/" + req.params.id));
            } else {
              db.products
                .update(
                  {
                    name: req.body.name,
                    detail: req.body.detail,
                    //image: req.files[0].filename,
                    //categoria, tipo
                    category_id: req.body.category,
                    type_id: req.body.type
                  },
                  { where: { id: req.params.id } }
                )
                .then(res.redirect("/products/detail/" + req.params.id));
            }
          });
      });
  },

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

  // Delete - Delete one product from DB DELETE | CGR
  // Delete on DB
  destroy: (req, res) => {
    db.products
      .destroy({ where: { id: req.params.id } })
      .then(res.redirect("/products"));
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
