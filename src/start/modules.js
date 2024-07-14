const userRoute = require('../routes/user.route')
const adminRoute = require('../routes/admin.route')
const fileupload = require('express-fileupload')
const errorHandler = require('../middlewares/errorHandler')

const modules = async(app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(fileupload())
    app.set('view engine', 'ejs')

    app.use('/', userRoute)
    app.use('/admin', adminRoute)
    app.use(errorHandler)
}

module.exports = modules