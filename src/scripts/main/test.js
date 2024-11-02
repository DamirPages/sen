function initTest() {
	const testContainer = document.querySelector('.test__container');

	if (!testContainer) return;

	const testItems = testContainer.querySelectorAll('.test__item');
	const currentQuestion = document.querySelector('#current-question');
	const totalQuestions = document.querySelector('#total-questions');
	const progress = document.querySelector('#progress');
	const progressBar = document.querySelector('#progress-bar');

	if (totalQuestions) {
		totalQuestions.textContent = testItems.length;
	}
	if (currentQuestion) {
		currentQuestion.textContent = 1;
	}
	progress.textContent = '0%';
	progressBar.style.width = '0%';

	testItems.forEach((testItem, index) => {
		const inputs = testItem.querySelectorAll('input');
		const button = testItem.querySelector('.modal__button');

		inputs.forEach((input) => {
			input.addEventListener('change', () => {
				const hasBeenChecked = !!(testItem.querySelector(`input:checked`));

				if (hasBeenChecked) {
					button.disabled = false;
				} else {
					button.disabled = true;
				}
			});
		});

		button.addEventListener('click', () => {
			if (index + 1 < testItems.length) {
				testContainer.querySelector('.test__item.active').classList.remove('active');
				testItems[index + 1].classList.add('active');
				currentQuestion.textContent = index + 2;
				progress.textContent = `${Math.round((index + 1) / testItems.length * 100)}%`;
				progressBar.style.width = `${Math.round((index + 1) / testItems.length * 100)}%`;
			}
		});
	});
}

initTest();