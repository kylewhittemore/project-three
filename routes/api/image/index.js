const routes = require('express').Router()

const imageUpload = require('./imageUpload')
routes.post('/s3', imageUpload)

const imagePostDb = require('./imagePostDb')
routes.post('/db', imagePostDb)

module.exports = routes