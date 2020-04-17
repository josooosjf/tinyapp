const assert = require('chai').assert;
const bcrypt = require('bcrypt');

const getUserByEmail = require('../src/utils/getUserbyEmail');

const users = {
  "aJ48lW": {
    id: "aJ48lW",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
  "234ds2": {
    id: "234ds2",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};


describe('getUserByEmail', function() {

  it('should return a user with valid email', function() {
    const user = getUserByEmail("user@example.com");
    const expectedOutput = users.aJ48lW;
    // assert.deepEqual(user, expectedOutput);
    assert.equal(user.id, expectedOutput.id);
    assert.equal(user.email, expectedOutput.email);
    assert.equal(bcrypt.compareSync(expectedOutput.password, user.password), true);
  });
});


