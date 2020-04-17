const userDatabase = require('../data/usersDatabase');
const bcrypt = require('bcrypt');

const getUserbyPassword = function(userobject,password) {
  // for (let userId in userDatabase) {
  //   let user = userDatabase[userId];

  return (bcrypt.compareSync(password, userobject.password));
   
};


module.exports = getUserbyPassword;
