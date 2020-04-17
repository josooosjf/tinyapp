const randomString = require("randomstring");


/**
 * this is a random string generator taken
 * off of npm.
 */
const generateRandomString = function()  {
  return randomString.generate({
    length : 6,
    charset : 'alphanumeric'
  });
};

module.exports = generateRandomString;