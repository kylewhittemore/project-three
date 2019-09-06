const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    let dateIn = req.body.date
    DailyLog.findOneAndUpdate({date: req.body.date}, 
        {$set: {'temp': req.body.temp, 'humidity': req.body.humidity}}, {new: true})
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}
