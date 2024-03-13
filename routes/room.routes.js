const {Router} = require('express')
const {post, getAll, getById, update, remove, getAvailableRoomsByRequirements} = require('../controllers/room.controllers')
const {verifyToken, isModerator} = require('../middlewares/index')
const router = Router()

module.exports = router

router.post("/", [verifyToken, isModerator], post)

router.get("/", getAll)

router.get("/:id", getById)

router.get("/:check_in/:check_out/:guests_count", getAvailableRoomsByRequirements)

router.put("/:id", [verifyToken, isModerator], update)

router.delete("/:id", [verifyToken, isModerator],remove)