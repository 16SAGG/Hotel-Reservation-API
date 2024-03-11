const {Router} = require('express')
const {post, getAll, getById, update, remove} = require('../controllers/user.controllers')
const { verifyToken, isAdmin, isModerator } = require('../middlewares')
const router = Router()

module.exports = router

router.post("/", [verifyToken, isAdmin], post)

router.get("/", [verifyToken, isModerator, isAdmin], getAll)

router.get("/:id", [verifyToken, isModerator, isAdmin], getById)

router.put("/:id", [verifyToken, isAdmin], update)

router.delete("/:id", [verifyToken, isAdmin], remove)