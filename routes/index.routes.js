const {Router} = require('express')
const pkg = require('../package.json')

const router = Router()

module.exports = router

router.get('/favicon.ico', (req, res) => res.send(''))

router.get('/', (req, res) => res.json({
    name: pkg.name,
    author: pkg.author,
    description: pkg.description,
    version: pkg.version
}))