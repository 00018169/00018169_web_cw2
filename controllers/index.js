// Home page
exports.getHomePage = (req, res) => {
	res.render('index', {
		title: 'Book Reviews App',
		message: 'Welcome to the Book Reviews App!',
	})
}

// About page
exports.getAboutPage = (req, res) => {
	res.render('about', {
		title: 'About Us',
		content: 'This app was created to help students share their book reviews.',
	})
}
