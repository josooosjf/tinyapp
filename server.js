const server = require('./app');

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});