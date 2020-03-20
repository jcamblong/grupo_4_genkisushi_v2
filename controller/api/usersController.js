const db = require("../../database/models");

let usersController = {

list: function (req, res) {

    db.users.findAll({attributes: ['id', 'first_name', 'last_name', 'email']})
      .then(users => {
          for(let i = 0; i < users.length; i++) {
              users[i].setDataValue("detail", "/api/users/" + users[i].id)
          }
        let respuesta = {
            count: users.length,
            users
            }
        res.json(respuesta)        
        })
  },
find: function (req, res) {

    db.users.findByPk(req.params.id, {attributes: {exclude: [
        'role_id', 
        'password', 
        'created_at', 
        'updated_at',
        'createdAt',
        'updatedAt'
        ]}})
        .then(user => {
        user.setDataValue("image", "http://localhost:3000/img/users/" + user.image)
        res.json(user)
        })
    }
}

module.exports = usersController;