const randomString = require("randomstring");

const generateRandomString = function()  {
  return randomString.generate({
    length : 6,
    charset : 'alphanumeric'
  });
};

module.exports = generateRandomString;