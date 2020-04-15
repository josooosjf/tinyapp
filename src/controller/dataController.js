const urlDatabase = require('../data/urlDatabase');

exports.delete = (req,res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect("/urls");
};

exports.updateShortURL = (req, res) => {
  urlDatabase[req.params.shortURL] = req.body.longURL;
  res.status(201).redirect(`/urls/${req.params.shortURL}`);
};

exports.loginName = (req,res) => {
  const username = req.body.username;
  res.cookie("username", username);
  res.redirect('/urls');

};

