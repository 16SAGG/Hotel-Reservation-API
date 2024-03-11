const {Router} = require('express')
const {post, getAll, getById, update, remove} = require('../controllers/reservation.controllers')
const {verifyToken, isModerator, isAdmin, isAuthor} = require('../middlewares/index')
const router = Router()

module.exports = router

router.post("/:user_id", [verifyToken, isAuthor, isModerator], post)

router.get("/", [verifyToken, isModerator], getAll)

router.get("/:user_id/:reservation_id", [verifyToken, isAuthor, isModerator], getById)

router.put("/:user_id/:reservation_id", [verifyToken, isAuthor, isModerator], update)

router.delete("/:user_id/:reservation_id", [verifyToken, isAuthor, isModerator], remove)