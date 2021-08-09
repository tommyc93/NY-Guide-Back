//================Depenedencies================//
const express = require('express')
const router = express.Router()
const cors = require('cors')
const Guide = require('../models/nyguide.js')

app.use(cors())

//================Routes================//
//*****Index*****//
router.get('/', (req, res) => {
    Guide.find({}, (err, foundGuide) => {
        res.json(foundGuide)
    })
})

//*****Create*****//
router.post('/', (req, res) => {
    Guide.create(req.body, (err, createdGuide) => {
        res.json(createdGuide)
    })
})

//*****Edit*****//
router.put('/:id', (req, res) => {
    Guide.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}, (err,updatedGuide) => {
            res.json(updatedGuide)
        }
    )
})

//*****Delete*****//
router.delete('/:id', (req, res) => {
    Guide.findByIdAndRemove(req.params.id, (err, deletedGuide) => {
        res.json(deletedGuide)
    })
})

//================Export================//
module.exports = router
