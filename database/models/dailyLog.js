const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = Promise

const DailyLogSchema = new Schema({
    logId: {
        type: Number,
        required: false,
        // required: true,   SET TO TRUE ONCE LOGIC IN PLACE
    },
    date: {
        type: Date,
        required: true
    },
    plantAppearance: {
        type: String,
        required: true
    },
    didWater: {
        type: Boolean,
        required: true
    },
    didFeed: {
        type: Boolean,
        required: true
    },
    didTransplant: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String,
        required: false
    }

})

const DailyLog = mongoose.model('DailyLog', DailyLogSchema)
module.exports = DailyLog