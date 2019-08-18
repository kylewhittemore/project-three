const routes = require('express').Router()

// This route posts the daily log form 
// Tested working
const dailyLog = require('./dailyLog')
routes.post('/daily', dailyLog)

module.exports = routes