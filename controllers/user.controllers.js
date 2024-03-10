const Users = require("../models/user.model")

const userCtrl= {}

userCtrl.post = async(req, res)=>{
    const body = req.body
    const response = await Users.create(body)
    res.send(response)
}
    
userCtrl.getAll = async(req, res)=>{
    const response = await Users.find({})
    res.send(response)
}


userCtrl.getById = async(req, res)=>{
    const id = req.params.id
    const response = await Users.findById(id)
    res.send(response)
}

userCtrl.update = async(req, res)=>{
    const id = req.params.id
    const body = req.body
    const response = await Users.findOneAndUpdate({_id: id}, body)
    res.send(response)
}

userCtrl.remove = async(req, res)=>{
    const id = req.params.id
    const response = await Users.deleteOne({_id: id})
    res.send(response)
}

module.exports = userCtrl