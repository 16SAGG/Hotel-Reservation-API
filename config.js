const mongoose = require('mongoose')
const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URL, {}, (err,res) =>{
        if (err) console.log(err)
        else console.log("Connection Success")
    })
}

module.exports = dbconnect