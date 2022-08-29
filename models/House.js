const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name can not be empty"],},
    beds: { type: Number, required: [true, "beds can not be empty"],},
    baths: {type: Number, required: [true, "baths can not be empty"],},
    price: {type: Number, min: [0, 'you can not add a negative number'], required: [true, "price can not be empty"],},
    city: {type: String, required: [true, "city can not be empty"],},
}, {timestamps: true,
})

const House = mongoose.model('House', houseSchema)

module.exports = House