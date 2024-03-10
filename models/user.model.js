const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    birthDate: {
        type: Date,
        min: '1924-01-01',
        require: true
    },
    direction: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

userSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Users = mongoose.model("user", userSchema)
module.exports = Users