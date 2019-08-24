const Grow = require("../../../database/models/grow")
const User = require('../../../database/models/user')

module.exports = (req, res) => {
    console.log("user id: ", req.params.id)
    Grow.create(req.body)
    .then(dbGrow => {
        console.log("db grow: ", dbGrow)
        return User.findByIdAndUpdate(req.params.id, { $push: { grows: dbGrow[0]._id } }, { new: true })
    })
        .then(dbGrow => res.json(dbGrow))
        .catch(err => res.json(err))
}