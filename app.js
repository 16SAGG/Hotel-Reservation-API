const express = require('express')
const morgan = require('morgan')
const {createAdmin, createRoles, createRooms, createReservations} = require('./libs/initialSetup')
const { currentDate, tomorrowDate, millisecondsPerDay } = require('./libs/values')

const app = express()

createRoles()
createAdmin()
createRooms()
createReservations()

console.log(
    currentDate + millisecondsPerDay * 0,
    currentDate + millisecondsPerDay * 1,
    currentDate + millisecondsPerDay * 2,
    currentDate + millisecondsPerDay * 3,
    currentDate + millisecondsPerDay * 4,
)

app.use(express.json())
app.use(morgan('dev'))

app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/reservation', require('./routes/reservation.routes'))
app.use('/user', require('./routes/user.routes'))
app.use('/room', require('./routes/room.routes'))

module.exports = app