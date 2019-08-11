const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const logger = require('morgan')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 8080

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://root:123root@ds261567.mlab.com:61567/heroku_b1fvqc7z'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection established')
})

app.use('/', routes);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });