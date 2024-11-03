let width = 288;    // Этим создадим ширину фотографии
let height = 0;

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startbutton = null;
let savebutton = null;
let videoStream = null;
let imgContainer = null;
let fileNameElement = null;
let fileSizeElement = null;
let fileFormatElement = null;
let resultFileInfo = null;
let deleteFileButton = null;
let finalFileInput = null;
const resultInput = document.querySelector('#check-input');
const uploadContainer = document.querySelector('.upload-file');


function startup() {
	video = document.getElementById('video');
	canvas = document.getElementById('canvas');
	photo = document.getElementById('photo');
	startbutton = document.getElementById('startbutton');
	savebutton = document.getElementById('savebutton');
	imgContainer = document.getElementById('imgContainer');
	fileNameElement = document.querySelector('#file-name');
	fileSizeElement = document.querySelector('#file-size');
	fileFormatElement = document.querySelector('#file-format');
	resultFileInfo = document.querySelector('#result-file-info');
	deleteFileButton = document.querySelector('.result__close');
	finalFileInput = document.querySelector('#final-result-file');

	if (!resultInput || !uploadContainer) return;

	startbutton.addEventListener('click', function (ev) {
		imgContainer.classList.add('hide');
		video.classList.remove('hide');
		navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
			.then(function (stream) {
				video.srcObject = stream;
				video.play();
				startbutton.classList.add('hide');
				savebutton.classList.remove('hide');
				videoStream = stream.getTracks()[0];
			})
			.catch(function (err) {
				console.log('An error occurred: ' + err);
			});
	});

	video.addEventListener('canplay', function (ev) {
		if (!streaming) {
			height = video.videoHeight / (video.videoWidth / width);

			video.setAttribute('width', width);
			video.setAttribute('height', height);
			canvas.setAttribute('width', width);
			canvas.setAttribute('height', height);
			streaming = true;
		}
	}, false);

	savebutton.addEventListener('click', function (ev) {
		takepicture();
		ev.preventDefault();
	}, false);

	resultInput.addEventListener('change', function (ev) {
		const file = ev.target.files[0];
		if (file) {
			const size = `${(Math.round(+file.size / 1024) / 1000).toFixed(2)}MB`;
			const format = file.name.split('.').pop().toUpperCase();
			const fileName = file.name;
			fileNameElement.textContent = fileName;
			fileSizeElement.textContent = size;
			fileFormatElement.textContent = format;

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener('load', function () {
				photo.setAttribute('src', reader.result);
			});
			imgContainer.classList.remove('hide');
			resultFileInfo.classList.remove('hide');

			getBase64SaveInInput(file, finalFileInput);
		} else {
			resultFileInfo.classList.add('hide');
			finalFileInput.value = '';
			imgContainer.classList.add('hide');
		}
	});

	deleteFileButton.addEventListener('click', function (ev) {
		resultInput.value = null;
		resultInput.dispatchEvent(new Event('change'));
		imgContainer.classList.add('hide');
	});

	clearphoto();
}

function clearphoto() {
	let context = canvas.getContext('2d');
	context.fillStyle = '#AAA';
	context.fillRect(0, 0, canvas.width, canvas.height);

	let data = canvas.toDataURL('image/png');
	photo.setAttribute('src', data);
	finalFileInput.value = '';
}

function takepicture() {
	let context = canvas.getContext('2d');
	if (width && height) {
		canvas.width = width;
		canvas.height = height;
		context.drawImage(video, 0, 0, width, height);

		let data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
		finalFileInput.value = data;
		fileNameElement.textContent = 'Фото с камеры';
		fileSizeElement.textContent = calc_image_size(data);
		fileFormatElement.textContent = 'PNG';
		resultFileInfo.classList.remove('hide');
	} else {
		clearphoto();
	}

	startbutton.classList.remove('hide');
	savebutton.classList.add('hide');
	videoStream.stop();
	video.classList.add('hide');
	imgContainer.classList.remove('hide');
}

function getBase64SaveInInput(file, input) {
	input.value = '';
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		input.value = reader.result;
	};
	reader.onerror = function (error) {
		console.log('Error: ', error);
	};
}

function calc_image_size(image) {
	let y = 1;
	if (image.endsWith('==')) {
		y = 2;
	}
	const x_size = (image.length * (3 / 4)) - y;
	const resultSize = Math.round(x_size / 1024);
	return `${(+resultSize / 1000).toFixed(2)}MB`;
    
}

startup();