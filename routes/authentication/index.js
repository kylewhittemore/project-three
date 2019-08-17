const routes = require('express').Router()

// this is the route to post a new user and password
const newUser = require('./newUser')
routes.post('/user', newUser)

const login = require('./login')
routes.post('/login', login)

const logout = require('./logout').default
routes.post('/logout', logout)

module.exports = routes