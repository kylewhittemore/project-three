const Image = require('../../../database/models/image')
const User = require('../../../database/models/user')
const DailyLog = require('../../../database/models/dailyLog')
const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    let image;

    Image.create({
        name: req.body.name,
        s3Id: req.body.s3Id,
        // dailyLog: req.body.dailyLogId,
        grow: req.body.growId,
        user: req.body.userId

    }).then(headerImg => {
        image = headerImg
        return User
            .findByIdAndUpdate(image.user,
                {
                    $push: { images: image._id }
                },
                {
                    new: true
                })
            .then(user => {
                console.log("$$$$$$$$user: ", user)
                return Grow
                    .findByIdAndUpdate(image.grow,
                        {
                            $set: { coverImage: image._id }
                        },
                        {
                            new: true
                        })
            })
            .then(dbGrow => res.json(dbGrow))
            .catch(err => res.json(err))
    })
}