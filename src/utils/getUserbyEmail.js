const userDatabase = require('../data/usersDatabase');

const getUserByEmail = function(email) {

  for (let userId in userDatabase) {
    let user = userDatabase[userId];
    if (user.email === email) return user;
  }
};

module.exports = getUserByEmail;