require('dotenv/config')

const {env} = process

const config = {
    port: +env.port,
    jwtSecretKey: env.JWT_SECRET_KEY,
    mail: {
        host: env.MAIL_HOST,
        port: env.MAIL_PORT,
        user: env.MAIL_USER,
        pass: env.MAIL_PASS,
    }
}

module.exports = config