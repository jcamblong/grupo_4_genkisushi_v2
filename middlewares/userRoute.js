const user = (req, res, next) => {

    if (!res.locals.isAuthenticated) {
        
        res.redirect('/usuarios/ingresar');
    }    
    next();
}

module.exports = user;