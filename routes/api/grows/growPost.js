const Grow = require("../../../database/models/grow")

module.exports = (req, res) => {
    Grow.create(req.body)
        .then(dbGrow => res.json(dbGrow))
        .catch(err => res.json(err))
}