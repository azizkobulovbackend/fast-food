const {connect, Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})  

const Category = model("Category", schema)

module.exports = Category