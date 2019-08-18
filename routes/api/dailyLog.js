const DailyLog = require('../../database/models/dailyLog.js')

module.exports = (req, res) => {
    console.log("from the api route: ", req.body)
    DailyLog.create(req.body)
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))

    // res.json(req.body)
}

