function loggedMiddleware(req, res, next){
    if(req.session.loggedin){
        return next();
    } else {
        /* req.session.error = 'Esta sección es solo para usuarios. Debes iniciar sesion!' */
        res.render('login', {errors: [{msg:'Esta sección es solo para usuarios. Debes iniciar sesion!'}]})
    }
}

module.exports = loggedMiddleware;