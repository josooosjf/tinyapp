const express = require('express');
const userController = require('../controller/userController');
const urlController = require('../controller/urlController');

const loginRouter = express.Router();

loginRouter
  .route("/")
  .get(urlController.getHome)
  .post(urlController.createNew);

loginRouter
  .route('/new')
  .get(urlController.getNew)
  .post(urlController.createNew);


loginRouter
  .route("/register")
  .get(userController.registerPage)
  .post(userController.registerUser);

loginRouter
  .route('/login')
  .get(userController.loginPage)
  .post(userController.login);

loginRouter
  .route('/logout')
  .post(userController.logout);

loginRouter
  .route('/u/:shortURL')
  .get(urlController.redirect);


module.exports = loginRouter;


