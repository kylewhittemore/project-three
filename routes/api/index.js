const routes = require('express').Router()
const DailyLog = require('../../database/models/dailyLog')

// const dailyLog = require('./dailyLog')
// routes.post('/daily', dailyLog)

routes.post('/daily', function(req, res) {
    console.log("from the api route: ", req.body)
    DailyLog.create(req.body)
        .then(dbDailyLog => res.json(dbDailyLog))
        .catch(err => res.json(err))
})

module.exports = routes