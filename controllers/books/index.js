const bookService = require('../../services/books')

exports.getAllBooks = (req, res) => {
	const books = bookService.getAllBooks()
	res.render('books/list', {
		title: 'All Book Reviews',
		books,
	})
}

exports.newBookForm = (req, res) => {
	res.render('books/create', {
		title: 'Add New Book Review',
	})
}

exports.createBook = (req, res) => {
	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		review: req.body.review,
	}
	bookService.createBook(book)
	res.redirect('/books')
}

exports.getBookById = (req, res) => {
	const book = bookService.getBookById(req.params.id)
	if (!book) {
		return res.status(404).send('Book review not found')
	}
	res.render('books/view', {
		title: book.title,
		book,
	})
}

// Form for editing a book review
exports.editBookForm = (req, res) => {
	const book = bookService.getBookById(req.params.id)
	if (!book) {
		return res.status(404).send('Book review not found')
	}
	res.render('books/edit', {
		title: `Edit: ${book.title}`,
		book,
	})
}

exports.updateBook = (req, res) => {
	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		review: req.body.review,
	}
	bookService.updateBook(req.params.id, book)
	res.redirect('/books')
}

exports.deleteBook = (req, res) => {
	bookService.deleteBook(req.params.id)
	res.redirect('/books')
}
