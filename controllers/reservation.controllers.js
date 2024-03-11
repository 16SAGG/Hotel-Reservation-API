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
    const reservationId = req.params.reservation_id
    
    const response = await Reservations.findById(reservationId)
    res.json(response)
}

reservationCtrl.update = async(req, res)=>{
    const reservationId = req.params.reservation_id
    const body = req.body

    const response = await Reservations.findOneAndUpdate({_id: reservationId}, body)
    res.json(body)
}

reservationCtrl.remove = async(req, res)=>{
    const reservationId = req.params.reservation_id
    const response = await Reservations.deleteOne({_id: reservationId})
    res.json({message: "Reservation Deleted"})
}

module.exports = reservationCtrl