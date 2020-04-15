const urlDatabase = require('../data/urlDatabase');

exports.login = (req,res) => {
  const { username } = req.body;

  
  res.cookie("username", username).redirect('/urls');
};

exports.logout = (req,res) => {
  res.clearCookie('username').redirect('/urls');
};