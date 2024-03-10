const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    pricePerNight: {
        type: Number,
        require: true,
    },
    maxCapacity: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})

const Rooms = mongoose.model("room", roomSchema)
module.exports = Rooms