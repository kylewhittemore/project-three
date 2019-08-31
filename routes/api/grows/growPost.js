const Grow = require("../../../database/models/grow")
const User = require('../../../database/models/user')

module.exports = (req, res) => {
    console.log("user id: ", req.params.id)
    console.log("req.body", req.body)
    return Grow.create(req.body)
        .then(dbGrow => {

            console.log("db grow: ", dbGrow[dbGrow.length - 1].user._id)
            return User.findByIdAndUpdate(dbGrow[dbGrow.length - 1].user._id,
                {
                    $push: { grows: dbGrow[dbGrow.length - 1]._id }
                },
                {
                    new: true
                }).then(user => {
                    console.log("USER: ", user)
                    res.json(dbGrow[dbGrow.length - 1])
                })
            })
            // .then(user => {
            //     console.log("thennnnnnnnn", dbGrow)
            //     res.json(dbGrow)
            // })
            .catch(err => res.json(err))

};