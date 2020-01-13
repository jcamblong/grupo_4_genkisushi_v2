const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let {check, validationResult, body} = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let usersController ={
    'form': function(req, res) {
        res.render('login');
    },
    'login': function(req, res){
        let result = validationResult(req)

        if(result.isEmpty()){
            res.send("Usuario logeado")  
        } else {res.render('login', {errors: result.errors, data: req.body})}
    },
    'register': function(req, res) {
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
                        "nombre": req.body.nombre, 
                        "apellido":req.body.apellido, 
                        "email": req.body.email,
                        "password": bcrypt.hashSync(req.body.password, 10),
                        "calle": req.body.calle,
                        "altura": req.body.altura,
                        "entreCalles": req.body.entreCalles,
                        "localidad": req.body.localidad,
                        "telefono": req.body.telefono
                        }
            users.push(newUser)

            let usersJSON = JSON.stringify(users)
            fs.writeFileSync('./data/users.json', usersJSON)

            res.redirect('/users/login')
          
        } else {res.render('register', {errors: result.errors, data: req.body})}
    }
};

module.exports = usersController;