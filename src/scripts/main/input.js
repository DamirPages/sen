const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value.length > 0) {
			input.classList.add('input--filled');
		} else {
			input.classList.remove('input--filled');
		}
	});
});