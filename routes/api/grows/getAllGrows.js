const Grow = require('../../../database/models/grow')

module.exports = (req, res) => {
    Grow.find({}).populate("dailyLogs").exec(function (err, dailyLogs) {
        if (err) {
            console.log(err)
        } else {
            res.json(dailyLogs)
        };
    });
}