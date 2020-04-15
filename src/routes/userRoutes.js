const express = require('express');
const userController = require('../controller/userController');
const urlControllers = require('../controller/urlController');

const userRouter = express.Router();
module.exports = userRouter;

userRouter
  .route('/register')
  .get(urlControllers.registerPage);

userRouter
  .route('/login')
  .post(userController.login);

userRouter
  .route('/logout')
  .post(userController.logout);


