const createToken = require('../libs/createToken')
const Users = require('../models/user.model')
const Roles = require('../models/role.model')

const secondsPerDay = 86400

const authCtrl = {}

authCtrl.signUp = async(req, res)=>{
    const {name, lastName, email, password, birthDate, direction, phone} = req.body

    const body = {
        name,
        lastName,
        email,
        password: await Users.encryptPassword(password),
        birthDate,
        direction,
        phone
    }

    const defaultRole = await Roles.findOne({name: "user"})
    body.roles = [defaultRole._id]

    const response = await Users.create(body)

    const token = createToken(response._id, process.env.SECRET_CODE, secondsPerDay)

    res.json({token: token})
}

authCtrl.signIn = async(req, res)=>{
    const authFound = await Users.findOne({email: req.body.email}).populate("roles")
    if (!authFound) return res.json({message: "Auth Not Found"})

    const matchPasword = await Users.matchPassword(req.body.password, authFound.password)
    if (!matchPasword) return res.json({token: '', message: "Invalid Password"})

    const token = createToken(authFound._id, process.env.SECRET_CODE, secondsPerDay)

    res.json({token: token})
}

module.exports = authCtrl