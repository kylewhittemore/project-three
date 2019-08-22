const routes = require('express').Router()

// This route posts the new user 
// NOT  working
const register = require('./register')
routes.post('/', register)

// This route authenicate the user when login in

// NOT Working
const authenticate = require('./authenticate')
routes.get('/', authenticate)



module.exports = routes