const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GrowSchema = new Schema({
    seasonName: {
        type: String,
        required: true
    },
    dateStarted: {
        type: Date,
        required: false
    },
    dateCompleted: {
        type: String,
        required: false
    },
    strainName: {
        type: String,
        required: false
    },
    lineage: {
        type: String,
        required: false
    },
    floweringTime: {
        type: String,
        required: false
    },
    breeder: {
        type: String,
        required: false
    },
    starterPlantType: {
        type: String,
        required: false
    },
    numPlants: {
        type: Number,
        required: false
    },
    medium: {
        type: String,
        required: false
    },
    vegLightType: {
        type: String,
        required: false
    },
    vegLightWattage: {
        type: Number,
        required: false
    },
    flowerLightType: {
        type: String,
        required: false
    },
    flowerLightWattage: {
        type: Number,
        required: false
    },
    lightNotes: {
        type: String,
        required: false
    },
    canopyTechnique: {
        type: String,
        required: false
    },
    canopyTechniqueNotes: {
        type: String,
        required: false
    },
    dailyLogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "DailyLog"
        }
    ]

})

module.exports = mongoose.model('Grow', GrowSchema)
