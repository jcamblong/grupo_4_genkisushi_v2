const fs = require('fs');
const path = require('path');
let {check, validationResult, body} = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    }
};

module.exports = usersController;