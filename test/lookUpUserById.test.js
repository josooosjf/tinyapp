const assert = require('chai').assert;


const lookUpUserById = require('../src/utils/lookUpUserById');

const users = {
  "aJ48lW": {
    id: "aJ48lW",
    email: "user@example.com",
    password: ("purple-monkey-dinosaur")
  },
  "234ds2": {
    id: "234ds2",
    email: "user2@example.com",
    password: ("dishwasher-funk")
  }
};


describe('lookUpUserById', function() {

  it('should return the user if you give the id', function() {
    const id = users.aJ48lW.id;
    const user = lookUpUserById(id);
    const expectedOutput = users.aJ48lW;
    assert.equal(user,expectedOutput);
  });


});

// const lookUpUser = function(userid) {
//   return userDatabase[userid];
// };

// describe('getUserByEmail', function() {

//   it('should return a user with valid email', function() {
//     const user = getUserByEmail("user@example.com");
//     const expectedOutput = users.aJ48lW;
//     assert.equal(user, expectedOutput);
//   });
// });
