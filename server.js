//================Depenedencies================//
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const app = express()
const db = mongoose.connection
require('dotenv').config()

//================PORT================//
const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI

const corsOptions = {
    origin: "http://ny-guide-front-end-rina-tommy.herokuapp.com/",
    optionsSuccessStatus: 200
}

//================Middleware================//
app.use(cors(corsOptions))
app.use(express.json())

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
    () => {
        console.log("The connection with mongod is established")
})

//================Controllers================//
const nyguideController = require('./controllers/main.js')
app.use('/nyguide', nyguideController)
const userController = require('./controllers/users.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

//Route to Heroku
app.get('/', (req, res) => {
    res.redirect('/nyguide')
})

//================Listener================//
app.listen(PORT, () => {
  console.log('🍒🍋Listening on port🥝🍉', PORT)
})
