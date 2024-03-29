const User= require('../../../database/models/user')

module.exports = (req, res) => {
    // const defaultGrow = req.body.defaultGrow
    return User.findOne( { _id: req.params.id })
        .populate("images")
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.json(err))
}
