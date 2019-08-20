const routes = require('express').Router()

// This route posts the daily log form 
// Tested working
const dailyLog = require('./dailyLog')
routes.post('/daily', dailyLog)

const users = require('./user')
routes.use('/user', users)

module.exports = routes