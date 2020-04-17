const assert = require('chai').assert;
const bcrypt = require('bcrypt');

const getUserByEmail = require('../src/utils/getUserbyEmail');

const users = {
  "aJ48lW": {
    id: "aJ48lW",
    email: "user@example.com",
    password: bcrypt.hashSync("purple-monkey-dinosaur",10)
  },
  "234ds2": {
    id: "234ds2",
    email: "user2@example.com",
    password: bcrypt.hashSync("dishwasher-funk",10)
  }
};


describe('getUserByEmail', function() {

  it('should return a user with valid email', function() {
    const user = getUserByEmail("user@example.com");
    const expectedOutput = users.aJ48lW;
    assert.equal(user, expectedOutput);
  });
});


// const getUserByEmail = function(email) {

//   for (let userId in userDatabase) {
//     let user = userDatabase[userId];
//     if (user.email === email) return user;
//   }
// };