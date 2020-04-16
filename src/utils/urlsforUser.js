const userDatabase = require('../data/usersDatabase');
const urlDatabase = require('../data/urlDatabase');


/**
 * This function finds the urls for user from a id
 * @param {string} id
 */
const urlsforUser = function(id) {
  let urlsforUser = {};
  for (let userID in urlDatabase) {
    let user = urlDatabase[userID].userID;
    if (userDatabase[id].id === user) {
      urlsforUser[userID] = urlDatabase[userID];
    }
  }
  return urlsforUser;
};

module.exports = urlsforUser;
// return Object.values(urlDatabase).filter(url => url.userID === id);


