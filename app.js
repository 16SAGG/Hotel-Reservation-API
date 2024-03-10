const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/reservation', require('./routes/reservation.routes'))
app.use('/user', require('./routes/user.routes'))
app.use('/room', require('./routes/room.routes'))

module.exports = app