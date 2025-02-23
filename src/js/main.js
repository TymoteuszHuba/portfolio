// main section of common funtions which use in each section

// GSAP animations for each section
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// function responsible for scrolling title for each section
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


export {gsap, ScrollTrigger, titleScrollEffects};