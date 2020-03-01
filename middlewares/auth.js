const locals = (req, res, next) => {
    
    res.locals.isAuthenticated = false;

    if (req.session.username) {        
        res.locals.isAuthenticated = true;
        res.locals.userLocal = req.session.user;
    }

    next();
}

module.exports = locals;