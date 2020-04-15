const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();
module.exports = userRouter;

userRouter
  .route('/login')
  .post(userController.login);

userRouter
  .route('/logout')
  .post(userController.logout);

