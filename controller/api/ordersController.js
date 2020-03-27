const db = require("../../database/models");

let ordersController = {

list: function (req, res) {

    db.orders.findAll()
      .then(orders => {
          for(let i = 0; i < orders.length; i++) {
              orders[i].setDataValue("detail", "/api/orders/" + orders[i].id)
          }
        let respuesta = {
            count: orders.length,
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