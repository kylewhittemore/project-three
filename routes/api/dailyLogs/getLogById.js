let DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.findOne({_id: req.params.id})
    .populate("images")
    .then(dbDailyLog => res.json(dbDailyLog))
    .catch(err => res.json(err))
}