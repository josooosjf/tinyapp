const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const urlRouter = require('./src/routes/urlRoutes');
const cookieParser = require("cookie-parser");
const loginRouter = require('./src/routes/loginRouter');
const userRouter = require('./src/routes/userRoutes');


const app = express();

app.use(cookieParser());

app.set("view engine", "ejs");

// * Setting the path where to point the view engine
app.set('views', path.join(__dirname, 'src/views'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/urls', urlRouter);

app.use('/user', userRouter);



module.exports = app;

/**
 * * This is better comments. use like this to annotate code in files
 * * important info
 * ! deprecated method, do not use
 * ? this is a question i have
 * TODO: stuff still to get done
 */
 
