const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    Grow.find()
        .then(dbGrows => res.json(dbGrows))
        .catch(err => res.json(err))
}