const express = require('express');
const userController = require('../controller/userController');
const urlController = require('../controller/urlController');

const loginRouter = express.Router();
module.exports = loginRouter;

loginRouter
  .route("/")
  .get(urlController.getHome);

loginRouter
  .route("/register")
  .get(urlController.registerPage)
  .post(userController.registerUser);

loginRouter
  .route('/login')
  .get(userController.loginPage)
  .post(userController.login);



