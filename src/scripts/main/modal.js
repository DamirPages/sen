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

if(menuButton && mobileMenu) {
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