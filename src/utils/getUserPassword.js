const userDatabase = require('../data/usersDatabase');
const bcrypt = require('bcrypt');

const getUserbyPassword = function(password) {
  for (let userId in userDatabase) {
    let user = userDatabase[userId];
    if (bcrypt.compareSync(password, user.password)) return userId;
    console.log("user,password", user.password);
    console.log('password paramet', password);
  }
};

module.exports = getUserbyPassword;
