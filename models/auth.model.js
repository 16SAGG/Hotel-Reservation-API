const mongoose = require('mongoose')

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
    timestamps:true
})

authSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

authSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Auths = mongoose.model("auth", authSchema)
module.exports = Auths