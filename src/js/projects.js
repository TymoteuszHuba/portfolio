import gsap from 'gsap';

const initProjectsEffects = () => {
	const projectCards = document.querySelectorAll('.projects__cards-card');

	if (projectCards.length) {
		gsap.from(projectCards, {
			opacity: 0,
			y: 50,
			duration: 1,
			stagger: 0.2,
			ease: 'power2.out',
		});
	}
};

export {initProjectsEffects};