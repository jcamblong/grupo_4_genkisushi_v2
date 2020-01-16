const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
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
              } else {res.render('login', {errors: 'Credenciales incorrectas'})}
           
        } else {res.render('login', {errors: result.errors, data: req.body})}
    },
    'registerForm': function(req, res) {
        res.render('register');
    },
    'saveUser': function(req, res, next) {
        let result = validationResult(req)
        let search = users.find(function(user){
            return user.email == req.body.email;
            })

        if(result.isEmpty() && typeof search == 'undefined'){
            let newUser = {
                        id: users.length,
                        ...req.body,
                        ...{image: req.files[0].filename}
                        }
            newUser.password = bcrypt.hashSync(req.body.password, 10)
            users.push(newUser)

            let usersJSON = JSON.stringify(users)
            fs.writeFileSync('./data/users.json', usersJSON)

            res.redirect('/users/login')
          
        } else {res.render('register', {errors: result.errors, data: req.body})}
    },
    'user': function(req, res) {
        res.render('user');
    },
    'changePasswordForm': function(req, res) {
        res.render('changePassword');
    },

    'changePassword': function(req, res, next) {
        let result = validationResult(req);
        let arrayIndex;
        console.log(req.body);
        let user = users.find(function (p, index) {
            if (p.email == req.body.email){
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

         res.redirect('/users/login');
        }        
        else {res.render('changePassword', {errors: result.errors, data: req.body})}
    },

};

module.exports = usersController;