const express = require('express');
const urlController = require('../controller/urlController');
const dataController = require('../controller/dataController');

const router = express.Router();
module.exports = router;

router
  .route('/')
  .get(urlController.getHome)
  .post(urlController.createNew)

router
  .route('/new')
  .get(urlController.getNew)

router
  .route('/:shortURL/delete')
  .post(dataController.delete)

router
  .route('/:shortURL')
  .get(urlController.getOne)

router
  .route('/u/:shortURL')
  .get(urlController.redirect)

