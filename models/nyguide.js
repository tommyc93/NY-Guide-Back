//================Depenedencies================//
const mongoose = require('mongoose')

//================Schema================//
const guideSchema = new mongoose.Schema({
    title: String,
    category: String,
    location: String,
    image: [String],
    description: String,
    price: String,
    rating: String,
    comments: [String],
    likes: {type: Number, default: 0},
    author: String
})

const Guide = mongoose.model('Guide', guideSchema)

//================Export================//
module.exports = Guide
