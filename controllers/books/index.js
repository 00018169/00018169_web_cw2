const bookService = require('../../services/books')

// Get all books
exports.getAllBooks = async (req, res) => {
	const books = await bookService.getAllBooks()
	res.render('books/list', {
		title: 'All Book Reviews',
		books,
	})
}

// Form for creating a new book review
exports.newBookForm = (req, res) => {
	res.render('books/create', {
		title: 'Add New Book Review',
	})
}

// Create a new book review
exports.createBook = async (req, res) => {
	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		review: req.body.review,
	}
	await bookService.createBook(book)
	res.redirect('/books')
}

// View a single book review
exports.getBookById = async (req, res) => {
	const book = await bookService.getBookById(req.params.id)
	if (!book) {
		return res.status(404).send('Book review not found')
	}
	res.render('books/view', {
		title: book.title,
		book,
	})
}

// Form for editing a book review
exports.editBookForm = async (req, res) => {
	const book = await bookService.getBookById(req.params.id)
	if (!book) {
		return res.status(404).send('Book review not found')
	}
	res.render('books/edit', {
		title: `Edit: ${book.title}`,
		book,
	})
}

// Update a book review
exports.updateBook = async (req, res) => {
	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		review: req.body.review,
	}
	await bookService.updateBook(req.params.id, book)
	res.redirect('/books')
}

// Delete a book review
exports.deleteBook = async (req, res) => {
	await bookService.deleteBook(req.params.id)
	res.redirect('/books')
}
