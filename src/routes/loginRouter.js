const express = require('express');
const userController = require('../controller/userController');
const urlController = require('../controller/urlController');
const dataController = require('../controller/dataController');

const loginRouter = express.Router();
module.exports = loginRouter;

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
  .get(urlController.registerPage)
  .post(userController.registerUser);

loginRouter
  .route('/login')
  .get(userController.loginPage)
  .post(userController.login);

loginRouter
  .route('/logout')
  .post(userController.logout);

// loginRouter

//   .route('/urls/:shortURL/delete')
//   .post(dataController.delete);

// loginRouter

//   .route('/urls/:shortURL')
//   .get(urlController.getOne)
//   .post(dataController.updateShortURL);

// loginRouter

//   .route('/urls/u/:shortURL')
//   .get(urlController.redirect);


