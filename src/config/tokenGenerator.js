const authconfig = require('../config/auth.json')
const jwt = require('jsonwebtoken')
module.exports = user =>{
    const token = jwt.sign({id:user.id, email:user.email,name:user.nickname},authconfig.secret,{expiresIn:86400})
    return token;
}