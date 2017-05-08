var express = require('express');

var app = express();

var moviesRouter = require('./routes/moviesRouter');

app.listen(3000, () => {
  console.log('server is running on port 3000...')
})

app.use('/movies', moviesRouter)