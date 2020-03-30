const user = (req, res, next) => {

    if (!res.locals.isAuthenticated) {
        
        res.redirect('/users/login');
    }    
    next();
}

module.exports = user;