const {Router} = require('express')
const {post, getAll, getById, update, remove} = require('../controllers/room.controllers')
const router = Router()

module.exports = router

router.post("/", post)

router.get("/", getAll)

router.get("/:id", getById)

router.put("/:id", update)

router.delete("/:id", remove)