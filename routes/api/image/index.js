const routes = require('express').Router()

const imageUpload = require('./imageUpload')
routes.post('/s3', imageUpload)

const imagePostDb = require('./imagePostDb')
routes.post('/db', imagePostDb)

const getUserImages = require('./getImagesByUserId')
routes.get('/user/:id', getUserImages)

module.exports = routes