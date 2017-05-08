var express = require('express');

var moviesRouter  = express.Router();

var moviesController = require('./../controllers/moviesController');

moviesRouter.route('')
  .get(moviesController.get)
  .post(moviesController.add)
  .delete(moviesController.del)

moviesRouter.route('/:id')
  .get(moviesController.getById)
  .put(moviesController.update)
  .patch(moviesController.patch)
module.exports = moviesRouter;