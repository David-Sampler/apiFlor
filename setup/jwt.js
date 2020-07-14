const jwt = require('jsonwebtoken')

const secret = "flor2020Maracuja"

const verificacao = {

    sign: payload => jwt.sign(payload,secret,{expiresIn:86400}),    
    decode: token => jwt.verify(token,secret)

}


module.exports = verificacao