const mongoose = require('mongoose')

// Book schema definition
const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
})

// Create Book model
const Book = mongoose.model('Book', bookSchema)

// Get all books
exports.getAllBooks = async () => {
	try {
		return await Book.find()
	} catch (error) {
		console.error('Error getting books:', error)
		return []
	}
}

// Create a new book
exports.createBook = async (bookData) => {
	try {
		const book = new Book({
			...bookData,
			createdAt: new Date(),
		})
		return await book.save()
	} catch (error) {
		console.error('Error creating book:', error)
		return null
	}
}

// Get a book by ID
exports.getBookById = async (id) => {
	try {
		return await Book.findById(id)
	} catch (error) {
		console.error('Error getting book by ID:', error)
		return null
	}
}

// Update a book
exports.updateBook = async (id, bookData) => {
	try {
		return await Book.findByIdAndUpdate(
			id,
			{
				...bookData,
			},
			{ new: true },
		)
	} catch (error) {
		console.error('Error updating book:', error)
		return null
	}
}

// Delete a book
exports.deleteBook = async (id) => {
	try {
		return await Book.findByIdAndDelete(id)
	} catch (error) {
		console.error('Error deleting book:', error)
		return null
	}
}
