const routes = require('express').Router()

// This route posts the daily log form 
// Tested working
const dailyLog = require('./dailyLog')
routes.post('/', dailyLog)

// This route returns all logs in the DB
// It is only used for development, in production
// we will need to restrict it to the authenticated user
// Tested Working
const getAllLogs = require('./getAllLogs')
routes.get('/', getAllLogs)

module.exports = routes