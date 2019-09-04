const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    didDefoliate: {
        type: Boolean,
        required: true
    },
    didFlip: {
        type: Boolean,
        required: true
    },
    didFlush: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: false
    },
    grow: {
        type: Schema.Types.ObjectId,
        ref: "Grow"
    },
    image:
        {
            type: Schema.Types.ObjectId,
            ref: "Image"
        }
})

module.exports = mongoose.model('DailyLog', DailyLogSchema)