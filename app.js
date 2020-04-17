const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const urlRouter = require('./src/routes/urlRoutes');
// const userRouter = require('./src/routes/userRoutes');
const loginRouter = require('./src/routes/loginRouter');
const cookieSession = require('cookie-session');

const app = express();


app.set("view engine", "ejs");

app.use(cookieSession({
  name: 'session',
  keys: ['lknt42fnoh90hn2hf90w8fhofnwe0'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// * Setting the path where to point the view engine
app.set('views', path.join(__dirname, 'src/views'));

app.use(bodyParser.urlencoded({extended: true}));


app.use(loginRouter);

app.use('/urls', urlRouter);

// app.use('/user', userRouter);


module.exports = app;

/**
 * * This is better comments. use like this to annotate code in files
 * * important info
 * ! deprecated method, do not use
 * ? this is a question i have
 * TODO: stuff still to get done
 */

