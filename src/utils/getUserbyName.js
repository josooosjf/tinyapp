const userDatabase = require('../data/usersDatabase');

const getUserByName = function(name) {

  for (let userId in userDatabase) {
    let user = userDatabase[userId];
    if (user.name === name) return userId;
  }
};

module.exports = getUserByName;