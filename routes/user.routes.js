const {Router} = require('express')
const {post, getAll, getById, update, remove} = require('../controllers/user.controllers')
const { verifyToken, isAdmin, isAuthor} = require('../middlewares')
const router = Router()

module.exports = router

router.post("/", [verifyToken, isAdmin], post)

router.get("/", [verifyToken, isAdmin], getAll)

router.get("/:id", [verifyToken, isAuthor, isAdmin], getById)

router.put("/:id", [verifyToken, isAuthor, isAdmin], update)

router.delete("/:id", [verifyToken, isAuthor, isAdmin], remove)