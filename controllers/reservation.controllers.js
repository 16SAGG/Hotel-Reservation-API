const Reservations = require("../models/reservation.model")

const reservationCtrl = {}

reservationCtrl.post = async(req, res)=>{
    try{
        const body = req.body
        const response = await Reservations.create(body)
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

reservationCtrl.getAll = async(req, res)=>{
    try{
        const response = await Reservations.find({})
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

reservationCtrl.getById = async(req, res)=>{
    try{
        const reservationId = req.params.reservation_id
    
        const response = await Reservations.findById(reservationId)
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

reservationCtrl.update = async(req, res)=>{
    try{
        const reservationId = req.params.reservation_id
        const body = req.body

        const response = await Reservations.findOneAndUpdate({_id: reservationId}, body)
        res.json(body)
    }
    catch (err){
        res.json(err)
    }
}

reservationCtrl.remove = async(req, res)=>{
    try{
        const reservationId = req.params.reservation_id
        const response = await Reservations.deleteOne({_id: reservationId})
        res.json({message: "Reservation Deleted"})
    }
    catch(err){
        res.json(err)
    }
}

module.exports = reservationCtrl