const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

// Home page
router.get('/', indexController.getHomePage)

// About page
router.get('/about', indexController.getAboutPage)

module.exports = router
