const userDataBase = require('../data/usersDatabase');
const randomNumberGenerator = require('../utils/generateRandomString');
const getUserByEmail = require('../utils/getUserbyEmail');
const getUserByName = require('../utils/getUserbyName');



exports.login = (req,res) => {
  const { email } = req.body;
  const userID = getUserByEmail(email);
  
  if (!userID) {
    res.status(400).send('Bad Request');
    return;
  }
  res.cookie("user_id", userID).redirect('/urls');
};

exports.logout = (req,res) => {
  res.clearCookie('user_id').redirect('/urls');
};

exports.registerUser = (req,res) => {
  const name = req.body.id;
  const email = req.body.email;
  const password = req.body.password;
  const id = randomNumberGenerator();


  if (getUserByEmail(email) && getUserByName(name)) {
    res.send("email or username is already taken");
  } else {
    userDataBase[id] = {id, email, password};
    res.cookie("user_id", id).redirect("/");
  }
  
};

exports.loginPage = (req,res) => {
  res.render("login_page", {user : undefined});

};


