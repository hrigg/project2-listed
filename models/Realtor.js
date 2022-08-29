const mongoose = require('mongoose')

const realtorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name can not be empty"],},
    email: {type: String, required: [true, "image can not be empty"]},
    note: {type: String},
    city: {type: String, required: [true, "city can not be empty"],},
    image: {type: String, required: [true, "image can not be empty"]},
    house: {
        type: mongoose.Types.ObjectId,
        ref: "House",
      },
}, {timestamps: true,
})

const Realtor = mongoose.model('Realtor', realtorSchema)

module.exports = Realtor