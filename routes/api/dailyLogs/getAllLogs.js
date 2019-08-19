const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.find()
        .then(dbDailyLogs => res.json(dbDailyLogs))
        .catch(err => res.json(err))
}
