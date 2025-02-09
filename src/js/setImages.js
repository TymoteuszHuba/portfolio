import logotype from '../images/logotype.webp';
import imgMeSrc from '../images/me_website.webp';
import overlayMe from '../images/overlay.webp';

// universal function setting images on website
const setImageSrc = (selector, src, isBackground = false) => {
	const element = document.querySelector(selector);
	if (element) {
		if (isBackground) {
			element.style.backgroundImage = `url(${src})`; // Ustawienie tła
		} else {
			element.src = src; // Ustawienie src dla <img>
		}
	} else {
		console.warn(`Cannot find element for ${selector}`);
	}
};

// initialize images on website
const initImages = () => {
	setImageSrc('.nav__logo-img', logotype);
	setImageSrc('.header__image-img', imgMeSrc);
	setImageSrc('.header__image-overlay', overlayMe, true);
};

export {initImages};
