const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const { connectDB } = require('./services/index')

// Create Express application
const app = express()

// Template engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Routes
const indexRoutes = require('./routes/index')
const bookRoutes = require('./routes/books')

app.use('/', indexRoutes)
app.use('/books', bookRoutes)

connectDB()
	.then(() => {
		// Start the server
		const PORT = 13000
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`)
		})
	})
	.catch((err) => {
		console.error('Failed to start application:', err)
		process.exit(1)
	})

module.exports = app
