const express = require('express')
const hunterRoute = express.Router()
const Bounty = require('../model/bounties.js')

hunterRoute.get('/', (req, res, next) => {
    Bounty.find((err, getBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getBounty)
    })
})



module.exports = hunterRoute