const express = require('express')
const router = express.Router()
const bookController = require('../../controllers/books')

// Get all books
router.get('/', bookController.getAllBooks)

// Form for creating a new book review
router.get('/new', bookController.newBookForm)

// Create a new book review
router.post('/', bookController.createBook)

// View a single book review
router.get('/:id', bookController.getBookById)

// Form for editing a book review
router.get('/:id/edit', bookController.editBookForm)

// Update a book review
router.put('/:id', bookController.updateBook)

// Delete a book review
router.delete('/:id', bookController.deleteBook)

module.exports = router
