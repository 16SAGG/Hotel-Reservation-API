const {Router} = require('express')
const {post, getAll, getById, update, remove} = require('../controllers/room.controllers')
const {verifyToken, isModerator, isAdmin} = require('../middlewares/index')
const router = Router()

module.exports = router

router.post("/", [verifyToken, isModerator, isAdmin], post)

router.get("/", getAll)

router.get("/:id", getById)

router.put("/:id", [verifyToken, isModerator, isAdmin], update)

router.delete("/:id", [verifyToken, isModerator, isAdmin],remove)