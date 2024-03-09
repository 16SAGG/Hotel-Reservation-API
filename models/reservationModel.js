const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    hotel:{
        type:Object,
        required: true
    },
    roomType:{
        type:String,
        required: true
    },
    client:{
        type:Object,
        required: true
    },
    initDate:{
        type:Date,
        required: true
    },
    endDate:{
        type:Date,
        required: true
    },
    rooms:{
        type:Number,
        required: true,
        default: 1
    },
    adults:{
        type:Number,
        required: true,
        default: 1
    },
    children:{
        type:Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

const reservationModel = mongoose.model("reservation", reservationSchema)
module.exports = reservationModel
