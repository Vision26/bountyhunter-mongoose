const express =  require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

//Set up Mongoose - Connect Data Base
mongoose.connect('mongodb://localhost:27017/bountydb',
() => console.log('Data Base Connected')
)

//Set up the route in server.js with error message after
app.use('/hunter', require('./routes/hunterRoute'))
app.use((err, req, res, next) => {
    return res.send({
        errMsg: err.message
    })
})

app.listen(8000, () => console.log("Server - 8000 - Connected."))