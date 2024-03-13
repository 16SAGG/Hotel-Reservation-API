const Roles = require('../models/role.model')
const Users = require('../models/user.model')
const Rooms = require('../models/room.model')
const Reservations = require('../models/reservation.model')
const { currentDate, millisecondsPerDay } = require('./values')

const createAdmin = async ()=>{
    try{
        const usersCount = await Users.estimatedDocumentCount()
        const usersIsNotVoid = usersCount > 0
        if (usersIsNotVoid) return

        const allRoles = await Roles.find({})
        const admin = await Users.create({
            name: "The",
            lastname: "Admin",
            email: "admin@admin.com",
            password: await Users.encryptPassword(process.env.ADMIN_PASSWORD),
            birthDate: new Date(Date.now()),
            direction: "The Heaven",
            phone: "00000000",
            roles: allRoles
        })
        console.log(admin)
    }
    catch(err){
        console.log(err)
    }
}

const createRoles = async () =>{
    try{
        const rolesCount = await Roles.estimatedDocumentCount()

        if(rolesCount > 0) return

        const values = await Promise.all([
            Roles.create({name: "user"}),
            Roles.create({name: "moderator"}),
            Roles.create({name: "admin"})
        ])

        console.log(values)
    }
    catch(err){
        console.log(err)
    }
}

const createRooms = async () =>{
    try{
        const roomsCount = await Rooms.estimatedDocumentCount()

        if(roomsCount > 0) return

        const values = await Promise.all([
            Rooms.create({
                name: "basic",
                pricePerNight: 100.45,
                maxCapacity: 3,
            }),
            Rooms.create({
                name: "biggest",
                pricePerNight: 350.15,
                maxCapacity: 6,
            }),
            Rooms.create({
                name: "premium",
                pricePerNight: 750.35,
                maxCapacity: 4,
            }),
        ])

        console.log(values)
    }
    catch(err){
        console.log(err)
    }
}

const createReservations = async()=>{
    try{
        const reservationsCount = await Reservations.estimatedDocumentCount()

        if(reservationsCount > 0) return

        const admin = await Users.findOne({name: "The"})
        const basicRoom = await Rooms.findOne({name: "basic"})
        const biggestRoom = await Rooms.findOne({name: "biggest"})
        const premiumRoom = await Rooms.findOne({name: "premium"})

        const values = await Promise.all([
            Reservations.create({
                user: admin,
                room: basicRoom,
                checkIn: currentDate + millisecondsPerDay * 0,
                checkOut: currentDate + millisecondsPerDay * 3,
                adultsQuantity: 2,
                childrenQuantity: 0,
            }),
            Reservations.create({
                user: admin,
                room: premiumRoom,
                checkIn: currentDate + millisecondsPerDay * 0,
                checkOut: currentDate + millisecondsPerDay * 1,
                adultsQuantity: 2,
                childrenQuantity: 0,
            }),
            Reservations.create({
                user: admin,
                room: biggestRoom,
                checkIn: currentDate + millisecondsPerDay * 2,
                checkOut: currentDate + millisecondsPerDay * 4,
                adultsQuantity: 2,
                childrenQuantity: 0,
            }),
        ])
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {createAdmin, createRoles, createRooms, createReservations}