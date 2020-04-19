const express = require('express');
const urlController = require('../controller/urlController');
const dataController = require('../controller/dataController');

const router = express.Router();


router
  .route('/')
  .get(urlController.getHome)
  .post(urlController.createNew);

router
  .route('/new')
  .get(urlController.getNew);

router
  .route('/:shortURL/delete')
  .post(dataController.delete);

router
  .route('/:shortURL')
  .get(urlController.getOne)
  .post(dataController.updateShortURL);
  
  

module.exports = router;

  

