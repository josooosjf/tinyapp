const bcrypt = require('bcrypt');

const getUserbyPassword = function(userobject,password) {
  return (bcrypt.compareSync(password, userobject.password));
   
};


module.exports = getUserbyPassword;
