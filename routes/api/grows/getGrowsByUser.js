let Grow = require('../../../database/models/grow')
const User = require('../../../database/models/user')

module.exports = (req, res) => {
    User.find({ _id: req.params.id })
        .populate("grows")
        .then(dbGrows => {
            console.log(dbGrows[0].grows)
            // let grows = dbUser
            res.json(dbGrows[0].grows)
        })
        .catch(err => res.json(err))
}