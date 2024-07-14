const express = require('express')
const {connect} = require("mongoose")
const app = express()

require('./start/modules')(app, express)
require('./start/start')(app)

const run = async() => {
    await connect("mongodb+srv://azizkobulovbackend:yX6P3MnsZxexKJlO@project.lfa6x8v.mongodb.net/restaurant")
}

run()

