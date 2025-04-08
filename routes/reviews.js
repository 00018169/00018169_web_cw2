const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	const reviews = [
		{
			id: 1,
			title: 'Война и мир',
			author: 'Толстой',
			review: 'Отличная книга!',
		},
		{
			id: 2,
			title: 'Преступление и наказание',
			author: 'Достоевский',
			review: 'Захватывающе!',
		},
	]
	res.render('reviews', { reviews: reviews })
})

router.post('/', (req, res) => {
	res.redirect('/reviews')
})

router.post('/delete/:id', (req, res) => {
	res.redirect('/reviews')
})

router.post('/update/:id', (req, res) => {
	res.redirect('/reviews')
})

module.exports = router
