const express = require('express')
const router = express.Router()

// Получение всех отзывов
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

// Добавление нового отзыва
router.post('/', (req, res) => {
	// Здесь будет логика добавления
	res.redirect('/reviews')
})

// Удаление отзыва
router.post('/delete/:id', (req, res) => {
	// Здесь будет логика удаления
	res.redirect('/reviews')
})

// Обновление отзыва
router.post('/update/:id', (req, res) => {
	// Здесь будет логика обновления
	res.redirect('/reviews')
})

module.exports = router
