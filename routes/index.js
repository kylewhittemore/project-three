const routes = require('express').Router();

// this is the default /api path which requires the 'routes/api' directory where it references the index.js file for the remaining '/api/....' routes
// I have orgainized it so that each route has a file for maintainability.  To view all of the '/api' routes as a list with their test statuses use the '/routes/api/index.js' file
routes.get("/api", function (req, res) {
    res.status(200).json({ message: "connected!" });
});

module.exports = routes;