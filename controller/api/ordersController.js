const db = require("../../database/models");

let ordersController = {

list: function (req, res) {
    db.orders.findAll({ 
        attributes: {exclude: [
            'created_at', 
            'updated_at',
            'createdAt',
            'updatedAt']},
        include: [
            {association: 'payment_methods', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}}, 
            {association: 'users', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}},
            {association: 'order_statuses', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}},
            {association: 'cupons', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}},
            {association: 'productos', attributes: {exclude: ['created_at', 'updated_at','createdAt','updatedAt']}},
        ]
    })
      .then(orders => {
          for(let i = 0; i < orders.length; i++) {
              orders[i].setDataValue("detail", "/api/orders/" + orders[i].id)
          }
        let respuesta = {
            meta: {
                status: 200,
                count: orders.length,
                url: "/api/orders"
            },
            orders
            }
        res.json(respuesta)        
        })
  },
recent: function (req, res) {

    db.orders.findAll({
        order: [
            ['purchase_date', 'DESC']
        ],
        limit: 5
    })
        .then(order => {
        res.json(order)
        })
    }
}

module.exports = ordersController;