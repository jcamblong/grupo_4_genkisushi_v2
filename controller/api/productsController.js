const db = require("../../database/models");

let productsController = {

    list: function (req, res) {
        db.products.findAll({attributes: ['id', 'name', 'detail', 'type_id', 'category_id']})
            .then(products => {
                for(let i = 0; i < products.length; i++) {
                products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
                }
                let respuesta = {
                count: products.length,
                products
                }
            res.json(respuesta)        
            })
    },
    find: function (req, res) {
        db.products.findByPk(req.params.id, {attributes: {exclude: [
            'created_at', 
            'updated_at',
            'createdAt',
            'updatedAt'
            ]}})
            .then(product => {
            product.setDataValue("image", "http://localhost:3000/img/products/" + product.image)
            res.json(product)
            })
        }
    }

module.exports = productsController;