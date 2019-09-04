const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    s3Id: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        required: false
    },
    caption: {
        type: String,
        required: false
    },
    dailyLog: {
        type: Schema.Types.ObjectId,
        ref: "DailyLog"
    },
    grow: {
        type: Schema.Types.ObjectId,
        ref: "Grow"
    }
})

module.exports = mongoose.model('Image', ImageSchema)