let DailyLog = require('../../../database/models/dailyLog')

module.exports = (req, res) => {
    const {event } = req.body
    switch (event) {

        case 'water':
            DailyLog.find(
                { $and: [{grow: req.params.id}, {didWater: true}]},
                ['date', 'didWater', 'notes'],
                {sort:{date: -1}}
                )
            .then(dbDailyLog => res.json(dbDailyLog))
            .catch(err => res.json(err))
            break

        case 'feed':
            DailyLog.find(
                { $and: [{grow: req.params.id}, {didFeed: true}]},
                ['date', 'didFeed', 'notes'],
                {sort:{date: -1}}
                )
            .then(dbDailyLog => res.json(dbDailyLog))
            .catch(err => res.json(err))
            break

        default:
            res.json({message: "not a valid event"})
    }
}