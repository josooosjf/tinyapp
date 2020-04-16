const userDatabase = require('../data/usersDatabase');

const getUserbyPassword = function(password) {
  for (let userId in userDatabase) {
    let user = userDatabase[userId];
    if (user.password === password) return userId;
  }
};

module.exports = getUserbyPassword;