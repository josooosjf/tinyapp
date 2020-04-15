const urlDatabase = require('../data/urlDatabase');
const generateRandomString = require('../utils/generateRandomString');

exports.getHome = (req, res) => {
  let username;
  if (req.cookies.username !== undefined) {
    username = req.cookies.username;
  }
  
  let templateVars = {urls : urlDatabase, username};
  res.render("urls_index", templateVars);
};

exports.getNew = (req,res) => {
  res.render("urls_new");
};


exports.createNew = (req,res) => {
  const randomStr = generateRandomString();
  urlDatabase[randomStr] = req.body.longURL;
  res.status(201).redirect(`/urls/${randomStr}`);
};


exports.redirect = (req,res) => {
  const longURL = urlDatabase[req.params.shortURL];
  res.redirect(longURL);
};

exports.getOne = (req,res) => {
  let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
  res.render("urls_show", templateVars);
};
