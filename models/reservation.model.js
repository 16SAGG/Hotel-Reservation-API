const mongoose = require('mongoose')
const {currentDate, tomorrowDate} = require('../libs/values')

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        require: true
    },
    room: {
        type: mongoose.Types.ObjectId,
        ref: "room",
        require: true
    },
    checkIn: {
        type: Number,
        default: currentDate,
        min: currentDate,
        require: true
    },
    checkOut: {
        type: Number,
        default: tomorrowDate,
        min: tomorrowDate,
        require: true
    },
    adultsQuantity: {
        type: Number,
        default: 1,
        min: 1,
        require: true
    },
    childrenQuantity: {
        type: Number,
        default: 0,
        min: 0,
        require: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const Reservations = mongoose.model("reservation", reservationSchema)
module.exports = Reservations