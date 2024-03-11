const jwt = require('jsonwebtoken')
const Users = require('../models/user.model')
const Roles = require('../models/role.model')

const verifyToken = async(req, res, next) =>{
    const token = req.headers["x-access-token"]

    if (!token) return res.json({message: "No Token Provided"})
    
    jwt.verify(token, process.env.SECRET_CODE, (err, decoded) =>{
        if (err) return res.json({message: "No Authorized"})
    
        req.userId = decoded.id
        return next()
    })
}

const isAuthor = async (req, res, next)=>{
    const currentUserIsInParams = req.userId === req.params.user_id
    const currentUserIsInBody = req.body.user === undefined || req.userId === req.body.user

    console.log(req.userId)
    console.log(req.params.user_id)
    
    if (currentUserIsInParams && currentUserIsInBody) req.currentUserIsTheAuthor = true

    return next()
}

const isModerator = async (req, res, next) =>{
    const currentUser = await Users.findById(req.userId)
    const userRoles = await Roles.find({_id: {$in: currentUser.roles}})
    const currentUserIsTheAuthor = req.currentUserIsTheAuthor
    
    if (currentUserIsTheAuthor) return next()

    for (let i=0; i< userRoles.length; i++){
        if (userRoles[i].name === "moderator") return next()
    }

    return res.json({message: "Moderator is Required"})
}

const isAdmin = async (req, res, next) =>{
    const currentUser = await Users.findById(req.userId)
    const userRoles = await Roles.find({_id: {$in: currentUser.roles}})
    const currentUserIsTheAuthor = req.currentUserIsTheAuthor
    
    if (currentUserIsTheAuthor) return next()

    for (let i=0; i< userRoles.length; i++){
        if (userRoles[i].name === "admin") return next()
    }

    return res.json({message: "Admin is Required"})
}



module.exports = {verifyToken, isAuthor, isModerator, isAdmin}