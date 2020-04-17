const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const urlRouter = require('./src/routes/urlRoutes');
const loginRouter = require('./src/routes/loginRouter');
const cookieSession = require('cookie-session');

const app = express();

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'src/views'));

app.use(cookieSession({
  name: 'session',
  keys: ['lknt42fnoh90hn2hf90w8fhofnwe0'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(loginRouter);

app.use('/urls', urlRouter);

module.exports = app;

