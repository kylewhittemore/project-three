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
        console.log('0##############', dbImage.user)
       return User
            .findByIdAndUpdate(dbImage.user,
                {
                    $push: { images: dbImage._id }
                },
                {
                    new: true
                })
    })
    // .then(dbImage => {
    //     console.log('1##############', dbImage.grow)
    //     Grow
    //         .findByIdAndUpdate(dbImage.grow,
    //             {
    //                 $push: { images: dbImage._id }
    //             },
    //             {
    //                 mew: true
    //             })
    //     return dbImage
    // }).then(dbImage => {
    //     console.log('2##############', dbImage.dailyLog)
    //     DailyLog
    //         .findByIdAndUpdate(dbImage.dailyLog,
    //             {
    //                 $push: { images: dbImage._id }
    //             },
    //             {
    //                 new: true
    //             })
    //     return dbImage
    // })
    .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err))
}