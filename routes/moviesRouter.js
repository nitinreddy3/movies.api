var express = require('express');

var moviesRouter  = express.Router();

var moviesController = require('./../controllers/moviesController');
moviesRouter.route('')
  .get(moviesController);

module.exports = moviesRouter;