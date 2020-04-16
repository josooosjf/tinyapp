const urlDatabase = require('../data/urlDatabase');
const lookUpUserbyId = require('../utils/lookUpUserById');

exports.delete = (req,res) => {
  delete urlDatabase[req.params.shortURL];
  res.status(200).redirect("/urls");
};

exports.updateShortURL = (req, res) => {
  urlDatabase[req.params.shortURL] = req.body.longURL;
  res.status(201).redirect(`/urls/${req.params.shortURL}`);
};

exports.loginName = (req,res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  res.status(201).cookie("user_id", {user}).redirect('/urls');

};

