const userDatabase = require('../data/usersDatabase');

const getUserByEmail = function(email) {

  for (let userId in userDatabase) {
    let user = userDatabase[userId];
    if (user.email === email) return userId;
  }
};

module.exports = getUserByEmail;