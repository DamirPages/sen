window.closeModal = (modalSelector) => {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove('active');
	document.body.style.overflow = '';
};

window.openModal = (modalSelector) => {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('active');
	document.body.style.overflow = 'hidden';
};

const modalOverlays = document.querySelectorAll('.modal__overlay, [data-modal-close]');
const modalOpenSelectors = document.querySelectorAll('[data-modal-open]');
const modalChangeSelectors = document.querySelectorAll('[data-change-modal]');

modalOpenSelectors.forEach((modalOpenSelector) => {
	modalOpenSelector.addEventListener('click', () => {
		const modalSelector = modalOpenSelector.getAttribute('data-modal-open');
		window.openModal(modalSelector);
	});
});

modalChangeSelectors.forEach((modalOpenSelector) => {
	modalOpenSelector.addEventListener('click', () => {
		const modalSelector = modalOpenSelector.getAttribute('data-change-modal');
		console.log(modalOpenSelector);
		const modalCurrentSelector = modalOpenSelector.closest('.modal').getAttribute('id');
		window.closeModal(`#${modalCurrentSelector}`);
		window.openModal(modalSelector);
	});
});

modalOverlays.forEach((modalOverlay) => {
	const modalSelector = modalOverlay.closest('.modal').getAttribute('id');
	modalOverlay.addEventListener('click', () => window.closeModal(`#${modalSelector}`));
});

const links = document.querySelectorAll('a');
links.forEach((link) => {
	link.addEventListener('click', (event) => {
		if (link.getAttribute('href') === '#') {
			event.preventDefault();
		}
	});
});

const modalCookie = document.querySelector('.modal-cookie');
if (modalCookie) {
	const cookieClose = document.querySelectorAll('[data-cookie-close]');
	const cookieAccept = document.querySelector('[data-cookie-accept]');

	cookieClose.forEach((close) => {
		close.addEventListener('click', () => {
			modalCookie.classList.remove('active');
		});
	});

	cookieAccept.addEventListener('click', () => {
		localStorage.setItem('cookieAcept', '1');
		modalCookie.classList.remove('active');
	});

	var cookieAcept = localStorage.getItem('cookieAcept');
	if (!cookieAcept) {
		modalCookie.classList.add('active');
	}
}

const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
	menuButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active');
	});
	const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

	mobileMenuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('active');
		});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	let phoneInputs = document.querySelectorAll('input[data-tel-input]');

	let getInputNumbersValue = function (input) {
		// Return stripped input value — just numbers
		return input.value.replace(/\D/g, '');
	};

	let onPhonePaste = function (e) {
		let input = e.target,
			inputNumbersValue = getInputNumbersValue(input);
		let pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			let pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
				// formatting will be in onPhoneInput handler
				input.value = inputNumbersValue;
				return;
			}
		}
	};

	let onPhoneInput = function (e) {
		let input = e.target,
			inputNumbersValue = getInputNumbersValue(input),
			{ selectionStart } = input,
			formattedInputValue = '';

		if (!inputNumbersValue) {
			return (input.value = '');
		}

		if (input.value.length != selectionStart) {
			// Editing in the middle of input, not last symbol
			if (e.data && /\D/g.test(e.data)) {
				// Attempt to input non-numeric symbol
				input.value = inputNumbersValue;
			}
			return;
		}

		if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
			let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
			formattedInputValue = input.value = firstSymbols + ' ';
			if (inputNumbersValue.length > 1) {
				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
		}
		input.value = formattedInputValue;
	};
	let onPhoneKeyDown = function (e) {
		// Clear input after remove last symbol
		let inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode == 8 && inputValue.length == 1) {
			e.target.value = '';
		}
	};
	for (let phoneInput of phoneInputs) {
		phoneInput.addEventListener('keydown', onPhoneKeyDown);
		phoneInput.addEventListener('input', onPhoneInput, false);
		phoneInput.addEventListener('paste', onPhonePaste, false);
	}
});

const headerButton = document.querySelector('.scroll-button');

if (headerButton) {
	document.addEventListener('scroll', () => {
		if (window.scrollY > window.innerHeight) {
			headerButton.classList.add('active');
		} else {
			headerButton.classList.remove('active');
		}
	});
}

const validateForms = document.querySelectorAll('[data-disabled-button-form]');

validateForms.forEach((form) => {
	const button = form.querySelector('[data-submit-button]');
	const inputs = form.querySelectorAll('[data-disabled-button-input]');
	const checkboxs = form.querySelectorAll('[data-disabled-button-checkbox]');

	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			const someInputFilled = Array.from(inputs).every((input) => input.value.length > 0);
			const someCheckboxChecked = Array.from(checkboxs).every((checkbox) => checkbox.checked);

			if (someInputFilled && someCheckboxChecked) {
				button.classList.remove('disabled');
			} else {
				button.classList.add('disabled');
			}
		});
	});

	checkboxs.forEach((checkbox) => {
		checkbox.addEventListener('change', () => {
			const someInputFilled = Array.from(inputs).every((input) => input.value.length > 0);
			const someCheckboxChecked = Array.from(checkboxs).every((checkbox) => checkbox.checked);

			if (someInputFilled && someCheckboxChecked) {
				button.classList.remove('disabled');
			} else {
				button.classList.add('disabled');
			}
		});
	});
});

const documentlinks = document.querySelectorAll('a');

documentlinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		if (link.getAttribute('href').startsWith('#')) {
			event.preventDefault();
			const anchorTargetID = link.getAttribute('href').substring(1);
			if (anchorTargetID) {
				const $anchorTarget = document.getElementById(anchorTargetID);
				$anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	});
});

window.addEventListener('load', () => {
	document.body.classList.add('load');
});

const windowsCloseButtons = document.querySelectorAll('[data-window-close]');

windowsCloseButtons.forEach((button) => {
	button.addEventListener('click', () => {
		history.back();
	});
});