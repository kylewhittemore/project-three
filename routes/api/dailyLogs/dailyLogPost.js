const DailyLog = require('../../../database/models/dailyLog')
const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    DailyLog.create(req.body)
        .then(dbDailyLog => {
            console.log("dbdaily   ", dbDailyLog)
            return Grow.findByIdAndUpdate(req.params.id,
                {
                    $push: { dailyLogs: dbDailyLog._id }
                },
                {
                    new: true
                }).then(grow => res.json(dbDailyLog))
        })
        // .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}

