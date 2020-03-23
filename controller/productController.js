const fs = require("fs");
const path = require("path");
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
  categories: function (req, res){
    db.products.findAll ( { where: {category_id: req.params.id} }).then(products => { 
      let categorias = db.categories.findAll().then(categorias => {
      let tipos = db.product_types.findAll().then(tipos => {
          res.render ("byCategory", {products: products, categorias: categorias, tipos: tipos})
      })
      })
    })
  },

  productDetail: function(req, res) {
    db.products.findByPk(req.params.id).then(function(product) {
      let tipos = [];
      db.product_types.findOne({ where: { id: product.type_id } }).then(tipo => {
        res.render("productDetail", { product: product,  tipo: tipo });
      });
    });
  },

  productAdd: function(req, res) {
  
    let categorias = db.categories.findAll();

    let tipos = db.product_types.findAll();

    Promise.all([categorias, tipos])
      .then(function([categoria, tipo]){
        res.render("productAdd", {categorias: categoria, tipos: tipo})
      })
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
  edit: (req, res) => {
    
    let product = db.products.findByPk(req.params.id);
    let categoria = db.categories.findAll();
    let tipo = db.product_types.findAll();

    Promise
    .all([product, categoria, tipo ])
    .then(function ([ products, categorias, tipos]){
        res.render("productEdit", {
          products: products,
          categorias: categorias,
          tipos: tipos
        });
      });  
},
  update: (req, res, next) => {
    
      /**actualizar precio en product_types**/
      db.product_types
      .update(
        {
          price: req.body.price
        },
        { where: { id: req.body.type } }
      )
      .then(console.log("actualice precio"));


    /*actualizo producto*/
     if (req.files.length != 0) {
              db.products
                .update(
                  {
                    name: req.body.name,
                    detail: req.body.detail,
                    image: req.files[0].filename,
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
                    category_id: req.body.category,
                    type_id: req.body.type
                  },
                  { where: { id: req.params.id } }
                )
                .then(res.redirect("/products/detail/" + req.params.id));
            }

  },
  destroy: (req, res) => {
    db.products
      .destroy({ where: { id: req.params.id } })
      .then(res.redirect("/products"));
  }
};

module.exports = productController;
