const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getHomePage)
router.get('/about', indexController.getAboutPage)

module.exports = router
