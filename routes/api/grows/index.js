const routes = require('express').Router()

// This route posts a new grow
// Tested working
const growPost = require('./growPost')
routes.post('/:id', growPost)

// This route updates a grow by ID
// Tested working
const updateById = require('./growPut') 
routes.put('/:id', updateById)

// This route gets all the grows, it is for development only as 
// in production the user should only be seeing their own grows
// Tested working
const getAllGrows = require('./getAllGrows')
routes.get('/', getAllGrows)

// This route will delete an entire grow by id
// It will need to delete all of the associated
// daily logs as well
// Tested working
const deleteById = require('./growDelete')
routes.delete('/:id', deleteById)

// This route gets a daily log by its mongo ID
// NOT TESTED
const getById = require('./getGrowById')
routes.get('/:id', getById)

const getbyUser = require('./getGrowsByUser')
routes.get('/user/:id', getbyUser)

module.exports = routes