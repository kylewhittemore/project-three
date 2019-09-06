const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.findOneAndUpdate({date: req.body.date}, { $set: {temp: req.body.temp }}
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
}
findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
