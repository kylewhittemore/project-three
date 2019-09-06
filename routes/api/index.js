const routes = require('express').Router();

const dailyLogs = require('./dailyLogs')
routes.use('/daily', dailyLogs)

const grows = require('./grows')
routes.use('/grow', grows)

const environ = require('./environ')
routes.use('/environ', environ)

const users = require('./user')
routes.use('/user', users)

const image = require('./image')
routes.use('/image', image)

module.exports = routes