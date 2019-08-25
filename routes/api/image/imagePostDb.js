const Image = require('../../../database/models/image')
const User = require('../../../database/models/user')
const DailyLog = require('../../../database/models/dailyLog')
const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    console.log("req.body: ", req.body)
    Image.create({
        name: req.body.name,
        s3Id: req.body.s3Id,
        dailyLog: req.body.dailyLogId,
        grow: req.body.growId,
        user: req.body.userId

    }).then(dbImage => {
        console.log('##############', dbImage)
        User
            .findByIdAndUpdate(req.body.userId,
                {
                    $push: { images: dbImage._id }
                },
                {
                    new: true
                })
        return dbImage
    }).then(dbImage => {
        console.log('##############', dbImage)
        Grow
            .findByIdAndUpdate(req.body.growId,
                {
                    $push: { images: dbImage._id }
                },
                {
                    mew: true
                })
        return dbImage
    }).then(dbImage => {
        console.log('##############', dbImage)
        DailyLog
            .findByIdAndUpdate(req.body.dailyLogId,
                {
                    $push: { images: dbImage._id }
                },
                {
                    new: true
                })
        return dbImage
    }).then(dbImage => res.json(dbImage))
        .catch(err => res.json(err))
}