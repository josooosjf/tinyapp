const bcrypt = require('bcrypt');

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

module.exports = users;