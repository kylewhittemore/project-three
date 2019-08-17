const routes = require('express').Router();

routes.get("/api", function (req, res) {
    res.status(200).json({ message: "connected!" });
});

// const api = require('./api')
// routes.use('/api', api)

const authentication = require('./authentication')
routes.use('/authentication', authentication)

module.exports = routes;