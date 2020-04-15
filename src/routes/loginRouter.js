const express = require('express');
const dataController = require('../controller/dataController');

const loginRouter = express.Router();


loginRouter
  .route('/login')
  .post(dataController.loginName);


