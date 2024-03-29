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

// This is route to set the default grow to the one chosen by the user
// NOT tested: is NOT working 
const setDefaultGrow = require('./setDefaultGrow')
routes.put('/setDefaultGrow/:id', isAuth, setDefaultGrow)

const getUserImages = require('./getUserImages')
routes.get('/getuserimages/:id', getUserImages)

module.exports = routes