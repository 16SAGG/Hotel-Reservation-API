require('dotenv').config()

const app = require('./app')
const dbconnect = require('./config')

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`${PORT} server`)
})

dbconnect()