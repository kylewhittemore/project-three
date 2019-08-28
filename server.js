const express = require('express');
const formData = require('express-form-data')
const path = require('path')
const logger = require('morgan')
const routes = require('./routes')
const dbConnection = require('./database')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()

// Morgan Logger middleware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(formData.parse())
// app.use(express.urlencoded({ extended: true }))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)

// serve the client/build folder as the static/public directory
app.use(express.static(path.join(__dirname, 'client/build')))

// import the routes from the './routes' directory
app.use('/', routes);


const PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });