//================Depenedencies================//
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const cors = require('cors')
const User = require('../models/users.js')

app.use(cors())

//================Routes================//
sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {currentUser: req.session.currentUser})
})

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (error, foundUser) => {
        if(error){
            console.log(error)
            console.log('The db had a bug, one moment.')
        } else if(!foundUser) {
            console.log('Sorry, no user found')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.json(foundUser)
            } else {
                console.log('Password does not match.')
            }
        }
    })
})

//================Export================//
module.exports = sessions
