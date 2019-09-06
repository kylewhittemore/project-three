let DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.find({grow: req.params.id})
    .populate('grow', 'seasonName')
    .populate("image")
    .then(dbDailyLogs => res.json(dbDailyLogs))
    .catch(err => res.json(err))
}