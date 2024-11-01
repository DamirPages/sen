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

const modalOverlays = document.querySelectorAll('.modal__overlay');

modalOverlays.forEach((modalOverlay) => {
	const modalSelector = modalOverlay.closest('.modal').getAttribute('id');
	modalOverlay.addEventListener('click', () => window.closeModal(`#${modalSelector}`));
});