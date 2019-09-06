const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.findOne({date: req.body.date})
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}
