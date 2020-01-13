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

        if(result.isEmpty()){
            res.send("Usuario logeado")  
        } else {res.render('login', {errors: result.errors, data: req.body})}
    },
    'registerForm': function(req, res) {
        res.render('register');
    },
    'saveUser': function(req, res) {
        let result = validationResult(req)
        let search = users.find(function(user){
            return user.email == req.body.email;
            })

        console.log(result, search)

        if(result.isEmpty() && typeof search == 'undefined'){
            let newUser = {
                        "name": req.body.name, 
                        "lastName":req.body.lastName, 
                        "email": req.body.email,
                        "password": bcrypt.hashSync(req.body.password, 10),
                        "street": req.body.street,
                        "stNumber": req.body.stNumber,
                        "street2": req.body.street2,
                        "city": req.body.city,
                        "phone": req.body.phone
                        }
            users.push(newUser)

            let usersJSON = JSON.stringify(users)
            fs.writeFileSync('./data/users.json', usersJSON)

            res.redirect('/users/login')
          
        } else {res.render('register', {errors: result.errors, data: req.body})}
    }
};

module.exports = usersController;