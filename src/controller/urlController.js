const urlDatabase = require('../data/urlDatabase');
const generateRandomString = require('../utils/generateRandomString');
const lookUpUserbyId = require('../utils/lookUpUserById');

exports.getHome = (req, res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  const templateVars = {user, urls: urlDatabase};
  res.status(200).render("urls_index", templateVars);
};

exports.getNew = (req,res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  if (user) {
    res.status(200).render("urls_new", {user});
  }

  res.status(201).redirect('/login');
};


exports.createNew = (req,res) => {
  const randomStr = generateRandomString();
  urlDatabase[randomStr] = {longURL : req.body.longURL, userID: req.cookies.user_id};
  res.status(201).redirect(`/urls/${randomStr}`);
};


exports.redirect = (req,res) => {
  const longURL = urlDatabase[req.params.shortURL].longURL;
  res.status(300).redirect(longURL);
};

exports.getOne = (req,res) => {
  const user = lookUpUserbyId(req.cookies.user_id);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL].longURL,
    user
  };
  res.status(200).render("urls_show", templateVars);
};

exports.registerPage = (req,res) => {
  if (req.cookies.user_id) {
    res.status(300).redirect('/');
  } else {
    res.status(200).render("register_page",{user : undefined});
  }
};
