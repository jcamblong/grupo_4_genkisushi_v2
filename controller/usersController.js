const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const db = require("../database/models");
let { check, validationResult, body } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

let usersController = {
  loginForm: function(req, res) {
    res.render("login");
  },
  login: function(req, res) {
    let result = validationResult(req);

    if (result.isEmpty()) {
      db.User.findOne({ where: { email: req.body.email } }).then(query => {
        if (bcrypt.compareSync(req.body.password, query.password)) {
          req.session.loggedin = true;
          req.session.username = query.email;
          res.redirect("/users/user");
        } else {
          res.render("login", {
            errors: [
              {
                msg: "Credenciales incorrectas"
              }
            ]
          });
        }
      });
    } else {
      res.render("login", { errors: result.errors, data: req.body });
    }
  },
  logout: function(req, res) {
    req.session.loggedin = false;
    req.session.username = "";

    res.redirect("../");
  },
  create: function(req, res) {
    res.render("register");
  },
  store: function(req, res, next) {
    let result = validationResult(req);

    db.User.count({ where: { email: req.body.email } }).then(count => {
      if (count != 0) {
        return res.render("register", {
          errors: [{ msg: "El e-mail ya se encuentra esta regitrado!" }],
          data: req.body
        });
      } else {
        if (!result.isEmpty()) {
          return res.render("register", {
            errors: result.errors,
            data: req.body
          });
        } else {
          db.User.create({
            first_name: req.body.name,
            last_name: req.body.lastName,
            role_id: "2",
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            city: req.body.city,
            street_name: req.body.street,
            street_number: req.body.stNumber,
            cross_street_name: req.body.street2,
            neighborhood: req.body.neighborhood,
            image: req.files[0].filename
          });
          return res.redirect("/users/login");
        }
      }
    });
  },
  show: function(req, res) {

    db.User.findOne({where: {email: req.session.username}})
        .then(user => {
            res.render('user', {user: user})
        })
  },
  edit: function(req, res) {
    db.User.findOne({where: {email: req.session.username}})
    .then(user => {
        res.render('editUser', {user: user})
    })
  },
  update: function(req, res, next) {
    let result = validationResult(req)

    if (result.isEmpty()) {
        if (req.files.length != 0) {
            db.User.update({
                first_name: req.body.name,
                last_name: req.body.lastName,
                phone: req.body.phone,
                street_name: req.body.street,
                street_number: req.body.stNumber,
                cross_street_name: req.body.street2,
                city: req.body.city,
                neighborhood: req.body.neighborhood,
                image: req.files[0].filename
                },{
                where: {
                    email: req.session.username
                }
            })
        } else {
            db.User.update({
                first_name: req.body.name,
                last_name: req.body.lastName,
                phone: req.body.phone,
                street_name: req.body.street,
                street_number: req.body.stNumber,
                cross_street_name: req.body.street2,
                city: req.body.city,
                neighborhood: req.body.neighborhood
            },{
                where: {
                email: req.session.username
                }
            })
        }
        res.redirect("/users/user")
    } else {
      res.render('editUser', {
        errors: result.errors,
        data: req.body
      });
    }
  },
  changePasswordForm: function(req, res) {
    res.render("changePassword");
  },

  changePassword: function(req, res, next) {
    let result = validationResult(req)

    if (result.isEmpty()) {
      db.User.update({
        password: bcrypt.hashSync(req.body.password, 10)
      }, {
        where: {
          email: req.session.username
        }
      })
      req.session.loggedin = false;
      req.session.username = "";
      res.redirect("/users/login")
    } else {
      res.render('changePassword', {
        errors: result.errors,
        data: req.body
      })
    }
  }

/*     let arrayIndex;
    let user = users.find(function(p, index) {
      if (p.email == req.session.username) {
        arrayIndex = index;
        return true;
      }
      return false;
    });

    if (result.isEmpty()) {
      let usuarioEditado = {
        ...user,
        ...{ password: bcrypt.hashSync(req.body.password, 10) }
      };

      users[arrayIndex] = usuarioEditado;

      fs.writeFileSync("./data/users.json", JSON.stringify(users));
      req.session.loggedin = false;
      req.session.username = "";

      res.redirect("/users/login");
    } else {
      res.render('changePassword', {
        errors: result.errors,
        data: req.body
      });
    } */
};

module.exports = usersController;
