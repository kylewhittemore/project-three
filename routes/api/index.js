const routes = require('express').Router();

const dailyLogs = require('./dailyLogs')
routes.use('/daily', dailyLogs)

const grows = require('./grows')
routes.use('/grow', grows)

module.exports = routes