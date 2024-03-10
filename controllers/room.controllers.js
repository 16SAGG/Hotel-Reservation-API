const Rooms = require("../models/room.model")

const roomCtrl = {}

roomCtrl.post = async(req, res)=>{
    const body = req.body
    const response = await Rooms.create(body)
    res.send(response)
}

roomCtrl.getAll = async(req, res)=>{
    const response = await Rooms.find({})
    res.send(response)
}

roomCtrl.getById = async(req, res)=>{
    const id = req.params.id
    const response = await Rooms.findById(id)
    res.send(response)
}

roomCtrl.update = async(req, res)=>{
    const id = req.params.id
    const body = req.body
    const response = await Rooms.findOneAndUpdate({_id: id}, body)
    res.send(response)
}

roomCtrl.remove = async(req, res)=>{
    const id = req.params.id
    const response = await Rooms.deleteOne({_id: id})
    res.send(response)
}

module.exports = roomCtrl