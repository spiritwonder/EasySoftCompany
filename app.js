var express = require('express');

var app = express();


var router = express.Router();
var path = require('path');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

app.listen(6000, () => {
    console.log("Listening at :6000...");
});

app.engine('pug', require('pug').__express)


// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');