import logotype from '../images/logotype.webp';
import imgMeSrc from '../images/me_website.webp';

// universal function setting images on website
const setImageSrc = (selector, src) => {
	const element = document.querySelector(selector);
	if (element) {
		element.src = src;
	} else {
		console.warn(`Cannot find img`);
	}
};

// initialize images on website
const initImages = () => {
	setImageSrc('.nav__logo-img', logotype);
	setImageSrc('.hero__image-img', imgMeSrc);
};

export {initImages};
