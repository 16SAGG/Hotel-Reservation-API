const Roles = require("../models/role.model")

const checkRolesExisted = async (req, res, next)=>{
    if(req.body.roles) {
        const roles = await Roles.find({})
        for (let i = 0; i < req.body.roles.length; i++){
            const roleExists = roles.includes(req.body.roles[i])
            if (!roleExists){
                return res.json({message: `Role '${req.body.roles[i]}' does not exists`})
            }
        }
    }

    next()
}

module.exports = {checkRolesExisted}