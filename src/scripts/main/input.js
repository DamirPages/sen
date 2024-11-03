const inputs = document.querySelectorAll('.input, .textarea');
inputs.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value.length > 0) {
			input.classList.add('input--filled');
		} else {
			input.classList.remove('input--filled');
		}
	});
});