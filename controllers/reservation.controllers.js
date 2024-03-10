const Reservations = require("../models/reservation.model")

const reservationCtrl = {}

reservationCtrl.post = async(req, res)=>{
    const body = req.body
    const response = await Reservations.create(body)
    res.send(response)
}

reservationCtrl.getAll = async(req, res)=>{
    const response = await Reservations.find({})
    res.send(response)
}

reservationCtrl.getById = async(req, res)=>{
    const id = req.params.id
    const response = await Reservations.findById(id)
    res.send(response)
}

reservationCtrl.update = async(req, res)=>{
    const id = req.params.id
    const body = req.body
    const response = await Reservations.findOneAndUpdate({_id: id}, body)
    res.send(response)
}

reservationCtrl.remove = async(req, res)=>{
    const id = req.params.id
    const response = await Reservations.deleteOne({_id: id})
    res.send(response)
}

module.exports = reservationCtrl