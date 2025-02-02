// function which moves a overlay element on hero image
const trackMouseMovement = () => {
	// get elements form website
	const overlay = document.querySelector('.hero__image-overlay');
	const heroImage = document.querySelector('.hero__image');

	// listener on mouse move with event
	document.addEventListener('mousemove', (event) => {
		if (!overlay || !heroImage) return;

		// take clientX and clientY from event mouse movement
		const {clientX: mouseX, clientY: mouseY} = event;
		// getBoundingClientRect() returns info about heroImage position
		const heroImageRect = heroImage.getBoundingClientRect();

		// calc hero image position
		const centerX = heroImageRect.left + heroImageRect.width / 2;
		const centerY = heroImageRect.top + heroImageRect.height / 2;

		// calc difference between mouse and image center
		const deltaX = (mouseX - centerX) / heroImageRect.width;
		const deltaY = (mouseY - centerY) / heroImageRect.height;

        // movement overlay on width and height 
		overlay.style.transform = `translate(calc(-50% + ${deltaX * 2}rem), ${
			deltaY * 2
		}rem)`;
	});
};

// Eksport funkcji
export {trackMouseMovement};
