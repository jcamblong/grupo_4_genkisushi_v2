const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models');
let {check, validationResult, body} = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let usersController ={
    'loginForm': function(req, res) {
        res.render('login');
    },
    'login': function(req, res){
        let result = validationResult(req)
        let username = req.body.email;
        let password = req.body.password;

        if(result.isEmpty()){
            let search = users.find(function(user){
                return user.email == req.body.email;
                })
                        
            if(typeof search != 'undefined'){
                req.session.loggedin = bcrypt.compareSync(password, search.password);
                req.session.username = username;
                
                res.redirect('/users/user') 
              } else {res.render('login', {errors: [{
                  msg:'Credenciales incorrectas'}]})}
           
        } else {res.render('login', {errors: result.errors, data: req.body})}
    },
    'logout': function(req, res){
        req.session.loggedin = false;
        req.session.username = '';

        res.redirect('../')
    },
    'create': function(req, res) {
        res.render('register');
    },
    'store': function(req, res, next) {
        let result = validationResult(req)

        /* FALTA AGREGAR BUSQUEDA DE USUARIO EXISTENTE Y AGREGAR LA CONDICION AL IF */

        if(result.isEmpty()){

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
            })

            res.redirect('/users/login')
          
        } else {res.render('register', {errors: result.errors, data: req.body})}
    },
    'user': function(req, res){
        let user = users.find(function(user){
            return user.email == req.session.username;
            })
        
        res.render ('user', {user: user});
    },
    'userDetail': function(req, res) {
        let user = users.find(function (u) {
            return u.id == req.params.id
        })
        res.render('user', {user: user});
    },
    'editUser': function(req, res){
        let user = users.find(function (u) {
            return u.email == req.session.username
        })
        res.render('editUser', {user: user});
    },
    'updateUser': function(req, res, next){

        let result = validationResult(req);
        let arrayIndex;
        let user = users.find(function (p, index) {
            if (p.email == req.session.username){
                arrayIndex = index;
				return true;
			}
			return false;
        });
        
        if (result.isEmpty()){
            
        let usuarioEditado;        

        if(req.files.length != 0){

            usuarioEditado = {
            ...user,
			...{                        
                "name": req.body.name,
                "lastName":req.body.lastName,
                "street": req.body.street,
                "stNumber": req.body.stNumber,
                "street2": req.body.street2,
                "city": req.body.city,
                "phone": req.body.phone,
                "neighborhood": req.body.neighborhood,
                },
            ...{image: req.files[0].filename}
            }
        } else {
            usuarioEditado = {
                ...user,
                ...{                        
                    "name": req.body.name,
                    "lastName":req.body.lastName,
                    "street": req.body.street,
                    "stNumber": req.body.stNumber,
                    "street2": req.body.street2,
                    "city": req.body.city,
                    "phone": req.body.phone,
                    "neighborhood": req.body.neighborhood,
                    },
                }
            }


         console.log(user, usuarioEditado);
         

         users[arrayIndex] = usuarioEditado;

         
         fs.writeFileSync('./data/users.json', JSON.stringify(users));

         res.redirect('/users/user');
        }
    },
    'changePasswordForm': function(req, res) {
        res.render('changePassword');
    },

    'changePassword': function(req, res, next) {
        let result = validationResult(req);
        let arrayIndex;
        let user = users.find(function (p, index) {
            if (p.email == req.session.username){
                arrayIndex = index;
				return true;
			}
			return false;
        });
        
        if (result.isEmpty()){
            
        let usuarioEditado = {
            ...user,
			...{password: bcrypt.hashSync(req.body.password, 10)},
         };

         users[arrayIndex] = usuarioEditado;

         
         fs.writeFileSync('./data/users.json', JSON.stringify(users));
         req.session.loggedin = false;
         req.session.username = '';

         res.redirect('/users/login');
        }        
        else {res.render('/users/changePassword', {errors: result.errors, data: req.body})}
    },

};

module.exports = usersController;