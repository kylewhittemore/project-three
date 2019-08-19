let DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.findOne({_id: req.params.id})
    .then(dbDailyLog => res.json(dbDailyLog))
    .catch(err => res.json(err))
}