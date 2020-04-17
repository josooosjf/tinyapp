const assert = require('chai').assert;
const bcrypt = require('bcrypt');

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
    const user = lookUpUserById(users.aJ48lW.id);
    const expectedOutput = users.aJ48lW;
    assert.equal(user.id, expectedOutput.id);
    assert.equal(user.email, expectedOutput.email);
    assert.equal(bcrypt.compareSync(expectedOutput.password, user.password), true);
  });
});
