const {Router} = require('express')
const {signUp, signIn} = require('../controllers/auth.controllers')
const router = Router()

module.exports = router

router.post('/signup', signUp)
router.post('/signin', signIn)
