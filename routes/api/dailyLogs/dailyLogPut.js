const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}