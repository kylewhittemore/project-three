let Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    Grow.deleteOne({_id: req.params.id})
        .then(dbGrow => res.json(dbGrow))
        .catch(err => res.json(err))
}