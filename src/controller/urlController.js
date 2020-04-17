const urlDatabase = require('../data/urlDatabase');
const generateRandomString = require('../utils/generateRandomString');
const lookUpUserbyId = require('../utils/lookUpUserById');
const urlsforUser = require('../utils/urlsforUser');


/**
 * getHome will make sure that you are a user,
 * if not it will redirect to login page. is so
 * it will render only the pages that are yours
 */
exports.getHome = (req, res) => {
  const user = lookUpUserbyId(req.session.userid);

  if (user === undefined) {

    res.redirect('/login');

  } else {
    let usersURLS = urlsforUser(user.id);
    const templateVars = {user, urls: usersURLS};
    res.status(200).render("urls_index", templateVars);
  }
};

/**
 * getNew will check to see if you are logged in.
 * if you are it will render a page for you to make a new
 * URL
 */
exports.getNew = (req,res) => {
  const user = lookUpUserbyId(req.session.userid);
  if (user === undefined) {
    res.redirect('/login');
  } else {
    res.status(200).render("urls_new", {user});
  }
};

/**
 * createNew will allow you to create a new tinyURL
 * it will than store it in your urls that share your ID
 * and render it with your other URLS in your my URL's
 * page
 */
exports.createNew = (req,res) => {
  const randomStr = generateRandomString();
  
  urlDatabase[randomStr] = {longURL : req.body.longURL, userID: req.session.userid};
  res.status(201).redirect(`/urls/${randomStr}`);
};

/**
 * this will make a new tinyURL
 * for the user if they would like it
 * and than show them the page.
 */
exports.getOne = (req,res) => {
  const user = lookUpUserbyId(req.session.userid);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL].longURL,
    user
  };
  urlDatabase[req.params.shortURL] = {longURL :templateVars.longURL, userID: req.session.userid};
  res.status(200).render("urls_show", templateVars);
};

exports.registerPage = (req,res) => {
  const user = lookUpUserbyId(req.session.userid);
  if (user) {
    res.status(300).redirect('/');
  } else {
    res.status(200).render("register_page",{user : undefined});
  }
};

exports.redirect = (req,res) => {
  const longURL = urlDatabase[req.params.shortURL].longURL;
  res.status(300).redirect(longURL);
};

