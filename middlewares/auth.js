const locals = (req, res, next) => {
    
    res.locals.isAuthenticated = false;

    if (req.session.username) {        
        res.locals.isAuthenticated = true;
        res.locals.userLocal = req.session.user;
        res.locals.role = req.session.role;
    }

    next();
}

module.exports = locals;