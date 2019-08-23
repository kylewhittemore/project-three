const routes = require('express').Router()
const passport = require('passport')

// This route posts the new user 
// NOT  working
const register = require('./register')
routes.post('/', register)

// This route authenicate the user when login in
// NOT Working
const authenticate = require('./authenticate')
routes.post('/authenticate', authenticate)

const profile = require('./profile')
routes.get('/profile', passport.authenticate('jwt', {session: false }), profile)

module.exports = routes