const User= require('../../../database/models/user')

module.exports = (req, res) => {
    // const defaultGrow = req.body.defaultGrow
    return User.findOneAndUpdate( { _id: req.params.id }, { $set: { defaultGrow: req.body.defaultGrow } }, { new: true })
        .then(dbUser => {
            console.log("user's default grow: ", dbUser.defaultGrow)
            res.json(dbUser)
            
        })
        .catch(err => res.json(err))
}