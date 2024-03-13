const Users = require("../models/user.model")

const userCtrl= {}

userCtrl.post = async(req, res)=>{
    try{
        const {name, lastName, email, password, birthDate, direction, phone, roles} = req.body

        const body = {
            name,
            lastName,
            email,
            password: await Users.encryptPassword(password),
            birthDate,
            direction,
            phone,
            roles
        }

        const response = await Users.create(body)

        res.json(response)
    }
    catch (err){
        res.json(err)
    }
}
    
userCtrl.getAll = async(req, res)=>{
    try{
        const response = await Users.find({})
        res.json(response)
    }
    catch (err){
        res.json(err)
    }
}


userCtrl.getById = async(req, res)=>{
    try{
        const id = req.params.id
        const response = await Users.findById(id)
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

userCtrl.update = async(req, res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const response = await Users.findOneAndUpdate({_id: id}, body)
        res.json(response)
    }
    catch (err){
        res.json(err)
    }
}

userCtrl.remove = async(req, res)=>{
    try{
        const id = req.params.id
        const response = await Users.deleteOne({_id: id})
        res.json(response)
    }
    catch(err){
        res.json(err)
    }
}

module.exports = userCtrl