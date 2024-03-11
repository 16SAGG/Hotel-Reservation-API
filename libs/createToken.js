const jwt = require('jsonwebtoken')

const createToken = (id, code, timeToExpire)=>{
    return jwt.sign(
        {id: id}, code, {expiresIn: timeToExpire}
    )
}

module.exports = createToken