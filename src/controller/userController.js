const userDataBase = require('../data/usersDatabase');
const randomNumberGenerator = require('../utils/generateRandomString');
const getUserByEmail = require('../utils/getUserbyEmail');
const getUserByName = require('../utils/getUserbyName');
const getUserByPassword = require('../utils/getUserPassword');


exports.login = (req,res) => {
  const { email, password } = req.body;
  const userIdByEmail = getUserByEmail(email);
  const userIdByPassword = getUserByPassword(password);

  if (!userIdByEmail || !userIdByPassword) {
    res.status(403).send('a user with this email or password cannot be found');
    return;
  }
  
  if (getUserByEmail(email) === getUserByPassword(password)) {
    res.status(201).cookie("user_id", userIdByEmail).redirect('/urls');
  }
  
};

exports.logout = (req,res) => {
  res.status(307).clearCookie('user_id').redirect('/urls');
};

exports.registerUser = (req,res) => {
  const name = req.body.id;
  const email = req.body.email;
  const password = req.body.password;
  const id = randomNumberGenerator();
  
  if (getUserByEmail(email) && getUserByName(name)) {
    res.status(400).send("email or username is already taken");
  } else {
    userDataBase[id] = {id, email, password};
    res.status(307).cookie("user_id", id).redirect("/");
  }
};

exports.loginPage = (req,res) => {
  res.render("login_page", {user : undefined});

};


