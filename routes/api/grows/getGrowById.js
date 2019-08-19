let Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    Grow.findOne({_id: req.params.id})
    .then(dbGrow => res.json(dbGrow))
    .catch(err => res.json(err))
}