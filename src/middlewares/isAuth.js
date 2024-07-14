const {verify} = require('jsonwebtoken')
const config = require('../../config')

const isAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if(!token) return res.json({message: "Error, please register"})

    verify(token, config.jwtSecretKey, (error, data) => {
        if(error) return res.json({message: "Error"})

        req.user = data

        next()
})
}

module.exports = isAuth