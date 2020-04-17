const urlsforUser = require('../src/utils/urlsforUser');
const urlDatabase = require('../data/urlDatabase');
const assert = require('chai').assert;


describe('urlsforUser', function() {

  it('should return the urls for the user', function() {
    const url = urlsforUser();
    


    const user = lookUpUserById(id);
    const expectedOutput = users.aJ48lW;
    assert.equal(user,expectedOutput);
  });


});



const urlsforUser = function(id) {
  let urlsforUser = {};
  for (let urlID in urlDatabase) {
    if (urlDatabase[urlID].userID === id) {
      urlsforUser[urlID] = urlDatabase[urlID];
    }
  }
  return urlsforUser;
};


