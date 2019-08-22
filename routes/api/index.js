const routes = require('express').Router();

const dailyLogs = require('./dailyLogs')
routes.use('/daily', dailyLogs)

const grows = require('./grows')
routes.use('/grow', grows)

const users = require('./user')
routes.use('/user', users)

module.exports = routes