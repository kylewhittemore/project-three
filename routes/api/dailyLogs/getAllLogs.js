const DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    DailyLog.find({}).populate("grow", "seasonName strainName").exec(function (err, grow) {
        if (err) {
            console.log(err)
        } else {
            res.json(grow)
        };
    });
}