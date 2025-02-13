import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const titleScrollEffects = () => {
	const titles = document.querySelectorAll('.section__title');

	titles.forEach((title) => {
		const tween = gsap.fromTo(
			title,
			{x: '-100vw', opacity: 0},
			{x: 0, opacity: 1, duration: 3, ease: 'none'}
		);

		ScrollTrigger.create({
			trigger: title,
			start: 'top 85%',
			end: 'top 40%',
			animation: tween,
			scrub: 1,
			markers: false, // Wyłącz jeśli nie chcesz widzieć znaczników
			invalidateOnRefresh: true,
		});
	});
};

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

export {skillsScrollEffects, titleScrollEffects};
