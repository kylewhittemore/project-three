const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.find(function (err, dbLogs) {
        if (err) {
            console.log(err)
        } else {
            res.json(dbLogs)
        };
    });
}