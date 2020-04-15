const urlDatabase = require('../data/urlDatabase');
const generateRandomString = require('../utils/generateRandomString');
const userDatabase = require('../data/usersDatabase');
const lookUpUserbyId = require('../utils/lookUpUserById');

exports.getHome = (req, res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  const templateVars = {user, urls: urlDatabase};
  res.render("urls_index", templateVars);
};

exports.getNew = (req,res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  res.render("urls_new", {user});
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
  const user = lookUpUserbyId(req.cookies.user_id);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL],
    user
  };
  res.render("urls_show", templateVars);
};

exports.registerPage = (req,res) => {
  if (req.cookies.user_id) {
    res.redirect('/');
  } else {
    res.render("register_page",{user : undefined});
  }
};
