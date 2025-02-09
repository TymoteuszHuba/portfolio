// function which moves a overlay element on hero image
const trackMouseMovement = () => {
	// get elements form website
	const overlay = document.querySelector('.header__image-overlay');
	const heroImage = document.querySelector('.header__image');

	// checiking if elements exist to reduce errors
	if (!overlay || !heroImage) return;

    // settign the flag
	let isAnimating = false;

	// function contrnol mouse movement
	const handleMouseMove = (event) => {

		// effects will work when the screen size is over 768px
		if (window.innerWidth < 768) return;

		// take clientX and clientY from event mouse movement
		const {clientX: mouseX, clientY: mouseY} = event;
		// getBoundingClientRect() is build in funciton which returns info about heroImage position
		const heroImageRect = heroImage.getBoundingClientRect();

		// calc hero image position
		const centerX = heroImageRect.left + heroImageRect.width / 2;
		const centerY = heroImageRect.top + heroImageRect.height / 2;

		// calc difference between mouse and image center
		const deltaX = (mouseX - centerX) / heroImageRect.width;
		const deltaY = (mouseY - centerY) / heroImageRect.height;

		if (isAnimating) return;
		isAnimating = true;

		// build in function which optimizes animation fluidity
		requestAnimationFrame(() => {
			overlay.style.transform = `translate(calc(-50% + ${deltaX * 2}rem), ${
				deltaY * 2
			}rem)`;
			isAnimating = false;
		});
	};

	// listener on mouse move with event
	document.addEventListener('mousemove', handleMouseMove);
};

// Eksport funkcji
export {trackMouseMovement};
