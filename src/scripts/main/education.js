const educationPages = document.querySelectorAll('.education__page');

educationPages.forEach((page, index) => {
	const prevButton = page.querySelector('.prev-button');
	const nextButton = page.querySelector('.next-button');

	if (nextButton) {
		nextButton.addEventListener('click', () => {
			educationPages[index].classList.remove('active');
			educationPages[index + 1].classList.add('active');
		});
	}

	if (prevButton) {
		prevButton.addEventListener('click', () => {
			educationPages[index].classList.remove('active');
			educationPages[index - 1].classList.add('active');
		});
	}
});