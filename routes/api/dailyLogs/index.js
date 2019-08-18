const routes = require('express').Router()

// This route posts the daily log form 
// Tested working
const dailyLogPost = require('./dailyLogPost')
routes.post('/', dailyLogPost)

// This route returns all logs in the DB
// It is only used for development, in production
// we will need to restrict it to the authenticated user
// Tested Working
const getAllLogs = require('./getAllLogs')
routes.get('/', getAllLogs)

// This route updates a log by its mongo ID
// Tested working
const updateById = require('./dailyLogPut')
routes.put('/:id', updateById)

const deleteById = require('./dailyLogDelete')
routes.delete('/:id', deleteById)

module.exports = routes