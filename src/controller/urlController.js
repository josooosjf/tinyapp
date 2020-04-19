const urlDatabase = require('../data/urlDatabase');
const generateRandomString = require('../utils/generateRandomString');
const lookUpUserbyId = require('../utils/lookUpUserById');
const urlsforUser = require('../utils/urlsforUser');
const urlExistSync = require("url-exist-sync");


/**
 * getHome will make sure that you are a user,
 * if not it will redirect to login page. is so
 * it will render only the pages that are yours
 */
exports.getHome = (req, res) => {
  const user = lookUpUserbyId(req.session.userid);

  if (!user) {

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
  if (!user) {
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
  const user = lookUpUserbyId(req.session.userid);

  if (!user) {
    res.status(400).send("please log in before editing pages");
  }

  urlDatabase[randomStr] = {shortURL : randomStr, longURL : req.body.longURL, userID: req.session.userid};
  res.status(201).redirect(`/urls/${randomStr}`);
};

/**
 * this will make a new A
 * for the user if they would like it
 * and than show them the page.
 */
exports.getOne = (req,res) => {
  const user = lookUpUserbyId(req.session.userid);

  const linkObj = urlDatabase[req.params.shortURL];
 

  if (!linkObj) return res.status(404).send("This link doesn't exist");
  if (req.session.userid !== linkObj.userID) return res.status(403).send("this is not your link");
  
  const templateVars = {
    ...linkObj,
    user,
    error: null,
  };
  
  res.status(200).render("urls_show", templateVars);
};


exports.redirect = (req,res) => {
  const longURL = urlDatabase[req.params.shortURL].longURL;
  if (urlExistSync(longURL) === false) {
    res.render("urls_show", {user : undefined, error: "link does not exist"});
    return;
  }
  res.status(300).redirect(longURL);
};

