const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, {
    timestamps:true
})

const Roles = mongoose.model("role", roleSchema)
module.exports = Roles