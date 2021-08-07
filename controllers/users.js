//================Depenedencies================//
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

//================Routes================//
users.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        console.log('User is created: ', createdUser)
        res.json(createdUser)
    })
})

//================Export================//
module.exports = users
