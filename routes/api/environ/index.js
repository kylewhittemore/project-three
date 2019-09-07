const routes = require('express').Router()

const passport = require('passport')
const isAuth = passport.authenticate('jwt', {session: false })


// This route returns all logs in the DB
// It is only used for development, in production
// we will need to restrict it to the authenticated user
// Tested Working
const getByDate = require('./getLogByDate')
routes.post('/', getByDate)
// routes.get('/', isAuth, getAllLogs)



module.exports = routes