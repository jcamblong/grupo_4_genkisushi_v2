

let indexController ={
    'index': function(req, res) {
                  res.render('index');
},

  

    'register': function(req, res) {
                  res.render('register');
}
};

module.exports= indexController;