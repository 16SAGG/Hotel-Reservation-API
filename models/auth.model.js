const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        type: mongoose.Types.ObjectId,
        ref: "role"
    }]
},
{
    timestamps:true,
    statics:{
        encryptPassword : async password =>{
            console.log(password)
            const salt = await bcrypt.genSalt(10)
            return await bcrypt.hash(password, salt)
        },
        matchPassword : async function(password){
            return await bcrypt.compare(password, this.password)
        }
    }
})

const Auths = mongoose.model("auth", authSchema)
module.exports = Auths