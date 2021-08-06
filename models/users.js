//================Depenedencies================//
const mongoose = require('mongoose')

//================Schema================//
const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        unique: true,
        required: true,
    },
    password: String
        
})

const User = mongoose.model('User', userSchema)

//================Export================//
module.exports = User
