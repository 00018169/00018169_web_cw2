const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, '../../db.json')

const readBooksFromFile = () => {
	try {
		if (!fs.existsSync(dbPath)) {
			fs.writeFileSync(dbPath, JSON.stringify({ books: [] }), 'utf8')
			return { books: [] }
		}
		const data = fs.readFileSync(dbPath, 'utf8')
		return JSON.parse(data)
	} catch (error) {
		console.error('Error reading from file:', error)
		return { books: [] }
	}
}

const writeBooksToFile = (data) => {
	try {
		fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8')
		return true
	} catch (error) {
		console.error('Error writing to file:', error)
		return false
	}
}

exports.getAllBooks = () => {
	try {
		const data = readBooksFromFile()
		return data.books
	} catch (error) {
		console.error('Error getting books:', error)
		return []
	}
}

exports.createBook = (bookData) => {
	try {
		const data = readBooksFromFile()
		const book = {
			id: Date.now().toString(),
			...bookData,
			createdAt: new Date(),
			updatedAt: new Date(),
		}
		data.books.push(book)
		writeBooksToFile(data)
		return book
	} catch (error) {
		console.error('Error creating book:', error)
		return null
	}
}

exports.getBookById = (id) => {
	try {
		const data = readBooksFromFile()
		return data.books.find((book) => book.id === id) || null
	} catch (error) {
		console.error('Error getting book by ID:', error)
		return null
	}
}

exports.updateBook = (id, bookData) => {
	try {
		const data = readBooksFromFile()
		const index = data.books.findIndex((book) => book.id === id)
		if (index === -1) return null

		data.books[index] = {
			...data.books[index],
			...bookData,
			id,
			updatedAt: new Date(),
		}
		writeBooksToFile(data)
		return data.books[index]
	} catch (error) {
		console.error('Error updating book:', error)
		return null
	}
}

exports.deleteBook = (id) => {
	try {
		const data = readBooksFromFile()
		const index = data.books.findIndex((book) => book.id === id)
		if (index === -1) return null

		const deletedBook = data.books[index]
		data.books = data.books.filter((book) => book.id !== id)
		writeBooksToFile(data)
		return deletedBook
	} catch (error) {
		console.error('Error deleting book:', error)
		return null
	}
}
