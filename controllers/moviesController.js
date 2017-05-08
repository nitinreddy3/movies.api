var Movie = require('./../models/movieModel')

var get = (req, res) => {
  Movie.find((err, movies) => {
    if(err) {
      res.status(500);
      res.send('Internal server error')
    } else {
      res.status(200);
      res.send(movies);
    }
  })
};

var add = (req, res) => {
  var movie = new Movie(req.body);
  movie.save((err) => {
    if(err) {
      res.status(500);
      res.send('Internal server error')
    } else {
      res.status(200);
      res.send(movie);
    }
  })
};

var getById = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(err) {
      res.status(404);
      res.send('not found')
    } else {
      res.status(200);
      res.send(movie);
    }
  })
};

var update = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(err) {
      res.status(404);
      res.send('not found')
    } else {
      movie.title = req.body.title;
      movie.genre = req.body.genre;
      movie.rating = req.body.rating;
      movie.isReleased = req.body.isReleased;
      movie.save((err) => {
        if(!err) {
          res.status(200);
          res.send(movie) 
        } else {
          res.status(500);
          res.send('Internal Server Error') 
        }
      })
    }
  })
};

var patch = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(!err) {
      if(req.body._id) {
        delete req.body._id
      }
      for (var p in req.body) {
        movie[p] = req.body[p]
      }
      movie.save((err) => {
        if(!err) {
          res.status(200);
          res.send(movie) 
        } else {
          res.status(500);
          res.send('Internal Server Error') 
        }
      })
    }
  })
};

var del = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    movie.remove((err) => {
      if(!err) {
        res.status(200);
        res.send('Removed');
      } else {
        res.status(404);
        res.send('NOOO');
      }
    })
  })
};

module.exports = {
  get: get,
  add: add,
  getById: getById,
  update: update,
  patch: patch,
  del: del
}