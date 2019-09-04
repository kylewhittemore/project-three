const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    return DailyLog.find({})
        // .populate("grow", "-dailyLogs")
        // .populate("images", "s3Id")
        .then(response => {
            // console.log("GAL******", response)
            res.json(response)
        }).catch(err => res.json(err))
}