const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		console.log('Connecting to MongoDB...')
		await mongoose.connect(
			'mongodb+srv://00018169wiut:tA9UtX7Gf5AT4Qm2@cluster0.frqg9.mongodb.net/Books',
		)
		console.log('MongoDB connected')
		return mongoose.connection
	} catch (err) {
		console.error('Database connection error:', err.message)
		process.exit(1)
	}
}

module.exports = { connectDB }
