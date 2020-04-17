const userDataBase = require('../data/usersDatabase');
const randomNumberGenerator = require('../utils/generateRandomString');
const getUserByEmail = require('../utils/getUserbyEmail');
const getUserByName = require('../utils/getUserbyName');
const getUserByPassword = require('../utils/getUserPassword');
const bcrypt = require('bcrypt');


exports.login = (req,res) => {
  const { email, password } = req.body;
  const userIdByEmail = getUserByEmail(email);
  

  if (!userIdByEmail) {
    res.status(403).send('a user with this email or password cannot be found');
    return;
  }
  
  if (getUserByPassword(userIdByEmail, password)) {
    req.session.userid = userIdByEmail.id;
    res.status(201).redirect('/');
    return;
  }
  
  res.status(400).send("password is incorrect");
};

exports.logout = (req,res) => {
  req.session = null;
  res.status(307).redirect('/');
};

exports.registerUser = (req,res) => {
  const name = req.body.id;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password,10);
  const id = randomNumberGenerator();
  
  if (getUserByEmail(email) && getUserByName(name)) {
    res.status(400).send("email or username is already taken");
  } else {
    userDataBase[id] = {id, email, password};
    req.session.userid = id;
    res.status(307).redirect("/");
  }
};

exports.loginPage = (req,res) => {
  res.render("login_page", {user : undefined});

};


