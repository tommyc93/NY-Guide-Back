//================Depenedencies================//
const mongoose = require('mongoose')

//================Schema================//
const guideSchema = new mongoose.Schema({
    title: String,
    category: String,
    location: String,
    images: [String],
    description: String,
    price: String,
    rating: Number,
    comments: [String],
    likes: Number,
    author: String
})

const Guide = mongoose.model('Guide', guideSchema)

//================Export================//
module.exports = Guide
