let testController ={

        'index': function(req, res) {
                  res.render('color');
        },
        'elegirColor': function(req,res){
        
        res.cookie('color', req.body.color).render('color', {color: req.body.color})
}
};

module.exports= testController;