const express = require('express')
const hunterRoute = express.Router()
const Bounty = require('../model/bounties.js')

//Router.get
hunterRoute.get('/', (req, res, next) => {
    Bounty.find((err, getBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getBounty)
    })
})

// Router.post
hunterRoute.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, addBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(addBounty)
    })
})

//Router.delete
hunterRoute.delete('/:hunterId', (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.hunterId}, (err, delBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(`${delBounty.name} Deleted.`)
    })
})

module.exports = hunterRoute