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

//================Middleware================//

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

app.use(cors())

//Route to Heroku
app.get('/', (req, res) => {
    res.send('Hello World')


//================Listener================//
app.listen(PORT, () => {
  console.log('🍒🍋Listening on port🥝🍉', PORT)
})
