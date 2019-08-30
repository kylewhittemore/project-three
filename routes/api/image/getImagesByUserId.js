let User = require('../../../database/models/user')

module.exports = (req, res) => {
    User.findOne({ _id: req.params.id })
        .populate("grows")
        .populate("images", "s3Id")
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err))
}