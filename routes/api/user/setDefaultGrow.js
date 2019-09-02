const User= require('../../../database/models/user')

module.exports = (req, res) => {
    // const defaultGrow = req.body.defaultGrow
    return User.findOneAndUpdate( { _id: req.params.id }, { $set: { defaultGrow: req.body.defaultGrow } }, { new: true })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err))
}