import {gsap, ScrollTrigger} from './main.js';

const skillsScrollEffects = () => {
	// get elements from website
	const skillsTrack = document.querySelector('.skills__track');
	const mainSection = document.querySelector('.main');

	// set the width of skillsTrack
	let skillsWidth = skillsTrack.offsetWidth;
	let mainWidth = mainSection.offsetWidth; // Pobieramy szerokość main

	// calculate scroll size
	function getScrollAmount() {
		let skillsWidth = skillsTrack.scrollWidth;
		let mainWidth = mainSection.offsetWidth; // Pobieramy szerokość na nowo w razie zmiany rozmiaru okna
		return -(skillsWidth - mainWidth);
	}

	const tween = gsap.to(skillsTrack, {
		x: getScrollAmount,
		duration: 3,
		ease: 'none',
	});

	ScrollTrigger.create({
		trigger: '.skills',
		start: 'top +20%',
		end: () => `+=${getScrollAmount() * -1}`,
		pin: true,
		animation: tween,
		scrub: 1,
		invalidateOnRefresh: true,
		markers: false,
	});
};

export {skillsScrollEffects};
