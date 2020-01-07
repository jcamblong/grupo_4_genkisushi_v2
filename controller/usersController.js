const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let usersController ={
    'form': function(req, res) {
        res.render('login');
    },
    'login': function(req, res) {
        res.send("Usuario logeado")
    },
    'register': function(req, res) {
        res.render('register');
    }
};

module.exports = usersController;