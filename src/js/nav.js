import {gsap, ScrollToPlugin, ScrollTrigger} from './main.js';
import {setLanguage, getCurrentLang} from './lang.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// get elements from website
const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__links-link');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const navLogo = document.querySelector('.nav__logo');
const navLang = document.querySelector('.nav__controls-lang');
const langThemeContainer = document.querySelector('.nav__controls');
const navLangTexts = navLang.querySelectorAll('.nav__controls-lang--text');
const highlight = navLang.querySelector('.nav__controls-lang--highlight');
const sections = document.querySelectorAll('section');

// selectors for theme effects
const themeBtn = document.querySelector('.nav__controls-theme');
const sun = document.querySelector('.nav__controls-theme-sun');
const sunBeams = document.querySelectorAll(
	'.nav__controls-theme-sun-beams line'
);
const moonMaskCircle = document.querySelector(
	'.nav__controls-theme-mask circle'
);

// create a list of elements to blur
const blurElements = [main, navLogo, about, langThemeContainer, header];

// control hamburger menu for small screens
function setupHamburgerMenu() {
	// flag wich control the animateNavLinks
	let isMenuOpen = false;

	// setup nav-links based on the screen size
	function initializeMenu() {
		// reset gsap nav-links for screen size over 992px
		if (window.innerWidth > 992) {
			gsap.set(navLinks, {clearProps: 'all'});
		} else {
			gsap.set(navLinks, {x: '-100%'});
		}
	}

	// show/hide nav-links in hamburger menu with gsap
	function animateNavLinks(show) {
		if (show) {
			gsap.to(navLinks, {
				x: '0%',
				duration: 0.5,
				ease: 'power2.out',
				immediateRender: false,
			});

			gsap.fromTo(
				navItems,
				{x: '-100%', opacity: 0},
				{
					x: '0%',
					opacity: 1,
					duration: 0.5,
					ease: 'power2.out',
					// delay for each link
					stagger: 0.1,
				}
			);
		} else {
			gsap.to(navItems, {
				x: '-100%',
				opacity: 0,
				duration: 0.3,
				ease: 'power2.in',
				stagger: 0.05,
			});

			gsap.to(navLinks, {
				x: '-100%',
				duration: 0.4,
				ease: 'power2.in',
				onComplete: () => {
					gsap.set(navItems, {clearProps: 'all'});
				},
			});
		}
	}
	// function which toggle hamburger menu incl. nav-links
	function toggleMenu() {
		// changing the flag into true
		isMenuOpen = !isMenuOpen;

		// toggle menu for hamburger and nav-links, and blur
		hamburger.classList.toggle('nav__hamburger--active');
		navLinks.classList.toggle('nav__links--active');
		blurElements.forEach((element) => element?.classList.toggle('blur'));

		// invoke animateNavLinks with isMenuOpen as true
		animateNavLinks(isMenuOpen);

		// control the body scroll position
		if (navLinks.classList.contains('nav__links--active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	// remove styles for hamburger menu
	function closeMenu() {
		if (!isMenuOpen) return;
		isMenuOpen = false;

		hamburger.classList.remove('nav__hamburger--active');
		navLinks.classList.remove('nav__links--active');
		blurElements.forEach((element) => element?.classList.remove('blur'));

		animateNavLinks(false);

		// setup scroll on body
		document.body.style.overflow = '';
	}

	// listener on hamburger to active toggleMenu function
	hamburger.addEventListener('click', toggleMenu);

	// listener on each element from navItems to invoke closeMenu function
	navItems.forEach((item) => item.addEventListener('click', closeMenu));

	// control the size of widnow to close the menu
	window.addEventListener('resize', () => {
		initializeMenu();
		closeMenu();
	});

	// invoke menu initialize (for correct screen size)
	initializeMenu();
}

// control nav sticky efect
function navSticky() {
	const nav = document.querySelector('.nav');
	if (!nav) return;

	let initialPosition = nav.getBoundingClientRect().top + window.scrollY;
	let effectActivated = false; // Flaga kontrolująca aktywację efektu

	const updateSticky = () => {
		const currentScroll = window.scrollY;

		if (currentScroll > initialPosition + 50) {
			// Sprawdza, czy nawigacja została obniżona o 50px
			effectActivated = true;
		}

		if (effectActivated && currentScroll <= initialPosition) {
			nav.classList.remove('nav--effects');
			effectActivated = false; // Reset flagi
		} else if (effectActivated) {
			nav.classList.add('nav--effects');
		}
	};

	// Aktualizacja punktu odniesienia przy zmianie rozmiaru okna
	window.addEventListener('resize', () => {
		initialPosition = nav.getBoundingClientRect().top + window.scrollY;
	});

	window.addEventListener('scroll', updateSticky);
}

// control effects on nav link elements (for big screens)
function setupNavHighlight() {
	const highlightNav = () => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const headerBottom = about.offsetHeight;

		// remove all effects when user is in about
		if (scrollY < headerBottom) {
			navItems.forEach((link) => link.classList.remove('active'));
			return;
		}

		// get position for each section
		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const sectionTop = scrollY + rect.top;
			const sectionHeight = section.offsetHeight;

			// check if screen center is in correct section
			// if yes, then remove all effects and set for correct section
			if (
				scrollY >= sectionTop - windowHeight / 2 &&
				scrollY < sectionTop + sectionHeight - windowHeight / 2
			) {
				navItems.forEach((link) => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${section.id}`) {
						link.classList.add('active');
					}
				});
			}
		});
	};

	// setting highlight for nav elements just for scrrens above 991 px
	// also control the size of screen
	const handleResize = () => {
		if (window.innerWidth > 991) {
			window.addEventListener('scroll', highlightNav);
		} else {
			window.removeEventListener('scroll', highlightNav);
			navItems.forEach((link) => link.classList.remove('active'));
		}
	};

	// make sure that change screen
	window.addEventListener('resize', handleResize);
	handleResize();
}

// calc cursor position
function getCursorPercent(e, element) {
	const rect = element.getBoundingClientRect();
	const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
	const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
	return {xPercent, yPercent};
}

// control the highlight effect on hover language button
function initLangHighlight() {
	// checking if elements exists
	if (!navLang || !highlight) return;

	// listener on mouse enter to control the highlight effect
	navLang.addEventListener('mouseenter', (e) => {
		const {xPercent, yPercent} = getCursorPercent(e, navLang);
		gsap.set(highlight, {clipPath: `circle(10% at ${xPercent}% ${yPercent}%)`});
		gsap.to(highlight, {
			clipPath: `circle(150% at ${xPercent}% ${yPercent}%)`,
			duration: 0.5,
			ease: 'power2.out',
		});
	});

	// listener on mouse leave to control the highlight effect
	navLang.addEventListener('mouseleave', (e) => {
		const {xPercent, yPercent} = getCursorPercent(e, navLang);
		gsap.to(highlight, {
			clipPath: `circle(0% at ${xPercent}% ${yPercent}%)`,
			duration: 0.5,
			ease: 'power2.out',
		});
	});
}

// control the highlight effect on touch language button
function initLangTouchHighlight(event) {
	if (!navLang || !highlight) return;

	// checking if user using a touch screen devices
	const touch = event.changedTouches ? event.changedTouches[0] : event;
	// if not we leave function
	if (!touch) return;

	const {xPercent, yPercent} = getCursorPercent(touch, navLang);

	// animation of highlight effect on touch from the place where touch was made
	gsap.set(highlight, {clipPath: `circle(5% at ${xPercent}% ${yPercent}%)`});
	gsap.to(highlight, {
		clipPath: `circle(100% at 50% 50%)`,
		duration: 0.7,
		ease: 'power2.out',
		onComplete: () => {
			// back to the first touch position on change lang button
			gsap.to(highlight, {
				clipPath: `circle(0% at ${xPercent}% ${yPercent}%)`,
				duration: 0.5,
				ease: 'power2.out',
			});
		},
	});
}

// control the change of language description on lang button
function toggleLangButtonText(lang, animated = true) {
	if (!navLang) return;
	// loop for each lang button text
	navLangTexts.forEach((text) => {
		// check if the text isn't visible
		// we showing the text wich isn't correct set as language
		// if language is "pl" then button should show "en"
		const isVisible = text.getAttribute('data-lang') !== lang;

		if (animated) {
			gsap.to(text, {
				y: isVisible ? '0%' : '-150%',
				opacity: isVisible ? 1 : 0,
				duration: 0.3,
				ease: 'power2.out',
			});
		} else {
			text.style.opacity = isVisible ? 1 : 0;
			text.style.transform = isVisible ? 'translateY(0%)' : 'translateY(-100%)';
		}
	});
}

// Function control click on lang button and change language
function initLangClick() {
	if (!navLang || !navLangTexts.length) return;

	// listener on click navLang button
	navLang.addEventListener('click', (e) => {
		e.preventDefault();

		let currentLang = getCurrentLang();
		let newLang = currentLang === 'pl' ? 'en' : 'pl';
		setLanguage(newLang);

		// invoke a function which changes text on  language button
		toggleLangButtonText(newLang, true);

		// if screen is touchable then
		if ('ontouchstart' in window) {
			// invoke a function which control the highlight effect on touch
			initLangTouchHighlight(e);
		}
	});
}

// change icon of theme button
function initIconTheme() {
	// key for save and read theme from local storage
	const storageKey = 'theme-preference';
	// logic flag checking if page was load first time
	let initialLoad = true;

	// theme preference setup
	const getColorPreference = () => 'dark';

	// save theme preferences in local storage
	const setPreference = () => {
		localStorage.setItem(storageKey, theme.value);
		// changing theme website correct with setup theme
		reflectPreference();
	};

	// change theme and animate click on button effects by gsap
	const reflectPreference = () => {
		// setup data-theme and aria-label
		document.documentElement.setAttribute('data-theme', theme.value);
		themeBtn.setAttribute('aria-label', theme.value);

		const tl = gsap.timeline();
		const isDark = theme.value === 'dark';

		// Inverted logic for icons:
		// - Sun visible in dark mode
		// - Moon visible in light mode
		const sunScale = isDark ? 1 : 1.5; // Sun scales down in light mode
		const sunBeamsOpacity = isDark ? 1 : 0; // Beams visible in dark mode
		const moonMaskScale = isDark ? 0 : 1.5; // Moon scales up in light mode

		if (initialLoad) {
			tl.set(sun, {scale: sunScale, transformOrigin: 'center center'})
				.set(sunBeams, {opacity: sunBeamsOpacity})
				.set(moonMaskCircle, {scale: moonMaskScale});
			initialLoad = false;
		} else {
			tl.to(sun, {
				scale: sunScale,
				duration: 0.2,
				transformOrigin: 'center center',
			})
				.to(sunBeams, {opacity: sunBeamsOpacity, duration: 0.1}, '-=0.2')
				.to(moonMaskCircle, {scale: moonMaskScale, duration: 0.2}, '-=0.2');
		}
	};

	// initialize theme
	const theme = {value: getColorPreference()};
	// invoke reflectPreference
	reflectPreference();

	// listener on click event which controls theme change
	themeBtn.addEventListener('click', () => {
		theme.value = theme.value === 'light' ? 'dark' : 'light';
		setPreference();
	});

	// synchronize theme with system preferences
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', ({matches: isDark}) => {
			theme.value = isDark ? 'dark' : 'light';
			setPreference();
		});
}

export {
	setupHamburgerMenu,
	navSticky,
	setupNavHighlight,
	initLangHighlight,
	initLangClick,
	toggleLangButtonText,
	initIconTheme,
};
