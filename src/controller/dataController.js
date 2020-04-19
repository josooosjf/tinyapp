const urlDatabase = require('../data/urlDatabase');

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
  const newURL = {
    shortURL: req.params.shortURL,
    longURL: req.body.longURL,
    userID : req.session.userid
  };
  for (let value of values) {
    if (req.session.userid === value.userID) {
      urlDatabase[newURL.shortURL] = newURL;
      res.status(201).redirect(`/urls/${req.params.shortURL}`);
      return;
    }
  }
  res.status(403).send('this link does not belong to you! you cannot edit it');
  return;
};

