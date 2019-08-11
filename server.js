const express = require('express');
const path = require('path')
const logger = require('morgan')
const routes = require('./routes')
const dbConnection = require('./database')

const app = express()
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/', routes);


const PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });