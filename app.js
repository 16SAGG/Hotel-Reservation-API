const express = require('express')
const dbconnect = require('./config')
const reservationModel = require('./models/reservationModel')
const app = express()

const router = express.Router()

router.post("/", async(req, res)=>{
    const body = req.body
    const response = await reservationModel.create(body)
    res.send(response)
})

router.get("/", async(req, res)=>{
    const response = await reservationModel.find({})
    res.send(response)
})

router.get("/:id", async(req, res)=>{
    const id = req.params.id
    const response = await reservationModel.findById(id)
    res.send(response)
})

router.put("/:id", async(req, res)=>{
    const id = req.params.id
    const body = req.body
    const response = await reservationModel.findOneAndUpdate({_id: id}, body)
    res.send(response)
})

router.delete("/:id", async(req, res)=>{
    const id = req.params.id
    const response = await reservationModel.deleteOne({_id: id})
    res.send(response)
})

app.use(express.json())
app.use(router)
app.listen(3001, ()=>{
    console.log("3001 server")
})

dbconnect()