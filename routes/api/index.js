const routes = require('express').Router()

const dailyLog = require('./dailyLog')
routes.post('/daily', dailyLog)


module.exports = routes