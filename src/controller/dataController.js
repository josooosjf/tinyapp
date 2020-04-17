const urlDatabase = require('../data/urlDatabase');
const lookUpUserbyId = require('../utils/lookUpUserById');

exports.delete = (req,res) => {
  const values = Object.values(urlDatabase);

  for (let value of values) {
    if (req.session.userid === value.userID) {
      delete urlDatabase[req.params.shortURL];
      res.status(200).redirect("/");
      return;
    }
  }
  res.status(403).send('this link does not belong to you! you cannot delete it');
  return;
};

exports.updateShortURL = (req, res) => {
  const values = Object.values(urlDatabase);
  const user = lookUpUserbyId(req.session.userid);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: req.body.longURL,
    user
  };
  for (let value of values) {
    if (req.session.userid === value.userID) {
      urlDatabase[req.params.shortURL] = {longURL :templateVars.longURL, userID: req.session.userid};
      res.status(201).redirect(`/urls/${req.params.shortURL}`);
      return;
    }
  }
  res.status(403).send('this link does not belong to you! you cannot edit it');
  return;
};

// exports.loginName = (req,res) => {
//   const user = lookUpUserbyId(req.session.userid);
//   req.session.userid = id;
//   res.status(201).redirect('/urls');

// };

