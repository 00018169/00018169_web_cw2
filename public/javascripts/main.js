// Confirmation dialog for delete action
document.addEventListener('DOMContentLoaded', () => {
	const deleteButtons = document.querySelectorAll('.delete-form')

	deleteButtons.forEach((form) => {
		form.addEventListener('submit', function (event) {
			const confirmed = confirm(
				'Are you sure you want to delete this book review?',
			)
			if (!confirmed) {
				event.preventDefault()
			}
		})
	})
})
