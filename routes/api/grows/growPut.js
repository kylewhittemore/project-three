const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    Grow.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(dbGrow => res.json(dbGrow))
        .catch(err => res.json(err))
}