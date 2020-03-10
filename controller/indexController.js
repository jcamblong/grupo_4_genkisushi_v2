

let indexController ={
    'index': function(req, res) {
                  res.render('index');
    },
    'contact': function(req, res) {
    res.render('contact');
    },
    'about': function(req, res) {
        res.render('about-us');
    }
};

module.exports= indexController;