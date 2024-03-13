const { isNumberInRange } = require("../libs/utils")
const Reservations = require("../models/reservation.model")
const Rooms = require("../models/room.model")

const roomCtrl = {}

roomCtrl.post = async(req, res)=>{
    try{
        const body = req.body
        const response = await Rooms.create(body)
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

roomCtrl.getAll = async(req, res)=>{
    try{
        const response = await Rooms.find({})
        res.json(response)
    }
    catch (err){
        res.json(err)
    }
    
}

roomCtrl.getById = async(req, res)=>{
    try{
        const id = req.params.id
        const response = await Rooms.findById(id)
        res.json(response)
    }
    catch (err){
        res.json(err)
    }
}

roomCtrl.getAvailableRoomsByRequirements = async(req, res)=>{
    try{
        const checkIn = req.params.check_in
        const checkOut = req.params.check_out
        const guestsCount = req.params.guests_count

        const roomsWithEnoughCapacity = await Rooms.find({maxCapacity : {$gte : guestsCount}})

        const notAvailableRooms = await Reservations.find(
            {
                $or: [{
                        checkIn: {$lte: checkIn},
                        checkOut: {$gt: checkIn}
                    }, 
                    {
                        checkIn: {$lt: checkOut},
                        checkOut: {$gte: checkOut}
                    }
                ]
                
            },
            'room'
        )

        const availableRooms = [...roomsWithEnoughCapacity]

        let narIterator = 0
        while (narIterator < notAvailableRooms.length) {
            availableRooms.map((room, _index)=>{
                const notAvailable = notAvailableRooms[narIterator].room.toString()
                if (room._id.toString() === notAvailable){
                    availableRooms.splice(_index, 1)
                }
            })
            narIterator += 1
        }
        
        res.json(availableRooms)
    }catch(err){
        res.json(err)
    }
}

roomCtrl.update = async(req, res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const response = await Rooms.findOneAndUpdate({_id: id}, body)
        res.json(body)
    }
    catch(err){
        res.json(err)
    }
}

roomCtrl.remove = async(req, res)=>{
    try{
        const id = req.params.id
        const response = await Rooms.deleteOne({_id: id})
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

module.exports = roomCtrl