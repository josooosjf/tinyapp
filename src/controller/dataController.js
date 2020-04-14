const urlDatabase = require('../data/urlDatabase');

exports.delete = (req,res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect("/urls");
};
