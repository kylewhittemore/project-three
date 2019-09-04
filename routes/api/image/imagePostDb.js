const Image = require('../../../database/models/image')
const User = require('../../../database/models/user')
const DailyLog = require('../../../database/models/dailyLog')
const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    let image;
    console.log("REQQQQQQQ", req)
    Image.create({
        name: req.body.name,
        s3Id: req.body.s3Id,
        dailyLog: req.body.dailyLogId,
        grow: req.body.growId,
        user: req.body.userId,
        date: req.body.date,
        caption: req.body.caption

    }).then(dbImage => {
        image = dbImage
        return User
            .findByIdAndUpdate(image.user,
                {
                    $push: { images: image._id }
                },
                {
                    new: true
                })
            .then(user => {
                return DailyLog
                    .findByIdAndUpdate(image.dailyLog,
                        {
                            $set: { image: image._id }
                        },
                        {
                            new: true
                        })
            })
            .then(log => {
                return Grow
                    .findByIdAndUpdate(image.grow,
                        {
                            $push: { images: image._id }
                        },
                        {
                            new: true
                        })
            })
            .then(grow => res.json(image))
            .catch(err => res.json(err))
    })
}