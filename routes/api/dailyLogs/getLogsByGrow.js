let DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.find({grow: req.params.id} )
    .sort({"date": -1})
    .populate('grow', 'seasonName')
    .populate("image")
    .then(dbDailyLogs => res.json(dbDailyLogs))
    .catch(err => res.json(err))
}