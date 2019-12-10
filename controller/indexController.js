let indexController ={
    'index': function(req, res) {
                  res.render('index');
},

    'productAdd': function(req, res) {
                  res.render('productAdd');
},
    'productCart': function(req, res) {
                  res.render('productCart');
},

    'productDetail': function(req, res) {
                  res.render('productDetail');
},

    'register': function(req, res) {
                  res.render('register');
}
};

module.exports= indexController;