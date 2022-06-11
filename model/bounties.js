const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Blueprint
const bountiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
})

//Generate Model
module.exports = mongoose.model('Bounty', bountiesSchema)