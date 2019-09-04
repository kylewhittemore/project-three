const routes = require('express').Router()

const passport = require('passport')
const isAuth = passport.authenticate('jwt', {session: false })

// This route posts the daily log form 
// Tested working
const dailyLogPost = require('./dailyLogPost')
routes.post('/:id', dailyLogPost)
// routes.post('/:id', isAuth, dailyLogPost)

// This route returns all logs in the DB
// It is only used for development, in production
// we will need to restrict it to the authenticated user
// Tested Working
const getAllLogs = require('./getAllLogs')
routes.get('/', getAllLogs)
// routes.get('/', isAuth, getAllLogs)

// This route updates a log by its mongo ID
// Tested working
const updateById = require('./dailyLogPut')
routes.put('/:id', updateById)
// routes.put('/:id', isAuth, updateById)

// This route deletes a daily log by its mongo ID
// Tested working
const deleteById = require('./dailyLogDelete')
routes.delete('/:id', deleteById)
// routes.delete('/:id', isAuth, deleteById)

// This route gets a daily log by its mongo ID
// NOT TESTED
const getById = require('./getLogById')
routes.get('/:id', getById)
// routes.get('/:id', isAuth, getById)

// This route ...
// NOT TESTED
const getEvent = require('./getEventsByGrow')
routes.get('/grow/:id', getEvent)
// routes.get('/:id', isAuth, getById)

module.exports = routes