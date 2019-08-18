const DailyLog = require('../../database/models/dailyLog.js')

module.exports = (req, res) => {
    DailyLog.create(req.body)
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}

