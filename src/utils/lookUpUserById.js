const userDatabase = require('../data/usersDatabase');

const lookUpUser = function(userid) {
  return userDatabase[userid];
};


module.exports = lookUpUser;