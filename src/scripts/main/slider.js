

const swiperContainer = document.querySelector('.products__container');

if (swiperContainer) {
	const buttonPrev = swiperContainer.querySelector('.swiper-prev');
	const buttonNext = swiperContainer.querySelector('.swiper-next');
	const swiperSlider = swiperContainer.querySelector('.mySwiper');

	var swiper = new Swiper(swiperSlider, {
		slidesPerView: 8,
		spaceBetween: 20,
		grid: {
			rows: 2,
		},
		navigation: {
			nextEl: buttonNext,
			prevEl: buttonPrev,
		},
		breakpoints: {
			992: {
				slidesPerView: 8,
			},
			641: {
				slidesPerView: 6,
			},
			200: {
				slidesPerView: 4,
			}
		}
	});
}

const moreButton = document.querySelector('.questions__more');
if (moreButton) {
	const showButton = moreButton.querySelector('.questions__more-show');
	const hideButton = moreButton.querySelector('.questions__more-hide');
	showButton.addEventListener('click', () => {
		document.querySelector('.questions').classList.add('opened');
	});
	hideButton.addEventListener('click', () => {
		document.querySelector('.questions').classList.remove('opened');
	});
}