const routes = require('express').Router();

const dailyLogs = require('./dailylogs')
routes.use('/daily', dailyLogs)

module.exports = routes