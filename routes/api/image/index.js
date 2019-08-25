const routes = require('express').Router()

const imageUpload = require('./imageUpload')
routes.post('/', imageUpload)

module.exports = routes