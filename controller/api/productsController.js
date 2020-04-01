const db = require("../../database/models");

let productsController = {

    list: function (req, res) {
        let products = db.products.findAll({
            attributes: {exclude: [
                'created_at', 
                'updated_at',
                'createdAt',
                'updatedAt',
                'category_id',
                'type_id'
                ]},
            include: [
                {association: 'categories', attributes: {exclude: ['id','created_at', 'updated_at','createdAt','updatedAt']}}, 
                {association: 'product_types', attributes: {exclude: ['id','created_at', 'updated_at','createdAt','updatedAt']}}
            ]
        })
            .then( (products) => {
                for(let i = 0; i < products.length; i++) {
                products[i].setDataValue(("endpoint", "/api/products/" + products[i].id))
                };
                for(let i = 0; i < products.length; i++) {
                products[i].setDataValue("image", "http://localhost:3000/img/products/" + products[i].image)
                }
            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: "/api/products"
                },
                data: products
                }
            res.json(respuesta)        
            })
    },
    categories: function (req, res){
        db.categories.findAll ({
            attributes: {exclude: ['created_at','updated_at','createdAt','updatedAt']},
            include: [
                {association: 'products', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}}]
        })
            .then ( (categorias) => {
                let categories = {
                    meta: {
                        status: 200,
                        count: categorias.length,
                        url: "/api/products/categorias"
                    },
                    categorias
                }
            res.json (categories)
            })  
    },
    last: function (req, res) {
        db.products.findOne({
            order: [["id", "DESC"]], 
            attributes: {exclude: ['created_at','updated_at','createdAt','updatedAt']}
        }).then( (product) => { product.setDataValue("image", "http://localhost:3000/img/products/" + product.image)
            let last = {
                meta: {
                    status: 200,
                    url: "/api/products/last" 
                },
                data: product
            }
        res.json(last)        
        })
    },
    find: function (req, res) {
        db.products.findByPk(req.params.id, {attributes: {exclude: [
            'created_at', 
            'updated_at',
            'createdAt',
            'updatedAt'
            ]}})
            .then(product => { product.setDataValue("image", "http://localhost:3000/img/products/" + product.image)
            let producto = {
                meta: {
                    status: 200,
                    url: "/api/products/" + product.id
                },
                data: product
            }
        res.json(producto)        
        })
    }
    
}

module.exports = productsController;