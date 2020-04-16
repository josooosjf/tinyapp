const urlDatabase = require('../data/urlDatabase');
const lookUpUserbyId = require('../utils/lookUpUserById');
const urlsforUser = require('../utils/urlsforUser');

exports.delete = (req,res) => {
  const values = Object.values(urlDatabase);

  for (let value of values) {
    console.log(value.userID);
    if (req.cookies.user_id === value.userID) {
      delete urlDatabase[req.params.shortURL];
      res.status(200).redirect("/");
      return;
    }
  }
  res.status(403).send('this link does not belong to you! you cannot delete it');
  return;
};

exports.updateShortURL = (req, res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: req.body.longURL,
    user
  };
  urlDatabase[req.params.shortURL] = {longURL :templateVars.longURL, userID: req.cookies.user_id};
  res.status(201).redirect(`/urls/${req.params.shortURL}`);
};

exports.loginName = (req,res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  res.status(201).cookie("user_id", {user}).redirect('/urls');

};

