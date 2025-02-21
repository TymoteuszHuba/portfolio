import gsap from 'gsap';

const initProjectsEffects = () => {
	const projectSection = document.querySelector('#projects');
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					gsap.from('.projects__cards-card', {
						opacity: 0,
						y: 50,
						duration: 4,
						stagger: 0.1,
						ease: 'power2.out',
					});
					observer.unobserve(entry.target);
				}
			});
		},
		{threshold: 0.2}
	);

	observer.observe(projectSection);
};

export {initProjectsEffects};
