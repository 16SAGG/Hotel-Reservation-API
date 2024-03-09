const mongoose = require('mongoose')
const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/hotel-reservation", {}, (err,res) =>{
        if (err) console.log("Connection Error")
        else console.log("Connection Success")
    })
}

module.exports = dbconnect