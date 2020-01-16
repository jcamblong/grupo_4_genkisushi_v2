function loggedRedirectMiddleware(req, res, next){
    if(req.session.loggedin){
        res.redirect('./user')
    } else {
        next();
    }
}

module.exports = loggedRedirectMiddleware;