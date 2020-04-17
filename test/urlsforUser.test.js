const urlsforUser = require('../src/utils/urlsforUser');
const assert = require('chai').assert;


describe('urlsforUser', function() {

  it('should return the urls for the user', function() {
    const urls = urlsforUser('aJ48lW');
    const expectedOutput = { i3BoGr:
      { shortURL: 'i3BoGr',
        longURL: 'https://www.google.ca',
        userID: 'aJ48lW' } };
    assert.deepEqual(urls, expectedOutput);
  });

  it('should return an empty array if the user doesnt have any urls or doesnt exist', function() {
    const urls = urlsforUser('2234s1');
    const expectedOutput = {};
    assert.deepEqual(urls, expectedOutput);
  });


});



