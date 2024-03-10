const Auths = require('../models/auth.model')

const authCtrl = {}

authCtrl.signUp = async(req, res)=>{
    const body = req.body
    console.log(body)
    //const response = await Auths.create(body)
    //res.send(response)
}

authCtrl.signIn = async(req, res)=>{
    res.json("Hola")
}

module.exports = authCtrl