const routes = require('express').Router()

const passport = require('passport')
const isAuth = passport.authenticate('jwt', {session: false })

// This route posts the new user 
// tested: is working
const register = require('./register')
routes.post('/', register)

// This route authenicate the user when login in
// tested: is working
const authenticate = require('./authenticate')
routes.post('/authenticate', authenticate)

// This is route to display the user's info for testing, requires username is logged in
// tested: is working 
const profile = require('./profile')
routes.get('/profile', isAuth, profile)

module.exports = routes