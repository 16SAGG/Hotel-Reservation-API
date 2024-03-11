const Roles = require('../models/role.model')
const Users = require('../models/user.model')
const Rooms = require('../models/room.model')

const createAdmin = async ()=>{
    try{
        const usersCount = await Users.estimatedDocumentCount()
        const usersIsNotVoid = usersCount > 0
        if (usersIsNotVoid) return

        const allRoles = await Roles.find({})
        console.log(allRoles)
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

module.exports = {createAdmin, createRoles, createRooms}