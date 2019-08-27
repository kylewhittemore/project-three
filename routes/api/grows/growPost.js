const Grow = require("../../../database/models/grow")
const User = require('../../../database/models/user')

module.exports = (req, res) => {
    console.log("user id: ", req.params.id)
    console.log(req.body)
    return Grow.create(req.body)
        .then(dbGrow => {

            console.log("db grow: ", dbGrow)
            return User.findByIdAndUpdate(req.params.id,
                {
                    $push: { grows: dbGrow._id }
                },
                {
                    new: true
                })
            })
            .then(user => res.json(dbGrow))
            .catch(err => res.json(err))

};