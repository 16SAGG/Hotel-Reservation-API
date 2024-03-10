const {Router} = require('express')
const {signUp, signIn} = require('../controllers/auth.controllers')
const router = Router()

module.exports = router

router.get('/signup', signUp)
router.get('/signin', signIn)
