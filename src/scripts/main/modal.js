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

modalOpenSelectors.forEach((modalOpenSelector) => {
	modalOpenSelector.addEventListener('click', () => {
		const modalSelector = modalOpenSelector.getAttribute('data-modal-open');
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