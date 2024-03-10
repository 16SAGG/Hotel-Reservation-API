const jwt = require('jsonwebtoken')
const Auths = require('../models/auth.model')

const secondsPerDay = 86400

const authCtrl = {}

authCtrl.signUp = async(req, res)=>{
    const {username, email, password, roles} = req.body

    const body = {
        username,
        email,
        password: await Auths.encryptPassword(password)
    }

    const response = await Auths.create(body)

    const token = jwt.sign(
        {id: response._id}, process.env.SECRET_CODE, {expiresIn: secondsPerDay}
    )

    res.json({token})
}

authCtrl.signIn = async(req, res)=>{
    res.json("Hola")
}

module.exports = authCtrl