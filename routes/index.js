const routes = require('express').Router();

routes.get("/api", function (req, res) {
    res.status(200).json({ message: "connected!" });
});

module.exports = routes;