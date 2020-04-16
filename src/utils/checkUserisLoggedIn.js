let checkUserIsLoggedIn = function(req, res, next) {
  let user = req.session.user;

  if (user === null) {

    res.redirect('/login');
  } else {
    req.user = user;
    next();
  }
};

module.exports = checkUserIsLoggedIn;