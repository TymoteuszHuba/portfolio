import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const textList = document.querySelector('.header__text-list');
const overlay = document.querySelector('.header__overlay');
const header = document.querySelector('.header');

function animateHeaderText(words) {
	let currentIndex = 0;

	function addNewWord() {
		if (currentIndex >= words.length) return;

		const newWord = document.createElement('p');
		newWord.classList.add('header__text-dynamic');
		newWord.textContent = words[currentIndex];
		textList.appendChild(newWord);

		gsap.fromTo(
			newWord,
			{opacity: 0, y: 100},
			{opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'}
		);

		currentIndex++;
	}

	// Tworzymy ScrollTrigger dla headera
	ScrollTrigger.create({
		trigger: header,
		start: 'top-=50px top',
		end: 'top top-=500px',
		// scrub: true,
		pin: true,
		onUpdate: (self) => {
			// Gdy przewiniemy wystarczająco daleko, dodajemy kolejne słowo
			if (self.progress > currentIndex / words.length) {
				addNewWord();
			}

			// Po ostatnim tekście aktywujemy overlay
			if (self.progress > 0.95) {
				gsap.to(overlay, {
					y: '-100vh',
					duration: 1.5,
					ease: 'power3.out',
					onComplete: () => {
						ScrollTrigger.getById('header-scroll')?.kill(); // Wyłączamy pinning headera
					},
				});
			}
		},
		id: 'header-scroll',
	});
}

// Resetuje animację i usuwa stary ScrollTrigger
function resetHeaderAnimation() {
	if (textList) textList.innerHTML = ''; // Usuwamy stare słowa
	if (overlay) gsap.set(overlay, {y: '100vh'}); // Resetujemy overlay

	// Usuwamy istniejący ScrollTrigger
	ScrollTrigger.getById('header-scroll')?.kill();
}

export {animateHeaderText, resetHeaderAnimation};
