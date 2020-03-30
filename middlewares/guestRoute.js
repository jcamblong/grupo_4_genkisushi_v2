const guest = (req, res, next) => {

    if (res.locals.isAuthenticated) {
        res.redirect('/users/user');
    }

    next();
}

module.exports = guest;