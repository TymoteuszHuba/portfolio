import gsap from "gsap";

// function which moves an overlay element on the hero image
const trackMouseMovement = () => {
	// get elements from the website
	const overlay = document.querySelector('.header__image-overlay');
	const heroImage = document.querySelector('.header__image');

	// checking if elements exist to reduce errors
	if (!overlay || !heroImage) return;

	// function controlling mouse movement
	const handleMouseMove = (event) => {
		// effects will work when the screen size is over 768px
		if (window.innerWidth < 768) return;

		// take clientX and clientY from event mouse movement
		const { clientX: mouseX, clientY: mouseY } = event;
		// getBoundingClientRect() is a built-in function that returns info about heroImage position
		const heroImageRect = heroImage.getBoundingClientRect();

		// calculate hero image position
		const centerX = heroImageRect.left + heroImageRect.width / 2;
		const centerY = heroImageRect.top + heroImageRect.height / 2;

		// calculate difference between mouse and image center
		const deltaX = (mouseX - centerX) / heroImageRect.width;
		const deltaY = (mouseY - centerY) / heroImageRect.height;

		// animate overlay movement using GSAP
		gsap.to(overlay, {
			x: `${deltaX * 2}rem`,
			y: `${deltaY * 2}rem`,
			duration: 0.3,
			ease: "power2.out"
		});
	};

	// listener on mouse move with event
	document.addEventListener('mousemove', handleMouseMove);
};

// Eksport funkcji
export {trackMouseMovement};
